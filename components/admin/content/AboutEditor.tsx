"use client";

import React, { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";

interface AboutData {
  title: string;
  description: string;
  image: string;
  mission: string;
  vision: string;
}

interface AboutEditorProps {
  data: AboutData;
  onChange: (updated: AboutData) => void;
}

export default function AboutEditor({ data, onChange }: AboutEditorProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [mission, setMission] = useState("");
  const [vision, setVision] = useState("");

  useEffect(() => {
    setTitle(data.title || "");
    setDescription(data.description || "");
    setImage(data.image || "");
    setMission(data.mission || "");
    setVision(data.vision || "");
  }, [data]);

  const handleFieldChange = (fields: Partial<AboutData>) => {
    onChange({
      title: fields.title !== undefined ? fields.title : title,
      description: fields.description !== undefined ? fields.description : description,
      image: fields.image !== undefined ? fields.image : image,
      mission: fields.mission !== undefined ? fields.mission : mission,
      vision: fields.vision !== undefined ? fields.vision : vision,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Title */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Section Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            handleFieldChange({ title: e.target.value });
          }}
          placeholder="e.g. Crafting Digital Excellence"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white"
        />
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            handleFieldChange({ description: e.target.value });
          }}
          placeholder="Describe Blevon history, ethos, design standards, and growth approach..."
          rows={5}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white resize-y min-h-[120px]"
        />
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Mission */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Our Mission
          </label>
          <textarea
            value={mission}
            onChange={(e) => {
              setMission(e.target.value);
              handleFieldChange({ mission: e.target.value });
            }}
            placeholder="e.g. To design modern websites that convert visitors into loyal clients."
            rows={4}
            className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white resize-none"
          />
        </div>

        {/* Vision */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Our Vision
          </label>
          <textarea
            value={vision}
            onChange={(e) => {
              setVision(e.target.value);
              handleFieldChange({ vision: e.target.value });
            }}
            placeholder="e.g. To become India's leading boutique web design agency for digital products."
            rows={4}
            className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white resize-none"
          />
        </div>

      </div>

      {/* Section Image */}
      <div className="space-y-2.5 pt-2 border-t border-slate-100">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Section Image
        </label>
        <ImageUploader
          value={image}
          onChange={(url) => {
            setImage(url);
            handleFieldChange({ image: url });
          }}
        />
      </div>

    </div>
  );
}
