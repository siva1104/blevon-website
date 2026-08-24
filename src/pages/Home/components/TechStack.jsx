"use client";

import React from "react";
import { motion } from "framer-motion";

// Official Tech Icons (scaling to parent container)
const ICONS = {
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="size-full shrink-0" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 180 180" className="size-full shrink-0" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <path
        d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
        fill="url(#next_grad)"
      />
      <rect x="115" y="54" width="12" height="72" fill="url(#next_grad_2)" />
      <defs>
        <linearGradient id="next_grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="next_grad_2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 410 404" className="size-full shrink-0" fill="none">
      <path
        d="M399.641 59.5246L215.643 388.545C211.835 395.349 202.074 395.449 198.125 388.723L9.32926 66.8614C5.00624 59.4977 10.4549 50.4079 18.9959 50.672L389.92 62.1601C398.549 62.4274 403.957 71.8214 399.641 79.5246Z"
        fill="url(#vite_grad1)"
      />
      <path
        d="M292.965 1.57446L156.801 28.2541C154.563 28.6926 152.909 30.5707 152.779 32.8465L144.449 178.618C144.256 181.996 147.261 184.619 150.551 183.942L189.626 175.901C193.072 175.192 195.845 178.487 194.887 181.884L177.551 243.351C176.621 246.647 180.207 249.467 183.178 247.785L213.682 230.509C216.711 228.794 220.457 231.42 219.827 234.857L208.572 296.241C207.697 301.011 213.649 303.954 216.772 300.279L220.354 296.064L317.062 147.962C319.434 144.329 316.774 139.516 312.383 139.589L272.548 140.252C268.087 140.326 265.405 135.32 267.925 131.636L301.066 83.1979C303.407 79.7766 301.077 75.1098 296.938 74.9664L292.965 1.57446Z"
        fill="url(#vite_grad2)"
      />
      <defs>
        <linearGradient id="vite_grad1" x1="48.5" y1="5.5" x2="333" y2="343.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite_grad2" x1="220" y1="36.5" x2="216.5" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA83" />
          <stop offset="0.0833333" stopColor="#FFDD35" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 54 33" className="size-full shrink-0" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
        fill="#38BDF8"
      />
    </svg>
  ),
  flutter: (
    <svg viewBox="0 0 166 202" className="size-full shrink-0" fill="none">
      <path d="M102.5 0L0 102.5L31.5 134L165.5 0H102.5Z" fill="#47C5FB" />
      <path d="M102.5 99.5L50 152L81.5 183.5L113 152L165.5 99.5H102.5Z" fill="#47C5FB" />
      <path d="M81.5 183.5L100 202H165.5L113 152L81.5 183.5Z" fill="#00569E" />
      <path d="M113 152L81.5 183.5L102.5 141.5L165.5 99.5L113 152Z" fill="#00B5F8" />
    </svg>
  ),
  reactNative: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="size-full shrink-0" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  expo: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="currentColor">
      <path d="M1.998 19.539l8.677-15.029a1.536 1.536 0 0 1 2.658 0l8.669 15.029a1.537 1.537 0 0 1-1.33 2.304H3.328a1.537 1.537 0 0 1-1.33-2.304zm9.998-12.238L4.35 18.843h15.297L11.996 7.301z" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 32 32" className="size-full shrink-0" fill="none">
      <path
        d="M16 2.5L3.5 9.7V22.3L16 29.5L28.5 22.3V9.7L16 2.5Z"
        fill="#5FA04E"
      />
      <path
        d="M16 13.5C14.1 13.5 13 14.3 13 15.6C13 18.7 19 16.9 19 20C19 21.4 17.7 22.2 16 22.2C13.8 22.2 12.8 21.1 12.8 21.1L11.8 22.5C11.8 22.5 13.3 24 16 24C18.8 24 20.8 22.4 20.8 20.1C20.8 16.8 14.8 18.6 14.8 15.7C14.8 14.7 15.6 14.2 16.7 14.2C18.4 14.2 19.4 15 19.4 15L20.4 13.6C20.4 13.6 18.9 12.5 16 12.5V13.5Z"
        fill="white"
      />
    </svg>
  ),
  express: (
    <div className="flex size-full items-center justify-center font-mono text-sm font-bold tracking-tight text-[#101828]">
      ex
    </div>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="none">
      <path
        d="M12 1.5C11.7 1.5 11.5 1.7 11.4 2C9.8 4.7 6.5 10.8 7.2 15.6C7.8 19.5 10.6 22.2 11.7 22.9C11.9 23 12.1 23 12.3 22.9C13.4 22.2 16.2 19.5 16.8 15.6C17.5 10.8 14.2 4.7 12.6 2C12.5 1.7 12.3 1.5 12 1.5Z"
        fill="#00ED64"
      />
      <path
        d="M12 2.5V22.2C11.9 22.2 11.8 22.1 11.7 22.1C10.7 21.4 8.2 19 7.7 15.5C7.1 11.2 9.9 5.8 11.4 3.1C11.6 2.8 11.8 2.6 12 2.5Z"
        fill="#00684A"
      />
      <path
        d="M12 22.5V17C12 17 10.7 15.5 10.7 14C10.7 12.5 12 11.5 12 11.5V2.5C12 2.5 12.2 2.7 12.4 3C13.8 5.7 16.5 11 16 15.3C15.6 18.8 13.2 21.3 12.2 22C12.1 22.2 12.1 22.4 12 22.5Z"
        fill="#00ED64"
      />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="#336791">
      <path d="M12.002 2C6.479 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 7.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-9.998-10z" />
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="#000000">
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  ),
  cloudflare: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="#F38020">
      <path d="M18.2 10.1C17.7 7.2 15.2 5 12.2 5c-2.4 0-4.5 1.4-5.5 3.5C6.3 8.2 5.9 8.1 5.5 8.1 3 8.1 1 10.1 1 12.6c0 2.5 2 4.5 4.5 4.5h12.7c2.6 0 4.8-2.1 4.8-4.8 0-2.4-1.9-4.4-4.8-4.8v-.4z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="#181717">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="none">
      <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83" />
      <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF" />
      <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E" />
      <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262" />
      <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8H12V0Z" fill="#1ABCFE" />
    </svg>
  ),
};

