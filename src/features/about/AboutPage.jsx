"use client";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  ShoppingBag,
  Code2,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhyBlevonSection } from "@/features/home/sections/WhyBlevonSection";
import { ProcessSection } from "@/features/home/sections/ProcessSection";
import { TechStackSection } from "@/features/home/sections/TechStackSection";
import { CtaSection } from "@/features/home/sections/CtaSection";
import aboutHero3DScene from "@/assets/images/about/about-hero-3d-scene.png";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Blevon Digital Engineering Agency";
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-[#0B132B]">
      <Navbar />

      <main className="pt-[72px] sm:pt-[80px]">
        {/* ============================================================ */}
        {/* 1. ABOUT HERO SECTION (WITH INTEGRATED BREADCRUMB)           */}
        {/* ============================================================ */}
        <section className="relative w-full overflow-hidden bg-transparent pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
          {/* Subtle Architectural Grid */}
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
                { label: "About Us" },
              ]}
              className="mb-6 sm:mb-8"
            />

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Mission & Story */}
              <div className="lg:col-span-6">
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase"
                >
                  ABOUT BLEVON AGENCY
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.06 }}
                  className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]"
                >
                  Engineering Digital Products With{" "}
                  <span className="bg-gradient-to-r from-[#1E40AF] via-[#2457E6] to-[#3B82F6] bg-clip-text text-transparent">
                    Purpose, Clarity &amp; Scale.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12 }}
                  className="mt-4 sm:mt-5 max-w-xl text-[15px] sm:text-base text-[#526077] leading-[1.68]"
                >
                  Based in Bangalore, India and serving businesses globally, Blevon is a modern digital agency focused on custom website development, Android &amp; iOS mobile applications, and complete e-commerce solutions.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18 }}
                  className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3"
                >
                  <CTAButton
                    to="/contact"
                    variant="primary"
                    size="lg"
                    icon="arrow-up-right"
                  >
                    Work With Us
                  </CTAButton>
                </motion.div>

                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center gap-6 text-xs font-medium text-[#64748B]">
                  <span className="inline-flex items-center gap-1.5 text-[#0B132B]">
                    <MapPin className="size-4 text-[#2457E6]" />
                    Mahadevapura, Bangalore, India
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#0B132B]">
                    <ShieldCheck className="size-4 text-[#2457E6]" />
                    100% Custom Code &amp; Transparent Pricing
                  </span>
                </div>
              </div>

              {/* Right Column: 3D Architectural Visual */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="lg:col-span-6"
              >
                <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2 shadow-[0_14px_34px_-15px_rgba(15,23,42,0.08)]">
                  <img
                    src={aboutHero3DScene}
                    alt="Blevon 3D Digital Studio Architecture"
                    className="aspect-[16/10] w-full rounded-xl object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. OUR STORY & PHILOSOPHY                                    */}
        {/* ============================================================ */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <span className="mb-3 inline-flex items-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                  OUR STORY &amp; MISSION
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.15]">
                  Built on a Straightforward Belief: Make Digital Work Better.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-4 text-[15px] text-[#526077] leading-[1.68]">
                <p>
                  Blevon was created around a clear conviction: digital products—whether a corporate website, a patient clinic portal, a mobile app, or a multi-channel online store—should be fast, intuitive, and engineered around real business outcomes rather than generic templates.
                </p>
                <p>
                  We take time to understand our clients&apos; operational workflows before choosing the technology stack. We design around the people who will actually use the product, and we engineer clean, maintainable systems that teams can manage independently long after launch.
                </p>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                    <h3 className="font-heading text-base font-semibold tracking-[-0.015em] text-[#0B132B]">
                      Design + Engineering Unity
                    </h3>
                    <p className="mt-2 text-[13.5px] text-[#526077] leading-[1.65]">
                      UI/UX designers and full-stack developers collaborate from day one so nothing is lost between mockup and production code.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                    <h3 className="font-heading text-base font-semibold tracking-[-0.015em] text-[#0B132B]">
                      Radical Transparency
                    </h3>
                    <p className="mt-2 text-[13.5px] text-[#526077] leading-[1.65]">
                      Honest timelines, documented milestones, real case studies, and zero hidden agency markups on third-party infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. CORE PRACTICE AREAS                                       */}
        {/* ============================================================ */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
          <div className="global-container">
            <div className="mx-auto mb-12 sm:mb-14 max-w-2xl text-center">
              <span className="mb-3 inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                WHAT WE DO
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.15]">
                Four Integrated Practice Areas.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Globe,
                  title: "Website Development",
                  desc: "Custom websites and authoritative business platforms engineered with React, Next.js, and technical SEO foundations.",
                  href: "/services/website-development",
                },
                {
                  icon: Smartphone,
                  title: "Mobile App Development",
                  desc: "Native and cross-platform Android and iOS applications engineered for smooth 60fps performance and store scale.",
                  href: "/services/android-app-development",
                },
                {
                  icon: ShoppingBag,
                  title: "E-commerce Solutions",
                  desc: "Complete online storefronts and synced shopping apps with catalog management, cart, checkout, and payment gateways.",
                  href: "/services/ecommerce-website-development",
                },
                {
                  icon: Code2,
                  title: "Custom Web Applications",
                  desc: "Full-stack cloud portals, custom CMS dashboards, and bespoke software tailored to your operational workflows.",
                  href: "/services/custom-web-application-development",
                },
              ].map((area) => {
                const IconComp = area.icon;
                return (
                  <Link
                    key={area.title}
                    to={area.href}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_-15px_rgba(15,23,42,0.08)] transition-all duration-300"
                  >
                    <div>
                      <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0B132B] group-hover:border-[#2457E6] group-hover:bg-[#2457E6] group-hover:text-white transition-colors">
                        <IconComp className="size-4.5" />
                      </div>
                      <h3 className="font-heading text-[17px] font-semibold tracking-[-0.02em] text-[#0B132B] group-hover:text-[#2457E6] transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] text-[#526077] leading-[1.65]">
                        {area.desc}
                      </p>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#0B132B] group-hover:text-[#2457E6] transition-colors">
                      <span>Explore Practice</span>
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Why Choose Blevon */}
        <WhyBlevonSection />

        {/* 5. 7-Step Development Process */}
        <ProcessSection />

        {/* 6. Technology Stack */}
        <TechStackSection />

        {/* 7. Final CTA */}
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
