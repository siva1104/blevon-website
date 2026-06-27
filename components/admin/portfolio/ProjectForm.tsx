"use client";

import React, { useState, useEffect } from "react";
import CategorySelect from "./CategorySelect";
import TechnologyInput from "./TechnologyInput";
import ImageUploader from "./ImageUploader";
import GalleryUploader from "./GalleryUploader";
import { Loader2 } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectFormProps {
  initialData?: Project;
  onSave: (data: any) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function ProjectForm({ initialData, onSave, onCancel, isLoading }: ProjectFormProps) {
  // Form fields states
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [isSlugEdited, setIsSlugEdited] = useState(false);
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [clientName, setClientName] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [category, setCategory] = useState("Business Websites");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [coverImage, setCoverImage] = useState("");
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [published, setPublished] = useState(false);
  const [displayOrder, setDisplayOrder] = useState(0);
  const [status, setStatus] = useState<"Completed" | "Ongoing">("Completed");

  // Form error states
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Fill initial data if editing
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setSlug(initialData.slug);
      setIsSlugEdited(true);
      setShortDesc(initialData.short_description);
      setFullDesc(initialData.full_description);
      setClientName(initialData.client_name || "");
      setProjectUrl(initialData.project_url || "");
      setCategory(initialData.category);
      setTechnologies(initialData.technologies || []);
      setCoverImage(initialData.cover_image);
      setGalleryImages(initialData.gallery_images || []);
      setPublished(initialData.published);
      setDisplayOrder(initialData.display_order);
      setStatus(initialData.status || "Completed");
    }
  }, [initialData]);

  const generateSlug = (val: string) => {
    return val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!isSlugEdited) {
      setSlug(generateSlug(val));
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value);
    setIsSlugEdited(true);
  };

  // Form Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) newErrors.title = "Project title is required.";
    if (!slug.trim()) newErrors.slug = "Slug is required.";
    else if (!/^[a-z0-9-_]+$/.test(slug)) {
      newErrors.slug = "Slug must contain only lowercase letters, numbers, dashes and underscores.";
    }
    
    if (!shortDesc.trim()) newErrors.shortDesc = "Short description is required.";
    if (!category.trim()) newErrors.category = "Category is required.";
    if (!coverImage) newErrors.coverImage = "Cover image is required.";

    if (projectUrl.trim()) {
      try {
        new URL(projectUrl);
      } catch {
        newErrors.projectUrl = "Invalid URL layout format. Must start with http:// or https://";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSave({
      title: title.trim(),
      slug: slug.trim(),
      short_description: shortDesc.trim(),
      full_description: fullDesc.trim(),
      client_name: clientName.trim() || null,
      project_url: projectUrl.trim() || null,
      category,
      technologies,
      cover_image: coverImage,
      gallery_images: galleryImages,
      featured: false,
      published,
      display_order: displayOrder,
      status,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 select-none max-w-4xl pb-12">
      
      {/* Title & Description row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Title */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Project Title *
          </label>
          <input
            type="text"
            disabled={isLoading}
            value={title}
            onChange={handleTitleChange}
            placeholder="e.g. Kavuturu Dental Clinic"
            className={`h-11 w-full rounded-[12px] border px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white ${
              errors.title ? "border-rose-350" : "border-[#E2E8F0]"
            }`}
          />
          {errors.title && (
            <p className="text-[11.5px] font-bold text-rose-500">{errors.title}</p>
          )}
        </div>

        {/* Slug */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Slug *
          </label>
          <input
            type="text"
            disabled={isLoading}
            value={slug}
            onChange={handleSlugChange}
            placeholder="e.g. kavuturu-dental-clinic"
            className={`h-11 w-full rounded-[12px] border px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white ${
              errors.slug ? "border-rose-350" : "border-[#E2E8F0]"
            }`}
          />
          {errors.slug && (
            <p className="text-[11.5px] font-bold text-rose-500">{errors.slug}</p>
          )}
        </div>

      </div>

      {/* Description Inputs */}
      <div className="space-y-6">
        
        {/* Short Description */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Short Description *
          </label>
          <input
            type="text"
            disabled={isLoading}
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
            placeholder="e.g. Premium web design and custom development for Kavuturu Dental Clinic."
            className={`h-11 w-full rounded-[12px] border px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white ${
              errors.shortDesc ? "border-rose-350" : "border-[#E2E8F0]"
            }`}
          />
          {errors.shortDesc && (
            <p className="text-[11.5px] font-bold text-rose-500">{errors.shortDesc}</p>
          )}
        </div>

        {/* Full Case Study Description */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Full Description
          </label>
          <textarea
            disabled={isLoading}
            value={fullDesc}
            onChange={(e) => setFullDesc(e.target.value)}
            placeholder="Detail the case study project, client problem, solutions, and outcomes..."
            rows={5}
            className="w-full rounded-[14px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white resize-y min-h-[120px]"
          />
        </div>

      </div>

      {/* Metadata details row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Client Name */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Client Name
          </label>
          <input
            type="text"
            disabled={isLoading}
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="e.g. Kavuturu Dental Group"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white"
          />
        </div>

        {/* Project URL */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Project URL
          </label>
          <input
            type="text"
            disabled={isLoading}
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
            placeholder="e.g. https://kavuturudental.com"
            className={`h-11 w-full rounded-[12px] border px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white ${
              errors.projectUrl ? "border-rose-350" : "border-[#E2E8F0]"
            }`}
          />
          {errors.projectUrl && (
            <p className="text-[11.5px] font-bold text-rose-500">{errors.projectUrl}</p>
          )}
        </div>

      </div>

      {/* Category & Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Category */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Category *
          </label>
          <CategorySelect 
            value={category} 
            onChange={setCategory} 
            disabled={isLoading} 
          />
        </div>

        {/* Display Order */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Display Order
          </label>
          <input
            type="number"
            disabled={isLoading}
            value={displayOrder}
            onChange={(e) => setDisplayOrder(parseInt(e.target.value) || 0)}
            placeholder="0"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white"
          />
        </div>

      </div>

      {/* Technology Inputs */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Technologies
        </label>
        <TechnologyInput 
          value={technologies} 
          onChange={setTechnologies} 
          disabled={isLoading} 
        />
      </div>

      {/* Image Uploaders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 border-t border-slate-100">
        
        {/* Cover Image */}
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Cover Image *
          </label>
          <ImageUploader 
            value={coverImage} 
            onChange={setCoverImage} 
            disabled={isLoading} 
          />
          {errors.coverImage && (
            <p className="text-[11.5px] font-bold text-rose-500">{errors.coverImage}</p>
          )}
        </div>

        {/* Gallery Images */}
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Gallery Screenshots
          </label>
          <GalleryUploader 
            value={galleryImages} 
            onChange={setGalleryImages} 
            disabled={isLoading} 
          />
        </div>

      </div>

      {/* Switches & Toggles */}
      <div className="flex flex-wrap gap-8 pt-4 border-t border-slate-100 select-none">
        
        {/* Project Status */}
        <div className="flex flex-col gap-1.5 min-w-[160px]">
          <span className="text-[11.5px] font-bold text-slate-400 uppercase tracking-wider">Project Status</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "Completed" | "Ongoing")}
            disabled={isLoading}
            className="h-10 px-3 rounded-lg border border-[#E2E8F0] bg-white text-[13px] font-bold text-slate-700 focus:border-[#2563EB] outline-none cursor-pointer"
          >
            <option value="Completed">Completed</option>
            <option value="Ongoing">Ongoing</option>
          </select>
        </div>

        {/* Published */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            disabled={isLoading}
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="h-4.5 w-4.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-[#0F172A]">Publish Online</span>
            <span className="text-[11px] text-slate-400 font-medium">Make visible to everyone browsing the website</span>
          </div>
        </label>

      </div>

      {/* Form Submission buttons */}
      <div className="flex gap-4 pt-4 border-t border-slate-100 justify-end">
        <button
          type="button"
          disabled={isLoading}
          onClick={onCancel}
          className="h-11 rounded-[12px] border border-[#E2E8F0] hover:bg-slate-50 text-[14px] font-bold text-slate-600 px-6 transition-all cursor-pointer select-none"
        >
          Cancel
        </button>
        
        <button
          type="submit"
          disabled={isLoading}
          className="h-11 rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white text-[14px] font-bold flex items-center justify-center gap-2 px-6 shadow-sm hover:shadow-lg hover:shadow-[#2563EB]/15 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer select-none disabled:pointer-events-none disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <span>Save Case Study</span>
          )}
        </button>
      </div>

    </form>
  );
}
