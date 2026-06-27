"use client";

import React, { useState, useRef } from "react";
import { Upload, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  disabled?: boolean;
}

export default function ImageUploader({ value, onChange, disabled }: ImageUploaderProps) {
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    if (disabled || isUploading) return;
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      await uploadFile(files[0]);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    await uploadFile(files[0]);
  };

  const uploadFile = async (file: File) => {
    setError(null);

    // Validate type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      setError("Only JPG, PNG and WEBP formats are allowed.");
      return;
    }

    // Validate size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError("Maximum file size is 5MB.");
      return;
    }

    setIsUploading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `testimonial_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("testimonial-images")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      // Fetch public URL
      const { data: { publicUrl } } = supabase.storage
        .from("testimonial-images")
        .getPublicUrl(filePath);

      onChange(publicUrl);
    } catch (err: any) {
      console.error("Testimonial upload failure:", err);
      setError("Failed to upload avatar. Ensure bucket policy is active.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    onChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="space-y-2 select-none">
      
      {value ? (
        // Preview state
        <div className="relative rounded-2xl border border-[#E2E8F0] overflow-hidden h-24 w-24 bg-slate-50 group shadow-sm">
          <Image
            src={value}
            alt="Customer Avatar Preview"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1 items-center justify-center p-1">
            <button
              type="button"
              disabled={disabled}
              onClick={triggerInput}
              className="bg-white/95 hover:bg-white text-slate-800 text-[10px] font-bold py-1 w-full rounded shadow-sm transition-colors cursor-pointer text-center"
            >
              Replace
            </button>
            <button
              type="button"
              disabled={disabled}
              onClick={handleRemove}
              className="bg-rose-600 hover:bg-rose-700 text-white text-[10px] font-bold py-1 w-full rounded shadow-sm transition-colors cursor-pointer text-center"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        // Dropzone state
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={triggerInput}
          className={`border-2 border-dashed border-[#E2E8F0] rounded-2xl hover:border-[#2563EB] bg-slate-50/50 hover:bg-blue-50/10 h-24 w-24 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-300 ${
            isUploading ? "pointer-events-none opacity-60" : ""
          }`}
        >
          {isUploading ? (
            <Loader2 className="h-5 w-5 animate-spin text-[#2563EB]" />
          ) : (
            <div className="flex flex-col items-center gap-1 text-center p-2">
              <Upload className="h-4.5 w-4.5 text-slate-400" />
              <span className="text-[10px] font-bold text-slate-500 leading-none">Upload</span>
              <span className="text-[8px] text-slate-400">JPG/PNG/WEBP</span>
            </div>
          )}
        </div>
      )}

      {/* Hidden input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        disabled={disabled || isUploading}
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
      />

      {error && (
        <p className="text-[11.5px] font-semibold text-rose-500 max-w-xs">
          {error}
        </p>
      )}

    </div>
  );
}
