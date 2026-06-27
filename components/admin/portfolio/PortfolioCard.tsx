"use client";

import React from "react";
import Image from "next/image";
import { Eye, Edit2, Trash2, Calendar, Building2 } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { Project } from "@/types/portfolio";

interface PortfolioCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  onView: (project: Project) => void;
}

export default function PortfolioCard({ project, onEdit, onDelete, onView }: PortfolioCardProps) {
  
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-[20px] border border-[#E2E8F0] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.005)] flex flex-col justify-between h-[400px] hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300 group">
      
      {/* Cover Image */}
      <div className="relative aspect-[16/10] bg-slate-50 w-full overflow-hidden shrink-0 border-b border-slate-100">
        {project.cover_image ? (
          <Image
            src={project.cover_image}
            alt={project.title}
            fill
            sizes="(max-w-768px) 100vw, 33vw"
            className="object-cover group-hover:scale-103 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-300">
            No Cover Image
          </div>
        )}

        {/* Indicators Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <StatusBadge status={project.status} />
          <StatusBadge published={project.published} />
        </div>
      </div>

      {/* Info details */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        
        <div className="space-y-2">
          {/* Category */}
          <span className="text-[11.5px] font-bold text-[#2563EB] uppercase tracking-wider">
            {project.category}
          </span>
          {/* Title */}
          <h3 className="text-[16px] font-extrabold text-[#0F172A] tracking-tight leading-snug line-clamp-1 group-hover:text-[#2563EB] transition-colors" title={project.title}>
            {project.title}
          </h3>
          {/* Short description */}
          <p className="text-[13px] leading-relaxed text-slate-500 font-medium line-clamp-2" title={project.short_description}>
            {project.short_description}
          </p>
        </div>

        {/* Client & Date metadata */}
        <div className="flex items-center justify-between text-[12px] font-semibold text-slate-400 pt-3 border-t border-slate-50">
          <span className="flex items-center gap-1.5 max-w-[140px] truncate" title={project.client_name || "Blevon Client"}>
            <Building2 className="h-3.5 w-3.5 shrink-0" />
            <span>{project.client_name || "—"}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            <span>{formatDate(project.created_at)}</span>
          </span>
        </div>

      </div>

      {/* Actions footer */}
      <div className="px-5 py-4 border-t border-[#E2E8F0] bg-slate-50/30 flex items-center justify-between shrink-0">
        
        {/* Quick details */}
        <button
          onClick={() => onView(project)}
          className="flex items-center gap-1 text-[13px] font-bold text-slate-500 hover:text-[#0F172A] transition-colors cursor-pointer select-none"
        >
          <Eye className="h-4.5 w-4.5" />
          <span>View</span>
        </button>

        {/* Edit & Delete row */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(project)}
            className="h-8.5 px-3 rounded-lg border border-[#E2E8F0] hover:border-indigo-200 bg-white text-[12.5px] font-bold text-slate-600 hover:text-[#6366F1] hover:bg-indigo-50/20 transition-all flex items-center gap-1.5 cursor-pointer select-none"
          >
            <Edit2 className="h-3.5 w-3.5" />
            <span>Edit</span>
          </button>
          
          <button
            onClick={() => onDelete(project.id)}
            className="h-8.5 w-8.5 rounded-lg border border-[#E2E8F0] hover:border-rose-200 bg-white text-slate-400 hover:text-rose-500 hover:bg-rose-50/20 transition-all flex items-center justify-center cursor-pointer select-none"
            title="Delete Project"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
