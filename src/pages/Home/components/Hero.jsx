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
      className="global-container relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-transparent"
      style={{
        paddingTop: "clamp(3.5rem, 9vh, 6.5rem)",
        paddingBottom: "clamp(3.5rem, 9vh, 6.5rem)",
        opacity: heroOpacity,
        transition: "opacity 200ms ease-out",
      }}
    >
      {/* Centered Main Hero Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center w-full"
        style={{
          transform: `translateY(${contentParallaxY}px)`,
          transition: "transform 100ms ease-out",
        }}
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-xs font-semibold tracking-[0.24em] text-[#0E2A6D] uppercase sm:text-sm md:text-base"
        >
          BLEVON DIGITAL STUDIO
        </motion.span>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-center text-3xl font-bold tracking-[-0.025em] text-[#101828] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.12] sm:leading-[1.08]"
        >
          <span>Websites and apps,</span>
          <span className="block mt-1 sm:mt-2 text-[#2563EB]">
            built around your business.
          </span>
        </motion.h1>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-2xl text-center text-base text-[#667085] sm:text-xl lg:text-2xl sm:mt-8 leading-relaxed"
        >
          We design and develop digital products that help businesses present
          themselves better, work smarter, and grow online.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto"
        >
          {/* Primary CTA: Start a Project */}
          <a
            href="/contact"
            className="group inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center rounded-full bg-[#2563EB] px-8 sm:px-9 text-base sm:text-lg font-semibold text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
          </a>

          {/* Secondary CTA: View Our Work */}
          <a
            href="/work"
            className="group inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center rounded-full border border-[#E4E7EC] bg-white/90 px-8 sm:px-9 text-base sm:text-lg font-semibold text-[#0E2A6D] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Our Work</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
