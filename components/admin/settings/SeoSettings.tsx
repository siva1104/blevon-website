"use client";

import React, { useEffect, useState } from "react";
import ImageUploader from "../content/ImageUploader";

interface SeoData {
  siteTitle: string;
  siteDescription: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
}

interface SeoSettingsProps {
  data: SeoData;
  onChange: (updated: SeoData) => void;
}

export default function SeoSettings({ data, onChange }: SeoSettingsProps) {
  const [siteTitle, setSiteTitle] = useState("");
  const [siteDescription, setSiteDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [ogImage, setOgImage] = useState("");

  useEffect(() => {
    setSiteTitle(data.siteTitle || "");
    setSiteDescription(data.siteDescription || "");
    setKeywords(data.keywords || "");
    setCanonicalUrl(data.canonicalUrl || "");
    setOgImage(data.ogImage || "");
  }, [data]);

  const handleFieldChange = (fields: Partial<SeoData>) => {
    onChange({
      siteTitle: fields.siteTitle !== undefined ? fields.siteTitle : siteTitle,
      siteDescription: fields.siteDescription !== undefined ? fields.siteDescription : siteDescription,
      keywords: fields.keywords !== undefined ? fields.keywords : keywords,
      canonicalUrl: fields.canonicalUrl !== undefined ? fields.canonicalUrl : canonicalUrl,
      ogImage: fields.ogImage !== undefined ? fields.ogImage : ogImage,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Site Title */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Default Site Title
        </label>
        <input
          type="text"
          value={siteTitle}
          onChange={(e) => {
            setSiteTitle(e.target.value);
            handleFieldChange({ siteTitle: e.target.value });
          }}
          placeholder="e.g. Blevon | Web Design & Engineering Agency"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
        />
      </div>

      {/* Site Description */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Default Site Description
        </label>
        <textarea
          value={siteDescription}
          onChange={(e) => {
            setSiteDescription(e.target.value);
            handleFieldChange({ siteDescription: e.target.value });
          }}
          placeholder="Enter default site description meta content..."
          rows={3}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white resize-none"
        />
      </div>

      {/* Keywords */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Keywords (comma separated)
        </label>
        <input
          type="text"
          value={keywords}
          onChange={(e) => {
            setKeywords(e.target.value);
            handleFieldChange({ keywords: e.target.value });
          }}
          placeholder="e.g. web design, react, next.js, digital agency"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
        />
      </div>

      {/* Canonical URL */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Canonical Base URL
        </label>
        <input
          type="text"
          value={canonicalUrl}
          onChange={(e) => {
            setCanonicalUrl(e.target.value);
            handleFieldChange({ canonicalUrl: e.target.value });
          }}
          placeholder="e.g. https://blevon.in"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
        />
      </div>

      {/* ogImage */}
      <div className="space-y-2.5 pt-2 border-t border-slate-100">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Default OG Share Image Preview
        </label>
        <ImageUploader
          value={ogImage}
          onChange={(url) => {
            setOgImage(url);
            handleFieldChange({ ogImage: url });
          }}
        />
      </div>

    </div>
  );
}
