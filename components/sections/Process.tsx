"use client";

import { motion, Variants } from "framer-motion";
import {
  MessageSquare,
  CreditCard,
  FileText,
  FolderOpen,
  Target,
  Palette,
  Code2,
  FlaskConical,
  Wallet,
  Rocket,
  Key,
  PartyPopper,
  ChevronRight,
  ChevronDown,
  Smile
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "Aligning on your business goals and vision."
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Project Confirmation",
    description: "Secure your spot with a 50% deposit."
  },
  {
    number: "03",
    icon: FileText,
    title: "Agreement & Planning",
    description: "Defining scope, timelines, and deliverables."
  },
  {
    number: "04",
    icon: FolderOpen,
    title: "Requirement Collection",
    description: "Gathering your brand assets and content."
  },
  {
    number: "05",
    icon: Target,
    title: "Strategy & Planning",
    description: "Mapping your target audience and objectives."
  },
  {
    number: "06",
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting high-fidelity, user-centric interfaces."
  },
  {
    number: "07",
    icon: Code2,
    title: "Development",
    description: "Building a fast, responsive, secure site."
  },
  {
    number: "08",
    icon: FlaskConical,
    title: "Testing & Review",
    description: "Rigorous quality assurance and feedback."
  },
  {
    number: "09",
    icon: Wallet,
    title: "Final Payment",
    description: "Clearing the final balance for deployment."
  },
  {
    number: "10",
    icon: Rocket,
    title: "Deployment",
    description: "Moving your site to the live environment."
  },
  {
    number: "11",
    icon: Key,
    title: "Website Handover",
    description: "Full transfer of assets, code, and access."
  },
  {
    number: "12",
    icon: PartyPopper,
    title: "Go Live",
    description: "Your site is live and ready for growth."
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const stepVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 }
  }
};

