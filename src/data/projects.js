import kavuturuLogo from "@/assets/images/clients/kavuturu-logo.png";
import kavuturuDesktop from "@/assets/images/clients/kavuturu-desktop.png";
import kavuturuMobile from "@/assets/images/clients/kavuturu-mobile.png";
import kavuturuCms from "@/assets/images/clients/kavuturu-cms-dashboard.png";
import kavuturuBefore from "@/assets/images/clients/kavuturu-before.png";

export const PROJECTS_DATA = [
  {
    id: "kavuturu-dental-clinic",
    num: "01",
    name: "Kavuturu Dental Clinic",
    category: "Custom Website & Dynamic CMS",
    serviceTags: ["website-development", "business-website-development", "custom-web-application-development"],
    timeline: "June 2026 – July 2026",
    status: "Verified Live Project",
    isPlaceholder: false,
    description:
      "A comprehensive website redesign, technical SEO overhaul, and custom administrative CMS engineered for a modern dental clinic—enabling independent management of doctors, treatments, blogs, gallery, and patient inquiries.",
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT Auth",
      "Cloudinary",
      "Vercel",
    ],
    logo: kavuturuLogo,
    desktopImage: kavuturuDesktop,
    mobileImage: kavuturuMobile,
    cmsImage: kavuturuCms,
    beforeImage: kavuturuBefore,
    link: "/case-study",
    liveUrl: "https://www.kavuturudentalclinic.com",
    linkText: "View Case Study",
    highlights: [
      "Custom Admin CMS for non-technical staff",
      "Structured schema & technical SEO architecture",
      "Sub-second load speed & mobile-first patient UX",
    ],
  },
];

export const PLACEHOLDER_PROJECTS = [
  {
    id: "placeholder-ecommerce-suite",
    num: "02",
    name: "Your E-commerce Platform Here",
    category: "E-commerce Web + iOS & Android Apps",
    serviceTags: ["ecommerce-website-development", "ecommerce-mobile-app-development", "packages"],
    status: "Reserved Portfolio Slot — Placeholder",
    isPlaceholder: true,
    description:
      "Reserved showcase slot for our upcoming multi-platform e-commerce deployment (Web Storefront + Native Android & iOS Applications). Claim one of our two $800 introductory e-commerce packages to feature your brand here.",
    technologies: [
      "Next.js / React",
      "React Native / Flutter",
      "Node.js API",
      "Payment Gateway",
      "Order Management",
    ],
    link: "/contact?offer=ecommerce-800",
    linkText: "Secure This Project Slot",
    visualType: "ecommerce",
  },
  {
    id: "placeholder-mobile-ecosystem",
    num: "03",
    name: "Your Mobile App & Business Website",
    category: "iOS & Android App + Complimentary Web",
    serviceTags: ["android-app-development", "ios-app-development"],
    status: "Reserved Portfolio Slot — Placeholder",
    isPlaceholder: true,
    description:
      "Reserved showcase slot for upcoming cross-platform and native mobile applications engineered by Blevon. Build your Android & iOS mobile app with us before November 20, 2026 and receive your business website free.",
    technologies: [
      "iOS Native / Swift",
      "Android / Kotlin",
      "Flutter / React Native",
      "Cloud Sync",
      "Responsive Web",
    ],
    link: "/contact?offer=free-website-bundle",
    linkText: "Start Your App Project",
    visualType: "mobile",
  },
];

export default PROJECTS_DATA;
