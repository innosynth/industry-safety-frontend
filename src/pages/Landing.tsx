
import React from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import CertificationSection from "@/components/landing/CertificationSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      <HeroSection />
      <CertificationSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Landing;
