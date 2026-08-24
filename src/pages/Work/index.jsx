"use client";

import React from "react";
import { Navbar2 } from "../Home/components/Navbar2";
import { Footer8 } from "../Home/components/Footer8";
import { PROJECTS_DATA } from "../Home/components/Portfolio23";

export default function WorkPage() {
  // Render real completed projects
  const completedProjects = (PROJECTS_DATA || []).filter(
    (p) => Boolean(p && p.name && (p.logo || p.image) && !p.isPlaceholder)
  );

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#101828]">
      {/* 1. Master Navbar */}
      <Navbar2 />

      <main>
        {/* 2. Header */}
        <section className="relative w-full pt-14 pb-12 text-center sm:pt-20 sm:pb-16">
          <div className="global-container">
            <div className="mx-auto max-w-3xl">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                WORK
              </span>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#101828] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12]">
                Selected work.
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-[#667085] sm:text-xl lg:text-2xl leading-relaxed">
                A collection of websites and applications we've built for businesses.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Portfolio Showcase (Medium Size Card) */}
        <section className="relative w-full pb-20 md:pb-28">
          <div className="global-container">
            <div className="mx-auto w-full max-w-xl md:max-w-2xl lg:max-w-[720px]">
              {completedProjects.map((project) => (
                <article
                  key={project.id}
                  className="group grid grid-cols-1 items-center gap-6 rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] lg:gap-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md"
                >
                  {/* Left: Project Details */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Project Number */}
                      <span className="text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase sm:text-sm">
                        {project.num}
                      </span>

                      {/* Project Title */}
                      <h2 className="mt-1.5 text-xl font-bold tracking-tight text-[#101828] sm:text-2xl leading-[1.2] uppercase">
                        {project.name}
                      </h2>

                      {/* Category Badge */}
                      <div className="mt-2.5">
                        <span className="inline-block rounded-full border border-[#E4E7EC] bg-[#EAF1FF] px-3.5 py-0.5 text-xs font-semibold text-[#2563EB]">
                          {project.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-3.5 text-sm text-[#667085] sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* View Project Action */}
                    <div className="mt-6 pt-4 border-t border-[#E4E7EC]">
                      <a
                        href={project.link || "/case-study"}
                        className="group/link inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0E2A6D] transition-colors duration-200 hover:text-[#2563EB]"
                      >
                        <span>{project.linkText || "View Project"}</span>
                        <span className="text-[#2563EB] transition-transform duration-300 group-hover/link:translate-x-1.5">
                          →
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Right: Client Logo Panel (16:10 / 16:9 Panel) */}
                  <div className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-[#F7F8F6]">
                    <a
                      href={project.link || "/case-study"}
                      className="flex aspect-[16/10] w-full items-center justify-center p-6 sm:p-8 focus:outline-none transition-transform duration-700 group-hover:scale-105"
                    >
                      <img
                        src={project.logo || project.image}
                        alt={`${project.name} client logo`}
                        className="max-h-16 sm:max-h-20 w-auto max-w-[85%] object-contain"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Final CTA */}
        <section className="relative w-full border-t border-[#E4E7EC] bg-gradient-to-b from-[#F7F8F6] to-[#EAF1FF]/70 py-16 sm:py-20 md:py-24 text-center">
          <div className="global-container">
            <div className="mx-auto max-w-3xl">
              <span className="mb-3 inline-block text-sm font-semibold tracking-[0.24em] text-[#2563EB] uppercase sm:text-base">
                START A PROJECT
              </span>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#101828] sm:text-5xl md:text-6xl leading-[1.12]">
                Ready to build your next website or app?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-[#667085] sm:text-xl lg:text-2xl leading-relaxed">
                Let's discuss what you need, how long it will take, and how we can help.
              </p>
              <a
                href="/contact"
                className="group inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-10 text-lg font-semibold text-white shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] sm:text-xl"
              >
                <span>Start a Project</span>
                <span className="text-white transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Master Footer */}
      <Footer8 />
    </div>
  );
}
