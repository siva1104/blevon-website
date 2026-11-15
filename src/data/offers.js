/**
 * CENTRALIZED OFFERS CONFIGURATION
 * Edit offer titles, prices, original reference prices, discounts, eligibility, and links here.
 * Changes automatically propagate to:
 *  1. Top Announcement Bar Marquee (src/components/layout/AnnouncementBar.jsx)
 *  2. Timed / Manual Offer Popup (src/components/common/OfferPopup.jsx)
 *  3. Special Offers Section (src/features/home/sections/SpecialOffersSection.jsx)
 */

export const HERO_OFFERS_CONFIG = {
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "919491229471",
  popupDelayMs: 1500,
  popupSessionKey: "blevon_visitor_offer_popup_v3",
  popupHeadline: "Exclusive Promotional Launch Packages",
  popupSubheadline:
    "Save 33% on complete multi-platform Web, Android, and iOS development for your business.",

  // Top Announcement Bar Marquee items
  marqueeItems: [
    {
      id: "free-website-bundle",
      emoji: "🎁",
      badgeLabel: "$999 · Save $500",
      highlight: "Build Any App + Get a Business Website FREE",
      detail: "$999 (Was $1,499 · 33% OFF)",
      accentTone: "blue",
      href: "/contact?offer=free-website-bundle",
    },
    {
      id: "ecommerce-suite",
      emoji: "🛒",
      badgeLabel: "$1,999 · Save $1,000",
      highlight: "Complete E-commerce Solution (Web + Android + iOS)",
      detail: "$1,999 (Was $2,999 · 33% OFF)",
      accentTone: "gold",
      href: "/contact?offer=ecommerce-suite",
    },
  ],

  // Popup & Quick-Claim Offers
  offers: [
    {
      id: "free-website-bundle",
      type: "countdown",
      icon: "smartphone",
      tag: "OFFER 01 · APP + FREE WEBSITE",
      title: "Build Any App + Get a Website FREE",
      promoPrice: "$999",
      originalPrice: "$1,499",
      discountBadge: "33% OFF · Save $500",
      priceOrBenefit: "$999",
      benefitPill: "Free Business Website Included",
      platforms: "Android App + iOS App + Free Business Website",
      description:
        "Commission your custom Android & iOS mobile applications and receive a modern, responsive business website completely FREE.",
      validityText: "Small & Medium Businesses · 33% Off Reference Price",
      countdownTargetDate: "2026-11-20T23:59:59+05:30",
      ctaText: "Claim $999 Offer →",
      ctaLink: "/contact?offer=free-website-bundle",
      whatsappPrefill:
        "Hello Blevon Team, I want to claim Offer 1: Build Any App + Get a Website FREE ($999 promotional price, original $1,499).",
    },
    {
      id: "ecommerce-suite",
      type: "scarcity",
      icon: "shopping-bag",
      tag: "OFFER 02 · COMPLETE E-COMMERCE SOLUTION",
      scarcityBadge: "Save $1,000 (33% OFF)",
      title: "Complete E-commerce Solution",
      promoPrice: "$1,999",
      originalPrice: "$2,999",
      discountBadge: "33% OFF · Save $1,000",
      priceOrBenefit: "$1,999",
      benefitPill: "Web + Android + iOS + CMS",
      platforms: "E-commerce Web + Android App + iOS App + Admin CMS",
      description:
        "Complete e-commerce website, Android app, and iOS app with centralized admin dashboard, CMS, inventory, order management, and payment gateway.",
      validityText: "Limited Monthly Onboarding Slots",
      spotsAvailable: 2,
      spotsTotal: 2,
      spotsLabel: "Save $1,000 off $2,999 reference price",
      ctaText: "Claim $1,999 Offer →",
      ctaLink: "/contact?offer=ecommerce-suite",
      whatsappPrefill:
        "Hello Blevon Team, I want to claim Offer 2: Complete E-commerce Solution ($1,999 promotional price, original $2,999 — Web + Android + iOS + Admin CMS).",
    },
  ],
};

/**
 * Helper to compute live countdown state toward an ISO date string.
 */
export function getCountdownStatus(targetIsoDate) {
  const targetMs = new Date(targetIsoDate).getTime();
  const nowMs = Date.now();
  const diffMs = targetMs - nowMs;

  if (Number.isNaN(targetMs) || diffMs <= 0) {
    return {
      isLive: true,
      formatted: "Limited-Time Offer",
      days: 0,
      hours: 0,
      minutes: 0,
    };
  }

  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  const pad = (n) => String(n).padStart(2, "0");
  return {
    isLive: false,
    formatted: `Ends in ${days}d ${pad(hours)}h ${pad(minutes)}m`,
    days,
    hours,
    minutes,
  };
}

