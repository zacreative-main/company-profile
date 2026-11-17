import type { PackageTier, ServicePackage } from "@/lib/data/packages";
import type { InstagramPost } from "@/lib/data/instagram-fallback";

export type Locale = "id" | "en";
export const DEFAULT_LOCALE: Locale = "id";

/* ============================================================================
 * 1. METADATA SEO & KONTAK UTAMA (ID - DEFAULT)
 * ============================================================================ */
export const SITE_COPY = {
  name: "Zacreative Studio",
  shortName: "Zacreative",
  titleDefault: "Zacreative - Desain Layout Buku & Presentasi",
  titleTemplate: "%s | Zacreative",
  description:
    "Jasa desain layout buku, laporan, presentasi, poster infografis, dan kebutuhan desain layout lainnya.",
  twitterDescription:
    "Jasa desain layout buku, laporan, presentasi, poster infografis, dan kebutuhan desain layout lainnya.",
  schemaDescription:
    "Zacreative adalah jasa desain layout buku, laporan, presentasi, poster infografis, dan kebutuhan desain layout lainnya.",
  keywords: [
    "Jasa Desain Grafis",
    "Jasa Desain Buku",
    "Jasa Desain Layout Buku",
    "Jasa Desain Poster",
    "Jasa Desain Power Point",
    "Jasa Desain PowerPoint",
    "Zacreative",
    "zacreative.id",
    "jasa layout buku",
    "layout buku",
    "desain buku",
    "layout buku ber-isbn",
    "perwajahan buku",
    "layout laporan",
    "desain laporan tahunan",
    "annual report design",
    "laporan keberlanjutan esg",
    "jasa desain presentasi",
    "desain presentasi ppt",
    "jasa pitch deck",
    "desain poster infografis",
    "editorial design indonesia",
    "layout buku jakarta",
  ],
  contact: {
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6282128919491",
    whatsappDisplay: "+62 821 2891 9491",
    instagramHandle: "zacreative.id",
    instagramUrl: "https://www.instagram.com/zacreative.id",
    linkedinUrl: "",
    email: "zacreative.id@gmail.com",
  },
  defaultWhatsAppMessage:
    "Halo Zacreative, saya ingin berkonsultasi mengenai layanan desain. Boleh dibantu?",
  floatingWhatsApp: {
    label: "Chat WhatsApp",
    ariaLabel: "Chat konsultasi via WhatsApp",
  },
} as const;

export const SITE_COPY_EN = {
  ...SITE_COPY,
  titleDefault: "Zacreative - Book Layout & Presentation Design",
  description:
    "Design services for book layouts, reports, presentations, infographic posters, and other layout design needs.",
  twitterDescription:
    "Design services for book layouts, reports, presentations, infographic posters, and other layout design needs.",
  schemaDescription:
    "Zacreative is a design service for book layouts, reports, presentations, infographic posters, and other layout design needs.",
  defaultWhatsAppMessage:
    "Hello Zacreative, I would like to consult regarding design services. Could you assist me?",
  floatingWhatsApp: {
    label: "Chat WhatsApp",
    ariaLabel: "Consultation chat via WhatsApp",
  },
} as const;

/* ============================================================================
 * 2. NAVBAR (MENU ATAS)
 * ============================================================================ */
