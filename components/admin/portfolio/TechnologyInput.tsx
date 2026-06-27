"use client";

import React, { useState } from "react";
import { X, Plus } from "lucide-react";

interface TechnologyInputProps {
  value: string[];
  onChange: (techs: string[]) => void;
  disabled?: boolean;
}

export default function TechnologyInput({ value, onChange, disabled }: TechnologyInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(value.filter((t) => t !== tagToRemove));
  };

  return (
    <div className="space-y-2.5">
      {/* Input container */}
      <div className="relative">
        <input
          type="text"
          disabled={disabled}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type technology (e.g. Next.js) and press Enter or click Plus"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] pl-4 pr-12 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200 bg-white disabled:bg-slate-50 disabled:text-slate-400"
        />
        <button
          type="button"
          disabled={disabled || !inputValue.trim()}
          onClick={addTag}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-100/30 flex items-center justify-center text-[#2563EB] transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Tags list */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1.5">
          {value.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[13px] font-semibold text-[#0F172A] select-none"
            >
              <span>{tech}</span>
              {!disabled && (
                <button
                  type="button"
                  onClick={() => removeTag(tech)}
                  className="h-4.5 w-4.5 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
