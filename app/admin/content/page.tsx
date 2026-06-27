"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminLayoutWrapper from "@/components/admin/AdminLayoutWrapper";
import ContentSidebar from "@/components/admin/content/ContentSidebar";
import SaveBar from "@/components/admin/content/SaveBar";
import LoadingSkeleton from "@/components/admin/content/LoadingSkeleton";

// Section Editors
import HeroEditor from "@/components/admin/content/HeroEditor";
import AboutEditor from "@/components/admin/content/AboutEditor";
import ServicesEditor from "@/components/admin/content/ServicesEditor";
import WhyChooseEditor from "@/components/admin/content/WhyChooseEditor";
import ProcessEditor from "@/components/admin/content/ProcessEditor";
import PortfolioEditor from "@/components/admin/content/PortfolioEditor";
import ContactEditor from "@/components/admin/content/ContactEditor";
import FooterEditor from "@/components/admin/content/FooterEditor";
import SeoEditor from "@/components/admin/content/SeoEditor";

import { AlertCircle } from "lucide-react";

const getDefaultsForSection = (key: string) => {
  switch (key) {
    case "hero":
      return { title: "", subtitle: "", primary_btn: "", secondary_btn: "", bg_image: "" };
    case "about":
      return { title: "", description: "", image: "", mission: "", vision: "" };
    case "services":
      return { title: "", subtitle: "", services: [] };
    case "why_choose_us":
      return { title: "", subtitle: "", features: [] };
    case "process":
      return { title: "", subtitle: "", steps: [] };
    case "portfolio":
      return { title: "", subtitle: "", show_featured_only: false, projects_per_page: 6 };
    case "contact":
      return { title: "", subtitle: "", business_email: "", phone_number: "", address: "", google_maps_url: "", whatsapp_number: "", working_hours: "" };
    case "footer":
      return { company_description: "", copyright: "", socials: { facebook: "", instagram: "", linkedin: "", github: "", x: "", youtube: "" } };
    case "seo":
      return { homepage_title: "", homepage_description: "", keywords: "", og_title: "", og_description: "", og_image: "", canonical_url: "", robots: "index, follow" };
    default:
      return {};
  }
};

