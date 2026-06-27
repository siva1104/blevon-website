"use client";

import React, { useEffect, useState } from "react";

interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  github: string;
  x: string;
  youtube: string;
}

interface FooterData {
  company_description: string;
  copyright: string;
  socials: SocialLinks;
}

interface FooterEditorProps {
  data: FooterData;
  onChange: (updated: FooterData) => void;
}

export default function FooterEditor({ data, onChange }: FooterEditorProps) {
  const [compDesc, setCompDesc] = useState("");
  const [copyright, setCopyright] = useState("");
  const [socials, setSocials] = useState<SocialLinks>({
    facebook: "",
    instagram: "",
    linkedin: "",
    github: "",
    x: "",
    youtube: "",
  });

  useEffect(() => {
    setCompDesc(data.company_description || "");
    setCopyright(data.copyright || "");
    setSocials(data.socials || {
      facebook: "",
      instagram: "",
      linkedin: "",
      github: "",
      x: "",
      youtube: "",
    });
  }, [data]);

  const handleFieldChange = (fields: Partial<FooterData>) => {
    onChange({
      company_description: fields.company_description !== undefined ? fields.company_description : compDesc,
      copyright: fields.copyright !== undefined ? fields.copyright : copyright,
      socials: fields.socials !== undefined ? fields.socials : socials,
    });
  };

  const handleSocialChange = (network: keyof SocialLinks, val: string) => {
    const updatedSocials = { ...socials, [network]: val };
    setSocials(updatedSocials);
    handleFieldChange({ socials: updatedSocials });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Company short tagline description */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Company description
        </label>
        <textarea
          value={compDesc}
          onChange={(e) => {
            setCompDesc(e.target.value);
            handleFieldChange({ company_description: e.target.value });
          }}
          placeholder="e.g. Crafting modern websites that help businesses grow."
          rows={3}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white resize-none"
        />
      </div>

      {/* Copyright text */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Copyright Text
        </label>
        <input
          type="text"
          value={copyright}
          onChange={(e) => {
            setCopyright(e.target.value);
            handleFieldChange({ copyright: e.target.value });
          }}
          placeholder="e.g. © 2026 Blevon. All rights reserved."
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
        />
      </div>

      {/* Social URLs list */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h3 className="text-[15px] font-bold text-[#0F172A]">
          Social Links (URLs)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Instagram */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Instagram</label>
            <input
              type="text"
              value={socials.instagram}
              onChange={(e) => handleSocialChange("instagram", e.target.value)}
              placeholder="https://instagram.com/..."
              className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
            />
          </div>

          {/* LinkedIn */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">LinkedIn</label>
            <input
              type="text"
              value={socials.linkedin}
              onChange={(e) => handleSocialChange("linkedin", e.target.value)}
              placeholder="https://linkedin.com/in/..."
              className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
            />
          </div>

          {/* Facebook */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Facebook</label>
            <input
              type="text"
              value={socials.facebook}
              onChange={(e) => handleSocialChange("facebook", e.target.value)}
              placeholder="https://facebook.com/..."
              className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
            />
          </div>

          {/* X (Twitter) */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">X (Twitter)</label>
            <input
              type="text"
              value={socials.x}
              onChange={(e) => handleSocialChange("x", e.target.value)}
              placeholder="https://x.com/..."
              className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
            />
          </div>

          {/* GitHub */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">GitHub</label>
            <input
              type="text"
              value={socials.github}
              onChange={(e) => handleSocialChange("github", e.target.value)}
              placeholder="https://github.com/..."
              className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
            />
          </div>

          {/* YouTube */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">YouTube</label>
            <input
              type="text"
              value={socials.youtube}
              onChange={(e) => handleSocialChange("youtube", e.target.value)}
              placeholder="https://youtube.com/c/..."
              className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
            />
          </div>

        </div>
      </div>

    </div>
  );
}
