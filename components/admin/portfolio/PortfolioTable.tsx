"use client";

import React from "react";
import Image from "next/image";
import { Eye, Edit2, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { Project } from "@/types/portfolio";

interface PortfolioTableProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  onView: (project: Project) => void;
}

export default function PortfolioTable({ projects, onEdit, onDelete, onView }: PortfolioTableProps) {
  
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="overflow-x-auto bg-white rounded-[20px] border border-[#E2E8F0] shadow-[0_8px_30px_rgba(0,0,0,0.005)]">
      <table className="min-w-full divide-y divide-slate-100 text-left">
        
        <thead className="bg-slate-50/50 text-[12px] font-bold text-slate-400 uppercase tracking-wider select-none border-b border-slate-100">
          <tr>
            <th scope="col" className="px-6 py-4">Cover</th>
            <th scope="col" className="px-6 py-4">Title</th>
            <th scope="col" className="px-6 py-4">Category</th>
            <th scope="col" className="px-6 py-4">Client</th>
            <th scope="col" className="px-6 py-4">Project Status</th>
            <th scope="col" className="px-6 py-4">Status</th>
            <th scope="col" className="px-6 py-4">Created</th>
            <th scope="col" className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100 bg-white">
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-slate-50/50 transition-colors">
              
              {/* Cover Image */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="relative h-10 w-16 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 shrink-0">
                  {project.cover_image ? (
                    <Image
                      src={project.cover_image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-slate-350">
                      —
                    </div>
                  )}
                </div>
              </td>

              {/* Title */}
              <td className="px-6 py-4 whitespace-nowrap text-[14.5px] font-bold text-[#0F172A] max-w-[200px] truncate" title={project.title}>
                {project.title}
              </td>

              {/* Category */}
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-semibold text-slate-500">
                {project.category}
              </td>

              {/* Client */}
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-medium text-slate-500">
                {project.client_name || "—"}
              </td>

              {/* Project Status */}
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={project.status} />
              </td>

              {/* Status Badge */}
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge published={project.published} />
              </td>

              {/* Created Date */}
              <td className="px-6 py-4 whitespace-nowrap text-[13.5px] font-semibold text-slate-400">
                {formatDate(project.created_at)}
              </td>

              {/* Actions */}
              <td className="px-6 py-4 whitespace-nowrap text-right text-[14px]">
                <div className="flex items-center gap-1.5 justify-end">
                  
                  {/* View Details */}
                  <button
                    onClick={() => onView(project)}
                    className="h-8 w-8 rounded-lg border border-[#E2E8F0] hover:border-blue-200 bg-white flex items-center justify-center text-slate-400 hover:text-[#2563EB] hover:bg-blue-50/20 transition-all cursor-pointer"
                    title="View Details"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  
                  {/* Edit Project */}
                  <button
                    onClick={() => onEdit(project)}
                    className="h-8 w-8 rounded-lg border border-[#E2E8F0] hover:border-indigo-200 bg-white flex items-center justify-center text-slate-400 hover:text-[#6366F1] hover:bg-indigo-50/20 transition-all cursor-pointer"
                    title="Edit Case Study"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  
                  {/* Delete Project */}
                  <button
                    onClick={() => onDelete(project.id)}
                    className="h-8 w-8 rounded-lg border border-[#E2E8F0] hover:border-rose-200 bg-white flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50/20 transition-all cursor-pointer"
                    title="Delete Case Study"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
