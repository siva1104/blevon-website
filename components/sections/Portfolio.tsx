"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FolderGit, AlertCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  client_name: string | null;
  project_url: string | null;
  category: string;
  technologies: string[];
  cover_image: string;
  gallery_images: string[];
  status: "Completed" | "Ongoing";
  display_order: number;
}

const categories = ["All", "Completed", "Ongoing"];

export default function Portfolio() {
  const supabase = useMemo(() => createClient(), []);
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error: err } = await supabase
          .from("portfolio_projects")
          .select("*")
          .eq("published", true)
          .order("display_order", { ascending: true });

        if (err) throw new Error(err.message);
        setProjects(data || []);
      } catch (e: any) {
        console.error("Portfolio fetch error:", e);
        setError("Unable to load portfolio projects.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, [supabase]);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.status === activeCategory);

  // Background visual wrapper matching status
  const getBrandingStyles = (status: "Completed" | "Ongoing") => {
    if (status === "Ongoing") {
      return {
        bg: "from-indigo-950 to-indigo-900",
        gradient: "from-violet-500/20 to-indigo-500/35",
      };
    }
    return {
      bg: "from-slate-900 to-slate-800",
      gradient: "from-blue-600/20 to-indigo-600/30",
    };
  };

  return (
    <section id="portfolio" className="relative w-full overflow-hidden bg-white py-20 lg:py-32 border-b border-slate-100">
      
      {/* Decorative details */}
      <div className="absolute top-1/3 left-0 -z-10 h-72 w-72 rounded-full bg-slate-50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20 select-none">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-3 block">
              Our Projects
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold tracking-tight text-slate-900 leading-tight">
              Bespoke Digital Portfolios Handcrafted By Blevon
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16.5px] font-medium text-slate-550 max-w-sm leading-relaxed">
            We focus on clean visual layout design paired with robust system engineering to deliver top-tier platforms.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex w-full overflow-x-auto pb-4 mb-12 scrollbar-none [mask-image:linear-gradient(to_right,white_85%,transparent)] select-none">
          <div className="flex gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative rounded-full px-5 py-2 text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {/* Floating backdrop animation */}
                  {isActive && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-slate-900"
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* States Switcher */}
        {isLoading ? (
          /* Loading State Skeletons */
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden h-[420px] animate-pulse flex flex-col justify-between"
              >
                <div className="bg-slate-100 h-1/2 w-full" />
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="h-3 w-16 bg-slate-100 rounded" />
                    <div className="h-5.5 bg-slate-100 rounded w-1/2" />
                    <div className="h-4 bg-slate-100 rounded w-full" />
                  </div>
                  <div className="h-0.5 bg-slate-50 w-full" />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      <div className="h-5 w-12 bg-slate-100 rounded" />
                      <div className="h-5 w-12 bg-slate-100 rounded" />
                    </div>
                    <div className="h-4 w-20 bg-slate-100 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          /* Error State */
          <div className="bg-white border border-[#E2E8F0] rounded-3xl p-12 text-center flex flex-col items-center justify-center space-y-3 shadow-[0_8px_30px_rgba(0,0,0,0.003)] select-none">
            <div className="h-10 w-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
              <AlertCircle className="h-5 w-5" />
            </div>
            <p className="text-[14px] font-bold text-slate-600">
              {error}
            </p>
          </div>
        ) : filteredProjects.length === 0 ? (
          /* Empty State */
          <div className="bg-white border border-dashed border-[#E2E8F0] rounded-[24px] p-16 text-center flex flex-col items-center justify-center space-y-3 select-none">
            <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              <FolderGit className="h-5 w-5" />
            </div>
            <p className="text-[14.5px] font-semibold text-slate-500">
              No projects available yet.
            </p>
          </div>
        ) : (
          /* Portfolio Cards Grid */
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const brand = getBrandingStyles(project.status);
                
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4 }}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-100/50 hover:border-slate-350/60 transition-all duration-300"
                  >
                    {/* Visual Cover/Mockup Container */}
                    <div className={`relative aspect-video w-full overflow-hidden bg-gradient-to-br ${brand.bg} flex items-center justify-center`}>
                      <div className={`absolute inset-0 bg-gradient-to-tr ${brand.gradient} opacity-40`} />

                      {project.cover_image ? (
                        /* Real uploaded project cover image */
                        <Image
                          src={project.cover_image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        /* Abstract wireframe mock fallback if no cover image */
                        <div className="relative w-full max-w-[85%] aspect-[1.6] rounded-xl bg-slate-950/80 border border-slate-500/20 shadow-2xl p-3 flex flex-col gap-2.5 transform translate-y-6 group-hover:translate-y-2 group-hover:scale-[1.03] transition-transform duration-500">
                          <div className="flex gap-1.5 shrink-0">
                            <div className="h-2 w-2 rounded-full bg-rose-500/60" />
                            <div className="h-2 w-2 rounded-full bg-amber-500/60" />
                            <div className="h-2 w-2 rounded-full bg-emerald-500/60" />
                          </div>
                          <div className="flex-1 flex flex-col gap-2">
                            <div className="h-2.5 w-[40%] rounded-md bg-white/25" />
                            <div className="h-2 w-[70%] rounded-md bg-white/10" />
                            <div className="flex-1 grid grid-cols-3 gap-2 mt-1">
                              <div className="rounded-lg bg-white/5 border border-white/5 p-2 flex flex-col gap-1.5">
                                <div className="h-1.5 w-[50%] rounded bg-white/20" />
                                <div className="h-2.5 w-[80%] rounded bg-white/30" />
                              </div>
                              <div className="rounded-lg bg-white/5 border border-white/5 p-2 flex flex-col gap-1.5">
                                <div className="h-1.5 w-[60%] rounded bg-white/20" />
                                <div className="h-2.5 w-[70%] rounded bg-white/30" />
                              </div>
                              <div className="rounded-lg bg-white/5 border border-white/5 p-2 flex flex-col gap-1.5">
                                <div className="h-1.5 w-[40%] rounded bg-white/20" />
                                <div className="h-2.5 w-[90%] rounded bg-white/30" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Meta Content */}
                    <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        {/* Status Label & Category */}
                        <div className="flex items-center gap-2 select-none">
                          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider border ${
                            project.status === "Ongoing"
                              ? "bg-indigo-50 border-indigo-100 text-indigo-600"
                              : "bg-emerald-50 border-emerald-105 text-emerald-600"
                          }`}>
                            {project.status}
                          </span>
                          <span className="text-[11.5px] font-bold text-slate-400 uppercase tracking-wide">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-3 text-xl sm:text-2xl font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-tight">
                          {project.title}
                        </h3>

                        {/* Short Description */}
                        <p className="mt-3 text-[14px] sm:text-[14.5px] leading-relaxed text-slate-550 font-medium">
                          {project.short_description}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 select-none">
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies?.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="inline-flex rounded-md bg-slate-50 border border-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500"
                            >
                              {t}
                            </span>
                          ))}
                          {project.technologies?.length > 3 && (
                            <span className="inline-flex rounded-md bg-slate-50 border border-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-400">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* CTA Link */}
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                          View Project
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>

                    {/* Direct clickable link wrapper if project_url exists */}
                    {project.project_url && (
                      <Link 
                        href={project.project_url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10" 
                      />
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
}
