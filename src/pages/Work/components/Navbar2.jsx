"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blevonLogo from "../../../assets/images/logo/logo_blue.png";

export function Navbar2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (e, href) => {
    if (href === "/#services") {
      if (window.location.pathname === "/") {
        e.preventDefault();
        const el = document.getElementById("services");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F8F6]/85 backdrop-blur-md border-b border-[#E4E7EC] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 sm:h-28 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <div className="flex items-center">
          <a
            href="/"
            className="flex items-center transition-opacity duration-200 hover:opacity-90 focus:outline-none"
            aria-label="Blevon Home"
          >
            <img
              src={blevonLogo}
              alt="BLEVON"
              className="h-[66px] w-[165px] sm:h-[80px] sm:w-[200px] object-contain"
            />
          </a>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative rounded-full px-4 py-2 text-base font-medium text-[#101828] transition-all duration-200 hover:text-[#2563EB]"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 z-0 rounded-full bg-transparent transition-all duration-200 group-hover:bg-[#EAF1FF]" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex size-10 items-center justify-center rounded-xl border border-[#E4E7EC] bg-white text-[#101828] shadow-sm transition-colors duration-200 hover:bg-[#EAF1FF] focus:outline-none"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[#E4E7EC] bg-[#F7F8F6]/98 px-6 py-6 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-xl px-4 py-3 text-lg font-medium text-[#101828] transition-colors duration-150 hover:bg-[#EAF1FF] hover:text-[#2563EB]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-4 border-t border-[#E4E7EC]">
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2563EB] py-3.5 text-center text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700"
                >
                  <span>Start a Project →</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
