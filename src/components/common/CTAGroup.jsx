import React from "react";

/**
 * Responsive container for grouping primary and secondary CTA buttons.
 * Uses compact, balanced spacing matching the Blevon design system.
 */
export function CTAGroup({
  align = "center",
  className = "",
  children,
  ...rest
}) {
  let justifyClass = "justify-center";
  if (align === "start" || align === "left") {
    justifyClass = "justify-start";
  } else if (align === "end" || align === "right") {
    justifyClass = "justify-end";
  }

  return (
    <div
      className={`flex flex-row flex-wrap items-center ${justifyClass} gap-2.5 sm:gap-3 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default CTAGroup;
