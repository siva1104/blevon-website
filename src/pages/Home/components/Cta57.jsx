"use client";

import React from "react";

export function Cta57() {
  return (
    <section className="relative w-full border-t border-[#E4E7EC] bg-gradient-to-b from-[#F7F8F6] to-[#EAF1FF]/70 py-16 sm:py-20 md:py-24 text-center">
      <div className="global-container">
        <div className="mx-auto max-w-3xl">
          {/* Eyebrow */}
          <span className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm md:text-base">
            LET'S CONNECT
          </span>

          {/* Headline */}
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#101828] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12]">
            Have a project in mind?
          </h2>

          {/* Description */}
          <p className="mx-auto mb-8 sm:mb-10 max-w-[620px] text-base text-[#667085] sm:text-xl lg:text-2xl leading-relaxed">
            Tell us about what you're looking to build. We'll show you how thoughtful design and engineering can help you achieve your goals.
          </p>

          {/* Improved CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto">
            {/* Primary Action Button */}
            <a
              href="/contact"
              className="group inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#2563EB] px-8 sm:px-10 text-base sm:text-lg font-semibold text-white shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <span className="text-white transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>

            {/* Secondary Action Button */}
            <a
              href="/work"
              className="group inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-[#D0D5DD] bg-white px-8 sm:px-10 text-base sm:text-lg font-semibold text-[#0E2A6D] shadow-xs backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Our Work</span>
              <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
