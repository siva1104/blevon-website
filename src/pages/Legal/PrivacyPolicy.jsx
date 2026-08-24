"use client";

import React from "react";
import { LegalLayout } from "./components/LegalLayout";

const CONTACT_EMAIL = "contact@blevon.in";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      seoTitle="Privacy Policy | Blevon"
      seoDescription="Read Blevon's Privacy Policy to understand how we collect, use, protect, and manage information when you use our website and services."
      badge="PRIVACY & DATA PROTECTION"
      description="This Privacy Policy explains how Blevon collects, uses, protects, and manages information when you browse our website or engage our custom design and development services."
      lastUpdated="[LAST UPDATED DATE]"
    >
      {/* 1. Introduction */}
      <section id="introduction" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          1. Introduction
        </h2>
        <p className="mb-3">
          Welcome to <strong>Blevon</strong> (&ldquo;Blevon&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), based in <strong>Bangalore, India</strong>. We provide bespoke digital services including Website Design &amp; Development, Web Applications, Mobile Application Development, 3D and Interactive Web Experiences, UI/UX Design, Custom Software Development, and Website Maintenance and Support.
        </p>
        <p>
          We are committed to safeguarding your privacy and ensuring transparent information practices. This Privacy Policy describes how we handle personal and technical information collected through our website (<code>blevon.in</code>), direct electronic communications, and client development engagements.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 2. Information We Collect */}
      <section id="information-we-collect" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          2. Information We Collect
        </h2>
        <p className="mb-3">
          We collect only information necessary to communicate with prospective clients, draft accurate project proposals, execute custom software contracts, and deliver digital engineering services.
        </p>
        <div className="rounded-xl border border-blue-100 bg-[#EAF1FF]/40 p-4 text-xs text-[#0E2A6D]">
          <strong>Notice Regarding Forms:</strong> Blevon does not use automated web contact forms, enquiry forms, lead capture forms, or appointment booking calendar widgets on this website. All communications with our team are initiated voluntarily by you via direct email, phone call, or messaging channels.
        </div>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 3. Information You Provide */}
      <section id="information-you-provide" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          3. Information You Provide Voluntarily
        </h2>
        <p className="mb-3">
          When you write to us at <code>{CONTACT_EMAIL}</code> or contact our team directly, you may choose to provide:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li><strong>Identity &amp; Contact Details:</strong> Your full name, professional title, business email address, and phone number.</li>
          <li><strong>Company &amp; Organization Information:</strong> Business name, industry, website URL, and office location.</li>
          <li><strong>Project Specifications:</strong> Technical briefs, wireframes, functional requirements, design assets, and scheduling preferences.</li>
          <li><strong>Commercial &amp; Billing Data:</strong> Legal business entity name, billing address, tax identification numbers, and contact details for accounting personnel.</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 4. Information Collected Automatically */}
      <section id="information-collected-automatically" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          4. Information Collected Automatically
        </h2>
        <p className="mb-3">
          When you browse our website, our hosting and content delivery network (CDN) servers may automatically log standard technical data transmitted by your browser:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li>Internet Protocol (IP) address and approximate geographic location (country or region).</li>
          <li>Browser type, version, language settings, and operating system.</li>
          <li>Device characteristics, screen resolution, and hardware performance tier (for 3D rendering optimization).</li>
          <li>Access timestamps, referring web pages, navigation paths, and page response latency.</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 5. How We Use Your Information */}
      <section id="how-we-use-information" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          5. How We Use Your Information
        </h2>
        <p className="mb-3">We use the information we collect strictly for legitimate commercial and engineering purposes:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li>To respond to your inquiries, answer questions, and schedule technical discovery discussions.</li>
          <li>To evaluate project scopes, prepare accurate fee estimates, proposals, and Statements of Work.</li>
          <li>To design, engineer, test, optimize, and deploy custom websites, web applications, and mobile apps.</li>
          <li>To administer ongoing maintenance agreements and provide technical troubleshooting support.</li>
          <li>To process commercial invoices, manage accounting records, and facilitate secure payments.</li>
          <li>To maintain website reliability, monitor 3D WebGL performance, and protect our infrastructure from malicious traffic.</li>
          <li>To comply with statutory legal, tax, and accounting obligations in <strong>India</strong>.</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 6. Cookies & Tracking */}
      <section id="cookies-and-tracking" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          6. Cookies and Similar Technologies
        </h2>
        <p className="mb-3">
          Our website uses minimal, privacy-focused cookies and local storage tokens strictly necessary for site functionality, performance caching, and graphical state preferences (such as low-power mode for 3D interactive canvases).
        </p>
        <p>
          You can instruct your browser to decline cookies or alert you when cookies are sent. Since our website does not rely on invasive behavioral profiling cookies, declining cookies will not impair your ability to review our portfolio or reach out to us.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 7. Website Analytics */}
      <section id="analytics" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          7. Website Analytics
        </h2>
        <p className="mb-3">
          We may utilize privacy-conscious web analytics tools to review aggregated, non-personally identifiable traffic metrics. These metrics help us evaluate page render speeds, asset load times, and general geographic audience reach.
        </p>
        <p>
          Analytics data is processed in aggregate and is never combined with direct client communication logs to construct personalized behavioral profiles.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 8. How We Share Information */}
      <section id="how-we-share-information" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          8. How We Share Information
        </h2>
        <p className="mb-3">
          <strong>Blevon does not sell, rent, lease, or monetize personal information under any circumstances.</strong>
        </p>
        <p className="mb-2">Information may be shared only with vetted third parties under strict confidentiality and operational constraints:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li><strong>Service Providers:</strong> Trusted third-party vendors who provide cloud hosting, code repository hosting, CDN acceleration, and email delivery services solely to enable our agency operations.</li>
          <li><strong>Legal &amp; Regulatory Mandates:</strong> When required by enforceable court orders, subpoenas, statutory law, or governmental regulations in <strong>India</strong>.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, corporate restructuring, or asset sale, subject to equivalent confidentiality commitments.</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 9. Third-Party Services */}
      <section id="third-party-services" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          9. Third-Party Services &amp; APIs
        </h2>
        <p className="mb-3">
          During custom software development projects, we may configure third-party software APIs, cloud database instances, headless CMS platforms, authentication services, or domain management tools per the client's architecture.
        </p>
        <p>
          Each third-party platform operates under its own privacy policy. Blevon is not responsible for the data collection and security practices of external third-party software providers chosen by or provisioned for the client.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 10. Payment Information */}
      <section id="payment-information" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          10. Payment Information
        </h2>
        <p className="mb-3">
          Blevon may facilitate digital payments (including advance deposits, milestone settlements, and maintenance retainers) through authorized third-party online payment gateways and commercial bank transfers.
        </p>
        <div className="rounded-xl border border-blue-100 bg-[#EAF1FF]/40 p-4 text-xs text-[#0E2A6D] mb-3">
          <strong>Security Notice:</strong> Blevon does not directly collect, process, or store credit card numbers, debit card security codes (CVV), NetBanking passwords, or sensitive payment credentials on our servers.
        </div>
        <p>
          All electronic payment transactions are encrypted and processed directly by our integrated payment gateway partner in compliance with applicable Payment Card Industry Data Security Standards (PCI-DSS) and banking regulations. Your payment data is subject to the independent privacy policy and terms of the payment processor.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 11. Data Security */}
      <section id="data-security" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          11. Data Security
        </h2>
        <p className="mb-3">
          We implement rigorous technical, organizational, and physical security measures to protect your information against unauthorized access, destruction, loss, or disclosure. These measures include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467] mb-3">
          <li>End-to-end SSL/TLS encryption for all website communications and API endpoints.</li>
          <li>Role-based access controls and multi-factor authentication (MFA) on all internal development repositories.</li>
          <li>Isolated staging and production environments for custom software engineering.</li>
        </ul>
        <p>
          However, no transmission of data over the Internet or electronic storage mechanism can be guaranteed to be completely secure. We urge you to exercise caution when transmitting sensitive credentials.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 12. Data Retention */}
      <section id="data-retention" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          12. Data Retention
        </h2>
        <p>
          We retain client correspondence, technical specifications, and project deliverables only for as long as necessary to fulfill project requirements, provide ongoing warranty support, resolve disputes, enforce agreements, and satisfy tax, legal, and regulatory compliance standards in <strong>India</strong>.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 13. Your Privacy Rights */}
      <section id="your-privacy-rights" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          13. Your Privacy Rights
        </h2>
        <p className="mb-3">
          Depending on your jurisdiction, you may hold specific legal rights concerning your personal information, including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467] mb-3">
          <li><strong>Right of Access:</strong> The right to request copies of the personal information we maintain about you.</li>
          <li><strong>Right to Rectification:</strong> The right to request correction of inaccurate or incomplete data.</li>
          <li><strong>Right to Erasure:</strong> The right to request deletion of your personal data, subject to statutory record-keeping duties.</li>
          <li><strong>Right to Restrict or Object:</strong> The right to limit or object to specific data processing activities.</li>
        </ul>
        <p>
          To exercise any of these rights, please write to us at <code>{CONTACT_EMAIL}</code>. We will verify and process your request within the statutory timeframe.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 14. Children's Privacy */}
      <section id="childrens-privacy" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          14. Children's Privacy
        </h2>
        <p>
          Our website and commercial digital agency services are intended exclusively for businesses, professionals, and adult individuals. We do not knowingly solicit or collect personal information from individuals under the age of 18. If we learn that personal data of a minor has been collected, we will take immediate steps to delete such data from our records.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 15. Third-Party Links */}
      <section id="third-party-links" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          15. Third-Party Links
        </h2>
        <p>
          Our website and portfolio case studies may contain links to external third-party websites, client live deployments, or partner resources. We have no control over the content, security, or privacy policies of third-party websites and assume no responsibility for their practices.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 16. International Data Transfers */}
      <section id="international-transfers" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          16. International Data Transfers
        </h2>
        <p>
          If you access our website or engage our services from outside <strong>India</strong>, your information may be transferred to, stored, and processed in cloud data centers located in various international jurisdictions. By communicating with us, you acknowledge and consent to such data transfers in accordance with this Privacy Policy.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 17. Policy Changes */}
      <section id="changes-to-policy" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          17. Changes to This Privacy Policy
        </h2>
        <p>
          We reserve the right to revise this Privacy Policy periodically to reflect updates in our engineering practices, technology infrastructure, or legal obligations. Any updates will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage you to review this policy periodically.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 18. Contact Information */}
      <section id="contact-us" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          18. Contact Us
        </h2>
        <p className="mb-4">
          If you have questions about billing, invoices, payments, cancellations, or refunds, please contact Blevon by email.
        </p>
        <div className="rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-5 space-y-1.5 text-xs sm:text-sm text-[#101828]">
          <p><strong>Legal Entity:</strong> Blevon</p>
          <p><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#2563EB] hover:underline font-medium">{CONTACT_EMAIL}</a></p>
          <p><strong>Address:</strong> Mahadevapura, Bangalore, India</p>
          <p><strong>Country:</strong> India</p>
        </div>
        <p className="mt-4 text-[#475467]">
          For any questions regarding our services or these policies, you may contact us at the same email address.
        </p>
      </section>
    </LegalLayout>
  );
}
