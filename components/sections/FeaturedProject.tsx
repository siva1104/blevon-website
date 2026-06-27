"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    status: "Ongoing Project",
    statusColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    badgeDotColor: "bg-emerald-500",
    name: "Kavuturu Dental Clinic",
    category: "Healthcare Website",
    accentColor: "from-teal-500/10 to-emerald-500/10",
    description: "A modern dental clinic website featuring online appointment booking, treatment pages, patient testimonials, and a responsive user experience.",
    image: "/dental-mockup.png",
    technologies: "Next.js • Tailwind CSS • TypeScript • Supabase",
    link: "#",
  }
];

export default function FeaturedProject() {
  return (
    <section id="portfolio" className="relative w-full bg-white py-14 lg:py-20 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#2563EB] mb-2.5 block">
            PORTFOLIO
          </span>
          <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] mb-4">
            Featured Project
          </h2>
          <p className="text-[16px] lg:text-[18px] font-normal leading-[1.7] text-[#64748B] max-w-[680px] mx-auto">
            A glimpse into one of our ongoing projects, showcasing our approach to modern web design and development.
          </p>
        </div>

        {/* Project Card (Future-Ready array mapping) */}
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="group relative bg-[#FFFFFF] rounded-[24px] border border-[#E2E8F0] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_50px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 transition-all duration-500 ease-out grid grid-cols-1 lg:grid-cols-12"
            >
              
              {/* Left Column: Image Area */}
              <div className="relative lg:col-span-7 h-[260px] sm:h-[320px] lg:h-auto min-h-[300px] bg-slate-50 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.accentColor} opacity-75 z-0`} />
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  priority
                  className="object-cover p-5 lg:p-6 z-10 transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  sizes="(max-w-1024px) 100vw, 55vw"
                />
              </div>

              {/* Right Column: Content Area */}
              <div className="flex flex-col justify-center p-7 sm:p-8 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-100 bg-[#FFFFFF]">
                
                {/* Status Badge + Category */}
                <div className="flex items-center gap-3 mb-4.5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold border ${project.statusColor}`}>
                    <span className={`h-2 w-2 rounded-full ${project.badgeDotColor} animate-pulse`} />
                    Ongoing
                  </span>
                  <span className="text-[13px] font-bold uppercase tracking-wider text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Name */}
                <h3 className="text-[22px] font-bold text-[#0F172A] leading-[1.3] mb-3">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-[16px] font-normal leading-[1.6] text-[#64748B] mb-6">
                  {project.description}
                </p>

                {/* Technologies (Formatted string) */}
                <div className="text-[13.5px] font-semibold text-slate-500 mb-8 border-t border-slate-50 pt-5">
                  {project.technologies}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    className="rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] px-6 h-11 text-[16px] font-semibold text-white hover:shadow-lg hover:shadow-[#2563EB]/15 transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    <Link href={project.link} className="flex items-center gap-1.5">
                      View Project
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-[12px] border border-[#E2E8F0] bg-white hover:bg-slate-50 text-[16px] font-semibold text-slate-700 px-6 h-11 shadow-sm hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Link href="#contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
