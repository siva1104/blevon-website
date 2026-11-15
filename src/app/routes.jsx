import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "@/features/home/HomePage";
import WorkPage from "@/features/portfolio/WorkPage";
import CaseStudyPage from "@/features/case-studies/CaseStudyPage";
import AboutPage from "@/features/about/AboutPage";
import ContactPage from "@/features/contact/ContactPage";
import ServicesHubPage from "@/features/services/ServicesHubPage";
import ServiceDetailPage from "@/features/services/ServiceDetailPage";
import DemoDetailPage from "@/features/demos/DemoDetailPage";
import PrivacyPolicyPage from "@/features/legal/PrivacyPolicyPage";
import TermsAndConditionsPage from "@/features/legal/TermsAndConditionsPage";
import RefundPolicyPage from "@/features/legal/RefundPolicyPage";
import NotFoundPage from "@/features/not-found/NotFoundPage";

export function AppRoutes() {
  return (
    <Routes>
      {/* Core Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<WorkPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/demos/:slug" element={<DemoDetailPage />} />
      <Route path="/case-study" element={<CaseStudyPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Services Hub & 8 Dedicated Service Pages */}
      <Route path="/services" element={<ServicesHubPage />} />
      <Route
        path="/services/website-development"
        element={<ServiceDetailPage forcedSlug="website-development" />}
      />
      <Route
        path="/services/web-development"
        element={<ServiceDetailPage forcedSlug="website-development" />}
      />
      <Route
        path="/services/business-website-development"
        element={<ServiceDetailPage forcedSlug="business-website-development" />}
      />
      <Route
        path="/services/ecommerce-website-development"
        element={<ServiceDetailPage forcedSlug="ecommerce-website-development" />}
      />
      <Route
        path="/services/android-app-development"
        element={<ServiceDetailPage forcedSlug="android-app-development" />}
      />
      <Route
        path="/services/app-development"
        element={<ServiceDetailPage forcedSlug="android-app-development" />}
      />
      <Route
        path="/services/ios-app-development"
        element={<ServiceDetailPage forcedSlug="ios-app-development" />}
      />
      <Route
        path="/services/ecommerce-mobile-app-development"
        element={<ServiceDetailPage forcedSlug="ecommerce-mobile-app-development" />}
      />
      <Route
        path="/services/ui-ux-design"
        element={<ServiceDetailPage forcedSlug="ui-ux-design" />}
      />
      <Route
        path="/services/custom-web-application-development"
        element={<ServiceDetailPage forcedSlug="custom-web-application-development" />}
      />
      <Route
        path="/services/packages"
        element={<ServiceDetailPage forcedSlug="packages" />}
      />
      <Route
        path="/packages"
        element={<ServiceDetailPage forcedSlug="packages" />}
      />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />

      {/* Legal Pages & Aliases */}
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
      <Route path="/refund-policy" element={<RefundPolicyPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsAndConditionsPage />} />
      <Route path="/refund" element={<RefundPolicyPage />} />

      {/* Custom 404 Error Page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
