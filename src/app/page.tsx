import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";
import BannerSection from "@/components/BannerSection";
import SpecsSection from "@/components/SpecsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <VideosSection />
        <BannerSection />
        <SpecsSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
