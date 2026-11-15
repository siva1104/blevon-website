"use client";

import React from "react";
import { motion } from "framer-motion";

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
      <path d="M16 2.5L3.5 9.7V22.3L16 29.5L28.5 22.3V9.7L16 2.5Z" fill="#5FA04E" />
      <path
        d="M16 13.5C14.1 13.5 13 14.3 13 15.6C13 18.7 19 16.9 19 20C19 21.4 17.7 22.2 16 22.2C13.8 22.2 12.8 21.1 12.8 21.1L11.8 22.5C11.8 22.5 13.3 24 16 24C18.8 24 20.8 22.4 20.8 20.1C20.8 16.8 14.8 18.6 14.8 15.7C14.8 14.7 15.6 14.2 16.7 14.2C18.4 14.2 19.4 15 19.4 15L20.4 13.6C20.4 13.6 18.9 12.5 16 12.5V13.5Z"
        fill="white"
      />
    </svg>
  ),
  express: (
    <div className="flex size-full items-center justify-center font-mono text-xs font-semibold tracking-tight text-[#0F172A]">
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
  swift: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="none">
      <rect width="24" height="24" rx="5.5" fill="url(#swift_grad)" />
      <path
        d="M17.7 15.6C17.6 15.3 17.4 15 17.1 14.7C18 13.2 18.1 11.1 17.1 9C15.9 6.6 13.4 5.3 11.5 4.7C13 6.5 13.9 8.5 13.9 10.1C11.7 8.4 9.2 6.3 7.5 4.7C8 5.7 9.1 7.3 10.5 8.8C8.8 7.8 6.9 6.3 5.7 5.2C6.4 6.6 7.8 8.4 9.7 9.9C11.1 11 12.6 11.8 13.8 12.2C12.5 13 10.5 13.3 8.3 12.4C6.9 11.9 5.6 10.9 4.7 9.8C5.5 12 7.5 14.3 10.3 15.2C12.4 15.9 14.3 15.7 15.6 15C16.3 15.6 17.2 16.2 18.2 16.4C18.5 16.5 18.7 16.1 18.4 15.9C18.1 15.8 17.9 15.7 17.7 15.6Z"
        fill="white"
      />
      <defs>
        <linearGradient id="swift_grad" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAA634" />
          <stop offset="1" stopColor="#F05138" />
        </linearGradient>
      </defs>
    </svg>
  ),
  xcode: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="none">
      <rect width="24" height="24" rx="5.5" fill="url(#xcode_grad)" />
      <path
        d="M15.8 5.2L18.8 8.2L16.7 10.3L15.1 8.7L8.2 17.8L6.2 15.8L13.6 7.2L12.1 5.7L14.2 3.6L15.8 5.2ZM6.6 7.4L17.4 16.6L16 18L5.2 8.8L6.6 7.4Z"
        fill="white"
      />
      <defs>
        <linearGradient id="xcode_grad" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2097FF" />
          <stop offset="1" stopColor="#0D62D6" />
        </linearGradient>
      </defs>
    </svg>
  ),
  kotlin: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="none">
      <path d="M2 2H12.2L2 12.5V2Z" fill="#29B6F6" />
      <path d="M2 22L22 2H12.2L2 12.2V22Z" fill="url(#kotlin_grad1)" />
      <path d="M2 22L12.2 11.8L22 22H2Z" fill="url(#kotlin_grad2)" />
      <defs>
        <linearGradient id="kotlin_grad1" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C757BC" />
          <stop offset="0.5" stopColor="#F88909" />
          <stop offset="1" stopColor="#FF8C00" />
        </linearGradient>
        <linearGradient id="kotlin_grad2" x1="2" y1="22" x2="17" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0095D5" />
          <stop offset="1" stopColor="#7F52FF" />
        </linearGradient>
      </defs>
    </svg>
  ),
  androidStudio: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="none">
      <path
        d="M17.6 9.48L19.44 6.3C19.6 6.02 19.51 5.66 19.23 5.5C18.95 5.34 18.59 5.43 18.43 5.71L16.56 8.95C15.19 8.32 13.64 7.97 12 7.97C10.36 7.97 8.81 8.32 7.44 8.95L5.57 5.71C5.41 5.43 5.05 5.34 4.77 5.5C4.49 5.66 4.4 6.02 4.56 6.3L6.4 9.48C3.3 11.24 1.2 14.47 1 18.25H23C22.8 14.47 20.7 11.24 17.6 9.48ZM7 15.25C6.31 15.25 5.75 14.69 5.75 14C5.75 13.31 6.31 12.75 7 12.75C7.69 12.75 8.25 13.31 8.25 14C8.25 14.69 7.69 15.25 7 15.25ZM17 15.25C16.31 15.25 15.75 14.69 15.75 14C15.75 13.31 16.31 12.75 17 12.75C17.69 12.75 18.25 13.31 18.25 14C18.25 14.69 17.69 15.25 17 15.25Z"
        fill="#3DDC84"
      />
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" className="size-full shrink-0" fill="none">
      <path d="M4.2 18.6L6.6 3.5C6.7 2.9 7.5 2.7 7.8 3.2L11.4 9.9L4.2 18.6Z" fill="#FFA000" />
      <path d="M4.2 18.6L13.1 7.6C13.4 7.2 14.1 7.3 14.3 7.8L16.5 13.2L4.2 18.6Z" fill="#F57F17" />
      <path d="M19.8 18.6L17.4 6.8C17.3 6.2 16.5 6 16.1 6.5L4.2 18.6L11.1 22.4C11.7 22.7 12.4 22.7 13 22.4L19.8 18.6Z" fill="#FFCA28" />
    </svg>
  ),
};

