"use client";

import React, { useState, useEffect } from "react";
import ImageUploader from "./ImageUploader";
import RatingSelector from "./RatingSelector";
import { Loader2 } from "lucide-react";

interface TestimonialFormData {
  customer_name: string;
  company_name: string;
  designation: string;
  review: string;
  rating: number;
  customer_image: string;
  featured: boolean;
  published: boolean;
  display_order: number;
}

interface TestimonialFormProps {
  initialData?: TestimonialFormData | null;
  onSubmit: (data: TestimonialFormData) => void;
  onCancel: () => void;
  isSaving: boolean;
}

export default function TestimonialForm({ initialData, onSubmit, onCancel, isSaving }: TestimonialFormProps) {
  const [customerName, setCustomerName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [customerImage, setCustomerImage] = useState("");
  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(true);
  const [displayOrder, setDisplayOrder] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setCustomerName(initialData.customer_name || "");
      setCompanyName(initialData.company_name || "");
      setDesignation(initialData.designation || "");
      setReview(initialData.review || "");
      setRating(initialData.rating || 5);
      setCustomerImage(initialData.customer_image || "");
      setFeatured(!!initialData.featured);
      setPublished(!!initialData.published);
      setDisplayOrder(initialData.display_order || 0);
    } else {
      setCustomerName("");
      setCompanyName("");
      setDesignation("");
      setReview("");
      setRating(5);
      setCustomerImage("");
      setFeatured(false);
      setPublished(true);
      setDisplayOrder(0);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!customerName.trim()) {
      setError("Customer name is required.");
      return;
    }
    if (!review.trim()) {
      setError("Testimonial review text is required.");
      return;
    }

    onSubmit({
      customer_name: customerName,
      company_name: companyName,
      designation: designation,
      review: review,
      rating: rating,
      customer_image: customerImage,
      featured: featured,
      published: published,
      display_order: displayOrder,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 select-none max-w-2xl">
      
      {error && (
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-3 text-[13px] font-bold text-rose-600">
          {error}
        </div>
      )}

      {/* Customer Name */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Customer Name *
        </label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="e.g. Jane Doe"
          disabled={isSaving}
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company Name */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Company Name
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="e.g. Acme Corp"
            disabled={isSaving}
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

        {/* Designation */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Designation / Job Title
          </label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="e.g. Founder & CEO"
            disabled={isSaving}
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/* Rating selection */}
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider block">
            Rating (1–5 Stars)
          </label>
          <RatingSelector value={rating} onChange={setRating} disabled={isSaving} />
        </div>

        {/* Display Order */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Display Order
          </label>
          <input
            type="number"
            value={displayOrder}
            onChange={(e) => setDisplayOrder(parseInt(e.target.value) || 0)}
            placeholder="0"
            disabled={isSaving}
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>
      </div>

      {/* Review Text */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Review *
        </label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write customer feedback, testimonial quote details..."
          disabled={isSaving}
          rows={4}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white resize-y min-h-[100px]"
        />
      </div>

      {/* Customer Image */}
      <div className="space-y-2 border-t border-slate-100 pt-4">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Customer Avatar Photo
        </label>
        <ImageUploader value={customerImage} onChange={setCustomerImage} disabled={isSaving} />
      </div>

      {/* Status options */}
      <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-100">
        
        {/* Published */}
        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            disabled={isSaving}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <div className="flex flex-col">
            <span className="text-[13.5px] font-bold text-[#0F172A]">Published</span>
            <span className="text-[10px] text-slate-400 font-medium leading-none">Visible on home screen reviews slider</span>
          </div>
        </label>

        {/* Featured */}
        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            disabled={isSaving}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <div className="flex flex-col">
            <span className="text-[13.5px] font-bold text-[#0F172A]">Featured</span>
            <span className="text-[10px] text-slate-400 font-medium leading-none">Prioritize testimonial placement</span>
          </div>
        </label>

      </div>

      {/* Form Buttons */}
      <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
        <button
          type="button"
          disabled={isSaving}
          onClick={onCancel}
          className="h-10 px-4 rounded-xl border border-[#E2E8F0] hover:bg-slate-50 text-slate-600 text-[13.5px] font-bold cursor-pointer transition-colors disabled:opacity-40"
        >
          Cancel
        </button>
        
        <button
          type="button"
          disabled={isSaving}
          onClick={handleSubmit}
          className="h-10 px-5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-[13.5px] font-bold flex items-center justify-center gap-1.5 shadow-sm hover:shadow-blue-500/15 transition-all cursor-pointer disabled:bg-blue-400 disabled:pointer-events-none"
        >
          {isSaving ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <span>Save Testimonial</span>
          )}
        </button>
      </div>

    </form>
  );
}
