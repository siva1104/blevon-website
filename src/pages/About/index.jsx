"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Navbar2 } from "../Home/components/Navbar2";
import { Footer8 } from "../Home/components/Footer8";
import { PROJECTS_DATA } from "../Home/components/Portfolio23";
import aboutHero3DScene from "../../assets/images/about/about-hero-3d-scene.png";

export default function AboutPage() {
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

  const workflowSteps = [
    {
      num: "01",
      title: "Understand",
      desc: "We learn about your business, audience, goals, and the problem you're trying to solve.",
    },
    {
      num: "02",
      title: "Plan",
      desc: "We define the structure, features, technology, and direction before development begins.",
    },
    {
      num: "03",
      title: "Build",
      desc: "We turn the direction into a functional digital product with attention to usability, performance, and detail.",
    },
    {
      num: "04",
      title: "Launch",
      desc: "We prepare the product for real users and create a foundation that can be improved over time.",
    },
  ];

  const principles = [
    {
      title: "Clarity",
      desc: "Keep the experience understandable and focused.",
    },
    {
      title: "Purpose",
      desc: "Every design and development decision should serve a reason.",
    },
    {
      title: "Craft",
      desc: "Care about the details, from the interface to the technology behind it.",
    },
    {
      title: "Progress",
      desc: "Build with room to learn, improve, and grow.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#101828]">
      {/* 1. Master Alignment Navbar */}
      <Navbar2 />

      <main className="pt-20 sm:pt-22 md:pt-24">
        {/* Breadcrumb above Hero Section */}
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
              <span className="font-semibold text-[#0E2A6D]">About BLEVON</span>
            </nav>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 01 — ABOUT HERO (Rounded 3D Editorial Canvas)                */}
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
                    src={aboutHero3DScene}
                    alt="BLEVON 3D product studio architecture"
                    className="size-full object-cover object-left-center"
                  />
                  {/* Soft Left Gradient Blend to ensure seamless transition behind typography */}
                  <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </motion.div>
              </div>

              <div className="relative z-10 w-full">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                  {/* Left Column: Eyebrow + Heading + Description (Span 7 cols) */}
                  <div className="flex flex-col items-start justify-center lg:col-span-7 xl:col-span-6">
                    {/* 1. Eyebrow */}
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="mb-2 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase"
                    >
                      ABOUT BLEVON
                    </motion.span>

                    {/* 2. Main Heading */}
                    <motion.h1
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                      className="text-2xl font-bold tracking-tight text-[#0E2A6D] sm:text-3xl lg:text-4xl xl:text-[42px] leading-[1.14] max-w-lg"
                    >
                      Building digital experiences with purpose<span className="text-[#2563EB]">.</span>
                    </motion.h1>

                    {/* 3. Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-3.5 max-w-[460px] text-xs text-[#667085] sm:text-sm lg:text-[14.5px] leading-relaxed"
                    >
                      Blevon is a digital development studio focused on creating modern
                      websites and mobile applications for businesses. We combine
                      thoughtful design with reliable technology to turn ideas into
                      useful digital experiences.
                    </motion.p>
                  </div>

                  {/* Mobile / Tablet 3D Scene Visual (Visible below lg) */}
                  <div className="w-full lg:hidden">
                    <div className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-white p-1 shadow-2xs">
                      <img
                        src={aboutHero3DScene}
                        alt="BLEVON 3D product studio architecture"
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
        {/* 02 — OUR STORY (Balanced 2-Column Editorial Layout)          */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-12 md:py-16">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.3fr] lg:gap-10 items-start">
              {/* Left Column: Eyebrow + Heading */}
              <div>
                <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                  OUR STORY
                </span>
                <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18] max-w-lg">
                  Built with a simple idea: make digital work better.
                </h2>
              </div>

              {/* Right Column: Paragraphs */}
              <div className="space-y-3 text-xs text-[#667085] sm:text-sm leading-relaxed">
                <p>
                  Blevon was created around a straightforward belief: digital
                  experiences should be clear, useful, and built around a real
                  purpose.
                </p>
                <p>
                  We focus on understanding the problem before choosing the
                  technology, designing around the people who will use the
                  product, and building experiences that work reliably in the real
                  world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03 — WHAT WE DO (Two Clean Aligned Blocks with Separators)   */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-12 md:py-16">
          <div className="global-container">
            <div className="mb-7 max-w-xl sm:mb-9">
              <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                WHAT WE DO
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
                Two core capabilities. One focused approach.
              </h2>
            </div>

            {/* Two Clean Aligned Capability Blocks */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-[#E4E7EC]">
              {/* Service 01: Website Development */}
              <div className="flex flex-col justify-between pt-5 first:pt-0 md:pt-0 md:pr-6 lg:pr-10">
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-[#2563EB]">
                    01
                  </span>
                  <h3 className="mt-1 text-base font-bold text-[#101828] sm:text-lg">
                    Website Development
                  </h3>
                  <p className="mt-2 text-xs text-[#667085] sm:text-sm leading-relaxed">
                    We design and develop responsive, high-performance websites
                    that help businesses communicate clearly and give their
                    customers a better digital experience.
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#E4E7EC]/80">
                  <a
                    href="/services/web-development"
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0E2A6D] transition-colors hover:text-[#2563EB]"
                  >
                    <span>Learn more</span>
                    <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Service 02: App Development */}
              <div className="flex flex-col justify-between pt-5 md:pt-0 md:pl-6 lg:pl-10">
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-[#2563EB]">
                    02
                  </span>
                  <h3 className="mt-1 text-base font-bold text-[#101828] sm:text-lg">
                    App Development
                  </h3>
                  <p className="mt-2 text-xs text-[#667085] sm:text-sm leading-relaxed">
                    We build modern mobile applications focused on usability,
                    performance, and the needs of the people who use them.
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#E4E7EC]/80">
                  <a
                    href="/services/app-development"
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0E2A6D] transition-colors hover:text-[#2563EB]"
                  >
                    <span>Learn more</span>
                    <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Existing Secondary CTA */}
            <div className="mt-7 pt-5 border-t border-[#E4E7EC] flex items-center justify-start">
              <a
                href="/services/web-development"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2563EB] hover:text-blue-700 transition-colors"
              >
                <span>Explore Our Services</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04 — HOW WE WORK (4-Step Clean Horizontal Editorial Process) */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-12 md:py-16">
          <div className="global-container">
            <div className="mb-7 max-w-xl sm:mb-9">
              <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                HOW WE WORK
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
                From understanding to execution.
              </h2>
            </div>

            {/* 4-Step Editorial Columns with Top Border */}
            <div className="border-t border-[#E4E7EC] pt-6 sm:pt-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {workflowSteps.map((step, idx) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 05 — OUR PRINCIPLES (Editorial 4-Item Grid)                  */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-12 md:py-16">
          <div className="global-container">
            <div className="mb-7 max-w-xl sm:mb-9">
              <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                OUR PRINCIPLES
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
                The way we approach our work.
              </h2>
            </div>

            {/* 4 Editorial Items Spanning the Container */}
            <div className="border-t border-[#E4E7EC] pt-6 sm:pt-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {principles.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col justify-start"
                  >
                    <h3 className="text-sm font-bold text-[#101828] sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#667085] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 06 — SELECTED WORK (Premium Editorial Project Presentation)   */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-12 md:py-16">
          <div className="global-container">
            <div className="mb-7 max-w-xl sm:mb-9">
              <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                SELECTED WORK
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
                One project is where we're starting. More to come.
              </h2>
              <p className="mt-2 text-xs text-[#667085] sm:text-sm leading-relaxed">
                We're building our portfolio one project at a time, with a focus
                on doing the work well rather than filling a page with numbers.
              </p>
            </div>

            {/* Editorial Showcase Projects List */}
            <div className="space-y-6">
              {PROJECTS_DATA.map((project) => (
                <article
                  key={project.id}
                  className="group grid grid-cols-1 items-center gap-5 rounded-2xl border border-[#E4E7EC] bg-white p-5 sm:p-6 md:grid-cols-[1fr_1.1fr] lg:gap-7 lg:p-7 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-md"
                >
                  {/* Left: Project Information */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Project Number */}
                      <span className="font-mono text-xs font-bold tracking-wider text-[#2563EB]">
                        {project.num}
                      </span>

                      {/* Project Title */}
                      <h3 className="mt-1 text-base font-bold tracking-tight text-[#101828] sm:text-lg leading-[1.18] uppercase">
                        {project.name}
                      </h3>

                      {/* Category Badge */}
                      <div className="mt-2">
                        <span className="inline-block rounded-full border border-[#E4E7EC] bg-[#EAF1FF] px-2.5 py-0.5 text-xs font-semibold text-[#2563EB]">
                          {project.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-2.5 text-xs text-[#667085] leading-relaxed sm:text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* View Project Link */}
                    <div className="mt-5 pt-3.5 border-t border-[#E4E7EC]">
                      <a
                        href={project.link || "/case-study"}
                        className="group/link inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0E2A6D] transition-colors duration-200 hover:text-[#2563EB]"
                      >
                        <span>{project.linkText || "View Project"}</span>
                        <span className="text-[#2563EB] transition-transform duration-300 group-hover/link:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Right: Dedicated Client Logo / Visual Panel */}
                  <div className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-[#F7F8F6]">
                    <a
                      href={project.link || "/case-study"}
                      className="flex aspect-[16/10] w-full items-center justify-center p-5 sm:p-6 md:p-8 focus:outline-none transition-transform duration-700 group-hover:scale-105"
                    >
                      <img
                        src={project.logo}
                        alt={`${project.name} client logo`}
                        className="max-h-12 sm:max-h-16 md:max-h-18 w-auto max-w-[85%] object-contain"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Secondary CTA: View Our Work */}
            <div className="mt-7 flex items-center justify-start">
              <a
                href="/work"
                className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-[#E4E7EC] bg-white px-5 py-2 text-xs sm:text-sm font-semibold text-[#101828] shadow-xs transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Our Work</span>
                <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 07 — FINAL CTA (Clean, High-Impact Action Banner)            */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] bg-gradient-to-b from-[#F7F8F6] to-[#EAF1FF]/70 py-12 text-center sm:py-16 md:py-18">
          <div className="global-container">
            <div className="mx-auto max-w-xl">
              <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                GET IN TOUCH
              </span>
              <h2 className="mb-2.5 text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.18]">
                Have something worth building?
              </h2>
              <p className="mx-auto mb-5 max-w-lg text-xs text-[#667085] sm:text-sm leading-relaxed">
                Tell us what you're working on, what you're trying to achieve, and
                where you need help.
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
