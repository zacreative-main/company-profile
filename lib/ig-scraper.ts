import { putPublicMedia } from "@/lib/blob-storage";

const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

function decodeHtmlAndJsonUrl(raw: string): string {
  return raw
    .replace(/\\u0026/gi, "&")
    .replace(/\\x26/gi, "&")
    .replace(/\\\//g, "/")
    .replace(/&amp;/gi, "&")
    .trim();
}

export interface ExtractedIgMedia {
  imageUrl: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
}

/**
 * Selects the best uncropped image URL from an `<img class="EmbeddedMediaImage" ...>` tag.
 * Prefers the 1080w uncropped entry in `srcset` (avoiding `stp=c...` square crops),
 * falling back to the primary `src` attribute.
 */
function extractBestImageFromEmbedTag(imgTagHtml: string): string | null {
  const srcsetMatch = imgTagHtml.match(/\bsrcset="([^"]+)"/i);
  if (srcsetMatch?.[1]) {
    const candidates = srcsetMatch[1]
      .split(",")
      .map((entry) => entry.trim())
      .map((entry) => {
        const parts = entry.split(/\s+/);
        const url = decodeHtmlAndJsonUrl(parts[0] || "");
        const width = parseInt((parts[1] || "").replace(/[^\d]/g, ""), 10) || 0;
        return { url, width };
      })
      .filter((c) => c.url.startsWith("http"));

    // Filter out square-cropped variants (e.g. stp=c0.296.2362.2362a_...)
    const uncropped = candidates.filter(
      (c) => !/[?&]stp=c\d+(\.\d+)+a?_/i.test(c.url)
    );

    const pool = uncropped.length > 0 ? uncropped : candidates;
    const preferred1080 = pool.find((c) => c.width === 1080);
    if (preferred1080) return preferred1080.url;

    const sorted = [...pool].sort((a, b) => b.width - a.width);
    if (sorted[0]) return sorted[0].url;
  }

  const srcMatch = imgTagHtml.match(/\bsrc="([^"]+)"/i);
  if (srcMatch?.[1]) {
    const cleaned = decodeHtmlAndJsonUrl(srcMatch[1]);
    if (cleaned.startsWith("http")) return cleaned;
  }

  return null;
}

/**
 * Layer 1: Extract high-res uncropped image URL directly from Instagram's public
 * /embed/captioned/ or /embed/ HTML endpoint (no API token required).
 * Uses Sec-Fetch-Dest: iframe so Instagram serves the SSR embed markup with EmbeddedMediaImage.
 */
async function extractFromInstagramEmbed(
  shortcode: string,
  variant: "captioned" | "plain"
): Promise<ExtractedIgMedia | null> {
  const endpoint =
    variant === "captioned"
      ? `https://www.instagram.com/p/${encodeURIComponent(shortcode)}/embed/captioned/`
      : `https://www.instagram.com/p/${encodeURIComponent(shortcode)}/embed/`;

  const res = await fetch(endpoint, {
    headers: {
      "User-Agent": BROWSER_UA,
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9,id;q=0.8",
      Referer: "https://www.instagram.com/",
      "Sec-Fetch-Dest": "iframe",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "cross-site",
    },
    cache: "no-store",
  });

  if (!res.ok) return null;
  const html = await res.text();
  if (!html) return null;

  const isVideo =
    /<div[^>]*class="[^"]*EmbeddedMediaVideo/i.test(html) ||
    html.includes('"is_video":true') ||
    html.includes('\\"is_video\\":true');

  // 1. Primary: <img class="EmbeddedMediaImage" ... />
  const imgTagMatch = html.match(
    /<img[^>]*class="[^"]*EmbeddedMediaImage[^"]*"[^>]*>/i
  );

  const isCarousel =
    /<div[^>]*class="[^"]*EmbedSidecar/i.test(html) ||
    html.includes("GraphSidecar") ||
    Boolean(
      imgTagMatch?.[0] &&
        (imgTagMatch[0].includes("IkNBUk9VU0VMX0lURU0") ||
          imgTagMatch[0].includes("Q0FST1VTRUxfSVRFTS"))
    );

  const mediaType: ExtractedIgMedia["mediaType"] = isCarousel
    ? "CAROUSEL_ALBUM"
    : isVideo
      ? "VIDEO"
      : "IMAGE";

  if (imgTagMatch?.[0]) {
    const bestUrl = extractBestImageFromEmbedTag(imgTagMatch[0]);
    if (bestUrl) {
      return { imageUrl: bestUrl, mediaType };
    }
  }

  // 2. Secondary: Embedded JSON display_url or thumbnail_src inside embed script
  const jsonUrlMatch =
    html.match(/\\?"display_url\\?"\s*:\s*\\?"(https?:[^"\\]+(?:\\.[^"\\]*)*)\\?"/i) ||
    html.match(/\\?"thumbnail_src\\?"\s*:\s*\\?"(https?:[^"\\]+(?:\\.[^"\\]*)*)\\?"/i);

  if (jsonUrlMatch?.[1]) {
    const cleaned = decodeHtmlAndJsonUrl(jsonUrlMatch[1]);
    if (cleaned.startsWith("http")) {
      return { imageUrl: cleaned, mediaType };
    }
  }

  return null;
}

/**
 * Layer 2: Direct OpenGraph meta tag extraction using crawler User-Agent
 * (no third-party rate limit).
 */
async function extractFromDirectOpenGraph(
  permalink: string
): Promise<ExtractedIgMedia | null> {
  const res = await fetch(permalink, {
    headers: {
      "User-Agent": "TelegramBot (like TwitterBot)",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    cache: "no-store",
  });
  if (!res.ok) return null;

  const html = await res.text();
  if (!html) return null;

  const ogMatch =
    html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/i) ||
    html.match(/<meta[^>]*content="([^"]+)"[^>]*property="og:image"/i);

  const rawUrl = ogMatch?.[1];
  if (
    !rawUrl ||
    !rawUrl.startsWith("http") ||
    rawUrl.includes("static.cdninstagram.com/rsrc.php")
  ) {
    return null;
  }

  const cleaned = decodeHtmlAndJsonUrl(rawUrl);
  const isCarousel =
    cleaned.includes("Q0FST1VTRUxfSVRFTS") ||
    cleaned.includes("IkNBUk9VU0VMX0lURU0");

  return {
    imageUrl: cleaned,
    mediaType: permalink.includes("/reel/")
      ? "VIDEO"
      : isCarousel
        ? "CAROUSEL_ALBUM"
        : "IMAGE",
  };
}

