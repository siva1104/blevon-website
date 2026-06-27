"use client";

import React from "react";
import { 
  Zap, 
  User, 
  Briefcase, 
  Star, 
  Activity, 
  FolderHeart, 
  Phone, 
  Dock, 
  Search 
} from "lucide-react";

interface ContentSidebarProps {
  activeSection: string;
  onSectionChange: (sectionKey: string) => void;
  hasChanges: boolean;
}

const navItems = [
  { label: "Hero", key: "hero", icon: Zap },
  { label: "About", key: "about", icon: User },
  { label: "Services", key: "services", icon: Briefcase },
  { label: "Why Choose Us", key: "why_choose_us", icon: Star },
  { label: "Process", key: "process", icon: Activity },
  { label: "Portfolio Section", key: "portfolio", icon: FolderHeart },
  { label: "Contact Section", key: "contact", icon: Phone },
  { label: "Footer", key: "footer", icon: Dock },
  { label: "SEO Settings", key: "seo", icon: Search },
];

export default function ContentSidebar({ activeSection, onSectionChange, hasChanges }: ContentSidebarProps) {
  
  const handleItemClick = (key: string) => {
    if (hasChanges) {
      const confirmLeave = window.confirm("You have unsaved changes. Are you sure you want to navigate away?");
      if (!confirmLeave) return;
    }
    onSectionChange(key);
  };

  return (
    <aside className="w-full lg:w-60 bg-white border border-[#E2E8F0] rounded-[20px] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.005)] select-none shrink-0">
      <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.key;
          
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => handleItemClick(item.key)}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-[13.5px] font-bold transition-all duration-200 cursor-pointer whitespace-nowrap lg:w-full ${
                isActive 
                  ? "bg-blue-50 text-[#2563EB]" 
                  : "text-slate-550 hover:bg-slate-50 hover:text-[#0F172A]"
              }`}
            >
              <Icon className={`h-4.5 w-4.5 shrink-0 ${
                isActive ? "text-[#2563EB]" : "text-slate-400"
              }`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
