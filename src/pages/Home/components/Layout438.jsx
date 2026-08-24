"use client";

import React from "react";
import { motion } from "framer-motion";
import approachDesignImg from "../../../assets/images/approach/approach-design.jpg";

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "We learn your business, goals, audience, and what the project actually needs.",
  },
  {
    num: "02",
    title: "Design",
    desc: "We turn the requirements into a clear, intuitive digital experience.",
  },
  {
    num: "03",
    title: "Build",
    desc: "We develop a fast, responsive, reliable product ready for real-world use.",
  },
];

export function Layout438() {
  return (
    <section
      id="approach"
      className="relative w-full py-12 sm:py-16 md:py-18"
    >
      <div className="global-container">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[0.85fr_1.35fr] lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr] lg:gap-10 xl:gap-14">
          {/* LEFT: Single Cinematic Storytelling Image (Wireframe Sketch 4:5 ratio) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-last md:order-first w-full"
          >
            <div className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white p-1.5 sm:p-2 shadow-xs">
              <img
                src={approachDesignImg}
                alt="UI and UX design thinking, wireframing and digital planning"
                className="aspect-[4/5] w-full rounded-xl object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT: Approach Content & 3-Step Continuous Process */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
              APPROACH
            </span>

            {/* Headline */}
            <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl lg:text-3xl leading-[1.18]">
              We understand first.
              <span className="block sm:inline sm:ml-1.5 text-[#101828]">
                Then we build with purpose.
              </span>
            </h2>

            {/* Short Description */}
            <p className="mt-2.5 text-xs text-[#667085] sm:text-sm leading-relaxed max-w-xl">
              Every project starts with understanding your business, your users,
              and what needs to work. We turn that understanding into a clear,
              useful digital product.
            </p>

            {/* Horizontal Continuous 3-Step Process */}
            <div className="mt-5 border-t border-[#E4E7EC] pt-4 sm:mt-6 sm:pt-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 lg:gap-5">
                {steps.map((step, idx) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col"
                  >
                    <span className="text-xs font-bold tracking-wider text-[#2563EB]">
                      {step.num}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-[#101828] sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#667085] leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
