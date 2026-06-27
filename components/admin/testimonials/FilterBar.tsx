import React from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export default function FilterBar({ activeFilter, onFilterChange, sortBy, onSortChange }: FilterBarProps) {
  const filters = [
    { label: "All", key: "all" },
    { label: "Published", key: "published" },
    { label: "Draft", key: "draft" },
    { label: "Featured", key: "featured" },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 select-none flex-grow justify-end w-full sm:w-auto">
      
      {/* Tabs */}
      <div className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-xl p-1 shrink-0 overflow-x-auto scrollbar-none">
        {filters.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => onFilterChange(f.key)}
              className={`px-3 py-1.5 rounded-lg text-[12.5px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-white text-[#0F172A] shadow-sm border border-slate-100"
                  : "text-slate-500 hover:text-[#0F172A]"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Sorter Dropdown */}
      <div className="relative shrink-0 w-full sm:w-44">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="h-10 w-full rounded-xl border border-[#E2E8F0] bg-white pl-10 pr-10 text-[13px] font-bold text-slate-700 hover:border-slate-300 transition-colors focus:border-[#2563EB] outline-none cursor-pointer appearance-none"
        >
          <option value="display_order_asc">Display Order (Asc)</option>
          <option value="display_order_desc">Display Order (Desc)</option>
          <option value="created_at_desc">Newest First</option>
          <option value="created_at_asc">Oldest First</option>
          <option value="rating_desc">Highest Rated</option>
          <option value="rating_asc">Lowest Rated</option>
        </select>
        <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-450">
          <SlidersHorizontal className="h-4 w-4" />
        </div>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>

    </div>
  );
}
