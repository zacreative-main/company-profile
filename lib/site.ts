/**
 * Centralized site configuration and canonical URL resolver.
 * Ensures https://zacreative.id is always used in production, avoiding localhost leaks.
 */
export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://zacreative.id"
).replace(/\/+$/, "");

export const SITE_DOMAIN = "zacreative.id";

