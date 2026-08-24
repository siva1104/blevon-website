"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar2 } from "../Home/components/Navbar2";
import { Footer8 } from "../Home/components/Footer8";

const CONTACT_EMAIL = "contact@blevon.in";
const CONTACT_PHONE = "+91 9491229471";
const WHATSAPP_NUMBER = "919491229471";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedWa, setCopiedWa] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_PHONE).then(() => {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    });
  };

  const handleCopyWa = () => {
    navigator.clipboard.writeText(CONTACT_PHONE).then(() => {
      setCopiedWa(true);
      setTimeout(() => setCopiedWa(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#101828]">
      {/* 1. Master Reference Navbar */}
      <Navbar2 />

      <main className="pt-22 sm:pt-26 md:pt-28">
        {/* 2. Header Section */}
        <section className="relative w-full pt-4 pb-6 text-center sm:pt-6 sm:pb-8">
          <div className="global-container">
            <div className="mx-auto max-w-xl">
              <span className="mb-2 inline-block text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                CONTACT
              </span>
              <h1 className="mb-2.5 text-2xl font-bold tracking-tight text-[#101828] sm:text-3xl md:text-4xl lg:text-[38px] leading-[1.14]">
                Let's build something useful<span className="text-[#2563EB]">.</span>
              </h1>
              <p className="mx-auto max-w-md text-xs text-[#667085] sm:text-sm leading-relaxed">
                Tell us what you're looking to build. We'll figure out the right approach.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Direct Contact Action Section */}
        <section className="relative w-full pb-16 md:pb-24">
          <div className="global-container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E4E7EC] bg-white p-6 sm:p-8 md:p-10 shadow-sm"
            >
              {/* Card Header */}
              <div className="border-b border-[#E4E7EC] pb-6 text-center sm:text-left">
                <span className="inline-block text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase">
                  GET IN TOUCH
                </span>
                <h2 className="mt-1 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#101828]">
                  Start the conversation
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#667085] leading-relaxed max-w-xl">
                  Reach out to us via email, phone call, or WhatsApp and let's discuss how we can work together on your project.
                </p>
              </div>

              {/* Three Contact Channels Grid (Email, Phone, WhatsApp) */}
              <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Channel 1: Email Box */}
                <div className="flex flex-col justify-between rounded-xl border border-blue-100 bg-[#EAF1FF]/40 p-5 transition-all duration-300 hover:border-blue-300">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-blue-100 text-[#2563EB]">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0E2A6D]">
                        Email
                      </span>
                    </div>

                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-sm sm:text-[15px] font-bold text-[#2563EB] hover:underline break-all block"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    <p className="mt-1 text-[11.5px] text-[#667085]">
                      Send us project briefs or general inquiries.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 pt-3 border-t border-blue-100/80">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="group inline-flex flex-1 h-9 items-center justify-center gap-1.5 rounded-full bg-[#2563EB] px-3 text-xs font-semibold text-white shadow-2xs transition-all duration-200 hover:bg-blue-700 active:scale-[0.98]"
                    >
                      <span>Write to Us</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex h-9 items-center justify-center gap-1 rounded-full border border-[#D0D5DD] bg-white px-2.5 text-[11.5px] font-semibold text-[#0E2A6D] shadow-2xs transition-all duration-200 hover:border-blue-300 hover:bg-[#EAF1FF] active:scale-[0.98]"
                      title="Copy email"
                    >
                      {copiedEmail ? (
                        <svg className="size-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg className="size-3.5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Channel 2: Phone Box */}
                <div className="flex flex-col justify-between rounded-xl border border-blue-100 bg-[#EAF1FF]/40 p-5 transition-all duration-300 hover:border-blue-300">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-blue-100 text-[#2563EB]">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0E2A6D]">
                        Phone Call
                      </span>
                    </div>

                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                      className="text-sm sm:text-[15px] font-bold text-[#2563EB] hover:underline block"
                    >
                      {CONTACT_PHONE}
                    </a>
                    <p className="mt-1 text-[11.5px] text-[#667085]">
                      Direct phone line for quick conversations.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 pt-3 border-t border-blue-100/80">
                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                      className="group inline-flex flex-1 h-9 items-center justify-center gap-1.5 rounded-full bg-[#2563EB] px-3 text-xs font-semibold text-white shadow-2xs transition-all duration-200 hover:bg-blue-700 active:scale-[0.98]"
                    >
                      <span>Call Now</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="inline-flex h-9 items-center justify-center gap-1 rounded-full border border-[#D0D5DD] bg-white px-2.5 text-[11.5px] font-semibold text-[#0E2A6D] shadow-2xs transition-all duration-200 hover:border-blue-300 hover:bg-[#EAF1FF] active:scale-[0.98]"
                      title="Copy phone number"
                    >
                      {copiedPhone ? (
                        <svg className="size-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg className="size-3.5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Channel 3: WhatsApp Box */}
                <div className="flex flex-col justify-between rounded-xl border border-emerald-100 bg-emerald-50/40 p-5 transition-all duration-300 hover:border-emerald-300">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-100 text-[#25D366]">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                        WhatsApp
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-[15px] font-bold text-emerald-700 hover:underline block"
                    >
                      {CONTACT_PHONE}
                    </a>
                    <p className="mt-1 text-[11.5px] text-[#667085]">
                      Instant messaging & project discussions.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 pt-3 border-t border-emerald-100/80">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex flex-1 h-9 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 text-xs font-semibold text-white shadow-2xs transition-all duration-200 hover:bg-emerald-600 active:scale-[0.98]"
                    >
                      <span>Chat</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyWa}
                      className="inline-flex h-9 items-center justify-center gap-1 rounded-full border border-[#D0D5DD] bg-white px-2.5 text-[11.5px] font-semibold text-[#0E2A6D] shadow-2xs transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50 active:scale-[0.98]"
                      title="Copy WhatsApp number"
                    >
                      {copiedWa ? (
                        <svg className="size-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg className="size-3.5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* What to Include Guidance */}
              <div className="pt-2">
                <h3 className="text-xs sm:text-sm font-bold text-[#101828] mb-3">
                  What to prepare when reaching out:
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3.5">
                    <span className="font-mono text-xs font-bold text-[#2563EB] block mb-1">
                      01
                    </span>
                    <h4 className="text-xs font-bold text-[#101828]">Project Overview</h4>
                    <p className="mt-1 text-[11px] text-[#667085] leading-relaxed">
                      A brief summary of what your business does and what you'd like to create.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3.5">
                    <span className="font-mono text-xs font-bold text-[#2563EB] block mb-1">
                      02
                    </span>
                    <h4 className="text-xs font-bold text-[#101828]">Goals & Scope</h4>
                    <p className="mt-1 text-[11px] text-[#667085] leading-relaxed">
                      Your target deliverables, platform preferences, or specific features.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3.5">
                    <span className="font-mono text-xs font-bold text-[#2563EB] block mb-1">
                      03
                    </span>
                    <h4 className="text-xs font-bold text-[#101828]">References</h4>
                    <p className="mt-1 text-[11px] text-[#667085] leading-relaxed">
                      Any existing website links, design inspirations, or project briefs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="mt-6 pt-4 border-t border-[#E4E7EC] flex items-center justify-between text-xs text-[#667085]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Direct response across all channels. We review and reply to every message.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer8 />
    </div>
  );
}
