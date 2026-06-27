"use client";

import React, { useEffect, useState } from "react";
import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";

interface Step {
  id: string;
  title: string;
  description: string;
  step_number: string;
  order: number;
}

interface ProcessData {
  title: string;
  subtitle: string;
  steps: Step[];
}

interface ProcessEditorProps {
  data: ProcessData;
  onChange: (updated: ProcessData) => void;
}

export default function ProcessEditor({ data, onChange }: ProcessEditorProps) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [steps, setSteps] = useState<Step[]>([]);

  useEffect(() => {
    setTitle(data.title || "");
    setSubtitle(data.subtitle || "");
    const sorted = [...(data.steps || [])].sort((a, b) => a.order - b.order);
    setSteps(sorted);
  }, [data]);

  const handleSectionChange = (newTitle: string, newSubtitle: string, newSteps: Step[]) => {
    onChange({
      title: newTitle,
      subtitle: newSubtitle,
      steps: newSteps,
    });
  };

  const handleAddStep = () => {
    const nextNum = (steps.length + 1).toString().padStart(2, "0");
    const newStep: Step = {
      id: `step_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      title: "New Process Step",
      description: "Explain this step of Blevon's methodology...",
      step_number: nextNum,
      order: steps.length + 1,
    };
    const updated = [...steps, newStep];
    setSteps(updated);
    handleSectionChange(title, subtitle, updated);
  };

  const handleUpdateStep = (id: string, fields: Partial<Step>) => {
    const updated = steps.map((s) => {
      if (s.id === id) {
        return { ...s, ...fields };
      }
      return s;
    });
    setSteps(updated);
    handleSectionChange(title, subtitle, updated);
  };

  const handleDeleteStep = (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this process step?");
    if (!confirmDelete) return;
    const updated = steps.filter((s) => s.id !== id);
    setSteps(updated);
    handleSectionChange(title, subtitle, updated);
  };

  const handleMove = (index: number, direction: "up" | "down") => {
    if (direction === "up" && index === 0) return;
    if (direction === "down" && index === steps.length - 1) return;

    const targetIndex = direction === "up" ? index - 1 : index + 1;
    const listCopy = [...steps];
    
    // Swap items
    const temp = listCopy[index];
    listCopy[index] = listCopy[targetIndex];
    listCopy[targetIndex] = temp;

    // Reset order
    const reordered = listCopy.map((item, idx) => ({
      ...item,
      order: idx + 1,
    }));

    setSteps(reordered);
    handleSectionChange(title, subtitle, reordered);
  };

  return (
    <div className="space-y-6 select-none max-w-3xl">
      
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
            handleSectionChange(e.target.value, subtitle, steps);
          }}
          placeholder="e.g. Our Development Process"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white"
        />
      </div>

      {/* Subtitle */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Section Subtitle
        </label>
        <textarea
          value={subtitle}
          onChange={(e) => {
            setSubtitle(e.target.value);
            handleSectionChange(title, e.target.value, steps);
          }}
          placeholder="e.g. Step-by-step from blueprint concept to high-fidelity deployment."
          rows={2}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white resize-none"
        />
      </div>

      {/* Steps list */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-[#0F172A]">
            Process Steps List ({steps.length})
          </h3>
          <button
            type="button"
            onClick={handleAddStep}
            className="h-9 px-3.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#2563EB] border border-blue-100/50 text-[12.5px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add Step</span>
          </button>
        </div>

        {steps.length === 0 ? (
          <div className="bg-slate-50 border border-dashed border-slate-200 rounded-[20px] p-8 text-center text-[13.5px] text-slate-450 font-medium">
            No process steps configured. Click &ldquo;Add Step&rdquo; above.
          </div>
        ) : (
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.003)] space-y-4 relative group"
              >
                {/* Reorder and Delete controls */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-lg p-0.5 shrink-0">
                    <button
                      type="button"
                      disabled={index === 0}
                      onClick={() => handleMove(index, "up")}
                      className="h-7 w-7 rounded flex items-center justify-center text-slate-400 hover:text-[#0F172A] hover:bg-white transition-all disabled:opacity-30 cursor-pointer"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      disabled={index === steps.length - 1}
                      onClick={() => handleMove(index, "down")}
                      className="h-7 w-7 rounded flex items-center justify-center text-slate-400 hover:text-[#0F172A] hover:bg-white transition-all disabled:opacity-30 cursor-pointer"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteStep(step.id)}
                    className="h-8 w-8 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-transparent hover:border-rose-100 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Edit fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Step Title */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Title</label>
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => handleUpdateStep(step.id, { title: e.target.value })}
                      placeholder="e.g. Scoping & Strategy"
                      className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
                    />
                  </div>

                  {/* Step number */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Step Number</label>
                    <input
                      type="text"
                      value={step.step_number}
                      onChange={(e) => handleUpdateStep(step.id, { step_number: e.target.value })}
                      placeholder="e.g. 01"
                      className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
                    />
                  </div>

                </div>

                {/* Description */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Description</label>
                  <textarea
                    value={step.description}
                    onChange={(e) => handleUpdateStep(step.id, { description: e.target.value })}
                    placeholder="Describe this development stage..."
                    rows={2}
                    className="w-full rounded-lg border border-[#E2E8F0] p-3 text-[14px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white resize-none"
                  />
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
