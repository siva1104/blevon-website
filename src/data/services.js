import serviceWebsite3D from "@/assets/images/services/website-development.webp";
import serviceApp3D from "@/assets/images/services/app-development.webp";
import serviceUiUx3D from "@/assets/images/services/ui-ux-design.webp";

export const SERVICES_LIST = [
  {
    id: "website-development",
    slug: "website-development",
    aliasSlug: "web-development",
    num: "01",
    shortTitle: "Custom Website Development",
    pageTitle: "Website Development Services",
    category: "Web Engineering",
    iconName: "Globe",
    accentTone: "royal",
    visualTheme: "custom-web",
    image: serviceWebsite3D,
    shortDescription:
      "Bespoke, high-performance websites engineered from the ground up with clean architecture, technical SEO foundations, and responsive precision.",
    heroEyebrow: "WEBSITE DEVELOPMENT SERVICES",
    heroHeadline: "Custom Websites Engineered for Speed, Clarity, and Growth.",
    heroDescription:
      "We design and develop bespoke websites tailored to your brand identity and business objectives—combining modern frontend frameworks, sub-second performance, and search-ready semantic architecture.",
    overviewTitle: "Beyond Generic Templates—Architecture Built Around Your Business.",
    featureSubtitle:
      "Every capability we engineer into your custom website is designed for speed, search visibility, and long-term reliability.",
    overviewParagraphs: [
      "Your website is often the first technical and visual interaction a prospective customer has with your company. Off-the-shelf templates force your business logic into rigid layouts, resulting in bloated code, slow load times, and forgettable user journeys.",
      "At Blevon, we architect custom websites from scratch using modern React, Next.js, and Vite ecosystems. Every layout, interaction, and content module is intentionally engineered to communicate your value proposition clearly and convert visitors across desktop and mobile devices.",
    ],
    features: [
      {
        title: "Custom Frontend Architecture",
        desc: "Component-driven codebases built with React, Next.js, and Tailwind CSS for instant page transitions and long-term maintainability.",
      },
      {
        title: "Technical SEO Foundations",
        desc: "Semantic HTML5 hierarchy, structured schema markup, Open Graph metadata, clean URL structures, and automated XML sitemaps.",
      },
      {
        title: "Dynamic CMS Integration",
        desc: "Tailored administrative dashboards or headless CMS setups that empower your team to update copy, blogs, and media without touching code.",
      },
      {
        title: "Core Web Vitals Optimization",
        desc: "Optimized asset delivery, lazy-loaded media, zero layout shift (CLS), and sub-second First Contentful Paint performance.",
      },
      {
        title: "Mobile-First Responsive Layouts",
        desc: "Adaptive grids and touch-ergonomic navigation tested across smartphones, tablets, laptops, and ultra-wide monitors.",
      },
      {
        title: "Security & Cloud Deployment",
        desc: "End-to-end SSL/TLS encryption, edge CDN caching on Vercel or Cloudflare, and resilient API form/communication endpoints.",
      },
    ],
    benefits: [
      {
        metric: "100% Custom",
        title: "Distinct Brand Authority",
        desc: "Stand out in competitive markets with an interface designed exclusively for your organization.",
      },
      {
        metric: "SEO-Ready",
        title: "Organic Search Visibility",
        desc: "Engineered from line one so search engines can crawl, index, and rank your pages effectively.",
      },
      {
        metric: "Scalable Code",
        title: "Built to Evolve",
        desc: "Modular component systems allow new pages, portals, or integrations to be added seamlessly.",
      },
      {
        metric: "Easy Management",
        title: "Independent Content Control",
        desc: "Update announcements, portfolios, and services directly through an intuitive admin interface.",
      },
    ],
    deliverables: [
      "Custom UI/UX Wireframes & High-Fidelity Design",
      "Responsive Frontend & Backend Engineering",
      "Custom Admin CMS / Content Management System",
      "On-Page Technical SEO & Schema Configuration",
      "Cross-Browser & Multi-Device QA Testing",
      "Production Cloud Deployment & DNS Setup",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Audit",
        desc: "We analyze your business model, audience intent, existing digital assets, and technical requirements.",
      },
      {
        step: "02",
        title: "Information Architecture",
        desc: "We map out site navigation, page hierarchies, conversion pathways, and content structures.",
      },
      {
        step: "03",
        title: "UI/UX Visual Design",
        desc: "We craft a bespoke royal-grade interface with refined typography, color tokens, and interactive states.",
      },
      {
        step: "04",
        title: "Full-Stack Development",
        desc: "We engineer the frontend, CMS backend, and API integrations using clean, maintainable code.",
      },
      {
        step: "05",
        title: "QA, SEO & Launch",
        desc: "We run performance benchmarks, accessibility checks, and deploy your website to global edge servers.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to build a custom website?",
        a: "A standard custom website typically takes 3 to 6 weeks from discovery to launch, depending on page count, custom CMS requirements, and content readiness.",
      },
      {
        q: "Can you redesign my existing outdated website?",
        a: "Yes. As demonstrated in our Kavuturu Dental Clinic case study, we specialize in transforming legacy websites into modern, fast, SEO-ready platforms with custom CMS capabilities.",
      },
      {
        q: "Will I be able to edit text and images myself after launch?",
        a: "Absolutely. We can integrate a custom administrative dashboard or CMS so your staff can update content, blogs, team profiles, and galleries without developer assistance.",
      },
      {
        q: "Do I own the source code once the project is completed?",
        a: "Yes. Upon full project completion and settlement, 100% ownership of the custom website designs and bespoke codebase is transferred to your business.",
      },
    ],
  },
  {
    id: "business-website-development",
    slug: "business-website-development",
    num: "02",
    shortTitle: "Business Website Development",
    pageTitle: "Business Website Development",
    category: "Corporate & B2B",
    iconName: "Building2",
    accentTone: "navy",
    visualTheme: "business-web",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    shortDescription:
      "Authoritative corporate and service websites designed to establish credibility, showcase capabilities, and generate qualified client inquiries.",
    heroEyebrow: "BUSINESS WEBSITE DEVELOPMENT",
    heroHeadline: "Professional Corporate Websites That Command Trust and Convert Clients.",
    heroDescription:
      "Whether you run a healthcare clinic, consulting firm, B2B enterprise, or growing service brand, we build authoritative business websites that position your company as an industry leader.",
    overviewTitle: "Designed for Credibility, Structured for Client Conversion.",
    featureSubtitle:
      "Every capability we engineer into your business website is designed to build authority and generate qualified client inquiries.",
    overviewParagraphs: [
      "For service businesses, clinics, agencies, and B2B enterprises, trust is the primary currency. When prospective clients evaluate your company online, they judge your operational reliability by the clarity, speed, and polish of your website.",
      "We structure business websites around clear messaging, transparent service breakdowns, verified social proof, and frictionless inquiry channels (direct email, phone, WhatsApp, and consultation workflows) so visitors can engage with confidence.",
    ],
    features: [
      {
        title: "Executive Brand Positioning",
        desc: "Clean, authoritative layouts that communicate your company's expertise, credentials, and service offerings within seconds.",
      },
      {
        title: "Lead & Inquiry Pathways",
        desc: "Strategically positioned CTAs, direct WhatsApp/phone triggers, and structured consultation workflows that maximize inquiries.",
      },
      {
        title: "Service & Case Study Showcases",
        desc: "Dedicated pages for each of your business divisions, treatments, or service lines to capture targeted search traffic.",
      },
      {
        title: "Local & Regional SEO Setup",
        desc: "Location-specific metadata, Google Business schema alignment, and fast mobile loading for local search dominance.",
      },
      {
        title: "Team, Credentials & Trust Blocks",
        desc: "Structured sections for leadership profiles, client testimonials, before/after comparisons, and company milestones.",
      },
      {
        title: "Staff-Friendly Content Portal",
        desc: "Simple administrative tools allowing your office or marketing team to post news, update hours, or publish articles.",
      },
    ],
    benefits: [
      {
        metric: "First Impression",
        title: "Instant Professional Credibility",
        desc: "Present your company with the visual sophistication of an international enterprise.",
      },
      {
        metric: "Clear Navigation",
        title: "Zero Visitor Friction",
        desc: "Help prospects find your services, pricing, and contact channels in two clicks or less.",
      },
      {
        metric: "Mobile Ready",
        title: "Capture On-the-Go Clients",
        desc: "Over 70% of service searches happen on phones—your site will perform flawlessly on every screen.",
      },
      {
        metric: "Free Website Offer",
        title: "Eligible for App Bundle",
        desc: "Build your Android & iOS mobile app with Blevon (valid until Nov 20, 2026) and get your business website FREE.",
      },
    ],
    deliverables: [
      "Corporate Homepage & Multi-Page Architecture",
      "Dedicated Service / Department Detail Pages",
      "Direct Phone, Email & WhatsApp Integration",
      "Dynamic Blog, Gallery & Testimonial Management",
      "Local & Technical SEO Optimization",
      "SSL Security & High-Availability Hosting Setup",
    ],
    process: [
      {
        step: "01",
        title: "Business Alignment",
        desc: "We learn about your services, ideal customer profile, competitors, and core value propositions.",
      },
      {
        step: "02",
        title: "Content & Page Planning",
        desc: "We organize your service pages, trust signals, and call-to-action hierarchy for maximum clarity.",
      },
      {
        step: "03",
        title: "Editorial UI Design",
        desc: "We design a clean, minimal corporate interface aligned with your brand identity.",
      },
      {
        step: "04",
        title: "Engineering & CMS",
        desc: "We build the responsive frontend and optional admin dashboard for easy updates.",
      },
      {
        step: "05",
        title: "Launch & Handover",
        desc: "We deploy to production and walk your team through managing the platform.",
      },
    ],
    faqs: [
      {
        q: "How can I get a Business Website for FREE?",
        a: "Under our special promotional offer valid until November 20, 2026, when you build your Android and iOS mobile application with Blevon, we include a complete, responsive business website for FREE!",
      },
      {
        q: "What industries do you build business websites for?",
        a: "We work with healthcare clinics (such as Kavuturu Dental Clinic), professional services, real estate, education, hospitality, technology startups, and corporate enterprises.",
      },
      {
        q: "Can you integrate WhatsApp and direct phone calling?",
        a: "Yes. Every business website we build can include one-tap phone calling, WhatsApp chat initiation, and direct email links for immediate customer communication.",
      },
      {
        q: "Do you help organize our website copy and structure?",
        a: "Yes. During our planning phase, we help structure your headings, service descriptions, and page layouts so your message is clear and persuasive.",
      },
    ],
  },
  {
    id: "ecommerce-website-development",
    slug: "ecommerce-website-development",
    num: "03",
    shortTitle: "E-commerce Website Development",
    pageTitle: "E-commerce Website Development",
    category: "Online Commerce",
    iconName: "ShoppingBag",
    accentTone: "indigo",
    visualTheme: "ecommerce-web",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    shortDescription:
      "Scalable online stores with intuitive product catalogs, seamless shopping carts, secure payment gateways, and full order management.",
    heroEyebrow: "E-COMMERCE WEBSITE DEVELOPMENT",
    heroHeadline: "High-Converting Online Stores Built for Modern Retail.",
    heroDescription:
      "Turn browsers into buyers with a fast, secure, and beautifully engineered e-commerce website—complete with product catalog management, cart & checkout flows, and integrated payment gateways.",
    overviewTitle: "Engineered for Frictionless Shopping and Operational Control.",
    featureSubtitle:
      "Every capability we engineer into your e-commerce storefront is built to maximize conversions and simplify store management.",
    overviewParagraphs: [
      "In digital retail, every millisecond of load time and every extra step in checkout directly impacts your conversion rate. Generic storefront themes often suffer from slow scripts, clunky mobile filtering, and disjointed checkout flows.",
      "Blevon engineers modern e-commerce websites designed around product discovery, fast category filtering, persistent shopping carts, and trustworthy payment processing—backed by an intuitive dashboard for managing inventory, orders, and customers.",
    ],
    features: [
      {
        title: "Dynamic Product Catalog & Filtering",
        desc: "Multi-category organization, variant selectors (size, color, pricing), instant search, and high-resolution image galleries.",
      },
      {
        title: "Frictionless Cart & Checkout",
        desc: "Slide-out cart drawers, coupon/promo code support, guest checkout options, and streamlined address validation.",
      },
      {
        title: "Payment Gateway Integration",
        desc: "Secure integration with leading payment processors (Razorpay, Stripe, PayPal, UPI, Credit/Debit cards, and Net Banking).",
      },
      {
        title: "Order & Inventory Management",
        desc: "Centralized merchant dashboard to track incoming orders, update fulfillment statuses, manage stock levels, and export reports.",
      },
      {
        title: "Customer Accounts & Order Tracking",
        desc: "Dedicated customer portals for viewing order history, saving delivery addresses, and tracking shipment progress.",
      },
      {
        title: "Mobile Commerce Optimization",
        desc: "Thumb-friendly product cards, sticky 'Add to Cart' bars, and fast mobile checkout engineered for smartphone shoppers.",
      },
    ],
    benefits: [
      {
        metric: "$1,999 Suite",
        title: "Save $1,000 (33% OFF)",
        desc: "Get your E-commerce Website + Android App + iOS App + Admin CMS for $1,999 (Original $2,999).",
      },
      {
        metric: "Fast Checkout",
        title: "Reduced Cart Abandonment",
        desc: "Streamlined checkout steps and instant page loads keep shoppers moving from product to purchase.",
      },
      {
        metric: "Full Control",
        title: "Effortless Store Administration",
        desc: "Add products, adjust pricing, launch discounts, and process orders from a single clean dashboard.",
      },
      {
        metric: "PCI-Compliant",
        title: "Trusted Payment Security",
        desc: "Industry-standard encrypted checkout integrations protect both your business and your customers.",
      },
    ],
    deliverables: [
      "Custom Responsive E-commerce Web Storefront",
      "Product Catalog, Categories & Variant System",
      "Shopping Cart & Multi-Step Checkout Engine",
      "Payment Gateway Integration (UPI, Cards, Net Banking)",
      "Merchant Admin Panel for Orders & Inventory",
      "Deployment & SSL Security Configuration",
    ],
    process: [
      {
        step: "01",
        title: "Catalog & Commerce Strategy",
        desc: "We map your product taxonomy, SKU variants, shipping rules, and payment gateway requirements.",
      },
      {
        step: "02",
        title: "Storefront UX Design",
        desc: "We design high-converting product pages, collection grids, and a distraction-free checkout flow.",
      },
      {
        step: "03",
        title: "Store & Admin Engineering",
        desc: "We build the storefront, shopping cart state, database models, and merchant order management portal.",
      },
      {
        step: "04",
        title: "Payment & Security Testing",
        desc: "We test end-to-end sandbox transactions, webhook callbacks, tax calculations, and edge cases.",
      },
      {
        step: "05",
        title: "Production Store Launch",
        desc: "We deploy your live store, verify live payment settlements, and train your team on order fulfillment.",
      },
    ],
    faqs: [
      {
        q: "Tell me about the $1,999 Complete E-commerce Solution!",
        a: "Priced at $1,999 (33% off our $2,999 reference price), you receive a complete E-commerce Website + Android App + iOS App + Content Management System (CMS) + centralized admin dashboard with product, inventory, order, customer management, and payment gateway integration.",
      },
      {
        q: "Which payment gateways can you integrate?",
        a: "We integrate Razorpay, Stripe, PayPal, Cashfree, PayU, and standard UPI/Card/Net Banking gateways depending on your target market and business registration.",
      },
      {
        q: "Can I manage products and orders without technical knowledge?",
        a: "Yes. Your store includes an intuitive administration panel where you can upload product photos, edit prices, manage stock, and update order statuses.",
      },
      {
        q: "Are hosting, domain, and payment gateway fees included in development pricing?",
        a: "Development pricing covers design, engineering, and deployment assistance. Third-party costs such as domain registration, cloud hosting, payment gateway transaction fees, and app store developer accounts are billed directly by their respective providers.",
      },
    ],
  },
  {
    id: "android-app-development",
    slug: "android-app-development",
    aliasSlug: "app-development",
    num: "04",
    shortTitle: "Android Application Development",
    pageTitle: "Android App Development",
    category: "Android Apps",
    iconName: "Smartphone",
    accentTone: "emerald",
    visualTheme: "android-app",
    image: serviceApp3D,
    shortDescription:
      "High-performance Android applications engineered for smooth 60fps interactions, offline resilience, and Google Play Store scale.",
    heroEyebrow: "ANDROID APP DEVELOPMENT",
    heroHeadline: "Powerful Android Applications Built for the World's Largest Mobile Ecosystem.",
    heroDescription:
      "Reach millions of users across smartphones and tablets with custom Android applications engineered using modern Kotlin, React Native, and Flutter architectures.",
    overviewTitle: "Engineered for Device Diversity, Speed, and Everyday Reliability.",
    featureSubtitle:
      "Every engineering capability required to launch, scale, and maintain a world-class Android application.",
    overviewParagraphs: [
      "Android powers the vast majority of smartphones in India and worldwide. Building a standout Android application requires careful attention to screen size adaptability, memory efficiency, battery conservation, and intuitive Material Design ergonomics.",
      "Blevon develops custom Android applications that feel fast, responsive, and reliable across entry-level handsets and flagship devices alike—complete with secure API synchronization, push notifications, biometric login, and Google Play Store deployment assistance.",
    ],
    features: [
      {
        title: "Native & Cross-Platform Engineering",
        desc: "Built with React Native, Flutter, or native Kotlin to deliver 60fps animations, instant touch response, and rock-solid stability.",
      },
      {
        title: "Adaptive Multi-Device UI",
        desc: "Responsive mobile layouts that scale cleanly across diverse Android screen ratios, pixel densities, and tablets.",
      },
      {
        title: "Offline Caching & Sync",
        desc: "Intelligent local storage and background synchronization so users can browse and interact even on unstable mobile networks.",
      },
      {
        title: "Push Notifications & Engagement",
        desc: "Firebase Cloud Messaging (FCM) integration for real-time order updates, reminders, and targeted user alerts.",
      },
      {
        title: "Hardware & OS Integrations",
        desc: "Seamless integration with device camera, GPS location services, biometric fingerprint unlock, and local file systems.",
      },
      {
        title: "Google Play Store Deployment",
        desc: "End-to-end assistance with Play Console setup, signed AAB bundle generation, store listing assets, and compliance review.",
      },
    ],
    benefits: [
      {
        metric: "Free Website",
        title: "Get Your Business Website FREE",
        desc: "Build your Android & iOS mobile app with Blevon (valid until Nov 20, 2026) and receive a complimentary business website.",
      },
      {
        metric: "60fps Fluidity",
        title: "Native-Grade User Experience",
        desc: "Smooth navigation transitions and ergonomic gesture patterns keep users engaged daily.",
      },
      {
        metric: "Secure APIs",
        title: "Encrypted Data Architecture",
        desc: "JWT token authentication, HTTPS pinning, and secure cloud backend communication.",
      },
      {
        metric: "Play Store Ready",
        title: "Guided Store Launch",
        desc: "We handle technical packaging and submission workflows to get your app live on Google Play.",
      },
    ],
    deliverables: [
      "Custom Android UI/UX Design & Interactive Prototype",
      "Production Android Application Codebase",
      "Backend API & Cloud Database Integration",
      "Push Notification & Authentication Setup",
      "Device Testing & Performance Profiling",
      "Signed Google Play Release Bundle (AAB) & Submission Support",
    ],
    process: [
      {
        step: "01",
        title: "Product Scoping",
        desc: "We define user roles, core app features, API endpoints, and target Android device specifications.",
      },
      {
        step: "02",
        title: "Mobile UI/UX Design",
        desc: "We design intuitive mobile screens, navigation bars, and micro-interactions optimized for one-handed use.",
      },
      {
        step: "03",
        title: "App & Backend Engineering",
        desc: "We develop the Android application, state management, offline storage, and cloud APIs.",
      },
      {
        step: "04",
        title: "Device QA & Beta Testing",
        desc: "We test across multiple Android versions and screen dimensions, running closed beta tracks.",
      },
      {
        step: "05",
        title: "Google Play Launch",
        desc: "We assist with Play Store submission, privacy policy compliance, and production rollout.",
      },
    ],
    faqs: [
      {
        q: "If I build an Android & iOS app, do I really get a website for free?",
        a: "Yes! Valid until November 20, 2026, when you build your Android and iOS mobile application with Blevon, we design and develop a responsive business website for your company completely FREE.",
      },
      {
        q: "Do you build native Android apps or cross-platform apps?",
        a: "We offer both! Depending on your budget and roadmap, we use React Native or Flutter to deliver Android and iOS apps simultaneously from a unified codebase, or native Kotlin for Android-specific hardware requirements.",
      },
      {
        q: "How do we publish the app to the Google Play Store?",
        a: "You register a Google Play Console developer account ($25 one-time fee paid to Google), and our engineering team handles the build signing, store listing configuration, and submission process with you.",
      },
      {
        q: "Can you connect the Android app to my existing website or database?",
        a: "Yes. We build clean REST or GraphQL APIs so your Android app and website share the exact same live database, users, and content.",
      },
    ],
  },
  {
    id: "ios-app-development",
    slug: "ios-app-development",
    num: "05",
    shortTitle: "iOS Application Development",
    pageTitle: "iOS App Development",
    category: "Apple Ecosystem",
    iconName: "Cpu",
    accentTone: "sky",
    visualTheme: "ios-app",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=85",
    shortDescription:
      "Refined iOS applications crafted for iPhone and iPad with Cupertino-grade polish, Face ID security, and App Store compliance.",
    heroEyebrow: "iOS APP DEVELOPMENT",
    heroHeadline: "Refined iOS Applications Crafted for iPhone and iPad Users.",
    heroDescription:
      "Deliver an exceptional mobile experience on Apple devices. We design and engineer high-performance iOS applications that combine Human Interface precision, smooth animations, and rock-solid security.",
    overviewTitle: "Precision Engineering for the Apple Ecosystem.",
    featureSubtitle:
      "Every engineering capability required to launch, scale, and maintain a world-class iOS application.",
    overviewParagraphs: [
      "iOS users expect a high standard of visual polish, tactile responsiveness, and privacy protection. An application that feels sluggish or ignores Apple's Human Interface Guidelines quickly loses user trust—and risks rejection during App Store review.",
      "At Blevon, we craft iOS applications using modern cross-platform frameworks (React Native & Flutter) as well as native Swift architectures. Every screen is engineered for fluid gestures, Face ID and Apple Sign-In security, and seamless approval on the Apple App Store.",
    ],
    features: [
      {
        title: "Human Interface Design Polish",
        desc: "Crisp typography, smooth spring animations, native tab bars, and gesture navigation tailored for iPhone and iPad.",
      },
      {
        title: "Face ID & Apple Sign-In Security",
        desc: "Biometric authentication, Keychain encrypted storage, and privacy-first login flows required by Apple guidelines.",
      },
      {
        title: "High-Efficiency Performance",
        desc: "Optimized rendering pipelines engineered for ProMotion 120Hz displays and minimal battery consumption.",
      },
      {
        title: "APNs Push Notifications",
        desc: "Apple Push Notification service integration for instant transactional alerts, rich media notifications, and badges.",
      },
      {
        title: "Cloud Backend Synchronization",
        desc: "Real-time data sync between your iOS app, Android app, and web dashboard via secure Node.js/PostgreSQL/MongoDB APIs.",
      },
      {
        title: "TestFlight & App Store Submission",
        desc: "Complete support for Apple Developer provisioning profiles, TestFlight beta distribution, and App Store review approval.",
      },
    ],
    benefits: [
      {
        metric: "App Store Ready",
        title: "Built for Apple Review Standards",
        desc: "We architect privacy disclosures, account deletion flows, and UI guidelines to pass App Store review smoothly.",
      },
      {
        metric: "Free Website",
        title: "Complimentary Business Website",
        desc: "Bundle your iOS & Android app development (valid until Nov 20, 2026) and receive your responsive business website FREE.",
      },
      {
        metric: "Unified Stack",
        title: "Seamless iOS + Android Parity",
        desc: "Launch on both iPhone and Android simultaneously with consistent branding and shared backend infrastructure.",
      },
      {
        metric: "Enterprise Grade",
        title: "End-to-End Encryption",
        desc: "Protect user data with secure token storage, TLS 1.3 networking, and role-based API permissions.",
      },
    ],
    deliverables: [
      "Custom iOS UI/UX Design System & Interactive Flows",
      "Production iOS Application (iPhone / iPad)",
      "Secure Cloud API & Authentication Integration",
      "TestFlight Beta Setup for Stakeholder Review",
      "App Store Connect Configuration & Metadata Prep",
      "Post-Launch Warranty & Technical Support",
    ],
    process: [
      {
        step: "01",
        title: "Concept & HIG Planning",
        desc: "We align your product vision with Apple's Human Interface Guidelines and App Store policies.",
      },
      {
        step: "02",
        title: "High-Fidelity iOS UI/UX",
        desc: "We craft pixel-accurate iPhone screens, dark/light tokens, and interactive prototypes.",
      },
      {
        step: "03",
        title: "iOS & API Development",
        desc: "We engineer the application frontend, native device bridges, and secure backend endpoints.",
      },
      {
        step: "04",
        title: "TestFlight Beta QA",
        desc: "We deploy beta builds via Apple TestFlight so you can test the real app on your own iPhone.",
      },
      {
        step: "05",
        title: "App Store Release",
        desc: "We prepare certificates, screenshots, and privacy nutrition labels to publish on the App Store.",
      },
    ],
    faqs: [
      {
        q: "Can you build both iOS and Android apps together?",
        a: "Yes! Most of our clients choose our dual iOS + Android development path using React Native or Flutter, which delivers native performance on both platforms while reducing cost and development time.",
      },
      {
        q: "What is required to publish an app on the Apple App Store?",
        a: "You will need an Apple Developer Program account ($99/year paid directly to Apple). Our team assists you with certificate generation, provisioning, TestFlight testing, and final App Store submission.",
      },
      {
        q: "How do I test the iOS app while you are building it?",
        a: "We distribute staging builds through Apple's official TestFlight platform, allowing you and your team to install and test the app directly on your iPhones before public launch.",
      },
      {
        q: "Is iOS app development included in the $1,999 Complete E-commerce Solution?",
        a: "Yes! Our $1,999 Complete E-commerce Solution (original $2,999) includes your E-commerce Website, an Android App, an iOS App, and a centralized Admin CMS.",
      },
    ],
  },
  {
    id: "ecommerce-mobile-app-development",
    slug: "ecommerce-mobile-app-development",
    num: "06",
    shortTitle: "E-commerce Mobile Applications",
    pageTitle: "E-commerce Mobile App Development",
    category: "Mobile Commerce",
    iconName: "ShoppingCart",
    accentTone: "violet",
    visualTheme: "ecommerce-app",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1000&q=85",
    shortDescription:
      "Dedicated Android and iOS shopping apps with one-tap checkout, push notifications, live order tracking, and synced inventory.",
    heroEyebrow: "E-COMMERCE MOBILE APP DEVELOPMENT",
    heroHeadline: "Put Your Online Store Directly in Your Customers' Pockets.",
    heroDescription:
      "Drive repeat purchases and customer loyalty with custom Android and iOS e-commerce applications—featuring instant product browsing, push notifications, saved carts, and seamless mobile payments.",
    overviewTitle: "Turn One-Time Buyers Into Loyal Mobile App Customers.",
    featureSubtitle:
      "Every engineering capability required to launch, scale, and maintain a world-class e-commerce mobile application.",
    overviewParagraphs: [
      "Mobile applications convert at significantly higher rates than mobile browsers because they eliminate login friction, remember user preferences, and keep your brand one tap away on the customer's home screen.",
      "Blevon builds complete e-commerce mobile applications for Android and iOS that synchronize in real time with your web storefront and central admin dashboard. When you update a product price or stock count once, it updates everywhere instantly.",
    ],
    features: [
      {
        title: "Real-Time Web & App Sync",
        desc: "Unified database architecture ensures products, inventory, customer accounts, and carts stay synchronized across web, iOS, and Android.",
      },
      {
        title: "One-Tap Mobile Checkout",
        desc: "Native integration with UPI apps, Apple/Google mobile wallets, saved cards, and saved delivery addresses for rapid checkout.",
      },
      {
        title: "Promotional Push Notifications",
        desc: "Send instant alerts for flash sales, back-in-stock items, abandoned carts, and live delivery status updates.",
      },
      {
        title: "Interactive Product Discovery",
        desc: "Smooth swipeable galleries, category chips, barcode/keyword search, wishlist collections, and customer review feeds.",
      },
      {
        title: "Live Order Status Tracking",
        desc: "Visual order timeline from payment confirmation and packing to dispatch and doorstep delivery.",
      },
      {
        title: "Unified Merchant Admin Panel",
        desc: "Manage your website, Android app, and iOS app from a single centralized inventory and order management dashboard.",
      },
    ],
    benefits: [
      {
        metric: "3 Platforms",
        title: "Web + Android + iOS Sync",
        desc: "Manage one product catalog that powers your website, Android app, and iOS app simultaneously.",
      },
      {
        metric: "$1,999 Suite",
        title: "Save $1,000 (33% OFF)",
        desc: "Our $1,999 Complete E-commerce Solution (original $2,999) includes both Android & iOS apps + Website + Admin CMS.",
      },
      {
        metric: "Direct Reach",
        title: "Zero-Cost Push Marketing",
        desc: "Re-engage past buyers directly via push notifications without paying for recurring ad clicks.",
      },
      {
        metric: "Fast UX",
        title: "Native Shopping Speed",
        desc: "Instant screen transitions and cached product catalogs make browsing effortless.",
      },
    ],
    deliverables: [
      "Native/Cross-Platform Android Shopping App",
      "Native/Cross-Platform iOS Shopping App",
      "Synchronized E-commerce Web Storefront (Optional/Bundled)",
      "Centralized Product, Inventory & Order Admin Panel",
      "Mobile Payment Gateway & Push Notification Setup",
      "Google Play & Apple App Store Deployment Assistance",
    ],
    process: [
      {
        step: "01",
        title: "Commerce & Catalog Architecture",
        desc: "We design the unified database schema connecting your products, users, orders, and payment gateways.",
      },
      {
        step: "02",
        title: "Mobile Shopping UI/UX",
        desc: "We craft thumb-friendly product feeds, cart drawers, and checkout screens for iOS and Android.",
      },
      {
        step: "03",
        title: "Multi-Platform Development",
        desc: "We engineer the mobile apps, synchronized web store, and merchant administration dashboard.",
      },
      {
        step: "04",
        title: "Payment & Sync Verification",
        desc: "We test real-time inventory deductions, mobile payment callbacks, and push notification delivery.",
      },
      {
        step: "05",
        title: "App Store & Web Launch",
        desc: "We assist with deploying your apps to Google Play and the Apple App Store alongside your web store.",
      },
    ],
    faqs: [
      {
        q: "Do I have to manage products separately for the website and mobile apps?",
        a: "No! We engineer a single centralized admin dashboard. Any product, price, or order update you make reflects immediately on your website, Android app, and iOS app.",
      },
      {
        q: "How does the $1,999 Complete E-commerce Solution work?",
        a: "For $1,999 (33% off our $2,999 reference price), we build your complete E-commerce Website + Android App + iOS App + centralized Admin CMS with product, inventory, order, and customer management plus payment gateway integration.",
      },
      {
        q: "Can customers pay using UPI and cards inside the mobile app?",
        a: "Yes. We integrate mobile-ready payment SDKs (such as Razorpay or Stripe) that support UPI intent flows (GPay, PhonePe, Paytm), credit/debit cards, Net Banking, and wallets.",
      },
      {
        q: "What additional costs should I budget for outside the $1,999 package?",
        a: "Third-party infrastructure costs—including domain name, cloud server hosting, payment gateway transaction fees, and Apple ($99/yr) / Google Play ($25) developer account fees—are paid directly to those providers.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    num: "07",
    shortTitle: "UI/UX Design",
    pageTitle: "UI/UX Design Services",
    category: "Product & Interface Design",
    iconName: "Layers",
    accentTone: "violet",
    visualTheme: "custom-web",
    image: serviceUiUx3D,
    shortDescription:
      "User-centered product interfaces, wireframes, design systems, and interactive prototypes crafted to turn complex workflows into intuitive digital experiences.",
    heroEyebrow: "UI/UX DESIGN SERVICES",
    heroHeadline: "Intuitive Interfaces & Design Systems Built Around Human Behavior.",
    heroDescription:
      "We research, wireframe, prototype, and craft modern user interfaces for web and mobile products—combining visual sophistication, design systems, and conversion-driven user flows.",
    overviewTitle: "Design That Bridges Brand Aesthetics and Effortless Usability.",
    featureSubtitle:
      "Every design artifact we deliver is structured for user clarity, accessibility, and seamless developer handoff.",
    overviewParagraphs: [
      "Great software starts long before the first line of code is written. When users struggle to navigate a website or mobile app, even the most powerful backend engineering fails to convert or retain customers.",
      "At Blevon, our UI/UX design studio transforms complex business requirements into clear user journeys, high-fidelity Figma interfaces, reusable component libraries, and interactive prototypes—giving you complete visual confidence before development begins.",
    ],
    features: [
      {
        title: "User Research & Journey Mapping",
        desc: "Information architecture, user personas, and conversion flow diagrams that eliminate friction across every touchpoint.",
      },
      {
        title: "Wireframing & Rapid Prototyping",
        desc: "Low-to-high-fidelity interactive Figma prototypes that let you click through and test user flows before engineering.",
      },
      {
        title: "Scalable Design Systems",
        desc: "Tokenized color palettes, typography scales, grid systems, and reusable UI component libraries for consistent brand growth.",
      },
      {
        title: "Web & Mobile Interface Design",
        desc: "Pixel-accurate responsive web layouts alongside iOS Human Interface and Android Material Design mobile screens.",
      },
      {
        title: "Accessibility & Ergonomics",
        desc: "WCAG-compliant contrast ratios, touch-friendly tap targets, clear visual hierarchy, and intuitive micro-interactions.",
      },
      {
        title: "Developer-Ready Handoff",
        desc: "Organized Figma files with auto-layout specs, CSS/Tailwind tokens, exported SVG assets, and interactive state documentation.",
      },
    ],
    benefits: [
      {
        metric: "Higher Conversion",
        title: "Frictionless User Flows",
        desc: "Clear navigation and intentional call-to-action placement guide visitors naturally from discovery to action.",
      },
      {
        metric: "Faster Build",
        title: "Zero Engineering Guesswork",
        desc: "Validated prototypes and component libraries reduce development rework and accelerate time-to-market.",
      },
      {
        metric: "Unified Brand",
        title: "Cross-Platform Consistency",
        desc: "Ensure your website, Android app, and iOS app share a cohesive, recognizable visual identity.",
      },
      {
        metric: "100% Ownership",
        title: "Full Figma Source Files",
        desc: "Receive complete ownership of all master design files, component libraries, and exported visual assets.",
      },
    ],
    deliverables: [
      "Information Architecture & User Flow Diagrams",
      "Low-Fidelity Structural Wireframes",
      "High-Fidelity Web & Mobile UI Screens in Figma",
      "Interactive Clickable Prototype for Stakeholder Review",
      "Custom Design System (Colors, Typography, Components)",
      "Developer Handoff Specifications & Asset Exports",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & UX Audit",
        desc: "We analyze your target users, business goals, competitor interfaces, and core product workflows.",
      },
      {
        step: "02",
        title: "User Flows & Wireframes",
        desc: "We map out screen hierarchies, navigation paths, and structural blueprints for every key user journey.",
      },
      {
        step: "03",
        title: "Visual Direction & Tokens",
        desc: "We establish your color palette, typography scale, elevation shadows, and core visual language.",
      },
      {
        step: "04",
        title: "High-Fidelity UI & Prototype",
        desc: "We craft pixel-accurate responsive screens and connect them into a clickable interactive prototype.",
      },
      {
        step: "05",
        title: "Review & Engineering Handoff",
        desc: "We refine the designs based on your feedback and prepare production-ready specs for development.",
      },
    ],
    faqs: [
      {
        q: "Is UI/UX design included when Blevon builds my website or mobile app?",
        a: "Yes! Every custom website, mobile app, and e-commerce package we engineer includes custom UI/UX design as part of our end-to-end delivery process. We also offer standalone UI/UX design engagements if you only need design systems and prototypes.",
      },
      {
        q: "Which design tools do you use?",
        a: "We use Figma as our primary collaborative interface design, prototyping, and design-system platform, allowing you to view progress and leave comments in real time.",
      },
      {
        q: "Can you redesign our existing app or website to make it more modern?",
        a: "Absolutely. We conduct a comprehensive UX audit of your current product, identify usability bottlenecks, and craft a modern, high-converting interface refresh.",
      },
      {
        q: "Do we get the source Figma files upon completion?",
        a: "Yes. You receive 100% ownership of the organized master Figma files, component libraries, style guides, and exported assets.",
      },
    ],
  },
];

export const HOMEPAGE_SERVICES = SERVICES_LIST;

export function getServiceBySlug(slug) {
  return SERVICES_LIST.find(
    (s) => s.slug === slug || s.aliasSlug === slug || s.id === slug
  );
}

export default SERVICES_LIST;
