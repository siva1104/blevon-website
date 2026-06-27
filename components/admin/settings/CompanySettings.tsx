"use client";

import React, { useEffect, useState } from "react";

interface CompanyData {
  name: string;
  tagline: string;
  description: string;
}

interface CompanySettingsProps {
  data: CompanyData;
  onChange: (updated: CompanyData) => void;
}

export default function CompanySettings({ data, onChange }: CompanySettingsProps) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(data.name || "");
    setTagline(data.tagline || "");
    setDescription(data.description || "");
  }, [data]);

  const handleFieldChange = (fields: Partial<CompanyData>) => {
    onChange({
      name: fields.name !== undefined ? fields.name : name,
      tagline: fields.tagline !== undefined ? fields.tagline : tagline,
      description: fields.description !== undefined ? fields.description : description,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Company Name */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Company Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            handleFieldChange({ name: e.target.value });
          }}
          placeholder="e.g. Blevon"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
        />
      </div>

      {/* Tagline */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Tagline
        </label>
        <input
          type="text"
          value={tagline}
          onChange={(e) => {
            setTagline(e.target.value);
            handleFieldChange({ tagline: e.target.value });
          }}
          placeholder="e.g. Crafting modern websites that help businesses grow."
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
        />
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Company Description
        </label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            handleFieldChange({ description: e.target.value });
          }}
          placeholder="Agency bio information..."
          rows={4}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white resize-none"
        />
      </div>

    </div>
  );
}
