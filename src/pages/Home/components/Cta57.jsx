"use client";

import React from "react";

export function Cta57() {
  return (
    <section className="relative w-full border-t border-[#E4E7EC] bg-gradient-to-b from-[#F7F8F6] to-[#EAF1FF]/70 py-12 sm:py-16 md:py-18 text-center">
      <div className="global-container">
        <div className="mx-auto max-w-2xl">
          {/* Eyebrow */}
          <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
            LET'S CONNECT
          </span>

          {/* Headline */}
          <h2 className="mb-2.5 text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
            Have a project in mind?
          </h2>

          {/* Description */}
          <p className="mx-auto mb-5 max-w-[460px] text-xs text-[#667085] sm:text-sm leading-relaxed">
            Tell us about what you're looking to build. We'll show you how thoughtful design and engineering can help you achieve your goals.
          </p>

          {/* Improved CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            {/* Primary Action Button */}
            <a
              href="/contact"
              className="group inline-flex h-11 sm:h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#2563EB] px-5 sm:px-6 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(37,99,235,0.25)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <span className="text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Secondary Action Button */}
            <a
              href="/work"
              className="group inline-flex h-11 sm:h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#D0D5DD] bg-white px-5 sm:px-6 text-xs sm:text-sm font-semibold text-[#0E2A6D] shadow-xs backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Our Work</span>
              <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
