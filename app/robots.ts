import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/favicon.ico", "/icon.png", "/apple-icon.png", "/images/"],
        disallow: [
          "/admin",
          "/admin/",
          "/admin/*",
          "/api",
          "/api/",
          "/api/*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/favicon.ico", "/icon.png", "/apple-icon.png", "/images/"],
        disallow: [
          "/admin/",
          "/admin/*",
          "/api/",
          "/api/*",
        ],
      },
      {
        userAgent: ["Googlebot-Image", "Google-Favicon"],
        allow: ["/", "/favicon.ico", "/icon.png", "/apple-icon.png", "/images/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
