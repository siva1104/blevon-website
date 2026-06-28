import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Blevon | Modern Web Design & Development",
  description: "We design and develop modern, high-performance web applications, landing pages, and custom digital products that elevate your brand.",
  keywords: ["digital agency", "web development", "UI/UX design", "Next.js", "premium websites"],
  openGraph: {
    title: "Blevon | Premium Digital Creative Agency",
    description: "Handcrafted web applications, landing pages, and custom digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>

      <GoogleAnalytics gaId="G-QLNTGQW6BJ" />
    </html>
  );
}