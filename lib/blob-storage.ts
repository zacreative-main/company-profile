import { del, get, put, type BlobAccessType } from "@vercel/blob";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const LOCAL_BLOB_DIR = path.join(process.cwd(), ".local-blob");

// Remember which store access mode ("private" | "public") succeeded in this process
// so subsequent reads/writes use the right mode on the first attempt.
let cachedAccessMode: BlobAccessType = "private";

export function hasVercelBlobToken(): boolean {
  return Boolean(
    process.env.BLOB_READ_WRITE_TOKEN?.trim() ||
      (process.env.VERCEL_OIDC_TOKEN?.trim() &&
        process.env.BLOB_STORE_ID?.trim())
  );
}

function getAccessTryOrder(): [BlobAccessType, BlobAccessType] {
  return cachedAccessMode === "private"
    ? ["private", "public"]
    : ["public", "private"];
}

/**
 * Reads raw bytes from Vercel Blob (origin storage, bypassing CDN cache)
 * supporting both Private and Public Vercel Blob stores, with a local dev
 * fallback when BLOB_READ_WRITE_TOKEN is not configured locally.
 */
export async function readBlobBytes(pathname: string): Promise<Buffer | null> {
  if (hasVercelBlobToken()) {
    const [firstAccess, secondAccess] = getAccessTryOrder();
    for (const access of [firstAccess, secondAccess]) {
      try {
        const result = await get(pathname, {
          access,
          useCache: false,
        });
        if (result && result.statusCode === 200 && result.stream) {
          cachedAccessMode = access;
          const arrayBuf = await new Response(result.stream).arrayBuffer();
          return Buffer.from(arrayBuf);
        }
      } catch {
        // Try fallback access mode
      }
    }
    return null;
  }

  // Local dev filesystem fallback (only when BLOB_READ_WRITE_TOKEN is absent)
  try {
    const filePath = path.join(LOCAL_BLOB_DIR, pathname);
    return await readFile(filePath);
  } catch {
    return null;
  }
}

/**
 * Writes raw string/buffer data to a deterministic pathname in Vercel Blob
 * with overwrite enabled, automatically supporting both Private and Public stores.
 */
export async function writeBlobData(
  pathname: string,
  body: string | Buffer,
  contentType: string
): Promise<string> {
  if (hasVercelBlobToken()) {
    const [firstAccess, secondAccess] = getAccessTryOrder();
    try {
      const res = await put(pathname, body, {
        access: firstAccess,
        allowOverwrite: true,
        addRandomSuffix: false,
        contentType,
        cacheControlMaxAge: 60,
      });
      cachedAccessMode = firstAccess;
      return res.url;
    } catch {
      const res = await put(pathname, body, {
        access: secondAccess,
        allowOverwrite: true,
        addRandomSuffix: false,
        contentType,
        cacheControlMaxAge: 60,
      });
      cachedAccessMode = secondAccess;
      return res.url;
    }
  }

  const filePath = path.join(LOCAL_BLOB_DIR, pathname);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, body);
  return `local://${pathname}`;
}

/**
 * Streams or writes public media (portfolio thumbnails) to Vercel Blob
 * (or public/.local-media in local dev fallback without token).
 * When the store is configured with private access, returns `/api/media/<pathname>`
 * so browsers can render the image through our cached public media proxy route.
 */
export async function putPublicMedia(
  pathname: string,
  body: ReadableStream<Uint8Array> | Buffer,
  contentType: string
): Promise<string> {
  const buffer = Buffer.isBuffer(body)
    ? body
    : Buffer.from(await new Response(body).arrayBuffer());

  if (hasVercelBlobToken()) {
    const [firstAccess, secondAccess] = getAccessTryOrder();
    try {
      const res = await put(pathname, buffer, {
        access: firstAccess,
        addRandomSuffix: true,
        contentType,
      });
      cachedAccessMode = firstAccess;
      if (
        firstAccess === "private" ||
        res.url.includes(".private.blob.vercel-storage.com")
      ) {
        return `/api/media/${res.pathname}`;
      }
      return res.url;
    } catch {
      const res = await put(pathname, buffer, {
        access: secondAccess,
        addRandomSuffix: true,
        contentType,
      });
      cachedAccessMode = secondAccess;
      if (
        secondAccess === "private" ||
        res.url.includes(".private.blob.vercel-storage.com")
      ) {
        return `/api/media/${res.pathname}`;
      }
      return res.url;
    }
  }

  // Local dev fallback: save under public/.local-media so next/image can render it
  const relPublicPath = path.posix.join(".local-media", pathname);
  const absPublicPath = path.join(process.cwd(), "public", relPublicPath);
  await mkdir(path.dirname(absPublicPath), { recursive: true });
  await writeFile(absPublicPath, buffer);
  return `/${relPublicPath}`;
}

/**
 * Reads a media stream from Vercel Blob (for `/api/media/[...pathname]`).
 */
export async function readBlobMediaStream(pathname: string): Promise<{
  stream: ReadableStream<Uint8Array>;
  contentType: string;
} | null> {
  if (hasVercelBlobToken()) {
    const [firstAccess, secondAccess] = getAccessTryOrder();
    for (const access of [firstAccess, secondAccess]) {
      try {
        const result = await get(pathname, {
          access,
          useCache: true,
        });
        if (result && result.statusCode === 200 && result.stream) {
          cachedAccessMode = access;
          return {
            stream: result.stream,
            contentType: result.blob.contentType || "image/jpeg",
          };
        }
      } catch {
        // Try fallback access mode
      }
    }
  }
  return null;
}

/**
 * Deletes a previously uploaded media URL or `/api/media/...` pathname from Vercel Blob.
 */
export async function deletePublicMedia(url?: string | null): Promise<void> {
  if (!url) return;

  if (hasVercelBlobToken()) {
    if (url.includes("blob.vercel-storage.com")) {
      try {
        await del(url);
      } catch (err) {
        console.error("[BlobStorage] Failed deleting media:", err);
      }
      return;
    }

    if (url.startsWith("/api/media/")) {
      const blobPathname = url.slice("/api/media/".length);
      if (blobPathname) {
        try {
          await del(blobPathname);
        } catch (err) {
          console.error("[BlobStorage] Failed deleting private media:", err);
        }
      }
      return;
    }
  }

  if (url.startsWith("/.local-media/")) {
    try {
      const absPath = path.join(process.cwd(), "public", url);
      await rm(absPath, { force: true });
    } catch {
      // Ignore cleanup errors in local dev
    }
  }
}
