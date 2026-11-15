import React from "react";
import { Link } from "react-router-dom";

/**
 * Standardized SVG Icons matching compact 14px precision specifications
 */
export function CTAIcon({ name, className = "" }) {
  if (!name) return null;

  switch (name) {
    case "arrow-up-right":
      return (
        <svg
          className={`size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      );

    case "arrow-right":
      return (
        <svg
          className={`size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );

    case "play":
      return (
        <span
          className={`flex size-4 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 group-hover:scale-105 ${className}`}
          aria-hidden="true"
        >
          <svg
            className="size-1.5 fill-current translate-x-[0.5px]"
            viewBox="0 0 10 12"
            fill="currentColor"
          >
            <path d="M1 1.5L9 6L1 10.5V1.5Z" />
          </svg>
        </span>
      );

    default:
      return null;
  }
}

/**
 * Production-ready unified CTA Button component for Blevon Design System
 * Compact pill geometry, refined medium weight, Obsidian (#0F172A) & Royal Blue (#2457E6)
 */
export function CTAButton({
  variant = "primary",
  theme = "light",
  size = "default",
  to,
  href,
  icon,
  iconPosition,
  fullWidth = false,
  className = "",
  children,
  onClick,
  type = "button",
  disabled = false,
  target,
  rel,
  ...rest
}) {
  const resolvedIconPosition =
    iconPosition || (icon === "play" ? "left" : "right");

  let sizeClasses = "h-10 sm:h-[42px] px-5 text-[13.5px]";
  if (size === "sm") {
    sizeClasses = "h-9 px-4 text-[12.5px]";
  } else if (size === "lg") {
    sizeClasses = "h-10 sm:h-[42px] px-5 text-[13.5px]";
  } else if (size === "link") {
    sizeClasses = "h-auto p-0 text-[13.5px]";
  }

  let variantClasses = "";

  if (variant === "primary") {
    if (theme === "dark") {
      variantClasses =
        "bg-white text-[#0F172A] font-medium shadow-[0_4px_14px_-2px_rgba(0,0,0,0.25)] hover:bg-[#F8FAFC] hover:text-[#2457E6] hover:-translate-y-0.5 active:scale-[0.98]";
    } else {
      variantClasses =
        "bg-[#0F172A] text-white font-medium shadow-[0_4px_14px_-2px_rgba(15,23,42,0.22),inset_0_1px_0_0_rgba(255,255,255,0.18)] hover:bg-[#2457E6] hover:shadow-[0_6px_20px_-3px_rgba(36,87,230,0.35)] hover:-translate-y-0.5 active:scale-[0.98]";
    }
  } else if (variant === "secondary") {
    if (theme === "dark") {
      variantClasses =
        "border border-white/20 bg-white/10 text-white font-medium backdrop-blur-md hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5 active:scale-[0.98]";
    } else {
      variantClasses =
        "border border-[#E2E8F0] bg-white/85 text-[#0F172A] font-medium shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur-md hover:border-[#CBD5E1] hover:bg-[#F8FAFC] hover:text-[#2457E6] hover:-translate-y-0.5 active:scale-[0.98]";
    }
  } else if (variant === "link") {
    variantClasses =
      "bg-transparent text-[#2457E6] hover:text-[#0F172A] font-medium underline-offset-4 hover:underline p-0";
  }

  const baseClasses = `group inline-flex items-center justify-center gap-1.5 rounded-full font-sans tracking-[-0.01em] whitespace-nowrap select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2457E6] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${
    fullWidth ? "w-full sm:w-auto" : ""
  } ${sizeClasses} ${variantClasses} ${className}`;

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") {
      const playBorderClass =
        theme === "dark"
          ? "border-white/40 bg-white/10"
          : "border-blue-200 bg-[#F3F7FF] text-[#2457E6]";
      return (
        <CTAIcon
          name={icon}
          className={icon === "play" ? playBorderClass : ""}
        />
      );
    }
    return icon;
  };

  const content = (
    <>
      {resolvedIconPosition === "left" && renderIcon()}
      <span>{children}</span>
      {resolvedIconPosition === "right" && renderIcon()}
    </>
  );

  const destination = to || href;

  if (destination) {
    const isExternal =
      destination.startsWith("http://") ||
      destination.startsWith("https://") ||
      destination.startsWith("mailto:") ||
      destination.startsWith("tel:");

    const isHashOnSamePage = destination.startsWith("#");

    if (isExternal || isHashOnSamePage) {
      return (
        <a
          href={destination}
          className={baseClasses}
          target={
            target ||
            (isExternal &&
            !destination.startsWith("mailto:") &&
            !destination.startsWith("tel:")
              ? "_blank"
              : undefined)
          }
          rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
          onClick={onClick}
          {...rest}
        >
          {content}
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
        {content}
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
      {content}
    </button>
  );
}

export default CTAButton;
