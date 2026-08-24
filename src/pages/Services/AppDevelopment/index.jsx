"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Navbar2 } from "../../Home/components/Navbar2";
import { Footer8 } from "../../Home/components/Footer8";
import serviceApp3DScene from "../../../assets/images/services/service-app-3d-scene.jpg";

export default function AppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null);

  // Micro-parallax mouse tracking for 3D depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 75, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatWeBuild = [
    {
      num: "01",
      title: "Business Applications",
      desc: "Custom internal tools, workflow apps, and workforce management platforms designed to streamline operations.",
    },
    {
      num: "02",
      title: "Customer-facing Apps",
      desc: "Polished consumer applications focused on frictionless onboarding, retention, and engaging everyday user journeys.",
    },
    {
      num: "03",
      title: "Service Applications",
      desc: "On-demand platforms, booking systems, membership portals, and subscription-based digital services.",
    },
    {
      num: "04",
      title: "Cross-Platform Apps",
      desc: "Unified codebases built with modern frameworks to deliver native speed and identical UI on iOS and Android.",
    },
    {
      num: "05",
      title: "Custom App Solutions",
      desc: "Bespoke mobile software engineered specifically for complex integrations, offline capabilities, or unique hardware.",
    },
  ];

  const whatYouGet = [
    {
      num: "01",
      title: "Native Performance",
      desc: "Smooth 60fps animations, instant screen transitions, and efficient memory management tailored for mobile chips.",
    },
    {
      num: "02",
      title: "Intuitive UX Patterns",
      desc: "Familiar mobile interactions, ergonomics, gesture controls, and thoughtful micro-feedback.",
    },
    {
      num: "03",
      title: "Cross-Platform Parity",
      desc: "Cohesive visual polish and identical feature sets maintained across iPhones, iPads, and Android devices.",
    },
    {
      num: "04",
      title: "Offline Architecture",
      desc: "Local data caching and background synchronization strategies that keep the app functional without network signal.",
    },
    {
      num: "05",
      title: "Secure Authentication",
      desc: "Biometric sign-in (FaceID / Fingerprint), OAuth social logins, token management, and encrypted storage.",
    },
    {
      num: "06",
      title: "API & Backend Sync",
      desc: "Resilient communication layers interfacing seamlessly with custom databases, webhooks, and cloud APIs.",
    },
    {
      num: "07",
      title: "Store Submission Support",
      desc: "End-to-end guidance through Apple App Store and Google Play Store review guidelines and metadata setup.",
    },
    {
      num: "08",
      title: "Telemetry & Crash Analytics",
      desc: "Integrated error logging, crash monitoring, and performance telemetry to detect issues before users do.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Define",
      desc: "Map user journeys, technical constraints, feature priorities, and platform requirements.",
    },
    {
      num: "02",
      title: "Architect",
      desc: "Design data schemas, API contracts, state management strategies, and core UI wireframes.",
    },
    {
      num: "03",
      title: "Design",
      desc: "Craft high-fidelity mobile UI components, design tokens, and interactive motion prototypes.",
    },
    {
      num: "04",
      title: "Build",
      desc: "Engineer the application with clean typed code, component modularity, and continuous testing.",
    },
    {
      num: "05",
      title: "Deploy",
      desc: "Conduct beta testing (TestFlight / Play Internal), resolve feedback, and submit to production app stores.",
    },
  ];

  const faqs = [
    {
      q: "Do you build native apps for both iOS and Android?",
      a: "Yes. We specialize in modern cross-platform development (React Native / Flutter) that compiles to native code for iOS and Android, ensuring native performance with a single maintainable codebase.",
    },
    {
      q: "How long does mobile app development typically take?",
      a: "A standard MVP mobile application generally takes between 6 to 12 weeks from architecture to store submission, depending on technical complexity, integrations, and backend requirements.",
    },
    {
      q: "Do you handle the App Store and Google Play submission process?",
      a: "Yes. We manage certificate creation, privacy disclosures, screenshot preparations, and compliance checks to ensure smooth store approvals.",
    },
    {
      q: "Can the app connect to our existing backend and database?",
      a: "Absolutely. We build clean API integration layers that securely communicate with existing REST, GraphQL, or database architectures.",
    },
    {
      q: "Do you offer post-launch maintenance and updates?",
      a: "Yes. We provide ongoing support plans covering OS compatibility updates, security patches, performance monitoring, and iterative feature development.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#101828]">
      {/* 1. Master Navbar */}
      <Navbar2 />

      <main>
        {/* ============================================================ */}
        {/* BREADCRUMB (Above Hero Section - Matching About Page)         */}
        {/* ============================================================ */}
        <div className="pt-6 sm:pt-8">
          <div className="global-container">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2.5 text-sm font-medium sm:text-base md:text-lg"
            >
              <a
                href="/"
                className="text-[#667085] transition-colors duration-200 hover:text-[#2563EB]"
              >
                Home
              </a>
              <span className="text-[#98A2B3] select-none">/</span>
              <a
                href="/services/web-development"
                className="text-[#667085] transition-colors duration-200 hover:text-[#2563EB]"
              >
                Services
              </a>
              <span className="text-[#98A2B3] select-none">/</span>
              <span className="font-semibold text-[#0E2A6D]">App Development</span>
            </nav>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 01 — APP DEVELOPMENT HERO (Seamless 3D Editorial Canvas)     */}
        {/* ============================================================ */}
        <section
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20 md:pb-24 lg:min-h-[640px] xl:min-h-[700px] flex items-center"
        >
          {/* Background 3D Architectural Scene (Seamless Desktop Blend) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block overflow-hidden">
            <div className="global-container h-full relative">
              <motion.div
                style={{ x: parallaxX, y: parallaxY }}
                className="absolute right-0 top-0 h-full w-[60%] xl:w-[62%]"
              >
                <img
                  src={serviceApp3DScene}
                  alt="BLEVON 3D mobile application product studio architecture"
                  className="size-full object-cover object-left-center"
                />
                {/* Soft Left Gradient Blend to ensure seamless transition behind typography */}
                <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#F7F8F6] via-[#F7F8F6]/80 to-transparent" />
              </motion.div>
            </div>
          </div>

          <div className="global-container relative z-10 w-full">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              {/* Left Column: Eyebrow + Heading + Description + CTAs (Span 7 cols) */}
              <div className="flex flex-col items-start justify-center lg:col-span-7 xl:col-span-6">
                {/* Eyebrow */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm"
                >
                  APP DEVELOPMENT
                </motion.span>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl font-bold tracking-tight text-[#0E2A6D] sm:text-5xl lg:text-6xl xl:text-[64px] leading-[1.08] max-w-xl"
                >
                  Mobile applications built around your users<span className="text-[#2563EB]">.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 max-w-[540px] text-base text-[#667085] sm:text-lg lg:text-xl leading-relaxed"
                >
                  We design and develop modern mobile applications that deliver smooth
                  interactions, reliable performance, and genuine utility for your
                  business and customers.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5"
                >
                  <a
                    href="/contact"
                    className="group inline-flex h-14 sm:h-16 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-8 sm:px-10 text-base sm:text-lg font-semibold text-white shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Start a Project</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>

                  <a
                    href="/work"
                    className="group inline-flex h-14 sm:h-16 items-center justify-center gap-3 rounded-full border border-[#D0D5DD] bg-white px-8 sm:px-10 text-base sm:text-lg font-semibold text-[#0E2A6D] shadow-xs backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>View Our Work</span>
                    <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>
                </motion.div>
              </div>

              {/* Mobile / Tablet 3D Scene Visual (Visible below lg) */}
              <div className="w-full lg:hidden">
                <div className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white p-2 shadow-sm">
                  <img
                    src={serviceApp3DScene}
                    alt="BLEVON 3D mobile application product studio architecture"
                    className="aspect-[16/9] w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 02 — CAPABILITIES (What We Build)                            */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-18 md:py-24">
          <div className="global-container">
            <div className="mb-12 max-w-3xl sm:mb-16">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                CAPABILITIES
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.18]">
                What We Build
              </h2>
              <p className="mt-4 text-lg text-[#667085] leading-relaxed">
                We develop purpose-engineered mobile software focused on intuitive
                interactions and robust architecture.
              </p>
            </div>

            {/* Clean Capabilities Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whatWeBuild.map((item, idx) => (
                <div
                  key={item.num}
                  className={`flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-md ${
                    idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <span className="font-mono text-sm font-bold tracking-wider text-[#2563EB] sm:text-base">
                      {item.num}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-[#101828] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3.5 text-base text-[#667085] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03 — FOUNDATIONS (What You Get)                              */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] bg-white py-18 md:py-24">
          <div className="global-container">
            <div className="mb-12 max-w-3xl sm:mb-16">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                FOUNDATIONS
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.18]">
                What You Get
              </h2>
              <p className="mt-4 text-lg text-[#667085] leading-relaxed">
                Every mobile application is built with essential technical
                foundations from day one.
              </p>
            </div>

            {/* 4-Column Foundations Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whatYouGet.map((item) => (
                <div
                  key={item.num}
                  className="flex flex-col justify-start rounded-2xl border border-[#E4E7EC] bg-[#F7F8F6] p-6 sm:p-7 shadow-2xs transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-sm"
                >
                  <span className="font-mono text-xs font-bold tracking-wider text-[#2563EB] uppercase">
                    {item.num}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#101828] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#667085] sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04 — HOW WE WORK (Our Process)                               */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-18 md:py-24">
          <div className="global-container">
            <div className="mb-12 max-w-3xl sm:mb-16">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                HOW WE WORK
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl leading-[1.18]">
                Our Process
              </h2>
              <p className="mt-4 text-lg text-[#667085] leading-relaxed">
                A structured five-step lifecycle ensuring dependable mobile delivery.
              </p>
            </div>

            {/* 5-Column Process Columns with Top Border */}
            <div className="border-t border-[#E4E7EC] pt-10 sm:pt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                {processSteps.map((step) => (
                  <div
                    key={step.num}
                    className="flex flex-col justify-start"
                  >
                    <span className="font-mono text-sm font-bold tracking-wider text-[#2563EB] sm:text-base">
                      {step.num}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-[#101828] sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#667085] sm:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 05 — COMMON QUESTIONS (Frequently Asked Questions)           */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-20 md:py-28">
          <div className="global-container">
            {/* Centered Heading */}
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Premium Centered Card List (Middle of the Page) */}
            <div className="mx-auto max-w-3xl lg:max-w-4xl space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className={`overflow-hidden rounded-2xl sm:rounded-3xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-blue-300 shadow-md ring-1 ring-blue-300/40"
                        : "border-[#E4E7EC] shadow-2xs hover:border-blue-200 hover:shadow-xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between p-6 sm:p-7 text-left focus:outline-none gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg font-bold text-[#101828] sm:text-xl leading-snug">
                        {faq.q}
                      </span>
                      <span
                        className={`flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full border text-base font-semibold transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-blue-400 bg-[#EAF1FF] text-[#2563EB]"
                            : "border-[#E4E7EC] bg-[#F7F8F6] text-[#667085] hover:bg-white hover:text-[#2563EB]"
                        }`}
                      >
                        +
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
                          <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 text-base text-[#667085] sm:text-lg leading-relaxed border-t border-[#F2F4F7]">
                            {faq.a}
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

        {/* ============================================================ */}
        {/* 06 — FINAL CTA (Aligned Product Studio Banner)               */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] bg-gradient-to-b from-[#F7F8F6] to-[#EAF1FF]/70 py-20 text-center md:py-28">
          <div className="global-container">
            <div className="mx-auto max-w-3xl">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                START A PROJECT
              </span>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#101828] sm:text-5xl md:text-6xl leading-[1.12]">
                Let's build an app that users rely on.
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-[#667085] sm:text-xl lg:text-2xl leading-relaxed">
                Tell us about your product idea, target users, and timeline. We'll
                help you map out the fastest path to launch.
              </p>
              <a
                href="/contact"
                className="group inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-10 text-lg font-semibold text-white shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] sm:text-xl"
              >
                <span>Start a Project</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Master Footer */}
      <Footer8 />
    </div>
  );
}
