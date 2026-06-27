"use client";

import React from "react";
import { X, Calendar, Globe, FileText, Building2, Layers, Cpu, Eye, ExternalLink } from "lucide-react";
import StatusBadge from "./StatusBadge";
import Image from "next/image";
import { Project } from "@/types/portfolio";

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  if (!project) return null;



  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/10 backdrop-blur-[1px] z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`} 
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`fixed inset-y-0 right-0 w-full sm:w-[500px] bg-white border-l border-[#E2E8F0] z-50 shadow-[-8px_0_40px_rgba(0,0,0,0.03)] flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        
        {/* Header */}
        <div className="h-[72px] px-6 border-b border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-[16px] font-bold text-[#0F172A] truncate max-w-[240px]">
              {project.title}
            </h3>
            <div className="flex gap-1 shrink-0">
              <StatusBadge status={project.status} />
              <StatusBadge published={project.published} />
            </div>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-slate-400 hover:text-[#0F172A] transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Cover image preview */}
          {project.cover_image && (
            <div className="relative rounded-[20px] border border-[#E2E8F0] overflow-hidden aspect-[16/10] bg-slate-50 w-full">
              <Image
                src={project.cover_image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Details list */}
          <div className="space-y-5">
            
            {/* Category */}
            <div className="flex gap-4">
              <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                <Layers className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Category</span>
                <span className="text-[14.5px] font-bold text-[#0F172A]">{project.category}</span>
              </div>
            </div>

            {/* Client Name */}
            <div className="flex gap-4">
              <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                <Building2 className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Client</span>
                <span className="text-[14.5px] font-semibold text-[#0F172A]">
                  {project.client_name || "—"}
                </span>
              </div>
            </div>

            {/* Project URL */}
            {project.project_url && (
              <div className="flex gap-4">
                <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                  <Globe className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Live URL</span>
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14.5px] font-semibold text-[#2563EB] hover:underline flex items-center gap-1"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )}

            {/* Display Order */}
            <div className="flex gap-4">
              <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                <Calendar className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Display Order</span>
                <span className="text-[14.5px] font-semibold text-[#0F172A]">{project.display_order}</span>
              </div>
            </div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex gap-4 items-start pt-2 border-t border-slate-100">
                <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                  <Cpu className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col gap-1.5 w-full">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Technologies Used</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span key={t} className="bg-slate-100 border border-slate-200/50 text-[#0F172A] px-2.5 py-0.5 rounded-full text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Short Description */}
            <div className="flex gap-4 items-start pt-2 border-t border-slate-100">
              <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-1.5 w-full">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Overview</span>
                <p className="text-[14px] leading-relaxed text-slate-650 font-medium">
                  {project.short_description}
                </p>
              </div>
            </div>

            {/* Full description */}
            {project.full_description && (
              <div className="flex gap-4 items-start pt-2 border-t border-slate-100">
                <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                  <FileText className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col gap-1.5 w-full">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Case Study details</span>
                  <div className="text-[14.5px] leading-relaxed text-slate-600 font-medium whitespace-pre-wrap">
                    {project.full_description}
                  </div>
                </div>
              </div>
            )}

            {/* Gallery Screenshots */}
            {project.gallery_images && project.gallery_images.length > 0 && (
              <div className="flex gap-4 items-start pt-2 border-t border-slate-100">
                <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                  <Eye className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Screenshots</span>
                  <div className="grid grid-cols-2 gap-4">
                    {project.gallery_images.map((gUrl, idx) => (
                      <div key={gUrl + idx} className="relative aspect-[16/10] rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                        <Image
                          src={gUrl}
                          alt={`${project.title} Screenshot ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Footer controls */}
        <div className="p-6 border-t border-[#E2E8F0] flex items-center justify-end bg-slate-50/50">
          <button
            onClick={onClose}
            className="h-10 rounded-[12px] border border-[#E2E8F0] bg-white hover:bg-slate-50 text-[14px] font-semibold text-slate-600 px-5 transition-colors cursor-pointer select-none"
          >
            Close
          </button>
        </div>

      </aside>
    </>
  );
}
