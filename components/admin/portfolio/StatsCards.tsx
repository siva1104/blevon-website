import React from "react";
import { Folder, Globe, FileText, Activity } from "lucide-react";

interface StatsCardsProps {
  total: number;
  published: number;
  drafts: number;
  ongoing: number;
}

export default function StatsCards({ total, published, drafts, ongoing }: StatsCardsProps) {
  const cardData = [
    { label: "Total Projects", value: total, icon: Folder, color: "text-blue-500", bg: "bg-blue-50 border-blue-100/50" },
    { label: "Published", value: published, icon: Globe, color: "text-emerald-500", bg: "bg-emerald-50 border-emerald-100/50" },
    { label: "Drafts", value: drafts, icon: FileText, color: "text-slate-400", bg: "bg-slate-50 border-slate-200" },
    { label: "Ongoing", value: ongoing, icon: Activity, color: "text-indigo-500", bg: "bg-indigo-50 border-indigo-100/50" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
      {cardData.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className="bg-white rounded-[20px] border border-[#E2E8F0] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.008)] flex flex-col justify-between h-[120px] hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold text-slate-400">
                {card.label}
              </span>
              <div className={`h-9 w-9 rounded-xl border flex items-center justify-center ${card.color} ${card.bg} group-hover:scale-105 transition-transform duration-300`}>
                <Icon className="h-4.5 w-4.5" />
              </div>
            </div>
            <div>
              <h3 className="text-[26px] font-extrabold text-[#0F172A] tracking-tight leading-none">
                {card.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
