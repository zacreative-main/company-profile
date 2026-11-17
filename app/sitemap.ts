import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${SITE_URL}/images/og-thumbnail.jpg`,
        `${SITE_URL}/images/og-image.jpg`,
        `${SITE_URL}/icon.png`,
      ],
    },
    {
      url: `${SITE_URL}/portofolio`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
      images: [`${SITE_URL}/images/og-thumbnail.jpg`],
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
