"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Lock, CheckCircle2, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

export default function PrivacyPolicyContent() {
  const [locale] = useLocale();
  const isEn = locale === "en";

  return (
    <main className="flex-grow py-10 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-zinc-400">
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-[#134282] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isEn ? "Home" : "Beranda"}</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-zinc-200 font-semibold">
            {isEn ? "Privacy Policy" : "Kebijakan Privasi"}
          </span>
        </div>

        {/* Page Header */}
        <div className="space-y-4 border-b border-slate-200 dark:border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider text-[#134282] uppercase dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-sky-300">
            <Shield className="w-3.5 h-3.5" />
            {isEn ? "Legal & Privacy Document" : "Legal & Dokumen Privasi"}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy dark:text-white leading-tight">
            {isEn ? "Privacy Policy" : "Kebijakan Privasi"}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            {isEn ? (
              <>
                Zacreative (&ldquo;we&rdquo;) respects and is fully committed to protecting the privacy and data confidentiality of all our clients, prospective clients, and website visitors. This document explains how we manage, use, and safeguard the security of your data and project manuscript documents.
              </>
            ) : (
              <>
                Zacreative (&ldquo;kami&rdquo;) menghormati dan berkomitmen penuh untuk melindungi privasi serta kerahasiaan data seluruh klien, calon klien, dan pengunjung situs kami. Dokumen ini menjelaskan bagaimana kami mengelola, menggunakan, dan menjaga keamanan data serta dokumen naskah proyek Anda.
              </>
            )}
          </p>
          <p className="text-xs font-mono text-slate-500 dark:text-zinc-400">
            {isEn ? "Last Updated: November 2026" : "Pembaruan Terakhir: November 2026"}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          {/* 1. Informasi yang Kami Kumpulkan */}
          <section className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-3 text-lg font-bold text-navy dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#134282] dark:bg-zinc-800 dark:text-sky-400 text-xs font-mono font-bold">
                01
              </span>
              <h2>{isEn ? "Information We Collect" : "Informasi yang Kami Kumpulkan"}</h2>
            </div>
            <p className="text-slate-600 dark:text-zinc-300">
              {isEn
                ? "In order to provide optimal layout design and creative consultation services, we collect several types of information:"
                : "Dalam rangka memberikan layanan desain tata letak (layout) dan konsultasi kreatif secara optimal, kami mengumpulkan beberapa jenis informasi:"}
            </p>
            <ul className="space-y-2.5 pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#134282] dark:text-sky-400 shrink-0 mt-1" />
                <span>
                  {isEn ? (
                    <>
                      <strong>Contact Information:</strong> Full name, email address, WhatsApp contact number, as well as the name of your agency, institution, or company.
                    </>
                  ) : (
                    <>
                      <strong>Informasi Kontak:</strong> Nama lengkap, alamat email, nomor kontak WhatsApp, serta nama instansi, lembaga, atau perusahaan Anda.
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#134282] dark:text-sky-400 shrink-0 mt-1" />
                <span>
                  {isEn ? (
                    <>
                      <strong>Project Materials & Documents:</strong> Book manuscripts, presentation material drafts, annual report manuscripts, statistical data, charts, photos, and logos that you provide for design purposes.
                    </>
                  ) : (
                    <>
                      <strong>Materi & Dokumen Proyek:</strong> Naskah buku, draf materi presentasi, naskah laporan tahunan, data statistik, grafik, foto, dan logo yang Anda berikan untuk keperluan perancangan desain.
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#134282] dark:text-sky-400 shrink-0 mt-1" />
                <span>
                  {isEn ? (
                    <>
                      <strong>Technical Interaction Data:</strong> Anonymous site browsing analytics information to improve the display quality and performance of our web platform.
                    </>
                  ) : (
                    <>
                      <strong>Data Interaksi Teknis:</strong> Informasi analitik penjelajahan situs anonim guna meningkatkan kualitas tampilan dan performa platform web kami.
                    </>
                  )}
                </span>
              </li>
            </ul>
          </section>

          {/* 2. Kerahasiaan Dokumen & Non-Disclosure Agreement (NDA) */}
          <section className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-3 text-lg font-bold text-navy dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#134282] dark:bg-zinc-800 dark:text-sky-400 text-xs font-mono font-bold">
                02
              </span>
              <h2>{isEn ? "Document Confidentiality & NDA Agreement" : "Kerahasiaan Dokumen & Perjanjian NDA"}</h2>
            </div>
            <p className="text-slate-600 dark:text-zinc-300">
              {isEn
                ? "We fully understand that editorial manuscript materials, institutional performance reports, SOE financial reports, academic research materials, and investor pitch decks are often confidential and not yet published to the general public."
                : "Kami memahami sepenuhnya bahwa materi naskah editorial, laporan kinerja instansi, laporan keuangan BUMN, materi riset akademis, dan pitch deck investor seringkali bersifat rahasia serta belum dipublikasikan kepada khalayak umum."}
            </p>
            <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 dark:border-blue-900/40 dark:bg-blue-950/20 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#134282] dark:text-sky-300 text-sm">
                <Lock className="w-4 h-4" />
                <span>
                  {isEn
                    ? "Full Confidentiality Guarantee & Willingness to Sign NDA"
                    : "Jaminan Kerahasiaan Penuh & Kesediaan Penandatanganan NDA"}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                {isEn
                  ? "Zacreative guarantees that all your confidential data and documents will not be transferred, sold, distributed, or handed over to third parties without your written consent. We are willing to sign an official Non-Disclosure Agreement (NDA) before manuscripts or drafts are shared."
                  : "Zacreative menjamin bahwa seluruh data dan dokumen rahasia Anda tidak akan dialihkan, dijual, disebarluaskan, atau diserahkan kepada pihak ketiga tanpa persetujuan tertulis dari Anda. Kami bersedia menandatangani perjanjian kerahasiaan (*Non-Disclosure Agreement* / NDA) resmi sebelum naskah atau draf dibagikan."}
              </p>
            </div>
          </section>

          {/* 3. Penggunaan Materi & Kebijakan Portofolio */}
          <section className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-3 text-lg font-bold text-navy dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#134282] dark:bg-zinc-800 dark:text-sky-400 text-xs font-mono font-bold">
                03
              </span>
              <h2>{isEn ? "Material Usage & Portfolio Publication" : "Penggunaan Materi & Publikasi Portofolio"}</h2>
            </div>
            <p className="text-slate-600 dark:text-zinc-300">
              {isEn
                ? "The materials you submit are used solely for executing the layout arrangement process, visual aesthetic design, and completing your design order."
                : "Materi yang Anda serahkan semata-mata digunakan untuk pelaksanaan proses penataan tata letak, perancangan estetika visual, serta penyelesaian pesanan desain Anda."}
            </p>
            <p className="text-slate-600 dark:text-zinc-300">
              {isEn
                ? "Zacreative will only display visual excerpts of completed works on our website portfolio or social media if:"
                : "Zacreative hanya akan menampilkan cuplikan visual hasil karya pada portofolio situs web atau media sosial kami jika:"}
            </p>
            <ul className="space-y-2 pl-1 text-slate-600 dark:text-zinc-300">
              <li className="flex items-start gap-2.5">
                <span className="text-[#134282] dark:text-sky-400 font-bold">•</span>
                <span>
                  {isEn
                    ? "The work or book has been officially published / distributed to the public by the client; or"
                    : "Karya atau buku tersebut telah diterbitkan / didistribusikan secara resmi ke publik oleh pihak klien; atau"}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#134282] dark:text-sky-400 font-bold">•</span>
                <span>
                  {isEn
                    ? "The client has provided written confirmation permission for design sample publication."
                    : "Klien telah memberikan izin konfirmasi tertulis untuk publikasi sampel desain."}
                </span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-zinc-400">
              {isEn
                ? "* Clients have the right to request that their project works not be published on social media or public portfolios if necessary."
                : "* Klien berhak meminta agar hasil karya proyeknya tidak dipublikasikan ke media sosial maupun portofolio publik jika diperlukan."}
            </p>
          </section>

          {/* 4. Keamanan & Penyimpanan Berkas */}
          <section className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-3 text-lg font-bold text-navy dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#134282] dark:bg-zinc-800 dark:text-sky-400 text-xs font-mono font-bold">
                04
              </span>
              <h2>{isEn ? "Security & Master File Storage" : "Keamanan & Penyimpanan Berkas Master"}</h2>
            </div>
            <p className="text-slate-600 dark:text-zinc-300">
              {isEn
                ? "Digital project files are stored in cloud storage repositories with industry-standard security protection. After the entire final file handover process is completed and the revision warranty period ends, clients have the right to request us to delete or archive source documents if desired."
                : "Berkas proyek digital disimpan dalam repositori cloud storage dengan proteksi keamanan standar industri. Setelah seluruh proses serah terima berkas final selesai dan masa garansi revisi berakhir, klien berhak meminta kami untuk menghapus atau mengarsipkan dokumen sumber jika diinginkan."}
            </p>
          </section>

          {/* 5. Hak Pengguna & Klien */}
          <section className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-3 text-lg font-bold text-navy dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#134282] dark:bg-zinc-800 dark:text-sky-400 text-xs font-mono font-bold">
                05
              </span>
              <h2>{isEn ? "Client Rights Over Personal Data" : "Hak Klien Atas Data Pribadi"}</h2>
            </div>
            <p className="text-slate-600 dark:text-zinc-300">
              {isEn ? "You have the full right to:" : "Anda memiliki hak penuh untuk:"}
            </p>
            <ul className="space-y-2 pl-1 text-slate-600 dark:text-zinc-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#134282] dark:text-sky-400 shrink-0 mt-1" />
                <span>
                  {isEn
                    ? "Request confirmation regarding your data or manuscript files stored in our system."
                    : "Meminta konfirmasi mengenai data atau berkas naskah Anda yang tersimpan di sistem kami."}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#134282] dark:text-sky-400 shrink-0 mt-1" />
                <span>
                  {isEn
                    ? "Request correction, updating, or permanent deletion of project files after the final file handover."
                    : "Meminta perbaikan, pembaruan, atau penghapusan permanen berkas proyek setelah serah terima berkas final."}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#134282] dark:text-sky-400 shrink-0 mt-1" />
                <span>
                  {isEn
                    ? "Submit a special NDA request before the manuscript submission process begins."
                    : "Mengajukan permohonan NDA khusus sebelum proses pengiriman naskah dimulai."}
                </span>
              </li>
            </ul>
          </section>

          {/* 6. Hubungi Kami */}
          <section className="rounded-2xl border border-blue-200 bg-blue-50/50 dark:border-zinc-800 dark:bg-zinc-900/80 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-3 text-lg font-bold text-navy dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#134282] text-white text-xs font-mono font-bold">
                06
              </span>
              <h2>{isEn ? "Privacy Policy Questions & Contact" : "Pertanyaan & Kontak Kebijakan Privasi"}</h2>
            </div>
            <p className="text-slate-600 dark:text-zinc-300">
              {isEn
                ? "If you have questions regarding this privacy policy or would like to discuss a special confidentiality agreement for your institutional project, please contact our team:"
                : "Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau ingin mendiskusikan perjanjian kerahasiaan khusus untuk proyek instansi Anda, silakan hubungi tim kami:"}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-slate-800 dark:text-white px-5 py-3 text-sm font-semibold transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>{CONTACT.email}</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
