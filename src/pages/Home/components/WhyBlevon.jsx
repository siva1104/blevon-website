"use client";

import React from "react";
import { motion } from "framer-motion";

const PRINCIPLES = [
  {
    num: "01",
    title: "PURPOSEFUL",
    desc: "We build around a clear business goal, ensuring every decision supports what you want to achieve.",
  },
  {
    num: "02",
    title: "THOUGHTFUL",
    desc: "We care about the user experience as much as the code, creating interfaces that feel effortless to use.",
  },
  {
    num: "03",
    title: "BUILT TO GROW",
    desc: "We engineer clean, reliable foundations designed to scale seamlessly as your business evolves.",
  },
];

export function WhyBlevon() {
  return (
    <section
      id="why-blevon"
      className="relative w-full py-16 sm:py-20 md:py-24"
    >
      <div className="global-container">
        {/* Section Header: Centered */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
            WHY BLEVON
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#101828] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]">
            Built around your goals,
            <span className="block mt-1 text-[#667085]">not a template.</span>
          </h2>
          <p className="mx-auto max-w-[620px] text-lg text-[#667085] sm:text-xl lg:text-2xl leading-relaxed">
            We focus on understanding what your business needs before we start
            building. Every website and application is designed around the people
            who will use it, with attention to performance, usability, and the
            details that make the experience work.
          </p>
        </div>

        {/* 3 Equal Principles Spanning the Full Navbar Grid */}
        <div className="border-t border-[#E4E7EC] pt-10 sm:pt-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-14">
            {PRINCIPLES.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-start"
              >
                {/* Number & Title */}
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-mono text-sm font-bold tracking-wider text-[#2563EB] sm:text-base">
                    {item.num}
                  </span>
                  <h3 className="font-mono text-base font-bold tracking-widest text-[#101828] uppercase sm:text-lg">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base text-[#667085] leading-relaxed sm:text-lg lg:text-xl">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
