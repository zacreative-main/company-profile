"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useCopy } from "@/lib/i18n";

interface PageBreadcrumbProps {
  pageKey: "portfolioLabel" | "privacyPolicyLabel" | "termsOfServiceLabel";
}

export default function PageBreadcrumb({ pageKey }: PageBreadcrumbProps) {
  const { ui } = useCopy();

  return (
    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-zinc-400">
      <Link
        href="/"
        className="inline-flex items-center gap-1 hover:text-[#134282] dark:hover:text-white transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{ui.homeLabel}</span>
      </Link>
      <span>/</span>
      <span className="text-slate-800 dark:text-zinc-200 font-semibold">
        {ui[pageKey]}
      </span>
    </div>
  );
}
