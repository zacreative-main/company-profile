"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, LayoutGrid } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { buildWhatsAppLink } from "@/lib/constants";
import { HERO_COPY } from "@/lib/copywriting";

const cardBase =
  "absolute rounded-2xl border border-tint-border bg-white shadow-[0_20px_40px_-15px_rgba(11,28,48,0.12),0_2px_6px_-2px_rgba(11,28,48,0.06)] dark:bg-zinc-900 dark:border-white/10";

/* ───────────── Mockup A: Poster Infografis ───────────── */
function PosterCard() {
  return (
    <div
      className={`${cardBase} right-0 top-0 w-[44%] aspect-[3508/4961] rotate-[4deg] overflow-hidden transition-transform duration-500 ease-out group-hover/stack:rotate-[6deg] group-hover/stack:translate-x-1`}
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
      className={`${cardBase} left-[12%] top-[20%] w-[68%] aspect-[3192/1794] -rotate-[1.5deg] overflow-hidden transition-transform duration-500 ease-out group-hover/stack:-translate-y-1`}
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

/* ───────────── Mockup C: Editorial book spread ───────────── */
function BookSpreadCard() {
  return (
    <div
      className={`${cardBase} bottom-0 left-0 w-[74%] aspect-[2618/1848] rotate-[1.5deg] overflow-hidden bg-[#fdfdfb] dark:bg-zinc-900 transition-transform duration-500 ease-out group-hover/stack:translate-y-1`}
      aria-hidden="true"
    >
      <Image
        src="/images/assets/hero/buku.png"
        alt="Desain Layout Buku Zacreative"
        fill
        sizes="(min-width: 1024px) 420px, 0px"
        className="object-cover"
        priority
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-wash dark:bg-[#070d18] border-b border-tint-border/60 dark:border-white/10 transition-colors"
      data-purpose="hero-section"
      aria-labelledby="hero-heading"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-sky/15 blur-3xl dark:bg-brand/20"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* ───── Left column ───── */}
          <div className="lg:col-span-6 text-left">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight text-navy dark:text-white"
            >
              {HERO_COPY.heading}
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-navy-soft dark:text-zinc-300">
              {HERO_COPY.description}
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
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-navy/15 bg-white px-5 sm:px-6 text-sm font-semibold text-navy transition-colors duration-200 hover:border-brand hover:text-brand dark:bg-white/5 dark:border-white/15 dark:text-white dark:hover:border-sky-soft dark:hover:text-sky-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/40 cursor-pointer"
              >
                <LayoutGrid className="h-4 w-4" aria-hidden="true" />
                {HERO_COPY.secondaryPaketLabel}
              </Link>
              <Link
                id="hero-cta-portofolio"
                href="/#portofolio"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-tint-border bg-white/60 px-5 sm:px-6 text-sm font-semibold text-navy transition-colors duration-200 hover:border-brand hover:text-brand dark:bg-transparent dark:border-white/15 dark:text-white dark:hover:border-sky-soft dark:hover:text-sky-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/40 cursor-pointer"
              >
                {HERO_COPY.secondaryPortfolioLabel}
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>

            {HERO_COPY.onlineStatus && (
              <p className="mt-4 flex items-center gap-2 text-xs text-navy-soft/80 dark:text-zinc-400">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
                </span>
                {HERO_COPY.onlineStatus}
              </p>
            )}

            <dl className="mt-12 grid max-w-md grid-cols-3 divide-x divide-tint-border dark:divide-white/10">
              {HERO_COPY.stats.map((s, i) => (
                <div key={s.label} className={i === 0 ? "pr-5" : "px-5"}>
                  <dd className="text-2xl sm:text-3xl font-bold tracking-tight text-navy dark:text-white">
                    {s.value}
                  </dd>
                  <dt className="mt-1 text-xs text-navy-soft/80 dark:text-zinc-400">{s.label}</dt>
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
