"use client";

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import blevonLogo from "@/assets/images/logo/logo_blue.png";
import {
  ChevronDown,
  Globe,
  Building2,
  ShoppingBag,
  Smartphone,
  Cpu,
  ShoppingCart,
  Code2,
  Layers,
  ArrowUpRight,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";

const SERVICE_MENU_ITEMS = [
  {
    title: "Website Development",
    href: "/services/website-development",
    icon: Globe,
  },
  {
    title: "App Development",
    href: "/services/app-development",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    icon: Layers,
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const dropdownContainerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsServicesDropdownOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 140);
  };

  const isServicesActive =
    location.pathname.startsWith("/services") ||
    location.pathname === "/packages";
  const isPortfolioActive =
    location.pathname.startsWith("/portfolio") ||
    location.pathname.startsWith("/work") ||
    location.pathname.startsWith("/case-study");

  const isTransparentTop =
    !isScrolled && !isMobileMenuOpen && !isServicesDropdownOpen;

  const handleGoHome = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleGoDemos = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    const el = document.getElementById("demos");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 40);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        isTransparentTop
          ? "bg-transparent border-b border-transparent"
          : "bg-white/88 backdrop-blur-xl border-b border-[#E2E8F0]/80 shadow-[0_1px_3px_rgba(15,23,42,0.03)]"
      }`}
    >
      <div className="global-container flex h-[68px] sm:h-[76px] items-center justify-between gap-4">
        {/* Left: Official Blevon Logo */}
        <Link
          to="/"
          onClick={handleGoHome}
          className="flex items-center shrink-0 transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2457E6] rounded-lg"
          aria-label="Blevon Home"
        >
          <img
            src={blevonLogo}
            alt="Blevon Agency"
            className="h-12 sm:h-14 w-auto max-w-[195px] object-contain"
          />
        </Link>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main Navigation"
        >
          {/* Home */}
          <Link
            to="/"
            onClick={handleGoHome}
            className={`relative rounded-full px-3.5 py-1.5 text-[13.5px] font-medium transition-all duration-200 ${
              location.pathname === "/"
                ? "text-[#2457E6] bg-[#F3F7FF]"
                : "text-[#334155] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown Trigger */}
          <div
            ref={dropdownContainerRef}
            className="relative"
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
          >
            <button
              type="button"
              onClick={() => setIsServicesDropdownOpen((prev) => !prev)}
              aria-expanded={isServicesDropdownOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[13.5px] font-medium transition-all duration-200 cursor-pointer ${
                isServicesActive || isServicesDropdownOpen
                  ? "text-[#2457E6] bg-[#F3F7FF]"
                  : "text-[#334155] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${
                  isServicesDropdownOpen
                    ? "rotate-180 text-[#2457E6]"
                    : "text-[#64748B]"
                }`}
              />
            </button>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full pt-2.5 w-[310px] z-50"
                >
                  <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white/95 backdrop-blur-xl p-2 shadow-[0_20px_48px_-12px_rgba(15,23,42,0.12)]">
                    <div className="flex flex-col gap-1">
                      {SERVICE_MENU_ITEMS.map((item) => {
                        const IconComponent = item.icon;
                        const active = location.pathname === item.href;
                        const isOffer = item.isOffer;
                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            className={`group flex items-center gap-3 rounded-xl border px-2.5 py-2 transition-all duration-200 ${
                              active
                                ? "border-[#2457E6]/40 bg-[#F3F7FF]"
                                : isOffer
                                  ? "border-[#2457E6]/25 bg-[#F8FAFC] hover:border-[#2457E6]/50 hover:bg-[#F3F7FF]/60"
                                  : "border-transparent bg-white hover:border-[#E2E8F0] hover:bg-[#F8FAFC]"
                            }`}
                          >
                            <div
                              className={`flex size-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200 ${
                                active
                                  ? "border-[#2457E6] bg-[#2457E6] text-white"
                                  : isOffer
                                    ? "border-[#0F172A] bg-[#0F172A] text-white group-hover:border-[#2457E6] group-hover:bg-[#2457E6]"
                                    : "border-[#E2E8F0] bg-[#F8FAFC] text-[#2457E6] group-hover:border-[#2457E6] group-hover:bg-[#2457E6] group-hover:text-white"
                              }`}
                            >
                              <IconComponent className="size-4 shrink-0" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <span
                                  className={`font-heading text-[13px] font-semibold transition-colors truncate ${
                                    active
                                      ? "text-[#2457E6]"
                                      : "text-[#0F172A] group-hover:text-[#2457E6]"
                                  }`}
                                >
                                  {item.title}
                                </span>
                                {isOffer && (
                                  <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[#2457E6]/10 px-2 py-0.5 text-[10px] font-medium text-[#2457E6]">
                                    <Sparkles className="size-2.5" />
                                    <span>Packages</span>
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portfolio */}
          <Link
            to="/portfolio"
            className={`relative rounded-full px-3.5 py-1.5 text-[13.5px] font-medium transition-all duration-200 ${
              isPortfolioActive
                ? "text-[#2457E6] bg-[#F3F7FF]"
                : "text-[#334155] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
            }`}
          >
            Portfolio
          </Link>

          {/* Demos */}
          <Link
            to="/#demos"
            onClick={handleGoDemos}
            className={`relative rounded-full px-3.5 py-1.5 text-[13.5px] font-medium transition-all duration-200 ${
              location.hash === "#demos" ||
              location.pathname.startsWith("/demos")
                ? "text-[#2457E6] bg-[#F3F7FF]"
                : "text-[#334155] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
            }`}
          >
            Demos
          </Link>

          {/* About Us */}
          <Link
            to="/about"
            className={`relative rounded-full px-3.5 py-1.5 text-[13.5px] font-medium transition-all duration-200 ${
              location.pathname === "/about"
                ? "text-[#2457E6] bg-[#F3F7FF]"
                : "text-[#334155] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
            }`}
          >
            About Us
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={`relative rounded-full px-3.5 py-1.5 text-[13.5px] font-medium transition-all duration-200 ${
              location.pathname === "/contact"
                ? "text-[#2457E6] bg-[#F3F7FF]"
                : "text-[#334155] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right: Compact Consultation Pill CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex h-9 sm:h-[38px] items-center justify-center gap-1.5 rounded-full bg-[#0F172A] px-4.5 text-[13px] font-medium text-white shadow-[0_4px_14px_-2px_rgba(15,23,42,0.2),inset_0_1px_0_0_rgba(255,255,255,0.18)] transition-all duration-200 hover:bg-[#2457E6] hover:shadow-[0_6px_20px_-3px_rgba(36,87,230,0.35)] hover:-translate-y-0.5"
          >
            <span>Get a Free Consultation</span>
            <ArrowUpRight className="size-3.5 shrink-0 text-white/85 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={
              isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="flex size-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white/90 backdrop-blur-md text-[#0F172A] transition-all duration-200 hover:bg-[#F8FAFC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457E6]"
          >
            {isMobileMenuOpen ? (
              <X className="size-4.5" />
            ) : (
              <Menu className="size-4.5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-[#E2E8F0] bg-white/95 backdrop-blur-xl shadow-lg lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="global-container py-4">
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile Navigation"
              >
                <Link
                  to="/"
                  onClick={handleGoHome}
                  className={`rounded-xl px-3.5 py-2.5 text-[14.5px] font-medium transition-colors ${
                    location.pathname === "/"
                      ? "bg-[#F3F7FF] text-[#2457E6]"
                      : "text-[#0F172A] hover:bg-[#F8FAFC]"
                  }`}
                >
                  Home
                </Link>

                {/* Expandable Mobile Services Accordion */}
                <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]/60 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                    aria-expanded={isMobileServicesOpen}
                    className="flex w-full items-center justify-between px-3.5 py-2.5 text-[14.5px] font-medium text-[#0F172A]"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`size-4 text-[#2457E6] transition-transform duration-200 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-[#E2E8F0] bg-white px-2 py-2 space-y-1"
                      >
                        {SERVICE_MENU_ITEMS.map((item) => {
                          const IconComp = item.icon;
                          const active = location.pathname === item.href;
                          const isOffer = item.isOffer;
                          return (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`flex items-center justify-between gap-3 rounded-lg p-2 text-[13.5px] font-medium transition-colors ${
                                active
                                  ? "bg-[#F3F7FF] text-[#2457E6]"
                                  : "text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#2457E6]"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div
                                  className={`flex size-8 shrink-0 items-center justify-center rounded-lg border ${
                                    active
                                      ? "border-[#2457E6] bg-[#2457E6] text-white"
                                      : isOffer
                                        ? "border-[#0F172A] bg-[#0F172A] text-white"
                                        : "border-[#E2E8F0] bg-[#F8FAFC] text-[#2457E6]"
                                  }`}
                                >
                                  <IconComp className="size-3.5 shrink-0" />
                                </div>
                                <span className="truncate">{item.title}</span>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl px-3.5 py-2.5 text-[14.5px] font-medium transition-colors ${
                    isPortfolioActive
                      ? "bg-[#F3F7FF] text-[#2457E6]"
                      : "text-[#0F172A] hover:bg-[#F8FAFC]"
                  }`}
                >
                  Portfolio
                </Link>

                <Link
                  to="/#demos"
                  onClick={handleGoDemos}
                  className={`rounded-xl px-3.5 py-2.5 text-[14.5px] font-medium transition-colors ${
                    location.hash === "#demos" ||
                    location.pathname.startsWith("/demos")
                      ? "bg-[#F3F7FF] text-[#2457E6]"
                      : "text-[#0F172A] hover:bg-[#F8FAFC]"
                  }`}
                >
                  Demos
                </Link>

                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl px-3.5 py-2.5 text-[14.5px] font-medium transition-colors ${
                    location.pathname === "/about"
                      ? "bg-[#F3F7FF] text-[#2457E6]"
                      : "text-[#0F172A] hover:bg-[#F8FAFC]"
                  }`}
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl px-3.5 py-2.5 text-[14.5px] font-medium transition-colors ${
                    location.pathname === "/contact"
                      ? "bg-[#F3F7FF] text-[#2457E6]"
                      : "text-[#0F172A] hover:bg-[#F8FAFC]"
                  }`}
                >
                  Contact
                </Link>

                <div className="mt-2 pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
                  <CTAButton
                    to="/contact"
                    variant="primary"
                    icon="arrow-up-right"
                    className="w-full justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get a Free Consultation
                  </CTAButton>
                  <CTAButton
                    to="/#special-offers"
                    variant="secondary"
                    className="w-full justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View Special Offers ($999 &amp; $1,999)
                  </CTAButton>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export const Navbar2 = Navbar;
export default Navbar;
