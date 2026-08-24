"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Monitor scroll position for subtle parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Respect system reduced motion preference
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);
    const handleMotionChange = (e) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  const heroOpacity = isReducedMotion ? 1 : Math.max(0, 1 - scrollY / 700);
  const contentParallaxY = isReducedMotion ? 0 : scrollY * 0.08;

  return (
    <section
      className="global-container relative z-10 flex min-h-screen w-full flex-col items-center justify-center bg-transparent pt-20 sm:pt-24 pb-10 sm:pb-12"
      style={{
        opacity: heroOpacity,
        transition: "opacity 200ms ease-out",
      }}
    >
      {/* Centered Main Hero Content Container (max-w approximately 850–950px) */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-[880px] mx-auto"
        style={{
          transform: `translateY(${contentParallaxY}px)`,
          transition: "transform 100ms ease-out",
        }}
      >
        {/* Eyebrow (~12–14px, 0.18–0.22em tracking, 20–24px spacing to H1) */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 sm:mb-6 text-[12px] sm:text-[13px] md:text-[13.5px] font-semibold tracking-[0.2em] text-[#0E2A6D] uppercase"
        >
          BLEVON DIGITAL STUDIO
        </motion.span>

        {/* Large Editorial Headline (52–64px desktop, 2-line structure, max-w ~820px) */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[820px] text-center text-[32px] xs:text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px] font-bold tracking-tight text-[#101828] leading-[1.08] sm:leading-[1.06]"
        >
          <span>Websites and apps,</span>
          <span className="block mt-1 sm:mt-1.5 text-[#2563EB]">
            built around your business.
          </span>
        </motion.h1>

        {/* Supporting Description (~700–780px max-w, 17–19px desktop font size, 20–28px spacing from H1) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 sm:mt-6 max-w-[740px] text-center text-[15px] sm:text-[16px] md:text-[17.5px] lg:text-[18px] text-[#667085] leading-[1.5] sm:leading-[1.55]"
        >
          We design and develop digital products that help businesses present
          themselves better, work smarter, and grow online.
        </motion.p>

        {/* Call to Action Buttons (50–54px height, 26–30px padding, rounded-full, 12–16px gap, 28–36px spacing from desc) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: Start a Project */}
          <a
            href="/contact"
            className="group inline-flex h-[50px] sm:h-[52px] md:h-[54px] w-full sm:w-auto items-center justify-center rounded-full bg-[#2563EB] px-7 sm:px-8 text-sm sm:text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(37,99,235,0.28)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.38)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
          </a>

          {/* Secondary CTA: View Our Work */}
          <a
            href="/work"
            className="group inline-flex h-[50px] sm:h-[52px] md:h-[54px] w-full sm:w-auto items-center justify-center rounded-full border border-[#D0D5DD] bg-white/90 px-7 sm:px-8 text-sm sm:text-[15px] font-semibold text-[#0E2A6D] shadow-xs backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Our Work</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
