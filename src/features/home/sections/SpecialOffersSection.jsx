"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Smartphone,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";
import { SPECIAL_OFFERS } from "@/data/offers";
import { CTAButton } from "@/components/ui/CTAButton";

export function SpecialOffersSection() {
  const offer1 = SPECIAL_OFFERS[0];
  const offer2 = SPECIAL_OFFERS[1];

  return (
    <section
      id="special-offers"
      className="relative w-full scroll-mt-24 bg-transparent py-14 sm:py-18 lg:py-22 overflow-hidden"
    >
      <div className="global-container relative z-10">
        {/* Outer Attention-Grabbing Section Card */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#2457E6]/25 bg-gradient-to-br from-[#F0F5FF] via-white to-[#F5F3FF] p-6 sm:p-10 lg:p-12 shadow-[0_24px_64px_-16px_rgba(36,87,230,0.16)]">
          {/* Top Full-Width Gradient Highlight Bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#2457E6] via-[#7C3AED] to-[#06B6D4]" />

          {/* Section Header (Big Heading for Immediate Attention, No Description) */}
          <div className="mx-auto mb-10 sm:mb-12 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-3.5 inline-flex items-center rounded-full border border-[#2457E6]/30 bg-white px-4 py-1.5 text-xs font-bold tracking-[0.16em] text-[#2457E6] uppercase shadow-sm"
            >
              <span>LIMITED-TIME OFFERS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-[-0.035em] text-[#0B132B] leading-[1.08]"
            >
              Exclusive Launch Packages{" "}
              <span className="bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent">
                — Save 33% Today.
              </span>
            </motion.h2>
          </div>

          {/* Two High-Impact Offer Cards Inside the Main Card */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch">
            {/* ============================================================== */}
            {/* OFFER 1: Build Any App + Get a Website FREE ($999 / $1,499)    */}
            {/* ============================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden flex flex-col justify-between rounded-2xl border border-[#2457E6]/25 bg-white p-6 sm:p-8 shadow-[0_12px_32px_-8px_rgba(36,87,230,0.1)] hover:border-[#2457E6]/60 hover:shadow-[0_18px_40px_-8px_rgba(36,87,230,0.18)] transition-all duration-200"
            >
              {/* Top Gradient Accent Bar */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#06B6D4]" />

              <div>
                {/* Top Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2457E6]/20 bg-[#EFF6FF] px-3 py-1 text-[11px] font-bold text-[#2457E6] uppercase tracking-wider">
                    <span>OFFER 01</span>
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-[#2457E6] to-[#6366F1] px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                    {offer1.badge}
                  </span>
                </div>

                {/* Big Noticeable Offer Heading (No Description) */}
                <div className="flex items-start gap-3.5 mb-5">
                  <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 text-[#2457E6]">
                    <Smartphone className="size-5" />
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.12]">
                    Build Any App +{" "}
                    <span className="block mt-0.5 bg-gradient-to-r from-[#2457E6] to-[#6366F1] bg-clip-text text-transparent">
                      Get a Website FREE
                    </span>
                  </h3>
                </div>

                {/* Prominent Pricing Box */}
                <div className="rounded-2xl border border-[#2457E6]/20 bg-[#F8FAFC] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                      {offer1.priceLabel}
                    </span>
                    <div className="mt-1 flex items-baseline gap-3">
                      <span className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B132B]">
                        {offer1.priceValue}
                      </span>
                      <span className="text-lg font-medium text-[#94A3B8] line-through">
                        {offer1.originalPrice}
                      </span>
                      <span className="rounded-md bg-[#2457E6]/10 px-2.5 py-0.5 text-xs font-bold text-[#2457E6]">
                        {offer1.discountPercent}
                      </span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                      {offer1.savingsText}
                    </span>
                  </div>
                </div>

                {/* Included Features */}
                <div className="mt-5">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B132B] mb-3">
                    Package Includes:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {offer1.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-[13.5px] font-medium text-[#1E293B]"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-[#2457E6] mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility & Exclusions Box */}
                <div className="mt-5 space-y-2 rounded-xl bg-[#F8FAFC] p-3.5 border border-[#E2E8F0]">
                  <div className="flex items-start gap-2 text-xs text-[#334155] leading-relaxed">
                    <ShieldCheck className="size-3.5 shrink-0 text-[#2457E6] mt-0.5" />
                    <div>
                      <strong className="font-semibold text-[#0F172A]">
                        Target &amp; Eligibility:{" "}
                      </strong>
                      Small &amp; medium-sized businesses and established
                      businesses digitizing operations. Excludes large-scale
                      enterprises. New businesses subject to consultation &amp;
                      approval.
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-[11.5px] text-[#64748B] leading-relaxed border-t border-[#E2E8F0] pt-2">
                    <AlertCircle className="size-3.5 shrink-0 text-[#64748B] mt-0.5" />
                    <div>
                      <strong className="font-semibold text-[#475569]">
                        Exclusions:{" "}
                      </strong>
                      Hosting, domain, third-party services, and Apple ($99/yr)
                      / Google Play ($25) account fees.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
                <CTAButton
                  to={offer1.ctaLink}
                  variant="primary"
                  size="md"
                  icon="arrow-up-right"
                  className="w-full justify-center"
                >
                  {offer1.ctaText}
                </CTAButton>
              </div>
            </motion.div>

            {/* ============================================================== */}
            {/* OFFER 2: Complete E-commerce Solution ($1,999 / $2,999)        */}
            {/* ============================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="relative overflow-hidden flex flex-col justify-between rounded-2xl border border-[#7C3AED]/25 bg-white p-6 sm:p-8 shadow-[0_12px_32px_-8px_rgba(124,58,237,0.1)] hover:border-[#7C3AED]/60 hover:shadow-[0_18px_40px_-8px_rgba(124,58,237,0.18)] transition-all duration-200"
            >
              {/* Top Gradient Accent Bar */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#2457E6]" />

              <div>
                {/* Top Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-bold text-[#7C3AED] uppercase tracking-wider">
                    <span>OFFER 02</span>
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2457E6] px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                    {offer2.badge}
                  </span>
                </div>

                {/* Big Noticeable Offer Heading (No Description) */}
                <div className="flex items-start gap-3.5 mb-5">
                  <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 text-[#7C3AED]">
                    <ShoppingBag className="size-5" />
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.12]">
                    Complete E-commerce{" "}
                    <span className="block mt-0.5 bg-gradient-to-r from-[#7C3AED] to-[#2457E6] bg-clip-text text-transparent">
                      Solution (Web + Apps)
                    </span>
                  </h3>
                </div>

                {/* Prominent Pricing Box */}
                <div className="rounded-2xl border border-violet-200/80 bg-[#F8FAFC] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                      {offer2.priceLabel}
                    </span>
                    <div className="mt-1 flex items-baseline gap-3">
                      <span className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B132B]">
                        {offer2.priceValue}
                      </span>
                      <span className="text-lg font-medium text-[#94A3B8] line-through">
                        {offer2.originalPrice}
                      </span>
                      <span className="rounded-md bg-[#7C3AED]/10 px-2.5 py-0.5 text-xs font-bold text-[#7C3AED]">
                        {offer2.discountPercent}
                      </span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                      {offer2.savingsText}
                    </span>
                  </div>
                </div>

                {/* Included Features */}
                <div className="mt-5">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B132B] mb-3">
                    Package Includes:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {offer2.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-[13.5px] font-medium text-[#1E293B]"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-[#7C3AED] mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility & Exclusions Box */}
                <div className="mt-5 space-y-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3.5">
                  <div className="flex items-start gap-2 text-xs text-[#334155] leading-relaxed">
                    <ShieldCheck className="size-3.5 shrink-0 text-[#7C3AED] mt-0.5" />
                    <div>
                      <strong className="font-semibold text-[#0F172A]">
                        Target &amp; Eligibility:{" "}
                      </strong>
                      Single-vendor retail, D2C brands, and SMBs launching
                      online. Excludes multi-vendor marketplaces and
                      large-scale enterprise systems.
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-[11.5px] text-[#64748B] leading-relaxed border-t border-[#E2E8F0] pt-2">
                    <AlertCircle className="size-3.5 shrink-0 text-[#64748B] mt-0.5" />
                    <div>
                      <strong className="font-semibold text-[#475569]">
                        Exclusions:{" "}
                      </strong>
                      Hosting, domain, payment gateway processing fees, and
                      Apple ($99/yr) / Google Play ($25) account fees.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
                <CTAButton
                  to={offer2.ctaLink}
                  variant="primary"
                  size="md"
                  icon="arrow-up-right"
                  className="w-full justify-center"
                >
                  {offer2.ctaText}
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffersSection;
