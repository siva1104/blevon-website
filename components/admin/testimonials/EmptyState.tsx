import React from "react";
import { MessageSquarePlus } from "lucide-react";

interface EmptyStateProps {
  onCreateClick: () => void;
}

export default function EmptyState({ onCreateClick }: EmptyStateProps) {
  return (
    <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-12 text-center flex flex-col items-center justify-center space-y-5 shadow-[0_8px_30px_rgba(0,0,0,0.008)] min-h-[340px] select-none">
      
      {/* Icon */}
      <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
        <MessageSquarePlus className="h-6 w-6" />
      </div>
      
      {/* Description */}
      <div className="space-y-1">
        <h3 className="text-[16px] font-bold text-[#0F172A]">
          No testimonials yet
        </h3>
        <p className="text-[13.5px] text-slate-400 font-medium max-w-xs mx-auto leading-relaxed">
          Add customer reviews, client testimonials, and star ratings to display on Blevon homepage.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={onCreateClick}
        className="h-10 rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white text-[14px] font-semibold flex items-center justify-center px-5 shadow-sm hover:shadow-lg hover:shadow-[#2563EB]/15 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer select-none"
      >
        Add Testimonial
      </button>

    </div>
  );
}
