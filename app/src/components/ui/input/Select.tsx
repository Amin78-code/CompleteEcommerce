import React, { SelectHTMLAttributes } from "react";

type Option = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
  className?: string;
};

const baseStyles =
  "w-full appearance-none px-3.5 py-2.5 rounded-lg border border-[#e5e7eb] bg-[#f9fafb] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all pr-9";

function Select({ options, className = "", children, ...props }: SelectProps) {
  return (
    <select className={`${baseStyles} ${className}`} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
      {children}
    </select>
  );
}

export default Select;
