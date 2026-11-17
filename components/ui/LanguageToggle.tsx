"use client";

import { useEffect } from "react";
import { useCopy, useLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/copywriting";

const OPTIONS: { code: Locale; label: string }[] = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
];

export default function LanguageToggle() {
  const [locale, setLocale] = useLocale();
  const { ui } = useCopy();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div
      role="group"
      aria-label={ui.langSwitchAria}
      className="inline-flex h-9 items-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 p-0.5 font-mono text-xs font-bold select-none"
    >
      {OPTIONS.map((opt) => {
        const active = locale === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={active}
            className={`h-full px-2.5 rounded-md transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#134282] ${
              active
                ? "bg-[#134282] text-white shadow-2xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
