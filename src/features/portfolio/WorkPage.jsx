"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PROJECTS_DATA, PLACEHOLDER_PROJECTS } from "@/data/projects";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { DemoWebsitesSection } from "@/features/home/sections/DemoWebsitesSection";
import { CtaSection } from "@/features/home/sections/CtaSection";

export default function WorkPage() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.title = "Portfolio & Case Studies | Blevon Agency";
  }, []);

  const showLive = filter === "all" || filter === "verified";
  const showPlaceholders = filter === "all" || filter === "placeholders";

  return (
    <div className="min-h-screen bg-transparent text-[#0B132B]">
      <Navbar />

      <main className="pt-[72px] sm:pt-[80px]">
        {/* ============================================================ */}
        {/* 1. PORTFOLIO HERO (WITH INTEGRATED BREADCRUMB)               */}
        {/* ============================================================ */}
        <section className="relative w-full overflow-hidden bg-transparent pt-6 pb-14 sm:pt-8 sm:pb-18 lg:pt-10 lg:pb-20">
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
            <Breadcrumb
              items={[
                { label: "Home", to: "/" },
                { label: "Portfolio" },
              ]}
              className="mb-6 sm:mb-8"
            />

            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                PORTFOLIO &amp; CASE STUDIES
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]">
                Digital Products Engineered for{" "}
                <span className="bg-gradient-to-r from-[#1E40AF] via-[#2457E6] to-[#3B82F6] bg-clip-text text-transparent">
                  Real-World Impact.
                </span>
              </h1>
              <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-[15px] sm:text-base text-[#526077] leading-[1.68]">
                We believe in complete portfolio honesty. Below you will find our verified live client case study with full technical documentation, alongside clearly marked placeholder slots reserved for our next client deployments.
              </p>

              {/* Filter Pills */}
              <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] p-1">
                {[
                  { id: "all", label: "All Portfolio Items" },
                  { id: "verified", label: "Verified Completed Work (1)" },
                  { id: "placeholders", label: "Reserved Upcoming Slots (2)" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setFilter(tab.id)}
                    className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-all cursor-pointer ${
                      filter === tab.id
                        ? "bg-[#0F172A] text-white shadow-2xs"
                        : "text-[#64748B] hover:text-[#0B132B]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. PORTFOLIO ITEMS                                           */}
        {/* ============================================================ */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
          <div className="global-container space-y-12">
            {/* Verified Completed Projects */}
            {showLive &&
              PROJECTS_DATA.map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                  className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_14px_34px_-15px_rgba(15,23,42,0.06)]"
                >
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-center">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-[11px] font-medium text-[#0B132B]">
                          <CheckCircle2 className="size-3.5 text-[#2457E6]" />
                          <span>{project.status}</span>
                        </span>
                        <span className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-[11px] font-medium text-[#2457E6]">
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-3.5">
                        {project.logo && (
                          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white p-1.5">
                            <img
                              src={project.logo}
                              alt={`${project.name} logo`}
                              className="max-h-8 w-auto object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <span className="font-mono text-[11px] font-medium text-[#64748B]">
                            PROJECT {project.num} · {project.timeline}
                          </span>
                          <h2 className="font-heading text-2xl sm:text-[28px] font-semibold tracking-[-0.03em] text-[#0B132B]">
                            {project.name}
                          </h2>
                        </div>
                      </div>

                      <p className="text-[14.5px] sm:text-[15px] text-[#526077] leading-[1.68]">
                        {project.description}
                      </p>

                      <div>
                        <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-[#64748B] mb-2">
                          Verified Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-[#E2E8F0] bg-white px-2.5 py-1 text-xs font-medium text-[#475569]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap gap-2.5">
                        <CTAButton
                          to={project.link}
                          variant="primary"
                          size="sm"
                          icon="arrow-right"
                        >
                          Read Full Case Study
                        </CTAButton>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-4 text-[13px] font-medium text-[#0B132B] hover:border-[#CBD5E1] hover:text-[#2457E6] transition-colors"
                          >
                            <span>Visit Live Website</span>
                            <ExternalLink className="size-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-5">
                        <div className="sm:col-span-8 overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                          <img
                            src={project.desktopImage}
                            alt={`${project.name} desktop preview`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="sm:col-span-4 flex justify-center">
                          <div className="w-[140px] sm:w-full max-w-[165px] overflow-hidden rounded-2xl border-2 border-[#0F172A] bg-white shadow-sm">
                            <img
                              src={project.mobileImage}
                              alt={`${project.name} mobile preview`}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

            {/* Clearly Distinguished Placeholder Slots */}
            {showPlaceholders && (
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#2457E6] block">
                      TRANSPARENT PLACEHOLDER SHOWCASE
                    </span>
                    <h2 className="mt-1 font-heading text-xl sm:text-2xl font-semibold tracking-[-0.025em] text-[#0B132B]">
                      Reserved Portfolio Slots for Upcoming Client Builds
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {PLACEHOLDER_PROJECTS.map((slot) => (
                    <div
                      key={slot.id}
                      className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-7 hover:border-[#CBD5E1] transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-[11px] font-medium text-[#64748B]">
                            <Sparkles className="size-3 text-[#2457E6]" />
                            <span>{slot.status}</span>
                          </span>
                          <span className="font-mono text-xs font-medium text-[#64748B]">
                            SLOT {slot.num}
                          </span>
                        </div>

                        <div className="mb-4 flex items-center gap-3.5">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#2457E6]">
                            {slot.visualType === "ecommerce" ? (
                              <ShoppingBag className="size-5" />
                            ) : (
                              <Smartphone className="size-5" />
                            )}
                          </div>
                          <div>
                            <span className="text-[11px] font-medium text-[#2457E6] uppercase tracking-wider">
                              {slot.category}
                            </span>
                            <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[#0B132B]">
                              {slot.name}
                            </h3>
                          </div>
                        </div>

                        <p className="text-[13.5px] text-[#526077] leading-[1.65]">
                          {slot.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {slot.technologies.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-[#E2E8F0] bg-white px-2.5 py-0.5 text-[11.5px] font-medium text-[#64748B]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                        <span className="text-xs font-medium text-[#64748B]">
                          Placeholder Layout
                        </span>
                        <Link
                          to={slot.link}
                          className="inline-flex items-center gap-1 text-[13px] font-medium text-[#0B132B] hover:text-[#2457E6] transition-colors"
                        >
                          <span>{slot.linkText}</span>
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 2B. Industry Niche Demo Websites Showcase */}
        <DemoWebsitesSection />

        {/* 3. Verified Client Feedback */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
          <div className="global-container max-w-4xl">
            <div className="mb-10 sm:mb-12 text-center">
              <span className="mb-3 inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                VERIFIED TESTIMONIAL
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.15]">
                Real Feedback From Our Completed Deployment.
              </h2>
            </div>

            {TESTIMONIALS_DATA[0] && (
              <TestimonialCard
                quote={TESTIMONIALS_DATA[0].quote}
                client={TESTIMONIALS_DATA[0].client}
                project={TESTIMONIALS_DATA[0].project}
                source={TESTIMONIALS_DATA[0].source}
                logo={TESTIMONIALS_DATA[0].logo}
                caseStudyLink={TESTIMONIALS_DATA[0].caseStudyLink}
              />
            )}
          </div>
        </section>

        {/* 4. Final CTA */}
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
