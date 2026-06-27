"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminLayoutWrapper from "@/components/admin/AdminLayoutWrapper";
import SettingsSidebar from "@/components/admin/settings/SettingsSidebar";
import SaveBar from "@/components/admin/content/SaveBar";
import LoadingSkeleton from "@/components/admin/content/LoadingSkeleton";

// Subsection form editors
import CompanySettings from "@/components/admin/settings/CompanySettings";
import ContactSettings from "@/components/admin/settings/ContactSettings";
import SocialSettings from "@/components/admin/settings/SocialSettings";
import BrandingSettings from "@/components/admin/settings/BrandingSettings";
import SeoSettings from "@/components/admin/settings/SeoSettings";
import AnalyticsSettings from "@/components/admin/settings/AnalyticsSettings";
import BusinessSettings from "@/components/admin/settings/BusinessSettings";

import { AlertCircle } from "lucide-react";

const defaultSettings = {
  company: {
    name: "Blevon",
    tagline: "Crafting modern websites that help businesses grow.",
    description: "Boutique web design & engineering agency."
  },
  contact: {
    email: "contact@blevon.in",
    phone: "+91 99999 99999",
    whatsapp: "+91 99999 99999",
    address: "Bangalore, Karnataka, India"
  },
  social: {
    facebook: "https://facebook.com/blevon",
    instagram: "https://instagram.com/blevon.in",
    linkedin: "https://linkedin.com/company/blevon",
    x: "https://x.com/blevon",
    github: "https://github.com/blevon",
    youtube: "https://youtube.com/blevon"
  },
  branding: {
    logo: "",
    favicon: "",
    primaryColor: "#2563eb",
    secondaryColor: "#0f172a"
  },
  seo: {
    siteTitle: "Blevon | Boutique Web Design & Engineering Agency",
    siteDescription: "We design and build fast, responsive, and growth-focused web experiences.",
    keywords: "web design, react, next.js, digital agency",
    canonicalUrl: "https://blevon.in",
    ogImage: ""
  },
  analytics: {
    googleAnalytics: "",
    googleTagManager: "",
    metaPixel: ""
  },
  business: {
    workingHours: "Monday - Friday, 9am - 6pm",
    timezone: "Asia/Kolkata",
    currency: "INR"
  }
};

