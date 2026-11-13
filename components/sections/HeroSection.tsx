"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, LayoutGrid } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { buildWhatsAppLink } from "@/lib/constants";
import { HERO_COPY } from "@/lib/copywriting";

const cardBase =
  "absolute rounded-2xl border border-white/20 bg-white shadow-[0_25px_50px_-12px_rgba(5,15,30,0.45)] dark:bg-zinc-900 dark:border-white/20";

/* ───────────── Mockup A: Poster Infografis ───────────── */
function PosterCard() {
  return (
    <div
      className={`${cardBase} z-10 right-0 top-0 w-[44%] aspect-[3508/4961] rotate-[4deg] overflow-hidden transition-transform duration-500 ease-out group-hover/stack:rotate-[6deg] group-hover/stack:translate-x-1`}
      aria-hidden="true"
    >
      <Image
        src="/images/assets/hero/poster.jpg"
        alt="Desain Poster Infografis Zacreative"
        fill
        sizes="(min-width: 1024px) 260px, 0px"
        className="object-cover object-top"
        priority
      />
    </div>
  );
}

/* ───────────── Mockup B: Pitch deck / Presentasi slide ───────────── */
function PitchDeckCard() {
  return (
    <div
      className={`${cardBase} z-20 left-[12%] top-[20%] w-[68%] aspect-[3192/1794] -rotate-[1.5deg] overflow-hidden transition-transform duration-500 ease-out group-hover/stack:-translate-y-1`}
      aria-hidden="true"
    >
      <Image
        src="/images/assets/hero/PPT.png"
        alt="Desain Presentasi PowerPoint Zacreative"
        fill
        sizes="(min-width: 1024px) 390px, 0px"
        className="object-cover"
        priority
      />
    </div>
  );
}

/* ───────────── Mockup C: Editorial book spread (in front of presentation) ───────────── */
function BookSpreadCard() {
  return (
    <div
      className="absolute z-30 -bottom-2 -left-3 w-[84%] aspect-[2596/1480] rotate-[1.5deg] transition-transform duration-500 ease-out group-hover/stack:translate-y-1"
      aria-hidden="true"
    >
      <Image
        src="/images/assets/hero/mockupbuku.png"
        alt="Desain Layout Buku Zacreative"
        fill
        sizes="(min-width: 1024px) 480px, 0px"
        className="object-contain drop-shadow-[0_25px_35px_rgba(5,15,30,0.55)]"
        priority
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#134282] dark:bg-[#07172e] text-white transition-colors"
      data-purpose="hero-section"
      aria-labelledby="hero-heading"
    >
      {/* ── Accent 1: Ambient Radial Mesh Lighting ── */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_-10%,rgba(56,132,230,0.35),transparent_70%)]"
        aria-hidden="true"
      />

      {/* ── Accent 2: Multi-point Glow Auroras ── */}
      {/* Top right electric cyan glow behind mockups */}
      <div
        className="pointer-events-none absolute -top-32 right-[-5%] h-[580px] w-[580px] rounded-full bg-[#00D2FF]/25 blur-[120px] dark:bg-[#00D2FF]/15"
        aria-hidden="true"
      />
      {/* Top left deep indigo glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-[#3b82f6]/20 blur-[130px]"
        aria-hidden="true"
      />
      {/* Subtle brand teal/leaf glow accent */}
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 h-[320px] w-[320px] rounded-full bg-[#4fc97a]/10 blur-[100px]"
        aria-hidden="true"
      />

      {/* ── Accent 3: Subtle Architectural Editorial Grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_65%,transparent_100%)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      {/* ── Accent 4: Concentric Orbit Rings (framing the mockups on desktop) ── */}
      <div className="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block" aria-hidden="true">
        <div className="relative h-[620px] w-[620px]">
          <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
          <div className="absolute inset-14 rounded-full border border-dashed border-white/[0.07]" />
          <div className="absolute inset-28 rounded-full border border-white/[0.05]" />
        </div>
      </div>

      {/* ── Accent 5: Editorial Crosshair Precision Marks (+) ── */}
      <div className="pointer-events-none absolute top-10 left-8 hidden lg:block font-mono text-xs text-white/20 select-none" aria-hidden="true">+</div>
      <div className="pointer-events-none absolute top-10 right-12 hidden lg:block font-mono text-xs text-white/20 select-none" aria-hidden="true">+</div>
      <div className="pointer-events-none absolute bottom-28 left-12 hidden lg:block font-mono text-xs text-white/15 select-none" aria-hidden="true">+</div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* ───── Left column ───── */}
          <div className="lg:col-span-6 text-left">
            <h1
              id="hero-heading"
              className="text-[clamp(1.75rem,7.8vw,2.25rem)] sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold tracking-tight leading-tight text-white"
            >
              {HERO_COPY.heading.split(/<br\s*\/?>|\n/).map((line, idx, arr) => (
                <span key={idx} className="block whitespace-nowrap">
                  {line}
                  {idx < arr.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-[24.5em] sm:max-w-none text-[clamp(0.775rem,3.6vw,0.9rem)] sm:text-[15px] lg:text-[13.5px] xl:text-base font-semibold leading-relaxed text-white">
              {HERO_COPY.description.split(/<br\s*\/?>|\n/).map((line, idx, arr) => (
                <span key={idx} className="sm:block sm:whitespace-nowrap">
                  {line}
                  {idx < arr.length - 1 ? " " : ""}
                </span>
              ))}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <a
                id="hero-cta-whatsapp"
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group col-span-2 inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-[#4fc97a] px-7 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(79,201,122,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#43b36c] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4fc97a]/40 cursor-pointer"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {HERO_COPY.primaryCtaLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                id="hero-cta-paket"
                href="/#paket"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 sm:px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#134282] hover:border-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 cursor-pointer backdrop-blur-xs"
              >
                <LayoutGrid className="h-4 w-4" aria-hidden="true" />
                {HERO_COPY.secondaryPaketLabel}
              </Link>
              <Link
                id="hero-cta-portofolio"
                href="/#portofolio"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 sm:px-6 text-sm font-semibold text-white/90 transition-all duration-200 hover:bg-white/15 hover:text-white hover:border-white/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 cursor-pointer backdrop-blur-xs"
              >
                {HERO_COPY.secondaryPortfolioLabel}
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>

            {HERO_COPY.onlineStatus && (
              <p className="mt-4 flex items-center gap-2 text-xs text-blue-200/90">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
                </span>
                {HERO_COPY.onlineStatus}
              </p>
            )}

            <dl className="mt-12 grid max-w-md grid-cols-3 divide-x divide-white/20">
              {HERO_COPY.stats.map((s, i) => (
                <div key={s.label} className={i === 0 ? "pr-5" : "px-5"}>
                  <dd className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {s.value}
                  </dd>
                  <dt className="mt-1 text-xs text-blue-200/80">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* ───── Right column: layered triple-pillar stack (hidden on mobile) ───── */}
          <div className="hidden lg:block lg:col-span-6">
            <div className="group/stack relative mx-auto aspect-[1/1] w-full max-w-[560px] sm:aspect-[6/5]">
              <PosterCard />
              <PitchDeckCard />
              <BookSpreadCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
