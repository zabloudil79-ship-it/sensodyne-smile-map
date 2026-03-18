import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import MapSection from "@/components/MapSection";
import GallerySection from "@/components/GallerySection";
import ProductsSection from "@/components/ProductsSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyNav />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MapSection />
      <GallerySection />
      <ProductsSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Index;
