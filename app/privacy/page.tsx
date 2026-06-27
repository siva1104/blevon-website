import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Blevon",
  description: "Read about how we handle and protect your personal and project information at Blevon.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="border-b border-slate-100 pb-8 mb-10">
            <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#2563EB] mb-2 block">
              LEGAL
            </span>
            <h1 className="text-[36px] sm:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[15px] font-medium text-slate-400">
              Last Updated: June 2026
            </p>
          </div>

          {/* Page Content */}
          <div className="space-y-10 text-[16px] font-normal leading-[1.7] text-[#64748B]">
            
            <p className="text-[17px] text-[#0F172A] font-medium leading-relaxed">
              At <strong className="font-bold text-[#0F172A]">Blevon</strong>, we value your privacy and are committed to protecting the information you share with us.
            </p>

            {/* Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-[22px] font-bold text-[#0F172A] tracking-tight leading-[1.3] border-b border-slate-50 pb-2">
                Information We Collect
              </h2>
              <p>
                When you contact us or submit a project inquiry, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full Name</li>
                <li>Business Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Project Details</li>
              </ul>
              <p>
                We only collect information that you voluntarily provide.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-[22px] font-bold text-[#0F172A] tracking-tight leading-[1.3] border-b border-slate-50 pb-2">
                How We Use Your Information
              </h2>
              <p>
                Your information is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries</li>
                <li>Discuss your project requirements</li>
                <li>Provide quotations and proposals</li>
                <li>Deliver our services</li>
                <li>Improve our customer experience</li>
              </ul>
              <p>
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            {/* Data Security */}
            <section className="space-y-4">
              <h2 className="text-[22px] font-bold text-[#0F172A] tracking-tight leading-[1.3] border-b border-slate-50 pb-2">
                Data Security
              </h2>
              <p>
                We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse.
              </p>
            </section>

            {/* Cookies */}
            <section className="space-y-4">
              <h2 className="text-[22px] font-bold text-[#0F172A] tracking-tight leading-[1.3] border-b border-slate-50 pb-2">
                Cookies
              </h2>
              <p>
                Our website may use basic cookies to improve website performance and user experience. These cookies do not collect sensitive personal information.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="space-y-4">
              <h2 className="text-[22px] font-bold text-[#0F172A] tracking-tight leading-[1.3] border-b border-slate-50 pb-2">
                Third-Party Services
              </h2>
              <p>
                Our website may contain links to third-party websites, such as Instagram. We are not responsible for the privacy practices of those external websites.
              </p>
            </section>

            {/* Your Rights */}
            <section className="space-y-4">
              <h2 className="text-[22px] font-bold text-[#0F172A] tracking-tight leading-[1.3] border-b border-slate-50 pb-2">
                Your Rights
              </h2>
              <p>
                You may request to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Update your information</li>
                <li>Delete your information</li>
                <li>Contact us regarding any privacy concerns</li>
              </ul>
            </section>

            {/* Contact Us */}
            <section className="space-y-4">
              <h2 className="text-[22px] font-bold text-[#0F172A] tracking-tight leading-[1.3] border-b border-slate-50 pb-2">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-2">
                <p>
                  <strong className="font-bold text-[#0F172A]">Email:</strong>{" "}
                  <a href="mailto:contact@blevon.in" className="text-[#2563EB] hover:underline">
                    contact@blevon.in
                  </a>
                </p>
                <p>
                  <strong className="font-bold text-[#0F172A]">Website:</strong>{" "}
                  <a href="https://blevon.in" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">
                    blevon.in
                  </a>
                </p>
              </div>
            </section>

            {/* Agreement Notice */}
            <p className="text-[15px] italic pt-4 border-t border-slate-100 text-slate-500">
              By using our website, you agree to the terms outlined in this Privacy Policy.
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
