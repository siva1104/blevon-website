"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Mail, 
  Briefcase, 
  FileText, 
  Settings, 
  LogOut,
  X,
  MessageSquare
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface MenuItem {
  label: string;
  href: string;
  icon: React.ComponentType<any>;
  disabled?: boolean;
}

const menuItems: MenuItem[] = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Contact Enquiries", href: "/admin/enquiries", icon: Mail },
  { label: "Portfolio", href: "/admin/portfolio", icon: Briefcase },
  { label: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
  { label: "Website Content", href: "/admin/content", icon: FileText },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside className={`fixed inset-y-0 left-0 w-[280px] bg-white border-r border-[#E2E8F0] z-50 flex flex-col justify-between shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.015)] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        
        <div>
          {/* Logo & Header info */}
          <div className="h-[72px] px-6 border-b border-[#E2E8F0] flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center gap-2.5">
              <Image
                src="/logo.svg"
                alt="Blevon Logo"
                width={36}
                height={36}
                className="h-8.5 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#0F172A] tracking-tight leading-none mb-1">
                  Admin Panel
                </span>
                <span className="text-[10px] font-medium text-slate-400 leading-none">
                  Website Management
                </span>
              </div>
            </Link>

            {/* Mobile close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden h-8 w-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-slate-400 hover:text-[#0F172A] transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return item.disabled ? (
                <div
                  key={item.label}
                  title="Coming soon"
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-350 cursor-not-allowed select-none text-[14px] font-medium"
                >
                  <Icon className="h-4.5 w-4.5 shrink-0" />
                  <span>{item.label}</span>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-[14px] font-semibold transition-all duration-200 group ${
                    isActive 
                      ? "bg-blue-50 text-[#2563EB]" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-[#0F172A]"
                  }`}
                >
                  <Icon className={`h-4.5 w-4.5 shrink-0 transition-colors ${
                    isActive ? "text-[#2563EB]" : "text-slate-400 group-hover:text-[#0F172A]"
                  }`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sign-out area */}
        <div className="p-4 border-t border-[#E2E8F0]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[14px] font-semibold text-rose-500 hover:bg-rose-50/50 hover:text-rose-600 transition-colors duration-200"
          >
            <LogOut className="h-4.5 w-4.5 shrink-0" />
            <span>Sign Out</span>
          </button>
        </div>

      </aside>
    </>
  );
}