export default function Process() {
  // Row division for desktop S-curve timeline rendering
  const firstRow = steps.slice(0, 6);
  const secondRow = steps.slice(6, 12);

  return (
    <section id="process" className="relative w-full overflow-hidden bg-white py-14 lg:py-20 border-b border-slate-100">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#2563EB] mb-2.5 block">
            OUR PROCESS
          </span>
          <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] mb-4">
            From Idea to Launch
          </h2>
          <p className="text-[16px] lg:text-[18px] font-normal leading-[1.7] text-[#64748B] max-w-[680px] mx-auto">
            A simple, transparent process that turns your vision into a high-performing digital experience.
          </p>
        </div>

        {/* ── DESKTOP SCROLL JOURNEY TIMELINE (Curved S-Path) ── */}
        <div className="relative hidden lg:block max-w-7xl mx-auto mb-16">
          
          {/* BASE LAYOUT TRACK CONNECTOR CHANNELS (Flowing animated SVG) */}
          <svg 
            className="absolute inset-0 w-full h-[338px] pointer-events-none hidden lg:block -z-10"
            viewBox="0 0 100 338"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
            
            {/* Background static line */}
            <path
              d="M 8.33 43 L 91.66 43 C 98.5 43, 98.5 169, 91.66 169 L 8.33 169 C 1.5 169, 1.5 295, 8.33 295 L 91.66 295"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
              strokeOpacity="0.25"
              vectorEffect="non-scaling-stroke"
            />
            
            {/* Flowing animated dash line */}
            <path
              d="M 8.33 43 L 91.66 43 C 98.5 43, 98.5 169, 91.66 169 L 8.33 169 C 1.5 169, 1.5 295, 8.33 295 L 91.66 295"
              fill="none"
              stroke="url(#flow-gradient)"
              strokeWidth="2"
              strokeDasharray="10 15"
              className="animate-flow-dash"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Inline styles for dash flow and arrow sliding animations */}
          <style>{`
            @keyframes flowDash {
              from { stroke-dashoffset: 25; }
              to { stroke-dashoffset: 0; }
            }
            .animate-flow-dash {
              animation: flowDash 2.5s linear infinite;
            }
            @keyframes flowDashVertical {
              from { stroke-dashoffset: 14; }
              to { stroke-dashoffset: 0; }
            }
            .animate-flow-dash-vertical {
              animation: flowDashVertical 1.5s linear infinite;
            }
            @keyframes arrowNudge {
              0%, 100% { transform: translate(50%, -50%) scale(1); }
              50% { transform: translate(65%, -50%) scale(1.05); }
            }
            .animate-arrow-nudge {
              animation: arrowNudge 2s infinite ease-in-out;
            }
            @keyframes arrowFlowDown {
              0% { opacity: 0; transform: translate(-50%, -8px); }
              50% { opacity: 1; }
              100% { opacity: 0; transform: translate(-50%, 8px); }
            }
            .animate-arrow-flow-down {
              animation: arrowFlowDown 2s infinite linear;
            }
          `}</style>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-24"
          >
            {/* ROW 1: Steps 01 to 06 */}
            <div className="grid grid-cols-6 gap-8">
              {firstRow.map((step, idx) => {
                const Icon = step.icon;
                const showArrow = idx < 5;
                return (
                  <motion.div
                    key={step.title}
                    variants={stepVariants}
                    className="flex flex-col items-center group relative"
                  >
                    {/* Node Label (Number) */}
                    <div className="text-[14px] font-bold text-[#2563EB] mb-2">{step.number}</div>
                    
                    {/* Vertical Connector Top */}
                    <div className="w-[2px] h-4 bg-[#2563EB]/25" />
                    
                    {/* Circle Node on Timeline path */}
                    <div className="h-3.5 w-3.5 rounded-full bg-[#2563EB] border-[3px] border-white shadow-[0_0_10px_rgba(37,99,235,0.4)] z-20 group-hover:scale-120 transition-transform duration-300" />
                    
                    {/* Vertical Connector Bottom */}
                    <div className="w-[2px] h-6 bg-[#2563EB]/25" />

                    {/* Step Card */}
                    <div className="w-full bg-white rounded-[20px] border border-[#E2E8F0] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:border-[#2563EB] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full min-h-[190px] relative">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-[#2563EB] mb-4 group-hover:scale-105 transition-transform">
                        <Icon className="h-5.5 w-5.5 text-[#2563EB]" />
                      </div>
                      <h3 className="text-[20px] font-bold text-[#0F172A] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[15px] font-normal leading-relaxed text-[#64748B]">
                        {step.description}
                      </p>

                      {/* Right flowing arrow (centered vertically relative to card body) */}
                      {showArrow && (
                        <div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-md z-30 animate-arrow-nudge select-none pointer-events-none">
                          <ChevronRight className="h-3.5 w-3.5" />
                          <span className="absolute inset-0 rounded-full bg-[#2563EB]/40 animate-ping pointer-events-none" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ROW 2: Steps 07 to 12 */}
            <div className="grid grid-cols-6 gap-8">
              {secondRow.map((step, idx) => {
                const Icon = step.icon;
                const showArrow = idx < 5;
                return (
                  <motion.div
                    key={step.title}
                    variants={stepVariants}
                    className="flex flex-col items-center group relative"
                  >
                    {/* Node Label (Number) */}
                    <div className="text-[14px] font-bold text-[#2563EB] mb-2">{step.number}</div>
                    
                    {/* Vertical Connector Top */}
                    <div className="w-[2px] h-4 bg-[#2563EB]/25" />
                    
                    {/* Circle Node on Timeline path */}
                    <div className="h-3.5 w-3.5 rounded-full bg-[#2563EB] border-[3px] border-white shadow-[0_0_10px_rgba(37,99,235,0.4)] z-20 group-hover:scale-120 transition-transform duration-300" />
                    
                    {/* Vertical Connector Bottom */}
                    <div className="w-[2px] h-6 bg-[#2563EB]/25" />

                    {/* Step Card */}
                    <div className="w-full bg-white rounded-[20px] border border-[#E2E8F0] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:border-[#2563EB] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full min-h-[190px] relative">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-[#2563EB] mb-4 group-hover:scale-105 transition-transform">
                        <Icon className="h-5.5 w-5.5 text-[#2563EB]" />
                      </div>
                      <h3 className="text-[20px] font-bold text-[#0F172A] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[15px] font-normal leading-relaxed text-[#64748B]">
                        {step.description}
                      </p>

                      {/* Right flowing arrow (centered vertically relative to card body) */}
                      {showArrow && (
                        <div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-md z-30 animate-arrow-nudge select-none pointer-events-none">
                          <ChevronRight className="h-3.5 w-3.5" />
                          <span className="absolute inset-0 rounded-full bg-[#2563EB]/40 animate-ping pointer-events-none" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ── MOBILE / TABLET TIMELINE (Vertical Track) ── */}
        <div className="relative block lg:hidden max-w-xl mx-auto mb-16">
          {/* Vertical central track (Flowing animated SVG) */}
          <svg 
            className="absolute left-[23.5px] top-[24px] bottom-[24px] w-[2px] h-[calc(100%-48px)] pointer-events-none lg:hidden -z-10"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="#2563EB"
              strokeWidth="2"
              strokeOpacity="0.2"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="url(#flow-gradient)"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-flow-dash-vertical"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-8"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isNotLast = index < steps.length - 1;
              return (
                <motion.div
                  key={step.title}
                  variants={stepVariants}
                  className="flex gap-6 items-start relative group"
                >
                  {/* Left Node Dot */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[#2563EB] shrink-0 z-10 transition-all duration-300 group-hover:border-[#2563EB]">
                    <Icon className="h-5.5 w-5.5 text-[#2563EB]" />
                  </div>

                  {/* Mobile Down Arrow between steps */}
                  {isNotLast && (
                    <div className="absolute left-[14px] top-[56px] text-[#2563EB]/40 animate-arrow-flow-down z-20">
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  )}

                  {/* Right Card Panel */}
                  <div className="flex-1 bg-white rounded-[20px] border border-[#E2E8F0] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-[#2563EB] transition-colors duration-300">
                    <span className="text-[14px] font-bold uppercase tracking-widest text-[#2563EB] mb-1.5 block">
                      Step {step.number}
                    </span>
                    <h3 className="text-[20px] font-bold text-[#0F172A] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[15px] font-normal leading-relaxed text-[#64748B]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── BOTTOM HIGHLIGHTS BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-slate-50/50 border border-slate-100 rounded-full py-4.5 px-8 flex flex-col sm:flex-row items-center gap-6 max-w-4xl mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-sm">
              <Smile className="h-5.5 w-5.5" />
            </div>
            <h4 className="text-[15px] font-bold text-[#0F172A] whitespace-nowrap">
              Happy Client, Our Success
            </h4>
          </div>

          <div className="hidden sm:block h-6 w-px bg-slate-200" />

          <div className="flex flex-col">
            <p className="text-[14px] font-semibold text-slate-700 leading-tight">
              We don&apos;t just build websites — we build long-term partnerships.
            </p>
            <p className="text-[13px] text-slate-500 mt-1 leading-none">
              Your success is our ultimate goal.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
