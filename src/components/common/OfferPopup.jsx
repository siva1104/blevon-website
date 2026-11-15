"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Smartphone,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { HERO_OFFERS_CONFIG, getCountdownStatus } from "@/data/offers";

export const OPEN_OFFERS_POPUP_EVENT = "blevon:open-offers-popup";

export function triggerOfferPopup() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_OFFERS_POPUP_EVENT));
  }
}

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOfferId, setSelectedOfferId] = useState("ecommerce-suite");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [countdown, setCountdown] = useState(() =>
    getCountdownStatus(HERO_OFFERS_CONFIG.offers[0].countdownTargetDate)
  );

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const [offer1, offer2] = HERO_OFFERS_CONFIG.offers;

  const openModal = useCallback((markSessionSeen = true) => {
    if (typeof document !== "undefined") {
      previousFocusRef.current = document.activeElement;
    }
    if (markSessionSeen && typeof window !== "undefined") {
      try {
        window.sessionStorage.setItem(
          HERO_OFFERS_CONFIG.popupSessionKey,
          "true"
        );
      } catch {
        // Ignore sessionStorage errors
      }
    }
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    if (
      previousFocusRef.current &&
      typeof previousFocusRef.current.focus === "function"
    ) {
      setTimeout(() => {
        previousFocusRef.current?.focus();
      }, 50);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    setCountdown(getCountdownStatus(offer1.countdownTargetDate));
    const timer = window.setInterval(() => {
      setCountdown(getCountdownStatus(offer1.countdownTargetDate));
    }, 30000);
    return () => window.clearInterval(timer);
  }, [isOpen, offer1.countdownTargetDate]);

  useEffect(() => {
    const handleManualOpen = () => openModal(true);
    window.addEventListener(OPEN_OFFERS_POPUP_EVENT, handleManualOpen);
    return () => {
      window.removeEventListener(OPEN_OFFERS_POPUP_EVENT, handleManualOpen);
    };
  }, [openModal]);

  useEffect(() => {
    if (!isOpen) return;

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 40);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  const selectedOffer =
    HERO_OFFERS_CONFIG.offers.find((o) => o.id === selectedOfferId) || offer2;

  const handleClaimWhatsApp = (e) => {
    e.preventDefault();
    const lines = [
      selectedOffer.whatsappPrefill,
      clientName.trim() ? `Name: ${clientName.trim()}` : null,
      clientPhone.trim() ? `WhatsApp / Phone: ${clientPhone.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${HERO_OFFERS_CONFIG.whatsappNumber}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blevon-offer-modal-title"
      aria-describedby="blevon-offer-modal-desc"
    >
      {/* Dim Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B132B]/55 backdrop-blur-sm transition-opacity duration-200"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-lg rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-7 text-[#0B132B] shadow-[0_24px_60px_-15px_rgba(15,23,42,0.28)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#2457E6]">
              <Sparkles className="size-3" />
              <span>EXCLUSIVE LAUNCH PACKAGES</span>
            </span>
            <h2
              id="blevon-offer-modal-title"
              className="mt-2 font-heading text-xl sm:text-2xl font-semibold tracking-[-0.025em] text-[#0B132B]"
            >
              {HERO_OFFERS_CONFIG.popupHeadline}
            </h2>
            <p
              id="blevon-offer-modal-desc"
              className="mt-1 text-xs sm:text-[13.5px] text-[#526077]"
            >
              {HERO_OFFERS_CONFIG.popupSubheadline}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeModal}
            aria-label="Close offers popup"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] transition-colors hover:border-[#CBD5E1] hover:bg-white hover:text-[#2457E6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457E6] cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Selectable Offers */}
        <div
          className="mt-5 space-y-2.5"
          role="radiogroup"
          aria-label="Select an offer"
        >
          {/* Offer 1 Summary Card */}
          <button
            type="button"
            role="radio"
            aria-checked={selectedOfferId === offer1.id}
            onClick={() => setSelectedOfferId(offer1.id)}
            className={`w-full rounded-xl border p-3.5 text-left transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457E6] ${
              selectedOfferId === offer1.id
                ? "border-[#2457E6] bg-[#F3F7FF]/60"
                : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#2457E6]">
                  <Smartphone className="size-4" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-heading text-sm font-semibold text-[#0B132B]">
                      {offer1.title} —{" "}
                      <span className="text-[#2457E6]">
                        {offer1.promoPrice}
                      </span>{" "}
                      <span className="text-xs font-normal text-[#94A3B8] line-through">
                        {offer1.originalPrice}
                      </span>
                    </span>
                    <span className="rounded-full bg-[#2457E6]/10 px-2 py-0.5 text-[10px] font-semibold text-[#2457E6]">
                      {offer1.discountBadge}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
                    <span>{offer1.platforms}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1 font-mono font-medium text-[#2457E6]">
                      <Clock className="size-3" />
                      {countdown.formatted}
                    </span>
                  </div>
                </div>
              </div>
              <CheckCircle2
                className={`size-4.5 shrink-0 transition-colors ${
                  selectedOfferId === offer1.id
                    ? "text-[#2457E6]"
                    : "text-[#CBD5E1]"
                }`}
              />
            </div>
          </button>

          {/* Offer 2 Summary Card */}
          <button
            type="button"
            role="radio"
            aria-checked={selectedOfferId === offer2.id}
            onClick={() => setSelectedOfferId(offer2.id)}
            className={`w-full rounded-xl border p-3.5 text-left transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457E6] ${
              selectedOfferId === offer2.id
                ? "border-[#2457E6] bg-[#F3F7FF]/60"
                : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#2457E6]">
                  <ShoppingBag className="size-4" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-heading text-sm font-semibold text-[#0B132B]">
                      {offer2.title} —{" "}
                      <span className="text-[#2457E6]">
                        {offer2.promoPrice}
                      </span>{" "}
                      <span className="text-xs font-normal text-[#94A3B8] line-through">
                        {offer2.originalPrice}
                      </span>
                    </span>
                    <span className="rounded-full bg-[#0F172A] px-2 py-0.5 text-[10px] font-medium text-white">
                      {offer2.scarcityBadge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#64748B]">
                    {offer2.platforms} · {offer2.spotsLabel}
                  </p>
                </div>
              </div>
              <CheckCircle2
                className={`size-4.5 shrink-0 transition-colors ${
                  selectedOfferId === offer2.id
                    ? "text-[#2457E6]"
                    : "text-[#CBD5E1]"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Short Quick-Claim Form */}
        <form onSubmit={handleClaimWhatsApp} className="mt-5 space-y-3">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="popup-client-name"
                className="mb-1 block text-xs font-medium text-[#0B132B]"
              >
                Your Name
              </label>
              <input
                id="popup-client-name"
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g., Rahul Sharma"
                className="h-10 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-[#0B132B] placeholder:text-[#94A3B8] focus:border-[#2457E6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2457E6]/15"
              />
            </div>
            <div>
              <label
                htmlFor="popup-client-phone"
                className="mb-1 block text-xs font-medium text-[#0B132B]"
              >
                WhatsApp / Phone Number
              </label>
              <input
                id="popup-client-phone"
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="h-10 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-[#0B132B] placeholder:text-[#94A3B8] focus:border-[#2457E6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2457E6]/15"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
            <button
              type="submit"
              className="group inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#0F172A] px-5 text-[13.5px] font-medium text-white shadow-[0_4px_14px_-2px_rgba(15,23,42,0.2)] transition-all hover:bg-[#2457E6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457E6] cursor-pointer"
            >
              <span>Claim on WhatsApp</span>
              <ArrowUpRight className="size-3.5 shrink-0" />
            </button>

            <Link
              to={selectedOffer.ctaLink}
              onClick={closeModal}
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-5 text-[13.5px] font-medium text-[#0F172A] transition-colors hover:border-[#CBD5E1] hover:bg-[#F8FAFC] hover:text-[#2457E6]"
            >
              Consultation Form
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OfferPopup;
