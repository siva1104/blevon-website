"use client";

import React, { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";

interface SeoData {
  homepage_title: string;
  homepage_description: string;
  keywords: string;
  og_title: string;
  og_description: string;
  og_image: string;
  canonical_url: string;
  robots: string;
}

interface SeoEditorProps {
  data: SeoData;
  onChange: (updated: SeoData) => void;
}

export default function SeoEditor({ data, onChange }: SeoEditorProps) {
  const [homeTitle, setHomeTitle] = useState("");
  const [homeDesc, setHomeDesc] = useState("");
  const [keywords, setKeywords] = useState("");
  const [ogTitle, setOgTitle] = useState("");
  const [ogDesc, setOgDesc] = useState("");
  const [ogImage, setOgImage] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [robots, setRobots] = useState("index, follow");

  useEffect(() => {
    setHomeTitle(data.homepage_title || "");
    setHomeDesc(data.homepage_description || "");
    setKeywords(data.keywords || "");
    setOgTitle(data.og_title || "");
    setOgDesc(data.og_description || "");
    setOgImage(data.og_image || "");
    setCanonicalUrl(data.canonical_url || "");
    setRobots(data.robots || "index, follow");
  }, [data]);

  const handleFieldChange = (fields: Partial<SeoData>) => {
    onChange({
      homepage_title: fields.homepage_title !== undefined ? fields.homepage_title : homeTitle,
      homepage_description: fields.homepage_description !== undefined ? fields.homepage_description : homeDesc,
      keywords: fields.keywords !== undefined ? fields.keywords : keywords,
      og_title: fields.og_title !== undefined ? fields.og_title : ogTitle,
      og_description: fields.og_description !== undefined ? fields.og_description : ogDesc,
      og_image: fields.og_image !== undefined ? fields.og_image : ogImage,
      canonical_url: fields.canonical_url !== undefined ? fields.canonical_url : canonicalUrl,
      robots: fields.robots !== undefined ? fields.robots : robots,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Homepage Title */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Homepage Meta Title
        </label>
        <input
          type="text"
          value={homeTitle}
          onChange={(e) => {
            setHomeTitle(e.target.value);
            handleFieldChange({ homepage_title: e.target.value });
          }}
          placeholder="e.g. Blevon | Boutique Web Design & Engineering Agency"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
        />
      </div>

      {/* Homepage Description */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Homepage Meta Description
        </label>
        <textarea
          value={homeDesc}
          onChange={(e) => {
            setHomeDesc(e.target.value);
            handleFieldChange({ homepage_description: e.target.value });
          }}
          placeholder="Describe Blevon web development offerings for search snippets..."
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

      {/* Canonical URL & Robots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
        
        {/* Canonical URL */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Canonical URL
          </label>
          <input
            type="text"
            value={canonicalUrl}
            onChange={(e) => {
              setCanonicalUrl(e.target.value);
              handleFieldChange({ canonical_url: e.target.value });
            }}
            placeholder="e.g. https://blevon.in"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

        {/* Robots */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Robots Directives
          </label>
          <input
            type="text"
            value={robots}
            onChange={(e) => {
              setRobots(e.target.value);
              handleFieldChange({ robots: e.target.value });
            }}
            placeholder="e.g. index, follow"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

      </div>

      {/* Open Graph Header */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h3 className="text-[15px] font-bold text-[#0F172A]">
          Open Graph (Social Sharing) Settings
        </h3>
        
        {/* OG Title */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            OG Title
          </label>
          <input
            type="text"
            value={ogTitle}
            onChange={(e) => {
              setOgTitle(e.target.value);
              handleFieldChange({ og_title: e.target.value });
            }}
            placeholder="OG Share Title"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

        {/* OG Description */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            OG Description
          </label>
          <textarea
            value={ogDesc}
            onChange={(e) => {
              setOgDesc(e.target.value);
              handleFieldChange({ og_description: e.target.value });
            }}
            placeholder="OG Share Description snippet..."
            rows={2}
            className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white resize-none"
          />
        </div>

        {/* OG Image */}
        <div className="space-y-2.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            OG Image Preview Card
          </label>
          <ImageUploader
            value={ogImage}
            onChange={(url) => {
              setOgImage(url);
              handleFieldChange({ og_image: url });
            }}
          />
        </div>

      </div>

    </div>
  );
}
