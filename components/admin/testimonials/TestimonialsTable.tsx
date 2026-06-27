"use client";

import React from "react";
import Image from "next/image";
import { Edit2, Trash2, Calendar, Star, Globe, EyeOff, User } from "lucide-react";
import StatusBadge from "./StatusBadge";
import RatingSelector from "./RatingSelector";

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

interface TestimonialsTableProps {
  testimonials: Testimonial[];
  onEdit: (item: Testimonial) => void;
  onDelete: (item: Testimonial) => void;
  onToggleFeatured?: (id: string, current: boolean) => void;
  onTogglePublished?: (id: string, current: boolean) => void;
}

export default function TestimonialsTable({
  testimonials,
  onEdit,
  onDelete,
  onToggleFeatured,
  onTogglePublished
}: TestimonialsTableProps) {
  
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="select-none">
      
      {/* Desktop/Tablet Table Layout */}
      <div className="hidden md:block bg-white border border-[#E2E8F0] rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.003)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-4 px-6">Customer</th>
                <th className="py-4 px-6">Company & Title</th>
                <th className="py-4 px-6 text-center">Rating</th>
                <th className="py-4 px-6 text-center">Order</th>
                <th className="py-4 px-6 text-center">Status</th>
                <th className="py-4 px-6 text-center">Featured</th>
                <th className="py-4 px-6">Created</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[13.5px]">
              {testimonials.map((item) => (
                <tr 
                  key={item.id}
                  className="hover:bg-slate-50/40 transition-colors group"
                >
                  {/* Photo & Name */}
                  <td className="py-4.5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-full border border-[#E2E8F0] overflow-hidden bg-slate-50 shrink-0 flex items-center justify-center text-slate-400">
                        {item.customer_image ? (
                          <Image
                            src={item.customer_image}
                            alt={item.customer_name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <User className="h-4 w-4" />
                        )}
                      </div>
                      <span className="font-bold text-[#0F172A]">
                        {item.customer_name}
                      </span>
                    </div>
                  </td>

                  {/* Company & Designation */}
                  <td className="py-4.5 px-6 font-semibold text-slate-600">
                    <div>{item.company_name || "-"}</div>
                    <div className="text-[11.5px] text-slate-400 font-medium">{item.designation || "-"}</div>
                  </td>

                  {/* Rating Selector */}
                  <td className="py-4.5 px-6">
                    <div className="flex justify-center">
                      <RatingSelector value={item.rating} />
                    </div>
                  </td>

                  {/* Display Order */}
                  <td className="py-4.5 px-6 text-center font-mono font-bold text-slate-500">
                    {item.display_order}
                  </td>

                  {/* Published Toggle */}
                  <td className="py-4.5 px-6 text-center">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => onTogglePublished?.(item.id, item.published)}
                        className={`h-7 w-7 rounded-lg border flex items-center justify-center cursor-pointer transition-all ${
                          item.published 
                            ? "bg-emerald-50 border-emerald-100 text-emerald-600 hover:bg-emerald-100" 
                            : "bg-slate-50 border-slate-200 text-slate-400 hover:bg-slate-100"
                        }`}
                        title={item.published ? "Click to Unpublish" : "Click to Publish"}
                      >
                        {item.published ? <Globe className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </td>

                  {/* Featured Toggle */}
                  <td className="py-4.5 px-6 text-center">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => onToggleFeatured?.(item.id, item.featured)}
                        className={`h-7 w-7 rounded-lg border flex items-center justify-center cursor-pointer transition-all ${
                          item.featured 
                            ? "bg-blue-50 border-blue-100 text-blue-600 hover:bg-blue-100" 
                            : "bg-slate-50 border-slate-200 text-slate-400 hover:bg-slate-105"
                        }`}
                        title={item.featured ? "Remove from Featured" : "Mark as Featured"}
                      >
                        <Star className={`h-3.5 w-3.5 ${item.featured ? "fill-blue-500" : ""}`} />
                      </button>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="py-4.5 px-6 text-slate-450 font-medium whitespace-nowrap">
                    {formatDate(item.created_at)}
                  </td>

                  {/* Action Buttons */}
                  <td className="py-4.5 px-6 text-right">
                    <div className="flex items-center justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => onEdit(item)}
                        className="h-8 w-8 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-[#2563EB] border border-transparent hover:border-blue-100 flex items-center justify-center transition-colors cursor-pointer"
                        title="Edit testimonial"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onDelete(item)}
                        className="h-8 w-8 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-transparent hover:border-rose-100 flex items-center justify-center transition-colors cursor-pointer"
                        title="Delete testimonial"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Stacked Card Layout */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.003)] space-y-4"
          >
            {/* Header info */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full border border-[#E2E8F0] overflow-hidden bg-slate-50 flex items-center justify-center text-slate-450 shrink-0">
                  {item.customer_image ? (
                    <Image
                      src={item.customer_image}
                      alt={item.customer_name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User className="h-4.5 w-4.5" />
                  )}
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#0F172A]">
                    {item.customer_name}
                  </h4>
                  <p className="text-[11.5px] text-slate-400 font-medium">
                    {item.designation && `${item.designation}, `}{item.company_name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <StatusBadge published={item.published} featured={item.featured} />
              </div>
            </div>

            {/* Testimonial snippet */}
            <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100/50">
              <p className="text-[12.5px] text-slate-650 italic font-medium leading-relaxed">
                &ldquo;{item.review}&rdquo;
              </p>
              <div className="mt-2.5 flex items-center justify-between">
                <RatingSelector value={item.rating} />
                <span className="text-[10px] text-slate-400 font-bold font-mono">Order: {item.display_order}</span>
              </div>
            </div>

            {/* Actions & Created date */}
            <div className="flex items-center justify-between pt-1 border-t border-slate-100">
              <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(item.created_at)}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onEdit(item)}
                  className="h-8 px-3 rounded-lg hover:bg-blue-50 text-slate-500 hover:text-[#2563EB] border border-[#E2E8F0] hover:border-blue-100 text-[11.5px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Edit2 className="h-3 w-3" />
                  <span>Edit</span>
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(item)}
                  className="h-8 px-3 rounded-lg hover:bg-rose-50 text-slate-550 hover:text-rose-600 border border-[#E2E8F0] hover:border-rose-100 text-[11.5px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Trash2 className="h-3 w-3" />
                  <span>Delete</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
