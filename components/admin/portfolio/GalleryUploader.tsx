"use client";

import React, { useState, useRef } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

interface GalleryUploaderProps {
  value: string[];
  onChange: (urls: string[]) => void;
  disabled?: boolean;
}

export default function GalleryUploader({ value, onChange, disabled }: GalleryUploaderProps) {
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
      await uploadFiles(Array.from(files));
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    await uploadFiles(Array.from(files));
  };

  const uploadFiles = async (files: File[]) => {
    setError(null);
    setIsUploading(true);

    const uploadedUrls: string[] = [];
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    try {
      for (const file of files) {
        // Validate type
        if (!allowedTypes.includes(file.type)) {
          setError(`"${file.name}" ignored. Only JPG, PNG and WEBP allowed.`);
          continue;
        }

        // Validate size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
          setError(`"${file.name}" ignored. Maximum size is 5MB.`);
          continue;
        }

        const fileExt = file.name.split(".").pop();
        const fileName = `gallery_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `gallery/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("portfolio-images")
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          throw new Error(uploadError.message);
        }

        // Fetch URL
        const { data: { publicUrl } } = supabase.storage
          .from("portfolio-images")
          .getPublicUrl(filePath);

        uploadedUrls.push(publicUrl);
      }

      if (uploadedUrls.length > 0) {
        onChange([...value, ...uploadedUrls]);
      }
    } catch (err: any) {
      console.error("Gallery upload failure:", err);
      setError("Failed to upload some gallery images. Check permissions.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemove = (urlToRemove: string) => {
    onChange(value.filter((url) => url !== urlToRemove));
  };

  const triggerInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="space-y-4 select-none">
      
      {/* Upload Zone */}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={triggerInput}
        className={`border-2 border-dashed border-[#E2E8F0] rounded-[20px] hover:border-[#2563EB] bg-slate-50/50 hover:bg-blue-50/10 p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 min-h-[140px] w-full ${
          isUploading ? "pointer-events-none opacity-60" : ""
        }`}
      >
        {isUploading ? (
          <div className="flex flex-col items-center gap-1.5 text-[#2563EB]">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span className="text-[13px] font-semibold">Uploading screenshots...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1.5 text-center">
            <div className="h-10 w-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-slate-400">
              <Upload className="h-4.5 w-4.5" />
            </div>
            <p className="text-[13px] font-bold text-slate-600 leading-tight">
              Drag & drop images or <span className="text-[#2563EB] hover:underline">browse</span>
            </p>
            <p className="text-[11px] font-medium text-slate-450">
              JPG, PNG or WEBP (Max 5MB each)
            </p>
          </div>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        multiple
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

      {/* Images previews grid */}
      {value.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {value.map((url, idx) => (
            <div
              key={url + idx}
              className="relative aspect-[16/10] rounded-xl border border-[#E2E8F0] overflow-hidden bg-slate-50 group shadow-sm"
            >
              <Image
                src={url}
                alt={`Gallery Preview ${idx + 1}`}
                fill
                className="object-cover"
              />
              <button
                type="button"
                disabled={disabled}
                onClick={() => handleRemove(url)}
                className="absolute top-1.5 right-1.5 h-6 w-6 rounded-lg bg-slate-900/60 hover:bg-rose-600 text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                title="Remove image"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
