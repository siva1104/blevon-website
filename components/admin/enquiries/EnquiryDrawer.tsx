"use client";

import React, { useState } from "react";
import { X, Calendar, User, Mail, Phone, FileText, CheckCircle2, Loader2, Building2 } from "lucide-react";
import StatusBadge from "./StatusBadge";
import StatusSelect from "./StatusSelect";

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

interface EnquiryDrawerProps {
  enquiry: Enquiry | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusUpdate: (id: string, newStatus: string) => Promise<boolean>;
}

export default function EnquiryDrawer({ enquiry, isOpen, onClose, onStatusUpdate }: EnquiryDrawerProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!enquiry) return null;

  const handleStatusChange = async (newStatus: string) => {
    setIsSaving(true);
    setSaveSuccess(false);
    
    const success = await onStatusUpdate(enquiry.id, newStatus);
    
    setIsSaving(false);
    if (success) {
      setSaveSuccess(true);
      // Automatically fade out the success toast after 3 seconds
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/10 backdrop-blur-[1px] z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`} 
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`fixed inset-y-0 right-0 w-full sm:w-[480px] bg-white border-l border-[#E2E8F0] z-50 shadow-[-8px_0_40px_rgba(0,0,0,0.03)] flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        
        {/* Header */}
        <div className="h-[72px] px-6 border-b border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-[16px] font-bold text-[#0F172A]">
              Enquiry Details
            </h3>
            <StatusBadge status={enquiry.status} />
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-slate-400 hover:text-[#0F172A] transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {/* Success Toast */}
          {saveSuccess && (
            <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-100/50 p-3 text-[13.5px] font-semibold text-emerald-600 animate-fade-in select-none">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Status updated successfully!</span>
            </div>
          )}

          {/* Details list */}
          <div className="space-y-6">
            
            {/* Full Name */}
            <div className="flex gap-4">
              <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                <User className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Full Name</span>
                <span className="text-[15px] font-bold text-[#0F172A]">{enquiry.full_name}</span>
              </div>
            </div>

            {/* Business Name */}
            <div className="flex gap-4">
              <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                <Building2 className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Business</span>
                <span className="text-[15px] font-semibold text-[#0f172a]">
                  {enquiry.business_name || "—"}
                </span>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex gap-4">
              <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email</span>
                <a href={`mailto:${enquiry.email}`} className="text-[15px] font-semibold text-[#2563EB] hover:underline">
                  {enquiry.email}
                </a>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex gap-4">
              <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Phone</span>
                <span className="text-[15px] font-semibold text-[#0F172A]">
                  {enquiry.phone_number || "—"}
                </span>
              </div>
            </div>

            {/* Submitted Date */}
            <div className="flex gap-4">
              <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                <Calendar className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Submitted</span>
                <span className="text-[15px] font-semibold text-[#0F172A]">
                  {formatDate(enquiry.created_at)}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="flex gap-4 items-start pt-2 border-t border-slate-100">
              <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-1.5 w-full">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Project Details</span>
                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4 text-[14px] leading-relaxed text-slate-600 font-medium whitespace-pre-wrap">
                  {enquiry.project_details}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer controls */}
        <div className="p-6 border-t border-[#E2E8F0] flex items-center justify-between bg-slate-50/50">
          
          {/* Status selector */}
          <div className="flex items-center gap-2.5">
            <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">
              Status:
            </span>
            <StatusSelect 
              value={enquiry.status} 
              onChange={handleStatusChange} 
              disabled={isSaving}
            />
          </div>

          {/* Loader or Close */}
          <div className="flex items-center gap-3">
            {isSaving && (
              <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#2563EB]">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Saving...</span>
              </div>
            )}
            <button
              onClick={onClose}
              disabled={isSaving}
              className="h-10 rounded-[12px] border border-[#E2E8F0] bg-white hover:bg-slate-50 text-[14px] font-semibold text-slate-600 px-5 transition-colors cursor-pointer select-none disabled:pointer-events-none"
            >
              Close
            </button>
          </div>

        </div>

      </aside>
    </>
  );
}
