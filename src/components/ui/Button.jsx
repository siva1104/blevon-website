import React from "react";
import { Link } from "react-router-dom";

export function Button({
  variant = "default",
  size = "default",
  to,
  href,
  className = "",
  children,
  onClick,
  type = "button",
  disabled = false,
  target,
  rel,
  ...rest
}) {
  const sizeMap = {
    xs: "h-8 px-3 text-xs rounded-lg gap-1.5",
    "icon-xs": "size-8 p-0 rounded-lg shrink-0 flex items-center justify-center [&_svg]:size-3.5",
    sm: "h-9 px-4 text-xs sm:text-[13px] rounded-xl gap-2",
    "icon-sm": "size-9 p-0 rounded-xl shrink-0 flex items-center justify-center [&_svg]:size-4",
    default: "h-11 px-5 sm:px-6 text-sm rounded-xl gap-2.5",
    icon: "size-11 p-0 rounded-xl shrink-0 flex items-center justify-center [&_svg]:size-4.5",
    lg: "h-12 sm:h-[52px] px-6 sm:px-8 text-[15px] rounded-xl gap-3",
    "icon-lg": "size-12 sm:size-[52px] p-0 rounded-xl shrink-0 flex items-center justify-center [&_svg]:size-5",
    link: "h-auto p-0 text-sm gap-1.5",
  };

  const variantMap = {
    default:
      "bg-[#2457E6] text-white font-semibold shadow-[0_6px_18px_-4px_rgba(36,87,230,0.35)] hover:bg-[#1B46C8] hover:shadow-[0_10px_24px_-4px_rgba(36,87,230,0.45)] active:scale-[0.98]",
    outline:
      "border border-[#E5E9F2] bg-white text-[#151B2C] font-semibold shadow-2xs hover:border-[#2457E6] hover:bg-[#F3F7FF] hover:text-[#2457E6] active:scale-[0.98]",
    secondary:
      "bg-[#F3F7FF] text-[#2457E6] font-semibold hover:bg-[#E5EEFF] hover:text-[#101B3A] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#68738A] hover:bg-[#F7F8FC] hover:text-[#151B2C] active:scale-[0.98]",
    link:
      "bg-transparent text-[#2457E6] font-semibold underline-offset-4 hover:underline p-0",
  };

  const sizeClass = sizeMap[size] || sizeMap.default;
  const variantClass = variantMap[variant] || variantMap.default;

  const baseClasses = `group inline-flex items-center justify-center font-sans whitespace-nowrap select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2457E6] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 group-hover:[&_svg]:translate-x-0.5 ${sizeClass} ${variantClass} ${className}`;

  const destination = to || href;

  if (destination) {
    const isExternal =
      destination.startsWith("http://") ||
      destination.startsWith("https://") ||
      destination.startsWith("mailto:") ||
      destination.startsWith("tel:");

    const isHash = destination.startsWith("#");

    if (isExternal || isHash) {
      return (
        <a
          href={destination}
          className={baseClasses}
          target={target || (isExternal ? "_blank" : undefined)}
          rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
          onClick={onClick}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        to={destination}
        className={baseClasses}
        onClick={onClick}
        target={target}
        rel={rel}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
