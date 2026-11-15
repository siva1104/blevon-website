"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { HERO_OFFERS_CONFIG } from "@/data/offers";

export function AnnouncementBar() {
  const items = HERO_OFFERS_CONFIG.marqueeItems;
  const trackGroup = [...items, ...items, ...items];

  const renderGroup = (groupKey) => (
    <div
      key={groupKey}
      className="flex shrink-0 items-center justify-around"
      aria-hidden={groupKey === "duplicate" ? "true" : undefined}
    >
      {trackGroup.map((item, idx) => {
        const isGold = item.accentTone === "gold";
        return (
          <div
            key={`${groupKey}-${item.id}-${idx}`}
            className="inline-flex items-center"
          >
            <Link
              to={item.href}
              tabIndex={groupKey === "duplicate" ? -1 : 0}
              className="group inline-flex h-14 sm:h-16 items-center gap-3 px-5 text-sm sm:text-base lg:text-[17px] font-medium text-white/95 hover:text-white focus:outline-none focus-visible:underline"
            >
              <span aria-hidden="true" className="text-lg sm:text-xl leading-none">
                {item.emoji}
              </span>
              <span
                className={`rounded-lg px-3 py-1 text-xs sm:text-[13px] font-extrabold uppercase tracking-wider shadow-2xs ${
                  isGold
                    ? "bg-amber-400 text-[#101B3A]"
                    : "bg-[#2457E6] text-white"
                }`}
              >
                {item.badgeLabel || (isGold ? "$1,999 Offer" : "$999 Offer")}
              </span>
              <span
                className={`font-bold tracking-tight transition-colors ${
                  isGold
                    ? "text-amber-300 group-hover:text-amber-200"
                    : "text-[#93C5FD] group-hover:text-white"
                }`}
              >
                {item.highlight}
              </span>
              <span className="text-white/40" aria-hidden="true">
                ·
              </span>
              <span className="text-slate-200 font-medium">{item.detail}</span>
              <span className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1 text-xs sm:text-sm font-bold text-white group-hover:bg-amber-400 group-hover:text-[#101B3A] transition-colors">
                <span>Claim</span>
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
            <span
              className="px-5 text-amber-400/90 text-sm select-none"
              aria-hidden="true"
            >
              ✦
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      role="region"
      aria-label="Scrolling Promotional Offers"
      className="relative z-20 h-14 sm:h-16 w-full overflow-hidden bg-[#101B3A] border-y border-[#2457E6]/35 text-white flex items-center shadow-md"
    >
      <div className="animate-blevon-marquee motion-reduce:animate-none flex items-center whitespace-nowrap">
        {renderGroup("primary")}
        {renderGroup("duplicate")}
      </div>
    </div>
  );
}

export default AnnouncementBar;
