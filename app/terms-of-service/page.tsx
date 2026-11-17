import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TermsOfServiceContent from "@/components/sections/TermsOfServiceContent";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan (Terms of Service)",
  description:
    "Syarat dan ketentuan layanan desain layout buku, laporan instansi, presentasi PowerPoint, dan poster infografis di Zacreative.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] dark:bg-[#070D18] text-slate-800 dark:text-zinc-200">
      <Navbar />
      <TermsOfServiceContent />
      <Footer />
    </div>
  );
}
