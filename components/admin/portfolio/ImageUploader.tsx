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
      const fileName = `cover_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `covers/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("portfolio-images")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      // Fetch public URL
      const { data: { publicUrl } } = supabase.storage
        .from("portfolio-images")
        .getPublicUrl(filePath);

      onChange(publicUrl);
    } catch (err: any) {
      console.error("Cover upload failure:", err);
      setError("Failed to upload cover image. Please check bucket policies.");
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
      
      {/* Upload Zone */}
      {value ? (
        // Preview state
        <div className="relative rounded-[20px] border border-[#E2E8F0] overflow-hidden aspect-[16/10] bg-slate-50 group shadow-sm max-w-sm">
          <Image
            src={value}
            alt="Cover Preview"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button
              type="button"
              disabled={disabled}
              onClick={triggerInput}
              className="bg-white/90 hover:bg-white text-slate-800 text-[13px] font-bold px-3 py-1.5 rounded-lg shadow-sm transition-colors cursor-pointer select-none"
            >
              Replace
            </button>
            <button
              type="button"
              disabled={disabled}
              onClick={handleRemove}
              className="bg-rose-600 hover:bg-rose-700 text-white text-[13px] font-bold px-3 py-1.5 rounded-lg shadow-sm transition-colors cursor-pointer select-none"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        // Drag & drop dropzone
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={triggerInput}
          className={`border-2 border-dashed border-[#E2E8F0] rounded-[20px] hover:border-[#2563EB] bg-slate-50/50 hover:bg-blue-50/10 p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 min-h-[160px] max-w-sm ${
            isUploading ? "pointer-events-none opacity-60" : ""
          }`}
        >
          {isUploading ? (
            <div className="flex flex-col items-center gap-1.5 text-[#2563EB]">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span className="text-[13px] font-semibold">Uploading cover...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="h-10 w-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-slate-400">
                <Upload className="h-4.5 w-4.5" />
              </div>
              <p className="text-[13px] font-bold text-slate-600 leading-tight">
                Drag & drop cover or <span className="text-[#2563EB] hover:underline">browse</span>
              </p>
              <p className="text-[11px] font-medium text-slate-450">
                JPG, PNG or WEBP (Max 5MB)
              </p>
            </div>
          )}
        </div>
      )}

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        disabled={disabled || isUploading}
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
      />

      {/* Error banner */}
      {error && (
        <p className="text-[12px] font-semibold text-rose-500">
          {error}
        </p>
      )}

    </div>
  );
}
