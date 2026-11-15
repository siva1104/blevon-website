"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { PROJECTS_DATA, PLACEHOLDER_PROJECTS } from "@/data/projects";

export { PROJECTS_DATA };

export function PortfolioSection() {
  const featuredProject = PROJECTS_DATA[0];

  return (
    <section
      id="portfolio"
      className="relative w-full scroll-mt-24 bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <div className="global-container relative z-10">
        {/* Section Header (Consistent Centered Position) */}
        <div className="mx-auto mb-12 sm:mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2457E6]/20 bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase shadow-xs">
            FEATURED WORK &amp; PORTFOLIO
          </span>
          <h2 className="font-heading text-[28px] sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]">
            Real Engineering.{" "}
            <span className="bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">
              Verified Production Work.
            </span>
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-[14.5px] sm:text-[15.5px] text-[#526077] leading-[1.65]">
            Explore our verified live client deployment alongside upcoming
            portfolio slots reserved for our next partner businesses.
          </p>
        </div>

        {/* Concise 3-Column Portfolio Summary Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
          {/* Card 1: Verified Completed Project (Concise Overview with Logo) */}
          {featuredProject && (
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white/90 backdrop-blur-md p-5 sm:p-6 hover:border-[#2457E6]/35 hover:shadow-[0_14px_34px_-8px_rgba(36,87,230,0.09)] transition-all duration-200"
            >
              <div>
                <Link
                  to={featuredProject.link}
                  className="mb-4 flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-[#E2E8F0] bg-gradient-to-br from-[#F3F7FF] via-white to-[#F5F3FF] p-6 transition-colors group-hover:border-[#CBD5E1]"
                >
                  <img
                    src={featuredProject.logo}
                    alt={`${featuredProject.name} logo`}
                    className="max-h-16 sm:max-h-20 w-auto max-w-[78%] object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>

                <div className="mb-2.5 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-2.5 py-0.5 text-[10.5px] font-medium text-emerald-700">
                    <CheckCircle2 className="size-3 text-emerald-600" />
                    <span>{featuredProject.status}</span>
                  </span>
                  <span className="font-mono text-[10.5px] font-medium text-[#64748B]">
                    {featuredProject.timeline}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[#0B132B] group-hover:text-[#2457E6] transition-colors">
                  {featuredProject.name}
                </h3>

                <p className="mt-1.5 text-[13.5px] text-[#526077] leading-[1.6] line-clamp-2">
                  {featuredProject.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#F1F5F9]">
                <Link
                  to={featuredProject.link}
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0B132B] group-hover:text-[#2457E6] transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          )}

          {/* Cards 2 & 3: Concise Reserved Partner Slots */}
          {PLACEHOLDER_PROJECTS.map((slot, idx) => (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (idx + 1) * 0.06 }}
              className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white/90 backdrop-blur-md p-5 sm:p-6 hover:border-[#6366F1]/35 hover:shadow-[0_14px_34px_-8px_rgba(99,102,241,0.08)] transition-all duration-200"
            >
              <div>
                {/* Minimal Colorful Visual Header */}
                <div className="mb-4 flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-dashed border-[#CBD5E1] bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF]/60 to-[#F5F3FF]/60 p-4 text-center">
                  <div
                    className={`flex size-11 items-center justify-center rounded-xl border bg-white shadow-xs ${
                      slot.visualType === "ecommerce"
                        ? "border-violet-200/80 text-[#7C3AED]"
                        : "border-blue-200/80 text-[#2457E6]"
                    }`}
                  >
                    {slot.visualType === "ecommerce" ? (
                      <ShoppingBag className="size-5" />
                    ) : (
                      <Smartphone className="size-5" />
                    )}
                  </div>
                </div>

                <div className="mb-2.5 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#2457E6]/20 bg-[#EFF6FF] px-2.5 py-0.5 text-[10.5px] font-medium text-[#2457E6]">
                    <Sparkles className="size-3 text-[#2457E6]" />
                    <span>{slot.status}</span>
                  </span>
                </div>

                <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[#0B132B]">
                  {slot.name}
                </h3>

                <p className="mt-1.5 text-[13.5px] text-[#526077] leading-[1.6] line-clamp-2">
                  {slot.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#F1F5F9]">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#64748B] hover:text-[#2457E6] transition-colors"
                >
                  <span>View Portfolio Details</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Portfolio23 = PortfolioSection;
export default PortfolioSection;
