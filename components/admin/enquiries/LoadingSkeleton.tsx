import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse select-none">
      
      {/* Stats Cards Loader */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-[20px] border border-[#E2E8F0] p-6 h-[120px] flex flex-col justify-between">
            <div className="h-4 w-24 bg-slate-100 rounded-md" />
            <div className="h-7 w-12 bg-slate-100 rounded-md" />
          </div>
        ))}
      </div>

      {/* Search & Filter Bar Loader */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white rounded-[20px] border border-[#E2E8F0] p-4 h-auto lg:h-[74px]">
        <div className="h-10 w-full lg:w-72 bg-slate-100 rounded-xl" />
        <div className="h-10 w-full lg:w-96 bg-slate-100 rounded-xl" />
      </div>

      {/* Table list loader */}
      <div className="bg-white rounded-[20px] border border-[#E2E8F0] overflow-hidden">
        <div className="h-12 bg-slate-50 border-b border-slate-100" />
        <div className="divide-y divide-slate-100">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="p-6 h-[76px] flex items-center justify-between gap-4">
              <div className="h-4 w-36 bg-slate-100 rounded-md" />
              <div className="h-4 w-44 bg-slate-100 rounded-md" />
              <div className="h-4 w-28 bg-slate-100 rounded-md" />
              <div className="h-6 w-16 bg-slate-100 rounded-full" />
              <div className="h-8 w-24 bg-slate-100 rounded-md" />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
