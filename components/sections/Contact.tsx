"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Clock, MapPin, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function Contact() {
  const supabase = createClient();
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phoneNumber: "",
    emailAddress: "",
    projectDetails: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Trim all fields
    const fullName = formData.fullName.trim();
    const businessName = formData.businessName.trim();
    const emailAddress = formData.emailAddress.trim();
    const phoneNumber = formData.phoneNumber.trim();
    const projectDetails = formData.projectDetails.trim();

    // Validate required fields
    if (!fullName || !emailAddress || !projectDetails) {
      setError("Please fill in all required fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: insertError } = await supabase
        .from("contact_inquiries")
        .insert([
          {
            full_name: fullName,
            business_name: businessName || null,
            email: emailAddress,
            phone_number: phoneNumber || null,
            project_details: projectDetails,
          },
        ]);

      if (insertError) {
        throw new Error(insertError.message);
      }

      setIsSuccess(true);
      setFormData({
        fullName: "",
        businessName: "",
        phoneNumber: "",
        emailAddress: "",
        projectDetails: ""
      });
    } catch (err: any) {
      console.error("Error submitting contact inquiry:", err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-white py-14 lg:py-20">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-50/20 blur-3xl" />
      <div className="absolute top-10 right-10 -z-10 h-72 w-72 rounded-full bg-indigo-50/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#2563EB] mb-2.5 block">
            CONTACT
          </span>
          <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] mb-4">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-[16px] lg:text-[18px] font-normal leading-[1.7] text-[#64748B] max-w-[680px] mx-auto">
            Have a project in mind? We&apos;d love to hear your ideas and help bring them to life.
          </p>
        </div>

        {/* 2-Card Stretched Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Card: Contact Information */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 bg-white rounded-[20px] border border-[#E2E8F0] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between h-full">
              
              <div>
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-3 leading-[1.3]">
                  Contact Information
                </h3>
                <p className="text-[16px] font-normal leading-[1.6] text-[#64748B] mb-8">
                  Get in touch with us directly or schedule a call. We look forward to discussing your project scope.
                </p>
              </div>

              {/* Contacts info list */}
              <div className="flex flex-col gap-6 lg:gap-8 mt-auto">
                
                {/* Email Item */}
                <div className="flex items-start gap-4 group/item">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-[#2563EB] transition-colors duration-300 group-hover/item:border-[#2563EB] group-hover/item:bg-blue-50/30">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wide">Email</span>
                    <a href="mailto:contact@blevon.in" className="text-[16px] font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors duration-200">
                      contact@blevon.in
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4 group/item">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-[#2563EB] transition-colors duration-300 group-hover/item:border-[#2563EB] group-hover/item:bg-blue-50/30">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wide">Phone</span>
                    <a href="tel:+919491229471" className="text-[16px] font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors duration-200">
                      +91 94912 29471
                    </a>
                  </div>
                </div>

                {/* Working Hours Item */}
                <div className="flex items-start gap-4 group/item">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-[#2563EB] transition-colors duration-300 group-hover/item:border-[#2563EB] group-hover/item:bg-blue-50/30">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wide">Working Hours</span>
                    <span className="text-[16px] font-medium text-[#0F172A] leading-snug">
                      Monday – Saturday <br />
                      9:00 AM – 7:00 PM (IST)
                    </span>
                  </div>
                </div>

                {/* Service Area Item */}
                <div className="flex items-start gap-4 group/item">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-[#2563EB] transition-colors duration-300 group-hover/item:border-[#2563EB] group-hover/item:bg-blue-50/30">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wide">Service Area</span>
                    <span className="text-[16px] font-medium text-[#0F172A] leading-snug">
                      Remote • India • Worldwide
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Card: Contact Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 bg-white rounded-[20px] border border-[#E2E8F0] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between h-full relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        
                        {/* Full Name */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="fullName" className="text-[14px] font-semibold text-slate-800">
                            Full Name *
                          </label>
                          <input
                            required
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="h-12 w-full rounded-[16px] border border-[#E2E8F0] px-4 text-[16px] text-[#0F172A] placeholder:text-slate-400 placeholder:text-[15px] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200"
                          />
                        </div>

                        {/* Business Name */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="businessName" className="text-[14px] font-semibold text-slate-800">
                            Business Name
                          </label>
                          <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            placeholder="Acme Corp"
                            className="h-12 w-full rounded-[16px] border border-[#E2E8F0] px-4 text-[16px] text-[#0F172A] placeholder:text-slate-400 placeholder:text-[15px] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200"
                          />
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="emailAddress" className="text-[14px] font-semibold text-slate-800">
                            Email Address *
                          </label>
                          <input
                            required
                            type="email"
                            id="emailAddress"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="h-12 w-full rounded-[16px] border border-[#E2E8F0] px-4 text-[16px] text-[#0F172A] placeholder:text-slate-400 placeholder:text-[15px] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200"
                          />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="phoneNumber" className="text-[14px] font-semibold text-slate-800">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="+91 00000 00000"
                            className="h-12 w-full rounded-[16px] border border-[#E2E8F0] px-4 text-[16px] text-[#0F172A] placeholder:text-slate-400 placeholder:text-[15px] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200"
                          />
                        </div>

                      </div>

                      {/* Project Details */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="projectDetails" className="text-[14px] font-semibold text-slate-800">
                          Project Details *
                        </label>
                        <textarea
                          required
                          id="projectDetails"
                          name="projectDetails"
                          rows={5}
                          value={formData.projectDetails}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project, your goals, and any specific requirements..."
                          className="w-full rounded-[16px] border border-[#E2E8F0] p-4 text-[16px] text-[#0F172A] placeholder:text-slate-400 placeholder:text-[15px] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200 resize-y"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 space-y-4">
                      {error && (
                        <div className="text-sm font-medium text-rose-500 bg-rose-50/50 border border-rose-100/50 rounded-xl p-3 text-center">
                          {error}
                        </div>
                      )}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white h-12 px-8 text-[16px] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/15 hover:-translate-y-0.5 group flex items-center justify-center gap-2 select-none shrink-0 cursor-pointer disabled:pointer-events-none"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4.5 w-4.5 animate-spin" />
                            <span>Sending details...</span>
                          </>
                        ) : (
                          <>
                            <span>Start Your Project</span>
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                          </>
                        )}
                      </Button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 flex flex-col items-center justify-center py-12 text-center h-full min-h-[380px]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 mb-6 border border-emerald-100/50">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-[22px] font-bold text-[#0F172A] mb-3 leading-[1.3]">
                      Inquiry Received!
                    </h3>
                    <p className="text-[16px] font-normal leading-[1.6] text-[#64748B] max-w-md">
                      Thank you! Your project inquiry has been received. We&apos;ll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
