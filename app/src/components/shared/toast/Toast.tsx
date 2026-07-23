import React, { useEffect } from "react";
import { X } from "lucide-react";

type ToastProps = {
  show: boolean;
  message: string;
  icon?: React.ReactNode;
  bgClass?: string;
  textClass?: string;
  duration?: number;
  onClose: () => void;
};

function Toast({
  show,
  message,
  icon,
  bgClass = "bg-green-100",
  textClass = "text-green-700",
  duration = 5000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border transition-all duration-300
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
      ${bgClass} border-transparent max-w-sm`}
    >
      {icon && <span className={textClass}>{icon}</span>}

      <span className={`text-sm font-medium ${textClass}`}>
        {message}
      </span>

      <button
        className={`ml-auto ${textClass} opacity-60 hover:opacity-100`}
        onClick={onClose}
      >
        <X size={14} />
      </button>
    </div>
  );
}

export default Toast;