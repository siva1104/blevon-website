import React, { useEffect } from "react";
import { Navbar2 } from "./components/Navbar2";
import { Hero } from "./components/Hero";
import { ParticleConstellation } from "./components/ParticleConstellation";
import { NetworkSphere } from "./components/NetworkSphere";
import { Layout239 } from "./components/Layout239";
import { Portfolio23 } from "./components/Portfolio23";
import { WhyBlevon } from "./components/WhyBlevon";
import { Layout438 } from "./components/Layout438";
import { TechStack } from "./components/TechStack";
import { AboutSection } from "./components/AboutSection";
import { FaqSection } from "./components/FaqSection";
import { Cta57 } from "./components/Cta57";
import { Footer8 } from "./components/Footer8";

export default function Page() {
  useEffect(() => {
    if (window.location.hash === "#services") {
      const el = document.getElementById("services");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#101828]">
      {/* 01 — NAVBAR (Sticky at top-0 z-50) */}
      <Navbar2 />

      {/* MAIN CONTENT */}
      <main>
        {/* 02 — HERO (Full initial viewport height) */}
        <div className="relative w-full min-h-screen overflow-hidden bg-[#F7F8F6] flex flex-col justify-center">
          {/* Seamless full-height upward blue shade gradient: thickest at bottom, smoothly fading upward into white */}
          <div
            className="pointer-events-none absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(to top, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0.09) 28%, rgba(96, 165, 250, 0.03) 60%, rgba(247, 248, 246, 0) 90%)",
            }}
          />

          <ParticleConstellation />
          <NetworkSphere />
          <Hero />
        </div>

        {/* 03 — WHAT BLEVON DOES (Services) */}
        <Layout239 />

        {/* 04 — SELECTED WORK */}
        <Portfolio23 />

        {/* 05 — WHY BLEVON */}
        <WhyBlevon />

        {/* 06 — PROCESS (How We Work) */}
        <Layout438 />

        {/* 07 — TECHNOLOGY & TOOLS */}
        <TechStack />

        {/* 08 — ABOUT BLEVON */}
        <AboutSection />

        {/* 09 — FAQ */}
        <FaqSection />

        {/* 10 — FINAL CTA */}
        <Cta57 />
      </main>

      {/* 11 — FOOTER */}
      <Footer8 />
    </div>
  );
}
