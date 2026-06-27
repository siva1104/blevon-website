"use client";

import { usePathname } from "next/navigation";
import { Bell, Search, Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/admin/dashboard") return "Dashboard";
    if (pathname === "/admin/enquiries") return "Contact Enquiries";
    if (pathname === "/admin/portfolio") return "Portfolio Management";
    if (pathname === "/admin/settings") return "System Settings";
    return "Admin Panel";
  };

  return (
    <header className="h-[72px] bg-white border-b border-[#E2E8F0] px-6 md:px-8 flex items-center justify-between sticky top-0 z-30 shrink-0">
      
      {/* Left side: Hamburger (Mobile) + Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden h-10 w-10 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-slate-500 hover:text-[#0F172A] hover:bg-slate-50 transition-all active:scale-95"
          title="Toggle Navigation"
        >
          <Menu className="h-5 w-5" />
        </button>

        <h2 className="text-[16px] font-extrabold text-[#0F172A] tracking-tight">
          {getPageTitle()}
        </h2>
      </div>

      {/* Right side: Search, Notification, Profile */}
      <div className="flex items-center gap-4">
        
        {/* Search bar - UI only */}
        <div className="relative max-w-xs hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-48 lg:w-60 rounded-xl border border-[#E2E8F0] pl-9 pr-4 text-[14px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
        </div>

        {/* Notification Icon - UI only */}
        <button 
          type="button" 
          className="h-10 w-10 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
          title="Notifications"
        >
          <Bell className="h-4.5 w-4.5" />
        </button>

        {/* User profile avatar */}
        <div className="flex items-center gap-3 pl-1 border-l border-[#E2E8F0]">
          <div className="flex flex-col text-right hidden sm:flex">
            <span className="text-[13px] font-bold text-[#0F172A] leading-tight">Admin</span>
            <span className="text-[11px] font-medium text-slate-400">Administrator</span>
          </div>
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-[13px] font-bold shadow-[0_2px_8px_rgba(37,99,235,0.15)]">
            A
          </div>
        </div>

      </div>

    </header>
  );
}
