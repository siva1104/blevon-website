import React from "react";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { OfferPopup } from "@/components/common/OfferPopup";
import { AmbientBackground } from "@/components/common/AmbientBackground";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <ErrorBoundary>
      <AmbientBackground />
      <div className="relative z-10">
        <ScrollToTop />
        <AppRoutes />
        <FloatingWhatsApp />
        <OfferPopup />
      </div>
    </ErrorBoundary>
  );
}

export default App;
