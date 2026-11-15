"use client";

import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CTAButton } from "@/components/ui/CTAButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

const CONTACT_EMAIL = "contact@blevon.in";

export function LegalLayout({
  title,
  seoTitle,
  seoDescription,
  badge = "LEGAL & COMPLIANCE",
  description,
  lastUpdated = "November 2026",
  children,
}) {
  useEffect(() => {
    document.title = seoTitle || `${title} | Blevon Agency`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    if (seoDescription) {
      metaDesc.content = seoDescription;
    }
  }, [seoTitle, seoDescription, title]);

  const resolvedLastUpdated =
    lastUpdated === "[LAST UPDATED DATE]" ? "November 2026" : lastUpdated;

  return (
    <div className="min-h-screen bg-transparent text-[#0B132B]">
      <Navbar />

      <main className="pt-[72px] sm:pt-[80px] pb-16 md:pb-24">
        {/* Page Hero Header with Integrated Breadcrumb */}
        <section className="relative w-full pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10">
          <div className="global-container">
            <Breadcrumb
              items={[
                { label: "Home", to: "/" },
                { label: "Legal" },
                { label: title },
              ]}
              className="mb-6 sm:mb-8"
            />

            <div className="rounded-2xl sm:rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 md:p-10 text-[#0B132B]">
              <div className="max-w-3xl">
                <span className="mb-2.5 inline-block rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                  {badge}
                </span>
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[#0B132B] leading-tight">
                  {title}
                </h1>
                {description && (
                  <p className="mt-3 text-xs sm:text-sm md:text-[15px] text-[#526077] leading-[1.65]">
                    {description}
                  </p>
                )}
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-xs font-medium text-[#526077]">
                  <span className="inline-block size-2 rounded-full bg-[#2457E6]" />
                  <span>Effective &amp; Last Updated:</span>
                  <span className="font-semibold text-[#0B132B]">
                    {resolvedLastUpdated}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="global-container">
          <div className="max-w-4xl mx-auto">
            <article className="space-y-8 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 md:p-10 leading-relaxed text-xs sm:text-sm text-[#526077]">
              {children}

              {/* Bottom Contact Box */}
              <div className="mt-10 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-base font-semibold text-[#0B132B]">
                      Questions about our legal policies?
                    </h3>
                    <p className="mt-1 text-xs sm:text-[13.5px] text-[#526077]">
                      Write directly to our team at {CONTACT_EMAIL} for any formal inquiries or clarifications.
                    </p>
                  </div>
                  <CTAButton
                    href={`mailto:${CONTACT_EMAIL}`}
                    variant="primary"
                    size="sm"
                    icon="arrow-right"
                  >
                    Email Legal Team
                  </CTAButton>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default LegalLayout;
