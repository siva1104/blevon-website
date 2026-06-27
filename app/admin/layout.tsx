import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel | Blevon",
  description: "Secure administrator control panel for Blevon.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50/50 text-[#0F172A] font-manrope antialiased">
      {children}
    </div>
  );
}
