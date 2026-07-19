import React from "react";

type StatusBadgeProps = {
  status: string;
};

const statusStyles: Record<string, { dot: string; text: string; bg: string }> = {
  Delivered: { dot: "bg-[#10b981]", text: "text-[#059669]", bg: "bg-[#d1fae5]" },
  Shipped: { dot: "bg-[#3b82f6]", text: "text-[#2563eb]", bg: "bg-[#dbeafe]" },
  Processing: { dot: "bg-[#f59e0b]", text: "text-[#d97706]", bg: "bg-[#fef3c7]" },
  Cancelled: { dot: "bg-[#ef4444]", text: "text-[#dc2626]", bg: "bg-[#fee2e2]" },
};

function StatusBadge({ status }: StatusBadgeProps) {
  const s = statusStyles[status] ?? statusStyles["Processing"];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${s.bg} ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

export default StatusBadge;
