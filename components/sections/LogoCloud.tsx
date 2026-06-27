"use client";


const companies = [
  {
    name: "Stripe",
    logo: (
      <svg viewBox="0 0 80 34" fill="currentColor" className="h-6 w-auto text-slate-400 hover:text-slate-600 transition-colors duration-300">
        <path d="M4.7 15.6c0-3.3 2.5-5.8 6.5-5.8 4.2 0 6.6 2.4 6.6 5.8v10.9h-4.3V15.9c0-1.4-.9-2.3-2.3-2.3-1.4 0-2.3.9-2.3 2.3v10.7H4.7V15.6zm19.9-4.8H21V7.5l4.3-1.3v4.6h3.8v3.6h-3.8v7.6c0 1.2.7 1.8 1.8 1.8.7 0 1.2-.2 1.6-.4v3.6c-.6.3-1.6.5-2.7.5-3.3 0-5-1.7-5-4.8v-8.9zm13.1-6c2.4 0 4.1.8 4.1.8l-1.1 3.4s-1.3-.6-2.7-.6c-1.6 0-2.3.7-2.3 1.8 0 2.9 8.2 2.1 8.2 8.4 0 3.7-3 6.1-7.8 6.1-2.9 0-5.1-1-5.1-1l1.2-3.4s1.7.9 3.6.9c1.9 0 2.6-.8 2.6-1.8 0-3-8.2-2.1-8.2-8.3 0-3.9 3.2-6.3 7.8-6.3zm13.4.2h4.3v21.5h-4.3V5zm10.7 0h4.3v3.7h-.1c.7-1.2 2-4.1 5.9-4.1.6 0 1.3.1 1.7.3v4.1c-.6-.3-1.5-.4-2.4-.4-3.1 0-5.1 2.2-5.1 5.4v12.5h-4.3V5zm21.4 10.9c0 3.5-2.6 6.1-6.1 6.1-1.6 0-3-.6-3.8-1.7h-.1v8.2h-4.3V5h4.3v3.5h.1c.8-1.2 2.2-3.9 3.8-3.9 3.5 0 6.1 2.6 6.1 6.3zm-4.3.1c0-1.8-1.1-2.9-2.6-2.9-1.5 0-2.6 1.1-2.6 2.9 0 1.7 1.1 2.9 2.6 2.9 1.5 0 2.6-1.2 2.6-2.9z" />
      </svg>
    ),
  },
  {
    name: "Linear",
    logo: (
      <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors duration-300">
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-auto">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2h11.586L3 16.586V10a1 1 0 10-2 0v9a1 1 0 001 1h9a1 1 0 100-2H5.414L17 6.414V13a1 1 0 102 0V4a1 1 0 00-1-1H3z" clipRule="evenodd" />
        </svg>
        <span className="font-semibold text-sm tracking-widest uppercase">Linear</span>
      </div>
    ),
  },
  {
    name: "Vercel",
    logo: (
      <svg viewBox="0 0 116 26" fill="currentColor" className="h-5 w-auto text-slate-400 hover:text-slate-600 transition-colors duration-300">
        <path d="M11.6 0L23.2 20H0L11.6 0zM35.3 12.3c0-3.3 2.1-5.7 5.4-5.7 3.2 0 5.3 2.4 5.3 5.7H35.3zm14.3.4c.2-5 3.3-8.8 8.6-8.8s8.4 3.7 8.6 8.8H49.6zm22.4-7.5V1.2h3.6v4h-3.6zM88.7.6l10.8 19.6h-4.2L88.7 8.3v11.9h-3.6V.6h3.6zm16.5 0v19.6h-3.6V.6h3.6z" />
      </svg>
    ),
  },
  {
    name: "Framer",
    logo: (
      <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors duration-300">
        <svg viewBox="0 0 50 74" fill="currentColor" className="h-5.5 w-auto">
          <path d="M0 0h50v24.67H25.33L0 50V25.33h24.67L50 0H0v24.67h25.33L0 50V25.33h24.67L50 0z" />
        </svg>
        <span className="font-bold text-[15px] tracking-wide">Framer</span>
      </div>
    ),
  },
  {
    name: "Figma",
    logo: (
      <div className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors duration-300">
        <svg viewBox="0 0 34 50" fill="currentColor" className="h-5.5 w-auto">
          <path d="M8.5 0C3.81 0 0 3.81 0 8.5C0 13.19 3.81 17 8.5 17H17V8.5C17 3.81 13.19 0 8.5 0ZM8.5 17C3.81 17 0 20.81 0 25.5C0 30.19 3.81 34 8.5 34C13.19 34 17 30.19 17 25.5V17H8.5ZM8.5 34C3.81 34 0 37.81 0 42.5C0 47.19 3.81 51 8.5 51C13.19 51 17 47.19 17 42.5V34H8.5ZM25.5 17C30.19 17 34 13.19 34 8.5C34 3.81 30.19 0 25.5 0C20.81 0 17 3.81 17 8.5V17H25.5ZM25.5 34C30.19 34 34 30.19 34 25.5C34 20.81 30.19 17 25.5 17H17V25.5C17 30.19 20.81 34 25.5 34Z" />
        </svg>
        <span className="font-semibold text-sm tracking-tight">Figma</span>
      </div>
    ),
  },
  {
    name: "Webflow",
    logo: (
      <svg viewBox="0 0 80 20" fill="currentColor" className="h-4 w-auto text-slate-400 hover:text-slate-600 transition-colors duration-300">
        <path d="M4.6 20c-2.3 0-3.9-1.2-4.5-3.3L0 16.5l.7-2.3.1.2c.4 1.4 1.2 2 2.7 2h.2c1.8 0 3-1.2 3.8-3.4L2.8.2h3.1l2.8 11.2h.1L11.5.2h3l-6.1 16.3C7.6 18.8 6.4 20 4.6 20zm14.3-3.6c-2.7 0-4.6-2.1-4.6-5.2 0-3.2 2.1-5.4 4.8-5.4 2.8 0 4.5 2.1 4.5 5.2 0 .4 0 .7-.1 1.1h-5.8c.2 1.8 1.4 2.7 2.8 2.7 1.4 0 2.3-.6 2.8-1.8l.6 1.4c-.9 1.4-2.3 2-5 2zm10.7 3.2V5.8h2.3v1.8h.1c.4-.8 1.3-1.8 3-1.8 1.8 0 3.2 1.3 3.2 3.7v10.5h-2.9V10c0-1.3-.7-2-1.9-2-1.2 0-2 .8-2 2.3v9.7h-2.9v-.4z" />
      </svg>
    ),
  },
];

// Duplicate list for infinite scrolling
const marqueeItems = [...companies, ...companies, ...companies, ...companies];

export default function LogoCloud() {
  return (
    <section className="w-full bg-slate-50/50 py-10 border-y border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Trusted by high-growth startups and established brands
        </p>

        {/* Marquee viewport */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex w-max gap-16 animate-marquee hover:[animation-play-state:paused] py-2">
            {marqueeItems.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center shrink-0"
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
