import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustIndicators from "@/components/sections/TrustIndicators";
import LazyHomeSections from "@/components/sections/LazyHomeSections";
import Reveal from "@/components/motion/Reveal";
import { getPublicPortfolioPosts } from "@/lib/portfolio-store";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const posts = await getPublicPortfolioPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero & Trust Indicators are above the fold: rendered eagerly without opacity delay */}
        <HeroSection />
        <TrustIndicators />
        <LazyHomeSections instagramPosts={posts} />
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}
