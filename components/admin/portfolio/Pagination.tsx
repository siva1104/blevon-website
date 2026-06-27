import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalCount, pageSize, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages <= 1) return null;

  const startRange = (currentPage - 1) * pageSize + 1;
  const endRange = Math.min(currentPage * pageSize, totalCount);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 select-none">
      
      <span className="text-[13.5px] font-medium text-slate-400">
        Showing <strong className="font-bold text-[#0F172A]">{startRange}</strong>–
        <strong className="font-bold text-[#0F172A]">{endRange}</strong> of{" "}
        <strong className="font-bold text-[#0F172A]">{totalCount}</strong> projects
      </span>

      <div className="flex items-center gap-1.5">
        
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-9 w-9 rounded-xl border border-[#E2E8F0] bg-white flex items-center justify-center text-slate-500 hover:text-[#0F172A] hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`h-9 w-9 rounded-xl text-[13.5px] font-bold transition-all ${
              currentPage === p
                ? "bg-gradient-to-br from-[#2563EB] to-[#6366F1] text-white shadow-sm shadow-[#2563EB]/10"
                : "border border-[#E2E8F0] bg-white text-slate-500 hover:bg-slate-50 hover:text-[#0F172A]"
            } cursor-pointer`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-9 w-9 rounded-xl border border-[#E2E8F0] bg-white flex items-center justify-center text-slate-500 hover:text-[#0F172A] hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

      </div>
    </div>
  );
}
