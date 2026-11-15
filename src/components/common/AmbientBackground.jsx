"use client";

import React from "react";

/**
 * Unified Page-Wide Ambient Color Canvas.
 * Provides a single continuous background across the entire page with:
 * - Soft multi-tone aurora color washes (Cobalt, Indigo, Cyan, Violet)
 * - Subtle architectural grid pattern
 */
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#FAFBFD]"
      aria-hidden="true"
    >
      {/* 1. Continuous Multi-Tone Aurora Color Mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(45% 38% at 15% 12%, rgba(36, 87, 230, 0.11) 0%, rgba(36, 87, 230, 0) 100%),
            radial-gradient(42% 36% at 85% 18%, rgba(124, 58, 237, 0.10) 0%, rgba(124, 58, 237, 0) 100%),
            radial-gradient(48% 40% at 78% 58%, rgba(6, 182, 212, 0.09) 0%, rgba(6, 182, 212, 0) 100%),
            radial-gradient(45% 40% at 18% 75%, rgba(99, 102, 241, 0.09) 0%, rgba(99, 102, 241, 0) 100%),
            radial-gradient(40% 32% at 50% 45%, rgba(59, 130, 246, 0.06) 0%, rgba(255, 255, 255, 0) 100%)
          `,
        }}
      />

      {/* 2. Subtle Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-75"
        style={{
          backgroundSize: "56px 56px",
          backgroundImage: `
            linear-gradient(to right, rgba(36, 87, 230, 0.042) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(36, 87, 230, 0.042) 1px, transparent 1px)
          `,
          maskImage:
            "radial-gradient(ellipse 90% 85% at 50% 50%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 85% at 50% 50%, #000 30%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default AmbientBackground;
