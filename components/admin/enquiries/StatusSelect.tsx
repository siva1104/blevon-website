import React from "react";

interface StatusSelectProps {
  value: string;
  onChange: (newStatus: string) => void;
  disabled?: boolean;
}

export default function StatusSelect({ value, onChange, disabled }: StatusSelectProps) {
  const cleanValue = value ? value.toLowerCase().replace(" ", "_") : "new";

  return (
    <div className="relative inline-block">
      <select
        value={cleanValue}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full rounded-[12px] border border-[#E2E8F0] bg-white px-3 pr-8 text-[14px] font-semibold text-[#0F172A] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200 cursor-pointer disabled:bg-slate-50 disabled:text-slate-400 select-none appearance-none"
      >
        <option value="new">New</option>
        <option value="in_progress">In Progress</option>
        <option value="contacted">Contacted</option>
        <option value="closed">Closed</option>
      </select>
      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
