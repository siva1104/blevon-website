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

      <main>
        {/* Breadcrumb above Hero Section */}
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
              <span className="font-semibold text-[#0E2A6D]">About BLEVON</span>
            </nav>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 01 — ABOUT HERO (Seamless Integrated 3D Editorial Canvas)     */}
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
                  src={aboutHero3DScene}
                  alt="BLEVON 3D product studio architecture"
                  className="size-full object-cover object-left-center"
                />
                {/* Soft Left Gradient Blend to ensure seamless transition behind typography */}
                <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#F7F8F6] via-[#F7F8F6]/80 to-transparent" />
              </motion.div>
            </div>
          </div>

          <div className="global-container relative z-10 w-full">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              {/* Left Column: Breadcrumb + Editorial Content (Span 7 cols) */}
              <div className="flex flex-col items-start justify-center lg:col-span-7 xl:col-span-6">
                {/* 1. Eyebrow */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm"
                >
                  ABOUT BLEVON
                </motion.span>

                {/* 3. Main Heading (Bold #0E2A6D Navy with Blue Period Accent) */}
                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl font-bold tracking-tight text-[#0E2A6D] sm:text-5xl lg:text-6xl xl:text-[64px] leading-[1.08] max-w-xl"
                >
                  Building digital experiences with purpose<span className="text-[#2563EB]">.</span>
                </motion.h1>

                {/* 4. Description (Controlled Readable Width ~540px) */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 max-w-[540px] text-base text-[#667085] sm:text-lg lg:text-xl leading-relaxed"
                >
                  Blevon is a digital development studio focused on creating modern
                  websites and mobile applications for businesses. We combine
                  thoughtful design with reliable technology to turn ideas into
                  useful digital experiences.
                </motion.p>
              </div>

              {/* Mobile / Tablet 3D Scene Visual (Visible below lg) */}
              <div className="w-full lg:hidden">
                <div className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white p-2 shadow-sm">
                  <img
                    src={aboutHero3DScene}
                    alt="BLEVON 3D product studio architecture"
                    className="aspect-[16/9] w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 02 — OUR STORY (Balanced 2-Column Editorial Layout)          */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-18 md:py-24">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-start">
              {/* Left Column: Eyebrow + Heading */}
              <div>
                <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                  OUR STORY
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl leading-[1.18] max-w-xl">
                  Built with a simple idea: make digital work better.
                </h2>
              </div>

              {/* Right Column: Paragraphs */}
              <div className="space-y-6 text-lg text-[#667085] sm:text-xl leading-relaxed">
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
        <section className="relative w-full border-t border-[#E4E7EC] py-18 md:py-24">
          <div className="global-container">
            <div className="mb-12 max-w-3xl sm:mb-16">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                WHAT WE DO
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.18]">
                Two core capabilities. One focused approach.
              </h2>
            </div>

            {/* Two Clean Aligned Capability Blocks */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E4E7EC]">
              {/* Service 01: Website Development */}
              <div className="flex flex-col justify-between pt-8 first:pt-0 md:pt-0 md:pr-8 lg:pr-12">
                <div>
                  <span className="font-mono text-sm font-bold tracking-wider text-[#2563EB] sm:text-base">
                    01
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-[#101828] sm:text-3xl">
                    Website Development
                  </h3>
                  <p className="mt-4 text-base text-[#667085] sm:text-lg lg:text-xl leading-relaxed">
                    We design and develop responsive, high-performance websites
                    that help businesses communicate clearly and give their
                    customers a better digital experience.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E4E7EC]/80">
                  <a
                    href="/services/web-development"
                    className="group inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-[#0E2A6D] transition-colors hover:text-[#2563EB]"
                  >
                    <span>Learn more</span>
                    <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Service 02: App Development */}
              <div className="flex flex-col justify-between pt-8 md:pt-0 md:pl-8 lg:pl-12">
                <div>
                  <span className="font-mono text-sm font-bold tracking-wider text-[#2563EB] sm:text-base">
                    02
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-[#101828] sm:text-3xl">
                    App Development
                  </h3>
                  <p className="mt-4 text-base text-[#667085] sm:text-lg lg:text-xl leading-relaxed">
                    We build modern mobile applications focused on usability,
                    performance, and the needs of the people who use them.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E4E7EC]/80">
                  <a
                    href="/services/app-development"
                    className="group inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-[#0E2A6D] transition-colors hover:text-[#2563EB]"
                  >
                    <span>Learn more</span>
                    <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Existing Secondary CTA */}
            <div className="mt-12 pt-8 border-t border-[#E4E7EC] flex items-center justify-start">
              <a
                href="/services/web-development"
                className="group inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-[#2563EB] hover:text-blue-700 transition-colors"
              >
                <span>Explore Our Services</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04 — HOW WE WORK (4-Step Clean Horizontal Editorial Process) */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-18 md:py-24">
          <div className="global-container">
            <div className="mb-12 max-w-3xl sm:mb-16">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                HOW WE WORK
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl leading-[1.18]">
                From understanding to execution.
              </h2>
            </div>

            {/* 4-Step Editorial Columns with Top Border */}
            <div className="border-t border-[#E4E7EC] pt-10 sm:pt-12">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
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
                    <span className="font-mono text-sm font-bold tracking-wider text-[#2563EB] sm:text-base">
                      {step.num}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-[#101828] sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base text-[#667085] leading-relaxed">
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
        <section className="relative w-full border-t border-[#E4E7EC] py-18 md:py-24">
          <div className="global-container">
            <div className="mb-12 max-w-3xl sm:mb-16">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                OUR PRINCIPLES
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl leading-[1.18]">
                The way we approach our work.
              </h2>
            </div>

            {/* 4 Editorial Items Spanning the Container */}
            <div className="border-t border-[#E4E7EC] pt-10 sm:pt-12">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
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
                    <h3 className="text-xl font-bold text-[#101828] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base text-[#667085] leading-relaxed">
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
        <section className="relative w-full border-t border-[#E4E7EC] py-18 md:py-24">
          <div className="global-container">
            <div className="mb-12 max-w-3xl sm:mb-16">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                SELECTED WORK
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.18]">
                One project is where we're starting. More to come.
              </h2>
              <p className="mt-4 text-lg text-[#667085] sm:text-xl leading-relaxed">
                We're building our portfolio one project at a time, with a focus
                on doing the work well rather than filling a page with numbers.
              </p>
            </div>

            {/* Editorial Showcase Projects List */}
            <div className="space-y-12">
              {PROJECTS_DATA.map((project) => (
                <article
                  key={project.id}
                  className="group grid grid-cols-1 items-center gap-8 rounded-3xl border border-[#E4E7EC] bg-white p-7 sm:p-9 md:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-12 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md"
                >
                  {/* Left: Project Information */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Project Number */}
                      <span className="font-mono text-sm font-bold tracking-wider text-[#2563EB] sm:text-base">
                        {project.num}
                      </span>

                      {/* Project Title */}
                      <h3 className="mt-2.5 text-2xl font-bold tracking-tight text-[#101828] sm:text-3xl lg:text-4xl leading-[1.15] uppercase">
                        {project.name}
                      </h3>

                      {/* Category Badge */}
                      <div className="mt-3">
                        <span className="inline-block rounded-full border border-[#E4E7EC] bg-[#EAF1FF] px-3.5 py-1 text-xs sm:text-sm font-semibold text-[#2563EB]">
                          {project.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-5 text-base text-[#667085] leading-relaxed sm:text-lg lg:text-xl">
                        {project.description}
                      </p>
                    </div>

                    {/* View Project Link */}
                    <div className="mt-8 pt-6 border-t border-[#E4E7EC]">
                      <a
                        href={project.link || "/case-study"}
                        className="group/link inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-[#0E2A6D] transition-colors duration-200 hover:text-[#2563EB]"
                      >
                        <span>{project.linkText || "View Project"}</span>
                        <span className="text-[#2563EB] transition-transform duration-300 group-hover/link:translate-x-1.5">
                          →
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Right: Dedicated Client Logo / Visual Panel */}
                  <div className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-[#F7F8F6]">
                    <a
                      href={project.link || "/case-study"}
                      className="flex aspect-[16/10] w-full items-center justify-center p-8 sm:p-12 md:p-14 focus:outline-none transition-transform duration-700 group-hover:scale-105"
                    >
                      <img
                        src={project.logo}
                        alt={`${project.name} client logo`}
                        className="max-h-20 sm:max-h-24 md:max-h-28 w-auto max-w-[85%] object-contain"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Secondary CTA: View Our Work */}
            <div className="mt-12 flex items-center justify-start">
              <a
                href="/work"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#E4E7EC] bg-white px-8 py-4 text-base sm:text-lg font-semibold text-[#101828] shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:scale-[1.02] active:scale-[0.98]"
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
        <section className="relative w-full border-t border-[#E4E7EC] bg-gradient-to-b from-[#F7F8F6] to-[#EAF1FF]/70 py-20 text-center md:py-28">
          <div className="global-container">
            <div className="mx-auto max-w-3xl">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                GET IN TOUCH
              </span>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#101828] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12]">
                Have something worth building?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-[#667085] sm:text-xl lg:text-2xl leading-relaxed">
                Tell us what you're working on, what you're trying to achieve, and
                where you need help.
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
