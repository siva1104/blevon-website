"use client";

import React from "react";
import {
  Globe,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ShoppingBag,
  CreditCard,
  Smartphone,
  Lock,
  Bell,
  Database,
  Layers,
  Sparkles,
  Code2,
  Cpu,
  TrendingUp,
} from "lucide-react";
import kavuturuDesktop from "@/assets/images/clients/kavuturu-desktop.png";
import kavuturuCms from "@/assets/images/clients/kavuturu-cms-dashboard.png";

export function ServiceVisualMockup({ visualTheme }) {
  switch (visualTheme) {
    case "custom-web":
      return (
        <div className="rounded-2xl border border-[#E5E9F2] bg-gradient-to-br from-[#101B3A] via-[#152550] to-[#2457E6] p-4 sm:p-6 text-white shadow-premium-lg">
          {/* Browser Frame */}
          <div className="rounded-xl border border-white/15 bg-white text-[#151B2C] shadow-xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#E5E9F2] bg-[#F7F8FC] px-3.5 py-2">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-rose-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-[#E5E9F2] bg-white px-2.5 py-0.5 text-[10px] font-mono text-[#68738A]">
                <Lock className="size-3 text-[#2457E6]" />
                <span>https://custom-architecture.blevon.in</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600">SSL Active</span>
            </div>

            <div className="p-4 space-y-3">
              <div className="grid grid-cols-3 gap-2.5">
                <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-2.5 text-center">
                  <span className="text-lg font-extrabold text-emerald-700 block">99</span>
                  <span className="text-[10px] font-semibold text-emerald-800">Performance</span>
                </div>
                <div className="rounded-lg border border-[#2457E6]/25 bg-[#F3F7FF] p-2.5 text-center">
                  <span className="text-lg font-extrabold text-[#2457E6] block">100</span>
                  <span className="text-[10px] font-semibold text-[#101B3A]">SEO Schema</span>
                </div>
                <div className="rounded-lg border border-[#E5E9F2] bg-[#F7F8FC] p-2.5 text-center">
                  <span className="text-lg font-extrabold text-[#101B3A] block">100</span>
                  <span className="text-[10px] font-semibold text-[#68738A]">Accessibility</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-[#E5E9F2]">
                <img
                  src={kavuturuDesktop}
                  alt="Custom Website Architecture Example"
                  className="w-full h-36 sm:h-44 object-cover object-top"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px]">
                <span className="font-mono font-semibold text-[#2457E6]">
                  React 19 · Next.js · Tailwind CSS
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                  <CheckCircle2 className="size-3.5" /> Custom CMS Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case "business-web":
      return (
        <div className="rounded-2xl border border-[#E5E9F2] bg-gradient-to-br from-[#0A1128] via-[#101B3A] to-[#1D3B8B] p-4 sm:p-6 text-white shadow-premium-lg">
          <div className="rounded-xl border border-white/15 bg-white text-[#151B2C] p-4 sm:p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E9F2] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#101B3A] text-white font-bold text-xs">
                  B2B
                </div>
                <div>
                  <span className="text-xs font-bold text-[#101B3A] block">
                    Corporate &amp; Service Portal
                  </span>
                  <span className="text-[10px] text-[#68738A]">
                    Authority · Credentials · Lead Conversion
                  </span>
                </div>
              </div>
              <span className="rounded-full bg-[#F3F7FF] border border-[#2457E6]/25 px-2.5 py-1 text-[10px] font-bold text-[#2457E6]">
                Free with Mobile App*
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-[#E5E9F2] bg-[#F7F8FC] p-3">
                <TrendingUp className="size-4 text-[#2457E6] mb-1.5" />
                <span className="text-xs font-bold text-[#101B3A] block">
                  Lead Capture Flows
                </span>
                <p className="mt-0.5 text-[11px] text-[#68738A]">
                  Direct WhatsApp, Phone &amp; Email inquiry routing.
                </p>
              </div>
              <div className="rounded-xl border border-[#E5E9F2] bg-[#F7F8FC] p-3">
                <ShieldCheck className="size-4 text-[#2457E6] mb-1.5" />
                <span className="text-xs font-bold text-[#101B3A] block">
                  Executive Authority
                </span>
                <p className="mt-0.5 text-[11px] text-[#68738A]">
                  Structured service pages, case studies &amp; team trust blocks.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[#101B3A] p-3.5 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#60A5FA] font-bold block">
                  SPECIAL BUNDLE ELIGIBLE (ENDS NOV 20, 2026)
                </span>
                <span className="text-xs font-bold">
                  Build Your Mobile App → Get Business Website FREE
                </span>
              </div>
              <Sparkles className="size-5 text-[#60A5FA] shrink-0" />
            </div>
          </div>
        </div>
      );

    case "ecommerce-web":
      return (
        <div className="rounded-2xl border border-[#E5E9F2] bg-gradient-to-br from-[#101B3A] via-[#1B2C62] to-[#2457E6] p-4 sm:p-6 text-white shadow-premium-lg">
          <div className="rounded-xl border border-white/15 bg-white text-[#151B2C] p-4 sm:p-5 shadow-xl space-y-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E9F2] pb-3">
              <div className="flex items-center gap-2">
                <ShoppingBag className="size-5 text-[#2457E6] shrink-0" />
                <span className="font-heading text-sm font-bold text-[#101B3A]">
                  E-commerce Storefront &amp; Merchant Hub
                </span>
              </div>
              <span className="rounded-full bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-900 shrink-0">
                $800 Complete Suite Available
              </span>
            </div>

            {/* Mock Product Cards + Checkout Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-7 rounded-xl border border-[#E5E9F2] bg-[#F7F8FC] p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#68738A]">
                    Catalog &amp; Inventory
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600">
                    In Stock • Synced
                  </span>
                </div>
                <div className="rounded-lg bg-white p-2.5 border border-[#E5E9F2] flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-[#101B3A] block">
                      Multi-Variant SKU Engine
                    </span>
                    <span className="text-[10px] text-[#68738A]">
                      Categories, Filters, Search &amp; Wishlist
                    </span>
                  </div>
                  <span className="rounded-md bg-[#2457E6] px-2 py-1 text-[10px] font-bold text-white shrink-0">
                    + Cart
                  </span>
                </div>
                <div className="rounded-lg bg-white p-2.5 border border-[#E5E9F2] flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-[#101B3A] block">
                      Order Fulfillment Panel
                    </span>
                    <span className="text-[10px] text-[#68738A]">
                      Invoices, Status Tracking &amp; Reports
                    </span>
                  </div>
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                </div>
              </div>

              <div className="sm:col-span-5 rounded-xl border border-[#2457E6]/25 bg-[#F3F7FF] p-3 flex flex-col justify-between">
                <div>
                  <CreditCard className="size-5 text-[#2457E6] mb-1.5" />
                  <span className="text-xs font-bold text-[#101B3A] block">
                    Secure Checkout
                  </span>
                  <p className="mt-1 text-[10px] text-[#68738A]">
                    UPI, Cards, Net Banking &amp; International Gateways
                  </p>
                </div>
                <div className="mt-3 rounded-lg bg-[#2457E6] py-1.5 text-center text-[11px] font-bold text-white">
                  PCI-DSS Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "android-app":
      return (
        <div className="rounded-2xl border border-[#E5E9F2] bg-gradient-to-br from-[#0D1F2D] via-[#101B3A] to-[#2457E6] p-5 sm:p-6 text-white shadow-premium-lg">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Android Smartphone Frame */}
            <div className="sm:col-span-5 flex justify-center">
              <div className="w-[180px] rounded-[1.75rem] border-[4px] border-[#0A1128] bg-white p-3 text-[#151B2C] shadow-2xl">
                <div className="mx-auto mb-2.5 size-2 rounded-full bg-[#101B3A]" />
                <div className="rounded-xl bg-[#2457E6] p-2.5 text-white">
                  <span className="text-[9px] font-mono uppercase opacity-80 block">
                    Android Native / Kotlin
                  </span>
                  <span className="text-xs font-bold block mt-0.5">
                    60fps Material UI
                  </span>
                </div>
                <div className="mt-2.5 space-y-1.5">
                  <div className="rounded-lg bg-[#F7F8FC] border border-[#E5E9F2] p-2 text-[10px]">
                    <span className="font-bold text-[#101B3A] block">Offline Sync</span>
                    <span className="text-[#68738A]">Local SQLite / Cache</span>
                  </div>
                  <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2 text-[10px]">
                    <span className="font-bold text-emerald-800 block">Google Play AAB</span>
                    <span className="text-emerald-700">Signed &amp; Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Android Engineering Specs */}
            <div className="sm:col-span-7 space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/20 border border-emerald-400/30 px-3 py-1 text-xs font-bold text-emerald-300">
                <Smartphone className="size-3.5" />
                <span>Google Play Ecosystem Ready</span>
              </span>
              <h3 className="font-heading text-lg font-bold text-white">
                Engineered for Every Android Handset &amp; Tablet
              </h3>
              <div className="space-y-2 text-xs text-slate-200">
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                  <CheckCircle2 className="size-4 text-[#60A5FA] shrink-0" />
                  <span>FCM Push Notifications &amp; Deep Linking</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                  <CheckCircle2 className="size-4 text-[#60A5FA] shrink-0" />
                  <span>Biometric Fingerprint &amp; OAuth Security</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                  <Sparkles className="size-4 text-amber-300 shrink-0" />
                  <span>Includes FREE Business Website (until Nov 20, 2026)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "ios-app":
      return (
        <div className="rounded-2xl border border-[#E5E9F2] bg-gradient-to-br from-[#101B3A] via-[#182B59] to-[#2457E6] p-5 sm:p-6 text-white shadow-premium-lg">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* iOS iPhone Frame */}
            <div className="sm:col-span-5 flex justify-center">
              <div className="w-[180px] rounded-[2rem] border-[4px] border-[#0A1128] bg-white p-3 text-[#151B2C] shadow-2xl">
                <div className="mx-auto mb-2.5 h-2.5 w-14 rounded-full bg-[#0A1128]" />
                <div className="rounded-xl bg-[#101B3A] p-2.5 text-white">
                  <span className="text-[9px] font-mono uppercase text-[#60A5FA] block">
                    iOS · Swift / React Native
                  </span>
                  <span className="text-xs font-bold block mt-0.5">
                    Cupertino HIG Polish
                  </span>
                </div>
                <div className="mt-2.5 space-y-1.5">
                  <div className="rounded-lg bg-[#F3F7FF] border border-[#2457E6]/20 p-2 text-[10px]">
                    <span className="font-bold text-[#101B3A] block">Face ID &amp; Keychain</span>
                    <span className="text-[#2457E6]">Biometric Auth Ready</span>
                  </div>
                  <div className="rounded-lg bg-[#F7F8FC] border border-[#E5E9F2] p-2 text-[10px]">
                    <span className="font-bold text-[#101B3A] block">TestFlight &amp; Store</span>
                    <span className="text-[#68738A]">App Store Compliance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* iOS Engineering Specs */}
            <div className="sm:col-span-7 space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/25 px-3 py-1 text-xs font-bold text-[#60A5FA]">
                <Cpu className="size-3.5" />
                <span>iPhone &amp; iPad Architecture</span>
              </span>
              <h3 className="font-heading text-lg font-bold text-white">
                Fluid Gestures, ProMotion Speed &amp; Privacy First
              </h3>
              <div className="space-y-2 text-xs text-slate-200">
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                  <CheckCircle2 className="size-4 text-[#60A5FA] shrink-0" />
                  <span>Sign in with Apple &amp; Biometric Face ID</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                  <CheckCircle2 className="size-4 text-[#60A5FA] shrink-0" />
                  <span>APNs Rich Push Notifications &amp; Live Widgets</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                  <Sparkles className="size-4 text-amber-300 shrink-0" />
                  <span>Guided Apple App Store Review &amp; Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "ecommerce-app":
      return (
        <div className="rounded-2xl border border-[#E5E9F2] bg-gradient-to-br from-[#101B3A] via-[#1E295E] to-[#2457E6] p-5 sm:p-6 text-white shadow-premium-lg">
          <div className="rounded-xl border border-white/15 bg-white text-[#151B2C] p-4 sm:p-5 shadow-xl space-y-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E9F2] pb-3">
              <div className="flex items-center gap-2">
                <Bell className="size-4.5 text-[#2457E6] shrink-0" />
                <span className="font-heading text-sm font-bold text-[#101B3A]">
                  Mobile Commerce (Android + iOS Shopping Apps)
                </span>
              </div>
              <span className="rounded-full bg-[#F3F7FF] px-2.5 py-0.5 text-[10px] font-bold text-[#2457E6] shrink-0">
                Real-Time Sync
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-[#E5E9F2] bg-[#F7F8FC] p-3.5">
                <span className="text-[10px] font-mono font-bold uppercase text-[#2457E6] block">
                  CUSTOMER APP EXPERIENCE
                </span>
                <h4 className="mt-1 font-heading text-sm font-bold text-[#101B3A]">
                  1-Tap Checkout &amp; Live Tracking
                </h4>
                <ul className="mt-2 space-y-1 text-xs text-[#68738A]">
                  <li>• Push notifications for flash offers</li>
                  <li>• Saved carts, wishlists &amp; addresses</li>
                  <li>• Native UPI, Card &amp; Wallet payments</li>
                </ul>
              </div>

              <div className="rounded-xl border border-[#2457E6]/25 bg-[#F3F7FF] p-3.5">
                <span className="text-[10px] font-mono font-bold uppercase text-[#2457E6] block">
                  UNIFIED ADMIN BACKEND
                </span>
                <h4 className="mt-1 font-heading text-sm font-bold text-[#101B3A]">
                  1 Dashboard → 3 Platforms
                </h4>
                <ul className="mt-2 space-y-1 text-xs text-[#151B2C]">
                  <li>• Synced with your E-commerce Website</li>
                  <li>• Instant inventory &amp; price updates</li>
                  <li>• Included in our $800 E-com Package</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );

    case "web-app":
      return (
        <div className="rounded-2xl border border-[#E5E9F2] bg-gradient-to-br from-[#101B3A] via-[#162650] to-[#2457E6] p-4 sm:p-6 text-white shadow-premium-lg">
          <div className="rounded-xl border border-white/15 bg-white text-[#151B2C] shadow-xl overflow-hidden">
            <div className="flex items-center justify-between gap-2 border-b border-[#E5E9F2] bg-[#F7F8FC] px-3.5 py-2.5">
              <div className="flex items-center gap-2 min-w-0">
                <Database className="size-4 text-[#2457E6] shrink-0" />
                <span className="text-xs font-bold text-[#101B3A] truncate">
                  Custom Full-Stack Admin CMS &amp; Cloud Portal
                </span>
              </div>
              <span className="shrink-0 rounded-md bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                JWT Protected
              </span>
            </div>

            <div className="p-4 space-y-3.5">
              <div className="grid grid-cols-3 gap-2.5">
                <div className="rounded-lg border border-[#2457E6]/25 bg-[#F3F7FF] p-2.5 text-center">
                  <span className="text-xs sm:text-sm font-extrabold text-[#2457E6] block">RBAC Auth</span>
                  <span className="text-[10px] font-semibold text-[#101B3A]">JWT &amp; OAuth</span>
                </div>
                <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-2.5 text-center">
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-700 block">REST APIs</span>
                  <span className="text-[10px] font-semibold text-emerald-800">Node &amp; Express</span>
                </div>
                <div className="rounded-lg border border-[#E5E9F2] bg-[#F7F8FC] p-2.5 text-center">
                  <span className="text-xs sm:text-sm font-extrabold text-[#101B3A] block">Cloud DB</span>
                  <span className="text-[10px] font-semibold text-[#68738A]">Live Sync</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-[#E5E9F2] bg-[#F7F8FC]">
                <img
                  src={kavuturuCms}
                  alt="Verified Custom Admin CMS Dashboard built by Blevon"
                  className="w-full h-40 sm:h-48 object-cover object-top"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5 text-[11px]">
                <span className="font-semibold text-[#101B3A]">
                  Verified Production CMS: Kavuturu Dental Clinic Admin
                </span>
                <span className="font-mono text-[#2457E6] font-bold">
                  React · Node.js · MongoDB Atlas
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case "packages-bundle":
    default:
      return (
        <div className="rounded-2xl border border-[#E5E9F2] bg-gradient-to-br from-[#101B3A] via-[#152655] to-[#2457E6] p-5 sm:p-6 text-white shadow-premium-lg space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="size-5 text-[#60A5FA] shrink-0" />
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Blevon Bundled Digital Packages
              </span>
            </div>
            <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-extrabold text-[#101B3A] shrink-0">
              2 Exclusive Offers
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-xs">
              <span className="text-[10px] font-mono font-bold text-[#60A5FA] uppercase block">
                OFFER 01 · ENDS NOV 20, 2026
              </span>
              <h4 className="mt-1 font-heading text-base font-extrabold text-white">
                Mobile App + FREE Website
              </h4>
              <p className="mt-1.5 text-xs text-slate-200 leading-relaxed">
                Android App + iOS App + Complimentary Responsive Business Website with Modern UI/UX.
              </p>
            </div>

            <div className="rounded-xl border-2 border-amber-400/80 bg-white text-[#151B2C] p-4 shadow-lg">
              <span className="text-[10px] font-mono font-extrabold text-[#2457E6] uppercase block">
                OFFER 02 · FIRST 2 BUSINESSES
              </span>
              <h4 className="mt-1 font-heading text-base font-extrabold text-[#101B3A]">
                Complete E-commerce – $800
              </h4>
              <p className="mt-1.5 text-xs text-[#68738A] leading-relaxed">
                E-commerce Website + Android App + iOS App + Cart, Checkout, Payment Gateway &amp; Order Admin.
              </p>
            </div>
          </div>
        </div>
      );
  }
}

export default ServiceVisualMockup;
