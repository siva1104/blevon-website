"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export function TestimonialsSection() {
  const testimonials = TESTIMONIALS_DATA || [];

  return (
    <section
      id="testimonials"
      className="relative w-full bg-transparent py-16 sm:py-20 lg:py-24"
      aria-label="Client Testimonials"
    >
      <div className="global-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-12 sm:mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2457E6]/20 bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase shadow-xs">
            VERIFIED CLIENT FEEDBACK
          </span>
          <h2 className="font-heading text-[28px] sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">
              Real Businesses.
            </span>
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-[14.5px] sm:text-[15.5px] text-[#526077] leading-[1.65]">
            We publish only 100% genuine, verified feedback from actual
            completed client deployments—never fabricated names or synthetic
            reviews.
          </p>
        </div>

        {/* Centered Verified Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          {testimonials.length > 0 && (
            <TestimonialCard
              quote={testimonials[0].quote}
              client={testimonials[0].client}
              project={testimonials[0].project}
              source={testimonials[0].source}
              logo={testimonials[0].logo}
              caseStudyLink={testimonials[0].caseStudyLink}
              className="w-full"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