const ALL_TECHNOLOGIES = [
  { name: "React", icon: ICONS.react },
  { name: "Next.js", icon: ICONS.nextjs },
  { name: "Vite", icon: ICONS.vite },
  { name: "Tailwind CSS", icon: ICONS.tailwind },
  { name: "Swift (iOS)", icon: ICONS.swift },
  { name: "Xcode", icon: ICONS.xcode },
  { name: "Kotlin", icon: ICONS.kotlin },
  { name: "Android Studio", icon: ICONS.androidStudio },
  { name: "Flutter", icon: ICONS.flutter },
  { name: "React Native", icon: ICONS.reactNative },
  { name: "Expo", icon: ICONS.expo },
  { name: "Firebase", icon: ICONS.firebase },
  { name: "Node.js", icon: ICONS.nodejs },
  { name: "Express", icon: ICONS.express },
  { name: "MongoDB", icon: ICONS.mongodb },
  { name: "PostgreSQL", icon: ICONS.postgresql },
  { name: "Vercel", icon: ICONS.vercel },
  { name: "Cloudflare", icon: ICONS.cloudflare },
  { name: "GitHub", icon: ICONS.github },
  { name: "Figma", icon: ICONS.figma },
];

export function TechStack() {
  return (
    <section
      id="technology"
      className="relative w-full bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <div className="global-container relative z-10">
        {/* Section Header: Centered */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2457E6]/20 bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase shadow-xs">
            TECHNOLOGY STACK
          </span>
          <h2 className="font-heading text-[28px] sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]">
            Modern Tools.{" "}
            <span className="bg-gradient-to-r from-[#2457E6] via-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">
              Engineered for Scale.
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14.5px] sm:text-[15.5px] text-[#526077] leading-[1.65]">
            The core frameworks, cloud databases, and infrastructure we use to
            build fast, scalable web, mobile, and e-commerce applications.
          </p>
        </div>

        {/* All Technologies Displayed - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-3.5 max-w-5xl mx-auto">
          {ALL_TECHNOLOGIES.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: idx * 0.025,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white/90 backdrop-blur-md px-4 py-3.5 shadow-[0_1px_2px_rgba(15,23,42,0.02)] transition-all duration-200 hover:border-[#2457E6]/35 hover:shadow-[0_8px_20px_-4px_rgba(36,87,230,0.08)] hover:-translate-y-0.5"
            >
              <div className="flex size-5 sm:size-6 shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-105">
                {tech.icon}
              </div>
              <span className="truncate font-heading text-[13.5px] sm:text-[14px] font-medium tracking-[-0.01em] text-[#0B132B] transition-colors duration-200 group-hover:text-[#2457E6]">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const TechStackSection = TechStack;
export default TechStack;
