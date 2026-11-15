"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Quote } from "lucide-react";

/**
 * Minimal architectural testimonial card matching Blevon's design system
 */
export function TestimonialCard({
  quote,
  client,
  project,
  source,
  logo,
  caseStudyLink,
  className = "",
}) {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-[0_1px_3px_rgba(15,23,42,0.03)] transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-[0_10px_26px_-6px_rgba(15,23,42,0.06)] ${className}`}
    >
      <div>
        {/* Top Header: Quote Icon + Verified Badge */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#2457E6]"
            aria-hidden="true"
          >
            <Quote className="size-4.5 fill-[#2457E6]/10" />
          </div>

          {source && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">
              <CheckCircle2 className="size-3 text-emerald-600" />
              <span>Verified Client Review · {source}</span>
            </span>
          )}
        </div>

        {/* Main Testimonial Quote */}
        <blockquote className="font-heading text-base sm:text-lg md:text-[19px] font-medium leading-[1.6] tracking-[-0.015em] text-[#0B132B]">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>

      {/* Footer: Client Info & Logo */}
      <div className="mt-7 pt-5 border-t border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3.5">
          {logo && (
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-2">
              <img
                src={logo}
                alt={`${client} logo`}
                className="max-h-7 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          )}
          <div>
            <h4 className="font-heading text-[15px] font-semibold text-[#0B132B] leading-tight">
              {client}
            </h4>
            <p className="mt-0.5 text-xs sm:text-[13px] text-[#526077]">
              {project}
            </p>
          </div>
        </div>

        {caseStudyLink && (
          <Link
            to={caseStudyLink}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-[12.5px] font-medium text-[#0F172A] hover:border-[#CBD5E1] hover:bg-white hover:text-[#2457E6] transition-all duration-200 self-start sm:self-auto"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        )}
      </div>
    </article>
  );
}

export default TestimonialCard;
