"use client";

import React, { useEffect, useState } from "react";
import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  display_order: number;
  published: boolean;
}

interface ServicesData {
  title: string;
  subtitle: string;
  services: Service[];
}

interface ServicesEditorProps {
  data: ServicesData;
  onChange: (updated: ServicesData) => void;
}

export default function ServicesEditor({ data, onChange }: ServicesEditorProps) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    setTitle(data.title || "");
    setSubtitle(data.subtitle || "");
    // Ensure services is always an array sorted by display_order
    const sorted = [...(data.services || [])].sort((a, b) => a.display_order - b.display_order);
    setServices(sorted);
  }, [data]);

  const handleSectionChange = (newTitle: string, newSubtitle: string, newServices: Service[]) => {
    onChange({
      title: newTitle,
      subtitle: newSubtitle,
      services: newServices,
    });
  };

  const handleAddService = () => {
    const newService: Service = {
      id: `service_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      title: "New Service Title",
      description: "Service description goes here...",
      icon_name: "Globe",
      display_order: services.length + 1,
      published: true,
    };
    const updated = [...services, newService];
    setServices(updated);
    handleSectionChange(title, subtitle, updated);
  };

  const handleUpdateService = (id: string, fields: Partial<Service>) => {
    const updated = services.map((s) => {
      if (s.id === id) {
        return { ...s, ...fields };
      }
      return s;
    });
    setServices(updated);
    handleSectionChange(title, subtitle, updated);
  };

  const handleDeleteService = (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this service card?");
    if (!confirmDelete) return;
    const updated = services.filter((s) => s.id !== id);
    setServices(updated);
    handleSectionChange(title, subtitle, updated);
  };

  const handleMove = (index: number, direction: "up" | "down") => {
    if (direction === "up" && index === 0) return;
    if (direction === "down" && index === services.length - 1) return;

    const targetIndex = direction === "up" ? index - 1 : index + 1;
    const listCopy = [...services];
    
    // Swap items
    const temp = listCopy[index];
    listCopy[index] = listCopy[targetIndex];
    listCopy[targetIndex] = temp;

    // Reset display_order based on new order index
    const reordered = listCopy.map((item, idx) => ({
      ...item,
      display_order: idx + 1,
    }));

    setServices(reordered);
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
            handleSectionChange(e.target.value, subtitle, services);
          }}
          placeholder="e.g. Services We Offer"
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
            handleSectionChange(title, e.target.value, services);
          }}
          placeholder="e.g. We help businesses establish high-converting digital products."
          rows={2}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white resize-none"
        />
      </div>

      {/* List section */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-[#0F172A]">
            Services Cards List ({services.length})
          </h3>
          <button
            type="button"
            onClick={handleAddService}
            className="h-9 px-3.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#2563EB] border border-blue-100/50 text-[12.5px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add Service</span>
          </button>
        </div>

        {services.length === 0 ? (
          <div className="bg-slate-50 border border-dashed border-slate-200 rounded-[20px] p-8 text-center text-[13.5px] text-slate-450 font-medium">
            No service cards configured. Click &ldquo;Add Service&rdquo; above.
          </div>
        ) : (
          <div className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.003)] space-y-4 relative group"
              >
                {/* Header actions */}
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
                      disabled={index === services.length - 1}
                      onClick={() => handleMove(index, "down")}
                      className="h-7 w-7 rounded flex items-center justify-center text-slate-400 hover:text-[#0F172A] hover:bg-white transition-all disabled:opacity-30 cursor-pointer"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteService(service.id)}
                    className="h-8 w-8 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-transparent hover:border-rose-100 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Edit Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Service Title */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Title</label>
                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => handleUpdateService(service.id, { title: e.target.value })}
                      placeholder="Service Title"
                      className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
                    />
                  </div>

                  {/* Icon name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Lucide Icon Name</label>
                    <input
                      type="text"
                      value={service.icon_name}
                      onChange={(e) => handleUpdateService(service.id, { icon_name: e.target.value })}
                      placeholder="e.g. Briefcase"
                      className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Description</label>
                  <textarea
                    value={service.description}
                    onChange={(e) => handleUpdateService(service.id, { description: e.target.value })}
                    placeholder="Describe this service offering..."
                    rows={2}
                    className="w-full rounded-lg border border-[#E2E8F0] p-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white resize-none"
                  />
                </div>

                {/* Publish Toggle */}
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={service.published}
                    onChange={(e) => handleUpdateService(service.id, { published: e.target.checked })}
                    className="h-4 w-4 rounded border-slate-350 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-[12.5px] font-bold text-slate-500">Published Online</span>
                </label>

              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
