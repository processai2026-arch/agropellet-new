import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

// Lazy load heavy components with Framer Motion
const FrameAnimationSection = lazy(() => import("@/components/FrameAnimationSection"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const SolutionsSection = lazy(() => import("@/components/SolutionsSection"));
const IndustriesSection = lazy(() => import("@/components/IndustriesSection"));
const WhyChooseUsSection = lazy(() => import("@/components/WhyChooseUsSection"));
const ImpactSection = lazy(() => import("@/components/ImpactSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="h-screen" />}>
        <FrameAnimationSection />
      </Suspense>
      <AboutSection />
      <Suspense fallback={<div className="min-h-screen" />}>
        <ProductsSection />
        <SolutionsSection />
        <IndustriesSection />
        <WhyChooseUsSection />
        <ImpactSection />
        <TestimonialsSection />
        <ContactSection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
