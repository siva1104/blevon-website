"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

import websiteDevelopmentImg from "@/assets/images/services/website-development.webp";
import appDevelopmentImg from "@/assets/images/services/app-development.webp";
import uiUxDesignImg from "@/assets/images/services/ui-ux-design.webp";

const CORE_SERVICE_CARDS = [
  {
    id: "website-development",
    title: "Website Development",
    href: "/services/website-development",
    image: websiteDevelopmentImg,
    accentBar: "from-[#2457E6] via-[#4F46E5] to-[#06B6D4]",
    imageBgGradient: "bg-gradient-to-br from-[#C6DEFF] via-[#E0D0FF] to-[#BEEEFB]",
    alt: "Laptop showing a modern website homepage designed by Blevon",
  },
  {
    id: "app-development",
    title: "App Development",
    href: "/services/app-development",
    image: appDevelopmentImg,
    accentBar: "from-[#4F46E5] via-[#7C3AED] to-[#2457E6]",
    imageBgGradient: "bg-gradient-to-br from-[#DECCFF] via-[#C6DCFF] to-[#C2ECFC]",
    alt: "Smartphone with iOS and Android app development badges",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    image: uiUxDesignImg,
    accentBar: "from-[#7C3AED] via-[#6366F1] to-[#06B6D4]",
    imageBgGradient: "bg-gradient-to-br from-[#C0EEE8] via-[#C6DCFF] to-[#E4D2FF]",
    alt: "Tablet showing a wireframe turning into a finished UI design",
  },
];

export function ServicesSection({ isHubPage = false }) {
  return (
    <section
      id="services"
      className={`relative w-full scroll-mt-24 bg-transparent ${
        isHubPage
          ? "pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24"
          : "py-16 sm:py-20 lg:py-24"
      }`}
    >
      <div className="global-container relative z-10">
        {isHubPage && (
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Services" },
            ]}
            className="mb-6 sm:mb-8"
          />
        )}

        {/* Section Header */}
        <div className="mx-auto mb-12 sm:mb-15 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-3.5 inline-flex items-center rounded-full border border-[#2457E6]/20 bg-white/90 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] text-[#2457E6] uppercase shadow-[0_2px_10px_-2px_rgba(36,87,230,0.1)] backdrop-blur-md"
          >
            WHAT WE DO
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]"
          >
            Digital Solutions Built Around{" "}
            <span className="bg-gradient-to-r from-[#2457E6] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              Your Vision.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mx-auto mt-4 max-w-xl text-[15px] sm:text-[16px] text-[#526077] leading-[1.68]"
          >
            From powerful websites to intuitive applications and seamless user
            experiences, we turn ideas into digital products that move
            businesses forward.
          </motion.p>
        </div>

        {/* Three-Column Responsive Service Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {CORE_SERVICE_CARDS.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex h-full"
            >
              <Link
                to={card.href}
                className="group relative flex w-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white p-3 text-[#0B132B] shadow-[0_10px_30px_-10px_rgba(15,23,42,0.06),0_2px_6px_-1px_rgba(15,23,42,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#2457E6]/45 hover:shadow-[0_24px_48px_-12px_rgba(36,87,230,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457E6]"
              >
                {/* Top Gradient Accent Hairline */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${card.accentBar} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* 1. 4:3 Service Image Frame */}
                <div
                  className={`relative aspect-[4/3] w-full h-auto overflow-hidden rounded-[18px] ${card.imageBgGradient} ring-1 ring-inset ring-[#0F172A]/[0.06]`}
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    width={1600}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-[400ms] ease-[ease] group-hover:scale-[1.04]"
                  />
                </div>

                {/* 2. Service Name & 3. Explore Service CTA */}
                <div className="flex flex-col justify-between px-3 pt-5 pb-2.5">
                  <h3 className="font-heading text-xl sm:text-[22px] font-bold tracking-[-0.025em] text-[#0B132B] leading-snug transition-colors duration-200 group-hover:text-[#2457E6]">
                    {card.title}
                  </h3>

                  <div className="mt-4 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between">
                    <span className="text-[13.5px] font-semibold text-[#334155] transition-colors duration-200 group-hover:text-[#2457E6]">
                      Explore Service →
                    </span>

                    <span className="flex size-8 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] transition-all duration-300 group-hover:border-[#2457E6] group-hover:bg-[#2457E6] group-hover:text-white">
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Layout239 = ServicesSection;
export default ServicesSection;