export const SPECIAL_OFFERS = [
  {
    id: "free-website-bundle",
    badge: "33% OFF · Save $500",
    badgeTone: "blue",
    eyebrow: "OFFER 01 · BUSINESS DIGITALIZATION BUNDLE",
    title: "Build Any App + Get a Website FREE",
    subtitle:
      "Launch a complete mobile and web presence simultaneously. Commission your Android and iOS mobile applications with Blevon and receive a custom, responsive business website (non-ecommerce) at zero additional development cost.",
    priceLabel: "Promotional Bundle Price",
    priceValue: "$999",
    originalPrice: "$1,499",
    discountPercent: "33% OFF",
    savingsText: "You Save $500 + Free Business Website",
    priceSubtext: "Android App + iOS App + Free Business Website + Backend",
    validity: "Target Customers: Small, Medium & Established Businesses Digitizing Operations",
    ctaText: "Claim the $999 App + Website Bundle",
    ctaLink: "/contact?offer=free-website-bundle",
    secondaryLink: "/contact?offer=free-website-bundle",
    features: [
      "Custom Android mobile application",
      "Custom iOS mobile application",
      "FREE responsive business website (non-ecommerce)",
      "Backend functionality based on agreed requirements",
      "Modern, cohesive UI/UX design across Web & Mobile",
      "Admin control panel for managing inquiries/content",
      "Google Play & Apple App Store deployment assistance",
      "30-day post-launch bug-fix warranty",
    ],
    eligibility: [
      "Ideal for small businesses, medium-sized businesses, and established organizations looking to digitize operations.",
      "Excludes large-scale enterprise businesses and multi-vendor marketplaces.",
      "New businesses: eligibility subject to initial discovery consultation and scope approval.",
    ],
    exclusions: [
      "Cloud hosting, server infrastructure & database bandwidth costs",
      "Custom domain registration & annual DNS renewal fees",
      "Apple App Store ($99/yr) & Google Play ($25 one-time) developer account fees",
      "Third-party paid APIs, SMS/OTP gateways, or external SaaS subscriptions",
    ],
  },
  {
    id: "ecommerce-suite",
    badge: "33% OFF · Save $1,000",
    badgeTone: "amber",
    eyebrow: "OFFER 02 · COMPLETE MULTI-CHANNEL COMMERCE",
    title: "Complete E-commerce Solution",
    subtitle:
      "Own your entire digital retail channel. A unified e-commerce website, Android shopping app, and iOS shopping app powered by a single centralized administration dashboard, CMS, inventory engine, and payment gateway.",
    priceLabel: "Promotional Suite Price",
    priceValue: "$1,999",
    originalPrice: "$2,999",
    discountPercent: "33% OFF",
    savingsText: "You Save $1,000 Off Reference Price",
    priceSubtext: "E-commerce Web + Android App + iOS App + Centralized Admin CMS",
    validity: "Limited Onboarding Capacity to Guarantee 4–6 Week Delivery",
    ctaText: "Secure the $1,999 E-commerce Suite",
    ctaLink: "/contact?offer=ecommerce-suite",
    secondaryLink: "/contact?offer=ecommerce-suite",
    featured: true,
    features: [
      "Complete custom E-commerce Website",
      "Synchronized Android mobile shopping application",
      "Synchronized iOS mobile shopping application",
      "Content Management System (CMS)",
      "Centralized administration dashboard",
      "Secure payment gateway integration (Razorpay / Stripe / PayPal)",
      "Product catalog, variant & inventory management",
      "End-to-end order management & fulfillment workflows",
      "Customer account & order history management",
      "Production web launch & App Store submission support",
    ],
    eligibility: [
      "Designed for single-vendor retail, D2C brands, wholesalers, and established SMB stores launching online.",
      "Excludes multi-vendor marketplaces, custom enterprise ERP integrations, and large-scale enterprise commerce.",
    ],
    exclusions: [
      "Web hosting, cloud database & media CDN server fees",
      "Domain name purchase and annual DNS renewal",
      "Payment gateway transaction fees & third-party SMS/email gateway charges",
      "Apple Developer Program ($99/yr) & Google Play Console ($25) account fees",
    ],
  },
];

export default SPECIAL_OFFERS;
