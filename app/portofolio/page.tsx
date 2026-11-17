import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PortfolioSection from "@/components/sections/PortfolioSection";
import { getPublicPortfolioPosts } from "@/lib/portfolio-store";
import { PORTFOLIO_COPY } from "@/lib/copywriting";

export const metadata: Metadata = {
  title: "Portofolio Karya",
  description: PORTFOLIO_COPY.description,
  alternates: {
    canonical: "/portofolio",
  },
  openGraph: {
    title: "Portofolio Karya | Zacreative",
    description: PORTFOLIO_COPY.description,
    url: "/portofolio",
    images: [
      {
        url: "/images/og-thumbnail.jpg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "Portofolio Karya Zacreative",
      },
    ],
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function PortofolioPage() {
  const posts = await getPublicPortfolioPosts();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          <PageBreadcrumb pageKey="portfolioLabel" />
        </div>

        <PortfolioSection posts={posts} showAll />
      </main>

      <Footer />
    </div>
  );
}
