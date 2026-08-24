/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        brand: ["Outfit", "Plus Jakarta Sans", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
    },
  },
};
