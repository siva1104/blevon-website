"use client";

import { ArrowRight, Globe, ShoppingCart, Briefcase, HeartPulse, Rocket, Settings } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional, responsive websites that establish credibility and generate leads.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Online stores built for seamless shopping experiences and higher conversions.",
  },
  {
    icon: Briefcase,
    title: "Corporate Websites",
    description: "Modern websites that strengthen your brand and showcase your business.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Secure, patient-focused websites for clinics, hospitals, and healthcare providers.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "High-converting landing pages designed for campaigns and lead generation.",
  },
  {
    icon: Settings,
    title: "Web Applications",
    description: "Custom web applications built for performance, scalability, and business growth.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function WhatWeBuild() {
  return (
    <section className="relative w-full bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-5">
            What We Build
          </h2>
          <p className="text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-xl mx-auto">
            We design and develop modern digital solutions tailored to your business goals.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative bg-[#FFFFFF] rounded-[20px] border border-[#E2E8F0] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon inside a light blue gradient circle */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-indigo-50/80 mb-6 border border-blue-100/20 transition-transform duration-300 ease-out group-hover:scale-105">
                  <Icon className="h-8 w-8 text-[#2563EB]" />
                </div>

                {/* Title + Arrow */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[18px] font-bold text-[#0F172A]">
                    {service.title}
                  </h3>
                  <ArrowRight className="h-4.5 w-4.5 text-slate-300 transition-all duration-300 ease-out group-hover:text-[#2563EB] group-hover:translate-x-1.5" />
                </div>

                {/* Description */}
                <p className="text-[14.5px] leading-relaxed text-[#64748B]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
