"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Navbar2 } from "../Home/components/Navbar2";
import { Footer8 } from "../Home/components/Footer8";

const CONTACT_EMAIL = "contact@blevon.in";
const CONTACT_PHONE = "+91 9491229471";
const WHATSAPP_NUMBER = "919491229471";

// Configurable Business Hours & Time Slots (IST)
const AVAILABLE_TIME_SLOTS = [
  "10:00 AM - 10:30 AM",
  "11:30 AM - 12:00 PM",
  "02:00 PM - 02:30 PM",
  "03:30 PM - 04:00 PM",
  "05:00 PM - 05:30 PM",
  "06:30 PM - 07:00 PM",
];

// Helper to generate the next 10 available business dates
function getAvailableDates() {
  const dates = [];
  const today = new Date();
  let count = 0;
  let offset = 1; // Start from tomorrow

  while (count < 10 && offset < 20) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    const dayOfWeek = d.getDay(); // 0 is Sunday
    if (dayOfWeek !== 0) {
      // Exclude Sundays
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      const dateString = `${year}-${month}-${day}`;

      dates.push({
        dateString,
        dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
        monthName: d.toLocaleDateString("en-US", { month: "short" }),
        dayNum: d.getDate(),
        fullLabel: d.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      });
      count++;
    }
    offset++;
  }
  return dates;
}

