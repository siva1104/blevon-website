"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Map,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We analyze your business model, target users, operational challenges, and core objectives.",
    icon: Search,
    badgeBg: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/80 text-[#2457E6]",
  },
  {
    num: "02",
    title: "Planning",
    desc: "We define the technical architecture, sitemap, database schemas, and milestone roadmap.",
    icon: Map,
    badgeBg: "bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-200/80 text-[#4F46E5]",
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "We craft modern, intuitive interfaces, wireframes, and responsive design systems.",
    icon: PenTool,
    badgeBg: "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/80 text-[#7C3AED]",
  },
  {
    num: "04",
    title: "Development",
    desc: "Our engineers build the frontend, backend APIs, CMS, and mobile applications with clean code.",
    icon: Code2,
    badgeBg: "bg-gradient-to-br from-cyan-50 to-sky-50 border-cyan-200/80 text-[#0891B2]",
  },
  {
    num: "05",
    title: "Testing",
    desc: "We perform multi-device QA, security audits, speed optimization, and payment verification.",
    icon: ShieldCheck,
    badgeBg: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200/80 text-[#059669]",
  },
  {
    num: "06",
    title: "Deployment",
    desc: "We configure cloud servers, SSL, domains, and assist with Google Play & App Store launches.",
    icon: Rocket,
    badgeBg: "bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200/80 text-[#0284C7]",
  },
  {
    num: "07",
    title: "Support",
    desc: "We provide post-launch warranty care, updates, and reliable ongoing technical assistance.",
    icon: LifeBuoy,
    badgeBg: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/80 text-[#2457E6]",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative w-full bg-transparent py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="global-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-12 sm:mb-14 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2457E6]/20 bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase shadow-xs"
          >
            DEVELOPMENT PROCESS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="font-heading text-[28px] sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]"
          >
            A Structured{" "}
            <span className="bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">
              7-Stage Engineering Workflow.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mx-auto mt-3.5 max-w-xl text-[14.5px] sm:text-[15.5px] text-[#526077] leading-[1.65]"
          >
            From initial discovery to production deployment and post-launch
            care, every project follows a transparent, milestone-driven
            lifecycle.
          </motion.p>
        </div>

        {/* 7-Step Responsive Timeline Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-7">
          {WORKFLOW_STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white/90 backdrop-blur-md p-5 shadow-[0_1px_3px_rgba(15,23,42,0.03)] transition-all duration-200 hover:border-[#2457E6]/35 hover:shadow-[0_12px_28px_-6px_rgba(36,87,230,0.08)] hover:-translate-y-0.5"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <div
                      className={`flex size-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 group-hover:scale-105 ${step.badgeBg}`}
                    >
                      <IconComponent className="size-4 shrink-0" />
                    </div>
                    <span className="font-mono text-[10.5px] font-medium text-[#94A3B8] group-hover:text-[#2457E6] transition-colors shrink-0">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-heading text-[15px] font-semibold tracking-[-0.015em] text-[#0B132B]">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-[#526077] leading-[1.6]">
                    {step.desc}
                  </p>
                </div>

                {/* Progress Indicator Bar */}
                <div className="mt-5 h-1 w-full rounded-full bg-[#F1F5F9] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#06B6D4]"
                    style={{ width: `${Math.round(((idx + 1) / 7) * 100)}%` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const Layout438 = ProcessSection;
export default ProcessSection;
