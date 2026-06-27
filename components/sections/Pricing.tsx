"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "Perfect for startups needing high-impact landing pages or simple websites.",
    monthlyPrice: 1499,
    yearlyPrice: 1199,
    features: [
      "Bespoke single-page landing layout",
      "Custom Figma UI/UX wireframes",
      "Next.js & Tailwind engineering",
      "Basic SEO metadata configuration",
      "7-day average delivery cycles",
      "Standard email support support"
    ],
    cta: "Start Project",
    highlight: false,
    color: "border-slate-200 bg-white"
  },
  {
    name: "Business",
    description: "Best for growing brands and SaaS platforms requiring complex multi-page apps.",
    monthlyPrice: 3499,
    yearlyPrice: 2799,
    features: [
      "Custom multi-page website (up to 8 pages)",
      "Dedicated UI design system & assets",
      "Headless CMS integration (Sanity/Wordpress)",
      "Advanced SEO & conversion tracking setup",
      "Dedicated Slack communication channel",
      "3-day rapid sprint delivery cycles",
      "Active monthly maintenance support"
    ],
    cta: "Start Project",
    highlight: true,
    color: "border-primary bg-slate-950 text-white shadow-xl shadow-blue-100/10"
  },
  {
    name: "Premium",
    description: "Designed for full-scale e-commerce architectures and custom SaaS portals.",
    monthlyPrice: 6999,
    yearlyPrice: 5599,
    features: [
      "Unlimited pages & complex application portals",
      "Headless commerce setup (Shopify/Stripe)",
      "High-end Framer Motion micro-interactions",
      "Full API integrations & automation pipelines",
      "Priority 24/7 developer contact channel",
      "Weekly strategic alignment call sessions",
      "Continuous feature rollouts"
    ],
    cta: "Start Project",
    highlight: false,
    color: "border-slate-200 bg-white"
  }
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-32 border-b border-slate-100">
      
      {/* Background glow decorator */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Flexible Pricing
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold tracking-tight text-slate-900 leading-tight">
            Transparent Pricing Built For Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Choose a plan that fits your current requirements. Upgrade or pause service at any time.
          </p>
        </div>

        {/* Billing Toggle Bar */}
        <div className="flex justify-center mb-16">
          <div className="relative flex rounded-full bg-slate-100 p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`relative rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                billingPeriod === "monthly" ? "text-slate-900" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {billingPeriod === "monthly" && (
                <motion.span
                  layoutId="billingToggle"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-white shadow-sm"
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`relative rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                billingPeriod === "yearly" ? "text-slate-900" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {billingPeriod === "yearly" && (
                <motion.span
                  layoutId="billingToggle"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-white shadow-sm"
                />
              )}
              <span className="relative z-10 flex items-center gap-1">
                Yearly
                <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[9px] font-extrabold text-primary">
                  Save 20%
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => {
            const price = billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                  plan.highlight
                    ? "border-primary bg-slate-950 text-white lg:scale-[1.03] lg:-translate-y-1 shadow-lg shadow-blue-500/5"
                    : "border-slate-200 bg-white text-slate-900"
                }`}
              >
                {/* Popular Badge on Highlighted Plan */}
                {plan.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-extrabold tracking-wide text-white uppercase shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  {/* Plan Name & Description */}
                  <h3 className={`text-xl font-extrabold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-2 text-[14px] leading-relaxed ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-6 flex items-baseline gap-1.5 border-b border-slate-100/10 pb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      ${price.toLocaleString()}
                    </span>
                    <span className={`text-xs font-semibold ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                      / month
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="mt-8 flex flex-col gap-4">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-[14px]">
                        <Check className={`h-4.5 w-4.5 shrink-0 ${plan.highlight ? "text-primary" : "text-emerald-500"}`} />
                        <span className={plan.highlight ? "text-slate-300" : "text-slate-600"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-10">
                  <Button
                    asChild
                    className={`w-full h-12 rounded-xl text-base font-semibold transition-all duration-300 group ${
                      plan.highlight
                        ? "bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/20"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    <Link href="#contact" className="flex items-center justify-center gap-1.5">
                      {plan.cta}
                      <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <p className={`mt-3.5 text-center text-xs ${plan.highlight ? "text-slate-500" : "text-slate-400"}`}>
                    No long term contract. Pause or cancel anytime.
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
