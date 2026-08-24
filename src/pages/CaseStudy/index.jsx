"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar2 } from "../Home/components/Navbar2";
import { Footer8 } from "../Home/components/Footer8";
import kavuturuLogo from "../../assets/images/clients/kavuturu-logo.png";
import kavuturuBeforeImg from "../../assets/images/clients/kavuturu-before.png";
import kavuturuDesktopImg from "../../assets/images/clients/kavuturu-desktop.png";
import kavuturuMobileImg from "../../assets/images/clients/kavuturu-mobile.png";
import kavuturuCmsDashboardImg from "../../assets/images/clients/kavuturu-cms-dashboard.png";
import kavuturuPayment1 from "../../assets/images/clients/kavuturu-payment-1.jpg";
import kavuturuPayment2 from "../../assets/images/clients/kavuturu-payment-2.jpg";

export default function CaseStudyPage() {
  const objectives = [
    {
      num: "01",
      title: "Website Redesign",
      desc: "Redesign the existing website with a modern, professional interface, clearer information structure, responsive layouts, and a better experience for patients.",
    },
    {
      num: "02",
      title: "SEO",
      desc: "Improve the website's SEO structure and technical foundation to create a stronger base for search visibility and long-term organic growth.",
    },
    {
      num: "03",
      title: "Dynamic Content Management",
      desc: "Introduce a CMS/admin system that allows authorized clinic staff to manage important website content without requiring a developer for every update.",
    },
  ];

  const deliveredServices = [
    {
      title: "Website Redesign",
      desc: "Reworked the existing website's visual design, structure, navigation, responsive behavior, and user experience to create a more modern digital presence.",
    },
    {
      title: "SEO",
      desc: "Improved the website's SEO and technical foundation, including page structure, content organization, metadata, and other technical considerations for search-engine discoverability.",
    },
    {
      title: "Dynamic CMS",
      desc: "Added a dynamic content-management system that allows the clinic team to update important website information through an administrative interface.",
    },
  ];

  const cmsCapabilities = [
    "Doctor information",
    "Treatments",
    "Testimonials / Reviews",
    "Blogs",
    "Gallery",
    "Before & After content",
    "Contact information",
    "Other editable website content",
  ];

  const techGroups = [
    {
      category: "Frontend",
      items: [
        {
          name: "React 19",
          icon: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" className="size-6" fill="none">
              <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="1">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          ),
        },
        {
          name: "Vite",
          icon: (
            <svg viewBox="0 0 410 404" className="size-6" fill="none">
              <path
                d="M399.641 59.5246L215.643 388.545C211.835 395.349 202.074 395.449 198.125 388.723L9.32926 66.8614C5.00624 59.4977 10.4549 50.4079 18.9959 50.672L389.92 62.1601C398.549 62.4274 403.957 71.8214 399.641 79.5246Z"
                fill="#BD34FE"
              />
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          icon: (
            <svg viewBox="0 0 24 24" className="size-6" fill="none">
              <path
                d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
                fill="#38BDF8"
              />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        {
          name: "Node.js",
          icon: (
            <svg viewBox="0 0 24 24" className="size-6" fill="none">
              <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z" fill="#539E43" />
              <path d="M12 4.5l6.5 3.8v7.5L12 19.5 5.5 15.8V8.3L12 4.5z" fill="#333333" />
            </svg>
          ),
        },
        {
          name: "Express.js",
          icon: (
            <svg viewBox="0 0 24 24" className="size-6" fill="none">
              <rect width="24" height="24" rx="4" fill="#000" />
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          name: "MongoDB Atlas",
          icon: (
            <svg viewBox="0 0 24 24" className="size-6" fill="none">
              <path d="M12 2C11.5 2 7 8.5 7 14c0 3.5 2.2 6.5 5 7.8 2.8-1.3 5-4.3 5-7.8 0-5.5-4.5-12-5-12z" fill="#47A248" />
              <path d="M12 2v19.8c2.8-1.3 5-4.3 5-7.8 0-5.5-4.5-12-5-12z" fill="#499D4A" />
              <path d="M12 18.5V11" stroke="#fff" strokeWidth="1" />
            </svg>
          ),
        },
        {
          name: "Mongoose",
          icon: (
            <svg viewBox="0 0 24 24" className="size-6" fill="none">
              <rect width="24" height="24" rx="4" fill="#880000" />
              <path d="M7 16l5-8 5 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Auth & Cloud Media",
      items: [
        {
          name: "JWT",
          icon: (
            <svg viewBox="0 0 24 24" className="size-6" fill="none">
              <circle cx="12" cy="12" r="10" fill="#000" />
              <path d="M7 12l3 3 7-7" stroke="#D63AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          name: "Cloudinary",
          icon: (
            <svg viewBox="0 0 24 24" className="size-6" fill="none">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#3448C5" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Dev & Deployment",
      items: [
        {
          name: "GitHub",
          icon: (
            <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          ),
        },
        {
          name: "Vercel",
          icon: (
            <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
              <path d="M12 2L24 22H0L12 2Z" />
            </svg>
          ),
        },
      ],
    },
  ];

  const approachSteps = [
    {
      num: "01",
      title: "Understand",
      desc: "Reviewed the existing website and identified areas where the experience, structure, discoverability, and content management could be improved.",
    },
    {
      num: "02",
      title: "Redesign",
      desc: "Reworked the website around a clearer structure and modern user experience while keeping the clinic's core information and purpose intact.",
    },
    {
      num: "03",
      title: "Optimize",
      desc: "Improved the SEO and technical foundations of the website.",
    },
    {
      num: "04",
      title: "Enable",
      desc: "Added dynamic content management so the clinic team can maintain and update the website.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#101828]">
      {/* 1. Master Navbar */}
      <Navbar2 />

      <main>
        {/* ============================================================ */}
        {/* BREADCRUMB (Above Hero Section)                              */}
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
                href="/work"
                className="text-[#667085] transition-colors duration-200 hover:text-[#2563EB]"
              >
                Work
              </a>
              <span className="text-[#98A2B3] select-none">/</span>
              <span className="font-semibold text-[#0E2A6D]">Kavuturu Dental Clinic</span>
            </nav>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 1. PROJECT HERO (Editorial Left-Aligned Layout)              */}
        {/* ============================================================ */}
        <section className="relative w-full pt-8 pb-12 sm:pt-10 sm:pb-16">
          <div className="global-container">
            <div className="flex flex-col items-start max-w-4xl">
              {/* Eyebrow */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm"
              >
                CASE STUDY
              </motion.span>

              {/* Project Title */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-bold tracking-tight text-[#0E2A6D] sm:text-5xl lg:text-6xl xl:text-[64px] leading-[1.08] uppercase"
              >
                KAVUTURU DENTAL CLINIC
              </motion.h1>

              {/* Service */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 text-xl font-semibold text-[#2563EB] sm:text-2xl"
              >
                Website Development
              </motion.p>

              {/* Project Timeline Metadata */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#667085] sm:text-sm"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-[#98A2B3]">Started:</span>
                  <span className="font-semibold text-[#101828]">June 2026</span>
                </div>
                <span className="text-[#D0D5DD] select-none">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#98A2B3]">Completed:</span>
                  <span className="font-semibold text-[#101828]">July 2026</span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-3xl text-base text-[#667085] sm:text-lg lg:text-xl leading-relaxed"
              >
                A high-performance digital web redesign engineered for patient usability,
                search discovery, and dynamic content management.
              </motion.p>

              {/* View Live Website Button */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-7 flex items-center gap-4"
              >
                <a
                  href="https://www.kavuturudentalclinic.com/?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-13 sm:h-14 items-center justify-center gap-2.5 rounded-full bg-[#2563EB] px-7 sm:px-8 text-base font-semibold text-white shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Live Website</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HERO VISUAL (Desktop + Mobile Responsive Equal-Height Showcase) */}
        <section className="relative w-full pb-16 md:pb-24">
          <div className="global-container">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-white p-3 sm:p-5 lg:p-6 shadow-xs transition-all duration-500 hover:border-blue-300 hover:shadow-md"
            >
              <div className="relative w-full rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#F4F5F2] via-[#EAF1FF]/40 to-[#F0F2EE] p-5 sm:p-8 md:p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-10">
                  
                  {/* 1. Desktop Browser Frame */}
                  <div className="w-full lg:flex-1 overflow-hidden rounded-xl sm:rounded-2xl border border-[#D0D5DD] bg-white shadow-xl transition-transform duration-700 ease-out group-hover:scale-[1.008] flex flex-col">
                    <div className="flex h-7 sm:h-9 shrink-0 items-center justify-between border-b border-[#E4E7EC] bg-[#F8F9FA] px-3 sm:px-4">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="size-2 sm:size-2.5 rounded-full bg-[#FF5F56]" />
                        <div className="size-2 sm:size-2.5 rounded-full bg-[#FFBD2E]" />
                        <div className="size-2 sm:size-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="flex h-4 sm:h-5 items-center rounded-md border border-[#E4E7EC] bg-white px-3 text-[10px] sm:text-xs font-medium text-[#667085]">
                        kavuturudental.com
                      </div>
                      <div className="w-8 sm:w-12" />
                    </div>
                    <div className="relative flex-1 w-full overflow-hidden bg-white min-h-[320px] sm:min-h-[420px] lg:min-h-[480px]">
                      <img
                        src={kavuturuDesktopImg}
                        alt="Kavuturu Dental Clinic Desktop Website"
                        className="size-full object-cover object-top"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* 2. Mobile Device */}
                  <div className="w-[70%] sm:w-[320px] md:w-[290px] lg:w-[270px] xl:w-[290px] shrink-0 transition-transform duration-700 ease-out group-hover:-translate-y-2 flex flex-col">
                    <div className="relative h-full w-full rounded-[2.2rem] sm:rounded-[2.8rem] border-[6px] sm:border-[8px] border-[#0F172A] bg-[#0F172A] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35)] ring-1 ring-white/20 overflow-hidden flex flex-col">
                      <div className="absolute left-1/2 top-2 h-2.5 sm:h-3.5 w-14 sm:w-18 -translate-x-1/2 rounded-full bg-black z-30" />
                      <div className="relative flex-1 w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.4rem] bg-white min-h-[320px] sm:min-h-[420px] lg:min-h-[480px]">
                        <img
                          src={kavuturuMobileImg}
                          alt="Kavuturu Dental Clinic Mobile Responsive Website"
                          className="size-full object-cover object-top"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. PROJECT OVERVIEW                                          */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-20 md:py-28">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16 items-start">
              <div>
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm">
                  PROJECT OVERVIEW
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl leading-[1.15]">
                  Redesigning an existing digital presence.
                </h2>
              </div>

              <div className="space-y-6 text-lg text-[#667085] sm:text-xl leading-relaxed">
                <p>
                  Kavuturu Dental Clinic already had an existing website, but it needed
                  a more modern user experience, stronger SEO foundations, and a better
                  way for the clinic team to manage website content.
                </p>
                <p>
                  BLEVON focused on improving the existing digital presence rather than
                  simply creating another static website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. PROJECT OBJECTIVES                                        */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] bg-white py-20 md:py-28">
          <div className="global-container">
            <div className="mb-14 max-w-3xl sm:mb-18">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm">
                OBJECTIVES
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
                From an existing website to a more capable digital platform.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {objectives.map((obj) => (
                <div
                  key={obj.num}
                  className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-[#F7F8F6] p-7 sm:p-9 shadow-2xs transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-sm"
                >
                  <div>
                    <span className="font-mono text-sm font-bold tracking-wider text-[#2563EB] sm:text-base">
                      {obj.num}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-[#101828] sm:text-2xl">
                      {obj.title}
                    </h3>
                    <p className="mt-3.5 text-base text-[#667085] leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. WHAT BLEVON DELIVERED                                     */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-20 md:py-28">
          <div className="global-container">
            <div className="mb-14 max-w-3xl sm:mb-18">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm">
                DELIVERED
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
                Three areas. One complete digital improvement.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {deliveredServices.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-white p-7 sm:p-9 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-sm"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#101828] sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3.5 text-base text-[#667085] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. BEFORE & AFTER — LOCKED (Existing section untouched)       */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] bg-[#F7F8F6] py-20 md:py-28">
          <div className="global-container">
            <div className="mb-14 max-w-3xl sm:mb-18">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                VISUAL COMPARISON
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
                Before & After
              </h2>
              <p className="mt-4 text-lg text-[#667085] leading-relaxed">
                Demonstrating the transformation from the client's original website
                to BLEVON's high-performance digital redesign.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* BEFORE CARD */}
              <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-white p-4 sm:p-6 shadow-xs">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#D0D5DD] bg-[#F2F4F7] px-3.5 py-1 text-xs font-bold text-[#475467] uppercase tracking-wider">
                      Existing Website / Before
                    </span>
                    <span className="text-xs text-[#98A2B3] font-mono">kavuturudental.in</span>
                  </div>

                  <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-[#E4E7EC] bg-[#F8F9FA] shadow-inner">
                    <div className="flex h-7 items-center justify-between border-b border-[#E4E7EC] bg-[#F2F4F7] px-3">
                      <div className="flex items-center gap-1.5">
                        <div className="size-2 rounded-full bg-[#D0D5DD]" />
                        <div className="size-2 rounded-full bg-[#D0D5DD]" />
                        <div className="size-2 rounded-full bg-[#D0D5DD]" />
                      </div>
                      <span className="text-[10px] text-[#667085] font-mono">kavuturudental.in</span>
                      <div className="w-6" />
                    </div>
                    <img
                      src={kavuturuBeforeImg}
                      alt="Kavuturu Dental Clinic original existing website (Before)"
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-6 border-t border-[#F2F4F7] pt-4">
                  <h4 className="text-base font-bold text-[#101828]">Previous Limitations:</h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-[#667085]">
                    <li>• Static page structure requiring developer code edits</li>
                    <li>• Unstructured mobile responsive breakpoints</li>
                    <li>• Basic on-page search metadata</li>
                  </ul>
                </div>
              </div>

              {/* AFTER CARD */}
              <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-blue-200 bg-white p-4 sm:p-6 shadow-sm ring-1 ring-blue-100">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-[#EAF1FF] px-3.5 py-1 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                      BLEVON Redesign / After
                    </span>
                    <span className="text-xs text-[#2563EB] font-mono font-semibold">kavuturudental.com</span>
                  </div>

                  <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-blue-200 bg-white shadow-md">
                    <div className="flex h-7 items-center justify-between border-b border-[#E4E7EC] bg-[#F8F9FA] px-3">
                      <div className="flex items-center gap-1.5">
                        <div className="size-2 rounded-full bg-[#FF5F56]" />
                        <div className="size-2 rounded-full bg-[#FFBD2E]" />
                        <div className="size-2 rounded-full bg-[#27C93F]" />
                      </div>
                      <span className="text-[10px] text-[#2563EB] font-medium font-mono">kavuturudental.com</span>
                      <div className="w-6" />
                    </div>
                    <img
                      src={kavuturuDesktopImg}
                      alt="Kavuturu Dental Clinic BLEVON redesign (After)"
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-6 border-t border-blue-50 pt-4">
                  <h4 className="text-base font-bold text-[#0E2A6D]">BLEVON Upgrades:</h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-[#475467]">
                    <li>• Modernized clinical UI with fluid responsive layouts</li>
                    <li>• Dynamic CMS dashboard for independent clinic updates</li>
                    <li>• Engineered technical SEO & structured schema foundation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. CMS / DYNAMIC MANAGEMENT                                  */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] bg-white py-20 md:py-28">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-center">
              <div>
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm">
                  CONTENT MANAGEMENT
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl leading-[1.15]">
                  Built to be managed.
                </h2>
                <p className="mt-6 text-base text-[#667085] sm:text-lg leading-relaxed">
                  The website includes a dynamic management system that allows
                  authorized clinic staff to maintain and update important website
                  information without depending on a developer for routine content changes.
                </p>

                <div className="mt-8">
                  <span className="text-xs font-bold tracking-wider text-[#101828] uppercase">
                    The CMS can manage:
                  </span>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cmsCapabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2 rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] px-3.5 py-2.5 text-sm font-medium text-[#101828]"
                      >
                        <span className="text-[#2563EB]">✓</span>
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Authentic CMS Dashboard Screenshot Frame */}
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-white shadow-md">
                <div className="flex h-7 sm:h-8 items-center justify-between border-b border-[#E4E7EC] bg-[#F8F9FA] px-3 sm:px-4">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-[#FF5F56]" />
                    <div className="size-2 rounded-full bg-[#FFBD2E]" />
                    <div className="size-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-medium text-[#667085]">kavuturudental.com/admin</span>
                  <div className="w-8" />
                </div>
                <div className="relative w-full overflow-hidden bg-white">
                  <img
                    src={kavuturuCmsDashboardImg}
                    alt="Kavuturu Dental Clinic CMS Admin Dashboard"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. TECHNOLOGY                                                */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-20 md:py-28">
          <div className="global-container">
            <div className="mb-14 max-w-3xl sm:mb-18">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm">
                TECHNOLOGY
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl leading-[1.15]">
                Tools used to build the platform.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {techGroups.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-white p-6 sm:p-7 shadow-xs"
                >
                  <h3 className="text-sm font-bold tracking-wider text-[#2563EB] uppercase">
                    {group.category}
                  </h3>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {group.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3 transition-colors duration-200 hover:bg-white hover:border-blue-300"
                      >
                        <div className="size-6 shrink-0 flex items-center justify-center">
                          {tech.icon}
                        </div>
                        <span className="text-sm font-semibold text-[#101828]">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. HOW WE APPROACHED IT                                      */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] bg-white py-20 md:py-28">
          <div className="global-container">
            <div className="mb-14 max-w-3xl sm:mb-18">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm">
                APPROACH
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl leading-[1.15]">
                Understand → Redesign → Optimize → Enable
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {approachSteps.map((step) => (
                <div
                  key={step.num}
                  className="flex flex-col justify-start rounded-2xl border border-[#E4E7EC] bg-[#F7F8F6] p-6 sm:p-7 shadow-2xs transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-sm"
                >
                  <span className="font-mono text-sm font-bold tracking-wider text-[#2563EB]">
                    {step.num}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[#101828]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#667085] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 9. FINAL OUTCOME                                             */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-20 md:py-28">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16 items-start">
              <div>
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm">
                  OUTCOME
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl leading-[1.15]">
                  More than a redesign.
                </h2>
              </div>

              <div className="space-y-6 text-lg text-[#667085] sm:text-xl leading-relaxed">
                <p>
                  The result is a modernized digital platform for Kavuturu Dental Clinic that combines:
                </p>
                <div className="rounded-2xl border border-blue-200 bg-[#EAF1FF]/60 p-6 text-base sm:text-lg font-semibold text-[#0E2A6D]">
                  A redesigned website + stronger SEO foundation + dynamic content management
                </div>
                <p>
                  The project transformed the existing website into a more modern,
                  maintainable, and manageable digital platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10. PROJECT INVESTMENT & PROJECT RECORD                      */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] bg-white py-20 md:py-28">
          <div className="global-container">
            <div className="mb-12 max-w-3xl sm:mb-16">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-sm">
                PROJECT RECORD
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl md:text-5xl leading-[1.15]">
                Project Investment & Documentation
              </h2>
              <div className="mt-4 flex items-center gap-2 text-base sm:text-lg text-[#667085]">
                <span>Project Period:</span>
                <span className="font-semibold text-[#101828]">June 2026 — July 2026</span>
              </div>
            </div>

            {/* Project Investment Editorial Information Panel */}
            <div className="mb-14 rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-[#F7F8F6] p-6 sm:p-8 lg:p-10 max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 border-b border-[#E4E7EC] pb-6 sm:pb-8">
                <div>
                  <span className="text-xs font-bold tracking-[0.16em] text-[#667085] uppercase">
                    Standard Project Value
                  </span>
                  <div className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
                    $500 <span className="text-base sm:text-lg font-medium text-[#667085]">USD</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] uppercase">
                    First Client Special Price
                  </span>
                  <div className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#2563EB]">
                    ₹8,000 <span className="text-base sm:text-lg font-medium text-[#2563EB]/80">INR</span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm text-[#667085] sm:text-base leading-relaxed">
                Special introductory pricing provided for BLEVON's first client.
              </p>
            </div>

            {/* 2-Column Split: Payment Screenshots Left, Currency Math Breakdown Right (Equal Height) */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
              
              {/* Left Column (5 Cols): Payment Evidence Screenshots */}
              <div className="lg:col-span-5 flex flex-col h-full">
                <span className="text-xs font-bold tracking-wider text-[#667085] uppercase mb-3">
                  Verified Payment Receipts
                </span>

                <div className="flex-1 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-[#F7F8F6] p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                    {/* Payment Receipt 1 */}
                    <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-[#E4E7EC] bg-white p-2.5 shadow-2xs flex flex-col justify-between transition-all duration-300 hover:border-blue-300 hover:shadow-xs">
                      <div className="mb-2 flex items-center justify-between px-1">
                        <span className="text-[10px] font-bold tracking-wider text-[#101828] uppercase">
                          Milestone 01
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
                          <span className="size-1.5 rounded-full bg-emerald-500" />
                          ₹5,500
                        </span>
                      </div>
                      <div className="overflow-hidden rounded-lg border border-[#F2F4F7] bg-white flex-1 flex items-center justify-center">
                        <img
                          src={kavuturuPayment1}
                          alt="Kavuturu Dental Clinic Project Payment Documentation 1"
                          className="size-full object-contain max-h-[380px]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Payment Receipt 2 */}
                    <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-[#E4E7EC] bg-white p-2.5 shadow-2xs flex flex-col justify-between transition-all duration-300 hover:border-blue-300 hover:shadow-xs">
                      <div className="mb-2 flex items-center justify-between px-1">
                        <span className="text-[10px] font-bold tracking-wider text-[#101828] uppercase">
                          Milestone 02
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
                          <span className="size-1.5 rounded-full bg-emerald-500" />
                          ₹2,500
                        </span>
                      </div>
                      <div className="overflow-hidden rounded-lg border border-[#F2F4F7] bg-white flex-1 flex items-center justify-center">
                        <img
                          src={kavuturuPayment2}
                          alt="Kavuturu Dental Clinic Project Payment Documentation 2"
                          className="size-full object-contain max-h-[380px]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-[#E4E7EC] pt-3 text-center">
                    <span className="text-xs font-semibold text-[#101828]">
                      Total Paid: <span className="font-mono text-[#2563EB]">₹5,500 + ₹2,500 = ₹8,000 INR</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column (7 Cols): Mathematical Currency Breakdown */}
              <div className="lg:col-span-7 flex flex-col h-full">
                <span className="text-xs font-bold tracking-wider text-[#667085] uppercase mb-3">
                  Investment Math & Global Currency Reference
                </span>

                <div className="flex-1 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-[#F7F8F6] p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                  {/* Total Math Calculation */}
                  <div className="rounded-xl border border-blue-200 bg-white p-4 shadow-2xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-[#667085]">
                      <span>Milestone 01 (Design & Architecture):</span>
                      <span className="font-mono font-semibold text-[#101828]">₹5,500 INR</span>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-[#667085]">
                      <span>Milestone 02 (Development, CMS & Launch):</span>
                      <span className="font-mono font-semibold text-[#101828]">₹2,500 INR</span>
                    </div>
                    <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-[#E4E7EC] pt-2.5 text-sm sm:text-base font-bold text-[#0E2A6D]">
                      <span>Total First Client Investment:</span>
                      <span className="font-mono text-[#2563EB]">₹8,000 INR</span>
                    </div>
                  </div>

                  {/* Multi-Currency Equivalence Table */}
                  <div className="my-3">
                    <h4 className="text-xs font-bold tracking-wider text-[#101828] uppercase mb-2">
                      Standard Value vs. First Client Rate (Major Currencies)
                    </h4>

                    <div className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-white text-xs">
                      <div className="grid grid-cols-3 border-b border-[#E4E7EC] bg-[#F8F9FA] px-3.5 py-2 font-bold text-[#101828]">
                        <span>Currency</span>
                        <span>Standard Value</span>
                        <span className="text-[#2563EB]">First Client Price</span>
                      </div>
                      
                      <div className="divide-y divide-[#E4E7EC] text-[#475467]">
                        <div className="grid grid-cols-3 px-3.5 py-2 items-center">
                          <span className="font-semibold text-[#101828]">USD ($)</span>
                          <span>$500 USD</span>
                          <span className="font-semibold text-[#2563EB]">~$95 USD</span>
                        </div>
                        <div className="grid grid-cols-3 px-3.5 py-2 items-center">
                          <span className="font-semibold text-[#101828]">INR (₹)</span>
                          <span>₹42,000 INR</span>
                          <span className="font-bold text-[#2563EB]">₹8,000 INR</span>
                        </div>
                        <div className="grid grid-cols-3 px-3.5 py-2 items-center">
                          <span className="font-semibold text-[#101828]">EUR (€)</span>
                          <span>€460 EUR</span>
                          <span className="font-semibold text-[#2563EB]">~€88 EUR</span>
                        </div>
                        <div className="grid grid-cols-3 px-3.5 py-2 items-center">
                          <span className="font-semibold text-[#101828]">GBP (£)</span>
                          <span>£395 GBP</span>
                          <span className="font-semibold text-[#2563EB]">~£75 GBP</span>
                        </div>
                        <div className="grid grid-cols-3 px-3.5 py-2 items-center">
                          <span className="font-semibold text-[#101828]">AED (د.إ)</span>
                          <span>1,835 AED</span>
                          <span className="font-semibold text-[#2563EB]">~350 AED</span>
                        </div>
                        <div className="grid grid-cols-3 px-3.5 py-2 items-center">
                          <span className="font-semibold text-[#101828]">AUD ($)</span>
                          <span>$760 AUD</span>
                          <span className="font-semibold text-[#2563EB]">~$145 AUD</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] sm:text-[11px] text-[#667085] leading-relaxed">
                    * Currency conversions are indexed to standard studio baseline rates ($500 USD reference value) to illustrate the introductory benefit provided for BLEVON's inaugural client.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 11. CLIENT IDENTITY SUMMARY BLOCK                            */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] py-16 md:py-20">
          <div className="global-container">
            <div className="rounded-3xl border border-[#E4E7EC] bg-white p-8 sm:p-12 lg:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xs">
              <div className="flex items-center gap-6">
                <div className="flex size-20 sm:size-24 shrink-0 items-center justify-center rounded-2xl border border-[#E4E7EC] bg-[#F7F8F6] p-3">
                  <img
                    src={kavuturuLogo}
                    alt="Kavuturu Dental Clinic Logo"
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase">
                    CLIENT
                  </span>
                  <h3 className="text-xl font-bold text-[#101828] sm:text-2xl">
                    Kavuturu Dental Clinic
                  </h3>
                  <span className="text-sm text-[#667085]">
                    Dental Healthcare & Advanced Implant Center
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.kavuturudentalclinic.com/?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-[#EAF1FF] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#2563EB] transition-all duration-300 hover:bg-[#2563EB] hover:text-white"
                >
                  <span className="size-2 rounded-full bg-[#2563EB] group-hover:bg-white animate-pulse" />
                  <span>View Live Website</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 12. NAVIGATION & NEXT STEPS (Final CTA)                      */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] bg-gradient-to-b from-[#F7F8F6] to-[#EAF1FF]/70 py-20 text-center md:py-28">
          <div className="global-container">
            <div className="mx-auto max-w-3xl">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                MORE PROJECTS
              </span>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#101828] sm:text-5xl md:text-6xl leading-[1.12]">
                Looking to build or redesign something similar?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-[#667085] sm:text-xl lg:text-2xl leading-relaxed">
                We design and develop modern websites and mobile applications tailored
                to your business goals.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                <a
                  href="/contact"
                  className="group inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-10 text-lg font-semibold text-white shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] sm:text-xl"
                >
                  <span>Start a Project</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </a>

                <a
                  href="/work"
                  className="group inline-flex h-16 items-center justify-center gap-3 rounded-full border border-[#D0D5DD] bg-white px-10 text-lg font-semibold text-[#0E2A6D] shadow-xs backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] hover:scale-[1.02] active:scale-[0.98] sm:text-xl"
                >
                  <span>View All Work</span>
                  <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Master Footer */}
      <Footer8 />
    </div>
  );
}