export default function SettingsCMSPage() {
  const supabase = useMemo(() => createClient(), []);

  // Navigation states
  const [activeSection, setActiveSection] = useState("company");
  const [dbRowId, setDbRowId] = useState<string | null>(null);

  // Form data state
  const [originalData, setOriginalData] = useState<any>(null);
  const [currentData, setCurrentData] = useState<any>(null);

  // Status states
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasChanges = originalData !== null && currentData !== null && JSON.stringify(originalData) !== JSON.stringify(currentData);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasChanges) {
        e.preventDefault();
        e.returnValue = "You have unsaved changes. Discard and leave?";
        return "You have unsaved changes. Discard and leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasChanges]);

  const fetchSettingsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: fetchErr } = await supabase
        .from("site_settings")
        .select("*")
        .maybeSingle();

      if (fetchErr) {
        throw new Error(fetchErr.message);
      }

      if (data) {
        setDbRowId(data.id);
        const merged = {
          ...defaultSettings,
          ...(data.settings || {}),
        };
        setOriginalData(merged);
        setCurrentData(merged);
      } else {
        // Fallback to defaults
        setOriginalData(defaultSettings);
        setCurrentData(defaultSettings);
      }
    } catch (err: any) {
      console.error("Settings fetch error:", err);
      setError("Failed to fetch settings from Supabase. Verify table public.site_settings exists.");
    } finally {
      setIsLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchSettingsData();
  }, [fetchSettingsData]);

  const handleSave = async () => {
    if (!currentData) return;
    setIsSaving(true);

    try {
      // Validate email if editing contact
      if (currentData.contact?.email && !/\S+@\S+\.\S+/.test(currentData.contact.email)) {
        alert("Please input a valid contact email address.");
        setIsSaving(false);
        return;
      }

      const payload: any = {
        settings: currentData,
        updated_at: new Date().toISOString()
      };

      if (dbRowId) {
        payload.id = dbRowId;
      }

      const { data, error: saveErr } = await supabase
        .from("site_settings")
        .upsert(payload)
        .select()
        .single();

      if (saveErr) {
        throw new Error(saveErr.message);
      }

      if (data) {
        setDbRowId(data.id);
      }

      setOriginalData(currentData);
      alert("Settings saved successfully!");
    } catch (err: any) {
      console.error("Settings save error:", err);
      alert("Failed to save settings. Ensure your database site_settings schema matches SQL definitions.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDiscard = () => {
    const confirmDiscard = window.confirm("Are you sure you want to discard your changes?");
    if (confirmDiscard) {
      setCurrentData(originalData);
    }
  };

  const updateSubData = (key: string, updatedSubSection: any) => {
    setCurrentData((prev: any) => ({
      ...prev,
      [key]: updatedSubSection,
    }));
  };

  const renderEditor = () => {
    if (!currentData) return null;

    switch (activeSection) {
      case "company":
        return (
          <CompanySettings 
            data={currentData.company} 
            onChange={(updated) => updateSubData("company", updated)} 
          />
        );
      case "contact":
        return (
          <ContactSettings 
            data={currentData.contact} 
            onChange={(updated) => updateSubData("contact", updated)} 
          />
        );
      case "social":
        return (
          <SocialSettings 
            data={currentData.social} 
            onChange={(updated) => updateSubData("social", updated)} 
          />
        );
      case "branding":
        return (
          <BrandingSettings 
            data={currentData.branding} 
            onChange={(updated) => updateSubData("branding", updated)} 
          />
        );
      case "seo":
        return (
          <SeoSettings 
            data={currentData.seo} 
            onChange={(updated) => updateSubData("seo", updated)} 
          />
        );
      case "analytics":
        return (
          <AnalyticsSettings 
            data={currentData.analytics} 
            onChange={(updated) => updateSubData("analytics", updated)} 
          />
        );
      case "business":
        return (
          <BusinessSettings 
            data={currentData.business} 
            onChange={(updated) => updateSubData("business", updated)} 
          />
        );
      default:
        return (
          <div className="text-[14px] text-slate-500 font-medium">
            Editor not configured for this section.
          </div>
        );
    }
  };

  const getSectionTitle = () => {
    const titles: Record<string, string> = {
      company: "Company Information",
      contact: "Contact Information",
      social: "Social Links",
      branding: "Branding Configuration",
      seo: "SEO Defaults",
      analytics: "Analytics & Tracking Scripts",
      business: "Business Configurations",
    };
    return titles[activeSection] || "Settings CMS";
  };

  return (
    <AdminLayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-8 select-none">
        
        {/* Title widget */}
        <div className="space-y-1">
          <h1 className="text-[26px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Site Settings
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">
            Configure global branding, tracking codes, currency definitions, and social links.
          </p>
        </div>

        {error ? (
          <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-12 text-center flex flex-col items-center justify-center space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.008)] min-h-[300px]">
            <div className="h-12 w-12 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[16px] font-bold text-[#0F172A]">
                Unable to load Settings
              </h3>
              <p className="text-[13.5px] text-slate-400 font-medium max-w-sm mx-auto leading-relaxed">
                {error}
              </p>
            </div>
            <button
              onClick={fetchSettingsData}
              className="h-10 rounded-[12px] bg-[#2563EB] text-white text-[14px] font-semibold flex items-center justify-center px-5 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-blue-500/15"
            >
              Retry
            </button>
          </div>
        ) : isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Sidebar navigation */}
            <SettingsSidebar 
              activeSection={activeSection} 
              onSectionChange={setActiveSection}
              hasChanges={hasChanges}
            />

            {/* Right Editor card */}
            <div className="flex-grow bg-white border border-[#E2E8F0] rounded-[20px] p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.005)] w-full">
              <h2 className="text-[17px] font-extrabold text-[#0F172A] tracking-tight mb-6 pb-4 border-b border-slate-100">
                {getSectionTitle()}
              </h2>
              {renderEditor()}
            </div>

          </div>
        )}

        {/* Floating actions bar */}
        <SaveBar
          hasChanges={hasChanges}
          onSave={handleSave}
          onDiscard={handleDiscard}
          isSaving={isSaving}
        />

      </div>
    </AdminLayoutWrapper>
  );
}
