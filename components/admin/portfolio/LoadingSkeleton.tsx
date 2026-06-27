import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse select-none">
      
      {/* Stats Cards Loader */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-[20px] border border-[#E2E8F0] p-6 h-[120px] flex flex-col justify-between">
            <div className="h-4 w-20 bg-slate-100 rounded-md" />
            <div className="h-6 w-10 bg-slate-100 rounded-md" />
          </div>
        ))}
      </div>

      {/* Search & Filter Bar Loader */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white rounded-[20px] border border-[#E2E8F0] p-4 h-auto lg:h-[74px]">
        <div className="h-10 w-full lg:w-72 bg-slate-100 rounded-xl" />
        <div className="h-10 w-full lg:w-[420px] bg-slate-100 rounded-xl" />
      </div>

      {/* Grid Cards Loader */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-[20px] border border-[#E2E8F0] overflow-hidden h-[380px] flex flex-col justify-between">
            <div className="w-full aspect-[16/10] bg-slate-100" />
            <div className="p-5 flex-grow space-y-3">
              <div className="h-4 w-1/4 bg-slate-100 rounded-md" />
              <div className="h-5 w-3/4 bg-slate-100 rounded-md" />
              <div className="h-4 w-5/6 bg-slate-100 rounded-md" />
            </div>
            <div className="p-5 border-t border-slate-50 flex items-center justify-between">
              <div className="h-4 w-16 bg-slate-100 rounded-md" />
              <div className="h-8 w-24 bg-slate-100 rounded-md" />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
