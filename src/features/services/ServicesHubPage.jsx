"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesSection } from "@/features/home/sections/ServicesSection";
import { SpecialOffersSection } from "@/features/home/sections/SpecialOffersSection";
import { ProcessSection } from "@/features/home/sections/ProcessSection";
import { FaqSection } from "@/features/home/sections/FaqSection";
import { CtaSection } from "@/features/home/sections/CtaSection";

export function ServicesHubPage() {
  useEffect(() => {
    document.title =
      "All Digital Services & Packages | Blevon Agency";
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-[#151B2C]">
      <Navbar />
      <main className="pt-[72px] sm:pt-[80px]">
        <ServicesSection isHubPage />
        <SpecialOffersSection />
        <ProcessSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default ServicesHubPage;
