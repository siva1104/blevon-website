"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  Maximize2,
  Sparkles,
  Code2,
  LifeBuoy,
} from "lucide-react";

const CAPABILITIES = [
  {
    num: "01",
    title: "Complete Digital Solutions",
    desc: "From corporate websites and custom web portals to native-grade Android, iOS, and e-commerce platforms—we engineer your entire digital presence under one roof.",
    icon: Layers,
    iconStyle: "bg-gradient-to-br from-[#2457E6]/12 to-[#3B82F6]/15 text-[#2457E6] border-[#2457E6]/20",
  },
  {
    num: "02",
    title: "Modern Technologies",
    desc: "We build with proven, future-ready stacks including React, Next.js, Vite, Tailwind CSS, Flutter, React Native, Node.js, PostgreSQL, and MongoDB.",
    icon: Cpu,
    iconStyle: "bg-gradient-to-br from-[#6366F1]/12 to-[#8B5CF6]/15 text-[#6366F1] border-[#6366F1]/20",
  },
  {
    num: "03",
    title: "Responsive & Scalable Products",
    desc: "Every interface is mobile-first and backed by modular codebases and cloud architectures that scale smoothly as your customer base grows.",
    icon: Maximize2,
    iconStyle: "bg-gradient-to-br from-[#0891B2]/12 to-[#06B6D4]/15 text-[#0891B2] border-[#06B6D4]/20",
  },
  {
    num: "04",
    title: "User-Focused Design",
    desc: "We prioritize intuitive navigation, clear visual hierarchy, fast load speeds, and accessible interactions tailored to real user behavior.",
    icon: Sparkles,
    iconStyle: "bg-gradient-to-br from-[#7C3AED]/12 to-[#A855F7]/15 text-[#7C3AED] border-[#7C3AED]/20",
  },
  {
    num: "05",
    title: "Professional Development",
    desc: "Clean semantic HTML, structured APIs, secure authentication, and rigorous quality assurance ensure dependable real-world operation.",
    icon: Code2,
    iconStyle: "bg-gradient-to-br from-[#0D9488]/12 to-[#14B8A6]/15 text-[#0D9488] border-[#0D9488]/20",
  },
  {
    num: "06",
    title: "Reliable Technical Support",
    desc: "We stand behind our deployments with post-launch warranty support, cloud hosting guidance, and responsive technical assistance.",
    icon: LifeBuoy,
    iconStyle: "bg-gradient-to-br from-[#2563EB]/12 to-[#7C3AED]/15 text-[#2563EB] border-[#2563EB]/20",
  },
];

export function WhyBlevonSection() {
  return (
    <section
      id="why-blevon"
      className="relative w-full bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <div className="global-container">
        {/* Section Header */}
        <div className="mx-auto mb-12 sm:mb-14 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2457E6]/20 bg-white/90 px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase shadow-[0_2px_8px_-2px_rgba(36,87,230,0.1)] backdrop-blur-sm"
          >
            WHY CHOOSE BLEVON
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="font-heading text-[28px] sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]"
          >
            Engineering Excellence{" "}
            <span className="bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">
              Built Around Your Goals.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mx-auto mt-3.5 max-w-xl text-[14.5px] sm:text-[15.5px] text-[#526077] leading-[1.65]"
          >
            We combine modern design standards with disciplined software
            engineering to deliver digital products that perform reliably in the
            real world.
          </motion.p>
        </div>

        {/* 6 Capability Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#E2E8F0]/90 bg-white/90 p-6 sm:p-7 backdrop-blur-md shadow-[0_4px_20px_-6px_rgba(15,23,42,0.04)] transition-all duration-200 hover:border-[#2457E6]/35 hover:bg-white hover:shadow-[0_12px_30px_-8px_rgba(36,87,230,0.1)] hover:-translate-y-0.5"
              >
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className={`flex size-9 shrink-0 items-center justify-center rounded-lg border ${item.iconStyle} transition-transform duration-200 group-hover:scale-105`}
                    >
                      <IconComponent className="size-4 shrink-0" />
                    </div>
                    <h3 className="font-heading text-[16.5px] font-semibold tracking-[-0.02em] text-[#0B132B] group-hover:text-[#2457E6] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[13.5px] text-[#526077] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const WhyBlevon = WhyBlevonSection;
export default WhyBlevonSection;
