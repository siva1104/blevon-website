"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Plus, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SERVICES_LIST, getServiceBySlug } from "@/data/services";
import { PROJECTS_DATA } from "@/data/projects";
import { ServiceVisualMockup } from "./ServiceVisualMockup";
import { SpecialOffersSection } from "@/features/home/sections/SpecialOffersSection";
import { CtaSection } from "@/features/home/sections/CtaSection";

export function ServiceDetailPage({ forcedSlug }) {
  const params = useParams();
  const activeSlug = forcedSlug || params.slug || "website-development";
  const service = getServiceBySlug(activeSlug) || SERVICES_LIST[0];
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = `${service.pageTitle} | Blevon Agency`;
    setOpenFaq(0);
  }, [service]);

  const featuredProject = PROJECTS_DATA[0];
  const portfolioPreviewImage =
    service.slug === "custom-web-application-development" &&
    featuredProject?.cmsImage
      ? featuredProject.cmsImage
      : featuredProject?.desktopImage;

  return (
    <div className="min-h-screen bg-transparent text-[#0B132B]">
      <Navbar />

      <main className="pt-[72px] sm:pt-[80px]">
        {/* ============================================================== */}
        {/* 1. UNIQUE SERVICE HERO SECTION (WITH INTEGRATED BREADCRUMB)    */}
        {/* ============================================================== */}
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
            <Breadcrumb
              items={[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: service.pageTitle },
              ]}
              className="mb-6 sm:mb-8"
            />

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Service Hero Copy */}
              <div className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium tracking-[0.15em] text-[#2457E6] uppercase leading-snug"
                >
                  <span>{service.heroEyebrow}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.06 }}
                  className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]"
                >
                  {service.heroHeadline}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12 }}
                  className="mt-4 sm:mt-5 max-w-xl text-[15px] sm:text-base text-[#526077] leading-[1.68]"
                >
                  {service.heroDescription}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18 }}
                  className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3"
                >
                  <CTAButton
                    to={`/contact?service=${service.slug}`}
                    variant="primary"
                    size="lg"
                    icon="arrow-up-right"
                  >
                    Get a Free Consultation
                  </CTAButton>
                </motion.div>
              </div>

              {/* Right Column: Bespoke Visual Illustration / Device Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="lg:col-span-6"
              >
                <ServiceVisualMockup visualTheme={service.visualTheme} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. SERVICE DESCRIPTION & DELIVERABLES                          */}
        {/* ============================================================== */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
              {/* Left: Detailed Service Description */}
              <div className="lg:col-span-7">
                <span className="mb-3 inline-flex items-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                  SERVICE OVERVIEW
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.15]">
                  {service.overviewTitle}
                </h2>
                <div className="mt-5 space-y-4 text-[15px] text-[#526077] leading-[1.68]">
                  {service.overviewParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Right: Key Deliverables Box */}
              <div className="lg:col-span-5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#2457E6] block mb-2">
                  CORE DELIVERABLES
                </span>
                <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[#0B132B] mb-5 leading-snug">
                  What Is Included in {service.shortTitle}
                </h3>
                <ul className="space-y-3">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[13.5px] sm:text-[14px] font-medium text-[#0B132B] leading-snug"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-[#2457E6] mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* If viewing the Packages page, display the Full Special Offers Pricing Section */}
        {service.slug === "packages" && <SpecialOffersSection fullDetails />}

        {/* ============================================================== */}
        {/* 3. FEATURES & CAPABILITIES                                     */}
        {/* ============================================================== */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
          <div className="global-container">
            <div className="mx-auto mb-12 sm:mb-14 max-w-2xl text-center">
              <span className="mb-3 inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                FEATURES &amp; CAPABILITIES
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.15]">
                Engineered for Real-World Performance.
              </h2>
              <p className="mt-3.5 text-[15px] text-[#526077] leading-[1.65]">
                {service.featureSubtitle ||
                  "Every capability we engineer is designed to scale reliably with your business."}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-7 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_-15px_rgba(15,23,42,0.07)] transition-all"
                >
                  <span className="inline-flex size-8 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] font-mono text-xs font-medium text-[#2457E6] mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading text-[17px] font-semibold tracking-[-0.02em] text-[#0B132B] leading-snug">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] text-[#526077] leading-[1.65]">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. BUSINESS BENEFITS                                           */}
        {/* ============================================================== */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
          <div className="global-container">
            <div className="mx-auto mb-12 sm:mb-14 max-w-2xl text-center">
              <span className="mb-3 inline-flex items-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                KEY BENEFITS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.15]">
                Why Businesses Choose Blevon for {service.shortTitle}.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-7"
                >
                  <span className="inline-flex self-start rounded-full bg-[#0F172A] px-3 py-1 font-mono text-[11px] font-medium text-white mb-4">
                    {benefit.metric}
                  </span>
                  <h3 className="font-heading text-[17px] font-semibold tracking-[-0.02em] text-[#0B132B] leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] text-[#526077] leading-[1.65]">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. DEVELOPMENT PROCESS                                         */}
        {/* ============================================================== */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
          <div className="global-container">
            <div className="mx-auto mb-12 sm:mb-14 max-w-2xl text-center">
              <span className="mb-3 inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                DEVELOPMENT WORKFLOW
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.15]">
                How We Deliver {service.shortTitle}.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-white p-6"
                >
                  <span className="font-mono text-[11px] font-medium text-[#2457E6] block mb-2">
                    STAGE {step.step}
                  </span>
                  <h3 className="font-heading text-[16.5px] font-semibold tracking-[-0.02em] text-[#0B132B] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-[#526077] leading-[1.65]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. RELEVANT PORTFOLIO SHOWCASE                                 */}
        {/* ============================================================== */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
          <div className="global-container">
            <div className="mx-auto mb-10 sm:mb-12 max-w-2xl text-center">
              <span className="mb-3 inline-flex items-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                VERIFIED PORTFOLIO PROOF
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.15]">
                Real Client Engineering in Action.
              </h2>
            </div>

            {featuredProject && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8 lg:p-10">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white border border-[#E2E8F0] px-3 py-1 text-[11px] font-medium text-[#0B132B]">
                      {featuredProject.status}
                    </span>
                    <span className="rounded-full bg-white border border-[#E2E8F0] px-3 py-1 text-[11px] font-medium text-[#2457E6]">
                      {featuredProject.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-[28px] font-semibold tracking-[-0.03em] text-[#0B132B] leading-tight">
                    {featuredProject.name}
                  </h3>
                  <p className="text-[14.5px] sm:text-[15px] text-[#526077] leading-[1.68]">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#E2E8F0] bg-white px-2.5 py-1 text-xs font-medium text-[#475569]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3 flex flex-wrap items-center gap-2.5">
                    <CTAButton
                      to="/case-study"
                      variant="primary"
                      size="sm"
                      icon="arrow-right"
                    >
                      Explore Case Study
                    </CTAButton>
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-4 text-[13px] font-medium text-[#0B132B] hover:border-[#CBD5E1] hover:text-[#2457E6] transition-colors"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-3">
                  <img
                    src={portfolioPreviewImage}
                    alt={featuredProject.name}
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. SERVICE-SPECIFIC FAQ SECTION                                */}
        {/* ============================================================== */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
          <div className="global-container max-w-4xl">
            <div className="mb-10 sm:mb-12 text-center">
              <span className="mb-3 inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                SERVICE FAQ
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.15]">
                Frequently Asked Questions About {service.shortTitle}.
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                const num = String(idx + 1).padStart(2, "0");
                return (
                  <div
                    key={faq.q}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-[#CBD5E1] bg-white shadow-[0_12px_28px_-14px_rgba(15,23,42,0.08)]"
                        : "border-[#E2E8F0] bg-white/80 hover:border-[#CBD5E1] hover:bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 shrink-0 font-mono text-xs font-medium text-[#2457E6] bg-[#F8FAFC] px-2.5 py-1 rounded-lg border border-[#E2E8F0]">
                          {num}
                        </span>
                        <div>
                          <span className="block text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#64748B]">
                            {service.shortTitle}
                          </span>
                          <span className="mt-0.5 block font-heading text-[16px] sm:text-[17px] font-semibold tracking-[-0.015em] text-[#0B132B] leading-snug">
                            {faq.q}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-[#0F172A] bg-[#0F172A] text-white"
                            : "border-[#E2E8F0] bg-[#F8FAFC] text-[#0B132B]"
                        }`}
                      >
                        <Plus className="size-3.5" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="border-t border-[#E2E8F0] px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                            <p className="pl-0 sm:pl-11 text-[14px] sm:text-[14.5px] text-[#526077] leading-[1.68]">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}

export default ServiceDetailPage;
