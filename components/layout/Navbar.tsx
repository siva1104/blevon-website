"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Blevon", href: "/#why-choose" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll event for navbar style transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor active section for scroll highlights
  useEffect(() => {
    const handleIntersection = () => {
      const sections = ["about", "services", "why-choose", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 100) {
        setActiveSection("Home");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const matchedLabel = navItems.find(item => item.href.endsWith(`#${section}`))?.label || "";
            setActiveSection(matchedLabel);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleIntersection);
    // Initial call
    handleIntersection();
    return () => window.removeEventListener("scroll", handleIntersection);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] h-20"
          : "bg-transparent h-20"
      }`}
    >
      <nav
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8 relative"
        aria-label="Global"
      >
        {/* Left: Brand Logo & Text */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0 z-10">
          <Image
            src="/logo.svg"
            alt="Blevon Logo"
            width={60}
            height={60}
            className="h-[56px] w-auto object-contain transition-transform duration-300 hover:scale-105"
            priority
          />
          <span className="text-xl font-extrabold text-[#0F172A] tracking-tight">
            Blevon
          </span>
        </Link>

        {/* Center: Perfectly Centered Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = activeSection === item.label || (item.label === "Home" && activeSection === "Home");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1.5 text-[16px] transition-colors duration-300 group/link ${
                  isActive ? "text-[#2563EB] font-semibold" : "text-[#334155] hover:text-[#2563EB] font-medium"
                }`}
              >
                {item.label}
                {/* Underline Indicator */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#2563EB] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover/link:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right: CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-4 shrink-0 z-10">
          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] px-6 h-11 text-[16px] font-semibold text-white hover:shadow-lg hover:shadow-[#2563EB]/15 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <Link href="#contact" className="flex items-center gap-1.5">
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-white/50 text-slate-700 hover:bg-white lg:hidden transition-colors"
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* ── Mobile Navigation (Full-screen Slide-out) ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm lg:hidden"
            />

            {/* Full-screen panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl border-l border-slate-100 lg:hidden"
            >
              {/* Mobile Header — same 80px height */}
              <div className="flex h-20 shrink-0 items-center justify-between px-6 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="h-[56px] w-auto object-contain"
                  />
                  <span className="text-xl font-extrabold text-slate-900">
                    Blevon
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-slate-100 text-slate-500 hover:bg-slate-50 transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-6 pt-8">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.label || (item.label === "Home" && activeSection === "Home");
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-[12px] px-4 py-4 text-[16px] transition-colors ${
                            isActive 
                              ? "bg-blue-50/50 text-[#2563EB] font-semibold" 
                              : "text-slate-800 hover:bg-slate-50 hover:text-[#2563EB] font-medium"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="shrink-0 p-6 border-t border-slate-100">
                <Button
                  asChild
                  className="w-full h-12 rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white text-[16px] font-semibold hover:shadow-lg hover:shadow-[#2563EB]/15 hover:-translate-y-0.5 transition-all duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  <Link href="#contact" className="flex items-center justify-center gap-2">
                    Start Your Project
                    <ArrowRight className="h-4.5 w-4.5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
