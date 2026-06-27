import React from "react";
import { Loader2, Trash2 } from "lucide-react";

interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

export default function DeleteDialog({ isOpen, onClose, onConfirm, isLoading }: DeleteDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Dialog Body */}
      <div className="relative bg-white rounded-[24px] border border-[#E2E8F0] max-w-sm w-full p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] z-10 space-y-6">
        
        {/* Warning Icon & Prompt */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="h-12 w-12 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
            <Trash2 className="h-5 w-5" />
          </div>
          <h3 className="text-[17px] font-bold text-[#0F172A]">
            Confirm Deletion
          </h3>
          <p className="text-[13.5px] leading-relaxed text-slate-500 font-medium">
            Are you sure you want to delete this enquiry? This action is permanent and cannot be undone.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            disabled={isLoading}
            onClick={onClose}
            className="flex-grow h-10 rounded-[12px] border border-[#E2E8F0] hover:bg-slate-50 text-[14px] font-semibold text-slate-600 transition-colors cursor-pointer select-none"
          >
            Cancel
          </button>
          
          <button
            disabled={isLoading}
            onClick={onConfirm}
            className="flex-grow h-10 rounded-[12px] bg-rose-600 hover:bg-rose-700 text-white text-[14px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer select-none disabled:pointer-events-none disabled:bg-rose-400"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <span>Delete</span>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