export default function ContactPage() {
  const availableDates = useMemo(() => getAvailableDates(), []);

  // --- BOOKING STATE ---
  const [bookingStep, setBookingStep] = useState(1); // 1: Date & Time, 2: Details, 3: Success
  const [selectedDate, setSelectedDate] = useState(availableDates[0]?.dateString || "");
  const [selectedTime, setSelectedTime] = useState(AVAILABLE_TIME_SLOTS[0] || "");
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Website Development",
    details: "",
  });
  const [bookingStatus, setBookingStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [bookingError, setBookingError] = useState("");

  // --- ENQUIRY STATE ---
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Website Development",
    details: "",
  });
  const [enquiryStatus, setEnquiryStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [enquiryError, setEnquiryError] = useState("");

  // Find selected date full label
  const selectedDateObj = availableDates.find((d) => d.dateString === selectedDate);
  const formattedDate = selectedDateObj ? selectedDateObj.fullLabel : selectedDate;

  const API_BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

  // Handle Booking Submit
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingStatus("loading");
    setBookingError("");

    try {
      if (!bookingData.name.trim() || !bookingData.email.trim() || !bookingData.phone.trim()) {
        throw new Error("Please fill in your name, email, and phone / WhatsApp number.");
      }

      if (!formattedDate || !selectedTime) {
        throw new Error("Please select a date and time slot for your call.");
      }

      const payload = {
        name: bookingData.name.trim(),
        email: bookingData.email.trim(),
        phone: bookingData.phone.trim(),
        company: bookingData.company.trim(),
        projectType: bookingData.projectType,
        details: bookingData.details.trim(),
        selectedDate: formattedDate,
        selectedTime: selectedTime,
      };

      let response;
      try {
        const url = API_BASE_URL ? `${API_BASE_URL}/api/bookings` : "/api/bookings";
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (netErr) {
        if (!API_BASE_URL) {
          response = await fetch("/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
        } else {
          throw new Error("Unable to connect to the server. Please check your internet connection or contact us directly via WhatsApp / email.");
        }
      }

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit booking request. Please try again.");
      }

      setBookingStatus("success");
      setBookingStep(3);
    } catch (err) {
      setBookingStatus("error");
      setBookingError(err.message || "Something went wrong. Please try again.");
    }
  };

  // Handle Enquiry Submit
  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setEnquiryStatus("loading");
    setEnquiryError("");

    try {
      if (!enquiryData.name.trim() || !enquiryData.email.trim() || !enquiryData.details.trim()) {
        throw new Error("Please fill in your name, email, and project details.");
      }

      const payload = {
        name: enquiryData.name.trim(),
        email: enquiryData.email.trim(),
        phone: enquiryData.phone.trim(),
        company: enquiryData.company.trim(),
        projectType: enquiryData.projectType,
        message: enquiryData.details.trim(),
      };

      let response;
      try {
        const url = API_BASE_URL ? `${API_BASE_URL}/api/enquiries` : "/api/enquiries";
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (netErr) {
        if (!API_BASE_URL) {
          response = await fetch("/api/enquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
        } else {
          throw new Error("Unable to connect to the server. Please check your internet connection or contact us directly via WhatsApp / email.");
        }
      }

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send enquiry. Please try again.");
      }

      setEnquiryStatus("success");
    } catch (err) {
      setEnquiryStatus("error");
      setEnquiryError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#101828]">
      {/* 1. Master Reference Navbar */}
      <Navbar2 />

      <main className="pt-22 sm:pt-26 md:pt-28">
        {/* 2. Header Section */}
        <section className="relative w-full pt-3 pb-5 text-center sm:pt-5 sm:pb-6">
          <div className="global-container">
            <div className="mx-auto max-w-lg">
              <span className="mb-1.5 inline-block text-[11px] font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
                CONTACT
              </span>
              <h1 className="mb-2 text-lg font-bold tracking-tight text-[#101828] sm:text-xl md:text-2xl lg:text-[28px] leading-[1.18]">
                Let's build something useful.
              </h1>
              <p className="mx-auto max-w-md text-xs text-[#667085] leading-relaxed">
                Tell us what you're looking to build. We'll figure out the right approach.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Two Core User Journeys Grid (Book a Call & Send an Enquiry) */}
        <section className="relative w-full pb-10 md:pb-14">
          <div className="global-container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
              
              {/* ============================================================ */}
              {/* ACTION 1: BOOK A CALL (Interactive Request Module)            */}
              {/* ============================================================ */}
              <div className="flex h-full flex-col justify-between rounded-xl border border-[#E4E7EC] bg-white p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-blue-300">
                <div className="flex flex-1 flex-col justify-between">
                  {/* Action Header */}
                  <div>
                    <div className="mb-2.5 flex items-center justify-between border-b border-[#E4E7EC] pb-2.5">
                      <div>
                        <span className="inline-block text-[10.5px] font-bold tracking-[0.18em] text-[#2563EB] uppercase">
                          Action 01
                        </span>
                        <h2 className="mt-0.5 text-base font-bold tracking-tight text-[#101828] sm:text-lg">
                          Book a Call
                        </h2>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-blue-200 bg-[#EAF1FF] px-2 py-0.5 text-[11px] font-semibold text-[#2563EB]">
                        30 Min Discovery
                      </span>
                    </div>

                    <p className="mb-3 text-xs text-[#667085] leading-relaxed">
                      Select a convenient date and time to discuss your product requirements directly with our team.
                    </p>
                  </div>

                  {/* Step 1: Select Date & Time */}
                  {bookingStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-1 flex-col justify-between space-y-4"
                    >
                      <div className="space-y-4">
                        {/* Date Picker (Clean Horizontal Days) */}
                        <div>
                          <div className="mb-2 flex items-center justify-between">
                            <label className="text-[11px] font-semibold tracking-wider text-[#101828] uppercase">
                              1. Select Date
                            </label>
                            <span className="text-[11px] text-[#667085]">Mon – Sat</span>
                          </div>
                          <div className="grid grid-cols-5 gap-1.5">
                            {availableDates.slice(0, 10).map((d) => {
                              const isSelected = selectedDate === d.dateString;
                              return (
                                <button
                                  key={d.dateString}
                                  type="button"
                                  onClick={() => setSelectedDate(d.dateString)}
                                  className={`flex flex-col items-center justify-center rounded-lg border p-1 sm:p-2 text-center transition-all duration-200 focus:outline-none ${
                                    isSelected
                                      ? "border-[#2563EB] bg-[#2563EB] text-white shadow-2xs"
                                      : "border-[#E4E7EC] bg-[#F7F8F6] text-[#101828] hover:border-blue-300 hover:bg-white"
                                  }`}
                                >
                                  <span className={`text-[8.5px] sm:text-[9.5px] font-medium uppercase ${isSelected ? "text-blue-100" : "text-[#667085]"}`}>
                                    {d.dayName}
                                  </span>
                                  <span className="text-xs sm:text-sm font-bold">
                                    {d.dayNum}
                                  </span>
                                  <span className={`text-[8.5px] sm:text-[9px] ${isSelected ? "text-blue-200" : "text-[#94A3B8]"}`}>
                                    {d.monthName}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Time Slots */}
                        <div>
                          <div className="mb-2 flex items-center justify-between">
                            <label className="text-[11px] font-semibold tracking-wider text-[#101828] uppercase">
                              2. Select Time Slot
                            </label>
                            <span className="text-[11px] font-medium text-[#2563EB]">
                              IST (UTC+5:30)
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                            {AVAILABLE_TIME_SLOTS.map((slot) => {
                              const isSelected = selectedTime === slot;
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setSelectedTime(slot)}
                                  className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-all duration-200 focus:outline-none ${
                                    isSelected
                                      ? "border-[#2563EB] bg-[#2563EB] text-white shadow-2xs"
                                      : "border-[#E4E7EC] bg-[#F7F8F6] text-[#101828] hover:border-blue-300 hover:bg-white"
                                  }`}
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Selected Summary */}
                        <div className="rounded-lg border border-[#E4E7EC] bg-[#F7F8F6] p-2.5 text-xs text-[#101828]">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <div>
                              <span className="font-semibold text-[#2563EB]">Selected: </span>
                              <span>{formattedDate}</span>
                            </div>
                            <span className="font-semibold">{selectedTime}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => setBookingStep(2)}
                          className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#2563EB] py-2.5 text-xs sm:text-[13px] font-semibold text-white shadow-[0_3px_10px_rgba(37,99,235,0.22)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_4px_14px_rgba(37,99,235,0.3)] active:scale-[0.99]"
                        >
                          <span>Continue to Your Details</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Enter Details */}
                  {bookingStep === 2 && (
                    <motion.form
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      onSubmit={handleBookingSubmit}
                      className="flex flex-1 flex-col justify-between space-y-3.5"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-2">
                          <button
                            type="button"
                            onClick={() => setBookingStep(1)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-blue-700"
                          >
                            <span>← Change Date / Time</span>
                          </button>
                          <span className="text-xs text-[#667085]">
                            {formattedDate} • {selectedTime}
                          </span>
                        </div>

                        {bookingError && (
                          <div className="rounded-xl border border-red-200 bg-red-50 p-2.5 text-xs sm:text-sm text-red-700">
                            {bookingError}
                          </div>
                        )}

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold tracking-wider text-[#101828] uppercase mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Alex Morgan"
                              value={bookingData.name}
                              onChange={(e) =>
                                setBookingData({ ...bookingData, name: e.target.value })
                              }
                              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] px-3.5 py-2.5 text-sm sm:text-base text-[#101828] placeholder:text-[#94A3B8] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold tracking-wider text-[#101828] uppercase mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="alex@company.com"
                              value={bookingData.email}
                              onChange={(e) =>
                                setBookingData({ ...bookingData, email: e.target.value })
                              }
                              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] px-3.5 py-2.5 text-sm sm:text-base text-[#101828] placeholder:text-[#94A3B8] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold tracking-wider text-[#101828] uppercase mb-1">
                              Phone / WhatsApp *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 00000 00000"
                              value={bookingData.phone}
                              onChange={(e) =>
                                setBookingData({ ...bookingData, phone: e.target.value })
                              }
                              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] px-3.5 py-2.5 text-sm sm:text-base text-[#101828] placeholder:text-[#94A3B8] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold tracking-wider text-[#101828] uppercase mb-1">
                              Company / Business
                            </label>
                            <input
                              type="text"
                              placeholder="Company Name"
                              value={bookingData.company}
                              onChange={(e) =>
                                setBookingData({ ...bookingData, company: e.target.value })
                              }
                              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] px-3.5 py-2.5 text-sm sm:text-base text-[#101828] placeholder:text-[#94A3B8] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold tracking-wider text-[#101828] uppercase mb-1">
                            What do you want to build?
                          </label>
                          <select
                            value={bookingData.projectType}
                            onChange={(e) =>
                              setBookingData({ ...bookingData, projectType: e.target.value })
                            }
                            className="w-full rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] px-3.5 py-2.5 text-sm sm:text-base text-[#101828] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                          >
                            <option value="Website Development">Website Development</option>
                            <option value="App Development">App Development</option>
                            <option value="Full Digital Product">Full Digital Product (Web + App)</option>
                            <option value="Other Inquiries">Other Inquiries</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold tracking-wider text-[#101828] uppercase mb-1">
                            Brief Project Overview (Optional)
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Tell us briefly about your goals or key questions..."
                            value={bookingData.details}
                            onChange={(e) =>
                              setBookingData({ ...bookingData, details: e.target.value })
                            }
                            className="w-full rounded-xl border border-[#E4E7EC] bg-[#F7F8F6] px-3.5 py-2.5 text-sm sm:text-base text-[#101828] placeholder:text-[#94A3B8] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                          />
                        </div>
                      </div>

                      <div className="pt-1.5">
                        <button
                          type="submit"
                          disabled={bookingStatus === "loading"}
                          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2563EB] py-3 text-sm sm:text-base font-semibold text-white shadow-[0_4px_14px_rgba(37,99,235,0.28)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] active:scale-[0.99] disabled:opacity-50"
                        >
                          <span>{bookingStatus === "loading" ? "Submitting..." : "Confirm Booking Request"}</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </button>
                      </div>
                    </motion.form>
                  )}

                  {/* Step 3: Success Confirmation State */}
                  {bookingStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="my-auto rounded-2xl border border-blue-200 bg-[#EAF1FF]/70 p-8 text-center"
                    >
                      <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-blue-100 text-[#2563EB]">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[#101828]">
                        Booking Request Received
                      </h3>
                      <p className="mt-4 text-base text-[#101828] font-medium leading-relaxed">
                        “Your call request has been received. We'll confirm the meeting time and send your Google Meet link by email.”
                      </p>
                      
                      <div className="mt-6 rounded-xl border border-blue-200/80 bg-white p-4 text-left text-sm text-[#667085] space-y-1.5">
                        <div className="flex justify-between">
                          <span className="font-medium text-[#101828]">Requested Date:</span>
                          <span>{formattedDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-[#101828]">Requested Time:</span>
                          <span>{selectedTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-[#101828]">Attendee:</span>
                          <span>{bookingData.name} ({bookingData.email})</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setBookingStep(1);
                          setBookingStatus("idle");
                          setBookingData({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            projectType: "Website Development",
                            details: "",
                          });
                        }}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-blue-700"
                      >
                        <span>Book another slot</span>
                        <span>→</span>
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* ============================================================ */}
              {/* ACTION 2: SEND AN ENQUIRY (Direct Message Form)              */}
              {/* ============================================================ */}
              <div className="flex h-full flex-col justify-between rounded-xl border border-[#E4E7EC] bg-white p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-blue-300">
                <div className="flex flex-1 flex-col justify-between">
                  {/* Action Header */}
                  <div>
                    <div className="mb-2.5 flex items-center justify-between border-b border-[#E4E7EC] pb-2.5">
                      <div>
                        <span className="inline-block text-[10.5px] font-bold tracking-[0.18em] text-[#2563EB] uppercase">
                          Action 02
                        </span>
                        <h2 className="mt-0.5 text-base font-bold tracking-tight text-[#101828] sm:text-lg">
                          Send an Enquiry
                        </h2>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-[#E4E7EC] bg-[#F7F8F6] px-2 py-0.5 text-[11px] font-semibold text-[#667085]">
                        Direct Message
                      </span>
                    </div>

                    <p className="mb-3 text-xs text-[#667085] leading-relaxed">
                      Prefer writing first? Share details about your project and we’ll review and respond with a clear recommendation.
                    </p>
                  </div>

                  {enquiryStatus === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="my-auto rounded-xl border border-blue-200 bg-[#EAF1FF]/70 p-5 text-center"
                    >
                      <div className="mx-auto mb-2.5 flex size-10 items-center justify-center rounded-full bg-blue-100 text-[#2563EB]">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-[#101828]">
                        Enquiry Received
                      </h3>
                      <p className="mt-2 text-xs sm:text-[13px] text-[#101828] font-medium leading-relaxed">
                        “Thanks for reaching out. We’ve received your enquiry and will get back to you shortly.”
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setEnquiryStatus("idle");
                          setEnquiryData({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            projectType: "Website Development",
                            details: "",
                          });
                        }}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-blue-700"
                      >
                        <span>Send another enquiry</span>
                        <span>→</span>
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleEnquirySubmit} className="flex flex-1 flex-col justify-between space-y-3">
                      <div className="space-y-3">
                        {enquiryError && (
                          <div className="rounded-xl border border-red-200 bg-red-50 p-2 text-xs text-red-700">
                            {enquiryError}
                          </div>
                        )}

                        {/* Name & Email */}
                        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          <div>
                            <label className="block text-[11px] font-semibold tracking-wider text-[#101828] uppercase mb-1">
                              Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Your full name"
                              value={enquiryData.name}
                              onChange={(e) =>
                                setEnquiryData({ ...enquiryData, name: e.target.value })
                              }
                              className="w-full rounded-lg border border-[#E4E7EC] bg-[#F7F8F6] px-3 py-2 text-xs sm:text-[13px] text-[#101828] placeholder:text-[#94A3B8] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold tracking-wider text-[#101828] uppercase mb-1">
                              Email *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="your.email@domain.com"
                              value={enquiryData.email}
                              onChange={(e) =>
                                setEnquiryData({ ...enquiryData, email: e.target.value })
                              }
                              className="w-full rounded-lg border border-[#E4E7EC] bg-[#F7F8F6] px-3 py-2 text-xs sm:text-[13px] text-[#101828] placeholder:text-[#94A3B8] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                            />
                          </div>
                        </div>

                        {/* Phone & Company */}
                        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          <div>
                            <label className="block text-[11px] font-semibold tracking-wider text-[#101828] uppercase mb-1">
                              Phone / WhatsApp
                            </label>
                            <input
                              type="tel"
                              placeholder="+91 00000 00000"
                              value={enquiryData.phone}
                              onChange={(e) =>
                                setEnquiryData({ ...enquiryData, phone: e.target.value })
                              }
                              className="w-full rounded-lg border border-[#E4E7EC] bg-[#F7F8F6] px-3 py-2 text-xs sm:text-[13px] text-[#101828] placeholder:text-[#94A3B8] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold tracking-wider text-[#101828] uppercase mb-1">
                              Company / Business
                            </label>
                            <input
                              type="text"
                              placeholder="Company Name"
                              value={enquiryData.company}
                              onChange={(e) =>
                                setEnquiryData({ ...enquiryData, company: e.target.value })
                              }
                              className="w-full rounded-lg border border-[#E4E7EC] bg-[#F7F8F6] px-3 py-2 text-xs sm:text-[13px] text-[#101828] placeholder:text-[#94A3B8] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                            />
                          </div>
                        </div>

                        {/* What are you looking to build? */}
                        <div>
                          <label className="block text-[11px] font-semibold tracking-wider text-[#101828] uppercase mb-1">
                            What are you looking to build? *
                          </label>
                          <select
                            value={enquiryData.projectType}
                            onChange={(e) =>
                              setEnquiryData({ ...enquiryData, projectType: e.target.value })
                            }
                            className="w-full rounded-lg border border-[#E4E7EC] bg-[#F7F8F6] px-3 py-2 text-xs sm:text-[13px] text-[#101828] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                          >
                            <option value="Website Development">Website Development</option>
                            <option value="App Development">App Development</option>
                            <option value="Full Digital Product">Full Digital Product</option>
                            <option value="Other Inquiries">Other Inquiries</option>
                          </select>
                        </div>

                        {/* Tell us about your project */}
                        <div>
                          <label className="block text-[11px] font-semibold tracking-wider text-[#101828] uppercase mb-1">
                            Tell us about your project *
                          </label>
                          <textarea
                            required
                            rows={2.5}
                            placeholder="Describe what you need, project scope, timeline or specific goals..."
                            value={enquiryData.details}
                            onChange={(e) =>
                              setEnquiryData({ ...enquiryData, details: e.target.value })
                            }
                            className="w-full rounded-lg border border-[#E4E7EC] bg-[#F7F8F6] px-3 py-2 text-xs sm:text-[13px] text-[#101828] placeholder:text-[#94A3B8] transition-colors focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-1">
                        <button
                          type="submit"
                          disabled={enquiryStatus === "loading"}
                          className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#D0D5DD] bg-white py-2.5 text-xs sm:text-[13px] font-semibold text-[#0E2A6D] shadow-2xs transition-all duration-300 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] active:scale-[0.99] disabled:opacity-50"
                        >
                          <span>{enquiryStatus === "loading" ? "Sending..." : "Send Enquiry"}</span>
                          <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>

            {/* ============================================================ */}
            {/* 3. DIRECT CONTACT OPTIONS BAR                                */}
            {/* ============================================================ */}
            <div className="mt-6 rounded-xl border border-[#E4E7EC] bg-white p-4 sm:p-4.5 shadow-2xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <span className="text-[10.5px] font-bold tracking-[0.18em] text-[#2563EB] uppercase">
                    Direct Contact
                  </span>
                  <h3 className="mt-0.5 text-base font-bold text-[#101828] sm:text-lg">
                    Need immediate assistance?
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  {/* Email */}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    title="Send us an email: contact@blevon.in"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E7EC] bg-[#F7F8F6] px-3.5 py-2 text-xs font-semibold text-[#101828] transition-all duration-200 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] active:scale-[0.98]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3.5 fill-none stroke-current stroke-2 text-[#2563EB]"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>{CONTACT_EMAIL}</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp: 9491229471"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E7EC] bg-[#F7F8F6] px-3.5 py-2 text-xs font-semibold text-[#101828] transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 active:scale-[0.98]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3.5 fill-[#25D366]"
                      aria-hidden="true"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>+91 9491229471</span>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                    title="Call us directly: +91 9491229471"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E7EC] bg-[#F7F8F6] px-3.5 py-2 text-xs font-semibold text-[#101828] transition-all duration-200 hover:border-blue-300 hover:bg-[#EAF1FF] hover:text-[#2563EB] active:scale-[0.98]"
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2563EB]">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{CONTACT_PHONE}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer8 />
    </div>
  );
}
