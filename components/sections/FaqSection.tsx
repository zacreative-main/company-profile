"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_COPY } from "@/lib/copywriting";

export default function FaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFaq = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section
      className="w-full bg-white dark:bg-zinc-950 py-14 sm:py-20 border-b border-[#E2E8F0] dark:border-zinc-800 transition-colors text-left"
      id="faq"
      data-purpose="faq-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Header Bar */}
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            {FAQ_COPY.heading}
          </h2>
        </div>

        {/* Accordion Q&A list (questions visible, answers collapsed by default) */}
        <div id="faq-list" className="space-y-3 w-full">
          {FAQ_COPY.items.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-[#1A54A4] dark:border-[#38BDF8] bg-white dark:bg-zinc-900 shadow-xs"
                    : "border-[#E2E8F0] dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#0F172A] dark:text-white pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#1A54A4] text-white dark:bg-[#38BDF8] dark:text-[#0F172A] border-[#1A54A4]"
                        : "border-zinc-200 dark:border-zinc-700 text-zinc-500"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#424751] dark:text-zinc-300 leading-relaxed border-t border-[#E2E8F0] dark:border-zinc-800 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
