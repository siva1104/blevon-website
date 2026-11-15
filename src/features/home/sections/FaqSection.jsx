"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const HOME_FAQS = [
  {
    q: "What types of websites does Blevon design and develop?",
    a: "We design and build custom websites, corporate business websites, service platforms, e-commerce online stores, and full-stack web applications. Every website is built from the ground up with responsive layouts, technical SEO foundations, and optional admin CMS capabilities.",
  },
  {
    q: "Do you build mobile apps for both Android and iOS?",
    a: "Yes. We engineer high-performance mobile applications for both Android (Google Play Store) and iOS (Apple App Store) using modern cross-platform frameworks (React Native and Flutter) as well as native technologies, ensuring 60fps performance and a unified backend.",
  },
  {
    q: "What is included in your $1,999 Complete E-commerce Solution?",
    a: "Priced at $1,999 (33% off our $2,999 reference price), our Complete E-commerce Solution includes a custom e-commerce website, Android application, iOS application, Content Management System (CMS), centralized administration dashboard, payment gateway integration, product & inventory management, order management, and customer management.",
  },
  {
    q: "How long does it take to complete a website or mobile app project?",
    a: "A standard custom or business website typically takes 3 to 5 weeks depending on scope and content readiness. Complete e-commerce suites and dual Android/iOS mobile applications generally take between 4 to 8 weeks from discovery through testing and deployment.",
  },
  {
    q: "How does the $999 'Build Any App + Get a Website FREE' offer work?",
    a: "Priced at $999 (33% off our $1,499 reference price), this bundle includes a custom Android mobile application, iOS mobile application, backend functionality based on agreed requirements, and a complimentary responsive business website (non-ecommerce) for small and medium-sized businesses.",
  },
  {
    q: "How are web hosting, domain registration, and store accounts handled?",
    a: "We assist you in setting up and configuring your domain name, SSL certificates, cloud hosting (such as Vercel, AWS, or Cloudflare), and Apple/Google developer accounts. Direct third-party subscription costs are billed directly by those providers so you retain 100% ownership.",
  },
  {
    q: "Can I update website content or products myself after launch?",
    a: "Yes. We build intuitive content and inventory management dashboards (CMS) that allow your team to update text, images, blogs, products, pricing, and orders independently.",
  },
  {
    q: "What technical support do you provide after deployment?",
    a: "Every project includes a post-launch warranty period where we promptly resolve any reproducible bugs or technical issues. Beyond launch, our team remains accessible for ongoing technical support and system upgrades.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full scroll-mt-24 bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <div className="global-container relative z-10">
        {/* Section Header (Consistent Centered Position Matching All Other Sections) */}
        <div className="mx-auto mb-12 sm:mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#2457E6]/20 bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase shadow-xs">
            <HelpCircle className="size-3" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </span>
          <h2 className="font-heading text-[28px] sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]">
            Clear Answers on{" "}
            <span className="bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">
              Scope, Pricing &amp; Delivery.
            </span>
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-[14.5px] sm:text-[15.5px] text-[#526077] leading-[1.65]">
            Everything you need to know about our website development, mobile
            applications, e-commerce packages, timelines, and support.
          </p>
        </div>

        {/* Redesigned Clean Centered Accordion List */}
        <div className="mx-auto max-w-3xl divide-y divide-[#E2E8F0] rounded-2xl border border-[#E2E8F0] bg-white/90 backdrop-blur-md px-5 sm:px-7 shadow-[0_6px_24px_-8px_rgba(15,23,42,0.04)]">
          {HOME_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-heading text-[15.5px] sm:text-[16.5px] font-semibold tracking-[-0.015em] transition-colors ${
                      isOpen
                        ? "text-[#2457E6]"
                        : "text-[#0B132B] group-hover:text-[#2457E6]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-4.5 shrink-0 text-[#64748B] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#2457E6]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.22,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pt-2.5 pr-6 text-[13.5px] sm:text-[14.5px] text-[#526077] leading-[1.65]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
