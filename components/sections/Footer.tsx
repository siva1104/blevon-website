"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#64748B] border-t border-[#E2E8F0] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center sm:items-start gap-4 mb-8 text-center sm:text-left">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Blevon Logo"
              width={48}
              height={48}
              className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
            <span className="text-xl font-extrabold text-[#0F172A] tracking-tight">
              Blevon
            </span>
          </Link>
          <p className="text-[14px] leading-relaxed text-[#64748B]">
            Crafting modern websites that help businesses grow.
          </p>
        </div>

        {/* First Divider */}
        <div className="w-full h-px bg-[#E2E8F0] mb-8" />

        {/* Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 text-center sm:text-left">
          
          {/* Company Column */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#0F172A] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-slate-300 select-none text-[12px]">•</span>
                <Link href="/#about" className="text-[15px] font-medium text-[#64748B] hover:text-[#2563EB] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-slate-300 select-none text-[12px]">•</span>
                <Link href="/#services" className="text-[15px] font-medium text-[#64748B] hover:text-[#2563EB] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-slate-300 select-none text-[12px]">•</span>
                <Link href="/#portfolio" className="text-[15px] font-medium text-[#64748B] hover:text-[#2563EB] transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-slate-300 select-none text-[12px]">•</span>
                <Link href="/#contact" className="text-[15px] font-medium text-[#64748B] hover:text-[#2563EB] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#0F172A] mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-slate-300 select-none text-[12px]">•</span>
                <Link href="/privacy" className="text-[15px] font-medium text-[#64748B] hover:text-[#2563EB] transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#0F172A] mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-slate-300 select-none text-[12px]">•</span>
                <a
                  href="mailto:contact@blevon.in"
                  className="text-[15px] font-medium text-[#64748B] hover:text-[#2563EB] transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  contact@blevon.in
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-slate-300 select-none text-[12px]">•</span>
                <a
                  href="https://www.instagram.com/blevon.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-[#64748B] hover:text-[#2563EB] transition-colors duration-200 flex items-center gap-1.5"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0" />
                  @blevon.in (Instagram)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Second Divider */}
        <div className="w-full h-px bg-[#E2E8F0] mb-8" />

        {/* Bottom Row */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[14px] text-slate-400 text-center sm:text-left">
          <span>
            &copy; 2026 Blevon. All rights reserved.
          </span>
          <span>
            Designed & Developed by Blevon.
          </span>
        </div>

      </div>
    </footer>
  );
}
