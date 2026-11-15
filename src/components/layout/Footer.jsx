"use client";

import React from "react";
import { Link } from "react-router-dom";
import blevonLogoBlue from "@/assets/images/logo/logo_blue.png";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "contact@blevon.in";
const CONTACT_PHONE =
  import.meta.env.VITE_CONTACT_PHONE || "+91 9491229471";
const INSTAGRAM_URL =
  import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/blevon.in";

export function Footer() {
  const handleGoHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-transparent text-[#0B132B]">
      {/* Main Footer Content */}
      <div className="global-container pt-14 pb-12 md:pt-16 md:pb-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1.15fr_1fr] xl:gap-12">
          {/* Column 1: Brand Identity & Instagram Below Logo */}
          <div className="flex flex-col items-start">
            <Link
              to="/"
              onClick={handleGoHome}
              className="mb-4 inline-block transition-opacity hover:opacity-90 focus:outline-none"
              aria-label="Blevon Home"
            >
              <img
                src={blevonLogoBlue}
                alt="BLEVON Agency"
                className="h-12 sm:h-14 w-auto max-w-[195px] object-contain"
              />
            </Link>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Blevon on Instagram"
              title="Follow Blevon on Instagram"
              className="inline-flex h-9 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 text-xs font-medium text-[#0B132B] transition-all duration-200 hover:border-[#2457E6] hover:text-[#2457E6]"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0 text-[#2457E6]"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-[11px] font-semibold tracking-[0.16em] text-[#2457E6] uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link
                  to="/"
                  onClick={handleGoHome}
                  className="text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/#demos"
                  className="text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  Niche Demo Websites
                </Link>
              </li>
              <li>
                <Link
                  to="/case-study"
                  className="text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  Kavuturu Case Study
                </Link>
              </li>
              <li>
                <Link
                  to="/#special-offers"
                  className="inline-flex items-center gap-1 text-[#2457E6] font-medium transition-colors duration-200 hover:text-[#0B132B]"
                >
                  <span>Special Offers &amp; Deals</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-4 font-heading text-[11px] font-semibold tracking-[0.16em] text-[#2457E6] uppercase">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link
                  to="/services/website-development"
                  className="text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-development"
                  className="text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ui-ux-design"
                  className="text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="mb-4 font-heading text-[11px] font-semibold tracking-[0.16em] text-[#2457E6] uppercase">
              Contact Information
            </h3>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  <Mail className="size-3.5 shrink-0 text-[#2457E6]" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-[#526077] transition-colors duration-200 hover:text-[#2457E6]"
                >
                  <Phone className="size-3.5 shrink-0 text-[#2457E6]" />
                  <span>{CONTACT_PHONE}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#526077]">
                <MapPin className="size-3.5 shrink-0 text-[#2457E6] mt-0.5" />
                <span>Mahadevapura, Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-11 h-px w-full bg-[#E2E8F0]" />

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-[#64748B] sm:flex-row">
          <p>
            © {new Date().getFullYear()} Blevon Agency (blevon.in). All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <Link
              to="/privacy-policy"
              className="transition-colors duration-200 hover:text-[#0B132B]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="transition-colors duration-200 hover:text-[#0B132B]"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to="/refund-policy"
              className="transition-colors duration-200 hover:text-[#0B132B]"
            >
              Refund &amp; Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Footer8 = Footer;
export default Footer;
