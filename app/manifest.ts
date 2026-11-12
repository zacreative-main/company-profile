import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zacreative - Jasa Desain Layout Buku & Presentasi",
    short_name: "Zacreative",
    description:
      "Jasa desain layout buku, laporan tahunan, presentasi PowerPoint, dan poster infografis profesional.",
    start_url: "/",
    display: "standalone",
    background_color: "#070d18",
    theme_color: "#070d18",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

