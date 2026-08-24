"use client";

import React from "react";
import serviceWebsiteImg from "../../../assets/images/services/service-website.jpg";
import serviceAppImg from "../../../assets/images/services/service-app.jpg";

export function Layout239() {
  return (
    <section
      id="services"
      className="relative w-full scroll-mt-28 py-16 sm:py-20 md:py-24"
    >
      <div className="global-container">
        {/* Section Header: Centered with Controlled Width */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
            SERVICES
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#101828] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]">
            Digital products built for your business.
          </h2>
          <p className="mx-auto max-w-[620px] text-lg text-[#667085] sm:text-xl lg:text-2xl leading-relaxed">
            We design and develop websites and mobile applications around your
            business, your customers, and your goals.
          </p>
        </div>

        {/* 2-Card Balanced Responsive Service Grid */}
        <div className="mx-auto grid max-w-lg md:max-w-5xl lg:max-w-6xl xl:max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {/* Service 01: Website Development */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E4E7EC] bg-white p-7 sm:p-9 lg:p-10 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md">
            <div>
              {/* Service Visual (Balanced 16:10 Ratio) */}
              <div className="mb-8 overflow-hidden rounded-2xl border border-[#E4E7EC] bg-[#F7F8F6]">
                <img
                  src={serviceWebsiteImg}
                  alt="High-performance website development with SEO-ready foundations"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Service Title */}
              <span className="text-sm font-bold tracking-[0.18em] text-[#2563EB] uppercase sm:text-base">
                01 — Website Development
              </span>

              {/* Short Description */}
              <p className="mt-4 text-lg text-[#667085] sm:text-xl leading-relaxed">
                We design and develop fast, responsive websites around your
                business goals, with SEO-ready foundations that help your
                customers find and connect with you.
              </p>
            </div>

            {/* Secondary CTA Button */}
            <div className="mt-8 pt-6 border-t border-[#E4E7EC]">
              <a
                href="/services/web-development"
                className="group/link inline-flex items-center gap-2 text-lg font-semibold text-[#0E2A6D] transition-colors duration-200 hover:text-[#2563EB]"
              >
                <span>Explore Website Development</span>
                <span className="transition-transform duration-300 group-hover/link:translate-x-1.5 text-[#2563EB]">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Service 02: App Development */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E4E7EC] bg-white p-7 sm:p-9 lg:p-10 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md">
            <div>
              {/* Service Visual (Balanced 16:10 Ratio) */}
              <div className="mb-8 overflow-hidden rounded-2xl border border-[#E4E7EC] bg-[#F7F8F6]">
                <img
                  src={serviceAppImg}
                  alt="Modern mobile application development focused on performance and usability"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Service Title */}
              <span className="text-sm font-bold tracking-[0.18em] text-[#2563EB] uppercase sm:text-base">
                02 — App Development
              </span>

              {/* Short Description */}
              <p className="mt-4 text-lg text-[#667085] sm:text-xl leading-relaxed">
                We design and develop modern mobile applications focused on
                usability, performance, and the needs of your business and
                customers.
              </p>
            </div>

            {/* Secondary CTA Button */}
            <div className="mt-8 pt-6 border-t border-[#E4E7EC]">
              <a
                href="/services/app-development"
                className="group/link inline-flex items-center gap-2 text-lg font-semibold text-[#0E2A6D] transition-colors duration-200 hover:text-[#2563EB]"
              >
                <span>Explore App Development</span>
                <span className="transition-transform duration-300 group-hover/link:translate-x-1.5 text-[#2563EB]">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
