import { Loader2 } from "lucide-react";

export default function AdminLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-8 w-8 text-[#2563EB] animate-spin" />
        <span className="text-sm font-medium text-slate-500">Loading Admin Panel...</span>
      </div>
    </div>
  );
}
