"use client";

import React from "react";
import { LegalLayout } from "./components/LegalLayout";

const CONTACT_EMAIL = "contact@blevon.in";

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      seoTitle="Terms & Conditions | Blevon"
      seoDescription="Review the Terms & Conditions governing Blevon's website, digital services, projects, payments, intellectual property, and client relationships."
      badge="LEGAL AGREEMENT"
      description="These Terms & Conditions define the contractual framework governing your use of Blevon's website, bespoke web development, mobile applications, UI/UX design, and digital engineering services."
      lastUpdated="[LAST UPDATED DATE]"
    >
      {/* 1. Introduction & Acceptance */}
      <section id="introduction" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          1. Introduction &amp; Acceptance of Terms
        </h2>
        <p className="mb-3">
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you or the business entity you represent (&ldquo;Client&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) and <strong>Blevon</strong> (&ldquo;Blevon&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered in <strong>Bangalore, India</strong>.
        </p>
        <p className="mb-3">
          By accessing our website (<code>blevon.in</code>), commissioning custom design or development services, approving a project proposal, paying an invoice deposit, or signing a Statement of Work, you agree to be bound by these Terms.
        </p>
        <p>
          Individual project proposals, written Statements of Work (SOW), quotations, and commercial invoices may contain project-specific terms that supplement these Terms. In the event of a direct conflict between these general Terms and an executed project-specific SOW, the terms of the executed SOW shall prevail for that specific engagement.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 2. About Blevon */}
      <section id="about-blevon" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          2. About Blevon
        </h2>
        <p>
          Blevon is a premium digital design and software engineering agency. We specialize in crafting high-performance digital experiences, including custom web development, web applications, mobile apps, interactive 3D web canvases, and enterprise UI/UX interfaces.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 3. Eligibility */}
      <section id="eligibility" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          3. Eligibility
        </h2>
        <p>
          By engaging Blevon, you represent and warrant that you are at least 18 years of age and possess the legal capacity and authority to enter into binding agreements on behalf of yourself or the business organization you represent.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 4. Our Services */}
      <section id="our-services" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          4. Our Services
        </h2>
        <p className="mb-3">Blevon provides professional design and engineering services across core disciplines:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3.5">
            <h3 className="text-xs font-bold text-[#0E2A6D]">Website Design &amp; Development</h3>
            <p className="mt-1 text-[11px] text-[#667085]">Custom frontend architectures, responsive design systems, headless CMS, and technical SEO.</p>
          </div>
          <div className="rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3.5">
            <h3 className="text-xs font-bold text-[#0E2A6D]">Web Application Development</h3>
            <p className="mt-1 text-[11px] text-[#667085]">Full-stack web applications, dynamic dashboards, API backends, and cloud databases.</p>
          </div>
          <div className="rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3.5">
            <h3 className="text-xs font-bold text-[#0E2A6D]">Mobile Application Development</h3>
            <p className="mt-1 text-[11px] text-[#667085]">Native and cross-platform mobile apps for iOS and Android with custom UX.</p>
          </div>
          <div className="rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3.5">
            <h3 className="text-xs font-bold text-[#0E2A6D]">3D &amp; Interactive Web Experiences</h3>
            <p className="mt-1 text-[11px] text-[#667085]">WebGL, Three.js, shaders, interactive product demos, and visual micro-interactions.</p>
          </div>
          <div className="rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3.5">
            <h3 className="text-xs font-bold text-[#0E2A6D]">UI/UX Design Systems</h3>
            <p className="mt-1 text-[11px] text-[#667085]">Wireframing, interactive Figma prototypes, component libraries, and user research.</p>
          </div>
          <div className="rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] p-3.5">
            <h3 className="text-xs font-bold text-[#0E2A6D]">Website Maintenance &amp; Retainer Support</h3>
            <p className="mt-1 text-[11px] text-[#667085]">Proactive security monitoring, framework updates, dependency patches, and content assistance.</p>
          </div>
        </div>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 5. Proposals, Quotes & Scope */}
      <section id="project-proposals" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          5. Project Proposals, Quotes &amp; Scope Definition
        </h2>
        <p className="mb-3">
          Before initiating development, Blevon provides a detailed project proposal, estimate, or written Statement of Work (SOW). The SOW defines the agreed deliverables, technology stack, project milestones, fee structure, and review cycles.
        </p>
        <p className="mb-3">
          Quotations and proposals remain valid for thirty (30) calendar days from the date of issuance unless stated otherwise in writing.
        </p>
        <p>
          Any feature, integration, database schema, third-party connector, or deliverable not explicitly documented in the written SOW is deemed out-of-scope and will be addressed through our change request process.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 6. Client Responsibilities */}
      <section id="client-responsibilities" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          6. Client Responsibilities
        </h2>
        <p className="mb-3">To ensure milestone success and on-time delivery, the Client agrees to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li>Designate an authorized project representative with decision-making power to provide approvals.</li>
          <li>Supply necessary brand assets, vector logos, copy, high-resolution media, access credentials, and technical documentation in a timely manner.</li>
          <li>Provide consolidated, written feedback on milestone submissions within five (5) business days of deliverable receipt.</li>
          <li>Ensure that all client-supplied materials are properly licensed and do not infringe on third-party intellectual property.</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 7. Project Communication */}
      <section id="project-communication" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          7. Project Communication
        </h2>
        <p className="mb-3">
          Primary project communication, scope approvals, change requests, and formal notices are conducted via email at <code>{CONTACT_EMAIL}</code> or through designated project management channels agreed upon in writing.
        </p>
        <p>
          Written records of approvals, feedback, and scope amendments serve as the official record of project progress.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 8. Project Timelines */}
      <section id="timelines-and-delivery" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          8. Project Timelines &amp; Delivery
        </h2>
        <p className="mb-3">
          Project schedules and milestone delivery dates provided in proposals represent good-faith estimates based on current development capacity and prompt client collaboration.
        </p>
        <p>
          Blevon does not guarantee immutable delivery deadlines unless a specific contractual SLA with defined liquidated terms is executed in writing. Timelines may be extended due to delayed client assets, prolonged review cycles, out-of-scope requests, or third-party platform outages.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 9. Revisions & Change Requests */}
      <section id="revisions-and-changes" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          9. Revisions &amp; Change Requests
        </h2>
        <p className="mb-3">
          Each project milestone phase includes a specified number of review cycles (typically up to two rounds of consolidated revisions within the agreed scope).
        </p>
        <div className="rounded-xl border border-blue-100 bg-[#EAF1FF]/40 p-4 text-xs text-[#0E2A6D] mb-3">
          <strong>No Unlimited Revisions:</strong> Blevon does not offer unlimited revisions. Requests for complete redesigns of previously approved milestone layouts or major architectural shifts will be handled as formal Change Requests.
        </div>
        <p>
          Change Requests will be evaluated for impact on timeline and fees, and will require written client approval before implementation.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 10. Pricing & Payments */}
      <section id="pricing-and-payments" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          10. Pricing, Invoicing &amp; Payment Terms
        </h2>
        <p className="mb-3">
          Service fees are quoted on a fixed-project, milestone, or time-and-materials basis as specified in the project proposal.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467] mb-3">
          <li><strong>Advance Deposit:</strong> Custom development engagements require an advance deposit prior to project kickoff to reserve engineering resources.</li>
          <li><strong>Milestone Invoices:</strong> Subsequent milestone payments are invoiced upon deliverable submission or milestone sign-off as defined in the SOW.</li>
          <li><strong>Payment Terms:</strong> Invoices are payable within seven (7) calendar days of invoice date unless specified otherwise.</li>
        </ul>
        <p>
          Late payments may result in the temporary suspension of development work, staging environment access, or production deployment until accounts are brought current.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 11. Online Payments & Gateway */}
      <section id="online-payments" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          11. Online Payments &amp; Payment Gateway
        </h2>
        <p className="mb-3">
          Blevon supports digital invoice settlement via authorized payment gateway partners (supporting credit/debit cards, NetBanking, UPI, and international wire transfers).
        </p>
        <p className="mb-3">
          When settling invoices via an online payment gateway, you agree to comply with the terms and security policies of the payment processing provider. Blevon does not directly capture, store, or process raw payment credentials.
        </p>
        <p>
          Any transaction surcharges, currency exchange fees, or intermediary bank wire fees are the responsibility of the Client.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 12. Taxes */}
      <section id="taxes" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          12. Taxes
        </h2>
        <p>
          All quoted fees are exclusive of applicable goods and services taxes (GST), value-added taxes (VAT), or international withholding taxes unless expressly stated. The Client is responsible for paying all applicable taxes associated with the purchase of Blevon's services.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 13. Third-Party Services & Hosting */}
      <section id="third-party-services" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          13. Third-Party Services, Domains &amp; Hosting
        </h2>
        <p className="mb-3">
          Custom applications often rely on third-party infrastructure (e.g., AWS, Vercel, cloud databases, domain registrars, Apple App Store, Google Play Store, and external APIs).
        </p>
        <p className="mb-3">
          All direct subscription fees for hosting, domain names, third-party licenses, and developer accounts are billed directly to the Client.
        </p>
        <p>
          Blevon is not liable for service disruptions, API rate limits, price changes, downtime, or policy enforcements instituted by third-party infrastructure providers.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 14. Client Content */}
      <section id="client-content" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          14. Client-Provided Content &amp; Indemnity
        </h2>
        <p className="mb-3">
          The Client retains full ownership of all text copy, photography, trademarks, graphics, and data supplied to Blevon for inclusion in deliverables.
        </p>
        <p>
          The Client warrants that all supplied assets do not infringe any third-party intellectual property rights, trademarks, or privacy rights. The Client agrees to indemnify and hold harmless Blevon from any claims, damages, or legal costs arising from client-provided materials.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 15. Intellectual Property & Code */}
      <section id="intellectual-property" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          15. Intellectual Property &amp; Ownership of Deliverables
        </h2>
        <p className="mb-3">
          <strong>Transfer upon Full Payment:</strong> Upon receipt of 100% full and final payment for all project milestones and invoices, Blevon assigns and transfers to the Client all ownership rights, title, and copyright in the bespoke frontend designs, unique graphic layouts, and custom code authored specifically for the Client under the agreed SOW.
        </p>
        <p className="mb-3">
          <strong>Studio Frameworks &amp; Tools:</strong> Blevon retains proprietary ownership of pre-existing development frameworks, reusable component boilerplates, developer tools, algorithms, and open-source libraries used in building the project. Blevon grants the Client a perpetual, irrevocable, worldwide, non-exclusive license to use, modify, and operate such code as integrated into the final deliverable.
        </p>
        <p>
          <strong>Interim IP Rights:</strong> Prior to receipt of full and final payment, all preliminary designs, prototypes, codebase commits, and staging previews remain the sole intellectual property of Blevon.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 16. Third-Party Assets */}
      <section id="third-party-assets" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          16. Third-Party Assets &amp; Licenses
        </h2>
        <p>
          Third-party fonts, stock photography, icon sets, 3D model assets, and commercial plugins remain subject to the license agreements of their respective authors. Blevon will advise the Client on any third-party commercial license requirements necessary for production deployment.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 17. Portfolio Rights */}
      <section id="portfolio-rights" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          17. Portfolio &amp; Promotional Rights
        </h2>
        <p>
          Unless explicitly prohibited by a signed Non-Disclosure Agreement (NDA), Blevon reserves the right to display project screenshots, visual mockups, case studies, and a brief description of the work in our design portfolio, website, social channels, and marketing presentations.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 18. Confidentiality */}
      <section id="confidentiality" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          18. Confidentiality
        </h2>
        <p>
          Both Blevon and the Client agree to maintain strict confidentiality regarding all proprietary business data, trade secrets, software code, commercial pricing, and technical documentation shared during the engagement. Neither party will disclose confidential information to any third party without prior written consent.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 19. Maintenance & Support */}
      <section id="maintenance-support" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          19. Maintenance &amp; Post-Launch Warranty
        </h2>
        <p className="mb-3">
          Following final deployment to production, Blevon provides a standard fourteen (14) calendar day post-launch warranty period. During this period, Blevon will remediate reproducible bugs or functional defects that deviate from the agreed SOW at no additional cost.
        </p>
        <p>
          The post-launch warranty does not cover issues resulting from client modifications, third-party server updates, API deprecations, or new feature requests. Subsequent maintenance and support services are provided under dedicated maintenance retainer agreements.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 20. Warranties & Disclaimers */}
      <section id="warranties-and-disclaimers" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          20. Warranties &amp; Disclaimers
        </h2>
        <p className="mb-3">
          Blevon warrants that all services will be executed with professional diligence, skill, and care in accordance with prevailing software engineering practices.
        </p>
        <div className="rounded-xl border border-blue-100 bg-[#EAF1FF]/40 p-4 text-xs text-[#0E2A6D] mb-3">
          <strong>Important Disclaimers:</strong> Except as expressly provided herein, all services, software deliverables, and website contents are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express, statutory, or implied.
        </div>
        <p className="mb-3">
          Blevon makes no guarantees, representations, or warranties regarding:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li>Specific business results, sales revenues, commercial conversion rates, or customer engagement levels.</li>
          <li>Specific search engine keyword rankings (SEO), organic traffic volume, or app store ranking positions.</li>
          <li>Uninterrupted, error-free, or 100% bug-free operation of custom software across all future device/OS updates.</li>
          <li>Compatibility with legacy or non-standard web browsers and obsolete hardware.</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 21. Limitation of Liability */}
      <section id="limitation-of-liability" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          21. Limitation of Liability
        </h2>
        <p className="mb-3">
          To the maximum extent permitted by applicable law in <strong>India</strong>, in no event shall Blevon, its directors, developers, or contractors be liable for any indirect, special, incidental, consequential, exemplary, or punitive damages (including loss of profits, revenue, data, goodwill, or business interruption) arising out of or in connection with our services.
        </p>
        <p>
          Blevon's aggregate cumulative liability for any and all claims arising out of or related to an engagement shall not exceed the total fees actually paid by the Client to Blevon under the specific project SOW during the six (6) months immediately preceding the event giving rise to liability.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 22. Suspension & Termination */}
      <section id="suspension-termination" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          22. Suspension &amp; Termination
        </h2>
        <p className="mb-3">
          Either party may terminate an ongoing project agreement upon fourteen (14) calendar days written notice if the other party breaches a material term of these Terms and fails to cure such breach within the notice period.
        </p>
        <p>
          Upon termination, the Client shall immediately pay Blevon for all work completed, hours logged, and committed third-party expenses incurred up to the effective termination date.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 23. Refunds & Cancellations */}
      <section id="refunds-cancellations" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          23. Refunds &amp; Cancellations
        </h2>
        <p>
          All project cancellations, deposit allocations, and refund assessments are governed by our dedicated <a href="/refund-policy" className="text-[#2563EB] underline font-semibold">Refund &amp; Cancellation Policy</a>, which is incorporated into these Terms by reference.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 24. Force Majeure */}
      <section id="force-majeure" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          24. Force Majeure
        </h2>
        <p>
          Neither party shall be held liable for failure or delay in performing contractual obligations if such failure arises from circumstances beyond reasonable control, including acts of God, natural disasters, armed conflicts, widespread Internet infrastructure failures, utility outages, epidemics, or government restrictions.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 25. Governing Law */}
      <section id="governing-law" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          25. Governing Law &amp; Dispute Resolution
        </h2>
        <p className="mb-3">
          These Terms and all project agreements shall be governed by, construed, and enforced in accordance with the laws of <strong>India</strong>, without giving effect to conflict of laws principles.
        </p>
        <p>
          Any dispute, claim, or controversy arising out of or relating to these Terms shall first be addressed through good-faith executive negotiations. If unresolved, disputes shall be submitted to the exclusive jurisdiction of the competent courts in <strong>Bangalore, India</strong>.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 26. Changes to These Terms */}
      <section id="changes-to-terms" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          26. Changes to These Terms
        </h2>
        <p>
          Blevon reserves the right to modify these Terms at any time. The updated Terms will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Continued engagement with our services following updates constitutes acceptance of the revised Terms.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 27. Contact Information */}
      <section id="contact-us" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          27. Contact Us
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
