"use client";

import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

// Dynamic imports for below-the-fold heavy components
const FrameAnimationSection = dynamic(() => import("@/components/FrameAnimationSection"), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>,
  ssr: false
});

const ProductsSection = dynamic(() => import("@/components/ProductsSection"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});

const SolutionsSection = dynamic(() => import("@/components/SolutionsSection"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});

const IndustriesSection = dynamic(() => import("@/components/IndustriesSection"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});

const WhyChooseUsSection = dynamic(() => import("@/components/WhyChooseUsSection"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});

const ImpactSection = dynamic(() => import("@/components/ImpactSection"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});

const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      {/* <FrameAnimationSection /> */}
      <AboutSection />
      <ProductsSection />
      <SolutionsSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ImpactSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
