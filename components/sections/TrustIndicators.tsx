import Image from "next/image";
import { TRUST_COPY } from "@/lib/copywriting";

export default function TrustIndicators() {
  // Repeat items for ample track width across all screen resolutions
  const trackItems = [...TRUST_COPY.clients, ...TRUST_COPY.clients];

  const renderLogoTrack = (items: typeof trackItems, prefix: string) =>
    items.map((c, i) => (
      <div
        key={`${prefix}-${c.name}-${i}`}
        title={c.name}
        aria-label={c.name}
        className="shrink-0 flex items-center justify-center px-6 sm:px-8 cursor-default group"
      >
        {c.logo ? (
          <Image
            src={c.logo}
            alt={`Logo ${c.name}`}
            width={160}
            height={48}
            unoptimized
            className="h-8 sm:h-10 w-auto max-w-[120px] sm:max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="font-semibold text-xs tracking-wider uppercase text-slate-500 group-hover:text-brand transition-colors">
            {c.name}
          </span>
        )}
      </div>
    ));

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

        {/* Infinite Marquee Loop: unboxed, original logo colors, zero empty space */}
        <div className="relative overflow-hidden w-full marquee-mask py-2">
          <div className="flex w-max items-center">
            <div className="flex shrink-0 animate-marquee items-center gap-6 sm:gap-8 pr-6 sm:pr-8">
              {renderLogoTrack(trackItems, "track-1")}
            </div>
            <div
              className="flex shrink-0 animate-marquee items-center gap-6 sm:gap-8 pr-6 sm:pr-8"
              aria-hidden="true"
            >
              {renderLogoTrack(trackItems, "track-2")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
