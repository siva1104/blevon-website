"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    image: "/partner-transparent.png",
    title: "Transparent Process",
    description: "Stay informed at every stage with clear communication, defined milestones, and complete project visibility.",
  },
  {
    image: "/partner-tailored.png",
    title: "Tailored Solutions",
    description: "Every website is thoughtfully designed around your brand, audience, and business objectives.",
  },
  {
    image: "/partner-performance.png",
    title: "Performance First",
    description: "Fast-loading, responsive, and optimized websites that deliver an exceptional user experience.",
  },
  {
    image: "/partner-future.png",
    title: "Future Ready",
    description: "Scalable, secure, and built using modern technologies to support your business as it grows.",
  },
  {
    image: "/partner-details.png",
    title: "Attention to Detail",
    description: "Every layout, interaction, and visual element is carefully crafted to create a polished digital experience.",
  },
  {
    image: "/partner-results.png",
    title: "Results Driven",
    description: "Designed to generate more leads, improve engagement, and convert visitors into customers.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function WhyChoose() {
  return (
    <section id="why-choose" className="relative w-full overflow-hidden bg-white py-14 lg:py-20 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#2563EB] mb-2.5 block">
            WHY BLEVON
          </span>
          <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] mb-4">
            Why Businesses Choose to Work With Us
          </h2>
          <p className="text-[16px] lg:text-[18px] font-normal leading-[1.7] text-[#64748B] max-w-[680px] mx-auto">
            We combine strategy, creativity, and technology to build high-performing websites that help businesses stand out, build trust, and grow with confidence.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => {
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative flex gap-5 items-start bg-[#FFFFFF] rounded-[20px] border border-[#E2E8F0] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.05)] hover:border-[#2563EB] transition-all duration-300 ease-out hover:-translate-y-1 cursor-default"
              >
                {/* Square 1:1 Image Thumbnail */}
                <div className="relative h-[72px] w-[72px] rounded-xl overflow-hidden border border-slate-100 bg-slate-50 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  {/* Card Title */}
                  <h3 className="text-[22px] font-bold text-[#0F172A] mb-1.5 leading-[1.3] group-hover:text-[#2563EB] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[16px] font-normal leading-[1.6] text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
