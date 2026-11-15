"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  ArrowRight,
} from "lucide-react";
import { DEMO_NICHES, DEMO_WEBSITES } from "@/data/demos";

/**
 * Renders either the user's uploaded design image (`demo.image` / `demo.mobileImage`)
 * or a clean visual preview image when `demo.image` is not yet uploaded.
 */
export function NicheBrowserCanvas({
  demo,
  viewMode = "desktop",
  isLarge = false,
}) {
  const theme = demo.mockupTheme || {
    primary: "#0B132B",
    accent: "#2457E6",
    softBg: "#F3F7FF",
    heroTag: demo.nicheLabel,
    heroHeadline: demo.businessName || demo.title,
    ctaLabel: "View Demo",
  };

  const activeImage =
    viewMode === "mobile" ? demo.mobileImage || demo.image : demo.image;

  if (activeImage) {
    return (
      <div
        className={`relative w-full overflow-hidden bg-[#F8FAFC] ${
          viewMode === "mobile"
            ? "mx-auto max-w-[270px] rounded-[2rem] border-[5px] border-[#0B132B] shadow-2xl"
            : "aspect-[16/10]"
        }`}
      >
        <img
          src={activeImage}
          alt={demo.businessName || demo.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
      }}
      className={`relative w-full overflow-hidden flex flex-col justify-between text-white transition-transform duration-500 group-hover:scale-[1.02] ${
        viewMode === "mobile"
          ? "mx-auto max-w-[260px] aspect-[9/16] rounded-[1.85rem] border-[5px] border-[#0B132B] p-5 shadow-2xl"
          : isLarge
            ? "aspect-[16/10] p-7 sm:p-10"
            : "aspect-[16/10] p-6"
      }`}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/15 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-10 -bottom-10 size-36 rounded-full bg-black/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-block rounded-full bg-white/15 px-3 py-1 font-mono text-[10px] font-medium tracking-wider uppercase text-white/95 backdrop-blur-xs">
          {demo.nicheLabel}
        </span>
      </div>

      <div className="relative z-10 my-auto py-3">
        <p
          className={`font-heading font-semibold tracking-tight text-white leading-tight ${
            isLarge ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
          }`}
        >
          {demo.businessName || demo.title}
        </p>
        <p className="mt-1.5 text-xs sm:text-sm text-white/80 font-normal line-clamp-1">
          {theme.heroHeadline}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[11px] font-medium text-white/80 border-t border-white/15 pt-3">
        <span>{demo.domainPreview}</span>
        <span>Demo Preview</span>
      </div>
    </div>
  );
}

export function DemoWebsitesSection() {
  const [activeNiche, setActiveNiche] = useState("all");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollContainerRef = useRef(null);

  const filteredDemos =
    activeNiche === "all"
      ? DEMO_WEBSITES
      : DEMO_WEBSITES.filter((d) => d.niche === activeNiche);

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 12);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 12);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "smooth" });
    const timer = setTimeout(updateScrollState, 120);
    return () => clearTimeout(timer);
  }, [activeNiche, updateScrollState]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.querySelector("[data-demo-card]");
    const step = firstCard ? firstCard.offsetWidth + 20 : 350;
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="demos"
      className="relative w-full scroll-mt-24 bg-transparent py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="global-container relative z-10">
        {/* 1. SECTION HEADER (Consistent Centered Position Matching All Other Sections) */}
        <div className="mx-auto mb-10 sm:mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#2457E6]/20 bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase shadow-xs">
            <Layers className="size-3" />
            <span>DEMO WEBSITES</span>
          </span>
          <h2 className="font-heading text-[28px] sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]">
            Explore Industry{" "}
            <span className="bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">
              Demo Websites.
            </span>
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-[14.5px] sm:text-[15.5px] text-[#526077] leading-[1.65]">
            Browse interactive website layouts tailored for healthcare,
            e-commerce, real estate, hospitality, fitness, and corporate
            businesses.
          </p>
        </div>

        {/* 2. NICHE FILTER PILLS + ARROW CONTROLS ROW */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div
            className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Filter demo websites by industry niche"
          >
            {DEMO_NICHES.map((tab) => {
              const isActive = activeNiche === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveNiche(tab.id)}
                  className={`inline-flex shrink-0 items-center rounded-full border px-4 py-1.5 text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-[#2457E6] bg-gradient-to-r from-[#2457E6] to-[#6366F1] text-white shadow-xs"
                      : "border-[#E2E8F0] bg-white/90 backdrop-blur-md text-[#334155] hover:border-[#2457E6]/35 hover:text-[#2457E6]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Left / Right Carousel Arrow Buttons */}
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            <button
              type="button"
              onClick={() => scrollByCard("prev")}
              disabled={!canScrollLeft}
              aria-label="Previous demo website"
              className={`flex size-9 items-center justify-center rounded-full border transition-all duration-200 ${
                canScrollLeft
                  ? "border-[#CBD5E1] bg-white/90 text-[#0F172A] hover:border-[#2457E6] hover:bg-[#2457E6] hover:text-white cursor-pointer"
                  : "border-[#E2E8F0] bg-white/50 text-[#CBD5E1] cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              disabled={!canScrollRight}
              aria-label="Next demo website"
              className={`flex size-9 items-center justify-center rounded-full border transition-all duration-200 ${
                canScrollRight
                  ? "border-[#CBD5E1] bg-white/90 text-[#0F172A] hover:border-[#2457E6] hover:bg-[#2457E6] hover:text-white cursor-pointer"
                  : "border-[#E2E8F0] bg-white/50 text-[#CBD5E1] cursor-not-allowed"
              }`}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* 3. DEMO CARDS TRACK */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {filteredDemos.map((demo, idx) => (
              <motion.article
                key={demo.id}
                data-demo-card
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group w-[80vw] sm:w-[320px] lg:w-[350px] shrink-0 snap-start flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white/90 backdrop-blur-md p-4 hover:border-[#2457E6]/35 hover:shadow-[0_12px_28px_-6px_rgba(36,87,230,0.08)] transition-all duration-200"
              >
                <Link
                  to={`/demos/${demo.slug}`}
                  className="block overflow-hidden rounded-xl border border-[#E2E8F0]"
                >
                  <NicheBrowserCanvas demo={demo} viewMode="desktop" />
                </Link>

                <div className="mt-3.5">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#2457E6] block">
                    {demo.nicheLabel}
                  </span>
                  <h3 className="mt-0.5 font-heading text-[16.5px] font-semibold tracking-[-0.02em] text-[#0B132B] group-hover:text-[#2457E6] transition-colors">
                    {demo.businessName || demo.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F1F5F9]">
                  <Link
                    to={`/demos/${demo.slug}`}
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#0B132B] group-hover:text-[#2457E6] transition-colors"
                  >
                    <span>View Interactive Demo</span>
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoWebsitesSection;
