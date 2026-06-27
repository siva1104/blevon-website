import React from "react";
import { Mail, Clock, CheckCircle2, ShieldCheck } from "lucide-react";

interface StatsCardsProps {
  total: number;
  newCount: number;
  inProgress: number;
  closed: number;
}

export default function StatsCards({ total, newCount, inProgress, closed }: StatsCardsProps) {
  const cardData = [
    { label: "Total Enquiries", value: total, icon: Mail, color: "text-blue-500", bg: "bg-blue-50 border-blue-100/50" },
    { label: "New Enquiries", value: newCount, icon: ShieldCheck, color: "text-indigo-500", bg: "bg-indigo-50 border-indigo-100/50" },
    { label: "In Progress", value: inProgress, icon: Clock, color: "text-amber-500", bg: "bg-amber-50 border-amber-100/50" },
    { label: "Closed", value: closed, icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50 border-emerald-100/50" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
