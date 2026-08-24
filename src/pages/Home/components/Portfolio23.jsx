"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import kavuturuLogo from "../../../assets/images/clients/kavuturu-logo.png";

export const PROJECTS_DATA = [
  {
    id: 1,
    num: "01",
    name: "KAVUTURU DENTAL CLINIC",
    category: "Website Development",
    description:
      "A fast, modern clinic website with online booking and patient-first navigation, built to establish a reliable digital presence.",
    logo: kavuturuLogo,
    link: "/case-study",
    linkText: "View Project",
  },
];

export function Portfolio23() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = PROJECTS_DATA[currentIndex] || PROJECTS_DATA[0];
  const hasMultipleProjects = PROJECTS_DATA.length > 1;

  const handlePrev = () => {
    if (!hasMultipleProjects) return;
    setCurrentIndex((prev) =>
      prev === 0 ? PROJECTS_DATA.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!hasMultipleProjects) return;
    setCurrentIndex((prev) =>
      prev === PROJECTS_DATA.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="work"
      className="relative w-full py-12 sm:py-16 md:py-18"
    >
      <div className="global-container">
        {/* Section Header: Centered with Controlled Width */}
        <header className="mx-auto mb-7 max-w-xl text-center sm:mb-9">
          <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
            WORK
          </span>
          <h2 className="mb-2.5 text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
            Selected work.
          </h2>
          <p className="mx-auto max-w-[480px] text-sm text-[#667085] sm:text-[15px] leading-relaxed">
            A selection of digital experiences we've built for businesses.
          </p>
        </header>

        {/* Showcase Area with Optional Navigation Arrows */}
        <div className="relative mx-auto flex w-full items-center justify-center gap-3 sm:gap-5 md:gap-7">
          {/* Left Navigation Arrow (Desktop) */}
          {hasMultipleProjects && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="hidden sm:flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#0E2A6D] shadow-xs transition-all duration-200 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] hover:scale-105 active:scale-95 focus:outline-none"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Active Featured Project Card */}
          <div className="w-full max-w-lg md:max-w-xl lg:max-w-[660px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={currentProject.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-1 items-center gap-5 rounded-2xl border border-[#E4E7EC] bg-white p-5 sm:p-6 md:grid-cols-[1.1fr_0.9fr] lg:gap-6 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-md"
              >
                {/* Left Column: Project Details */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {/* 1. Project Number */}
                    <span className="text-xs font-bold tracking-[0.18em] text-[#2563EB] uppercase">
                      {currentProject.num}
                    </span>

                    {/* 2. Project Title */}
                    <h3 className="mt-1 text-base font-bold tracking-tight text-[#101828] sm:text-lg leading-[1.2] uppercase">
                      {currentProject.name}
                    </h3>

                    {/* 3. Category Badge */}
                    <div className="mt-1.5">
                      <span className="inline-block rounded-full border border-[#E4E7EC] bg-[#EAF1FF] px-2.5 py-0.5 text-xs font-semibold text-[#2563EB]">
                        {currentProject.category}
                      </span>
                    </div>

                    {/* 4. Description */}
                    <p className="mt-2.5 text-xs text-[#667085] leading-relaxed sm:text-sm">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* 5. View Project Link */}
                  <div className="mt-4 pt-3 border-t border-[#E4E7EC]">
                    <a
                      href={currentProject.link || "/case-study"}
                      className="group/link inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0E2A6D] transition-colors duration-200 hover:text-[#2563EB]"
                    >
                      <span>{currentProject.linkText || "View Project"}</span>
                      <span className="text-[#2563EB] transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Dedicated Client Logo Panel (Sleek Compact 16:9) */}
                <div className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-[#F7F8F6]">
                  <a
                    href={currentProject.link || "/case-study"}
                    className="flex aspect-[16/9] w-full items-center justify-center p-4 sm:p-5 focus:outline-none transition-transform duration-700 group-hover:scale-105"
                  >
                    <img
                      src={currentProject.logo}
                      alt={`${currentProject.name} client logo`}
                      className="max-h-12 sm:max-h-14 w-auto max-w-[80%] object-contain"
                      loading="lazy"
                    />
                  </a>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Right Navigation Arrow (Desktop) */}
          {hasMultipleProjects && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="hidden sm:flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#0E2A6D] shadow-xs transition-all duration-200 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] hover:scale-105 active:scale-95 focus:outline-none"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Navigation Arrows (Below Card) */}
        {hasMultipleProjects && (
          <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="flex size-9 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#0E2A6D] shadow-xs transition-all duration-200 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] active:scale-95 focus:outline-none"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="flex size-9 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#0E2A6D] shadow-xs transition-all duration-200 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] active:scale-95 focus:outline-none"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* Secondary CTA: Explore Our Work → */}
        <div className="mt-7 flex items-center justify-center">
          <a
            href="/work"
            className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-[#E4E7EC] bg-white px-5 py-2 text-xs sm:text-sm font-semibold text-[#101828] shadow-xs transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Our Work</span>
            <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
