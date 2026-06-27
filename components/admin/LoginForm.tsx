"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClient();

  // State variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        if (signInError.message === "Invalid login credentials") {
          setErrorMessage("Invalid email or password. Please try again.");
        } else {
          setErrorMessage(signInError.message);
        }
        setIsLoading(false);
        return;
      }

      // Successful login
      router.push("/admin/dashboard");
      router.refresh();
    } catch (err: any) {
      console.error("Login failure:", err);
      setErrorMessage("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-[24px] border border-[#E2E8F0] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex flex-col justify-between">
      
      {/* Brand & Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <Link href="/" className="flex items-center gap-2 mb-4">
          <Image
            src="/logo.svg"
            alt="Blevon Logo"
            width={44}
            height={44}
            className="h-9 w-auto object-contain"
          />
          <span className="text-lg font-extrabold text-[#0F172A] tracking-tight">
            Blevon
          </span>
        </Link>
        <h1 className="text-[24px] font-bold text-[#0F172A] leading-tight mb-2">
          Welcome Back
        </h1>
        <p className="text-[14px] text-slate-400 font-medium">
          Sign in to access your administrative control panel.
        </p>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="mb-6 text-[14px] font-semibold text-rose-500 bg-rose-50/50 border border-rose-100/50 rounded-xl p-3 text-center">
          {errorMessage}
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[13px] font-semibold text-slate-700">
            Email Address
          </label>
          <div className="relative">
            <input
              required
              disabled={isLoading}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@blevon.in"
              className="h-11 w-full rounded-[12px] border border-[#E2E8F0] pl-10 pr-4 text-[15px] text-[#0F172A] placeholder:text-slate-400 placeholder:text-[14px] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-400"
            />
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-[13px] font-semibold text-slate-700">
            Password
          </label>
          <div className="relative">
            <input
              required
              disabled={isLoading}
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-11 w-full rounded-[12px] border border-[#E2E8F0] pl-10 pr-10 text-[15px] text-[#0F172A] placeholder:text-slate-400 placeholder:text-[14px] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/5 outline-none transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-400"
            />
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            
            <button
              type="button"
              disabled={isLoading}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>

        {/* Options Row */}
        <div className="flex items-center justify-between text-[13px] pt-1">
          <label className="flex items-center gap-2 font-medium text-slate-500 cursor-pointer select-none">
            <input
              type="checkbox"
              disabled={isLoading}
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]/5 cursor-pointer"
            />
            <span>Remember Me</span>
          </label>
          <button
            type="button"
            className="font-semibold text-[#2563EB] hover:text-[#2563EB]/90 transition-colors"
            onClick={() => alert("Password reset is handled by your system administrator.")}
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-[12px] bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white h-12 text-[15px] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/15 hover:-translate-y-0.5 group flex items-center justify-center gap-2 select-none shrink-0 cursor-pointer disabled:pointer-events-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4.5 w-4.5 animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <span>Sign In to Admin</span>
            )}
          </Button>
        </div>

      </form>
    </div>
  );
}
