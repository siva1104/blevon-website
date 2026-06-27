import React from "react";
import PortfolioCard from "./PortfolioCard";
import { Project } from "@/types/portfolio";

interface PortfolioGridProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  onView: (project: Project) => void;
}

export default function PortfolioGrid({ projects, onEdit, onDelete, onView }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <PortfolioCard
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
}
