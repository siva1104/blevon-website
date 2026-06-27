import React from "react";

interface StatusBadgeProps {
  published?: boolean;
  featured?: boolean;
}

export default function StatusBadge({ published, featured }: StatusBadgeProps) {
  if (featured) {
    return (
      <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100/50 px-2 py-0.5 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
        Featured
      </span>
    );
  }

  if (published) {
    return (
      <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-100/50 px-2 py-0.5 text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
        Published
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
      Draft
    </span>
  );
}
