"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, User, Quote, AlertCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

interface Testimonial {
  id: string;
  customer_name: string;
  company_name: string;
  designation: string;
  review: string;
  rating: number;
  customer_image: string;
  featured: boolean;
  published: boolean;
  display_order: number;
  created_at: string;
}

export default function Testimonials() {
  const supabase = useMemo(() => createClient(), []);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error: err } = await supabase
          .from("testimonials")
          .select("*")
          .eq("published", true)
          .order("display_order", { ascending: true });

        if (err) throw new Error(err.message);
        setTestimonials(data || []);
      } catch (e: any) {
        console.error("Testimonial fetch error:", e);
        setError("Unable to load testimonials.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchTestimonials();
  }, [supabase]);

  // Card list fade-in animation container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-slate-50/40 py-20 lg:py-32 border-b border-slate-100/80">
      
      {/* Premium blur decorations */}
      <div className="absolute top-1/4 right-0 -z-10 h-80 w-80 rounded-full bg-blue-100/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 -z-10 h-80 w-80 rounded-full bg-indigo-100/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20 text-left select-none">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-3.5 block">
            Testimonials
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-slate-550 font-medium max-w-xl">
            Real feedback from businesses we&rsquo;ve partnered with to create high-quality digital experiences.
          </p>
        </div>

        {/* States Switcher */}
        {isLoading ? (
          /* Loading State: Skeleton Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-[20px] p-6 sm:p-8 space-y-6 h-[280px] animate-pulse"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="h-4.5 w-4.5 bg-slate-150 rounded" />
                  ))}
                </div>
                <div className="space-y-2.5">
                  <div className="h-4 bg-slate-100 rounded-md w-full" />
                  <div className="h-4 bg-slate-100 rounded-md w-5/6" />
                  <div className="h-4 bg-slate-100 rounded-md w-4/5" />
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                  <div className="h-10 w-10 bg-slate-100 rounded-full" />
                  <div className="space-y-1.5">
                    <div className="h-3.5 bg-slate-100 rounded w-24" />
                    <div className="h-3 bg-slate-100 rounded w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          /* Error State */
          <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-12 text-center flex flex-col items-center justify-center space-y-3 shadow-[0_8px_30px_rgba(0,0,0,0.003)] select-none">
            <div className="h-10 w-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
              <AlertCircle className="h-5 w-5" />
            </div>
            <p className="text-[14px] font-bold text-slate-650">
              {error}
            </p>
          </div>
        ) : testimonials.length === 0 ? (
          /* Empty State */
          <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-12 text-center flex flex-col items-center justify-center space-y-3 shadow-[0_8px_30px_rgba(0,0,0,0.003)] select-none">
            <p className="text-[14.5px] font-semibold text-slate-500">
              No testimonials available yet.
            </p>
          </div>
        ) : (
          /* Testimonials Grid */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.025)", borderColor: "#CBD5E1" }}
                className="bg-white border border-slate-100/90 rounded-[20px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.003)] transition-all duration-300 relative group h-full"
              >
                {/* Quote icon overlay */}
                <Quote className="absolute right-6 top-6 h-9 w-9 text-slate-100/50 group-hover:text-slate-150 transition-colors pointer-events-none" />

                <div>
                  {/* Rating selection (Stars based on rating column) */}
                  <div className="flex gap-1 mb-5 select-none">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isActive = star <= item.rating;
                      return (
                        <Star
                          key={star}
                          className={`h-4.5 w-4.5 stroke-1.5 ${
                            isActive ? "fill-amber-400 text-amber-400" : "text-slate-200"
                          }`}
                        />
                      );
                    })}
                  </div>

                  {/* Review Text */}
                  <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-700 italic mb-8">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                {/* Customer Details */}
                <div className="flex items-center gap-4 border-t border-slate-100 pt-5">
                  <div className="relative h-10 w-10 rounded-full border border-slate-100 overflow-hidden bg-slate-50 shrink-0 flex items-center justify-center text-slate-400 select-none">
                    {item.customer_image ? (
                      <Image
                        src={item.customer_image}
                        alt={item.customer_name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-slate-900 leading-tight">
                      {item.customer_name}
                    </span>
                    <span className="text-[11.5px] font-semibold text-slate-500 mt-0.5 leading-none">
                      {item.designation && `${item.designation}, `}
                      <span className="text-[#2563EB]">{item.company_name}</span>
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
