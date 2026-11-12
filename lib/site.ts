/**
 * Centralized site configuration and canonical URL resolver.
 * Ensures https://zacreative.id is always used in production, avoiding localhost leaks
 * and gracefully handling values without a protocol scheme (e.g. "zacreative.id").
 */
function resolveSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || "https://zacreative.id")
    .trim()
    .replace(/^['"]+|['"]+$/g, "")
    .replace(/\/+$/, "");

  if (!raw) return "https://zacreative.id";

  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return "https://zacreative.id";
  }
}

export const SITE_URL: string = resolveSiteUrl();

export const SITE_DOMAIN = "zacreative.id";
