import { SITE_COPY, FAQ_COPY } from "@/lib/copywriting";
import { SITE_URL } from "@/lib/site";

export default function JsonLd() {
  const baseUrl = SITE_URL;

  // 1. Organization & ProfessionalService schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "@id": `${baseUrl}/#organization`,
    name: SITE_COPY.name,
    alternateName: ["Zacreative", "Zacreative Studio", "Zacreative Editorial Design"],
    url: baseUrl,
    logo: `${baseUrl}/images/logocolor.webp`,
    image: `${baseUrl}/images/og-image.jpg`,
    description: SITE_COPY.schemaDescription,
    email: SITE_COPY.contact.email,
    telephone: `+${SITE_COPY.contact.whatsappNumber}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Jakarta",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${SITE_COPY.contact.whatsappNumber}`,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      SITE_COPY.contact.instagramUrl,
      SITE_COPY.contact.linkedinUrl,
    ].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Desain Visual Zacreative",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Layout Buku & Laporan Editorial",
            description:
              "Penataan tipografi dan sistem grid editorial profesional untuk buku cetak, buku digital, modul, dan laporan tahunan instansi.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Presentasi & Pitch Deck Eksekutif",
            description:
              "Desain presentasi PowerPoint dan pitch deck profesional untuk investor pitch, keynote speaker, dan laporan direksi.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Poster & Desain Infografis",
            description:
              "Desain poster promosi, materi kampanye visual, dan infografis riset yang komunikatif dan berdampak luas.",
          },
        },
      ],
    },
  };

  // 2. WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Zacreative",
    alternateName: "Zacreative Studio - Jasa Desain Layout Buku & Presentasi",
    inLanguage: "id-ID",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };

  // 3. FAQPage schema (Rich snippets for Google search results)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faq`,
    mainEntity: FAQ_COPY.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
