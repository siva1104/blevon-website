import React from "react";
import { Inbox } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-12 text-center flex flex-col items-center justify-center space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.008)] min-h-[320px] select-none">
      
      {/* Icon */}
      <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
        <Inbox className="h-6 w-6" />
      </div>
      
      {/* Texts */}
      <div className="space-y-1">
        <h3 className="text-[16px] font-bold text-[#0F172A]">
          No enquiries yet
        </h3>
        <p className="text-[13.5px] text-slate-400 font-medium max-w-xs mx-auto leading-relaxed">
          When visitors fill out the contact form on your website, their requests will appear here.
        </p>
      </div>

    </div>
  );
}
