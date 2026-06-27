"use client";

import React, { useEffect, useState } from "react";

interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  x: string;
  github: string;
  youtube: string;
}

interface SocialSettingsProps {
  data: SocialLinks;
  onChange: (updated: SocialLinks) => void;
}

export default function SocialSettings({ data, onChange }: SocialSettingsProps) {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [x, setX] = useState("");
  const [github, setGithub] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    setFacebook(data.facebook || "");
    setInstagram(data.instagram || "");
    setLinkedin(data.linkedin || "");
    setX(data.x || "");
    setGithub(data.github || "");
    setYoutube(data.youtube || "");
  }, [data]);

  const handleFieldChange = (fields: Partial<SocialLinks>) => {
    onChange({
      facebook: fields.facebook !== undefined ? fields.facebook : facebook,
      instagram: fields.instagram !== undefined ? fields.instagram : instagram,
      linkedin: fields.linkedin !== undefined ? fields.linkedin : linkedin,
      x: fields.x !== undefined ? fields.x : x,
      github: fields.github !== undefined ? fields.github : github,
      youtube: fields.youtube !== undefined ? fields.youtube : youtube,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Instagram */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Instagram URL
          </label>
          <input
            type="text"
            value={instagram}
            onChange={(e) => {
              setInstagram(e.target.value);
              handleFieldChange({ instagram: e.target.value });
            }}
            placeholder="https://instagram.com/..."
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

        {/* LinkedIn */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            LinkedIn URL
          </label>
          <input
            type="text"
            value={linkedin}
            onChange={(e) => {
              setLinkedin(e.target.value);
              handleFieldChange({ linkedin: e.target.value });
            }}
            placeholder="https://linkedin.com/company/..."
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

        {/* X (Twitter) */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            X (Twitter) URL
          </label>
          <input
            type="text"
            value={x}
            onChange={(e) => {
              setX(e.target.value);
              handleFieldChange({ x: e.target.value });
            }}
            placeholder="https://x.com/..."
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

        {/* GitHub */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            GitHub URL
          </label>
          <input
            type="text"
            value={github}
            onChange={(e) => {
              setGithub(e.target.value);
              handleFieldChange({ github: e.target.value });
            }}
            placeholder="https://github.com/..."
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

        {/* Facebook */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Facebook URL
          </label>
          <input
            type="text"
            value={facebook}
            onChange={(e) => {
              setFacebook(e.target.value);
              handleFieldChange({ facebook: e.target.value });
            }}
            placeholder="https://facebook.com/..."
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

        {/* YouTube */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            YouTube URL
          </label>
          <input
            type="text"
            value={youtube}
            onChange={(e) => {
              setYoutube(e.target.value);
              handleFieldChange({ youtube: e.target.value });
            }}
            placeholder="https://youtube.com/c/..."
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

      </div>
    </div>
  );
}
