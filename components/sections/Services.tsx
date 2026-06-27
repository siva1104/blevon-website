"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    image: "/service-business.png",
    title: "Business Websites",
    description: "Modern websites designed to showcase your business professionally.",
  },
  {
    image: "/service-ecommerce.png",
    title: "E-Commerce Websites",
    description: "Online stores built for seamless shopping and better conversions.",
  },
  {
    image: "/service-corporate.png",
    title: "Corporate Websites",
    description: "Professional corporate websites that strengthen your brand identity.",
  },
  {
    image: "/service-healthcare.png",
    title: "Healthcare Websites",
    description: "Custom websites for clinics, hospitals, and healthcare professionals.",
  },
  {
    image: "/service-landing.png",
    title: "Landing Pages",
    description: "Conversion-focused landing pages for products, campaigns, and lead generation.",
  },
  {
    image: "/service-custom.png",
    title: "Custom Web Solutions",
    description: "Tailor-made websites built around your unique business requirements.",
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

export default function Services() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-white py-14 lg:py-20 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#2563EB] mb-2.5 block">
            SERVICES
          </span>
          <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] mb-4">
            Our Services
          </h2>
          <p className="text-[16px] lg:text-[18px] font-normal leading-[1.7] text-[#64748B] max-w-[680px] mx-auto">
            Professional website solutions tailored to help your business establish a strong online presence and grow with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative flex flex-col justify-between h-full bg-white rounded-[20px] border border-[#E2E8F0] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:border-[#2563EB] transition-all duration-300 ease-out hover:-translate-y-2 cursor-pointer min-h-[360px]"
              >
                <div>
                  {/* Realistic Image showcase header */}
                  <div className="relative w-full aspect-[16/10] rounded-[14px] overflow-hidden mb-6 border border-slate-100 bg-slate-50 shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-[22px] font-bold text-[#0F172A] mb-2.5 leading-[1.3]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[16px] font-normal leading-[1.6] text-[#64748B]">
                    {service.description}
                  </p>
                </div>

                {/* Invisible navigation link overlay */}
                <Link href="#contact" className="absolute inset-0 z-10" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
