"use client";

import React from "react";

export function BlevonLogo({ className = "h-8" }) {
  return (
    <div className={`inline-flex items-center gap-2.5 text-white select-none ${className}`}>
      {/* Luminous Constellation Emblem */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto aspect-square text-blue-500 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer radial connector lines */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const isLong = idx % 2 === 0;
          const r1 = 18;
          const r2 = isLong ? 40 : 28;
          const x1 = 50 + r1 * Math.cos(rad);
          const y1 = 50 + r1 * Math.sin(rad);
          const x2 = 50 + r2 * Math.cos(rad);
          const y2 = 50 + r2 * Math.sin(rad);
          return (
            <g key={angle}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#60A5FA"
                strokeWidth={isLong ? "2" : "1.5"}
                strokeOpacity={isLong ? "0.9" : "0.7"}
              />
              <circle
                cx={x2}
                cy={y2}
                r={isLong ? 4.5 : 3}
                fill={isLong ? "#38BDF8" : "#93C5FD"}
              />
            </g>
          );
        })}

        {/* Inner dense ray accents */}
        {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + 16 * Math.cos(rad);
          const y1 = 50 + 16 * Math.sin(rad);
          const x2 = 50 + 22 * Math.cos(rad);
          const y2 = 50 + 22 * Math.sin(rad);
          return (
            <line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#93C5FD"
              strokeWidth="1.2"
              strokeOpacity="0.8"
            />
          );
        })}

        {/* Center glowing core */}
        <circle cx="50" cy="50" r="14" fill="#1D4ED8" />
        <circle cx="50" cy="50" r="10" fill="#3B82F6" />
        <circle cx="50" cy="50" r="5" fill="#FFFFFF" />
      </svg>

      {/* Brand Name Typography */}
      <span className="font-extrabold tracking-[0.2em] text-white text-lg sm:text-xl font-sans leading-none">
        BLEVON
      </span>
    </div>
  );
}
