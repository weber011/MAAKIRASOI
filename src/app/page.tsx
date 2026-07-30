import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StorySection from "@/components/home/StorySection";
import PromiseSection from "@/components/home/PromiseSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import FeaturedShowcase from "@/components/home/FeaturedShowcase";
import IngredientsParallax from "@/components/home/IngredientsParallax";
import ComparisonSection from "@/components/home/ComparisonSection";
import OrderTimeline from "@/components/home/OrderTimeline";
import ServicesSection from "@/components/home/ServicesSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-luxury-beige">
      <Navbar />
      <HeroSection />
      <StorySection />
      <PromiseSection />
      <ProductShowcase />
      <FeaturedShowcase />
      <IngredientsParallax />
      <ComparisonSection />
      <OrderTimeline />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
