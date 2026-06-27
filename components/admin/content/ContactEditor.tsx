"use client";

import React, { useEffect, useState } from "react";

interface ContactData {
  title: string;
  subtitle: string;
  business_email: string;
  phone_number: string;
  address: string;
  google_maps_url: string;
  whatsapp_number: string;
  working_hours: string;
}

interface ContactEditorProps {
  data: ContactData;
  onChange: (updated: ContactData) => void;
}

export default function ContactEditor({ data, onChange }: ContactEditorProps) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [workingHours, setWorkingHours] = useState("");

  useEffect(() => {
    setTitle(data.title || "");
    setSubtitle(data.subtitle || "");
    setBusinessEmail(data.business_email || "");
    setPhoneNumber(data.phone_number || "");
    setAddress(data.address || "");
    setGoogleMapsUrl(data.google_maps_url || "");
    setWhatsappNumber(data.whatsapp_number || "");
    setWorkingHours(data.working_hours || "");
  }, [data]);

  const handleFieldChange = (fields: Partial<ContactData>) => {
    onChange({
      title: fields.title !== undefined ? fields.title : title,
      subtitle: fields.subtitle !== undefined ? fields.subtitle : subtitle,
      business_email: fields.business_email !== undefined ? fields.business_email : businessEmail,
      phone_number: fields.phone_number !== undefined ? fields.phone_number : phoneNumber,
      address: fields.address !== undefined ? fields.address : address,
      google_maps_url: fields.google_maps_url !== undefined ? fields.google_maps_url : googleMapsUrl,
      whatsapp_number: fields.whatsapp_number !== undefined ? fields.whatsapp_number : whatsappNumber,
      working_hours: fields.working_hours !== undefined ? fields.working_hours : workingHours,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Heading */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Section Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            handleFieldChange({ title: e.target.value });
          }}
          placeholder="e.g. Let's Build Something Together"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white"
        />
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Section Description
        </label>
        <textarea
          value={subtitle}
          onChange={(e) => {
            setSubtitle(e.target.value);
            handleFieldChange({ subtitle: e.target.value });
          }}
          placeholder="e.g. Reach out to scope a client project or ask about Blevon's development timelines."
          rows={2}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all bg-white resize-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Business Email
          </label>
          <input
            type="email"
            value={businessEmail}
            onChange={(e) => {
              setBusinessEmail(e.target.value);
              handleFieldChange({ business_email: e.target.value });
            }}
            placeholder="e.g. contact@blevon.in"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Phone Number
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              handleFieldChange({ phone_number: e.target.value });
            }}
            placeholder="e.g. +91 99999 99999"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Whatsapp */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            WhatsApp Number
          </label>
          <input
            type="text"
            value={whatsappNumber}
            onChange={(e) => {
              setWhatsappNumber(e.target.value);
              handleFieldChange({ whatsapp_number: e.target.value });
            }}
            placeholder="e.g. +91 99999 99999"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

        {/* Working Hours */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Working Hours
          </label>
          <input
            type="text"
            value={workingHours}
            onChange={(e) => {
              setWorkingHours(e.target.value);
              handleFieldChange({ working_hours: e.target.value });
            }}
            placeholder="e.g. Monday - Friday, 9am - 6pm"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Office Address
        </label>
        <textarea
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            handleFieldChange({ address: e.target.value });
          }}
          placeholder="Enter corporate office mailing address..."
          rows={3}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white resize-none"
        />
      </div>

      {/* Google maps link */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Google Maps Embed/Search URL
        </label>
        <input
          type="text"
          value={googleMapsUrl}
          onChange={(e) => {
            setGoogleMapsUrl(e.target.value);
            handleFieldChange({ google_maps_url: e.target.value });
          }}
          placeholder="e.g. https://maps.google.com/..."
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
        />
      </div>

    </div>
  );
}
