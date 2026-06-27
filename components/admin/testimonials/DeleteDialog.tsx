import React from "react";
import { AlertTriangle, Loader2 } from "lucide-react";

interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  customerName: string;
  isDeleting: boolean;
}

export default function DeleteDialog({ isOpen, onClose, onConfirm, customerName, isDeleting }: DeleteDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-50 flex items-center justify-center p-4 select-none">
      
      {/* Modal Box */}
      <div className="bg-white border border-[#E2E8F0] rounded-[24px] max-w-md w-full p-6 shadow-2xl space-y-6 animate-scale-in">
        
        {/* Warning Icon & Heading */}
        <div className="flex gap-4 items-start">
          <div className="h-10 w-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shrink-0">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-[16px] font-bold text-[#0F172A]">
              Delete Testimonial?
            </h3>
            <p className="text-[13.5px] text-slate-450 leading-relaxed font-medium">
              Are you sure you want to delete the testimonial from <strong className="text-slate-800 font-bold">{customerName}</strong>? This action is permanent and cannot be undone.
            </p>
          </div>
        </div>

        {/* Action triggers */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            disabled={isDeleting}
            onClick={onClose}
            className="h-9 px-4 rounded-xl border border-[#E2E8F0] hover:bg-slate-50 text-slate-600 text-[13px] font-bold transition-colors cursor-pointer select-none disabled:opacity-40"
          >
            Cancel
          </button>
          
          <button
            type="button"
            disabled={isDeleting}
            onClick={onConfirm}
            className="h-9 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-[13px] font-bold flex items-center justify-center gap-1.5 shadow-sm hover:shadow-rose-600/15 transition-all cursor-pointer select-none disabled:bg-rose-400 disabled:pointer-events-none"
          >
            {isDeleting ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Deleting...</span>
              </>
            ) : (
              <span>Delete Testimonial</span>
            )}
          </button>
        </div>

      </div>

    </div>
  );
}
