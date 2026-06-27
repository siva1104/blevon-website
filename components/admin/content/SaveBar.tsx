import React from "react";
import { Loader2, AlertCircle } from "lucide-react";

interface SaveBarProps {
  hasChanges: boolean;
  onSave: () => void;
  onDiscard: () => void;
  isSaving: boolean;
}

export default function SaveBar({ hasChanges, onSave, onDiscard, isSaving }: SaveBarProps) {
  if (!hasChanges) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0F172A] border border-slate-800/80 rounded-[20px] px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-50 flex items-center justify-between gap-8 min-w-[320px] max-w-lg w-full animate-fade-in select-none">
      
      {/* Alert text */}
      <div className="flex items-center gap-2.5 text-slate-350">
        <AlertCircle className="h-4.5 w-4.5 text-amber-500 shrink-0" />
        <span className="text-[13.5px] font-semibold">Unsaved changes</span>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          disabled={isSaving}
          onClick={onDiscard}
          className="text-[13px] font-bold text-slate-400 hover:text-white px-3 py-2 rounded-lg transition-colors cursor-pointer select-none disabled:opacity-40 disabled:pointer-events-none"
        >
          Discard
        </button>
        
        <button
          type="button"
          disabled={isSaving}
          onClick={onSave}
          className="h-9 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white text-[13px] font-bold flex items-center justify-center gap-1.5 px-4 shadow-sm hover:shadow-[#2563EB]/15 transition-all cursor-pointer select-none disabled:pointer-events-none disabled:bg-blue-400"
        >
          {isSaving ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <span>Save Changes</span>
          )}
        </button>
      </div>

    </div>
  );
}
