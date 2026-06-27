import React from "react";
import { ChevronDown } from "lucide-react";

interface FilterBarProps {
  statusFilter: string;
  onStatusChange: (status: string) => void;
  sortOrder: "newest" | "oldest";
  onSortChange: (sort: "newest" | "oldest") => void;
}

export default function FilterBar({ statusFilter, onStatusChange, sortOrder, onSortChange }: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 select-none">
      
      {/* Status Filter */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <span className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.08em] whitespace-nowrap">
          Status:
        </span>
        <div className="relative w-full sm:w-40">
          <select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            className="h-10 w-full rounded-[12px] border border-[#E2E8F0] bg-white pl-3.5 pr-8 text-[14px] font-semibold text-[#0F172A] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200 cursor-pointer appearance-none"
          >
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="in_progress">In Progress</option>
            <option value="contacted">Contacted</option>
            <option value="closed">Closed</option>
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Sort Filter */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <span className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.08em] whitespace-nowrap">
          Sort:
        </span>
        <div className="relative w-full sm:w-44">
          <select
            value={sortOrder}
            onChange={(e) => onSortChange(e.target.value as "newest" | "oldest")}
            className="h-10 w-full rounded-[12px] border border-[#E2E8F0] bg-white pl-3.5 pr-8 text-[14px] font-semibold text-[#0F172A] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200 cursor-pointer appearance-none"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

    </div>
  );
}
