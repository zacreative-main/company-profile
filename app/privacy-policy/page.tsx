import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PrivacyPolicyContent from "@/components/sections/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Kebijakan Privasi (Privacy Policy)",
  description:
    "Kebijakan privasi Zacreative terkait pengumpulan, penggunaan, perlindungan data, kerahasiaan dokumen editorial, dan kepatuhan NDA.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] dark:bg-[#070D18] text-slate-800 dark:text-zinc-200">
      <Navbar />
      <PrivacyPolicyContent />
      <Footer />
    </div>
  );
}
