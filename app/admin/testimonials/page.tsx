"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminLayoutWrapper from "@/components/admin/AdminLayoutWrapper";
import StatsCards from "@/components/admin/testimonials/StatsCards";
import SearchBar from "@/components/admin/testimonials/SearchBar";
import FilterBar from "@/components/admin/testimonials/FilterBar";
import TestimonialsTable from "@/components/admin/testimonials/TestimonialsTable";
import TestimonialForm from "@/components/admin/testimonials/TestimonialForm";
import DeleteDialog from "@/components/admin/testimonials/DeleteDialog";
import EmptyState from "@/components/admin/testimonials/EmptyState";
import LoadingSkeleton from "@/components/admin/testimonials/LoadingSkeleton";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: string;
  customer_name: string;
  company_name: string;
  designation: string;
  review: string;
  rating: number;
  customer_image: string;
  featured: boolean;
  published: boolean;
  display_order: number;
  created_at: string;
}

export default function TestimonialsAdminPage() {
  const supabase = createClient();

  // Data states
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [stats, setStats] = useState({ total: 0, published: 0, drafts: 0, featured: 0 });

  // UI state
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("display_order_asc");

  // Drawer / Form state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Testimonial | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Delete dialog state
  const [deletingItem, setDeletingItem] = useState<Testimonial | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchTestimonials = useCallback(async () => {
    setIsLoading(true);
    try {
      let query = supabase.from("testimonials").select("*");

      // Filter by Status Tab
      if (activeFilter === "published") {
        query = query.eq("published", true);
      } else if (activeFilter === "draft") {
        query = query.eq("published", false);
      } else if (activeFilter === "featured") {
        query = query.eq("featured", true);
      }

      // Sorter
      if (sortBy === "display_order_asc") {
        query = query.order("display_order", { ascending: true });
      } else if (sortBy === "display_order_desc") {
        query = query.order("display_order", { ascending: false });
      } else if (sortBy === "created_at_desc") {
        query = query.order("created_at", { ascending: false });
      } else if (sortBy === "created_at_asc") {
        query = query.order("created_at", { ascending: true });
      } else if (sortBy === "rating_desc") {
        query = query.order("rating", { ascending: false });
      } else if (sortBy === "rating_asc") {
        query = query.order("rating", { ascending: true });
      }

      const { data, error } = await query;
      if (error) throw new Error(error.message);

      setTestimonials(data || []);

      // Calculate Stats (queries all data for counts)
      const { data: allData, error: statsErr } = await supabase.from("testimonials").select("published, featured");
      if (!statsErr && allData) {
        const total = allData.length;
        const published = allData.filter((t) => t.published).length;
        const drafts = total - published;
        const featured = allData.filter((t) => t.featured).length;
        setStats({ total, published, drafts, featured });
      }

    } catch (err) {
      console.error("Testimonials fetch failure:", err);
    } finally {
      setIsLoading(false);
    }
  }, [activeFilter, sortBy, supabase]);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  // Inline Toggles
  const handleToggleFeatured = async (id: string, current: boolean) => {
    try {
      const { error } = await supabase
        .from("testimonials")
        .update({ featured: !current })
        .eq("id", id);
      
      if (error) throw new Error(error.message);
      
      // Update local state directly
      setTestimonials((prev) =>
        prev.map((t) => (t.id === id ? { ...t, featured: !current } : t))
      );
      setStats((prev) => ({
        ...prev,
        featured: current ? prev.featured - 1 : prev.featured + 1
      }));
    } catch (err) {
      console.error("Featured toggle failure:", err);
    }
  };

  const handleTogglePublished = async (id: string, current: boolean) => {
    try {
      const { error } = await supabase
        .from("testimonials")
        .update({ published: !current })
        .eq("id", id);
      
      if (error) throw new Error(error.message);
      
      // Update local state directly
      setTestimonials((prev) =>
        prev.map((t) => (t.id === id ? { ...t, published: !current } : t))
      );
      setStats((prev) => {
        const published = current ? prev.published - 1 : prev.published + 1;
        const drafts = prev.total - published;
        return { ...prev, published, drafts };
      });
    } catch (err) {
      console.error("Published toggle failure:", err);
    }
  };

  // Form Submit
  const handleFormSubmit = async (formData: any) => {
    setIsSaving(true);
    try {
      if (editingItem) {
        // Edit Mode
        const { error } = await supabase
          .from("testimonials")
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq("id", editingItem.id);

        if (error) throw new Error(error.message);
      } else {
        // Add Mode
        const { error } = await supabase
          .from("testimonials")
          .insert([formData]);

        if (error) throw new Error(error.message);
      }

      setIsDrawerOpen(false);
      setEditingItem(null);
      await fetchTestimonials();
    } catch (err) {
      console.error("Save testimonial failure:", err);
      alert("Failed to save testimonial. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // Delete Action
  const handleDeleteConfirm = async () => {
    if (!deletingItem) return;
    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from("testimonials")
        .delete()
        .eq("id", deletingItem.id);

      if (error) throw new Error(error.message);

      setDeletingItem(null);
      await fetchTestimonials();
    } catch (err) {
      console.error("Delete testimonial failure:", err);
      alert("Failed to delete testimonial.");
    } finally {
      setIsDeleting(false);
    }
  };

  // Filtered List based on Search Query
  const filteredTestimonials = testimonials.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.customer_name.toLowerCase().includes(q) ||
      (item.company_name && item.company_name.toLowerCase().includes(q)) ||
      item.review.toLowerCase().includes(q)
    );
  });

  return (
    <AdminLayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-8 select-none">
        
        {/* Header Widget */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-[26px] font-extrabold text-[#0F172A] tracking-tight leading-none">
              Client Testimonials
            </h1>
            <p className="text-[14px] text-slate-500 font-medium">
              Manage client reviews, homepage quote sliders, star ratings, and display order.
            </p>
          </div>
          
          <button
            onClick={() => {
              setEditingItem(null);
              setIsDrawerOpen(true);
            }}
            className="h-10 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-[13.5px] font-bold flex items-center justify-center gap-1.5 px-4.5 shadow-sm hover:shadow-blue-500/15 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shrink-0"
          >
            <Plus className="h-4 w-4" />
            <span>Add Testimonial</span>
          </button>
        </div>

        {/* Stats counter widget */}
        <StatsCards 
          total={stats.total}
          published={stats.published}
          drafts={stats.drafts}
          featured={stats.featured}
        />

        {/* Filters control bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white border border-[#E2E8F0] rounded-[20px] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.005)]">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterBar 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {/* Main List */}
        {isLoading ? (
          <LoadingSkeleton />
        ) : filteredTestimonials.length === 0 ? (
          <EmptyState 
            onCreateClick={() => {
              setEditingItem(null);
              setIsDrawerOpen(true);
            }}
          />
        ) : (
          <TestimonialsTable 
            testimonials={filteredTestimonials}
            onEdit={(item) => {
              setEditingItem(item);
              setIsDrawerOpen(true);
            }}
            onDelete={setDeletingItem}
            onToggleFeatured={handleToggleFeatured}
            onTogglePublished={handleTogglePublished}
          />
        )}

        {/* Form Slide-over Drawer */}
        <AnimatePresence>
          {isDrawerOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  if (!isSaving) setIsDrawerOpen(false);
                }}
                className="fixed inset-0 bg-[#0F172A] z-45 cursor-default"
              />

              {/* Drawer Container */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-full max-w-xl bg-white border-l border-[#E2E8F0] shadow-2xl z-50 flex flex-col"
              >
                {/* Header */}
                <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-[17px] font-extrabold text-[#0F172A] tracking-tight">
                    {editingItem ? "Edit Testimonial" : "Add Testimonial"}
                  </h3>
                  <button
                    disabled={isSaving}
                    onClick={() => setIsDrawerOpen(false)}
                    className="h-8 w-8 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-all cursor-pointer disabled:opacity-40"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                {/* Form fields */}
                <div className="flex-grow overflow-y-auto p-6 scrollbar-thin">
                  <TestimonialForm 
                    initialData={editingItem}
                    onSubmit={handleFormSubmit}
                    onCancel={() => setIsDrawerOpen(false)}
                    isSaving={isSaving}
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Delete Dialog */}
        <DeleteDialog 
          isOpen={deletingItem !== null}
          onClose={() => setDeletingItem(null)}
          onConfirm={handleDeleteConfirm}
          customerName={deletingItem?.customer_name || ""}
          isDeleting={isDeleting}
        />

      </div>
    </AdminLayoutWrapper>
  );
}
