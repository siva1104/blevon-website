"use client";

import React, { useEffect, useState } from "react";

interface PortfolioData {
  title: string;
  subtitle: string;
  show_featured_only: boolean;
  projects_per_page: number;
}

interface PortfolioEditorProps {
  data: PortfolioData;
  onChange: (updated: PortfolioData) => void;
}

export default function PortfolioEditor({ data, onChange }: PortfolioEditorProps) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  useEffect(() => {
    setTitle(data.title || "");
    setSubtitle(data.subtitle || "");
    setShowFeaturedOnly(!!data.show_featured_only);
    setProjectsPerPage(data.projects_per_page || 6);
  }, [data]);

  const handleFieldChange = (fields: Partial<PortfolioData>) => {
    onChange({
      title: fields.title !== undefined ? fields.title : title,
      subtitle: fields.subtitle !== undefined ? fields.subtitle : subtitle,
      show_featured_only: fields.show_featured_only !== undefined ? fields.show_featured_only : showFeaturedOnly,
      projects_per_page: fields.projects_per_page !== undefined ? fields.projects_per_page : projectsPerPage,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Title */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Section Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            handleFieldChange({ title: e.target.value });
          }}
          placeholder="e.g. Featured Work"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white"
        />
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Section Description
        </label>
        <textarea
          value={subtitle}
          onChange={(e) => {
            setSubtitle(e.target.value);
            handleFieldChange({ subtitle: e.target.value });
          }}
          placeholder="e.g. Explore our premium web designs and tailored software case studies."
          rows={3}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white resize-none"
        />
      </div>

      {/* Projects per page size */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Projects Per Page
        </label>
        <input
          type="number"
          value={projectsPerPage}
          onChange={(e) => {
            const val = parseInt(e.target.value) || 6;
            setProjectsPerPage(val);
            handleFieldChange({ projects_per_page: val });
          }}
          placeholder="6"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white"
        />
      </div>

      {/* Show featured only switch */}
      <label className="flex items-center gap-3 cursor-pointer pt-2 select-none">
        <input
          type="checkbox"
          checked={showFeaturedOnly}
          onChange={(e) => {
            setShowFeaturedOnly(e.target.checked);
            handleFieldChange({ show_featured_only: e.target.checked });
          }}
          className="h-4.5 w-4.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        <div className="flex flex-col">
          <span className="text-[14px] font-bold text-[#0F172A]">Show Featured Only</span>
          <span className="text-[11px] text-slate-400 font-medium">If checked, only projects marked as featured will be returned by default</span>
        </div>
      </label>

    </div>
  );
}
