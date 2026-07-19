import React from "react";

type HeadingHeaderProps = {
  label: string;
  sub: string;
};

function HeadingHeader({ label, sub }: HeadingHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-[#111827] tracking-tight">{label}</h2>
      <p className="text-sm text-[#6b7280] mt-1">{sub}</p>
    </div>
  );
}

export default HeadingHeader;
