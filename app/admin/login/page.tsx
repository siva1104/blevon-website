import LoginForm from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50/50">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-blue-50/30 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-50/30 blur-3xl" />

      <LoginForm />
      
    </main>
  );
}
