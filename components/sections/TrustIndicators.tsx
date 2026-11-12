import { TRUST_COPY } from "@/lib/copywriting";

const LOGO_SIZE_CLASSES: Record<string, string> = {
  // Square / tall emblems
  "Kementerian PPN / Bappenas": "h-11 sm:h-14",
  "Kemendikbudristek RI": "h-11 sm:h-14",
  "KBRI Damaskus": "h-11 sm:h-14",
  "PT East West Seed Indonesia": "h-11 sm:h-14",
  "Kementerian PPPA": "h-11 sm:h-14",
  // Medium-wide logos
  "Kementerian ESDM": "h-10 sm:h-12",
  "PT PLN (Persero)": "h-9 sm:h-11",
  "PT ANTAM Tbk": "h-9 sm:h-11",
  "PT Astra International Tbk": "h-8 sm:h-10",
  // Wide horizontal wordmarks
  "Kementerian Pekerjaan Umum": "h-9 sm:h-11",
  "Kementerian Kesehatan": "h-9 sm:h-11",
  "Kementerian Investasi / BKPM": "h-9 sm:h-11",
  "PSE UGM": "h-10 sm:h-12",
  "PT Pertamina Hulu Energi": "h-9 sm:h-11",
  "PT Jakarta Propertindo": "h-8 sm:h-10",
  "PT Pertamina Gas": "h-8 sm:h-10",
  "BPJS Kesehatan": "h-7 sm:h-9",
};

export default function TrustIndicators() {
  const items = TRUST_COPY.clients;

  const renderLogoTrack = (prefix: string) =>
    items.map((c, i) => {
      const sizeClass = LOGO_SIZE_CLASSES[c.name] ?? "h-9 sm:h-11";
      return (
        <div
          key={`${prefix}-${c.name}-${i}`}
          title={c.name}
          aria-label={c.name}
          className="shrink-0 flex items-center justify-center px-6 sm:px-9 select-none"
        >
          {c.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={c.logo}
              alt={`Logo ${c.name}`}
              loading="eager"
              decoding="async"
              draggable={false}
              className={`${sizeClass} w-auto max-w-none object-contain pointer-events-none`}
            />
          ) : (
            <span className="font-semibold text-xs tracking-wider uppercase text-slate-500">
              {c.name}
            </span>
          )}
        </div>
      );
    });

  return (
    <section
      className="relative z-20 -mt-8 sm:-mt-10 lg:-mt-12 w-full bg-white dark:bg-zinc-950 rounded-t-[32px] sm:rounded-t-[40px] shadow-[0_-12px_30px_-8px_rgba(11,28,48,0.12),0_-2px_6px_-1px_rgba(11,28,48,0.06)] dark:shadow-[0_-12px_30px_-8px_rgba(0,0,0,0.5)] pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-slate-200/80 dark:border-zinc-800 overflow-hidden"
      data-purpose="trust-indicators-curved-section"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-6 sm:space-y-8">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-2">
          <h2
            id="trust-heading"
            className="font-mono text-xs uppercase tracking-widest text-[#134282] dark:text-blue-300 font-semibold"
          >
            {TRUST_COPY.heading}
          </h2>
        </div>

        {/* Infinite Marquee Loop: single unified track translating -50% so halves never desync */}
        <div className="relative overflow-hidden w-full marquee-mask py-2">
          <div className="animate-marquee items-center">
            <div className="flex shrink-0 items-center">
              {renderLogoTrack("track-1")}
            </div>
            <div className="flex shrink-0 items-center" aria-hidden="true">
              {renderLogoTrack("track-2")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
