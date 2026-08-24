"use client";

import React from "react";
import { LegalLayout } from "./components/LegalLayout";

const CONTACT_EMAIL = "contact@blevon.in";

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      seoTitle="Refund & Cancellation Policy | Blevon"
      seoDescription="Review Blevon's Refund & Cancellation Policy for digital services, project payments, cancellations, third-party costs, and refunds."
      badge="FINANCIAL POLICY"
      description="This Refund & Cancellation Policy outlines the commercial guidelines, deposit handling, and cancellation procedures for Blevon's bespoke software engineering, web design, and digital consulting services."
      lastUpdated="[LAST UPDATED DATE]"
    >
      {/* 1. Introduction */}
      <section id="introduction" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          1. Introduction
        </h2>
        <p className="mb-3">
          At <strong>Blevon</strong> (based in <strong>Bangalore, India</strong>), we build custom web architectures, web applications, mobile apps, and interactive 3D digital experiences. Because our work involves custom software engineering, dedicated developer and designer time allocation, and bespoke intellectual property tailored to each client, this Refund &amp; Cancellation Policy sets forth the clear, fair conditions under which project cancellations and refunds are evaluated.
        </p>
        <p>
          Please review this policy before approving a project proposal, paying an advance deposit invoice, or commissioning work.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 2. Applicability */}
      <section id="applicability" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          2. Applicability
        </h2>
        <p className="mb-3">This policy applies to all professional services offered by Blevon, including:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li>Website Design &amp; Development</li>
          <li>Web Applications &amp; Cloud Systems</li>
          <li>Mobile Application Engineering (iOS &amp; Android)</li>
          <li>3D Interactive &amp; WebGL Experiences</li>
          <li>UI/UX Design Systems &amp; Wireframing</li>
          <li>Custom Software Consulting &amp; Code Reviews</li>
          <li>Website Maintenance &amp; Retainer Support</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 3. Deposits & Advance Payments */}
      <section id="project-deposits" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          3. Project Deposits &amp; Advance Payments
        </h2>
        <p className="mb-3">
          Custom software projects require an initial deposit or advance milestone payment before kickoff. This advance secures dedicated studio capacity, reserves engineering hours, and funds initial architectural planning.
        </p>
        <div className="rounded-xl border border-blue-100 bg-[#EAF1FF]/40 p-4 text-xs text-[#0E2A6D]">
          <strong>Contractual Precedence:</strong> Specific commercial deposit percentages, milestone schedules, and any bespoke cancellation clauses defined in your executed Statement of Work (SOW) or invoice shall govern that specific project engagement.
        </div>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 4. Before Work Commences */}
      <section id="before-commencement" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          4. Cancellation Before Project Commencement
        </h2>
        <p className="mb-3">
          If the Client requests cancellation in writing before Blevon has commenced research, design prototyping, technical architecture, or codebase setup:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li>The Client may be eligible for a refund of the advance deposit, less non-recoverable third-party expenses already incurred (such as domain registrations or third-party software licenses) and payment gateway processing fees.</li>
          <li>Cancellation requests must be submitted in writing via email to <code>{CONTACT_EMAIL}</code>.</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 5. After Work Commences */}
      <section id="after-commencement" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          5. Cancellation After Work Has Commenced
        </h2>
        <p className="mb-3">
          Once design, technical architecture, or software engineering has started:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467] mb-3">
          <li>Blevon will calculate the fair value of all work completed, hours logged, and deliverables produced up to the date of written notice.</li>
          <li>If the value of completed work is less than the advance payment received, the unearned balance may be refunded to the Client.</li>
          <li>If the value of work completed exceeds the advance deposit received, the Client shall settle all outstanding logged hours and committed expenses up to the termination date.</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 6. Cancellation by Client */}
      <section id="cancellation-by-client" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          6. Cancellation by Client
        </h2>
        <p>
          Clients may cancel an ongoing project at any stage by providing written notice via email. Upon cancellation, Blevon will cease work immediately and provide an itemized account of completed deliverables and hours. The Client will receive digital files for all completed and paid milestones.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 7. Cancellation by Blevon */}
      <section id="cancellation-by-blevon" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          7. Cancellation by Blevon
        </h2>
        <p className="mb-3">
          Blevon reserves the right to suspend or cancel a project engagement under the following conditions:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li>Material breach of the Terms &amp; Conditions or non-payment of milestone invoices.</li>
          <li>Client unresponsiveness or abandonment exceeding thirty (30) consecutive calendar days without prior notice.</li>
          <li>Unforeseen technical impossibilities or ethical/legal conflicts arising from client-provided materials.</li>
        </ul>
        <p className="mt-2">
          In the event Blevon terminates without cause, Blevon will refund any unearned portion of deposits received for milestones not yet initiated.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 8. Completed & Digital Deliverables */}
      <section id="completed-work" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          8. Completed Work &amp; Digital Deliverables
        </h2>
        <p>
          Milestone deliverables (e.g., approved wireframes, completed Figma designs, staging build demonstrations, or deployed production releases) that have been formally reviewed, accepted, or approved by the Client are strictly <strong>non-refundable</strong>.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 9. Revisions & Change Requests */}
      <section id="revisions-and-changes" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          9. Revision Requests vs. Refund Requests
        </h2>
        <p>
          Subjective design preferences or aesthetic revisions requested after milestone sign-off will be addressed through the standard revision cycles included in your project SOW. Creative differences or requests for features outside the agreed scope do not constitute valid grounds for refund claims.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 10. Third-Party Costs & Gateway Fees */}
      <section id="third-party-costs" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          10. Third-Party Costs &amp; Gateway Fees
        </h2>
        <p className="mb-3">
          Expenses incurred for third-party services on the Client&rsquo;s behalf are non-refundable under all circumstances, including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li><strong>Domain Costs:</strong> Domain name registrations, DNS renewals, and SSL certificates.</li>
          <li><strong>Hosting &amp; Cloud Costs:</strong> Server provisioning, cloud databases, CDN bandwidth, and VPS hosting fees.</li>
          <li><strong>Software &amp; API Licenses:</strong> Paid commercial fonts, stock media, 3D assets, and third-party API subscription fees.</li>
          <li><strong>Payment Gateway Fees:</strong> Transaction processing fees, merchant discount rates, and international banking conversion surcharges.</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 11. Non-Refundable Items Summary */}
      <section id="non-refundable-costs" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          11. Summary of Non-Refundable Costs
        </h2>
        <p className="mb-2">The following items are strictly non-refundable:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li>Work completed, hours logged, and deliverables approved by the Client.</li>
          <li>Non-recoverable third-party expenses and hosting fees.</li>
          <li>Monthly retainer fees once the billing cycle has commenced.</li>
          <li>Payment gateway transaction charges incurred during payment processing.</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 12. Refund Eligibility */}
      <section id="refund-eligibility" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          12. Refund Eligibility &amp; Commercial Terms
        </h2>
        <p className="mb-3">
          Refund eligibility is evaluated based on the specific terms set out in your project agreement, invoice, and the proportion of work completed.
        </p>
        <p>
          Where commercial refund terms are specified in your individual contract, those terms apply. Where not explicitly specified, unearned portions of advance deposits may be refunded after deducting logged engineering time, administrative setup, third-party expenses, and payment processing fees.
        </p>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 13. Refund Processing */}
      <section id="refund-processing" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          13. Refund Processing Workflow
        </h2>
        <p className="mb-3">
          Approved refunds will be processed back to the original method of payment or via bank wire transfer to the client's verified commercial bank account.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#475467]">
          <li>Once approved, Blevon will initiate the refund within the timeframe specified in your project agreement (or standard banking processing period).</li>
          <li>Depending on your financial institution or payment gateway provider, funds may take additional business days to appear on your bank statement.</li>
        </ul>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 14. How to Request a Refund */}
      <section id="how-to-request" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          14. How to Request a Cancellation or Refund
        </h2>
        <p className="mb-3">To request a project cancellation or refund review, please follow these steps:</p>
        <ol className="list-decimal pl-5 space-y-2 text-[#475467]">
          <li>Send an email to <code>{CONTACT_EMAIL}</code> with the subject line <strong>&ldquo;Cancellation / Refund Request — [Project Name / Invoice #]&rdquo;</strong>.</li>
          <li>Detail the reason for the cancellation and reference your project proposal or invoice date.</li>
          <li>Our management team will review your project timeline, logged hours, and deliverable status, and reply in writing within three (3) business days.</li>
        </ol>
      </section>

      <hr className="border-[#E4E7EC]" />

      {/* 15. Contact Information */}
      <section id="contact-us" className="scroll-mt-32">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E2A6D] mb-3">
          15. Contact Us
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
