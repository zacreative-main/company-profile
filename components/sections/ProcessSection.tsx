"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ChevronDown, Triangle } from "lucide-react";
import { PROCESS_COPY } from "@/lib/copywriting";

export default function ProcessSection() {
  const [openSteps, setOpenSteps] = useState<number[]>([]);
  const [sectionOpen, setSectionOpen] = useState(false);

  // Buka otomatis bila pengunjung datang lewat tautan #cara-kerja (navbar/footer)
  useEffect(() => {
    const syncWithHash = () => {
      if (window.location.hash === "#cara-kerja") setSectionOpen(true);
    };
    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, []);

  const toggleStep = (idx: number) => {
    setOpenSteps((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section
      className="w-full bg-[#EEF5FF] dark:bg-[#070D18] py-14 sm:py-20 border-b border-[#E2E8F0] dark:border-zinc-800 transition-colors text-left"
      id="cara-kerja"
      data-purpose="process-flow-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar (klik judul / segitiga untuk membuka tahapan) */}
        <button
          type="button"
          onClick={() => setSectionOpen((v) => !v)}
          aria-expanded={sectionOpen}
          aria-controls="cara-kerja-list"
          className="group w-full flex items-start justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A54A4] rounded-xl"
        >
          <div className="space-y-2 max-w-2xl">
            {PROCESS_COPY.badge && (
              <span className="font-mono text-xs uppercase tracking-wider text-[#1A54A4] dark:text-[#38BDF8] font-semibold block">
                {PROCESS_COPY.badge}
              </span>
            )}
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0F172A] dark:text-white group-hover:text-[#1A54A4] dark:group-hover:text-[#38BDF8] transition-colors">
              {PROCESS_COPY.heading}
            </h2>
            {PROCESS_COPY.description && (
              <p className="text-sm sm:text-base text-[#64748B] dark:text-zinc-400 leading-relaxed">
                {PROCESS_COPY.description}
              </p>
            )}
          </div>
          <span
            aria-hidden="true"
            className={`mt-1 sm:mt-2 inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl border shrink-0 transition-all duration-300 ${
              sectionOpen
                ? "bg-[#1A54A4] border-[#1A54A4] text-white dark:bg-[#38BDF8] dark:border-[#38BDF8] dark:text-[#0F172A]"
                : "bg-white dark:bg-zinc-900 border-[#E2E8F0] dark:border-zinc-700 text-[#1A54A4] dark:text-[#38BDF8] group-hover:border-[#1A54A4]"
            }`}
          >
            <Triangle
              className={`h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current transition-transform duration-300 ${
                sectionOpen ? "rotate-180" : "rotate-90"
              }`}
            />
          </span>
        </button>

        {/* 5-Step Accordion List */}
        <div
          className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
            sectionOpen
              ? "grid-rows-[1fr] opacity-100 mt-6 sm:mt-8"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
        <div className="overflow-hidden" inert={!sectionOpen}>
        <div
          id="cara-kerja-list"
          className="space-y-3 w-full"
        >
            {PROCESS_COPY.steps.map((st, idx) => {
              const isOpen = openSteps.includes(idx);
              return (
                <div
                  key={st.num}
                  className={`rounded-2xl border-2 transition-all overflow-hidden ${isOpen
                    ? "border-[#1A54A4] dark:border-[#38BDF8] bg-[#F8FAFC] dark:bg-zinc-900 shadow-xs"
                    : "border-[#E2E8F0] dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleStep(idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 transition-colors ${isOpen
                          ? "bg-[#1A54A4] text-white dark:bg-[#38BDF8] dark:text-[#0F172A]"
                          : "bg-[#EBF2FA] dark:bg-zinc-800 text-[#1A54A4] dark:text-zinc-300"
                          }`}
                      >
                        {st.num}
                      </span>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg text-[#0F172A] dark:text-white">
                          {st.title}
                        </h3>
                        <p className="text-xs text-[#64748B] dark:text-zinc-400 mt-0.5 line-clamp-1 hidden sm:block">
                          {st.summary}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold shrink-0 transition-colors ${isOpen
                        ? "bg-[#1A54A4] text-white border-[#1A54A4] dark:bg-[#38BDF8] dark:text-[#0F172A] dark:border-[#38BDF8]"
                        : "border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-300"
                        }`}
                    >
                      <span className="hidden sm:inline">
                        {isOpen ? "Tutup" : "Detail"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#E2E8F0] dark:border-zinc-800 space-y-4 animate-in fade-in duration-200">
                      <p className="text-xs sm:text-sm text-[#424751] dark:text-zinc-300 leading-relaxed pl-14 sm:pl-16">
                        {st.details}
                      </p>
                      {st.deliverable && (
                        <div className="pl-14 sm:pl-16 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span className="font-mono text-xs text-[#0F172A] dark:text-zinc-200 font-semibold">
                            {PROCESS_COPY.deliverablePrefix} {st.deliverable}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
