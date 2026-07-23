import React, { useEffect } from "react";

type FrameProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

const Frame = ({ title, children, className = "" }: FrameProps) => {
  return (
    <div
      className={`bg-white rounded-xl border border-[#e5e7eb] overflow-hidden ${className}`}
    >
      <div className="px-5 py-3 border-b border-[#f1f3f9] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#4f46e5]" />
        <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
          {title}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default Frame;
