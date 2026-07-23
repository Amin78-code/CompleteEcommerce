import React, { useEffect } from "react";
import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footerButtons?: React.ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footerButtons,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#0f0e2a]/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-[#111827]">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-[#6b7280] mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
          <button
            className="text-[#9ca3af] hover:text-[#374151] transition-colors cursor-pointer focus:outline-none"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="text-sm text-[#374151] mb-6">
          {children}
        </div>

        {footerButtons && (
          <div className="flex items-center gap-3 justify-end">
            {footerButtons}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;