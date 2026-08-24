"use client";

import React from "react";
import blevonLogo from "../../../assets/images/logo/logo_white.png";

const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || "919491229471";
const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "contact@blevon.in";

export function Footer8() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0E2A6D] py-12 text-white md:py-14">
      <div className="global-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:gap-12">
          {/* Column 1: Brand, Tagline & Social / Contact Icons */}
          <div className="flex flex-col items-start">
            <a
              href="/"
              className="mb-4 inline-block transition-opacity hover:opacity-90 focus:outline-none"
              aria-label="Blevon Home"
            >
              <img
                src={blevonLogo}
                alt="BLEVON"
                className="h-14 sm:h-16 md:h-18 w-auto max-w-[190px] sm:max-w-[220px] md:max-w-[240px] object-contain"
              />
            </a>
            <p className="max-w-sm text-sm text-[#CBD5E1] leading-relaxed">
              Digital experiences for modern businesses.
            </p>

            {/* WhatsApp & Email Icons below logo */}
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Contact us on WhatsApp: 9491229471"
                aria-label="Contact us on WhatsApp: 9491229471"
                className="flex size-8.5 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-[#25D366] transition-all duration-200 hover:border-[#25D366] hover:bg-[#25D366]/20 hover:scale-105 active:scale-95"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                title="Send us an email: contact@blevon.in"
                aria-label="Send us an email: contact@blevon.in"
                className="flex size-8.5 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-[#60A5FA] transition-all duration-200 hover:border-[#60A5FA] hover:bg-blue-500/20 hover:scale-105 active:scale-95"
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
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#60A5FA] uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  className="text-[#CBD5E1] transition-colors duration-200 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-[#CBD5E1] transition-colors duration-200 hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services/web-development"
                  className="text-[#CBD5E1] transition-colors duration-200 hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  className="text-[#CBD5E1] transition-colors duration-200 hover:text-white"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[#CBD5E1] transition-colors duration-200 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#60A5FA] uppercase">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/services/web-development"
                  className="text-[#CBD5E1] transition-colors duration-200 hover:text-white"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="/services/app-development"
                  className="text-[#CBD5E1] transition-colors duration-200 hover:text-white"
                >
                  App Development
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#60A5FA] uppercase">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  title="Send us an email"
                  aria-label="Send us an email"
                  className="inline-flex items-center gap-2 text-[#CBD5E1] transition-colors duration-200 hover:text-[#60A5FA]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-[#60A5FA]"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us on WhatsApp: 9491229471"
                  aria-label="Contact us on WhatsApp: 9491229471"
                  className="inline-flex items-center gap-2 text-[#CBD5E1] transition-colors duration-200 hover:text-[#25D366]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-3.5 fill-current text-[#25D366] shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>+91 9491229471</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px w-full bg-white/15" />

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-[#CBD5E1] sm:flex-row">
          <p>© 2026 Blevon. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
