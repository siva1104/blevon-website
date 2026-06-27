"use client";

import React, { useEffect, useState } from "react";
import ImageUploader from "../content/ImageUploader";

interface BrandingData {
  logo: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
}

interface BrandingSettingsProps {
  data: BrandingData;
  onChange: (updated: BrandingData) => void;
}

export default function BrandingSettings({ data, onChange }: BrandingSettingsProps) {
  const [logo, setLogo] = useState("");
  const [favicon, setFavicon] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");

  useEffect(() => {
    setLogo(data.logo || "");
    setFavicon(data.favicon || "");
    setPrimaryColor(data.primaryColor || "#2563eb");
    setSecondaryColor(data.secondaryColor || "#0f172a");
  }, [data]);

  const handleFieldChange = (fields: Partial<BrandingData>) => {
    onChange({
      logo: fields.logo !== undefined ? fields.logo : logo,
      favicon: fields.favicon !== undefined ? fields.favicon : favicon,
      primaryColor: fields.primaryColor !== undefined ? fields.primaryColor : primaryColor,
      secondaryColor: fields.secondaryColor !== undefined ? fields.secondaryColor : secondaryColor,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Colors inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4 border-b border-slate-100">
        
        {/* Primary Color */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
            <span>Primary Color</span>
            <div className="h-4 w-4 rounded-full border border-slate-200" style={{ backgroundColor: primaryColor }} />
          </label>
          <div className="relative">
            <input
              type="text"
              value={primaryColor}
              onChange={(e) => {
                setPrimaryColor(e.target.value);
                handleFieldChange({ primaryColor: e.target.value });
              }}
              placeholder="e.g. #2563eb"
              className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 pl-12 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white font-mono"
            />
            <input
              type="color"
              value={primaryColor.startsWith("#") && primaryColor.length === 7 ? primaryColor : "#2563eb"}
              onChange={(e) => {
                setPrimaryColor(e.target.value);
                handleFieldChange({ primaryColor: e.target.value });
              }}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 rounded border border-transparent cursor-pointer p-0 bg-transparent"
            />
          </div>
        </div>

        {/* Secondary Color */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
            <span>Secondary Color</span>
            <div className="h-4 w-4 rounded-full border border-slate-200" style={{ backgroundColor: secondaryColor }} />
          </label>
          <div className="relative">
            <input
              type="text"
              value={secondaryColor}
              onChange={(e) => {
                setSecondaryColor(e.target.value);
                handleFieldChange({ secondaryColor: e.target.value });
              }}
              placeholder="e.g. #0f172a"
              className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 pl-12 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white font-mono"
            />
            <input
              type="color"
              value={secondaryColor.startsWith("#") && secondaryColor.length === 7 ? secondaryColor : "#0f172a"}
              onChange={(e) => {
                setSecondaryColor(e.target.value);
                handleFieldChange({ secondaryColor: e.target.value });
              }}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 rounded border border-transparent cursor-pointer p-0 bg-transparent"
            />
          </div>
        </div>

      </div>

      {/* Uploaders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
        
        {/* Logo */}
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Brand Logo
          </label>
          <ImageUploader
            value={logo}
            onChange={(url) => {
              setLogo(url);
              handleFieldChange({ logo: url });
            }}
          />
        </div>

        {/* Favicon */}
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Favicon Icon
          </label>
          <ImageUploader
            value={favicon}
            onChange={(url) => {
              setFavicon(url);
              handleFieldChange({ favicon: url });
            }}
          />
        </div>

      </div>

    </div>
  );
}
