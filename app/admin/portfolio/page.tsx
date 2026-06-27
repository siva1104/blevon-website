"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminLayoutWrapper from "@/components/admin/AdminLayoutWrapper";
import StatsCards from "@/components/admin/portfolio/StatsCards";
import SearchBar from "@/components/admin/portfolio/SearchBar";
import FilterBar from "@/components/admin/portfolio/FilterBar";
import PortfolioGrid from "@/components/admin/portfolio/PortfolioGrid";
import PortfolioTable from "@/components/admin/portfolio/PortfolioTable";
import ProjectForm from "@/components/admin/portfolio/ProjectForm";
import ProjectDrawer from "@/components/admin/portfolio/ProjectDrawer";
import DeleteDialog from "@/components/admin/portfolio/DeleteDialog";
import Pagination from "@/components/admin/portfolio/Pagination";
import LoadingSkeleton from "@/components/admin/portfolio/LoadingSkeleton";
import EmptyState from "@/components/admin/portfolio/EmptyState";
import { LayoutGrid, List, Plus, AlertCircle, RotateCcw, ArrowLeft } from "lucide-react";

import { Project } from "@/types/portfolio";

const PAGE_SIZE = 10;

export default function PortfolioPage() {
  const supabase = useMemo(() => createClient(), []);

  // Navigation / View modes
  const [viewMode, setViewMode] = useState<"list" | "add" | "edit">("list");
  const [layoutType, setLayoutType] = useState<"grid" | "table">("grid");

  // Query results states
  const [projects, setProjects] = useState<Project[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [stats, setStats] = useState({ total: 0, published: 0, drafts: 0, ongoing: 0 });

  // UX states
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filter queries states
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  // Modals & drawers states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // --- All function declarations BEFORE any useEffect that references them ---

  const fetchStats = useCallback(async () => {
    const { count: total, error: e1 } = await supabase
      .from("portfolio_projects")
      .select("*", { count: "exact", head: true });

    const { count: published, error: e2 } = await supabase
      .from("portfolio_projects")
      .select("*", { count: "exact", head: true })
      .eq("published", true);

    const { count: drafts, error: e3 } = await supabase
      .from("portfolio_projects")
      .select("*", { count: "exact", head: true })
      .eq("published", false);

    const { count: ongoing, error: e4 } = await supabase
      .from("portfolio_projects")
      .select("*", { count: "exact", head: true })
      .eq("status", "Ongoing");

    if (e1 || e2 || e3 || e4) {
      throw new Error("Stats fetch failed");
    }

    setStats({
      total: total || 0,
      published: published || 0,
      drafts: drafts || 0,
      ongoing: ongoing || 0
    });
  }, [supabase]);

  const fetchProjectsList = useCallback(async (
    page: number,
    search: string,
    cat: string,
    status: string,
    sort: string
  ) => {
    let query = supabase
      .from("portfolio_projects")
      .select("*", { count: "exact" });

    // Category filter
    if (cat !== "all") {
      query = query.eq("category", cat);
    }

    // Status filter
    if (status === "published") {
      query = query.eq("published", true);
    } else if (status === "draft") {
      query = query.eq("published", false);
    } else if (status === "completed") {
      query = query.eq("status", "Completed");
    } else if (status === "ongoing") {
      query = query.eq("status", "Ongoing");
    }

    // Search filter (Title, Client, Category)
    if (search.trim()) {
      query = query.or(
        `title.ilike.%${search.trim()}%,client_name.ilike.%${search.trim()}%,category.ilike.%${search.trim()}%`
      );
    }

    // Sorting
    if (sort === "oldest") {
      query = query.order("created_at", { ascending: true });
    } else if (sort === "alphabetical") {
      query = query.order("title", { ascending: true });
    } else if (sort === "order") {
      query = query.order("display_order", { ascending: true });
    } else {
      // Default: newest
      query = query.order("created_at", { ascending: false });
    }

    // Pagination Range Boundary
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);

    const { data, error: fetchError, count } = await query;

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    setProjects((data as Project[]) || []);
    setTotalCount(count || 0);
  }, [supabase]);

  const loadAllData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      await Promise.all([
        fetchStats(),
        fetchProjectsList(currentPage, debouncedSearch, categoryFilter, statusFilter, sortOrder)
      ]);
    } catch (err) {
      console.error("Failed to load portfolio database:", err);
      setError("Unable to load portfolio projects. Check network connectivity and retry.");
    } finally {
      setIsLoading(false);
    }
  }, [fetchStats, fetchProjectsList, currentPage, debouncedSearch, categoryFilter, statusFilter, sortOrder]);

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
    fetchProjectsList(1, debouncedSearch, categoryFilter, statusFilter, sortOrder);
  }, [debouncedSearch, categoryFilter, statusFilter, sortOrder, fetchProjectsList]);

  // Fetch list on page changes
  useEffect(() => {
    fetchProjectsList(currentPage, debouncedSearch, categoryFilter, statusFilter, sortOrder);
  }, [currentPage, debouncedSearch, categoryFilter, statusFilter, sortOrder, fetchProjectsList]);

  // Initial load
  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  // --- Event handlers ---

  // Extract relative storage path from full public URL
  const getStoragePathFromUrl = (url: string) => {
    if (!url) return null;
    const parts = url.split("/public/portfolio-images/");
    if (parts.length > 1) {
      return parts[1];
    }
    return null;
  };

  const handleCreate = async (formData: any) => {
    setIsSubmitting(true);
    try {
      // Check slug uniqueness
      const { data: existing, error: slugErr } = await supabase
        .from("portfolio_projects")
        .select("id")
        .eq("slug", formData.slug)
        .maybeSingle();

      if (slugErr) throw new Error(slugErr.message);

      if (existing) {
        alert("The project slug must be unique. A case study with this slug already exists.");
        setIsSubmitting(false);
        return;
      }

      const { error: insertErr } = await supabase
        .from("portfolio_projects")
        .insert([formData]);

      if (insertErr) throw new Error(insertErr.message);

      setViewMode("list");
      await loadAllData();
    } catch (err: any) {
      console.error("Creation error:", err);
      alert("Failed to save project. Ensure database and storage schemas are fully active.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdate = async (formData: any) => {
    if (!selectedProject) return;
    setIsSubmitting(true);

    try {
      // Check slug uniqueness excluding self
      const { data: existing, error: slugErr } = await supabase
        .from("portfolio_projects")
        .select("id")
        .eq("slug", formData.slug)
        .neq("id", selectedProject.id)
        .maybeSingle();

      if (slugErr) throw new Error(slugErr.message);

      if (existing) {
        alert("The project slug must be unique. Another case study is already using it.");
        setIsSubmitting(false);
        return;
      }

      const { error: updateErr } = await supabase
        .from("portfolio_projects")
        .update({ ...formData, updated_at: new Date().toISOString() })
        .eq("id", selectedProject.id);

      if (updateErr) throw new Error(updateErr.message);

      setSelectedProject(null);
      setViewMode("list");
      await loadAllData();
    } catch (err: any) {
      console.error("Update error:", err);
      alert("Failed to update project. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteTrigger = (id: string) => {
    const proj = projects.find((p) => p.id === id);
    if (proj) {
      setDeleteTitle(proj.title);
      setDeleteId(id);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deleteId) return;
    setIsDeleting(true);

    try {
      // Retrieve cover and gallery paths to delete media assets
      const proj = projects.find((p) => p.id === deleteId);
      if (proj) {
        const filePaths: string[] = [];
        
        const coverPath = getStoragePathFromUrl(proj.cover_image);
        if (coverPath) filePaths.push(coverPath);

        if (proj.gallery_images && proj.gallery_images.length > 0) {
          proj.gallery_images.forEach((url) => {
            const galleryPath = getStoragePathFromUrl(url);
            if (galleryPath) filePaths.push(galleryPath);
          });
        }

        // Delete from Storage
        if (filePaths.length > 0) {
          await supabase.storage
            .from("portfolio-images")
            .remove(filePaths);
        }
      }

      // Delete from Database
      const { error: deleteErr } = await supabase
        .from("portfolio_projects")
        .delete()
        .eq("id", deleteId);

      if (deleteErr) throw new Error(deleteErr.message);

      setDeleteId(null);
      
      // Page safety re-evaluation
      const newTotal = totalCount - 1;
      const totalPages = Math.ceil(newTotal / PAGE_SIZE);
      const targetPage = currentPage > totalPages && totalPages > 0 ? totalPages : currentPage;
      setCurrentPage(targetPage);

      await loadAllData();
    } catch (err: any) {
      console.error("Deletion error:", err);
      alert("Failed to delete project. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEditTrigger = (project: Project) => {
    setSelectedProject(project);
    setViewMode("edit");
  };

  const handleOpenDrawer = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleAddMode = () => {
    setSelectedProject(null);
    setViewMode("add");
  };

  return (
    <AdminLayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-8 select-none">
        
        {/* Header Widget */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-[26px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Portfolio Management
            </h1>
            <p className="text-[14px] text-slate-500 font-medium">
              Create, edit, sort, and publish portfolio case studies.
            </p>
          </div>

          {/* Add project button (List view only) */}
          {viewMode === "list" && !error && !isLoading && (
            <button
              onClick={handleAddMode}
              className="h-11 rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white text-[14px] font-bold flex items-center justify-center gap-1.5 px-5 shadow-sm hover:shadow-lg hover:shadow-[#2563EB]/15 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer select-none"
            >
              <Plus className="h-4 w-4" />
              <span>New Project</span>
            </button>
          )}

          {/* Back to list button (Form views) */}
          {viewMode !== "list" && (
            <button
              onClick={() => setViewMode("list")}
              className="h-11 rounded-[12px] border border-[#E2E8F0] hover:bg-slate-50 text-[14px] font-bold text-slate-600 px-5 flex items-center gap-1.5 cursor-pointer select-none transition-colors"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
              <span>Back to Projects</span>
            </button>
          )}
        </div>

        {/* Error Screen */}
        {error ? (
          <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-12 text-center flex flex-col items-center justify-center space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.008)] min-h-[300px]">
            <div className="h-12 w-12 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[16px] font-bold text-[#0F172A]">
                Unable to load portfolio
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
        ) : viewMode === "add" ? (
          // Add Form View
          <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.008)]">
            <h2 className="text-[18px] font-extrabold text-[#0F172A] tracking-tight mb-6 pb-4 border-b border-slate-100">
              New Portfolio Project
            </h2>
            <ProjectForm 
              onSave={handleCreate} 
              onCancel={() => setViewMode("list")} 
              isLoading={isSubmitting} 
            />
          </div>
        ) : viewMode === "edit" ? (
          // Edit Form View
          <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.008)]">
            <h2 className="text-[18px] font-extrabold text-[#0F172A] tracking-tight mb-6 pb-4 border-b border-slate-100">
              Edit Portfolio Project
            </h2>
            <ProjectForm
              initialData={selectedProject || undefined}
              onSave={handleUpdate}
              onCancel={() => setViewMode("list")}
              isLoading={isSubmitting}
            />
          </div>
        ) : (
          // Main List View
          <div className="space-y-6">
            
            {/* Stats Cards Widget */}
            <StatsCards
              total={stats.total}
              published={stats.published}
              drafts={stats.drafts}
              ongoing={stats.ongoing}
            />

            {/* Filter and Search Bar Widget row */}
            <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.005)] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-grow max-w-md w-full">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
              
              {/* Display view toggle & filter parameters */}
              <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
                <div className="flex border border-[#E2E8F0] rounded-[12px] p-0.5 bg-slate-50 shrink-0">
                  <button
                    onClick={() => setLayoutType("grid")}
                    className={`h-9 w-9 rounded-lg flex items-center justify-center transition-all ${
                      layoutType === "grid" 
                        ? "bg-white text-[#2563EB] shadow-sm font-bold" 
                        : "text-slate-400 hover:text-slate-650"
                    } cursor-pointer`}
                    title="Grid view"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setLayoutType("table")}
                    className={`h-9 w-9 rounded-lg flex items-center justify-center transition-all ${
                      layoutType === "table" 
                        ? "bg-white text-[#2563EB] shadow-sm font-bold" 
                        : "text-slate-400 hover:text-slate-650"
                    } cursor-pointer`}
                    title="List table view"
                  >
                    <List className="h-4.5 w-4.5" />
                  </button>
                </div>

                <FilterBar
                  categoryFilter={categoryFilter}
                  onCategoryChange={setCategoryFilter}
                  statusFilter={statusFilter}
                  onStatusChange={setStatusFilter}
                  sortOrder={sortOrder}
                  onSortChange={setSortOrder}
                />
              </div>
            </div>

            {/* Projects main render area */}
            {projects.length === 0 ? (
              <EmptyState onCreateClick={handleAddMode} />
            ) : (
              <div className="space-y-6">
                
                {layoutType === "grid" ? (
                  <PortfolioGrid
                    projects={projects}
                    onEdit={handleEditTrigger}
                    onDelete={handleDeleteTrigger}
                    onView={handleOpenDrawer}
                  />
                ) : (
                  <PortfolioTable
                    projects={projects}
                    onEdit={handleEditTrigger}
                    onDelete={handleDeleteTrigger}
                    onView={handleOpenDrawer}
                  />
                )}

                {/* Pagination */}
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
        <ProjectDrawer
          project={selectedProject}
          isOpen={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
            setSelectedProject(null);
          }}
        />

        {/* Delete Confirmation Popup */}
        <DeleteDialog
          isOpen={deleteId !== null}
          title={deleteTitle}
          onClose={() => setDeleteId(null)}
          onConfirm={handleDeleteConfirm}
          isLoading={isDeleting}
        />

      </div>
    </AdminLayoutWrapper>
  );
}
