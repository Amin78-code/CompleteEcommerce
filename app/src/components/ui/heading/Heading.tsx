import React from "react";

// 6 levels of headings allowed in HTML
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  children: React.ReactNode;
  level?: HeadingLevel; // Controls semantic HTML tag & default size
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"; // Optional: to override visual size
  className?: string; // For custom margin or quick tweaks
};

const Heading = ({
  children,
  level = 2,
  size,
  className = "",
}: HeadingProps) => {
  // 1. Dynamic HTML Tag Selection (SEO & Accessibility ke liye)
  const Tag = `h${level}` as const;

  // 2. Base styles for all headings
  const base = "font-bold text-[#111827] tracking-tight leading-tight";

  // 3. Mapping sizes strictly to 6 levels
  const sizes: Record<string, string> = {
    "3xl": "text-3xl md:text-4xl", // H1 default
    "2xl": "text-2xl md:text-3xl", // H2 default
    xl: "text-xl md:text-2xl",     // H3 default
    lg: "text-lg md:text-xl",      // H4 default
    md: "text-base md:text-lg",    // H5 default
    sm: "text-sm md:text-base",    // H6 default
  };

  // 4. Default size configuration based on heading level
  const defaultSizeMap: Record<HeadingLevel, string> = {
    1: "3xl",
    2: "2xl",
    3: "xl",
    4: "lg",
    5: "md",
    6: "sm",
  };

  // Agar user ne 'size' prop alag se bheja hai to wo use hoga, nahi to level ke mutabiq default size uthaega
  const finalSize = size || defaultSizeMap[level];

  return (
    <Tag className={`${base} ${sizes[finalSize]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;