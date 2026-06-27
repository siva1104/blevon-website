"use client";

import React, { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";

interface HeroData {
  title: string;
  subtitle: string;
  primary_btn: string;
  secondary_btn: string;
  bg_image: string;
}

interface HeroEditorProps {
  data: HeroData;
  onChange: (updated: HeroData) => void;
}

export default function HeroEditor({ data, onChange }: HeroEditorProps) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [primaryBtn, setPrimaryBtn] = useState("");
  const [secondaryBtn, setSecondaryBtn] = useState("");
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setTitle(data.title || "");
    setSubtitle(data.subtitle || "");
    setPrimaryBtn(data.primary_btn || "");
    setSecondaryBtn(data.secondary_btn || "");
    setBgImage(data.bg_image || "");
  }, [data]);

  const handleFieldChange = (fields: Partial<HeroData>) => {
    onChange({
      title: fields.title !== undefined ? fields.title : title,
      subtitle: fields.subtitle !== undefined ? fields.subtitle : subtitle,
      primary_btn: fields.primary_btn !== undefined ? fields.primary_btn : primaryBtn,
      secondary_btn: fields.secondary_btn !== undefined ? fields.secondary_btn : secondaryBtn,
      bg_image: fields.bg_image !== undefined ? fields.bg_image : bgImage,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Heading */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Heading
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            handleFieldChange({ title: e.target.value });
          }}
          placeholder="e.g. Crafting modern websites that help businesses grow."
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white"
        />
      </div>

      {/* Sub Heading */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Sub Heading
        </label>
        <textarea
          value={subtitle}
          onChange={(e) => {
            setSubtitle(e.target.value);
            handleFieldChange({ subtitle: e.target.value });
          }}
          placeholder="e.g. We design and build fast, responsive, and growth-focused web experiences."
          rows={3}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white resize-none"
        />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Primary CTA */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Primary Button Label
          </label>
          <input
            type="text"
            value={primaryBtn}
            onChange={(e) => {
              setPrimaryBtn(e.target.value);
              handleFieldChange({ primary_btn: e.target.value });
            }}
            placeholder="e.g. Get in Touch"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white"
          />
        </div>

        {/* Secondary CTA */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Secondary Button Label
          </label>
          <input
            type="text"
            value={secondaryBtn}
            onChange={(e) => {
              setSecondaryBtn(e.target.value);
              handleFieldChange({ secondary_btn: e.target.value });
            }}
            placeholder="e.g. View Portfolio"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white"
          />
        </div>

      </div>

      {/* Background Image */}
      <div className="space-y-2.5 pt-2 border-t border-slate-100">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Background Image
        </label>
        <ImageUploader
          value={bgImage}
          onChange={(url) => {
            setBgImage(url);
            handleFieldChange({ bg_image: url });
          }}
        />
      </div>

    </div>
  );
}