/**
 * Layer 3: Automatic fallback via Microlink OpenGraph resolver for Reels/posts
 * where datacenter IP hits an embed challenge.
 */
async function extractFromMicrolink(
  permalink: string
): Promise<ExtractedIgMedia | null> {
  const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(permalink)}`;
  const res = await fetch(apiUrl, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });
  if (!res.ok) return null;

  const payload = (await res.json()) as {
    status?: string;
    data?: {
      image?: { url?: string };
      logo?: { url?: string };
    };
  };

  const imgUrl = payload?.data?.image?.url;
  if (
    !imgUrl ||
    !imgUrl.startsWith("http") ||
    imgUrl.includes("static.cdninstagram.com/rsrc.php")
  ) {
    return null;
  }

  const isCarousel =
    imgUrl.includes("Q0FST1VTRUxfSVRFTS") ||
    imgUrl.includes("IkNBUk9VU0VMX0lURU0");

  return {
    imageUrl: decodeHtmlAndJsonUrl(imgUrl),
    mediaType: permalink.includes("/reel/")
      ? "VIDEO"
      : isCarousel
        ? "CAROUSEL_ALBUM"
        : "IMAGE",
  };
}

/**
 * Resolves the thumbnail from an Instagram post/reel shortcode with automatic retries,
 * downloads the image binary, and streams it permanently into Vercel Blob.
 */
export async function fetchAndUploadInstagramThumbnail(params: {
  itemId: string;
  shortcode: string;
  permalink: string;
}): Promise<{ blobUrl: string; mediaType: ExtractedIgMedia["mediaType"] }> {
  const { itemId, shortcode, permalink } = params;

  let extracted: ExtractedIgMedia | null = null;

  // Attempt 1: /embed/captioned/
  try {
    extracted = await extractFromInstagramEmbed(shortcode, "captioned");
  } catch (err) {
    console.warn("[IG Worker] Embed captioned attempt failed:", err);
  }

  // Attempt 2: /embed/
  if (!extracted) {
    try {
      extracted = await extractFromInstagramEmbed(shortcode, "plain");
    } catch (err) {
      console.warn("[IG Worker] Embed plain attempt failed:", err);
    }
  }

  // Attempt 3: Direct OpenGraph meta tag fallback
  if (!extracted) {
    try {
      extracted = await extractFromDirectOpenGraph(permalink);
    } catch (err) {
      console.warn("[IG Worker] Direct OpenGraph fallback failed:", err);
    }
  }

  // Attempt 4: Microlink OpenGraph API fallback
  if (!extracted) {
    try {
      extracted = await extractFromMicrolink(permalink);
    } catch (err) {
      console.warn("[IG Worker] Microlink fallback failed:", err);
    }
  }

  if (!extracted) {
    throw new Error(
      "Tidak dapat mengambil thumbnail dari link Instagram tersebut. Pastikan akun/postingan bersifat publik."
    );
  }

  // Download image stream from Instagram CDN (prioritizing global scontent.cdninstagram.com
  // if a regional edge hostname such as instagram.*.fna.fbcdn.net is returned)
  const cdnUrlCandidates: string[] = [];
  try {
    const parsedUrl = new URL(extracted.imageUrl);
    if (parsedUrl.hostname !== "scontent.cdninstagram.com") {
      const globalUrl = new URL(extracted.imageUrl);
      globalUrl.hostname = "scontent.cdninstagram.com";
      cdnUrlCandidates.push(globalUrl.toString());
    }
  } catch {
    // Ignore URL parse error
  }
  cdnUrlCandidates.push(extracted.imageUrl);

  let imageRes: Response | null = null;
  let lastStatus = 0;

  for (const candidateUrl of cdnUrlCandidates) {
    try {
      const res = await fetch(candidateUrl, {
        headers: {
          "User-Agent": BROWSER_UA,
          Referer: "https://www.instagram.com/",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        },
        cache: "no-store",
      });
      lastStatus = res.status;
      if (res.ok && res.body) {
        imageRes = res;
        break;
      }
    } catch (err) {
      console.warn("[IG Worker] CDN candidate download failed:", err);
    }
  }

  if (!imageRes || !imageRes.ok || !imageRes.body) {
    throw new Error(
      `Gagal mengunduh gambar dari CDN Instagram (HTTP ${lastStatus || "Network Error"}).`
    );
  }

  const contentType = imageRes.headers.get("content-type") || "image/jpeg";
  const ext = contentType.includes("webp")
    ? "webp"
    : contentType.includes("png")
      ? "png"
      : "jpg";

  const blobUrl = await putPublicMedia(
    `portfolio/${itemId}.${ext}`,
    imageRes.body,
    contentType
  );

  return {
    blobUrl,
    mediaType: extracted.mediaType,
  };
}
