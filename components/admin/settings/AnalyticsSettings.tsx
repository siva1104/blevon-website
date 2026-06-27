"use client";

import React, { useEffect, useState } from "react";

interface AnalyticsData {
  googleAnalytics: string;
  googleTagManager: string;
  metaPixel: string;
}

interface AnalyticsSettingsProps {
  data: AnalyticsData;
  onChange: (updated: AnalyticsData) => void;
}

export default function AnalyticsSettings({ data, onChange }: AnalyticsSettingsProps) {
  const [ga, setGa] = useState("");
  const [gtm, setGtm] = useState("");
  const [pixel, setPixel] = useState("");

  useEffect(() => {
    setGa(data.googleAnalytics || "");
    setGtm(data.googleTagManager || "");
    setPixel(data.metaPixel || "");
  }, [data]);

  const handleFieldChange = (fields: Partial<AnalyticsData>) => {
    onChange({
      googleAnalytics: fields.googleAnalytics !== undefined ? fields.googleAnalytics : ga,
      googleTagManager: fields.googleTagManager !== undefined ? fields.googleTagManager : gtm,
      metaPixel: fields.metaPixel !== undefined ? fields.metaPixel : pixel,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Google Analytics */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Google Analytics ID (Measurement ID)
        </label>
        <input
          type="text"
          value={ga}
          onChange={(e) => {
            setGa(e.target.value);
            handleFieldChange({ googleAnalytics: e.target.value });
          }}
          placeholder="e.g. G-XXXXXXXXXX"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white font-mono"
        />
      </div>

      {/* Google Tag Manager */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Google Tag Manager Container ID
        </label>
        <input
          type="text"
          value={gtm}
          onChange={(e) => {
            setGtm(e.target.value);
            handleFieldChange({ googleTagManager: e.target.value });
          }}
          placeholder="e.g. GTM-XXXXXXX"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white font-mono"
        />
      </div>

      {/* Meta Pixel */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Meta Pixel ID
        </label>
        <input
          type="text"
          value={pixel}
          onChange={(e) => {
            setPixel(e.target.value);
            handleFieldChange({ metaPixel: e.target.value });
          }}
          placeholder="e.g. 123456789012345"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white font-mono"
        />
      </div>

    </div>
  );
}