export const NAVBAR_COPY = {
  logoAlt: "Zacreative",
  links: [
    { label: "Paket", href: "/#paket" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Cara Order", href: "/#cara-kerja" },
    { label: "FAQ", href: "/#faq" },
  ],
  ctaLabel: "Chat WhatsApp",
  mobileMenuOpenAria: "Buka Menu",
  mobileMenuCloseAria: "Tutup Menu",
} as const;

export const NAVBAR_COPY_EN = {
  logoAlt: "Zacreative",
  links: [
    { label: "Packages", href: "/#paket" },
    { label: "Portfolio", href: "/portofolio" },
    { label: "How to Order", href: "/#cara-kerja" },
    { label: "FAQ", href: "/#faq" },
  ],
  ctaLabel: "Chat WhatsApp",
  mobileMenuOpenAria: "Open Menu",
  mobileMenuCloseAria: "Close Menu",
} as const;

/* ============================================================================
 * 3. HERO SECTION (BAGIAN PEMBUKA UTAMA)
 * ============================================================================ */
export const HERO_COPY = {
  heading: "Shaping words\ninto stunning works",
  description:
    "Zacreative adalah jasa desain layout buku, laporan, presentasi,\nposter infografis, dan kebutuhan desain layout lainnya",
  primaryCtaLabel: "Konsultasi & Pemesanan",
  secondaryPaketLabel: "Lihat Paket",
  secondaryPortfolioLabel: "Lihat Portofolio",
  onlineStatus: "",
  stats: [
    { value: "80+", label: "Klien Terpuaskan" },
    { value: "300+", label: "Layout Dibuat" },
    { value: "6+", label: "Tahun Berkarya" },
  ],
} as const;

export const HERO_COPY_EN = {
  heading: "Shaping words\ninto stunning works",
  description:
    "Zacreative is a design service for book layouts, reports, presentations,\ninfographic posters, and other layout design needs",
  primaryCtaLabel: "Consultation & Order",
  secondaryPaketLabel: "View Packages",
  secondaryPortfolioLabel: "View Portfolio",
  onlineStatus: "",
  stats: [
    { value: "80+", label: "Satisfied Clients" },
    { value: "300+", label: "Layouts Created" },
    { value: "6+", label: "Years of Experience" },
  ],
} as const;

/* ============================================================================
 * 4. TRUST INDICATORS (DAFTAR KLIEN & INSTANSI)
 * ============================================================================ */
export interface TrustClient {
  name: string;
  desc: string;
  logo?: string;
}

export const TRUST_COPY = {
  heading:
    "DIPERCAYA OLEH KEMENTERIAN, LEMBAGA, BUMN, HINGGA PERUSAHAAN SWASTA",
  clients: [
    {
      name: "Kementerian Pekerjaan Umum",
      desc: "Kementerian RI",
      logo: "/images/assets/partner-logo/kementrianpekerjaanumum.PNG",
    },
    {
      name: "Kementerian Kesehatan",
      desc: "Kementerian RI",
      logo: "/images/assets/partner-logo/kemenkes.png",
    },
    {
      name: "Kementerian ESDM",
      desc: "Kementerian RI",
      logo: "/images/assets/partner-logo/kementrianesdm.webp",
    },
    {
      name: "Kementerian Investasi / BKPM",
      desc: "Kementerian RI",
      logo: "/images/assets/partner-logo/kementrianinvestasidanhilirisasibkpm.png",
    },
    {
      name: "Kemendikbudristek RI",
      desc: "Kementerian RI",
      logo: "/images/assets/partner-logo/kemendikbudristkek.png",
    },
    {
      name: "Kementerian PPPA",
      desc: "Kementerian RI",
      logo: "/images/assets/partner-logo/kementrianpemberdayaanperempuandanperlindungananak.webp",
    },
    {
      name: "Kementerian PPN / Bappenas",
      desc: "Lembaga Pemerintah RI",
      logo: "/images/assets/partner-logo/bappenas.webp",
    },
    {
      name: "BPJS Kesehatan",
      desc: "Badan Hukum Publik",
      logo: "/images/assets/partner-logo/bpjskesehatan.png",
    },
    {
      name: "KBRI Damaskus",
      desc: "Korps Diplomatik RI",
      logo: "/images/assets/partner-logo/kedubesdamaskussuriah.png",
    },
    {
      name: "PT ANTAM Tbk",
      desc: "BUMN Pertambangan",
      logo: "/images/assets/partner-logo/antam.webp",
    },
    {
      name: "PT PLN (Persero)",
      desc: "BUMN Ketenagalistrikan",
      logo: "/images/assets/partner-logo/pln.webp",
    },
    {
      name: "PT Pertamina Hulu Energi",
      desc: "Subholding Upstream Pertamina",
      logo: "/images/assets/partner-logo/pertaminahuluenergi.png",
    },
    {
      name: "PT Pertamina Gas",
      desc: "Subholding Gas Pertamina",
      logo: "/images/assets/partner-logo/pertaminagas.png",
    },
    {
      name: "PT Jakarta Propertindo",
      desc: "BUMD DKI Jakarta",
      logo: "/images/assets/partner-logo/jakartapropertindo.png",
    },
    {
      name: "PT Astra International Tbk",
      desc: "Perusahaan Multinasional",
      logo: "/images/assets/partner-logo/astra.png",
    },
    {
      name: "PT East West Seed Indonesia",
      desc: "Cap Panah Merah",
      logo: "/images/assets/partner-logo/cappanahmerah.webp",
    },
    {
      name: "PSE UGM",
      desc: "Pusat Studi Energi UGM",
      logo: "/images/assets/partner-logo/universitasgadjahmadaPSE.png",
    },
  ] as TrustClient[],
} as const;

export const TRUST_COPY_EN = {
  heading:
    "TRUSTED BY MINISTRIES, INSTITUTIONS, SOEs, TO PRIVATE COMPANIES",
  clients: TRUST_COPY.clients,
} as const;

/* ============================================================================
 * 5. PACKAGES SECTION (LAYANAN & TINGKATAN PAKET)
 * ============================================================================ */
export const PACKAGES_COPY = {
  badge: "",
  heading: "Layanan & Pilihan Paket",
  description:
    "Temukan berbagai layanan desain Zacreative dengan pilihan paket yang fleksibel untuk memenuhi kebutuhan Anda.",
  mobileCategoryNames: {
    "layout-buku": "Layout Buku",
    presentasi: "Presentasi",
    poster: "Poster Infografis",
  } as Record<string, string>,
  labels: {
    formatPrefix: "",
    popularBadge: "★ Paling Populer",
    selectedBadge: "Paket Terpilih",
    tierHeadingPrefix: "",
    priceStartFrom: "Mulai dari",
    chooseTierPrefix: "Pilih",
    prevServiceAria: "Layanan sebelumnya",
    nextServiceAria: "Layanan berikutnya",
  },
  footnote: "",
  customPackageCta: {
    label: "",
    whatsappMessage: "",
  },
  buildTierWhatsAppMessage: (pkg: ServicePackage, tier: PackageTier) =>
    `Halo Zacreative, saya tertarik dengan paket *${pkg.title} – ${tier.name}*. Saya ingin berkonsultasi lebih lanjut mengenai kebutuhan proyek saya.`,
  services: [
    {
      id: "layout-buku",
      number: "01",
      tabLabel: "Layout Buku",
      title: "Layout Buku",
      summary: "",
      formatChip: "",
      unit: "/halaman",
      unitLabel: "per halaman",
      tiers: [
        {
          id: "bronze",
          label: "",
          name: "Paket Bronze",
          priceRange: "Rp5.000",
          description:
            "Desain layout sederhana yang didominasi teks, cocok untuk buku biografi dan kumpulan cerita.",
          features: [
            "1x revisi",
            "Pengerjaan 7-10 hari",
            "Plus desain cover buku Rp300.000",
          ],
        },
        {
          id: "silver",
          label: "",
          name: "Paket Silver",
          priceRange: "Rp15.000",
          description:
            "Desain layout dengan elemen visual dan teks yang seimbang, cocok untuk modul pelatihan, laporan instansi, dan laporan penelitian.",
          features: [
            "3x revisi",
            "Pengerjaan 7-10 hari",
            "Plus desain cover buku Rp300.000",
          ],
        },
        {
          id: "gold",
          label: "",
          name: "Paket Gold",
          priceRange: "Rp25.000",
          description:
            "Desain layout dengan elemen visual dan teks yang seimbang, cocok untuk modul pelatihan, laporan instansi, dan laporan penelitian.",
          features: [
            "Revisi sepuasnya",
            "Pengerjaan 4-7 hari",
            "Custom grafik dan tabel",
            "Plus desain cover buku Rp300.000",
          ],
          popular: true,
        },
        {
          id: "platinum",
          label: "",
          name: "Paket Platinum",
          priceRange: "Rp35.000",
          showPriceStartFrom: true,
          description:
            "Desain layout dinamis dengan elemen visual dan tata letak bervariasi, cocok untuk portofolio, company profile, dan buku yang membutuhkan variasi layout lainnya.",
          features: [
            "Revisi sepuasnya",
            "Pengerjaan 4-7 hari",
            "Custom grafik dan tabel",
            "Plus desain cover buku Rp300.000",
          ],
        },
      ],
    },
    {
      id: "presentasi",
      number: "02",
      tabLabel: "Presentasi",
      title: "Presentasi",
      summary: "",
      formatChip: "",
      unit: "/20 slide",
      unitLabel: "per 20 slide",
      tiers: [
        {
          id: "bronze",
          label: "",
          name: "Paket Bronze",
          priceRange: "Rp300.000",
          description:
            "Desain presentasi sederhana berbasis teks dengan sedikit elemen visual.",
          features: [
            "1x revisi",
            "Pengerjaan 7-10 hari",
            "Mengubah format teks atau Ms. Word menjadi slide presentasi +Rp5.000/slide",
          ],
        },
        {
          id: "silver",
          label: "",
          name: "Paket Silver",
          priceRange: "Rp500.000",
          description:
            "Desain presentasi standar dengan elemen visual dan teks yang seimbang.",
          features: [
            "3x revisi",
            "Pengerjaan 5-7 hari",
            "Custom grafik dan tabel",
            "Mengubah format teks atau Ms. Word menjadi slide presentasi +Rp5.000/slide",
          ],
        },
        {
          id: "gold",
          label: "",
          name: "Paket Gold",
          priceRange: "Rp700.000",
          showPriceStartFrom: true,
          description:
            "Desain dinamis dengan elemen visual dan tata letak yang bervariasi.",
          features: [
            "Revisi sepuasnya",
            "Pengerjaan 3-5 hari",
            "Custom grafik dan tabel",
            "Mengubah format teks atau Ms. Word menjadi slide presentasi +Rp5.000/slide",
          ],
          popular: true,
        },
      ],
    },
    {
      id: "poster",
      number: "03",
      tabLabel: "Poster Infografis",
      title: "Poster Infografis",
      summary: "",
      formatChip: "",
      unit: "/desain",
      unitLabel: "per desain",
      tiers: [
        {
          id: "bronze",
          label: "",
          name: "Paket Bronze",
          priceRange: "Rp300.000",
          description:
            "Desain sederhana untuk poster promosi dan poster kegiatan.",
          features: [
            "Materi singkat (<50 kata)",
            "1x revisi",
            "Pengerjaan 7-10 hari",
          ],
        },
        {
          id: "silver",
          label: "",
          name: "Paket Silver",
          priceRange: "Rp500.000",
          description:
            "Desain standar untuk poster promosi produk dan poster kampanye instansi.",
          features: [
            "Materi standar (<100 kata)",
            "3x revisi",
            "Pengerjaan 5-7 hari",
            "Custom ilustrasi",
          ],
        },
        {
          id: "gold",
          label: "",
          name: "Paket Gold",
          priceRange: "Rp700.000",
          showPriceStartFrom: true,
          description:
            "Desain dinamis untuk poster penelitian, infografis, dan poster perlombaan.",
          features: [
            "Materi padat (<250 kata)",
            "Revisi sepuasnya",
            "Pengerjaan 3-5 hari",
            "Custom ilustrasi",
          ],
          popular: true,
        },
      ],
    },
  ] satisfies ServicePackage[],
};

export const PACKAGES_COPY_EN = {
  badge: "",
  heading: "Services & Package Options",
  description:
    "Discover various Zacreative design services with flexible package options to meet your needs.",
  mobileCategoryNames: {
    "layout-buku": "Book Layout",
    presentasi: "Presentation",
    poster: "Infographic Poster",
  } as Record<string, string>,
  labels: {
    formatPrefix: "",
    popularBadge: "★ Most Popular",
    selectedBadge: "Selected Package",
    tierHeadingPrefix: "",
    priceStartFrom: "Starting from",
    chooseTierPrefix: "Choose",
    prevServiceAria: "Previous service",
    nextServiceAria: "Next service",
  },
  footnote: "",
  customPackageCta: {
    label: "",
    whatsappMessage: "",
  },
  buildTierWhatsAppMessage: (pkg: ServicePackage, tier: PackageTier) =>
    `Hello Zacreative, I am interested in the *${pkg.title} – ${tier.name}* package. I would like to consult further regarding my project needs.`,
  services: [
    {
      id: "layout-buku",
      number: "01",
      tabLabel: "Book Layout",
      title: "Book Layout",
      summary: "",
      formatChip: "",
      unit: "/page",
      unitLabel: "per page",
      tiers: [
        {
          id: "bronze",
          label: "",
          name: "Bronze Package",
          priceRange: "Rp5.000",
          description:
            "Simple text-dominated layout design, suitable for biographies and story collections.",
          features: [
            "1x revision",
            "7-10 days turnaround",
            "Plus book cover design Rp300.000",
          ],
        },
        {
          id: "silver",
          label: "",
          name: "Silver Package",
          priceRange: "Rp15.000",
          description:
            "Layout design with balanced visual elements and text, suitable for training modules, institutional reports, and research reports.",
          features: [
            "3x revisions",
            "7-10 days turnaround",
            "Plus book cover design Rp300.000",
          ],
        },
        {
          id: "gold",
          label: "",
          name: "Gold Package",
          priceRange: "Rp25.000",
          description:
            "Layout design with balanced visual elements and text, suitable for training modules, institutional reports, and research reports.",
          features: [
            "Unlimited revisions",
            "4-7 days turnaround",
            "Custom charts and tables",
            "Plus book cover design Rp300.000",
          ],
          popular: true,
        },
        {
          id: "platinum",
          label: "",
          name: "Platinum Package",
          priceRange: "Rp35.000",
          showPriceStartFrom: true,
          description:
            "Dynamic layout design with varied visual elements and layouts, suitable for portfolios, company profiles, and other books requiring layout variations.",
          features: [
            "Unlimited revisions",
            "4-7 days turnaround",
            "Custom charts and tables",
            "Plus book cover design Rp300.000",
          ],
        },
      ],
    },
    {
      id: "presentasi",
      number: "02",
      tabLabel: "Presentation",
      title: "Presentation",
      summary: "",
      formatChip: "",
      unit: "/20 slides",
      unitLabel: "per 20 slides",
      tiers: [
        {
          id: "bronze",
          label: "",
          name: "Bronze Package",
          priceRange: "Rp300.000",
          description:
            "Simple text-based presentation design with minimal visual elements.",
          features: [
            "1x revision",
            "7-10 days turnaround",
            "Converting text or Ms. Word format into presentation slides +Rp5.000/slide",
          ],
        },
        {
          id: "silver",
          label: "",
          name: "Silver Package",
          priceRange: "Rp500.000",
          description:
            "Standard presentation design with balanced visual elements and text.",
          features: [
            "3x revisions",
            "5-7 days turnaround",
            "Custom charts and tables",
            "Converting text or Ms. Word format into presentation slides +Rp5.000/slide",
          ],
        },
        {
          id: "gold",
          label: "",
          name: "Gold Package",
          priceRange: "Rp700.000",
          showPriceStartFrom: true,
          description:
            "Dynamic design with varied visual elements and layouts.",
          features: [
            "Unlimited revisions",
            "3-5 days turnaround",
            "Custom charts and tables",
            "Converting text or Ms. Word format into presentation slides +Rp5.000/slide",
          ],
          popular: true,
        },
      ],
    },
    {
      id: "poster",
      number: "03",
      tabLabel: "Infographic Poster",
      title: "Infographic Poster",
      summary: "",
      formatChip: "",
      unit: "/design",
      unitLabel: "per design",
      tiers: [
        {
          id: "bronze",
          label: "",
          name: "Bronze Package",
          priceRange: "Rp300.000",
          description:
            "Simple design for promotional posters and event posters.",
          features: [
            "Brief content (<50 words)",
            "1x revision",
            "7-10 days turnaround",
          ],
        },
        {
          id: "silver",
          label: "",
          name: "Silver Package",
          priceRange: "Rp500.000",
          description:
            "Standard design for product promotional posters and institutional campaign posters.",
          features: [
            "Standard content (<100 words)",
            "3x revisions",
            "5-7 days turnaround",
            "Custom illustration",
          ],
        },
        {
          id: "gold",
          label: "",
          name: "Gold Package",
          priceRange: "Rp700.000",
          showPriceStartFrom: true,
          description:
            "Dynamic design for research posters, infographics, and competition posters.",
          features: [
            "Dense content (<250 words)",
            "Unlimited revisions",
            "3-5 days turnaround",
            "Custom illustration",
          ],
          popular: true,
        },
      ],
    },
  ] satisfies ServicePackage[],
};

/* ============================================================================
 * 6. PORTFOLIO SECTION (PORTOFOLIO INSTAGRAM — MAKSIMAL 4 KARYA DI BERANDA)
 * ============================================================================ */
export const PORTFOLIO_COPY = {
  maxItems: 4,
  badge: "[PORTOFOLIO]",
  heading: "Karya Terbaru Zacreative",
  description:
    "Jelajahi berbagai karya yang telah kami kerjakan bersama klien dari beragam industri dan institusi.",
  followButtonPrefix: "Follow",
  viewMoreLabel: "Lihat Selengkapnya",
  viewMoreHref: "/portofolio",
  allWorksLabel: "Semua Karya",
  categoryLabels: {
    "Desain Layout Buku": "Desain Layout Buku",
    "Desain PPT": "Desain PPT",
    "Desain Poster": "Desain Poster",
  } as Record<string, string>,
  feedUi: {
    singlePostLabel: "Single Post",
    instagramLinkLabel: "Instagram",
    openInInstagramLabel: "Buka di Instagram",
    carouselBadgeSuffix: "Slides",
    carouselBadgeFallback: "Carousel",
    reelsBadgeLabel: "Reels",
    emptyTitle: "Feed Sedang Disinkronkan",
    emptyDescription:
      "Postingan Instagram terbaru akan muncul otomatis melalui sinkronisasi harian Vercel Cron. Kunjungi akun resmi kami untuk melihat karya selengkapnya.",
    emptyCtaPrefix: "Kunjungi",
  },
  fallbackPosts: [
    {
      id: "ig-fallback-01",
      caption:
        "Penyusunan 2 volume Buku Putih Kebijakan Strategis (487 hal) siap cetak offset standar FOGRA39.",
      mediaType: "CAROUSEL_ALBUM",
      imageUrl: "/images/assets/asset_7.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-10-18T09:00:00Z",
      categoryTag: "Desain Layout Buku",
      footnote: "PT ANTAM Tbk × UGM • 487 Hal",
      slides: [
        { id: "s-01-1", type: "IMAGE", url: "/images/assets/asset_7.webp" },
        { id: "s-01-2", type: "IMAGE", url: "/images/assets/asset_8.webp" },
        { id: "s-01-3", type: "IMAGE", url: "/images/assets/asset_6.webp" },
      ],
    },
    {
      id: "ig-fallback-02",
      caption:
        "Sistem grid editorial 12-kolom & hierarki tipografi publikasi riset energi nasional.",
      mediaType: "CAROUSEL_ALBUM",
      imageUrl: "/images/assets/asset_8.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-10-12T11:30:00Z",
      categoryTag: "Desain Layout Buku",
      footnote: "Publikasi Riset Nasional • 2026",
      slides: [
        { id: "s-02-1", type: "IMAGE", url: "/images/assets/asset_8.webp" },
        { id: "s-02-2", type: "IMAGE", url: "/images/assets/asset_9.webp" },
      ],
    },
    {
      id: "ig-fallback-03",
      caption:
        "Memori Akhir Tugas & Profil Sekretariat Jenderal (343 hal) dengan infografis data spasial.",
      mediaType: "CAROUSEL_ALBUM",
      imageUrl: "/images/assets/asset_6.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-10-04T08:15:00Z",
      categoryTag: "Desain Layout Buku",
      footnote: "Kementerian PUPR • 343 Hal",
      slides: [
        { id: "s-03-1", type: "IMAGE", url: "/images/assets/asset_6.webp" },
        { id: "s-03-2", type: "IMAGE", url: "/images/assets/asset_5.webp" },
        { id: "s-03-3", type: "IMAGE", url: "/images/assets/asset_7.webp" },
      ],
    },
    {
      id: "ig-fallback-04",
      caption:
        "Pitch Deck & Financial Model Series A — visualisasi unit economics dan peta pasar 16:9 widescreen.",
      mediaType: "CAROUSEL_ALBUM",
      imageUrl: "/images/assets/asset_3.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-09-27T14:00:00Z",
      categoryTag: "Desain PPT",
      footnote: "Series A Pitch Deck • 32 Slide",
      slides: [
        { id: "s-04-1", type: "IMAGE", url: "/images/assets/asset_3.webp" },
        { id: "s-04-2", type: "IMAGE", url: "/images/assets/asset_4.webp" },
      ],
    },
    {
      id: "ig-fallback-05",
      caption:
        "Key Visual & Poster Kampanye Pameran Arsitektur Nusantara format cetak A1 dan adaptasi media sosial.",
      mediaType: "IMAGE",
      imageUrl: "/images/assets/asset_2.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-09-19T10:20:00Z",
      categoryTag: "Desain Poster",
      footnote: "Kampanye Pameran • Print & IG",
      slides: [{ id: "s-05-1", type: "IMAGE", url: "/images/assets/asset_2.webp" }],
    },
    {
      id: "ig-fallback-06",
      caption:
        "Executive Presentation & ESG Highlights Deck berstandar GRI & OJK untuk paparan RUPS tahunan.",
      mediaType: "CAROUSEL_ALBUM",
      imageUrl: "/images/assets/asset_5.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-09-10T13:45:00Z",
      categoryTag: "Desain PPT",
      footnote: "RUPS & ESG Deck • 45 Slide",
      slides: [
        { id: "s-06-1", type: "IMAGE", url: "/images/assets/asset_5.webp" },
        { id: "s-06-2", type: "IMAGE", url: "/images/assets/asset_6.webp" },
      ],
    },
  ] satisfies InstagramPost[],
};

export const PORTFOLIO_COPY_EN = {
  ...PORTFOLIO_COPY,
  badge: "[PORTFOLIO]",
  heading: "Zacreative's Latest Works",
  description:
    "Explore various works we have completed with clients from diverse industries and institutions.",
  followButtonPrefix: "Follow",
  viewMoreLabel: "View More",
  allWorksLabel: "All Works",
  categoryLabels: {
    "Desain Layout Buku": "Book Layout Design",
    "Desain PPT": "PPT Design",
    "Desain Poster": "Poster Design",
  } as Record<string, string>,
  feedUi: {
    singlePostLabel: "Single Post",
    instagramLinkLabel: "Instagram",
    openInInstagramLabel: "Open in Instagram",
    carouselBadgeSuffix: "Slides",
    carouselBadgeFallback: "Carousel",
    reelsBadgeLabel: "Reels",
    emptyTitle: "Feed is Being Synchronized",
    emptyDescription:
      "The latest Instagram posts will appear automatically via daily Vercel Cron synchronization. Visit our official account to see more works.",
    emptyCtaPrefix: "Visit",
  },
  fallbackPosts: [
    {
      id: "ig-fallback-01",
      caption:
        "Compilation of 2 volumes of Strategic Policy White Paper (487 pp) ready for FOGRA39 standard offset printing.",
      mediaType: "CAROUSEL_ALBUM",
      imageUrl: "/images/assets/asset_7.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-10-18T09:00:00Z",
      categoryTag: "Desain Layout Buku",
      footnote: "PT ANTAM Tbk × UGM • 487 Pp",
      slides: [
        { id: "s-01-1", type: "IMAGE", url: "/images/assets/asset_7.webp" },
        { id: "s-01-2", type: "IMAGE", url: "/images/assets/asset_8.webp" },
        { id: "s-01-3", type: "IMAGE", url: "/images/assets/asset_6.webp" },
      ],
    },
    {
      id: "ig-fallback-02",
      caption:
        "12-column editorial grid system & typographic hierarchy for national energy research publication.",
      mediaType: "CAROUSEL_ALBUM",
      imageUrl: "/images/assets/asset_8.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-10-12T11:30:00Z",
      categoryTag: "Desain Layout Buku",
      footnote: "National Research Publication • 2026",
      slides: [
        { id: "s-02-1", type: "IMAGE", url: "/images/assets/asset_8.webp" },
        { id: "s-02-2", type: "IMAGE", url: "/images/assets/asset_9.webp" },
      ],
    },
    {
      id: "ig-fallback-03",
      caption:
        "End-of-Term Memoir & Secretariat General Profile (343 pp) with spatial data infographics.",
      mediaType: "CAROUSEL_ALBUM",
      imageUrl: "/images/assets/asset_6.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-10-04T08:15:00Z",
      categoryTag: "Desain Layout Buku",
      footnote: "Ministry of PUPR • 343 Pp",
      slides: [
        { id: "s-03-1", type: "IMAGE", url: "/images/assets/asset_6.webp" },
        { id: "s-03-2", type: "IMAGE", url: "/images/assets/asset_5.webp" },
        { id: "s-03-3", type: "IMAGE", url: "/images/assets/asset_7.webp" },
      ],
    },
    {
      id: "ig-fallback-04",
      caption:
        "Series A Pitch Deck & Financial Model — visualization of unit economics and 16:9 widescreen market map.",
      mediaType: "CAROUSEL_ALBUM",
      imageUrl: "/images/assets/asset_3.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-09-27T14:00:00Z",
      categoryTag: "Desain PPT",
      footnote: "Series A Pitch Deck • 32 Slides",
      slides: [
        { id: "s-04-1", type: "IMAGE", url: "/images/assets/asset_3.webp" },
        { id: "s-04-2", type: "IMAGE", url: "/images/assets/asset_4.webp" },
      ],
    },
    {
      id: "ig-fallback-05",
      caption:
        "Key Visual & Campaign Poster for Nusantara Architecture Exhibition in A1 print format and social media adaptation.",
      mediaType: "IMAGE",
      imageUrl: "/images/assets/asset_2.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-09-19T10:20:00Z",
      categoryTag: "Desain Poster",
      footnote: "Exhibition Campaign • Print & IG",
      slides: [{ id: "s-05-1", type: "IMAGE", url: "/images/assets/asset_2.webp" }],
    },
    {
      id: "ig-fallback-06",
      caption:
        "Executive Presentation & ESG Highlights Deck adhering to GRI & OJK standards for annual GMS presentation.",
      mediaType: "CAROUSEL_ALBUM",
      imageUrl: "/images/assets/asset_5.webp",
      permalink: SITE_COPY.contact.instagramUrl,
      timestamp: "2026-09-10T13:45:00Z",
      categoryTag: "Desain PPT",
      footnote: "GMS & ESG Deck • 45 Slides",
      slides: [
        { id: "s-06-1", type: "IMAGE", url: "/images/assets/asset_5.webp" },
        { id: "s-06-2", type: "IMAGE", url: "/images/assets/asset_6.webp" },
      ],
    },
  ] satisfies InstagramPost[],
};

/* ============================================================================
 * 7. PROCESS SECTION (CARA KERJA STUDIO)
 * ============================================================================ */
export const PROCESS_COPY = {
  badge: "",
  heading: "Cara Order di Zacreative",
  description:
    "Mulai proyek desain Anda dengan mudah melalui alur pemesanan yang praktis, mulai dari konsultasi kebutuhan hingga pengiriman desain final.",
  deliverablePrefix: "",
  detailLabel: "Detail",
  closeLabel: "Tutup",
  steps: [
    {
      num: "01",
      title: "Konsultasi & Pemilihan Paket",
      summary:
        "Hubungi kami melalui WhatsApp, konsultasikan kebutuhan desain, lalu pilih layanan dan paket yang sesuai.",
      details:
        "Diskusikan jenis pekerjaan, jumlah halaman/slide/desain, serta kebutuhan proyek. Zacreative membantu mengarahkan pilihan layanan dan paket sesuai kebutuhan.",
      deliverable: "",
    },
    {
      num: "02",
      title: "Isi Formulir Pemesanan",
      summary: "Lengkapi formulir pemesanan setelah layanan dan paket disepakati.",
      details:
        "Isi formulir pemesanan dengan informasi kebutuhan proyek dan materi yang diperlukan agar pekerjaan dapat dimulai sesuai brief.",
      deliverable: "",
    },
    {
      num: "03",
      title: "Pembayaran DP & Pembuatan Sample",
      summary:
        "Lakukan pembayaran uang muka (DP) dan kami akan membuatkan sample desain.",
      details:
        "Proses pembuatan sample dimulai setelah pembayaran DP dikonfirmasi. Pembuatan sample estimasi 3 hari di luar durasi pengerjaan proyek.",
      deliverable: "",
    },
    {
      num: "04",
      title: "Proses Desain, Review, & Revisi",
      summary:
        "Kami mulai mengerjakan desain, kemudian Anda dapat melakukan review dan revisi.",
      details:
        "Proses desain mengikuti sample yang disepakati. Klien dapat memberikan masukan dan revisi sesuai ketentuan paket. Periode review dan revisi berlangsung hingga 30 hari.",
      deliverable: "",
    },
    {
      num: "05",
      title: "Pengiriman Desain Final & Pelunasan",
      summary:
        "Desain final dikirimkan, kemudian klien melakukan pelunasan pembayaran.",
      details:
        "Setelah proses review dan revisi selesai, Zacreative mengirimkan desain final. Pelunasan pembayaran dilakukan setelah pengiriman desain final.",
      deliverable: "",
    },
  ],
} as const;

export const PROCESS_COPY_EN = {
  badge: "",
  heading: "How to Order at Zacreative",
  description:
    "Start your design project easily through a practical ordering flow, from needs consultation to final design delivery.",
  deliverablePrefix: "",
  detailLabel: "Details",
  closeLabel: "Close",
  steps: [
    {
      num: "01",
      title: "Consultation & Package Selection",
      summary:
        "Contact us via WhatsApp, consult your design needs, then choose the appropriate service and package.",
      details:
        "Discuss the type of work, number of pages/slides/designs, and project requirements. Zacreative helps guide your choice of service and package according to your needs.",
      deliverable: "",
    },
    {
      num: "02",
      title: "Fill Out the Order Form",
      summary: "Complete the order form once the service and package are agreed upon.",
      details:
        "Fill out the order form with your project requirements and necessary materials so the work can begin according to the brief.",
      deliverable: "",
    },
    {
      num: "03",
      title: "Down Payment & Sample Creation",
      summary:
        "Make the down payment (DP) and we will create a design sample for you.",
      details:
        "The sample creation process begins after the down payment is confirmed. Sample creation takes an estimated 3 days outside the project turnaround duration.",
      deliverable: "",
    },
    {
      num: "04",
      title: "Design, Review, & Revision Process",
      summary:
        "We start working on the design, and then you can review and request revisions.",
      details:
        "The design process follows the agreed sample. Clients can provide feedback and revisions according to the package terms. The review and revision period lasts up to 30 days.",
      deliverable: "",
    },
    {
      num: "05",
      title: "Final Design Delivery & Final Payment",
      summary:
        "The final design is delivered, and then the client completes the final payment.",
      details:
        "After the review and revision process is completed, Zacreative delivers the final design. Final payment is made after the delivery of the final design.",
      deliverable: "",
    },
  ],
} as const;

/* ============================================================================
 * 8. FAQ / QnA SECTION (TANYA JAWAB UMUM & KARTU WHATSAPP)
 * ============================================================================ */
export const FAQ_COPY = {
  badge: "[TANYA JAWAB UMUM]",
  heading: "Pertanyaan yang Sering Diajukan",
  description:
    "Temukan informasi seputar layanan, proses pengerjaan, dan ketentuan kerja sama Zacreative melalui pertanyaan yang paling sering diajukan.",
  whatsappBox: {
    badge: "Fast Response (WhatsApp)",
    heading: "Punya pertanyaan spesifik terkait naskah Anda?",
    description:
      "Tim lead desainer kami siap berdiskusi secara instan dan memberikan estimasi awal dalam hitungan jam.",
    ctaLabel: "Konsultasi Instan via WhatsApp",
    whatsappMessage:
      "Halo ZaCreative, saya ingin menanyakan detail pengerjaan untuk proyek/naskah saya. Boleh dibantu?",
  },
  items: [
    {
      q: "Berapa lama waktu pengerjaan standar untuk satu buku?",
      a: "Waktu pengerjaan standar berkisar antara 1–4 minggu, mulai dari pemesanan hingga finalisasi. Durasi pengerjaan dapat menyesuaikan jumlah halaman, kompleksitas materi, dan kebutuhan proyek. Timeline juga dapat didiskusikan dan disepakati pada konsultasi awal.",
    },
    {
      q: "Apakah Zacreative bersedia menandatangani NDA kerahasiaan sebelum proyek dimulai?",
      a: "Ya, tentu saja. Kami memahami pentingnya menjaga kerahasiaan dokumen dan informasi klien, terutama untuk proyek yang melibatkan materi belum dipublikasikan. Zacreative bersedia menandatangani perjanjian kerahasiaan (NDA) sebelum dokumen atau draft naskah dibagikan.",
    },
    {
      q: "Bagaimana ketentuan revisi untuk setiap paket?",
      a: "Setiap paket memiliki ketentuan revisi yang berbeda. Paket Platinum dan Gold mendapatkan revisi tanpa batas, paket Silver mendapatkan 3 kali revisi, sedangkan paket Bronze mendapatkan 1 kali revisi. Periode review dan revisi berlaku maksimal 30 hari.",
    },
    {
      q: "Apakah ada biaya tambahan untuk layanan tertentu?",
      a: "Ya, beberapa layanan memiliki biaya tambahan sesuai kebutuhan proyek. Untuk layanan layout buku, desain cover dikenakan biaya Rp300.000. Sementara itu, untuk presentasi yang materinya masih berupa dokumen Word dan perlu dikonversi ke format PowerPoint, terdapat biaya tambahan sebesar Rp5.000 per slide. Kebutuhan lain di luar cakupan paket dapat dikonsultasikan terlebih dahulu sebelum proyek dimulai.",
    },
    {
      q: "Apakah draft harus sudah final sebelum proses layout dimulai?",
      a: "Tidak harus. Kami tetap dapat menerima draft yang belum final untuk keperluan konsultasi dan pembuatan sample desain. Namun, sebelum proses pengerjaan keseluruhan draft dimulai, kami menyarankan agar draft sudah final untuk menghindari perubahan substansial selama proses layout berlangsung. Perubahan materi setelah proses desain berjalan dapat memengaruhi durasi pengerjaan dan kebutuhan revisi.",
    },
  ],
} as const;

export const FAQ_COPY_EN = {
  badge: "[FREQUENTLY ASKED QUESTIONS]",
  heading: "Frequently Asked Questions",
  description:
    "Find information about Zacreative's services, workflow process, and collaboration terms through the most frequently asked questions.",
  whatsappBox: {
    badge: "Fast Response (WhatsApp)",
    heading: "Have specific questions regarding your manuscript?",
    description:
      "Our lead designer team is ready to discuss instantly and provide an initial estimate within hours.",
    ctaLabel: "Instant Consultation via WhatsApp",
    whatsappMessage:
      "Hello ZaCreative, I would like to ask about the workflow details for my project/manuscript. Could you assist me?",
  },
  items: [
    {
      q: "How long is the standard turnaround time for one book?",
      a: "The standard turnaround time ranges from 1–4 weeks, from ordering to finalization. The turnaround duration can be adjusted according to the number of pages, material complexity, and project needs. The timeline can also be discussed and agreed upon during the initial consultation.",
    },
    {
      q: "Is Zacreative willing to sign a confidentiality NDA before the project begins?",
      a: "Yes, of course. We understand the importance of maintaining the confidentiality of client documents and information, especially for projects involving unpublished materials. Zacreative is willing to sign a non-disclosure agreement (NDA) before documents or manuscript drafts are shared.",
    },
    {
      q: "What are the revision terms for each package?",
      a: "Each package has different revision terms. The Platinum and Gold packages include unlimited revisions, the Silver package includes 3 revisions, while the Bronze package includes 1 revision. The review and revision period is valid for a maximum of 30 days.",
    },
    {
      q: "Are there any additional fees for certain services?",
      a: "Yes, some services have additional fees depending on project needs. For book layout services, cover design incurs a fee of Rp300.000. Meanwhile, for presentations whose materials are still in Word document format and need to be converted into PowerPoint format, there is an additional fee of Rp5.000 per slide. Other needs outside the package scope can be consulted beforehand before the project begins.",
    },
    {
      q: "Does the draft have to be final before the layout process begins?",
      a: "Not necessarily. We can still accept non-final drafts for consultation and design sample creation purposes. However, before the overall draft layout process begins, we recommend that the draft is final to avoid substantial changes during the layout process. Material changes after the design process is underway may affect turnaround duration and revision needs.",
    },
  ],
} as const;

/* ============================================================================
 * 9. FOOTER (BAGIAN BAWAH HALAMAN)
 * ============================================================================ */
export const FOOTER_COPY = {
  logoAlt: "Zacreative",
  brandDescription:
    "Jasa desain layout buku, laporan, presentasi, poster infografis, dan kebutuhan desain layout lainnya.",
  navigationTitle: "Navigasi",
  navigationLinks: [
    { label: "Paket & Harga", href: "/#paket" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Cara Order", href: "/#cara-kerja" },
    { label: "FAQ", href: "/#faq" },
  ],
  contactTitle: "Hubungi Kami",
  contactDescription: "",
  whatsappCtaLabel: "Konsultasi via WhatsApp",
  copyright: "© 2026 Zacreative. All rights reserved.",
  locationTag: "[Jakarta, ID]",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
} as const;

export const FOOTER_COPY_EN = {
  logoAlt: "Zacreative",
  brandDescription:
    "Design services for book layouts, reports, presentations, infographic posters, and other layout design needs.",
  navigationTitle: "Navigation",
  navigationLinks: [
    { label: "Packages & Pricing", href: "/#paket" },
    { label: "Portfolio", href: "/portofolio" },
    { label: "How to Order", href: "/#cara-kerja" },
    { label: "FAQ", href: "/#faq" },
  ],
  contactTitle: "Contact Us",
  contactDescription: "",
  whatsappCtaLabel: "Consultation via WhatsApp",
  copyright: "© 2026 Zacreative. All rights reserved.",
  locationTag: "[Jakarta, ID]",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
} as const;

/* ============================================================================
 * 10. UI LABELS TAMBAHAN (BREADCRUMB, ARIA, DSB.)
 * ============================================================================ */
export const UI_COPY = {
  homeLabel: "Beranda",
  portfolioLabel: "Portofolio",
  privacyPolicyLabel: "Kebijakan Privasi",
  termsOfServiceLabel: "Syarat & Ketentuan",
  themeSwitchToDark: "Beralih ke mode gelap",
  themeSwitchToLight: "Beralih ke mode terang",
  langSwitchAria: "Pilih bahasa / Select language",
} as const;

export const UI_COPY_EN = {
  homeLabel: "Home",
  portfolioLabel: "Portfolio",
  privacyPolicyLabel: "Privacy Policy",
  termsOfServiceLabel: "Terms of Service",
  themeSwitchToDark: "Switch to dark mode",
  themeSwitchToLight: "Switch to light mode",
  langSwitchAria: "Select language / Pilih bahasa",
} as const;

export const COPY_BY_LOCALE = {
  id: {
    site: SITE_COPY,
    navbar: NAVBAR_COPY,
    hero: HERO_COPY,
    trust: TRUST_COPY,
    packages: PACKAGES_COPY,
    portfolio: PORTFOLIO_COPY,
    process: PROCESS_COPY,
    faq: FAQ_COPY,
    footer: FOOTER_COPY,
    ui: UI_COPY,
  },
  en: {
    site: SITE_COPY_EN,
    navbar: NAVBAR_COPY_EN,
    hero: HERO_COPY_EN,
    trust: TRUST_COPY_EN,
    packages: PACKAGES_COPY_EN,
    portfolio: PORTFOLIO_COPY_EN,
    process: PROCESS_COPY_EN,
    faq: FAQ_COPY_EN,
    footer: FOOTER_COPY_EN,
    ui: UI_COPY_EN,
  },
} as const;
