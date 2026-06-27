"use client";

import React, { useEffect, useState } from "react";
import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

interface WhyChooseData {
  title: string;
  subtitle: string;
  features: Feature[];
}

interface WhyChooseEditorProps {
  data: WhyChooseData;
  onChange: (updated: WhyChooseData) => void;
}

export default function WhyChooseEditor({ data, onChange }: WhyChooseEditorProps) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    setTitle(data.title || "");
    setSubtitle(data.subtitle || "");
    const sorted = [...(data.features || [])].sort((a, b) => a.order - b.order);
    setFeatures(sorted);
  }, [data]);

  const handleSectionChange = (newTitle: string, newSubtitle: string, newFeatures: Feature[]) => {
    onChange({
      title: newTitle,
      subtitle: newSubtitle,
      features: newFeatures,
    });
  };

  const handleAddFeature = () => {
    const newFeature: Feature = {
      id: `feature_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      title: "New Highlight Title",
      description: "Description of why clients should choose Blevon...",
      icon: "Shield",
      order: features.length + 1,
    };
    const updated = [...features, newFeature];
    setFeatures(updated);
    handleSectionChange(title, subtitle, updated);
  };

  const handleUpdateFeature = (id: string, fields: Partial<Feature>) => {
    const updated = features.map((f) => {
      if (f.id === id) {
        return { ...f, ...fields };
      }
      return f;
    });
    setFeatures(updated);
    handleSectionChange(title, subtitle, updated);
  };

  const handleDeleteFeature = (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feature card?");
    if (!confirmDelete) return;
    const updated = features.filter((f) => f.id !== id);
    setFeatures(updated);
    handleSectionChange(title, subtitle, updated);
  };

  const handleMove = (index: number, direction: "up" | "down") => {
    if (direction === "up" && index === 0) return;
    if (direction === "down" && index === features.length - 1) return;

    const targetIndex = direction === "up" ? index - 1 : index + 1;
    const listCopy = [...features];
    
    // Swap items
    const temp = listCopy[index];
    listCopy[index] = listCopy[targetIndex];
    listCopy[targetIndex] = temp;

    // Reset order
    const reordered = listCopy.map((item, idx) => ({
      ...item,
      order: idx + 1,
    }));

    setFeatures(reordered);
    handleSectionChange(title, subtitle, reordered);
  };

  return (
    <div className="space-y-6 select-none max-w-3xl">
      
      {/* Title */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Section Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            handleSectionChange(e.target.value, subtitle, features);
          }}
          placeholder="e.g. Why Partners Choose Us"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white"
        />
      </div>

      {/* Subtitle */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Section Subtitle
        </label>
        <textarea
          value={subtitle}
          onChange={(e) => {
            setSubtitle(e.target.value);
            handleSectionChange(title, e.target.value, features);
          }}
          placeholder="e.g. The principles we enforce across every design and code deliverable."
          rows={2}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white resize-none"
        />
      </div>

      {/* Features list */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-[#0F172A]">
            Why Choose Cards List ({features.length})
          </h3>
          <button
            type="button"
            onClick={handleAddFeature}
            className="h-9 px-3.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#2563EB] border border-blue-100/50 text-[12.5px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add Highlight</span>
          </button>
        </div>

        {features.length === 0 ? (
          <div className="bg-slate-50 border border-dashed border-slate-200 rounded-[20px] p-8 text-center text-[13.5px] text-slate-450 font-medium">
            No highlights configured. Click &ldquo;Add Highlight&rdquo; above.
          </div>
        ) : (
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.003)] space-y-4 relative group"
              >
                {/* Reorder and Delete controls */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-lg p-0.5 shrink-0">
                    <button
                      type="button"
                      disabled={index === 0}
                      onClick={() => handleMove(index, "up")}
                      className="h-7 w-7 rounded flex items-center justify-center text-slate-400 hover:text-[#0F172A] hover:bg-white transition-all disabled:opacity-30 cursor-pointer"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      disabled={index === features.length - 1}
                      onClick={() => handleMove(index, "down")}
                      className="h-7 w-7 rounded flex items-center justify-center text-slate-400 hover:text-[#0F172A] hover:bg-white transition-all disabled:opacity-30 cursor-pointer"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteFeature(feature.id)}
                    className="h-8 w-8 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-transparent hover:border-rose-100 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Edit fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Title */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Title</label>
                    <input
                      type="text"
                      value={feature.title}
                      onChange={(e) => handleUpdateFeature(feature.id, { title: e.target.value })}
                      placeholder="e.g. Modern Design"
                      className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
                    />
                  </div>

                  {/* Icon */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Lucide Icon</label>
                    <input
                      type="text"
                      value={feature.icon}
                      onChange={(e) => handleUpdateFeature(feature.id, { icon: e.target.value })}
                      placeholder="e.g. ShieldCheck"
                      className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
                    />
                  </div>

                </div>

                {/* Description */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Description</label>
                  <textarea
                    value={feature.description}
                    onChange={(e) => handleUpdateFeature(feature.id, { description: e.target.value })}
                    placeholder="Describe this highlight..."
                    rows={2}
                    className="w-full rounded-lg border border-[#E2E8F0] p-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white resize-none"
                  />
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
