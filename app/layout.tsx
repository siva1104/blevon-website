import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Blevon | Premium Digital Creative Agency",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable}`} suppressHydrationWarning>
      <body
        className="font-manrope antialiased bg-white text-slate-900"
      >
        {children}
      </body>
    </html>
  );
}