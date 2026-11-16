import type { MetadataRoute } from "next";
import { SITE_COPY } from "@/lib/copywriting";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_COPY.titleDefault,
    short_name: "Zacreative",
    description: SITE_COPY.description,
    start_url: "/",
    display: "standalone",
    background_color: "#070d18",
    theme_color: "#070d18",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}

