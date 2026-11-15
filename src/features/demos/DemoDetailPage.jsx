"use client";

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Globe,
  Layers,
  Monitor,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTAButton } from "@/components/ui/CTAButton";
import { DEMO_WEBSITES, getDemoBySlug } from "@/data/demos";
import { NicheBrowserCanvas } from "@/features/home/sections/DemoWebsitesSection";
import { CtaSection } from "@/features/home/sections/CtaSection";

export function DemoDetailPage() {
  const { slug } = useParams();
  const demo = getDemoBySlug(slug) || DEMO_WEBSITES[0];
  const [viewMode, setViewMode] = useState("desktop");

  useEffect(() => {
    document.title = `${demo.title} — Niche Demo | Blevon Agency`;
    setViewMode("desktop");
  }, [demo]);

  const otherDemos = DEMO_WEBSITES.filter((d) => d.id !== demo.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-transparent text-[#0B132B]">
      <Navbar />

      <main className="pt-[72px] sm:pt-[80px]">
        {/* ================================================================ */}
        {/* 1. DEMO HERO & INTERACTIVE DESKTOP / MOBILE DESIGN PREVIEW       */}
        {/* ================================================================ */}
        <section className="relative w-full overflow-hidden bg-transparent pt-6 pb-14 sm:pt-8 sm:pb-18 lg:pt-10 lg:pb-22">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 35%, #000 30%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 50% 35%, #000 30%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="global-container relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
              <Breadcrumb
                items={[
                  { label: "Home", to: "/" },
                  { label: "Niche Demos", to: "/#demos" },
                  { label: demo.title },
                ]}
              />

              <Link
                to="/#demos"
                className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-xs font-medium text-[#0B132B] hover:border-[#CBD5E1] hover:text-[#2457E6] transition-colors"
              >
                <ArrowLeft className="size-3.5" />
                <span>Back to All Demos</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left 5 Cols: Demo Overview, Tech Tags & Actions */}
              <div className="lg:col-span-5">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#2457E6]">
                    <span>DEMO #{demo.num} · {demo.nicheLabel}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-[11px] font-medium text-[#0B132B]">
                    <Sparkles className="size-3 text-[#2457E6]" />
                    <span>{demo.badge}</span>
                  </span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]">
                  {demo.title}
                </h1>

                <p className="mt-4 text-[15px] sm:text-base text-[#526077] leading-[1.68]">
                  {demo.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-6">
                  <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-[#64748B] mb-2.5">
                    Architecture &amp; Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#475569]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <CTAButton
                    to={`/contact?demo=${demo.id}`}
                    variant="primary"
                    size="lg"
                    icon="arrow-up-right"
                  >
                    Build My Website Like This
                  </CTAButton>

                  {demo.liveDemoUrl && (
                    <a
                      href={demo.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 sm:h-[42px] items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-5 text-[13.5px] font-medium text-[#0B132B] hover:border-[#CBD5E1] hover:text-[#2457E6] transition-colors"
                    >
                      <span>Launch Live Demo</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right 7 Cols: Interactive Browser & Mobile Design Canvas */}
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 sm:p-4 shadow-[0_14px_34px_-15px_rgba(15,23,42,0.08)]">
                  {/* Top Browser Controls + Desktop/Mobile Switcher */}
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#E2E8F0] bg-white px-3.5 py-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full bg-rose-400" />
                        <span className="size-2.5 rounded-full bg-amber-400" />
                        <span className="size-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-[#F8FAFC] px-3 py-1 border border-[#E2E8F0]">
                        <Globe className="size-3 text-[#2457E6]" />
                        <span className="font-mono text-xs font-medium text-[#64748B]">
                          https://{demo.domainPreview}
                        </span>
                      </div>
                    </div>

                    {/* Desktop / Mobile View Toggle */}
                    <div className="inline-flex items-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] p-0.5">
                      <button
                        type="button"
                        onClick={() => setViewMode("desktop")}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                          viewMode === "desktop"
                            ? "bg-[#0F172A] text-white"
                            : "text-[#64748B] hover:text-[#0B132B]"
                        }`}
                      >
                        <Monitor className="size-3.5" />
                        <span>Desktop</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("mobile")}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                          viewMode === "mobile"
                            ? "bg-[#0F172A] text-white"
                            : "text-[#64748B] hover:text-[#0B132B]"
                        }`}
                      >
                        <Smartphone className="size-3.5" />
                        <span>Mobile</span>
                      </button>
                    </div>
                  </div>

                  {/* Main Preview Canvas */}
                  <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">
                    <NicheBrowserCanvas
                      demo={demo}
                      viewMode={viewMode}
                      isLarge={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 2. OPTIONAL UPLOADED DESIGN SCREENS GALLERY                      */}
        {/* ================================================================ */}
        {demo.galleryImages && demo.galleryImages.length > 0 && (
          <section className="relative w-full py-16 sm:py-20 bg-transparent">
            <div className="global-container">
              <div className="mb-10 max-w-2xl">
                <span className="mb-3 inline-flex items-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                  FULL DESIGN SCREENS
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#0B132B]">
                  Visual Layouts &amp; Interface Screens
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {demo.galleryImages.map((imgSrc, index) => (
                  <div
                    key={imgSrc}
                    className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3"
                  >
                    <img
                      src={imgSrc}
                      alt={`${demo.title} screen ${index + 1}`}
                      className="w-full h-auto rounded-xl object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================================================================ */}
        {/* 3. INCLUDED PAGES & NICHE CAPABILITIES                           */}
        {/* ================================================================ */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
              {/* Left 7 Cols: Included Pages Breakdown */}
              <div className="lg:col-span-7">
                <span className="mb-3 inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                  PAGE ARCHITECTURE
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.15]">
                  Pages Included in This {demo.nicheLabel} Demo.
                </h2>
                <p className="mt-3 text-[14.5px] sm:text-[15px] text-[#526077] leading-[1.65]">
                  Every page is custom-tailored to your brand colors, logo, copy, and operational workflow.
                </p>

                <div className="mt-7 space-y-3.5">
                  {demo.pagesIncluded.map((pageObj, idx) => {
                    const title =
                      typeof pageObj === "string" ? pageObj : pageObj.title;
                    const desc =
                      typeof pageObj === "string" ? null : pageObj.desc;
                    return (
                      <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] font-mono text-xs font-medium text-[#2457E6]">
                          0{idx + 1}
                        </span>
                        <div>
                          <h3 className="font-heading text-[16px] sm:text-[17px] font-semibold tracking-[-0.015em] text-[#0B132B]">
                            {title}
                          </h3>
                          {desc && (
                            <p className="mt-1 text-xs sm:text-[13.5px] text-[#526077] leading-[1.6]">
                              {desc}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right 5 Cols: Key Niche Features Box */}
              <div className="lg:col-span-5 rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-[0_12px_30px_-15px_rgba(15,23,42,0.06)]">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#2457E6] block mb-2">
                  BUILT-IN FUNCTIONALITY
                </span>
                <h3 className="font-heading text-xl font-semibold tracking-[-0.025em] text-[#0B132B] mb-5">
                  Core Features &amp; Integrations
                </h3>

                <ul className="space-y-3">
                  {demo.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 text-[13.5px] sm:text-[14px] font-medium text-[#0B132B]"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-[#2457E6] mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
                  <p className="text-xs text-[#526077] leading-relaxed mb-4">
                    Want to customize this {demo.nicheLabel.toLowerCase()} design or bundle it with an Android &amp; iOS mobile application?
                  </p>
                  <CTAButton
                    to={`/contact?demo=${demo.id}`}
                    variant="primary"
                    icon="arrow-up-right"
                    className="w-full justify-center"
                  >
                    Customize This Demo for My Brand
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 4. EXPLORE OTHER NICHE DEMOS                                     */}
        {/* ================================================================ */}
        <section className="relative w-full py-16 sm:py-20 bg-transparent">
          <div className="global-container">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                  <Layers className="size-3.5" />
                  <span>MORE INDUSTRY DEMOS</span>
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#0B132B]">
                  Explore Other Niche Website Demos
                </h2>
              </div>
              <Link
                to="/#demos"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#0B132B] hover:text-[#2457E6] transition-colors"
              >
                <span>View All 6 Niche Demos</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {otherDemos.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-5 hover:border-[#CBD5E1] hover:shadow-[0_14px_34px_-15px_rgba(15,23,42,0.08)] transition-all"
                >
                  <Link
                    to={`/demos/${item.slug}`}
                    className="block overflow-hidden rounded-xl border border-[#E2E8F0]"
                  >
                    <NicheBrowserCanvas demo={item} viewMode="desktop" />
                  </Link>

                  <div className="mt-4">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#2457E6] block">
                      {item.nicheLabel}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-semibold tracking-[-0.02em] text-[#0B132B] group-hover:text-[#2457E6] transition-colors">
                      {item.businessName || item.title}
                    </h3>
                  </div>

                  <div className="mt-5">
                    <CTAButton
                      to={`/demos/${item.slug}`}
                      variant="secondary"
                      size="sm"
                      icon="arrow-up-right"
                      className="w-full justify-center"
                    >
                      View Demo
                    </CTAButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}

export default DemoDetailPage;
