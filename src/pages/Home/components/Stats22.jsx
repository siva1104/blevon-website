"use client";

import React from "react";
import serviceWebsiteImg from "../../../assets/images/services/service-website.jpg";

export function Stats22() {
  const outcomes = [
    {
      num: "01",
      title: "Clarity",
      desc: "Clear websites and applications that make it easy for people to understand your business and take action.",
    },
    {
      num: "02",
      title: "Performance",
      desc: "Fast, responsive digital experiences designed to work smoothly across devices.",
    },
    {
      num: "03",
      title: "Growth",
      desc: "Digital foundations built with scalability and SEO-ready practices in mind, so your product can evolve as your business grows.",
    },
  ];

  return (
    <section id="results" className="relative px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl sm:mb-18 lg:mb-20">
          <span className="mb-3 inline-block text-xs font-semibold tracking-[0.22em] text-blue-400 uppercase sm:text-sm">
            RESULTS
          </span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
            Built to make a difference.
          </h2>
          <p className="text-base text-slate-300 sm:text-lg leading-relaxed">
            We focus on the things that make a digital product work: a clear
            experience, reliable technology, strong performance, and a
            foundation that can grow with your business.
          </p>
        </div>

        {/* 2-Column Layout: Three Outcomes (Left) & Real Visual (Right) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: The Three Core Outcomes */}
          <div className="flex flex-col space-y-8 sm:space-y-10">
            {outcomes.map((item) => (
              <div
                key={item.num}
                className="group rounded-2xl border border-white/10 bg-[#0A0E1A]/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-[#0D1324]/80 sm:p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-bold tracking-wider text-blue-400 sm:text-sm">
                    {item.num}
                  </span>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-300 sm:text-base leading-relaxed pl-7 sm:pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Visual Area showing real completed digital work & outcomes */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0A0E1A]/80 p-3 sm:p-4 shadow-2xl backdrop-blur-sm">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={serviceWebsiteImg}
                alt="Blevon digital project outcome and high-performance execution"
                className="aspect-[16/11] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
