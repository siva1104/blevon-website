import React from "react";
import { ChevronDown } from "lucide-react";

interface CategorySelectProps {
  value: string;
  onChange: (category: string) => void;
  disabled?: boolean;
  includeAll?: boolean;
}

const categories = [
  "Business Websites",
  "E-Commerce Websites",
  "Corporate Websites",
  "Healthcare Websites",
  "Landing Pages",
  "Custom Web Solutions",
];

export default function CategorySelect({ value, onChange, disabled, includeAll }: CategorySelectProps) {
  return (
    <div className="relative w-full">
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-[12px] border border-[#E2E8F0] bg-white pl-4 pr-10 text-[14.5px] font-semibold text-[#0F172A] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200 cursor-pointer appearance-none disabled:bg-slate-50 disabled:text-slate-400"
      >
        {includeAll && <option value="all">All Categories</option>}
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400">
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
}
