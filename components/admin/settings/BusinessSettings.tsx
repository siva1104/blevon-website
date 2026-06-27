"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface BusinessData {
  workingHours: string;
  timezone: string;
  currency: string;
}

interface BusinessSettingsProps {
  data: BusinessData;
  onChange: (updated: BusinessData) => void;
}

export default function BusinessSettings({ data, onChange }: BusinessSettingsProps) {
  const [workingHours, setWorkingHours] = useState("");
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [currency, setCurrency] = useState("INR");

  useEffect(() => {
    setWorkingHours(data.workingHours || "");
    setTimezone(data.timezone || "Asia/Kolkata");
    setCurrency(data.currency || "INR");
  }, [data]);

  const handleFieldChange = (fields: Partial<BusinessData>) => {
    onChange({
      workingHours: fields.workingHours !== undefined ? fields.workingHours : workingHours,
      timezone: fields.timezone !== undefined ? fields.timezone : timezone,
      currency: fields.currency !== undefined ? fields.currency : currency,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Working Hours */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Working Hours
        </label>
        <input
          type="text"
          value={workingHours}
          onChange={(e) => {
            setWorkingHours(e.target.value);
            handleFieldChange({ workingHours: e.target.value });
          }}
          placeholder="e.g. Monday - Friday, 9am - 6pm"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Timezone */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Default Timezone
          </label>
          <div className="relative">
            <select
              value={timezone}
              onChange={(e) => {
                setTimezone(e.target.value);
                handleFieldChange({ timezone: e.target.value });
              }}
              className="h-11 w-full rounded-[12px] border border-[#E2E8F0] bg-white pl-4 pr-10 text-[14.5px] font-semibold text-[#0F172A] focus:border-[#2563EB] outline-none cursor-pointer appearance-none"
            >
              <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
              <option value="America/New_York">America/New_York (EST)</option>
              <option value="Europe/London">Europe/London (GMT)</option>
              <option value="UTC">Coordinated Universal Time (UTC)</option>
            </select>
            <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Currency */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Primary Currency
          </label>
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
                handleFieldChange({ currency: e.target.value });
              }}
              className="h-11 w-full rounded-[12px] border border-[#E2E8F0] bg-white pl-4 pr-10 text-[14.5px] font-semibold text-[#0F172A] focus:border-[#2563EB] outline-none cursor-pointer appearance-none"
            >
              <option value="INR">Indian Rupee (₹ INR)</option>
              <option value="USD">US Dollar ($ USD)</option>
              <option value="EUR">Euro (€ EUR)</option>
              <option value="GBP">Pound Sterling (£ GBP)</option>
            </select>
            <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
