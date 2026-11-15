"use client";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }));
  };

  const handleExploreServices = (e) => {
    const el = document.getElementById("services");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeUp = (delay = 0) => ({
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-0 flex min-h-[88svh] w-full flex-col items-center justify-center overflow-hidden bg-transparent pt-20 pb-16 sm:pt-24 sm:pb-20"
      aria-label="We Build Digital Experiences That Move Businesses Forward"
    >
      {/* ==================================================================== */}
      {/* 1. COLORFUL AURORA MESH & GEOMETRIC VECTOR GRAPHICS                  */}
      {/* ==================================================================== */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Multi-Color Luminous Aurora Glows (Cobalt + Violet + Cyan) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(42% 42% at 22% 28%, rgba(36, 87, 230, 0.14) 0%, rgba(36, 87, 230, 0) 100%),
              radial-gradient(40% 40% at 78% 30%, rgba(124, 58, 237, 0.13) 0%, rgba(124, 58, 237, 0) 100%),
              radial-gradient(38% 38% at 50% 68%, rgba(6, 182, 212, 0.11) 0%, rgba(6, 182, 212, 0) 100%)
            `,
          }}
        />

        {/* Interactive Cursor Spotlight Highlighting the Architectural Grid */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: spotlight.active ? 1 : 0,
            backgroundSize: "56px 56px",
            backgroundImage: `
              linear-gradient(to right, rgba(36, 87, 230, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(124, 58, 237, 0.18) 1px, transparent 1px)
            `,
            maskImage: `radial-gradient(340px circle at ${spotlight.x}% ${spotlight.y}%, #000 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(340px circle at ${spotlight.x}% ${spotlight.y}%, #000 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* ==================================================================== */}
      {/* 2. CENTERED CONTENT: REFINED HEADING, DESCRIPTION & COMPACT CTAS     */}
      {/* ==================================================================== */}
      <div className="global-container relative z-10">
        <div className="mx-auto max-w-[780px] text-center">
          {/* Colorful Eyebrow Pill */}
          <motion.div {...fadeUp(0)} className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2457E6]/20 bg-white/85 px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase shadow-[0_2px_10px_-2px_rgba(36,87,230,0.12)] backdrop-blur-md">
              <Sparkles className="size-3 text-[#7C3AED]" />
              <span>DIGITAL ENGINEERING STUDIO</span>
            </span>
          </motion.div>

          {/* Heading: Refined Semibold Weight & Multi-Tone Gradient */}
          <motion.h1
            {...fadeUp(0.05)}
            className="font-heading text-[32px] xs:text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-semibold tracking-[-0.04em] leading-[1.08] text-[#0B132B]"
          >
            <span className="block text-[#0B132B]">
              We Build Digital Experiences
            </span>
            <span className="mt-1 block bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent pb-1">
              That Move Businesses Forward.
            </span>
          </motion.h1>

          {/* Description: Clean, Balanced Editorial Measure */}
          <motion.p
            {...fadeUp(0.12)}
            className="mx-auto mt-4 sm:mt-5 max-w-[540px] text-[14.5px] sm:text-[16px] leading-[1.65] text-[#526077] font-normal"
          >
            From high-performing websites to powerful mobile applications and
            complete e-commerce platforms, Blevon helps businesses transform
            ideas into scalable digital solutions.
          </motion.p>

          {/* Compact, Precision-Proportioned CTA Buttons */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-7 sm:mt-8 flex flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            {/* Primary CTA: Rich Gradient-to-Obsidian Pill Button */}
            <Link
              to="/contact"
              className="group inline-flex h-10 sm:h-[42px] items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] px-5 text-[13.5px] font-medium text-white shadow-[0_6px_18px_-3px_rgba(36,87,230,0.28),inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-all duration-200 hover:from-[#2457E6] hover:via-[#4F46E5] hover:to-[#2457E6] hover:shadow-[0_8px_22px_-3px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457E6] focus-visible:ring-offset-2"
            >
              <span>Let&apos;s Build Your Project</span>
              <ArrowUpRight className="size-3.5 shrink-0 text-white/85 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </Link>

            {/* Secondary CTA: Sleek Hairline Glass Pill Button */}
            <a
              href="#services"
              onClick={handleExploreServices}
              className="inline-flex h-10 sm:h-[42px] items-center justify-center rounded-full border border-[#E2E8F0] bg-white/90 px-5 text-[13.5px] font-medium text-[#0F172A] shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-200 hover:border-[#2457E6]/40 hover:bg-white hover:text-[#2457E6] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457E6]"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const Hero = HeroSection;
export default HeroSection;
