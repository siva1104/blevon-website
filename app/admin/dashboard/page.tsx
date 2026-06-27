"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Clock, 
  Briefcase, 
  Eye, 
  ArrowRight, 
  Settings, 
  MessageSquare,
  ShieldCheck,
  Loader2,
  Inbox
} from "lucide-react";
import AdminLayoutWrapper from "@/components/admin/AdminLayoutWrapper";
import { createClient } from "@/lib/supabase/client";

// Stagger animation container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Item animation slide up
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function AdminDashboardPage() {
  const supabase = useMemo(() => createClient(), []);
  const [statsLoading, setStatsLoading] = useState(true);
  const [totalEnquiries, setTotalEnquiries] = useState(0);
  const [todayEnquiries, setTodayEnquiries] = useState(0);
  const [portfolioCount, setPortfolioCount] = useState(0);

  const fetchStats = useCallback(async () => {
    setStatsLoading(true);
    try {
      // Total enquiries
      const { count: totalCount } = await supabase
        .from("contact_inquiries")
        .select("*", { count: "exact", head: true });

      // Today's enquiries
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);
      const { count: todayCount } = await supabase
        .from("contact_inquiries")
        .select("*", { count: "exact", head: true })
        .gte("created_at", todayStart.toISOString());

      // Portfolio projects
      const { count: projCount } = await supabase
        .from("portfolio_projects")
        .select("*", { count: "exact", head: true });

      setTotalEnquiries(totalCount ?? 0);
      setTodayEnquiries(todayCount ?? 0);
      setPortfolioCount(projCount ?? 0);
    } catch (err) {
      console.error("Failed to fetch dashboard stats:", err);
    } finally {
      setStatsLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  // Stat cards configurations — driven by live data
  const stats = [
    { label: "Total Enquiries", value: statsLoading ? "…" : String(totalEnquiries), icon: Mail, color: "text-blue-500", bg: "bg-blue-50 border-blue-100/50" },
    { label: "Today's Enquiries", value: statsLoading ? "…" : String(todayEnquiries), icon: Clock, color: "text-amber-500", bg: "bg-amber-50 border-amber-100/50" },
    { label: "Portfolio Projects", value: statsLoading ? "…" : String(portfolioCount), icon: Briefcase, color: "text-indigo-500", bg: "bg-indigo-50 border-indigo-100/50" },
    { label: "Website Visits", value: "Coming Soon", icon: Eye, color: "text-slate-400", bg: "bg-slate-50 border-slate-100" },
  ];

  // Quick Action items
  const quickActions = [
    { 
      title: "View Enquiries", 
      description: "Review client briefs, project requirements, and manage statuses.",
      icon: MessageSquare, 
      actionLabel: "View Inbox",
      href: "/admin/enquiries",
      color: "text-blue-600 bg-blue-50/50 border-blue-100/30"
    },
    { 
      title: "Manage Portfolio", 
      description: "Upload mockups, configure descriptions, and add new case studies.",
      icon: Briefcase, 
      actionLabel: "Add Project",
      href: "/admin/portfolio",
      color: "text-indigo-600 bg-indigo-50/50 border-indigo-100/30"
    },
    { 
      title: "Website Settings", 
      description: "Configure system titles, social endpoints, and site maintenance flags.",
      icon: Settings, 
      actionLabel: "Open Settings",
      href: "/admin/settings",
      color: "text-slate-600 bg-slate-50/50 border-slate-100/30"
    },
  ];

  return (
    <AdminLayoutWrapper>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-8"
      >
        
        {/* Welcome Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-[20px] border border-[#E2E8F0] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <h1 className="text-[26px] font-extrabold text-[#0F172A] tracking-tight leading-tight flex items-center gap-2">
              Welcome back 👋
            </h1>
            <p className="text-[14px] text-slate-500 font-medium">
              Manage your website, enquiries, portfolio, and content from one place.
            </p>
          </div>
          
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100/50 px-3 py-1 text-[12px] font-bold text-emerald-600 self-start md:self-auto">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Secure Admin Console</span>
          </div>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            const isComingSoon = stat.value === "Coming Soon";
            
            return (
              <div
                key={stat.label}
                className="bg-white rounded-[20px] border border-[#E2E8F0] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.008)] flex flex-col justify-between h-[140px] hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold text-slate-400">
                    {stat.label}
                  </span>
                  <div className={`h-9 w-9 rounded-xl border flex items-center justify-center ${stat.color} ${stat.bg} group-hover:scale-105 transition-transform duration-350`}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                </div>
                <div>
                  <h3 className={`font-extrabold tracking-tight ${
                    isComingSoon ? "text-[16px] text-slate-400" : "text-[28px] text-[#0F172A]"
                  }`}>
                    {statsLoading && !isComingSoon ? (
                      <Loader2 className="h-5 w-5 animate-spin text-slate-300" />
                    ) : (
                      stat.value
                    )}
                  </h3>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Main Dashboard section: Left Actions & Right Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Actions column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-[18px] font-bold text-[#0F172A] tracking-tight">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 gap-5">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <div
                    key={action.title}
                    className="bg-white rounded-[20px] border border-[#E2E8F0] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.008)] hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-0.5 transition-all duration-200 group flex items-start gap-4"
                  >
                    <div className={`h-11 w-11 rounded-2xl border flex items-center justify-center shrink-0 ${action.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h3 className="text-[15px] font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-slate-500 font-medium">
                        {action.description}
                      </p>
                      <div className="pt-1 flex items-center gap-1 text-[12px] font-bold text-[#2563EB] select-none">
                        <span>{action.actionLabel}</span>
                        <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Recent Activity Timeline */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-[18px] font-bold text-[#0F172A] tracking-tight">
              Recent Activity
            </h2>
            <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.008)]">
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                  <Inbox className="h-5.5 w-5.5 text-slate-300" />
                </div>
                <p className="text-[14px] font-bold text-slate-400">
                  No recent activity
                </p>
                <p className="text-[12px] text-slate-400/70 font-medium mt-1">
                  Activity will appear here as you manage your website.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </AdminLayoutWrapper>
  );
}