const ALL_TECHNOLOGIES = [
  { name: "React", icon: ICONS.react },
  { name: "Next.js", icon: ICONS.nextjs },
  { name: "Vite", icon: ICONS.vite },
  { name: "Tailwind CSS", icon: ICONS.tailwind },
  { name: "Flutter", icon: ICONS.flutter },
  { name: "React Native", icon: ICONS.reactNative },
  { name: "Expo", icon: ICONS.expo },
  { name: "Node.js", icon: ICONS.nodejs },
  { name: "Express", icon: ICONS.express },
  { name: "MongoDB", icon: ICONS.mongodb },
  { name: "PostgreSQL", icon: ICONS.postgresql },
  { name: "Vercel", icon: ICONS.vercel },
  { name: "Cloudflare", icon: ICONS.cloudflare },
  { name: "GitHub", icon: ICONS.github },
  { name: "Figma", icon: ICONS.figma },
];

// Doubled array for seamless infinite marquee loop
const MARQUEE_ITEMS = [...ALL_TECHNOLOGIES, ...ALL_TECHNOLOGIES];

export function TechStack() {
  return (
    <section
      id="technology"
      className="relative w-full py-12 sm:py-16 md:py-18 overflow-hidden"
    >
      <div className="global-container">
        {/* Section Header: Centered */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <span className="mb-2.5 inline-block text-xs font-semibold tracking-[0.22em] text-[#2563EB] uppercase sm:text-sm">
            TECHNOLOGY
          </span>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#101828] sm:text-3xl lg:text-4xl leading-[1.15]">
            Modern tools. Built for real products.
          </h2>
        </div>

        {/* Animated Infinite Loop Horizontal Marquee */}
        <div className="relative w-full overflow-hidden mask-fade-edges">
          {/* Subtle edge gradient fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-20 bg-gradient-to-r from-[#F7F8F6] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-20 bg-gradient-to-l from-[#F7F8F6] to-transparent" />

          {/* Smooth Continuous Animated Row */}
          <motion.div
            className="flex w-max items-center gap-3 sm:gap-4 py-3"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 32,
                ease: "linear",
              },
            }}
            whileHover={{ transition: { duration: 0 } }}
          >
            {MARQUEE_ITEMS.map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="group flex shrink-0 items-center gap-2.5 rounded-xl border border-[#E4E7EC] bg-white px-4 py-2.5 sm:px-5 sm:py-3 shadow-xs transition-all duration-200 hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex size-5 sm:size-6 shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  {tech.icon}
                </div>
                <span className="whitespace-nowrap text-sm sm:text-base font-semibold tracking-tight text-[#101828] transition-colors duration-200 group-hover:text-[#2563EB]">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
