import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { SpecialOffersSection } from "./sections/SpecialOffersSection";
import { WhyBlevonSection } from "./sections/WhyBlevonSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { DemoWebsitesSection } from "./sections/DemoWebsitesSection";
import { ProcessSection } from "./sections/ProcessSection";
import { TechStackSection } from "./sections/TechStackSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FaqSection } from "./sections/FaqSection";
import { CtaSection } from "./sections/CtaSection";

export function HomePage() {
  useEffect(() => {
    document.title =
      "Blevon — Website Development, Mobile App Development & E-commerce Solutions";
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-[#0B132B]">
      {/* Section 1: Premium Navigation Header */}
      <Navbar />

      <main>
        {/* Section 2: Hero Section (Includes Bottom Scrolling Offers Bar in 100svh Viewport) */}
        <HeroSection />

        {/* Section 3: Services */}
        <ServicesSection />

        {/* Section 4: Special Offers ($800 E-commerce & Free Website Bundle) */}
        <SpecialOffersSection />

        {/* Section 5: Why Choose Blevon? */}
        <WhyBlevonSection />

        {/* Section 6: Featured Projects / Portfolio */}
        <PortfolioSection />

        {/* Section 6B: Industry Niche Demo Websites Showcase */}
        <DemoWebsitesSection />

        {/* Section 7: Development Process (7-Step Visual Timeline) */}
        <ProcessSection />

        {/* Modern Tech Stack Showcase */}
        <TechStackSection />

        {/* Section 8: Verified Client Testimonials */}
        <TestimonialsSection />

        {/* Section 9: Interactive FAQ Accordion */}
        <FaqSection />

        {/* Section 10: Final CTA */}
        <CtaSection />
      </main>

      {/* Section 11: Professional Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
