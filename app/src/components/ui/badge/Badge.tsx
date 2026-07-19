import React from "react";

type BadgeProps = {
  label: string;
  variant?: "default" | "sale" | "new" | "success" | "warning" | "error" | "info" | "muted";
};

const styles: Record<BadgeProps["variant"], string> = {
  default: "bg-[#eef2ff] text-[#4f46e5]",
  sale: "bg-[#fee2e2] text-[#ef4444]",
  new: "bg-[#d1fae5] text-[#059669]",
  success: "bg-[#d1fae5] text-[#059669]",
  warning: "bg-[#fef3c7] text-[#d97706]",
  error: "bg-[#fee2e2] text-[#dc2626]",
  info: "bg-[#dbeafe] text-[#2563eb]",
  muted: "bg-[#f1f3f9] text-[#6b7280]",
};

function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold tracking-wide ${styles[variant]}`}>
      {label}
    </span>
  );
}

export default Badge;
