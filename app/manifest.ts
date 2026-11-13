import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zacreative - Jasa Desain Grafis, Layout Buku, Poster & Power Point",
    short_name: "Zacreative",
    description:
      "Jasa Desain Grafis profesional: Jasa Desain Buku, Jasa Desain Layout Buku, Laporan, Jasa Desain Poster Infografis, dan Jasa Desain Power Point.",
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

