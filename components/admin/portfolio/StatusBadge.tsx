import React from "react";

interface StatusBadgeProps {
  published?: boolean;
  status?: string;
}

export default function StatusBadge({ published, status }: StatusBadgeProps) {
  if (status) {
    if (status === "Ongoing") {
      return (
        <span className="inline-flex items-center rounded-full bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
          Ongoing
        </span>
      );
    }
    return (
      <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-100/50 px-2 py-0.5 text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
        Completed
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
