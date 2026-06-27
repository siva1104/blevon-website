import React from "react";
import { ChevronDown } from "lucide-react";
import CategorySelect from "./CategorySelect";

interface FilterBarProps {
  categoryFilter: string;
  onCategoryChange: (category: string) => void;
  statusFilter: string;
  onStatusChange: (status: string) => void;
  sortOrder: string;
  onSortChange: (sort: string) => void;
}

export default function FilterBar({
  categoryFilter,
  onCategoryChange,
  statusFilter,
  onStatusChange,
  sortOrder,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 select-none">
      
      {/* Category filter */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <span className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.08em] whitespace-nowrap">
          Category:
        </span>
        <div className="w-full sm:w-48">
          <CategorySelect 
            value={categoryFilter} 
            onChange={onCategoryChange} 
            includeAll={true} 
          />
        </div>
      </div>

      {/* Status filter */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <span className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.08em] whitespace-nowrap">
          Status:
        </span>
        <div className="relative w-full sm:w-36">
          <select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            className="h-10 w-full rounded-[12px] border border-[#E2E8F0] bg-white pl-3.5 pr-8 text-[14px] font-semibold text-[#0F172A] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200 cursor-pointer appearance-none"
          >
            <option value="all">All</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="completed">Completed</option>
            <option value="ongoing">Ongoing</option>
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Sort order filter */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <span className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.08em] whitespace-nowrap">
          Sort:
        </span>
        <div className="relative w-full sm:w-40">
          <select
            value={sortOrder}
            onChange={(e) => onSortChange(e.target.value)}
            className="h-10 w-full rounded-[12px] border border-[#E2E8F0] bg-white pl-3.5 pr-8 text-[14px] font-semibold text-[#0F172A] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200 cursor-pointer appearance-none"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="order">Display Order</option>
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

    </div>
  );
}
