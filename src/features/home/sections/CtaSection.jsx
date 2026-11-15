"use client";

import React from "react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export function CtaSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="global-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-[#2457E6]/20 bg-white/90 backdrop-blur-md px-6 py-14 sm:px-12 sm:py-18 lg:px-16 lg:py-20 text-center shadow-[0_18px_50px_-14px_rgba(36,87,230,0.12)]"
        >
          {/* Top Multi-Color Gradient Bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2457E6] via-[#7C3AED] to-[#06B6D4]" />

          {/* Colorful Aurora Glow & Architectural Grid + Geometric Vector Graphics (No Half-Moon Arc) */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            {/* Soft Radial Color Washes */}
            <div
              className="absolute -left-20 -top-20 size-72 rounded-full blur-[70px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(36, 87, 230, 0.14) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -right-20 -bottom-20 size-72 rounded-full blur-[70px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(124, 58, 237, 0.13) 0%, transparent 70%)",
              }}
            />

            {/* Architectural Grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundSize: "44px 44px",
                backgroundImage: `
                  linear-gradient(to right, rgba(36, 87, 230, 0.045) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(36, 87, 230, 0.045) 1px, transparent 1px)
                `,
                maskImage:
                  "radial-gradient(ellipse 80% 70% at 50% 50%, #000 15%, transparent 95%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 70% at 50% 50%, #000 15%, transparent 95%)",
              }}
            />

            {/* Geometric Vector Circuit Graphic */}
            <svg
              className="hidden sm:block absolute inset-0 h-full w-full opacity-55"
              viewBox="0 0 1200 420"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="ctaVecGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2457E6" stopOpacity="0.35" />
                  <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.35" />
                </linearGradient>
              </defs>
              <path
                d="M 0 90 L 140 90 L 200 150 L 320 150"
                stroke="url(#ctaVecGrad)"
                strokeWidth="1.2"
              />
              <circle cx="200" cy="150" r="3" fill="#2457E6" fillOpacity="0.45" />
              <circle cx="320" cy="150" r="3.5" fill="#7C3AED" fillOpacity="0.45" />

              <path
                d="M 1200 330 L 1060 330 L 1000 270 L 880 270"
                stroke="url(#ctaVecGrad)"
                strokeWidth="1.2"
              />
              <circle cx="1000" cy="270" r="3" fill="#7C3AED" fillOpacity="0.45" />
              <circle cx="880" cy="270" r="3.5" fill="#06B6D4" fillOpacity="0.55" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#2457E6]/20 bg-white px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase shadow-xs">
              READY TO LAUNCH WITH BLEVON?
            </span>

            <h2 className="font-heading text-[28px] sm:text-4xl md:text-[44px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.1]">
              Have an Idea?{" "}
              <span className="bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">
                Let&apos;s Build Something Extraordinary.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-[14.5px] sm:text-[15.5px] text-[#526077] leading-[1.65]">
              Let&apos;s turn your business requirements into a fast, scalable
              digital product.
            </p>

            <div className="mt-7 flex items-center justify-center">
              <CTAButton
                to="/contact"
                variant="primary"
                icon="arrow-up-right"
              >
                Start Your Project
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const Cta57 = CtaSection;
export default CtaSection;
