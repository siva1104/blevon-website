"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Blevon specialize in?",
    answer: "We specialize in bespoke UI/UX design and high-performance React/Next.js frontend engineering. This includes marketing websites, custom SaaS web apps, headless e-commerce (using Shopify/Stripe), headless CMS configurations (like Sanity or Contentful), and complex database-backed portals."
  },
  {
    question: "How long does a typical website project take?",
    answer: "A standard corporate or SaaS project takes between 3 to 6 weeks from strategy to deployment. Standalone high-converting landing pages can be shipped in 7 to 10 days, while custom enterprise platforms can take up to 8 weeks."
  },
  {
    question: "Do you use premade templates or custom codes?",
    answer: "We build everything 100% custom from scratch. We do not use commercial pre-made templates, element builders, or visual themes. This allows us to guarantee page speed scores above 95, bulletproof security, clean brand aesthetics, and absolute flexibility."
  },
  {
    question: "How do we stay aligned on project communication?",
    answer: "We set up a dedicated Slack workspace for your project, putting you in direct daily contact with the senior designer and engineer responsible for your build. We also host weekly video syncs to review progress on staging environments."
  },
  {
    question: "Can I pause or cancel my subscription or agreement?",
    answer: "Yes, you can pause or cancel your retainer agreement at any time. We will complete the current sprint's milestones, and hold any remaining work credits for when you choose to reactivate."
  },
  {
    question: "Do you offer post-launch maintenance and support?",
    answer: "Yes, we offer ongoing SLA maintenance packages. These cover package version upgrades, regular Next.js optimization checks, analytics monitoring, hosting setup support, security updates, and a fixed number of monthly design/content edits."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/30 py-20 lg:py-32 border-b border-slate-100">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Common Questions
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold tracking-tight text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Everything you need to know about our collaboration model, timelines, and technical standards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white transition-all duration-300 hover:border-slate-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-[17px] font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Indicator */}
                  <span className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-500 shadow-sm transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-primary" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {/* Accordion Body Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="border-t border-slate-100 px-6 py-5 text-[14.5px] sm:text-[15px] leading-relaxed text-slate-600">
                        {faq.answer}
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
  );
}
