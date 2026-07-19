import React from "react";

type BtnProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  iconOnly?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  iconOnly = false,
  onClick,
}: BtnProps) => {

  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] focus-visible:ring-offset-2 select-none";
  
    const sizes: Record<string, string> = {
    sm: iconOnly ? "p-1.5" : "px-3 py-1.5 text-sm gap-1.5",
    md: iconOnly ? "p-2" : "px-4 py-2 text-sm gap-2",
    lg: iconOnly ? "p-3" : "px-6 py-3 text-base gap-2",
  };

  const variants: Record<string, string> = {
    primary:"bg-[#4f46e5] text-white hover:bg-[#4338ca] active:bg-[#3730a3] shadow-sm",
    secondary:"bg-[#eef2ff] text-[#4f46e5] hover:bg-[#e0e7ff] active:bg-[#c7d2fe] border border-[#c7d2fe]",
    tertiary:"bg-white text-[#374151] hover:bg-[#f9fafb] active:bg-[#f3f4f6] border border-[#e5e7eb] shadow-sm",
    ghost:"bg-transparent text-[#4f46e5] hover:bg-[#eef2ff] active:bg-[#e0e7ff]",
    danger:"bg-[#ef4444] text-white hover:bg-[#dc2626] active:bg-[#b91c1c] shadow-sm",
  };

  const disabledClass = disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "cursor-pointer";
 
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${disabledClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
