import React from "react";

export function Badge({
  className = "",
  variant = "default",
  children,
  ...props
}) {
  const variantStyles = {
    default:
      "border-transparent bg-[#2563EB] text-white hover:bg-blue-700",
    secondary:
      "border-transparent bg-[#EAF1FF] text-[#2563EB] font-semibold hover:bg-blue-100",
    destructive:
      "border-transparent bg-red-500 text-white hover:bg-red-600",
    outline:
      "border-[#E4E7EC] text-[#101828] bg-white",
  };

  const style = variantStyles[variant] || variantStyles.default;

  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 ${style} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Badge;
