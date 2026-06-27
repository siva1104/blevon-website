"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 lg:py-20 border-b border-slate-100">
      
      {/* Background radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[600px] rounded-full bg-indigo-50/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          
          <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] mb-4">
            Ready to Build Something Exceptional?
          </h2>
          
          <p className="text-[16px] lg:text-[18px] font-normal leading-[1.7] text-[#64748B] mb-6 max-w-[680px] mx-auto">
            Get in touch today to discuss your project, learn more about our process, and receive a customized website proposal.
          </p>
          <Button
            asChild
            className="rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] px-8 h-12 text-[16px] font-semibold text-white hover:shadow-lg hover:shadow-[#2563EB]/15 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <Link href="#contact" className="flex items-center gap-2">
              Start Your Project
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
