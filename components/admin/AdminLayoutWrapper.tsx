"use client";

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function AdminLayoutWrapper({ children }: LayoutWrapperProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50/50">
      
      {/* Sidebar Panel */}
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Content Panel */}
      <div className="flex-grow flex flex-col overflow-hidden">
        
        {/* Header Panel */}
        <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />
        
        {/* Main page content area */}
        <main className="flex-grow overflow-y-auto p-6 md:p-8">
          {children}
        </main>
        
      </div>
      
    </div>
  );
}
