"use client";

import React from "react";
import { Eye, Edit2, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

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

interface EnquiryRowProps {
  enquiry: Enquiry;
  onView: (enquiry: Enquiry) => void;
  onEditStatus: (enquiry: Enquiry) => void;
  onDelete: (id: string) => void;
}

export default function EnquiryRow({ enquiry, onView, onEditStatus, onDelete }: EnquiryRowProps) {
  
  const truncateSummary = (text: string) => {
    if (text.length > 80) {
      return text.substring(0, 80) + "...";
    }
    return text;
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      
      {/* Name */}
      <td className="px-6 py-4.5 whitespace-nowrap text-[14.5px] font-bold text-[#0F172A]">
        {enquiry.full_name}
      </td>
      
      {/* Business */}
      <td className="px-6 py-4.5 whitespace-nowrap text-[14px] font-semibold text-slate-500">
        {enquiry.business_name || "—"}
      </td>
      
      {/* Email */}
      <td className="px-6 py-4.5 whitespace-nowrap text-[14px] font-semibold text-slate-500">
        <a href={`mailto:${enquiry.email}`} className="text-[#2563EB] hover:underline">
          {enquiry.email}
        </a>
      </td>
      
      {/* Phone */}
      <td className="px-6 py-4.5 whitespace-nowrap text-[14px] font-medium text-slate-500">
        {enquiry.phone_number || "—"}
      </td>
      
      {/* Project Summary */}
      <td className="px-6 py-4.5 text-[14px] font-medium text-slate-500 max-w-xs truncate" title={enquiry.project_details}>
        {truncateSummary(enquiry.project_details)}
      </td>
      
      {/* Status */}
      <td className="px-6 py-4.5 whitespace-nowrap">
        <StatusBadge status={enquiry.status} />
      </td>
      
      {/* Submitted Date */}
      <td className="px-6 py-4.5 whitespace-nowrap text-[13.5px] font-semibold text-slate-400">
        {formatDate(enquiry.created_at)}
      </td>
      
      {/* Actions */}
      <td className="px-6 py-4.5 whitespace-nowrap text-right text-[14px]">
        <div className="flex items-center gap-1.5 justify-end">
          
          {/* View details */}
          <button
            onClick={() => onView(enquiry)}
            className="h-8 w-8 rounded-lg border border-[#E2E8F0] hover:border-blue-200 bg-white flex items-center justify-center text-slate-400 hover:text-[#2563EB] hover:bg-blue-50/20 transition-all cursor-pointer"
            title="View Details"
          >
            <Eye className="h-4 w-4" />
          </button>
          
          {/* Edit status */}
          <button
            onClick={() => onEditStatus(enquiry)}
            className="h-8 w-8 rounded-lg border border-[#E2E8F0] hover:border-indigo-200 bg-white flex items-center justify-center text-slate-400 hover:text-[#6366F1] hover:bg-indigo-50/20 transition-all cursor-pointer"
            title="Update Status"
          >
            <Edit2 className="h-4 w-4" />
          </button>
          
          {/* Delete entry */}
          <button
            onClick={() => onDelete(enquiry.id)}
            className="h-8 w-8 rounded-lg border border-[#E2E8F0] hover:border-rose-200 bg-white flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50/20 transition-all cursor-pointer"
            title="Delete Enquiry"
          >
            <Trash2 className="h-4 w-4" />
          </button>

        </div>
      </td>

    </tr>
  );
}
