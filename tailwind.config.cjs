/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blevon: {
          blue: "#2457E6",
          "blue-hover": "#1B46C8",
          "blue-light": "#F3F7FF",
          navy: "#101B3A",
          "navy-deep": "#0A1128",
          grey: "#F7F8FC",
          dark: "#151B2C",
          muted: "#68738A",
          border: "#E5E9F2",
        },
      },
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "22": "5.5rem",
      },
      opacity: {
        "8": "0.08",
        "12": "0.12",
        "35": "0.35",
        "92": "0.92",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "2xs": "0 1px 2px 0 rgba(16, 27, 58, 0.04)",
        xs: "0 1px 3px 0 rgba(16, 27, 58, 0.06), 0 1px 2px -1px rgba(16, 27, 58, 0.04)",
        "premium-sm": "0 2px 8px -2px rgba(16, 27, 58, 0.05), 0 1px 3px -1px rgba(16, 27, 58, 0.03)",
        "premium-md": "0 12px 32px -8px rgba(16, 27, 58, 0.08), 0 4px 12px -2px rgba(36, 87, 230, 0.04)",
        "premium-lg": "0 24px 48px -12px rgba(16, 27, 58, 0.12), 0 8px 20px -4px rgba(36, 87, 230, 0.06)",
        "premium-blue": "0 14px 30px -6px rgba(36, 87, 230, 0.32)",
        "premium-card": "0 4px 20px -2px rgba(16, 27, 58, 0.05)",
      },
    },
  },
};
