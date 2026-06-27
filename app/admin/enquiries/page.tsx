"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminLayoutWrapper from "@/components/admin/AdminLayoutWrapper";
import StatsCards from "@/components/admin/enquiries/StatsCards";
import SearchBar from "@/components/admin/enquiries/SearchBar";
import FilterBar from "@/components/admin/enquiries/FilterBar";
import EnquiryTable from "@/components/admin/enquiries/EnquiryTable";
import Pagination from "@/components/admin/enquiries/Pagination";
import EnquiryDrawer from "@/components/admin/enquiries/EnquiryDrawer";
import DeleteDialog from "@/components/admin/enquiries/DeleteDialog";
import LoadingSkeleton from "@/components/admin/enquiries/LoadingSkeleton";
import EmptyState from "@/components/admin/enquiries/EmptyState";
import { AlertCircle, RotateCcw } from "lucide-react";

interface Enquiry {
  id: string;
  full_name: string;
  business_name: string | null;
  email: string;
  phone_number: string | null;
  project_details: string;
  status: string;
  created_at: string;
}

const PAGE_SIZE = 10;

export default function EnquiriesPage() {
  const supabase = useMemo(() => createClient(), []);

  // Queries states
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [stats, setStats] = useState({ total: 0, newCount: 0, inProgress: 0, closed: 0 });
  
  // UX states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters states
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [currentPage, setCurrentPage] = useState(1);

  // Modals / Drawer states
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // --- All function declarations BEFORE any useEffect that references them ---

  const fetchStats = useCallback(async () => {
    const { count: total, error: e1 } = await supabase
      .from("contact_inquiries")
      .select("*", { count: "exact", head: true });
    
    const { count: newCount, error: e2 } = await supabase
      .from("contact_inquiries")
      .select("*", { count: "exact", head: true })
      .eq("status", "new");

    const { count: inProgress, error: e3 } = await supabase
      .from("contact_inquiries")
      .select("*", { count: "exact", head: true })
      .eq("status", "in_progress");

    const { count: closed, error: e4 } = await supabase
      .from("contact_inquiries")
      .select("*", { count: "exact", head: true })
      .eq("status", "closed");

    if (e1 || e2 || e3 || e4) {
      throw new Error("Failed to load statistics counters.");
    }

    setStats({
      total: total || 0,
      newCount: newCount || 0,
      inProgress: inProgress || 0,
      closed: closed || 0
    });
  }, [supabase]);

  const fetchEnquiriesList = useCallback(async (
    page: number, 
    search: string, 
    status: string, 
    sort: "newest" | "oldest"
  ) => {
    let query = supabase
      .from("contact_inquiries")
      .select("*", { count: "exact" });

    if (status !== "all") {
      query = query.eq("status", status);
    }

    if (search.trim()) {
      query = query.or(
        `full_name.ilike.%${search.trim()}%,business_name.ilike.%${search.trim()}%,email.ilike.%${search.trim()}%,phone_number.ilike.%${search.trim()}%`
      );
    }

    query = query.order("created_at", { ascending: sort === "oldest" });

    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);

    const { data, error: fetchError, count } = await query;

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    setEnquiries((data as Enquiry[]) || []);
    setTotalCount(count || 0);
  }, [supabase]);

  const loadAllData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      await Promise.all([
        fetchStats(),
        fetchEnquiriesList(currentPage, debouncedSearch, statusFilter, sortOrder)
      ]);
    } catch (err) {
      console.error("Failed to load enquiries data:", err);
      setError("Unable to load enquiries. Please check your network connection and try again.");
    } finally {
      setIsLoading(false);
    }
  }, [fetchStats, fetchEnquiriesList, currentPage, debouncedSearch, statusFilter, sortOrder]);

  // --- useEffect hooks (all referenced functions are declared above) ---

  // Handle Search Input Debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Reset page number on filter changes and fetch list
  useEffect(() => {
    setCurrentPage(1);
    fetchEnquiriesList(1, debouncedSearch, statusFilter, sortOrder);
  }, [debouncedSearch, statusFilter, sortOrder, fetchEnquiriesList]);

  // Fetch list on page changes
  useEffect(() => {
    fetchEnquiriesList(currentPage, debouncedSearch, statusFilter, sortOrder);
  }, [currentPage, debouncedSearch, statusFilter, sortOrder, fetchEnquiriesList]);

  // Initial load: Fetch list and fetch global stats counters
  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  // --- Event handlers ---

  const handleStatusUpdate = async (id: string, newStatus: string): Promise<boolean> => {
    try {
      const { error: updateError } = await supabase
        .from("contact_inquiries")
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq("id", id);

      if (updateError) {
        throw new Error(updateError.message);
      }

      // Refresh data
      await Promise.all([
        fetchStats(),
        fetchEnquiriesList(currentPage, debouncedSearch, statusFilter, sortOrder)
      ]);

      // Update the currently viewed drawer model so the badge aligns immediately
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry((prev) => prev ? { ...prev, status: newStatus } : null);
      }

      return true;
    } catch (err) {
      console.error("Status update error:", err);
      alert("Failed to update status. Please try again.");
      return false;
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deleteId) return;

    setIsDeleting(true);
    try {
      const { error: deleteError } = await supabase
        .from("contact_inquiries")
        .delete()
        .eq("id", deleteId);

      if (deleteError) {
        throw new Error(deleteError.message);
      }

      setDeleteId(null);
      
      // If we are deleting the currently opened drawer item, close it
      if (selectedEnquiry && selectedEnquiry.id === deleteId) {
        setIsDrawerOpen(false);
        setSelectedEnquiry(null);
      }

      // If we delete the last item on a page, return to previous page
      const newTotal = totalCount - 1;
      const totalPages = Math.ceil(newTotal / PAGE_SIZE);
      const targetPage = currentPage > totalPages && totalPages > 0 ? totalPages : currentPage;
      setCurrentPage(targetPage);

      // Refresh details
      await Promise.all([
        fetchStats(),
        fetchEnquiriesList(targetPage, debouncedSearch, statusFilter, sortOrder)
      ]);

    } catch (err) {
      console.error("Deletion error:", err);
      alert("Failed to delete enquiry. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleOpenDrawer = (enquiry: Enquiry) => {
    setSelectedEnquiry(enquiry);
    setIsDrawerOpen(true);
  };

  return (
    <AdminLayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-8 select-none">
        
        {/* Header Title */}
        <div className="space-y-1">
          <h1 className="text-[26px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Contact Enquiries
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">
            Manage inquiries, project scoping briefs, and client requests.
          </p>
        </div>

        {/* Error Screen */}
        {error ? (
          <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-12 text-center flex flex-col items-center justify-center space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.008)] min-h-[300px]">
            <div className="h-12 w-12 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[16px] font-bold text-[#0F172A]">
                Unable to load enquiries
              </h3>
              <p className="text-[13.5px] text-slate-400 font-medium max-w-sm mx-auto leading-relaxed">
                {error}
              </p>
            </div>
            <button
              onClick={loadAllData}
              className="h-10 rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white text-[14px] font-semibold flex items-center justify-center gap-1.5 px-5 shadow-sm hover:shadow-lg hover:shadow-[#2563EB]/15 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Retry</span>
            </button>
          </div>
        ) : isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="space-y-6">
            
            {/* Stats Cards Widget */}
            <StatsCards 
              total={stats.total} 
              newCount={stats.newCount} 
              inProgress={stats.inProgress} 
              closed={stats.closed} 
            />

            {/* Filter and Search Bar widget row */}
            <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.005)] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-grow max-w-md w-full">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
              <FilterBar 
                statusFilter={statusFilter} 
                onStatusChange={setStatusFilter}
                sortOrder={sortOrder}
                onSortChange={setSortOrder}
              />
            </div>

            {/* Main Table details card */}
            {enquiries.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-6">
                <EnquiryTable 
                  enquiries={enquiries}
                  onView={handleOpenDrawer}
                  onEditStatus={handleOpenDrawer}
                  onDelete={setDeleteId}
                />
                
                {/* Pagination footer navigation */}
                <Pagination 
                  currentPage={currentPage}
                  totalCount={totalCount}
                  pageSize={PAGE_SIZE}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}

          </div>
        )}

        {/* View Details Drawer */}
        <EnquiryDrawer 
          enquiry={selectedEnquiry}
          isOpen={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
            setSelectedEnquiry(null);
          }}
          onStatusUpdate={handleStatusUpdate}
        />

        {/* Delete Confirmation Popup */}
        <DeleteDialog 
          isOpen={deleteId !== null}
          onClose={() => setDeleteId(null)}
          onConfirm={handleDeleteConfirm}
          isLoading={isDeleting}
        />

      </div>
    </AdminLayoutWrapper>
  );
}
