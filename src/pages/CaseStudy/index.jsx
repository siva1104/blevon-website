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

      <main className="pt-20 sm:pt-22 md:pt-24">
        {/* ============================================================ */}
        {/* BREADCRUMB (Above Hero Section)                              */}
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
                href="/work"
                className="text-[#667085] transition-colors duration-200 hover:text-[#2563EB]"
              >
                Work
              </a>
              <span className="text-[#98A2B3] select-none text-[10px]">/</span>
              <span className="font-semibold text-[#0E2A6D]">Kavuturu Dental Clinic</span>
            </nav>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 1. PROJECT HERO (Editorial Left-Aligned Layout)              */}
        {/* ============================================================ */}
        <section className="relative w-full pt-4 pb-6 sm:pt-5 sm:pb-8">
          <div className="global-container">
            <div className="flex flex-col items-start max-w-3xl">
              {/* Eyebrow */}
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase"
              >
                CASE STUDY
              </motion.span>

              {/* Project Title */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl font-bold tracking-tight text-[#0E2A6D] sm:text-3xl lg:text-[38px] xl:text-[42px] leading-[1.14] uppercase"
              >
                KAVUTURU DENTAL CLINIC
              </motion.h1>

              {/* Service */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="mt-1 text-sm font-semibold text-[#2563EB] sm:text-base"
              >
                Website Development
              </motion.p>

              {/* Project Timeline Metadata */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[#667085]"
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
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 max-w-xl text-xs text-[#667085] sm:text-sm lg:text-[14.5px] leading-relaxed"
              >
                A high-performance digital web redesign engineered for patient usability,
                search discovery, and dynamic content management.
              </motion.p>

              {/* View Live Website Button */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 flex items-center gap-3"
              >
                <a
                  href="https://www.kavuturudentalclinic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-10 sm:h-11 items-center justify-center gap-2 rounded-full bg-[#2563EB] px-5 sm:px-5.5 text-xs sm:text-[13px] font-semibold text-white shadow-[0_4px_14px_rgba(37,99,235,0.25)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] active:scale-[0.98]"
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
        <section className="relative w-full pb-10 md:pb-14">
          <div className="global-container">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-[#E4E7EC] bg-white p-2.5 sm:p-4 lg:p-5 shadow-2xs transition-all duration-500 hover:border-blue-300 hover:shadow-md"
            >
              <div className="relative w-full rounded-xl bg-gradient-to-br from-[#F4F5F2] via-[#EAF1FF]/40 to-[#F0F2EE] p-3 sm:p-5 md:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-7">
                  
                  {/* 1. Desktop Browser Frame */}
                  <div className="w-full lg:flex-1 overflow-hidden rounded-xl border border-[#D0D5DD] bg-white shadow-md transition-transform duration-700 ease-out group-hover:scale-[1.006] flex flex-col">
                    <div className="flex h-7 shrink-0 items-center justify-between border-b border-[#E4E7EC] bg-[#F8F9FA] px-3">
                      <div className="flex items-center gap-1.5">
                        <div className="size-2 rounded-full bg-[#FF5F56]" />
                        <div className="size-2 rounded-full bg-[#FFBD2E]" />
                        <div className="size-2 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="flex h-4 items-center rounded-md border border-[#E4E7EC] bg-white px-2.5 text-[10px] sm:text-xs font-medium text-[#667085]">
                        kavuturudentalclinic.com
                      </div>
                      <div className="w-8 sm:w-10" />
                    </div>
                    <div className="relative w-full bg-white flex items-center justify-center p-1 sm:p-2">
                      <img
                        src={kavuturuDesktopImg}
                        alt="Kavuturu Dental Clinic Desktop Website"
                        className="w-full h-auto object-contain rounded-md block"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* 2. Mobile Device */}
                  <div className="w-[55%] sm:w-[200px] md:w-[220px] lg:w-[210px] xl:w-[230px] shrink-0 transition-transform duration-700 ease-out group-hover:-translate-y-1 flex flex-col justify-center">
                    <div className="relative w-full rounded-[1.6rem] sm:rounded-[2rem] border-[4px] sm:border-[5px] border-[#0F172A] bg-[#0F172A] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.28)] ring-1 ring-white/20 overflow-hidden flex flex-col">
                      <div className="absolute left-1/2 top-1.5 h-1.5 sm:h-2 w-10 sm:w-12 -translate-x-1/2 rounded-full bg-black z-30" />
                      <div className="relative w-full overflow-hidden rounded-[1.3rem] sm:rounded-[1.7rem] bg-white p-0.5 flex items-center justify-center">
                        <img
                          src={kavuturuMobileImg}
                          alt="Kavuturu Dental Clinic Mobile Responsive Website"
                          className="w-full h-auto object-contain block"
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
        <section className="relative w-full border-t border-[#E4E7EC] py-10 sm:py-12 md:py-14">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-12 items-start">
              <div>
                <span className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                  PROJECT OVERVIEW
                </span>
                <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.18]">
                  Redesigning an existing digital presence.
                </h2>
              </div>

              <div className="space-y-3 text-xs text-[#667085] sm:text-sm md:text-[14.5px] leading-relaxed">
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
        <section className="relative w-full border-t border-[#E4E7EC] bg-white py-10 sm:py-12 md:py-14">
          <div className="global-container">
            <div className="mb-6 max-w-2xl sm:mb-8">
              <span className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                OBJECTIVES
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.18]">
                From an existing website to a more capable digital platform.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
              {objectives.map((obj) => (
                <div
                  key={obj.num}
                  className="flex flex-col justify-between rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xs"
                >
                  <div>
                    <span className="font-mono text-xs font-bold tracking-wider text-[#2563EB]">
                      {obj.num}
                    </span>
                    <h3 className="mt-1.5 text-base font-bold text-[#101828] sm:text-lg">
                      {obj.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#667085] sm:text-[13px] leading-relaxed">
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
        <section className="relative w-full border-t border-[#E4E7EC] py-10 sm:py-12 md:py-14">
          <div className="global-container">
            <div className="mb-6 max-w-2xl sm:mb-8">
              <span className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                DELIVERED
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.18]">
                Three areas. One complete digital improvement.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {deliveredServices.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col justify-between rounded-xl border border-[#E4E7EC] bg-white p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-blue-300 hover:shadow-xs"
                >
                  <div>
                    <h3 className="text-base font-bold text-[#101828] sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#667085] sm:text-[13px] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. BEFORE & AFTER                                            */}
        {/* ============================================================ */}
        <section className="relative w-full border-t border-[#E4E7EC] bg-[#F7F8F6] py-10 sm:py-12 md:py-14">
          <div className="global-container">
            <div className="mb-6 max-w-2xl sm:mb-8">
              <span className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                VISUAL COMPARISON
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.18]">
                Before & After
              </h2>
              <p className="mt-2 text-xs text-[#667085] sm:text-sm leading-relaxed">
                Demonstrating the transformation from the client's original website
                to BLEVON's high-performance digital redesign.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {/* BEFORE CARD */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#E4E7EC] bg-white p-4 sm:p-5 shadow-xs">
                <div>
                  <div className="mb-3.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D0D5DD] bg-[#F2F4F7] px-3 py-0.5 text-xs font-bold text-[#475467] uppercase tracking-wider">
                      Existing Website / Before
                    </span>
                    <span className="text-xs text-[#98A2B3] font-mono">kavuturudental.in</span>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-[#F8F9FA] shadow-inner">
                    <div className="flex h-6 items-center justify-between border-b border-[#E4E7EC] bg-[#F2F4F7] px-2.5">
                      <div className="flex items-center gap-1">
                        <div className="size-1.5 rounded-full bg-[#D0D5DD]" />
                        <div className="size-1.5 rounded-full bg-[#D0D5DD]" />
                        <div className="size-1.5 rounded-full bg-[#D0D5DD]" />
                      </div>
                      <span className="text-[9px] text-[#667085] font-mono">kavuturudental.in</span>
                      <div className="w-5" />
                    </div>
                    <div className="w-full bg-[#F8F9FA] p-2 sm:p-3 flex items-center justify-center">
                      <img
                        src={kavuturuBeforeImg}
                        alt="Kavuturu Dental Clinic original existing website (Before)"
                        className="w-full h-auto max-h-[360px] sm:max-h-[400px] object-contain rounded-md shadow-2xs block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-[#F2F4F7] pt-3">
                  <h4 className="text-sm font-bold text-[#101828]">Previous Limitations:</h4>
                  <ul className="mt-1.5 space-y-1 text-xs text-[#667085]">
                    <li>• Static page structure requiring developer code edits</li>
                    <li>• Unstructured mobile responsive breakpoints</li>
                    <li>• Basic on-page search metadata</li>
                  </ul>
                </div>
              </div>

              {/* AFTER CARD */}
              <div className="flex flex-col justify-between rounded-2xl border border-blue-200 bg-white p-4 sm:p-5 shadow-xs ring-1 ring-blue-100">
                <div>
                  <div className="mb-3.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-[#EAF1FF] px-3 py-0.5 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                      BLEVON Redesign / After
                    </span>
                    <span className="text-xs text-[#2563EB] font-mono font-semibold">kavuturudentalclinic.com</span>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-blue-200 bg-white shadow-sm">
                    <div className="flex h-6 items-center justify-between border-b border-[#E4E7EC] bg-[#F8F9FA] px-2.5">
                      <div className="flex items-center gap-1">
                        <div className="size-1.5 rounded-full bg-[#FF5F56]" />
                        <div className="size-1.5 rounded-full bg-[#FFBD2E]" />
                        <div className="size-1.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <span className="text-[9px] text-[#2563EB] font-medium font-mono">kavuturudentalclinic.com</span>
                      <div className="w-5" />
                    </div>
                    <div className="w-full bg-white p-2 sm:p-3 flex items-center justify-center">
                      <img
                        src={kavuturuDesktopImg}
                        alt="Kavuturu Dental Clinic BLEVON redesign (After)"
                        className="w-full h-auto max-h-[360px] sm:max-h-[400px] object-contain rounded-md shadow-2xs block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-blue-50 pt-3">
                  <h4 className="text-sm font-bold text-[#0E2A6D]">BLEVON Upgrades:</h4>
                  <ul className="mt-1.5 space-y-1 text-xs text-[#475467]">
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
        <section className="relative w-full border-t border-[#E4E7EC] bg-white py-10 sm:py-12 md:py-14">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-center">
              <div className="lg:col-span-6">
                <span className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                  CONTENT MANAGEMENT
                </span>
                <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.18]">
                  Built to be managed.
                </h2>
                <p className="mt-3 text-xs text-[#667085] sm:text-sm md:text-[14.5px] leading-relaxed">
                  The website includes a dynamic management system that allows
                  authorized clinic staff to maintain and update important website
                  information without depending on a developer for routine content changes.
                </p>

                <div className="mt-5">
                  <span className="text-[11px] font-bold tracking-wider text-[#101828] uppercase">
                    The CMS can manage:
                  </span>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cmsCapabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2 rounded-lg border border-[#E4E7EC] bg-[#F7F8F6] px-3 py-1.5 text-xs sm:text-[13px] font-medium text-[#101828]"
                      >
                        <span className="text-[#2563EB] font-bold">✓</span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Authentic CMS Dashboard Screenshot Frame */}
              <div className="lg:col-span-6 overflow-hidden rounded-xl border border-[#E4E7EC] bg-white shadow-2xs">
                <div className="flex h-7 items-center justify-between border-b border-[#E4E7EC] bg-[#F8F9FA] px-3">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-[#FF5F56]" />
                    <div className="size-2 rounded-full bg-[#FFBD2E]" />
                    <div className="size-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-medium text-[#667085]">kavuturudentalclinic.com/admin</span>
                  <div className="w-8" />
                </div>
                <div className="relative w-full overflow-hidden bg-white p-2 sm:p-3 flex items-center justify-center">
                  <img
                    src={kavuturuCmsDashboardImg}
                    alt="Kavuturu Dental Clinic CMS Admin Dashboard"
                    className="w-full h-auto max-h-[420px] sm:max-h-[460px] object-contain rounded-md shadow-2xs block"
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
        <section className="relative w-full border-t border-[#E4E7EC] py-10 sm:py-12 md:py-14">
          <div className="global-container">
            <div className="mb-6 max-w-2xl sm:mb-8">
              <span className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                TECHNOLOGY
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.18]">
                Tools used to build the platform.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {techGroups.map((group) => (
                <div
                  key={group.category}
                  className="rounded-xl border border-[#E4E7EC] bg-white p-4 sm:p-5 shadow-2xs"
                >
                  <h3 className="text-xs font-bold tracking-wider text-[#2563EB] uppercase">
                    {group.category}
                  </h3>
                  <div className="mt-3.5 grid grid-cols-2 gap-2">
                    {group.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 rounded-lg border border-[#E4E7EC] bg-[#F7F8F6] p-2 transition-colors duration-200 hover:bg-white hover:border-blue-300"
                      >
                        <div className="size-4.5 shrink-0 flex items-center justify-center">
                          {tech.icon}
                        </div>
                        <span className="text-[11.5px] font-semibold text-[#101828]">
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
        <section className="relative w-full border-t border-[#E4E7EC] bg-white py-10 sm:py-12 md:py-14">
          <div className="global-container">
            <div className="mb-6 max-w-2xl sm:mb-8">
              <span className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                APPROACH
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.18]">
                Understand → Redesign → Optimize → Enable
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {approachSteps.map((step) => (
                <div
                  key={step.num}
                  className="flex flex-col justify-start rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xs"
                >
                  <span className="font-mono text-xs font-bold tracking-wider text-[#2563EB]">
                    {step.num}
                  </span>
                  <h3 className="mt-1.5 text-base font-bold text-[#101828] sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#667085] leading-relaxed sm:text-[13px]">
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
        <section className="relative w-full border-t border-[#E4E7EC] py-10 sm:py-12 md:py-14">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 items-start">
              <div className="lg:col-span-5">
                <span className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                  OUTCOME
                </span>
                <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.18]">
                  More than a redesign.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-3 text-xs text-[#667085] sm:text-sm md:text-[14.5px] leading-relaxed">
                <p>
                  The result is a modernized digital platform for Kavuturu Dental Clinic that combines:
                </p>
                <div className="rounded-xl border border-blue-200 bg-[#EAF1FF]/60 p-3.5 text-xs sm:text-sm font-semibold text-[#0E2A6D]">
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
        <section className="relative w-full border-t border-[#E4E7EC] bg-white py-10 sm:py-12 md:py-14">
          <div className="global-container">
            <div className="mb-6 max-w-2xl sm:mb-8">
              <span className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                PROJECT RECORD
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.18]">
                Project Investment & Documentation
              </h2>
              <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm text-[#667085]">
                <span>Project Period:</span>
                <span className="font-semibold text-[#101828]">June 2026 — July 2026</span>
              </div>
            </div>

            {/* Project Investment Editorial Information Panel */}
            <div className="mb-8 rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-4 sm:p-6 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 border-b border-[#E4E7EC] pb-4 sm:pb-5">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#667085] uppercase">
                    Standard Project Value
                  </span>
                  <div className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#101828]">
                    $500 <span className="text-xs sm:text-sm font-medium text-[#667085]">USD</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase">
                    First Client Special Price
                  </span>
                  <div className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#2563EB]">
                    ₹8,000 <span className="text-xs sm:text-sm font-medium text-[#2563EB]/80">INR</span>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs text-[#667085] leading-relaxed">
                Special introductory pricing provided for BLEVON's first client.
              </p>
            </div>

            {/* 2-Column Split: Payment Screenshots Left, Currency Math Breakdown Right (Equal Height) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
              
              {/* Left Column (5 Cols): Payment Evidence Screenshots */}
              <div className="lg:col-span-5 flex flex-col h-full">
                <span className="text-[11px] font-bold tracking-wider text-[#667085] uppercase mb-2">
                  Verified Payment Receipts
                </span>

                <div className="flex-1 overflow-hidden rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3 sm:p-4 shadow-2xs flex flex-col justify-between">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
                    {/* Payment Receipt 1 */}
                    <div className="overflow-hidden rounded-lg border border-[#E4E7EC] bg-white p-2 shadow-2xs flex flex-col justify-between transition-all duration-300 hover:border-blue-300 hover:shadow-xs">
                      <div className="mb-1.5 flex items-center justify-between px-0.5">
                        <span className="text-[9px] font-bold tracking-wider text-[#101828] uppercase">
                          Milestone 01
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700">
                          <span className="size-1 rounded-full bg-emerald-500" />
                          ₹5,500
                        </span>
                      </div>
                      <div className="overflow-hidden rounded-md border border-[#F2F4F7] bg-[#FAFAFA] flex-1 flex items-center justify-center p-1 min-h-[200px] sm:min-h-[240px]">
                        <img
                          src={kavuturuPayment1}
                          alt="Kavuturu Dental Clinic Project Payment Documentation 1"
                          className="w-full h-auto max-h-[320px] sm:max-h-[360px] object-contain block"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Payment Receipt 2 */}
                    <div className="overflow-hidden rounded-lg border border-[#E4E7EC] bg-white p-2 shadow-2xs flex flex-col justify-between transition-all duration-300 hover:border-blue-300 hover:shadow-xs">
                      <div className="mb-1.5 flex items-center justify-between px-0.5">
                        <span className="text-[9px] font-bold tracking-wider text-[#101828] uppercase">
                          Milestone 02
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700">
                          <span className="size-1 rounded-full bg-emerald-500" />
                          ₹2,500
                        </span>
                      </div>
                      <div className="overflow-hidden rounded-md border border-[#F2F4F7] bg-[#FAFAFA] flex-1 flex items-center justify-center p-1 min-h-[200px] sm:min-h-[240px]">
                        <img
                          src={kavuturuPayment2}
                          alt="Kavuturu Dental Clinic Project Payment Documentation 2"
                          className="w-full h-auto max-h-[320px] sm:max-h-[360px] object-contain block"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 border-t border-[#E4E7EC] pt-2 text-center">
                    <span className="text-xs font-semibold text-[#101828]">
                      Total Paid: <span className="font-mono text-[#2563EB]">₹5,500 + ₹2,500 = ₹8,000 INR</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column (7 Cols): Mathematical Currency Breakdown */}
              <div className="lg:col-span-7 flex flex-col h-full">
                <span className="text-[11px] font-bold tracking-wider text-[#667085] uppercase mb-2">
                  Investment Math & Global Currency Reference
                </span>

                <div className="flex-1 overflow-hidden rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3 sm:p-4 shadow-2xs flex flex-col justify-between">
                  {/* Total Math Calculation */}
                  <div className="rounded-lg border border-blue-200 bg-white p-3 shadow-2xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#667085]">
                      <span>Milestone 01 (Design & Architecture):</span>
                      <span className="font-mono font-semibold text-[#101828]">₹5,500 INR</span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center justify-between gap-2 text-xs text-[#667085]">
                      <span>Milestone 02 (Development, CMS & Launch):</span>
                      <span className="font-mono font-semibold text-[#101828]">₹2,500 INR</span>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 border-t border-[#E4E7EC] pt-1.5 text-xs font-bold text-[#0E2A6D]">
                      <span>Total First Client Investment:</span>
                      <span className="font-mono text-[#2563EB]">₹8,000 INR</span>
                    </div>
                  </div>

                  {/* Multi-Currency Equivalence Table */}
                  <div className="my-2">
                    <h4 className="text-[11px] font-bold tracking-wider text-[#101828] uppercase mb-1">
                      Standard Value vs. First Client Rate (Major Currencies)
                    </h4>

                    <div className="overflow-hidden rounded-lg border border-[#E4E7EC] bg-white text-[11px]">
                      <div className="grid grid-cols-3 border-b border-[#E4E7EC] bg-[#F8F9FA] px-2.5 py-1.5 font-bold text-[#101828]">
                        <span>Currency</span>
                        <span>Standard Value</span>
                        <span className="text-[#2563EB]">First Client Price</span>
                      </div>
                      
                      <div className="divide-y divide-[#E4E7EC] text-[#475467]">
                        <div className="grid grid-cols-3 px-2.5 py-1 items-center">
                          <span className="font-semibold text-[#101828]">USD ($)</span>
                          <span>$500 USD</span>
                          <span className="font-semibold text-[#2563EB]">~$95 USD</span>
                        </div>
                        <div className="grid grid-cols-3 px-2.5 py-1 items-center">
                          <span className="font-semibold text-[#101828]">INR (₹)</span>
                          <span>₹42,000 INR</span>
                          <span className="font-bold text-[#2563EB]">₹8,000 INR</span>
                        </div>
                        <div className="grid grid-cols-3 px-2.5 py-1 items-center">
                          <span className="font-semibold text-[#101828]">EUR (€)</span>
                          <span>€460 EUR</span>
                          <span className="font-semibold text-[#2563EB]">~€88 EUR</span>
                        </div>
                        <div className="grid grid-cols-3 px-2.5 py-1 items-center">
                          <span className="font-semibold text-[#101828]">GBP (£)</span>
                          <span>£395 GBP</span>
                          <span className="font-semibold text-[#2563EB]">~£75 GBP</span>
                        </div>
                        <div className="grid grid-cols-3 px-2.5 py-1 items-center">
                          <span className="font-semibold text-[#101828]">AED (د.إ)</span>
                          <span>1,835 AED</span>
                          <span className="font-semibold text-[#2563EB]">~350 AED</span>
                        </div>
                        <div className="grid grid-cols-3 px-2.5 py-1 items-center">
                          <span className="font-semibold text-[#101828]">AUD ($)</span>
                          <span>$760 AUD</span>
                          <span className="font-semibold text-[#2563EB]">~$145 AUD</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[8.5px] sm:text-[9.5px] text-[#667085] leading-relaxed">
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
        <section className="relative w-full border-t border-[#E4E7EC] py-10 sm:py-12 md:py-14">
          <div className="global-container">
            <div className="rounded-xl border border-[#E4E7EC] bg-white p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="flex size-13 sm:size-15 shrink-0 items-center justify-center rounded-lg border border-[#E4E7EC] bg-[#F7F8F6] p-2">
                  <img
                    src={kavuturuLogo}
                    alt="Kavuturu Dental Clinic Logo"
                    className="max-h-7 sm:max-h-8 max-w-full h-auto w-auto object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#2563EB] uppercase">
                    CLIENT
                  </span>
                  <h3 className="text-base font-bold text-[#101828] sm:text-lg">
                    Kavuturu Dental Clinic
                  </h3>
                  <span className="text-xs text-[#667085]">
                    Dental Healthcare & Advanced Implant Center
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.kavuturudentalclinic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-[#EAF1FF] px-3.5 py-1.5 text-xs font-semibold text-[#2563EB] transition-all duration-300 hover:bg-[#2563EB] hover:text-white"
                >
                  <span className="size-1.5 rounded-full bg-[#2563EB] group-hover:bg-white animate-pulse" />
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
        <section className="relative w-full border-t border-[#E4E7EC] bg-gradient-to-b from-[#F7F8F6] to-[#EAF1FF]/70 py-10 text-center sm:py-14 md:py-16">
          <div className="global-container">
            <div className="mx-auto max-w-xl">
              <span className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                MORE PROJECTS
              </span>
              <h2 className="mb-2.5 text-xl font-bold tracking-tight text-[#101828] sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.15]">
                Looking to build or redesign something similar?
              </h2>
              <p className="mx-auto mb-5 max-w-md text-xs text-[#667085] sm:text-sm leading-relaxed">
                We design and develop modern websites and mobile applications tailored
                to your business goals.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <a
                  href="/contact"
                  className="group inline-flex h-10 sm:h-11 items-center justify-center gap-2 rounded-full bg-[#2563EB] px-6 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_14px_rgba(37,99,235,0.25)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] active:scale-[0.98]"
                >
                  <span>Start a Project</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="/work"
                  className="group inline-flex h-10 sm:h-11 items-center justify-center gap-2 rounded-full border border-[#D0D5DD] bg-white px-6 text-xs sm:text-sm font-semibold text-[#0E2A6D] shadow-2xs transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] active:scale-[0.98]"
                >
                  <span>View All Work</span>
                  <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1">
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
