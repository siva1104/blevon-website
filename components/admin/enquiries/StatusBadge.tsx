import React from "react";

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const cleanStatus = status ? status.toLowerCase() : "new";

  switch (cleanStatus) {
    case "new":
      return (
        <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100/50 px-2.5 py-0.5 text-[11px] font-bold text-blue-600 uppercase tracking-wider">
          New
        </span>
      );
    case "in_progress":
    case "in progress":
      return (
        <span className="inline-flex items-center rounded-full bg-amber-50 border border-amber-100/50 px-2.5 py-0.5 text-[11px] font-bold text-amber-600 uppercase tracking-wider">
          In Progress
        </span>
      );
    case "contacted":
      return (
        <span className="inline-flex items-center rounded-full bg-purple-50 border border-purple-100/50 px-2.5 py-0.5 text-[11px] font-bold text-purple-600 uppercase tracking-wider">
          Contacted
        </span>
      );
    case "closed":
      return (
        <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-100/50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
          Closed
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200 px-2.5 py-0.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          {status}
        </span>
      );
  }
}
