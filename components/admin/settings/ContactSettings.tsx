"use client";

import React, { useEffect, useState } from "react";

interface ContactData {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
}

interface ContactSettingsProps {
  data: ContactData;
  onChange: (updated: ContactData) => void;
}

export default function ContactSettings({ data, onChange }: ContactSettingsProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setEmail(data.email || "");
    setPhone(data.phone || "");
    setWhatsapp(data.whatsapp || "");
    setAddress(data.address || "");
  }, [data]);

  const handleFieldChange = (fields: Partial<ContactData>) => {
    onChange({
      email: fields.email !== undefined ? fields.email : email,
      phone: fields.phone !== undefined ? fields.phone : phone,
      whatsapp: fields.whatsapp !== undefined ? fields.whatsapp : whatsapp,
      address: fields.address !== undefined ? fields.address : address,
    });
  };

  return (
    <div className="space-y-6 select-none max-w-2xl">
      
      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Contact Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            handleFieldChange({ email: e.target.value });
          }}
          placeholder="e.g. contact@blevon.in"
          className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
        />
      </div>

      {/* Phone & WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            Phone Number
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              handleFieldChange({ phone: e.target.value });
            }}
            placeholder="e.g. +91 99999 99999"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

        {/* WhatsApp */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
            WhatsApp Number
          </label>
          <input
            type="text"
            value={whatsapp}
            onChange={(e) => {
              setWhatsapp(e.target.value);
              handleFieldChange({ whatsapp: e.target.value });
            }}
            placeholder="e.g. +91 99999 99999"
            className="h-11 w-full rounded-[12px] border border-[#E2E8F0] px-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white"
          />
        </div>

      </div>

      {/* Address */}
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
          Mailing Office Address
        </label>
        <textarea
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            handleFieldChange({ address: e.target.value });
          }}
          placeholder="Mailing coordinates..."
          rows={3}
          className="w-full rounded-[12px] border border-[#E2E8F0] p-4 text-[14.5px] text-[#0F172A] focus:border-[#2563EB] outline-none bg-white resize-none"
        />
      </div>

    </div>
  );
}
