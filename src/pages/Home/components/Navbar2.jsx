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
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F8F6]/90 backdrop-blur-md border-b border-[#E4E7EC] shadow-xs"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <div className="global-container flex h-20 sm:h-22 md:h-24 items-center justify-between">
        {/* Left: Official BLEVON Logo */}
        <div className="flex items-center">
          <a
            href="/"
            className="flex items-center transition-opacity duration-200 hover:opacity-90 focus:outline-none"
            aria-label="Blevon Home"
          >
            <img
              src={blevonLogo}
              alt="BLEVON"
              className="h-14 sm:h-16 md:h-18 w-auto max-w-[190px] sm:max-w-[220px] md:max-w-[240px] object-contain"
            />
          </a>
        </div>

        {/* Center: Desktop Navigation Links (Work, Services, About, Contact) */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative rounded-full px-3 py-1.5 text-[13.5px] font-semibold text-[#101828] transition-all duration-200 hover:text-[#2563EB]"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 z-0 rounded-full bg-transparent transition-all duration-200 group-hover:bg-[#EAF1FF]" />
            </a>
          ))}
        </nav>

        {/* Right: Desktop Primary CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/contact"
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#2563EB] px-5 text-[13.5px] font-semibold text-white shadow-[0_2px_10px_rgba(37,99,235,0.25)] transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Mobile: Logo | Menu (Start a Project button hidden on mobile top bar) */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex size-9 items-center justify-center rounded-xl border border-[#E4E7EC] bg-white text-[#101828] shadow-sm transition-colors duration-200 hover:bg-[#EAF1FF] focus:outline-none"
          >
            <svg
              className="size-4.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-[#E4E7EC] bg-white px-5 py-4 md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#101828] hover:bg-[#EAF1FF] hover:text-[#2563EB]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-[#E4E7EC]">
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10.5 w-full items-center justify-center gap-2 rounded-full bg-[#2563EB] text-sm font-semibold text-white shadow-[0_2px_10px_rgba(37,99,235,0.22)] hover:bg-blue-700 active:scale-[0.99]"
                >
                  <span>Start a Project</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
