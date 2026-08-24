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

      <main className="pt-20 sm:pt-22 md:pt-24">
        {/* ============================================================ */}
        {/* BREADCRUMB (Above Hero Section - Matching About Page)         */}
        {/* ============================================================ */}
        <div className="pt-3 sm:pt-4">
          <div className="global-container">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium"
            >
              <a
                href="/"
                className="text-[#667085] transition-colors duration-200 hover:text-[#2563EB]"
              >
                Home
              </a>
              <span className="text-[#98A2B3] select-none text-[10px]">/</span>
              <a
                href="/services/web-development"
                className="text-[#667085] transition-colors duration-200 hover:text-[#2563EB]"
              >
                Services
              </a>
              <span className="text-[#98A2B3] select-none text-[10px]">/</span>
              <span className="font-semibold text-[#0E2A6D]">App Development</span>
            </nav>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 01 — APP DEVELOPMENT HERO (Rounded 3D Editorial Canvas)     */}
        {/* ============================================================ */}
        <section className="relative w-full pt-2 pb-8 sm:pt-3 sm:pb-12">
          <div className="global-container">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-gradient-to-br from-[#F7F8F6] via-white to-[#EAF1FF]/30 p-6 sm:p-8 md:p-10 lg:p-12 lg:min-h-[460px] xl:min-h-[500px] flex items-center shadow-2xs"
            >
              {/* Background 3D Architectural Scene (Seamless Desktop Blend inside rounded card) */}
              <div className="pointer-events-none absolute inset-0 hidden lg:block overflow-hidden">
                <motion.div
                  style={{ x: parallaxX, y: parallaxY }}
                  className="absolute right-0 top-0 h-full w-[55%] xl:w-[58%]"
                >
                  <img
                    src={serviceApp3DScene}
                    alt="BLEVON 3D mobile application product studio architecture"
                    className="size-full object-cover object-left-center"
                  />
                  {/* Soft Left Gradient Blend to ensure seamless transition behind typography */}
                  <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </motion.div>
              </div>

              <div className="relative z-10 w-full">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                  {/* Left Column: Eyebrow + Heading + Description + CTAs (Span 7 cols) */}
                  <div className="flex flex-col items-start justify-center lg:col-span-7 xl:col-span-6">
                    {/* Eyebrow */}
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="mb-2 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase"
                    >
                      APP DEVELOPMENT
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h1
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                      className="text-2xl font-bold tracking-tight text-[#0E2A6D] sm:text-3xl lg:text-4xl xl:text-[42px] leading-[1.14] max-w-lg"
                    >
                      Mobile applications built around your users<span className="text-[#2563EB]">.</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-3.5 max-w-[460px] text-xs text-[#667085] sm:text-sm lg:text-[14.5px] leading-relaxed"
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
                      className="mt-4.5 flex flex-wrap items-center gap-3"
                    >
                      <a
                        href="/contact"
                        className="group inline-flex h-10 sm:h-11 items-center justify-center gap-2 rounded-full bg-[#2563EB] px-5 sm:px-6 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_14px_rgba(37,99,235,0.25)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] active:scale-[0.98]"
                      >
                        <span>Start a Project</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>

                      <a
                        href="/work"
                        className="group inline-flex h-10 sm:h-11 items-center justify-center gap-2 rounded-full border border-[#D0D5DD] bg-white px-5 sm:px-6 text-xs sm:text-sm font-semibold text-[#0E2A6D] shadow-2xs transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] active:scale-[0.98]"
                      >
                        <span>View Our Work</span>
                        <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </motion.div>
                  </div>

                  {/* Mobile / Tablet 3D Scene Visual (Visible below lg) */}
                  <div className="w-full lg:hidden">
                    <div className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-white p-1 shadow-2xs">
                      <img
                        src={serviceApp3DScene}
                        alt="BLEVON 3D mobile application product studio architecture"
                        className="aspect-[16/9] w-full rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 02 — CAPABILITIES (What We Build)                            */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-12 md:py-16">
          <div className="global-container">
            <div className="mb-7 max-w-xl sm:mb-9">
              <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                CAPABILITIES
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
                What We Build
              </h2>
              <p className="mt-2 text-xs text-[#667085] sm:text-sm leading-relaxed">
                We develop purpose-engineered mobile software focused on intuitive
                interactions and robust architecture.
              </p>
            </div>

            {/* Clean Capabilities Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whatWeBuild.map((item, idx) => (
                <div
                  key={item.num}
                  className={`flex flex-col justify-between rounded-2xl border border-[#E4E7EC] bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-md ${
                    idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <span className="font-mono text-xs font-bold tracking-wider text-[#2563EB]">
                      {item.num}
                    </span>
                    <h3 className="mt-1.5 text-base font-bold text-[#101828] sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#667085] leading-relaxed sm:text-sm">
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
        <section className="relative w-full border-t border-[#E4E7EC] bg-white py-12 md:py-16">
          <div className="global-container">
            <div className="mb-7 max-w-xl sm:mb-9">
              <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                FOUNDATIONS
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
                What You Get
              </h2>
              <p className="mt-2 text-xs text-[#667085] sm:text-sm leading-relaxed">
                Every mobile application is built with essential technical
                foundations from day one.
              </p>
            </div>

            {/* 4-Column Foundations Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whatYouGet.map((item) => (
                <div
                  key={item.num}
                  className="flex flex-col justify-start rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-4.5 sm:p-5 shadow-2xs transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xs"
                >
                  <span className="font-mono text-xs font-bold tracking-wider text-[#2563EB] uppercase">
                    {item.num}
                  </span>
                  <h3 className="mt-1.5 text-sm font-bold text-[#101828] sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#667085] leading-relaxed">
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
        <section className="relative w-full border-t border-[#E4E7EC] py-12 md:py-16">
          <div className="global-container">
            <div className="mb-7 max-w-xl sm:mb-9">
              <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                HOW WE WORK
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
                Our Process
              </h2>
              <p className="mt-2 text-xs text-[#667085] sm:text-sm leading-relaxed">
                A structured five-step lifecycle ensuring dependable mobile delivery.
              </p>
            </div>

            {/* 5-Column Process Columns with Top Border */}
            <div className="border-t border-[#E4E7EC] pt-6 sm:pt-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                {processSteps.map((step) => (
                  <div
                    key={step.num}
                    className="flex flex-col justify-start"
                  >
                    <span className="font-mono text-xs font-bold tracking-wider text-[#2563EB]">
                      {step.num}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-[#101828] sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#667085] leading-relaxed">
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
        <section className="relative w-full border-t border-[#E4E7EC] py-12 sm:py-16 md:py-18">
          <div className="global-container">
            {/* Centered Heading */}
            <div className="mx-auto mb-7 max-w-xl text-center sm:mb-9">
              <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                COMMON QUESTIONS
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Premium Centered Card List (Middle of the Page) */}
            <div className="mx-auto max-w-xl lg:max-w-2xl space-y-2.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-blue-300 shadow-md ring-1 ring-blue-300/40"
                        : "border-[#E4E7EC] shadow-2xs hover:border-blue-200 hover:shadow-xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between p-3.5 sm:p-4 text-left focus:outline-none gap-3 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-[#101828] sm:text-base leading-snug">
                        {faq.q}
                      </span>
                      <span
                        className={`flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300 ${
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
                          <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-1.5 text-xs text-[#667085] sm:text-sm leading-relaxed border-t border-[#F2F4F7]">
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
        <section className="relative w-full border-t border-[#E4E7EC] bg-gradient-to-b from-[#F7F8F6] to-[#EAF1FF]/70 py-12 text-center sm:py-16 md:py-18">
          <div className="global-container">
            <div className="mx-auto max-w-xl">
              <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                START A PROJECT
              </span>
              <h2 className="mb-2.5 text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
                Let's build an app that users rely on.
              </h2>
              <p className="mx-auto mb-5 max-w-lg text-xs text-[#667085] sm:text-sm leading-relaxed">
                Tell us about your product idea, target users, and timeline. We'll
                help you map out the fastest path to launch.
              </p>
              <a
                href="/contact"
                className="group inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-[#2563EB] px-6 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(37,99,235,0.25)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
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
