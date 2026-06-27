"use client";

import React from "react";
import EnquiryRow from "./EnquiryRow";
import StatusBadge from "./StatusBadge";
import { Eye, Edit2, Trash2 } from "lucide-react";

interface Enquiry {
  id: string;
  full_name: string;
  business_name: string | null;
  email: string;
  phone_number: string | null;
  project_details: string;
  status: string;
  created_at: string;
}

interface EnquiryTableProps {
  enquiries: Enquiry[];
  onView: (enquiry: Enquiry) => void;
  onEditStatus: (enquiry: Enquiry) => void;
  onDelete: (id: string) => void;
}

export default function EnquiryTable({ enquiries, onView, onEditStatus, onDelete }: EnquiryTableProps) {
  
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const truncateSummary = (text: string) => {
    if (text.length > 80) {
      return text.substring(0, 80) + "...";
    }
    return text;
  };

  return (
    <div className="w-full">
      
      {/* Mobile view - Stacked Card list */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {enquiries.map((enquiry) => (
          <div
            key={enquiry.id}
            className="bg-white rounded-[20px] border border-[#E2E8F0] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.005)] space-y-4 hover:shadow-md transition-all duration-300"
          >
            {/* Header info */}
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <h4 className="text-[15px] font-bold text-[#0F172A]">
                  {enquiry.full_name}
                </h4>
                {enquiry.business_name && (
                  <p className="text-[12px] font-semibold text-slate-400">
                    {enquiry.business_name}
                  </p>
                )}
              </div>
              <span className="text-[11.5px] font-semibold text-slate-400">
                {formatDate(enquiry.created_at)}
              </span>
            </div>

            {/* Project Summary */}
            <p className="text-[13.5px] font-medium leading-relaxed text-slate-500 bg-slate-50/50 rounded-xl border border-slate-100 p-3">
              {truncateSummary(enquiry.project_details)}
            </p>

            {/* Email / Status row */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <a
                href={`mailto:${enquiry.email}`}
                className="text-[13px] font-semibold text-[#2563EB] hover:underline truncate max-w-[200px]"
              >
                {enquiry.email}
              </a>
              <StatusBadge status={enquiry.status} />
            </div>

            {/* Action buttons footer */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 justify-end">
              <button
                onClick={() => onView(enquiry)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-[12px] font-semibold text-slate-600 hover:text-[#2563EB] hover:bg-blue-50/20 hover:border-blue-200 transition-all cursor-pointer"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>View</span>
              </button>
              
              <button
                onClick={() => onEditStatus(enquiry)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-[12px] font-semibold text-slate-600 hover:text-[#6366F1] hover:bg-indigo-50/20 hover:border-indigo-200 transition-all cursor-pointer"
              >
                <Edit2 className="h-3.5 w-3.5" />
                <span>Status</span>
              </button>
              
              <button
                onClick={() => onDelete(enquiry.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-100 bg-rose-50/50 text-[12px] font-semibold text-rose-600 hover:bg-rose-100 transition-all cursor-pointer"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Delete</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Desktop / Tablet view - Full HTML Table */}
      <div className="hidden sm:block overflow-x-auto bg-white rounded-[20px] border border-[#E2E8F0] shadow-[0_8px_30px_rgba(0,0,0,0.005)]">
        <table className="min-w-full divide-y divide-slate-100 text-left">
          
          <thead className="bg-slate-50/50 text-[12px] font-bold text-slate-400 uppercase tracking-wider select-none border-b border-slate-100">
            <tr>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4">Business</th>
              <th scope="col" className="px-6 py-4">Email</th>
              <th scope="col" className="px-6 py-4">Phone</th>
              <th scope="col" className="px-6 py-4">Project Summary</th>
              <th scope="col" className="px-6 py-4">Status</th>
              <th scope="col" className="px-6 py-4">Submitted</th>
              <th scope="col" className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {enquiries.map((enquiry) => (
              <EnquiryRow
                key={enquiry.id}
                enquiry={enquiry}
                onView={onView}
                onEditStatus={onEditStatus}
                onDelete={onDelete}
              />
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}
