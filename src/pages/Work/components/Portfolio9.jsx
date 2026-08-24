"use client";

import React, { useRef } from "react";
import { PROJECTS_DATA } from "../../Home/components/Portfolio23";

function ProjectCard({ project }) {
  const isPlaceholder = Boolean(project.isPlaceholder);

  return (
    <article
      className={`group grid grid-cols-1 items-center gap-x-8 gap-y-6 rounded-2xl border p-5 sm:p-6 md:grid-cols-[1fr_1.2fr] lg:gap-x-10 lg:p-7 shadow-xl backdrop-blur-sm transition-all duration-300 ${
        isPlaceholder
          ? "border-white/5 bg-[#0A0E1A]/40"
          : "border-white/10 bg-[#0A0E1A]/80 hover:border-blue-500/30 hover:bg-[#0D1324]/90"
      }`}
    >
      {/* Left Content Column */}
      <div className="flex flex-col justify-between h-full">
        <div>
          <span
            className={`text-xs font-bold tracking-[0.2em] uppercase ${
              isPlaceholder ? "text-slate-500" : "text-blue-400"
            }`}
          >
            {project.num}
          </span>

          <h3
            className={`mt-1 text-2xl font-bold tracking-tight sm:text-3xl leading-[1.2] ${
              isPlaceholder ? "text-slate-400" : "text-white"
            }`}
          >
            {project.name}
          </h3>

          <div className="mt-2">
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                isPlaceholder
                  ? "border border-white/5 bg-white/5 text-slate-500"
                  : "border border-blue-500/20 bg-blue-500/10 text-blue-300"
              }`}
            >
              {project.category}
            </span>
          </div>

          <p
            className={`mt-3 text-sm leading-relaxed ${
              isPlaceholder ? "text-slate-500" : "text-slate-300"
            }`}
          >
            {project.description}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-white/10">
          {isPlaceholder ? (
            <span className="text-[11px] font-medium tracking-wider text-slate-600 uppercase">
              Slot Reserved
            </span>
          ) : (
            <a
              href={project.link || "/case-study"}
              className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors duration-200 hover:text-blue-400"
            >
              <span>{project.linkText || "View Project"}</span>
              <span className="text-blue-400 transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
        {isPlaceholder ? (
          <div className="flex aspect-[16/10] w-full flex-col items-center justify-center border border-dashed border-white/10 bg-[#07090E]/60 text-slate-600">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-40 mb-1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="text-[11px] font-medium tracking-widest uppercase opacity-40">
              Project {project.num}
            </span>
          </div>
        ) : (
          <a href={project.link || "/case-study"} className="block focus:outline-none">
            <img
              src={project.image}
              alt={`${project.name} - ${project.category}`}
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </a>
        )}
      </div>
    </article>
  );
}

export function Portfolio9() {
  const viewportRef = useRef(null);

  return (
    <section id="work-portfolio" className="relative px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-10 max-w-2xl sm:mb-12">
          <span className="mb-3 inline-block text-xs font-semibold tracking-[0.22em] text-blue-400 uppercase sm:text-sm">
            WORK
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
            Selected work
          </h2>
          <p className="text-base text-slate-300 sm:text-lg leading-relaxed">
            A selection of digital experiences we've built for businesses.
          </p>
        </header>

        <div className="relative rounded-3xl border border-white/10 bg-[#07090E]/80 p-3 sm:p-5 lg:p-6 shadow-2xl backdrop-blur-md">
          <div
            ref={viewportRef}
            className="custom-portfolio-scrollbar flex max-h-[720px] flex-col gap-5 overflow-y-auto overscroll-contain pr-2 sm:gap-6 sm:pr-4"
          >
            {PROJECTS_DATA.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
