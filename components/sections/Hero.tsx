"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-12 lg:pt-28 lg:pb-16 min-h-[calc(100vh-80px)] flex items-center">
      
      {/* Curved Background Panel */}
      <div className="absolute top-0 left-0 w-[45%] h-full bg-gradient-to-br from-indigo-50/60 via-blue-50/40 to-transparent -z-10 rounded-br-[70%]" />
      
      {/* Background glow sphere */}
      <div className="absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-50/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full w-full">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-6 z-10"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-[14px] font-semibold text-slate-700 shadow-sm mb-3 tracking-[0.08em] uppercase"
            >
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>Digital Solutions That Drive Growth</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[40px] sm:text-[54px] lg:text-[64px] font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-3"
            >
              Design.<br />
              Develop.<br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] bg-clip-text text-transparent">Deliver.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[16px] lg:text-[18px] font-normal leading-[1.7] text-slate-500 mb-5 max-w-[620px]"
            >
              We design and build exceptional digital experiences that combine beautiful design, powerful technology, and measurable business results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 mb-5 w-full sm:w-auto"
            >
              <Button
                asChild
                className="w-full sm:w-auto h-11 rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white text-[16px] font-semibold hover:shadow-lg hover:shadow-[#2563EB]/15 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <Link href="#contact" className="flex items-center gap-1.5 justify-center">
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto h-11 rounded-[12px] border border-[#E2E8F0] bg-white hover:bg-slate-50 text-[16px] font-semibold text-slate-700 px-5 shadow-sm hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="#portfolio" className="flex items-center gap-1.5 justify-center">
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Features — single inline row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 border-t border-slate-100 pt-4 w-full"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white shadow-[0_2px_6px_rgba(37,99,235,0.15)]">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span className="text-[13px] font-semibold text-slate-700">Fast Delivery</span>
              </div>

              <div className="h-3.5 w-px bg-slate-200" />

              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white shadow-[0_2px_6px_rgba(37,99,235,0.15)]">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span className="text-[13px] font-semibold text-slate-700">Premium Quality</span>
              </div>

              <div className="h-3.5 w-px bg-slate-200" />

              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white shadow-[0_2px_6px_rgba(37,99,235,0.15)]">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span className="text-[13px] font-semibold text-slate-700">High Performance</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex items-center justify-center lg:col-span-6 relative w-full"
          >
            <Image
              src="/hero-mockups.png"
              alt="Blevon Portfolio Showcase"
              width={700}
              height={600}
              priority
              className="w-full h-auto object-contain select-none pointer-events-none"
              draggable={false}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
