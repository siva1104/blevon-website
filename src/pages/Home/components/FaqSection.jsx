"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const homeFaqs = [
  {
    num: "01",
    q: "What does Blevon do?",
    a: "Blevon builds websites and mobile applications for businesses.",
  },
  {
    num: "02",
    q: "What types of websites do you build?",
    a: "We build custom websites based on the business, its requirements, and the people it needs to reach.",
  },
  {
    num: "03",
    q: "Do you build mobile applications?",
    a: "Yes. App development is one of Blevon's two core services.",
  },
  {
    num: "04",
    q: "How do I start a project with Blevon?",
    a: "Send us an inquiry through the Contact page with some details about what you want to build. You can also book a call if you'd prefer to discuss the project directly.",
  },
  {
    num: "05",
    q: "How can I contact Blevon?",
    a: "You can contact us by email or WhatsApp, or use the project inquiry form on the Contact page.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-16 sm:py-20 md:py-24"
    >
      <div className="global-container">
        <div className="mx-auto max-w-3xl lg:max-w-[840px]">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
            FAQ
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-[#101828] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]">
            Questions, answered.
          </h2>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-4">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.num}
                className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-xs transition-colors duration-200 hover:border-blue-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 sm:p-7 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-sm font-bold tracking-wider text-[#2563EB] sm:text-base">
                      {faq.num}
                    </span>
                    <span className="text-xl font-bold text-[#101828] sm:text-2xl">
                      {faq.q}
                    </span>
                  </div>
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#E4E7EC] bg-[#F7F8F6] text-[#0E2A6D] transition-transform duration-300">
                    <span className={`text-lg font-semibold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="border-t border-[#E4E7EC] px-6 sm:px-7 pb-6 pt-4 sm:pb-7">
                        <p className="pl-8 sm:pl-10 text-lg text-[#667085] leading-relaxed sm:text-xl">
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
    </div>
  </section>
);
}
