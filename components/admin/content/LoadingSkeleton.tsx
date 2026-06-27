import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-pulse select-none">
      
      {/* Sidebar Loader */}
      <div className="w-full lg:w-60 bg-white border border-[#E2E8F0] rounded-[20px] p-3 h-auto lg:h-[432px] flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible shrink-0">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} className="h-10 w-28 lg:w-full bg-slate-100 rounded-xl shrink-0" />
        ))}
      </div>

      {/* Editor Content Loader */}
      <div className="flex-grow bg-white border border-[#E2E8F0] rounded-[20px] p-6 md:p-8 space-y-6">
        <div className="h-5 w-40 bg-slate-100 rounded-md" />
        <div className="h-0.5 bg-slate-50 w-full" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4.5 w-24 bg-slate-100 rounded-md" />
              <div className="h-11 bg-slate-100 rounded-xl" />
            </div>
          ))}
          <div className="space-y-2">
            <div className="h-4.5 w-24 bg-slate-105 rounded-md" />
            <div className="h-24 bg-slate-100 rounded-xl" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