export default function ContentCMSPage() {
  const supabase = createClient();

  // Navigation states
  const [activeSection, setActiveSection] = useState("hero");

  // Content states
  const [originalData, setOriginalData] = useState<any>(null);
  const [currentData, setCurrentData] = useState<any>(null);

  // Status states
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Warn on tab leave/refresh if there are unsaved changes
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

  const fetchSectionData = useCallback(async (sectionKey: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: fetchErr } = await supabase
        .from("site_content")
        .select("*")
        .eq("section_key", sectionKey)
        .maybeSingle();

      if (fetchErr) {
        throw new Error(fetchErr.message);
      }

      const defaultData = getDefaultsForSection(sectionKey);
      
      if (data) {
        // Build a unified object representing the form state
        const combined = {
          title: data.title || "",
          subtitle: data.subtitle || "",
          ...defaultData,
          ...(data.content || {}),
        };
        setOriginalData(combined);
        setCurrentData(combined);
      } else {
        // No record exists yet, prepare defaults
        const blank = {
          title: "",
          subtitle: "",
          ...defaultData,
        };
        setOriginalData(blank);
        setCurrentData(blank);
      }
    } catch (err: any) {
      console.error("CMS section fetch error:", err);
      setError("Failed to fetch site content for this section. Check network and retry.");
    } finally {
      setIsLoading(false);
    }
  }, [supabase]);

  // Fetch section data whenever active section changes
  useEffect(() => {
    fetchSectionData(activeSection);
  }, [activeSection, fetchSectionData]);

  const handleSave = async () => {
    if (!currentData) return;
    setIsSaving(true);

    try {
      // Validate inputs
      const validationError = validateData(activeSection, currentData);
      if (validationError) {
        alert(validationError);
        setIsSaving(false);
        return;
      }

      // Structure data to save
      // Strip title and subtitle into dedicated columns, store rest in content
      const { title: saveTitle, subtitle: saveSubtitle, ...restContent } = currentData;

      const payload = {
        section_key: activeSection,
        title: saveTitle || null,
        subtitle: saveSubtitle || null,
        content: restContent,
        updated_at: new Date().toISOString()
      };

      const { error: saveErr } = await supabase
        .from("site_content")
        .upsert(payload, { onConflict: "section_key" });

      if (saveErr) {
        throw new Error(saveErr.message);
      }

      // Sync form state
      setOriginalData(currentData);
      alert("Changes saved successfully!");
    } catch (err: any) {
      console.error("CMS save failure:", err);
      alert("Failed to save changes. Ensure database site_content schema is fully active.");
    } finally {
      setIsSaving(false);
    }
  };

  const validateData = (sectionKey: string, val: any): string | null => {
    // Email validations
    if (sectionKey === "contact") {
      if (val.business_email && !/\S+@\S+\.\S+/.test(val.business_email)) {
        return "Please input a valid business email address.";
      }
      if (val.google_maps_url && !val.google_maps_url.startsWith("http")) {
        return "Maps link must start with http:// or https://";
      }
    }
    
    // URL validations
    if (sectionKey === "seo") {
      if (!val.homepage_title.trim()) {
        return "Homepage title is required.";
      }
      if (val.canonical_url && !val.canonical_url.startsWith("http")) {
        return "Canonical URL must start with http:// or https://";
      }
    }

    return null;
  };

  const handleDiscard = () => {
    const confirmDiscard = window.confirm("Are you sure you want to discard your changes?");
    if (confirmDiscard) {
      setCurrentData(originalData);
    }
  };

  // Render correct editor component based on selection
  const renderEditor = () => {
    if (!currentData) return null;

    switch (activeSection) {
      case "hero":
        return <HeroEditor data={currentData} onChange={setCurrentData} />;
      case "about":
        return <AboutEditor data={currentData} onChange={setCurrentData} />;
      case "services":
        return <ServicesEditor data={currentData} onChange={setCurrentData} />;
      case "why_choose_us":
        return <WhyChooseEditor data={currentData} onChange={setCurrentData} />;
      case "process":
        return <ProcessEditor data={currentData} onChange={setCurrentData} />;
      case "portfolio":
        return <PortfolioEditor data={currentData} onChange={setCurrentData} />;
      case "contact":
        return <ContactEditor data={currentData} onChange={setCurrentData} />;
      case "footer":
        return <FooterEditor data={currentData} onChange={setCurrentData} />;
      case "seo":
        return <SeoEditor data={currentData} onChange={setCurrentData} />;
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
      hero: "Hero Section Content",
      about: "About Section Content",
      services: "Services Cards Scoping",
      why_choose_us: "Why Choose Us Highlights",
      process: "Development Process Steps",
      portfolio: "Portfolio Page Configurations",
      contact: "Contact Business Details",
      footer: "Footer Copy & Social Handles",
      seo: "Homepage Search Engine Optimization",
    };
    return titles[activeSection] || "CMS Editor";
  };

  return (
    <AdminLayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-8 select-none">
        
        {/* Title widget */}
        <div className="space-y-1">
          <h1 className="text-[26px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Website Content CMS
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">
            Configure homepage copywriting, social links, process maps, and meta tags.
          </p>
        </div>

        {error ? (
          <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-12 text-center flex flex-col items-center justify-center space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.008)] min-h-[300px]">
            <div className="h-12 w-12 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[16px] font-bold text-[#0F172A]">
                Unable to load CMS content
              </h3>
              <p className="text-[13.5px] text-slate-400 font-medium max-w-sm mx-auto leading-relaxed">
                {error}
              </p>
            </div>
            <button
              onClick={() => fetchSectionData(activeSection)}
              className="h-10 rounded-[12px] bg-[#2563EB] text-white text-[14px] font-semibold flex items-center justify-center px-5 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-blue-500/15"
            >
              Retry
            </button>
          </div>
        ) : isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Nav Menu */}
            <ContentSidebar 
              activeSection={activeSection} 
              onSectionChange={setActiveSection}
              hasChanges={hasChanges}
            />

            {/* Right Editor form */}
            <div className="flex-grow bg-white border border-[#E2E8F0] rounded-[20px] p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.005)] w-full">
              <h2 className="text-[17px] font-extrabold text-[#0F172A] tracking-tight mb-6 pb-4 border-b border-slate-100">
                {getSectionTitle()}
              </h2>
              {renderEditor()}
            </div>

          </div>
        )}

        {/* Floating Save/Discard Actions Bar */}
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
