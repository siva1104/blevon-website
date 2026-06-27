"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LayoutTemplate, Code2, Rocket, Smartphone, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: LayoutTemplate,
    title: "Modern Design",
    description: "Clean, elegant, and user-focused interfaces.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Tailored websites built for your business.",
  },
  {
    icon: Rocket,
    title: "High Performance",
    description: "Fast, secure, and optimized for speed.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Perfect experience on every device.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Designed to help your business succeed online.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-white py-14 lg:py-20 border-b border-slate-100">
      
      {/* Background soft gradients */}
      <div className="absolute right-0 top-1/3 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-blue-50/40 blur-3xl" />
      <div className="absolute left-1/4 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-50/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          
          {/* Mobile Image (First on Mobile, Hidden on Desktop) */}
          <div className="block lg:hidden w-full relative mb-8">
            <div className="relative mx-auto max-w-[480px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100/50 rounded-[24px] blur-xl -z-10 scale-[0.98]" />
              <div className="relative rounded-[24px] overflow-hidden border border-[#E2E8F0] shadow-lg aspect-[4/3] bg-slate-50">
                <Image
                  src="/agency-workspace.png"
                  alt="Blevon Workspace"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 480px"
                />
              </div>
            </div>
          </div>

          {/* Left Column: Content + Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col items-start lg:col-span-7 z-10"
          >
            <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#2563EB] mb-2.5">
              ABOUT BLEVON
            </span>

            <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] mb-4">
              Building Digital Experiences That Matter
            </h2>

            <p className="text-[16px] lg:text-[18px] font-normal leading-[1.7] text-[#64748B] mb-6 max-w-[680px]">
              Helping businesses create modern, high-performing websites that build trust, engage customers, and support long-term growth.
            </p>

            {/* Feature Highlights Grid */}
            <div className="flex flex-col gap-4 mb-6 w-full max-w-[600px]">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div key={highlight.title} className="flex items-start gap-3.5 group/item">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-indigo-50/80 border border-blue-100/20 text-[#2563EB] shrink-0 mt-0.5 transition-transform duration-300 ease-out group-hover/item:scale-105">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h4 className="text-[22px] font-bold text-[#0F172A] leading-[1.3]">
                        {highlight.title}
                      </h4>
                      <p className="text-[16px] font-normal leading-[1.6] text-[#64748B] mt-0.5">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              asChild
              className="rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] px-7 h-12 text-[16px] font-semibold text-white hover:shadow-lg hover:shadow-[#2563EB]/15 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <Link href="#contact" className="flex items-center gap-1.5">
                Start Your Project
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Column: Illustration (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative w-full">
            <div className="relative w-full max-w-[460px] mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/60 to-indigo-50/40 rounded-[32px] blur-2xl -z-10" />
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="relative rounded-[24px] overflow-hidden border border-[#E2E8F0] bg-white p-2 shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-slate-50">
                  <Image
                    src="/agency-workspace.png"
                    alt="Blevon Minimal Design Studio Workspace"
                    fill
                    priority
                    className="object-cover"
                    sizes="440px"
                  />
                </div>
                <div className="absolute inset-0 rounded-[24px] shadow-inner pointer-events-none" />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -left-6 bottom-12 z-25 rounded-xl bg-white/85 border border-slate-200/50 backdrop-blur-md px-4 py-2.5 shadow-md flex items-center gap-2 select-none"
              >
                <div className="h-2 w-2 rounded-full bg-[#6366F1] animate-pulse" />
                <span className="text-[12px] font-bold text-slate-800">Crafting Excellence</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -right-4 -top-4 z-25 rounded-xl bg-white/85 border border-slate-200/50 backdrop-blur-md px-4 py-2.5 shadow-md flex items-center gap-2 select-none"
              >
                <span className="text-[12px] font-bold text-slate-800">Est. 2026</span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
