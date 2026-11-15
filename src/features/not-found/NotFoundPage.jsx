"use client";

import React, { useEffect } from "react";
import { Compass } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "404 — Page Not Found | Blevon Agency";
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-transparent text-[#0B132B]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-28 pb-20">
        <div className="global-container">
          <div className="mx-auto max-w-2xl rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 sm:p-12 text-center">
            <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white text-[#2457E6]">
              <Compass className="size-6" />
            </div>

            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#2457E6]">
              ERROR 404 · ROUTE NOT FOUND
            </span>

            <h1 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.035em] text-[#0B132B]">
              This Page Has Moved or Doesn&apos;t Exist.
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-[14.5px] sm:text-[15.5px] text-[#526077] leading-[1.68]">
              The URL you requested could not be located on Blevon. Explore our digital engineering services, portfolio case studies, or return to the homepage below.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CTAButton
                to="/"
                variant="primary"
                size="default"
                icon="arrow-right"
              >
                Return to Homepage
              </CTAButton>
              <CTAButton
                to="/services"
                variant="secondary"
                size="default"
              >
                Explore Our Services
              </CTAButton>
              <CTAButton
                to="/contact"
                variant="secondary"
                size="default"
              >
                Contact Support
              </CTAButton>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
