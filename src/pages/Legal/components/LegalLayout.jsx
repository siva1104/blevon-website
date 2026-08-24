"use client";

import React, { useEffect } from "react";
import { Navbar2 } from "../../Home/components/Navbar2";
import { Footer8 } from "../../Home/components/Footer8";

const CONTACT_EMAIL = "contact@blevon.in";

export function LegalLayout({
  title,
  seoTitle,
  seoDescription,
  badge = "LEGAL & COMPLIANCE",
  description,
  lastUpdated = "[LAST UPDATED DATE]",
  children,
}) {
  useEffect(() => {
    document.title = seoTitle || `${title} | Blevon`;
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

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#101828]">
      {/* Navbar */}
      <Navbar2 />

      <main className="pt-22 sm:pt-26 md:pt-28 pb-16 md:pb-24">
        {/* Breadcrumb Navigation */}
        <div className="pt-2 pb-4">
          <div className="global-container">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium">
              <a href="/" className="text-[#667085] hover:text-[#2563EB] transition-colors">
                Home
              </a>
              <span className="text-[#98A2B3] select-none">/</span>
              <span className="text-[#667085]">Legal</span>
              <span className="text-[#98A2B3] select-none">/</span>
              <span className="font-semibold text-[#0E2A6D]">{title}</span>
            </nav>
          </div>
        </div>

        {/* Page Hero Header */}
        <section className="relative w-full pb-8 sm:pb-10">
          <div className="global-container">
            <div className="rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-white p-6 sm:p-8 md:p-10 shadow-2xs">
              <div className="max-w-3xl">
                <span className="mb-2 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                  {badge}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0E2A6D] leading-tight">
                  {title}
                </h1>
                {description && (
                  <p className="mt-2.5 text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {description}
                  </p>
                )}
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E4E7EC] bg-[#F7F8F6] px-3.5 py-1 text-[11px] font-medium text-[#667085]">
                  <span className="inline-block size-1.5 rounded-full bg-[#2563EB]" />
                  <span>Last Updated:</span>
                  <span className="font-semibold text-[#101828]">{lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="global-container">
          <div className="max-w-4xl mx-auto">
            {/* Prose Article */}
            <article className="space-y-8 rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-white p-6 sm:p-8 md:p-10 shadow-2xs leading-relaxed text-xs sm:text-sm text-[#344054]">
              {children}

              {/* Bottom Contact / Formal Notice Box */}
              <div className="mt-10 rounded-2xl border border-blue-100 bg-[#EAF1FF]/40 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-[#0E2A6D]">
                      Questions about our legal policies?
                    </h3>
                    <p className="mt-1 text-xs text-[#667085]">
                      Write directly to our team for any formal inquiries or clarifications.
                    </p>
                  </div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-[#2563EB] px-4 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-blue-700 active:scale-95"
                  >
                    <span>Email Us</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer8 />
    </div>
  );
}
