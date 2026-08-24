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
      className="relative w-full py-16 sm:py-20 md:py-24"
    >
      <div className="global-container">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.85fr_1.35fr] lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] lg:gap-14 xl:gap-20">
          {/* LEFT: Single Cinematic Storytelling Image (Wireframe Sketch 4:5 ratio) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-last md:order-first w-full"
          >
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-white p-1.5 sm:p-2 shadow-sm">
              <img
                src={approachDesignImg}
                alt="UI and UX design thinking, wireframing and digital planning"
                className="aspect-[4/5] w-full rounded-xl sm:rounded-2xl object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT: Approach Content & 3-Step Continuous Process */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="mb-2.5 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
              APPROACH
            </span>

            {/* Headline */}
            <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl lg:text-5xl leading-[1.18]">
              We understand first.
              <span className="block sm:inline sm:ml-2 text-[#101828]">
                Then we build with purpose.
              </span>
            </h2>

            {/* Short Description */}
            <p className="mt-3.5 text-lg text-[#667085] sm:text-xl leading-relaxed max-w-3xl">
              Every project starts with understanding your business, your users,
              and what needs to work. We turn that understanding into a clear,
              useful digital product.
            </p>

            {/* Horizontal Continuous 3-Step Process */}
            <div className="mt-8 border-t border-[#E4E7EC] pt-6 sm:mt-10 sm:pt-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-6 lg:gap-8">
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
                    <span className="text-sm font-bold tracking-wider text-[#2563EB] sm:text-base">
                      {step.num}
                    </span>
                    <h3 className="mt-1.5 text-xl font-bold text-[#101828] sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base text-[#667085] leading-relaxed">
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
