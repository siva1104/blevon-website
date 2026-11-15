/**
 * CENTRALIZED NICHE DEMO WEBSITES DATA
 * ============================================================================
 * How to add your own Demo Website Designs:
 * 1. Place your screenshot/design images in `src/assets/images/demos/` (or use public URLs like `/demos/my-design.png`).
 * 2. Set `image: "/demos/my-design.png"` for the card thumbnail & desktop preview.
 * 3. Optionally set `mobileImage` and `galleryImages: ["/demos/screen1.png", "/demos/screen2.png"]` for the Demo Detail Page.
 * 4. Set `liveDemoUrl: "https://your-demo-link.com"` if you have a hosted live preview link.
 */

export const DEMO_NICHES = [
  { id: "all", label: "All Niches" },
  { id: "ecommerce", label: "E-commerce & Retail" },
  { id: "healthcare", label: "Healthcare & Clinics" },
  { id: "realestate", label: "Real Estate & Property" },
  { id: "restaurant", label: "Restaurants & Food" },
  { id: "corporate", label: "Corporate & SaaS" },
  { id: "fitness", label: "Fitness & Salon" },
];

export const DEMO_WEBSITES = [
  {
    id: "demo-ecommerce-fashion",
    slug: "fashion-ecommerce-store",
    num: "01",
    niche: "ecommerce",
    nicheLabel: "E-commerce & Retail",
    businessName: "Veloura Apparel",
    title: "Veloura — Fashion & Apparel Store",
    shortSubtitle: "Modern D2C storefront with lookbooks, cart & 1-page checkout",
    domainPreview: "veloura-store.blevon.demo",
    badge: "Web + App Ready",
    accentTone: "amber",
    // Add your custom design screenshot path or URL here:
    image: null,
    mobileImage: null,
    galleryImages: [],
    // Add your live hosted demo URL here (e.g. "https://demo.blevon.in/fashion"):
    liveDemoUrl: "",
    description:
      "High-converting multi-category retail storefront featuring lookbook galleries, instant size/color filtering, slide-out cart drawer, and Razorpay/Stripe one-page checkout.",
    pagesIncluded: [
      {
        title: "Editorial Storefront Home",
        desc: "Full-bleed seasonal campaign hero, trending collections, and trust badges.",
      },
      {
        title: "Smart Filter Collection Grid",
        desc: "Instant filtering by category, size, color swatch, and price range.",
      },
      {
        title: "Product Detail + Size Guide",
        desc: "Zoomable multi-angle gallery, SKU selector, reviews, and sticky Add-to-Cart.",
      },
      {
        title: "Slide-Out Cart & Express Checkout",
        desc: "Frictionless cart drawer with promo codes and UPI / Card / Wallet payment.",
      },
      {
        title: "Customer Order Tracking Portal",
        desc: "Self-service account dashboard for order history, returns, and live shipment status.",
      },
    ],
    features: [
      "Dynamic Variant & SKU Picker",
      "Instant Search & Lookbook",
      "UPI, Card & Wallet Checkout",
      "Merchant Inventory Dashboard",
      "Abandoned Cart Recovery Ready",
      "Mobile App Synchronized API",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe / Razorpay", "Admin CMS"],
    mockupTheme: {
      primary: "#101B3A",
      accent: "#F59E0B",
      softBg: "#FFFBEB",
      heroTag: "NEW SEASON COLLECTION · 2026",
      heroHeadline: "Minimalist Luxury Everyday Wear.",
      ctaLabel: "Shop Collection",
      metrics: ["0.7s Load", "1-Tap Cart", "Mobile Sync"],
    },
  },
  {
    id: "demo-healthcare-clinic",
    slug: "healthcare-dental-clinic",
    num: "02",
    niche: "healthcare",
    nicheLabel: "Healthcare & Clinics",
    businessName: "AuraMed Clinic",
    title: "AuraMed — Healthcare & Dental Clinic",
    shortSubtitle: "Patient-first clinic website with doctor profiles & slot booking",
    domainPreview: "auramed-clinic.blevon.demo",
    badge: "Booking + CMS",
    accentTone: "emerald",
    image: null,
    mobileImage: null,
    galleryImages: [],
    liveDemoUrl: "",
    description:
      "Trust-first healthcare & clinic platform engineered with doctor profiles, interactive before/after treatment sliders, online appointment scheduling, and WhatsApp patient desk.",
    pagesIncluded: [
      {
        title: "Clinic Authority Homepage",
        desc: "Accreditation badges, emergency contact bar, department overview, and patient reviews.",
      },
      {
        title: "Specialist Doctor Profiles",
        desc: "Credentials, specializations, consultation timings, and direct slot booking.",
      },
      {
        title: "Treatment & Procedure Pages",
        desc: "SEO-structured pages for each treatment with FAQs and recovery guides.",
      },
      {
        title: "Before & After Case Gallery",
        desc: "Interactive visual comparison sliders demonstrating real clinical outcomes.",
      },
      {
        title: "Appointment Booking & Admin CMS",
        desc: "Patient booking workflow paired with a staff dashboard to manage schedules.",
      },
    ],
    features: [
      "Online Slot Appointment Booking",
      "Doctor & Department Directory",
      "Before/After Case Comparisons",
      "Staff Content Management Portal",
      "One-Tap WhatsApp Patient Desk",
      "Local Google Maps & Schema SEO",
    ],
    tags: ["React 19", "Node.js", "MongoDB", "Appointment Engine", "Local SEO"],
    mockupTheme: {
      primary: "#064E3B",
      accent: "#10B981",
      softBg: "#ECFDF5",
      heroTag: "NABH GRADE PATIENT CARE",
      heroHeadline: "Modern Healthcare Built Around Patient Comfort.",
      ctaLabel: "Book Appointment",
      metrics: ["24/7 Booking", "SEO Schema", "Custom CMS"],
    },
  },
  {
    id: "demo-real-estate",
    slug: "luxury-real-estate-portal",
    num: "03",
    niche: "realestate",
    nicheLabel: "Real Estate & Property",
    businessName: "CrestHaven Realty",
    title: "CrestHaven — Luxury Real Estate Portal",
    shortSubtitle: "Property listings with map search, floorplans & EMI calculator",
    domainPreview: "cresthaven-realty.blevon.demo",
    badge: "Map Search + CRM",
    accentTone: "royal",
    image: null,
    mobileImage: null,
    galleryImages: [],
    liveDemoUrl: "",
    description:
      "Architectural real estate portal with interactive property filtering by location, budget, and BHK, virtual tour embeds, EMI mortgage calculator, and instant site-visit booking.",
    pagesIncluded: [
      {
        title: "Luxury Property Search Home",
        desc: "Hero search bar by city, property type, and budget with featured developments.",
      },
      {
        title: "Interactive Map & Filter Grid",
        desc: "Split-screen property cards and interactive map pins with neighbourhood insights.",
      },
      {
        title: "Property Floorplan & Virtual Tour",
        desc: "2D/3D floorplan tabs, amenities checklist, RERA badge, and 360° video tour.",
      },
      {
        title: "EMI & ROI Calculator Module",
        desc: "Interactive down-payment, interest rate, and monthly mortgage estimator.",
      },
      {
        title: "Agent Lead Capture Dashboard",
        desc: "Centralized CRM panel for managing site-visit requests and brochure downloads.",
      },
    ],
    features: [
      "Location, Price & BHK Filters",
      "Interactive Floorplans & Gallery",
      "Built-in EMI Calculator",
      "WhatsApp Site-Visit Scheduler",
      "Downloadable PDF Brochure Gate",
      "Multi-Agent Listing Management",
    ],
    tags: ["Next.js", "TypeScript", "Mapbox / Maps", "Lead CRM", "High-Res Media"],
    mockupTheme: {
      primary: "#101B3A",
      accent: "#2457E6",
      softBg: "#F3F7FF",
      heroTag: "SIGNATURE RESIDENCES & COMMERCIAL",
      heroHeadline: "Discover Verified Luxury Properties.",
      ctaLabel: "Schedule Site Visit",
      metrics: ["360° Tours", "Smart Filters", "Lead Alerts"],
    },
  },
  {
    id: "demo-restaurant-food",
    slug: "restaurant-online-ordering",
    num: "04",
    niche: "restaurant",
    nicheLabel: "Restaurants & Food",
    businessName: "Saffron & Salt Kitchen",
    title: "Saffron & Salt — Restaurant & Ordering",
    shortSubtitle: "Direct online food ordering, digital QR menu & table booking",
    domainPreview: "saffron-kitchen.blevon.demo",
    badge: "QR Menu + Ordering",
    accentTone: "rose",
    image: null,
    mobileImage: null,
    galleryImages: [],
    liveDemoUrl: "",
    description:
      "Commission-free restaurant ordering and table reservation website with digital QR menu categories, chef specials, customize-dish modifiers, and live kitchen order alerts.",
    pagesIncluded: [
      {
        title: "Culinary Story & Hero Showcase",
        desc: "Appetizing signature dish visuals, opening hours, and instant order/reserve CTAs.",
      },
      {
        title: "Interactive Category Menu & Cart",
        desc: "Veg/Non-Veg filters, spice modifiers, add-on toppings, and live cart total.",
      },
      {
        title: "Instant Table Reservation Flow",
        desc: "Select guest count, date, dining zone, and special occasion notes in seconds.",
      },
      {
        title: "Catering & Private Events Page",
        desc: "Custom banquet packages and bulk inquiry builder for corporate/family events.",
      },
      {
        title: "Kitchen Order & Menu Admin",
        desc: "Toggle item availability, update daily specials, and accept incoming delivery orders.",
      },
    ],
    features: [
      "0% Commission Direct Ordering",
      "Instant Table & Party Booking",
      "Dietary & Spice Level Filters",
      "QR Dine-In Menu Integration",
      "UPI & Card Express Payment",
      "Live Order Status Notifications",
    ],
    tags: ["React", "Tailwind CSS", "Online Ordering", "UPI Checkout", "QR Menu"],
    mockupTheme: {
      primary: "#4C0519",
      accent: "#E11D48",
      softBg: "#FFF1F2",
      heroTag: "ARTISANAL DINING & CLOUD DELIVERY",
      heroHeadline: "Crafted Flavors Delivered Warm to Your Table.",
      ctaLabel: "Order Online / Reserve",
      metrics: ["QR Menu", "Direct UPI", "Table Slots"],
    },
  },
  {
    id: "demo-corporate-saas",
    slug: "b2b-corporate-saas-platform",
    num: "05",
    niche: "corporate",
    nicheLabel: "Corporate & SaaS",
    businessName: "NexaFlow Systems",
    title: "NexaFlow — B2B Corporate & SaaS",
    shortSubtitle: "Executive B2B & SaaS platform with interactive product tours",
    domainPreview: "nexaflow-cloud.blevon.demo",
    badge: "B2B Authority",
    accentTone: "indigo",
    image: null,
    mobileImage: null,
    galleryImages: [],
    liveDemoUrl: "",
    description:
      "Executive B2B corporate and SaaS marketing website with interactive product tour tabs, ROI calculator, tiered pricing comparison matrix, and enterprise consultation funnel.",
    pagesIncluded: [
      {
        title: "Executive SaaS / B2B Homepage",
        desc: "High-authority hero dashboard preview, client logo wall, and metric counters.",
      },
      {
        title: "Interactive Feature & API Breakdown",
        desc: "Tabbed workflow demonstrations, architecture diagrams, and integration ecosystem.",
      },
      {
        title: "Pricing Tiers & Comparison Matrix",
        desc: "Monthly/Annual billing toggle with full feature-by-feature comparison table.",
      },
      {
        title: "Case Studies & Security Compliance",
        desc: "Enterprise ROI stories, security architecture, and documentation hub.",
      },
      {
        title: "Client Onboarding & Demo Funnel",
        desc: "Multi-step qualification form and calendar scheduling integration.",
      },
    ],
    features: [
      "Interactive Product Dashboard Preview",
      "Monthly / Annual Pricing Toggle",
      "Enterprise Lead Qualification Form",
      "99+ Lighthouse Core Web Vitals",
      "Documentation & Blog Hub",
      "CRM & Webhook Lead Routing",
    ],
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "B2B Funnel", "Technical SEO"],
    mockupTheme: {
      primary: "#1E1B4B",
      accent: "#4F46E5",
      softBg: "#EEF2FF",
      heroTag: "ENTERPRISE WORKFLOW AUTOMATION",
      heroHeadline: "Scale Operations With Connected Cloud Systems.",
      ctaLabel: "Request Live Demo",
      metrics: ["99.9% Uptime", "SOC2 UI", "Fast Funnel"],
    },
  },
  {
    id: "demo-fitness-salon",
    slug: "fitness-studio-wellness-club",
    num: "06",
    niche: "fitness",
    nicheLabel: "Fitness & Salon",
    businessName: "PulseCore Fitness Club",
    title: "PulseCore — Fitness & Wellness Studio",
    shortSubtitle: "Class timetables, trainer booking & membership subscriptions",
    domainPreview: "pulsecore-club.blevon.demo",
    badge: "Classes + Memberships",
    accentTone: "sky",
    image: null,
    mobileImage: null,
    galleryImages: [],
    liveDemoUrl: "",
    description:
      "Energetic fitness club, salon, and wellness studio platform with weekly class timetables, trainer/stylist booking, membership plan subscriptions, and trial pass registration.",
    pagesIncluded: [
      {
        title: "High-Energy Studio Homepage",
        desc: "Program highlights, studio virtual tour, transformation stories, and free trial CTA.",
      },
      {
        title: "Weekly Class & Trainer Schedule",
        desc: "Filterable day-by-day timetable for HIIT, Yoga, Strength, and personal sessions.",
      },
      {
        title: "Membership Plans & Trial Pass",
        desc: "Recurring membership tiers, class pack bundles, and 1-click trial pass claim.",
      },
      {
        title: "Trainer & Specialist Directory",
        desc: "Coach certifications, specialties, and private 1-on-1 booking slots.",
      },
      {
        title: "Member Portal & App Companion",
        desc: "Ready to pair with iOS & Android member check-in and workout tracking apps.",
      },
    ],
    features: [
      "Live Class Timetable & Filters",
      "Membership Subscription Checkout",
      "Trainer & Stylist Profiles",
      "Free Trial Pass Lead Capture",
      "BMI / Fitness Goal Estimator",
      "iOS & Android Member App Ready",
    ],
    tags: ["React", "Mobile App Ready", "Booking Calendar", "Subscriptions", "UI/UX"],
    mockupTheme: {
      primary: "#0C4A6E",
      accent: "#0284C7",
      softBg: "#F0F9FF",
      heroTag: "STRENGTH · CONDITIONING · RECOVERY",
      heroHeadline: "Train Smarter With Guided Studio Programs.",
      ctaLabel: "Claim Free Trial Pass",
      metrics: ["Class Booking", "Member App", "Auto-Renew"],
    },
  },
];

export function getDemoBySlug(slugOrId) {
  return DEMO_WEBSITES.find(
    (d) => d.slug === slugOrId || d.id === slugOrId
  );
}

export default DEMO_WEBSITES;
