import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

/**
 * Consistent, accessible Breadcrumb navigation component
 * Ensures uniform item spacing, vertically centered text & separators,
 * clean mobile wrapping, and balanced spacing above hero headings.
 */
export function Breadcrumb({ items = [], theme = "light", className = "mb-6 sm:mb-7" }) {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`w-full ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs sm:text-[12.5px] font-medium leading-none tracking-[-0.01em]">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const isFirst = idx === 0;

          return (
            <li
              key={`${item.label}-${idx}`}
              className="inline-flex items-center gap-2 min-w-0"
            >
              {idx > 0 && (
                <ChevronRight
                  className={`size-3 shrink-0 ${
                    isDark ? "text-slate-400" : "text-[#94A3B8]"
                  }`}
                  aria-hidden="true"
                />
              )}

              {isLast || !item.to ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={`inline-flex items-center py-0.5 font-medium leading-snug ${
                    isDark ? "text-white" : "text-[#0B132B]"
                  }`}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className={`inline-flex items-center gap-1.5 py-0.5 leading-snug transition-colors duration-200 ${
                    isDark
                      ? "text-slate-300 hover:text-white"
                      : "text-[#64748B] hover:text-[#2457E6]"
                  }`}
                >
                  {isFirst && (
                    <Home
                      className={`size-3.5 shrink-0 ${
                        isDark ? "text-[#60A5FA]" : "text-[#2457E6]"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
