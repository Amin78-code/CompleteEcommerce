import React, { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectInputProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> & {
  label?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  helperText?: string;
  error?: string;
  required?: boolean;
  containerClassName?: string;
};

const baseStyles =
  "w-full px-3.5 py-2.5 rounded-lg border bg-[#f9fafb] text-[#111827] text-sm focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer pr-10";

function SelectInput({
  label,
  options,
  value,
  onChange,
  helperText,
  error,
  required,
  containerClassName = "",
  className = "",
  disabled,
  ...props
}: SelectInputProps) {
  const borderStyles = error
    ? "border-[#ef4444] focus:ring-[#ef4444] focus:border-transparent"
    : "border-[#e5e7eb] focus:ring-[#4f46e5] focus:border-transparent";

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed bg-[#f3f4f6]" : "";

  return (
    <div className={`flex flex-col gap-1.5 w-full ${containerClassName}`}>
      {label && (
        <label className="text-sm font-medium text-[#374151] select-none">
          {label}
          {required && <span className="text-[#ef4444] ml-0.5">*</span>}
        </label>
      )}

      <div className="relative flex items-center w-full">
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseStyles} ${borderStyles} ${disabledStyles} ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="absolute right-3.5 text-[#9ca3af] pointer-events-none flex items-center justify-center"
        />
      </div>

      {error ? (
        <p className="text-xs font-medium text-[#ef4444]">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-[#6b7280]">{helperText}</p>
      ) : null}
    </div>
  );
}

export default SelectInput;