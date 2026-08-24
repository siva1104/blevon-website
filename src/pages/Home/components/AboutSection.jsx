"use client";

import React from "react";
import { motion } from "framer-motion";
import aboutCodeParticlesImg from "../../../assets/images/about/about-code-particles.png";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-20 md:py-24"
    >
      <div className="global-container">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.15fr_0.85fr] lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] lg:gap-14 xl:gap-20">
          {/* LEFT: About Story & Description */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="mb-2.5 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
              ABOUT BLEVON
            </span>

            {/* Headline */}
            <h2 className="text-4xl font-bold tracking-tight text-[#101828] sm:text-5xl lg:text-6xl leading-[1.15]">
              We build digital products for real businesses.
            </h2>

            {/* Description */}
            <div className="mt-4 space-y-3.5 text-lg text-[#667085] sm:text-xl leading-relaxed max-w-2xl">
              <p>
                Blevon is a digital development studio focused on building
                websites and mobile applications for businesses.
              </p>
              <p>
                We combine thoughtful design with reliable development to create
                digital products that are clear, useful, and built for real-world
                needs.
              </p>
            </div>

            {/* Secondary Text Link */}
            <div className="mt-6 pt-4 border-t border-[#E4E7EC]/80 sm:mt-8">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 text-lg font-semibold text-[#0E2A6D] transition-colors duration-200 hover:text-[#2563EB]"
              >
                <span>More About Blevon</span>
                <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT: Supporting Digital Code & Particles Visual (16:10 ratio) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-[#0A0D14] p-1 sm:p-1.5 shadow-sm">
              <img
                src={aboutCodeParticlesImg}
                alt="Digital code window transforming into constellation particles"
                className="aspect-[16/10] w-full rounded-xl sm:rounded-2xl object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
