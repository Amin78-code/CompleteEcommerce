import React from "react";
import { CheckCircle, AlertCircle, X, Info } from "lucide-react";
 
type StatusType = "success" | "warning" | "error" | "info";

type StatusCardProps = {
  variant?: StatusType;
  description?: string; 
};

const StatusCard = ({ variant = "info", description = "State color token" }: StatusCardProps) => {
  // Base structural classes for the card
  const baseCardClass = "flex items-center gap-3 px-4 py-3 rounded-xl select-none transition-all duration-150";
 
  const statusConfig: Record<
    StatusType,
    { label: string; bg: string; text: string; icon: React.ReactNode }
  > = {
    success: {
      label: "Success",
      bg: "bg-[#d1fae5]",
      text: "text-[#059669]",
      icon: <CheckCircle size={18} />,
    },
    warning: {
      label: "Warning",
      bg: "bg-[#fef3c7]",
      text: "text-[#d97706]",
      icon: <AlertCircle size={18} />,
    },
    error: {
      label: "Error",
      bg: "bg-[#fee2e2]",
      text: "text-[#dc2626]",
      icon: <X size={18} />,
    },
    info: {
      label: "Info",
      bg: "bg-[#dbeafe]",
      text: "text-[#2563eb]",
      icon: <Info size={18} />,
    },
  };

  const currentStatus = statusConfig[variant];

  return (
    <div className={`${baseCardClass} ${currentStatus.bg}`}>
      <span className={currentStatus.text}>{currentStatus.icon}</span>
      <div>
        <p className={`text-sm font-semibold ${currentStatus.text}`}>
          {currentStatus.label}
        </p>
        <p className={`text-xs opacity-80 ${currentStatus.text}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatusCard;