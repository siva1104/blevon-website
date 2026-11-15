"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Copy,
  Check,
  Sparkles,
  Send,
  ShieldCheck,
  Clock,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { DEMO_WEBSITES } from "@/data/demos";

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "contact@blevon.in";
const CONTACT_PHONE =
  import.meta.env.VITE_CONTACT_PHONE || "+91 9491229471";
const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || "919491229471";

const INQUIRY_OPTIONS = [
  {
    value: "free-website-bundle",
    label: "Offer 1: Build Any App + Get a Website FREE – $999 (Was $1,499)",
    isOffer: true,
    offerBadge: "33% OFF · SAVE $500",
  },
  {
    value: "ecommerce-suite",
    label: "Offer 2: Complete E-commerce Solution – $1,999 (Was $2,999)",
    isOffer: true,
    offerBadge: "33% OFF · SAVE $1,000",
  },
  {
    value: "website-development",
    label: "Website Development",
  },
  {
    value: "app-development",
    label: "App Development",
  },
  {
    value: "ui-ux-design",
    label: "UI/UX Design",
  },
];

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialOffer =
    searchParams.get("offer") ||
    searchParams.get("service") ||
    "website-development";

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [selectedService, setSelectedService] = useState(initialOffer);
  const [projectBrief, setProjectBrief] = useState("");
  const [submittedNotice, setSubmittedNotice] = useState("");

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef(null);

  useEffect(() => {
    document.title = "Contact Us & Free Consultation | Blevon Agency";
    const param = searchParams.get("offer") || searchParams.get("service");
    if (param) {
      setSelectedService(param);
    }
    const demoId = searchParams.get("demo");
    if (demoId) {
      const matchedDemo = DEMO_WEBSITES.find((d) => d.id === demoId);
      if (matchedDemo) {
        setSelectedService(
          matchedDemo.niche === "ecommerce"
            ? "ecommerce-website-development"
            : "business-website-development"
        );
        setProjectBrief(
          `Interested in building a website inspired by Niche Demo #${matchedDemo.num}: ${matchedDemo.title} (${matchedDemo.nicheLabel}).`
        );
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target)
      ) {
        setIsServiceDropdownOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsServiceDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectedOption = INQUIRY_OPTIONS.find(
    (o) => o.value === selectedService
  );
  const selectedLabel = selectedOption?.label || "Custom Digital Project";

  const buildFormattedMessage = () => {
    return [
      `Hello Blevon Team,`,
      ``,
      `I would like to request a consultation regarding: ${selectedLabel}`,
      name ? `Name: ${name}` : null,
      company ? `Business / Organization: ${company}` : null,
      contactInfo ? `Email / Phone: ${contactInfo}` : null,
      projectBrief ? `\nProject Requirements:\n${projectBrief}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(buildFormattedMessage());
    setSubmittedNotice(
      "Opening WhatsApp with your structured project brief..."
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${selectedLabel}`);
    const body = encodeURIComponent(buildFormattedMessage());
    setSubmittedNotice("Opening your email client with your project brief...");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(buildFormattedMessage()).then(() => {
      setCopiedBrief(true);
      setSubmittedNotice(
        "Project brief copied! You can paste it into any email or chat."
      );
      setTimeout(() => setCopiedBrief(false), 2500);
    });
  };

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

  return (
    <div className="min-h-screen bg-transparent text-[#0B132B]">
      <Navbar />

      <main className="pt-[72px] sm:pt-[80px]">
        {/* ============================================================ */}
        {/* 1. CONTACT HERO HEADER (WITH INTEGRATED BREADCRUMB)          */}
        {/* ============================================================ */}
        <section className="relative w-full overflow-hidden bg-transparent pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 35%, #000 30%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 50% 35%, #000 30%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="global-container relative z-10">
            <Breadcrumb
              items={[
                { label: "Home", to: "/" },
                { label: "Contact Us" },
              ]}
              className="mb-6 sm:mb-8"
            />

            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] text-[#2457E6] uppercase">
                GET A FREE CONSULTATION
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-semibold tracking-[-0.035em] text-[#0B132B] leading-[1.12]">
                Let&apos;s Turn Your Vision Into a{" "}
                <span className="bg-gradient-to-r from-[#1E40AF] via-[#2457E6] to-[#3B82F6] bg-clip-text text-transparent">
                  Scalable Digital Product.
                </span>
              </h1>
              <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-[15px] sm:text-base text-[#526077] leading-[1.68]">
                Reach out directly via email, phone, or WhatsApp—or use our interactive project brief builder below to start the conversation immediately.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. MAIN CONTACT GRID: BRIEF BUILDER + DIRECT CHANNELS        */}
        {/* ============================================================ */}
        <section className="relative w-full pb-20 sm:pb-24">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 items-stretch">
              {/* Left Column (7 Cols): Interactive Project Consultation Form */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 lg:p-9 shadow-[0_14px_34px_-15px_rgba(15,23,42,0.06)]"
              >
                <div>
                  <div className="border-b border-[#E2E8F0] pb-5 mb-6">
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#2457E6] block">
                      STEP 01 · PROJECT BRIEF COMPOSER
                    </span>
                    <h2 className="mt-1.5 font-heading text-xl sm:text-2xl font-semibold tracking-[-0.025em] text-[#0B132B]">
                      Tell Us What You Want to Build
                    </h2>
                    <p className="mt-1.5 text-[13px] sm:text-[13.5px] text-[#526077] leading-[1.6]">
                      Prepare your requirements below and launch your inquiry directly via WhatsApp or Email with zero middlemen.
                    </p>
                  </div>

                  <form onSubmit={handleSendWhatsApp} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="client-name"
                          className="block text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B] mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          id="client-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g., Rahul Sharma"
                          className="w-full h-11 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-[13.5px] text-[#0B132B] placeholder:text-[#94A3B8] focus:border-[#2457E6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2457E6]/15 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="client-company"
                          className="block text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B] mb-2"
                        >
                          Business / Organization
                        </label>
                        <input
                          id="client-company"
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g., Acme Retail Pvt Ltd"
                          className="w-full h-11 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-[13.5px] text-[#0B132B] placeholder:text-[#94A3B8] focus:border-[#2457E6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2457E6]/15 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="client-contact"
                          className="block text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B] mb-2"
                        >
                          Your Email or Phone
                        </label>
                        <input
                          id="client-contact"
                          type="text"
                          value={contactInfo}
                          onChange={(e) => setContactInfo(e.target.value)}
                          placeholder="name@company.com / +91..."
                          className="w-full h-11 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-[13.5px] text-[#0B132B] placeholder:text-[#94A3B8] focus:border-[#2457E6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2457E6]/15 transition-all"
                        />
                      </div>

                      <div className="relative" ref={serviceDropdownRef}>
                        <label
                          id="service-select-label"
                          className="block text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B] mb-2"
                        >
                          Service or Promotional Offer
                        </label>
                        <button
                          type="button"
                          id="service-select"
                          aria-labelledby="service-select-label"
                          aria-haspopup="listbox"
                          aria-expanded={isServiceDropdownOpen}
                          onClick={() =>
                            setIsServiceDropdownOpen((prev) => !prev)
                          }
                          className={`flex w-full h-11 items-center justify-between gap-2 rounded-xl border px-3.5 text-left text-[13.5px] font-medium transition-all cursor-pointer ${
                            isServiceDropdownOpen
                              ? "border-[#2457E6] bg-white text-[#2457E6] ring-2 ring-[#2457E6]/15"
                              : "border-[#E2E8F0] bg-[#F8FAFC] text-[#0B132B] hover:border-[#CBD5E1]"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            {selectedOption?.isOffer && (
                              <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[#2457E6]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#2457E6]">
                                <Sparkles className="size-2.5" />
                                <span>Offer</span>
                              </span>
                            )}
                            <span className="truncate">{selectedLabel}</span>
                          </div>
                          <ChevronDown
                            className={`size-4 shrink-0 text-[#64748B] transition-transform duration-200 ${
                              isServiceDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isServiceDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 6, scale: 0.98 }}
                              transition={{
                                duration: 0.18,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              role="listbox"
                              aria-labelledby="service-select-label"
                              className="absolute left-0 right-0 top-full z-30 mt-2 max-h-80 overflow-y-auto rounded-2xl border border-[#E2E8F0] bg-white p-2 shadow-[0_18px_45px_-12px_rgba(15,23,42,0.14)]"
                            >
                              <div className="space-y-1">
                                {INQUIRY_OPTIONS.map((opt, idx) => {
                                  const isSelected =
                                    opt.value === selectedService;
                                  return (
                                    <button
                                      key={opt.value}
                                      type="button"
                                      role="option"
                                      aria-selected={isSelected}
                                      onClick={() => {
                                        setSelectedService(opt.value);
                                        setIsServiceDropdownOpen(false);
                                      }}
                                      className={`flex w-full items-center justify-between gap-3 rounded-xl border p-2.5 text-left transition-all duration-200 cursor-pointer ${
                                        isSelected
                                          ? "border-[#2457E6]/30 bg-[#F8FAFC] text-[#2457E6]"
                                          : "border-transparent bg-white text-[#0B132B] hover:bg-[#F8FAFC]"
                                      }`}
                                    >
                                      <div className="flex items-start gap-2.5 min-w-0">
                                        <span className="mt-0.5 font-mono text-[10px] font-medium shrink-0 px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[#64748B]">
                                          {String(idx + 1).padStart(2, "0")}
                                        </span>
                                        <div className="min-w-0">
                                          {opt.isOffer && (
                                            <span className="mb-0.5 inline-flex items-center gap-1 rounded-full bg-[#2457E6]/10 px-2 py-0.5 text-[9.5px] font-medium uppercase tracking-wider text-[#2457E6]">
                                              <Sparkles className="size-2.5" />
                                              <span>{opt.offerBadge}</span>
                                            </span>
                                          )}
                                          <span className="block text-[13px] font-medium leading-snug">
                                            {opt.label}
                                          </span>
                                        </div>
                                      </div>
                                      {isSelected && (
                                        <Check className="size-4 shrink-0 text-[#2457E6]" />
                                      )}
                                    </button>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="project-brief"
                        className="block text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B] mb-2"
                      >
                        Project Overview &amp; Requirements
                      </label>
                      <textarea
                        id="project-brief"
                        rows={5}
                        value={projectBrief}
                        onChange={(e) => setProjectBrief(e.target.value)}
                        placeholder="Describe your business, key features needed, target timeline, or reference websites..."
                        className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-[13.5px] text-[#0B132B] placeholder:text-[#94A3B8] focus:border-[#2457E6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2457E6]/15 transition-all resize-y"
                      />
                    </div>

                    {submittedNotice && (
                      <div className="rounded-xl border border-[#2457E6]/20 bg-[#F8FAFC] px-4 py-3 text-xs font-medium text-[#0B132B]">
                        {submittedNotice}
                      </div>
                    )}

                    {/* Direct Send Buttons (Compact Pills) */}
                    <div className="pt-2 flex flex-wrap items-center gap-2.5">
                      <button
                        type="submit"
                        className="inline-flex h-10 sm:h-[42px] items-center justify-center gap-2 rounded-full bg-[#0F172A] px-5 text-[13.5px] font-medium text-white whitespace-nowrap shadow-[0_8px_20px_-6px_rgba(15,23,42,0.3)] hover:bg-[#2457E6] transition-all cursor-pointer"
                      >
                        <MessageSquare className="size-3.5 shrink-0" />
                        <span>Send via WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSendEmail}
                        className="inline-flex h-10 sm:h-[42px] items-center justify-center gap-2 rounded-full bg-[#2457E6] px-5 text-[13.5px] font-medium text-white whitespace-nowrap hover:bg-[#1D4ED8] transition-all cursor-pointer"
                      >
                        <Send className="size-3.5 shrink-0" />
                        <span>Send via Email</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="inline-flex h-10 sm:h-[42px] items-center justify-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-4 text-[13px] font-medium text-[#0B132B] whitespace-nowrap hover:border-[#CBD5E1] hover:text-[#2457E6] transition-all cursor-pointer"
                        title="Copy formatted brief"
                      >
                        {copiedBrief ? (
                          <>
                            <Check className="size-3.5 shrink-0 text-[#2457E6]" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3.5 shrink-0" />
                            <span>Copy Brief</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Bottom Trust & Privacy Bar inside Left Card */}
                <div className="mt-8 pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-[#64748B]">
                  <span className="inline-flex items-center gap-2 text-[#0B132B]">
                    <ShieldCheck className="size-4 text-[#2457E6] shrink-0" />
                    <span>100% Confidential · No Automated Spam</span>
                  </span>
                  <span>Direct Technical Lead Consultation</span>
                </div>
              </motion.div>

              {/* Right Column (5 Cols): Direct Channels & Special Offers Reminder */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-5">
                {/* Direct Email Card */}
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#2457E6]">
                        <Mail className="size-4.5 shrink-0" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#64748B] block">
                          Official Email
                        </span>
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="font-heading text-[15px] font-semibold text-[#0B132B] hover:text-[#2457E6] truncate block transition-colors"
                        >
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="shrink-0 inline-flex h-8 items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-xs font-medium text-[#0B132B] hover:border-[#CBD5E1] transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="size-3 shrink-0 text-[#2457E6]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3 shrink-0 text-[#64748B]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[12.5px] text-[#526077] leading-relaxed">
                    Ideal for sending detailed RFPs, project specifications, or billing inquiries.
                  </p>
                </div>

                {/* Direct Phone & WhatsApp Card */}
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#2457E6]">
                        <Phone className="size-4.5 shrink-0" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#64748B] block">
                          Phone &amp; WhatsApp
                        </span>
                        <a
                          href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                          className="font-heading text-[15px] font-semibold text-[#0B132B] hover:text-[#2457E6] truncate block transition-colors"
                        >
                          {CONTACT_PHONE}
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="shrink-0 inline-flex h-8 items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-xs font-medium text-[#0B132B] hover:border-[#CBD5E1] transition-colors cursor-pointer"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="size-3 shrink-0 text-[#2457E6]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3 shrink-0 text-[#64748B]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-[#0F172A] px-3 text-xs font-medium text-white hover:bg-[#2457E6] transition-colors"
                    >
                      <Phone className="size-3.5 shrink-0" />
                      <span>Call Directly</span>
                    </a>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-xs font-medium text-[#0B132B] hover:border-[#CBD5E1] hover:text-[#2457E6] transition-colors"
                    >
                      <MessageSquare className="size-3.5 shrink-0 text-[#2457E6]" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>

                {/* Location & Response Commitment Card */}
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#2457E6]">
                      <MapPin className="size-4.5 shrink-0" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#64748B] block">
                        Studio Headquarters
                      </span>
                      <h3 className="font-heading text-[14px] font-semibold text-[#0B132B] mt-0.5">
                        Mahadevapura, Bangalore, Karnataka, India
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4 border-t border-[#E2E8F0]">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#2457E6]">
                      <Clock className="size-4.5 shrink-0" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#64748B] block">
                        Prompt Engineering Response
                      </span>
                      <p className="text-[12.5px] text-[#526077] mt-0.5 leading-relaxed">
                        Every message is reviewed directly by our technical leads within 24 business hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Promotional Offers Quick Selector */}
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 text-[#0B132B]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#2457E6]">
                      <Sparkles className="size-3.5 shrink-0" />
                      <span>Active Launch Packages</span>
                    </div>
                    <span className="rounded-full bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#64748B]">
                      Quick Select
                    </span>
                  </div>
                  <p className="text-xs text-[#526077] leading-relaxed mb-4">
                    Click either package below to pre-select it in the consultation builder:
                  </p>
                  <div className="space-y-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedService("free-website-bundle")}
                      className={`w-full text-left rounded-xl border p-3.5 text-xs leading-snug transition-all cursor-pointer ${
                        selectedService === "free-website-bundle"
                          ? "border-[#2457E6] bg-[#F8FAFC] text-[#0B132B]"
                          : "border-[#E2E8F0] bg-white text-[#0B132B] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-[#2457E6]/10 px-2.5 py-0.5 text-[9.5px] font-medium uppercase tracking-wider text-[#2457E6]">
                        33% OFF · SAVE $500 (WAS $1,499)
                      </span>
                      <span className="block mt-1.5 text-[#0B132B] font-medium">
                        Build Any App + Get a Website FREE —{" "}
                        <span className="text-[#2457E6] font-semibold">
                          $999
                        </span>
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedService("ecommerce-suite")}
                      className={`w-full text-left rounded-xl border p-3.5 text-xs leading-snug transition-all cursor-pointer ${
                        selectedService === "ecommerce-suite"
                          ? "border-[#2457E6] bg-[#F8FAFC] text-[#0B132B]"
                          : "border-[#E2E8F0] bg-white text-[#0B132B] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-0.5 text-[9.5px] font-medium uppercase tracking-wider text-[#64748B]">
                        33% OFF · SAVE $1,000 (WAS $2,999)
                      </span>
                      <span className="block mt-1.5 text-[#0B132B] font-medium">
                        Complete E-commerce Solution —{" "}
                        <span className="text-[#2457E6] font-semibold">
                          $1,999
                        </span>{" "}
                        (Web + Android + iOS + CMS)
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
