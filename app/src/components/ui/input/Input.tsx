import React, { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  error?: string;
  success?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
};

const baseStyles =
  "w-full py-2.5 rounded-lg border bg-[#f9fafb] text-[#111827] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 transition-all";

function Input({
  type = "text",
  label,
  helperText,
  error,
  success,
  required,
  leftIcon,
  rightIcon,
  containerClassName = "",
  className = "",
  disabled,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const currentType = isPassword && showPassword ? "text" : type;

  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon || isPassword;

  const paddingStyles = `${hasLeftIcon ? "pl-10" : "pl-3.5"} ${hasRightIcon ? "pr-10" : "pr-3.5"}`;

  const borderStyles = error
    ? "border-[#ef4444] focus:ring-[#ef4444] focus:border-transparent"
    : success
    ? "border-[#10b981] focus:ring-[#10b981] focus:border-transparent"
    : "border-[#e5e7eb] focus:ring-[#4f46e5] focus:border-transparent";

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed bg-[#f3f4f6]" : "";

  return (
    <div className={`flex flex-col gap-1.5 w-full ${containerClassName}`}>
      {label && (
        <label className="text-sm font-medium text-[#111827] select-none">
          {label}
          {required && <span className="text-[#ef4444] ml-0.5">*</span>}
        </label>
      )}

      <div className="relative flex items-center w-full">
        {leftIcon && (
          <div className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center justify-center">
            {leftIcon}
          </div>
        )}

        <input
          type={currentType}
          disabled={disabled}
          className={`${baseStyles} ${paddingStyles} ${borderStyles} ${disabledStyles} ${className}`}
          {...props}
        />

        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 text-[#9ca3af] hover:text-[#374151] transition-colors cursor-pointer focus:outline-none"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : (
          rightIcon && (
            <div className="absolute right-3.5 text-[#9ca3af] flex items-center justify-center">
              {rightIcon}
            </div>
          )
        )}
      </div>

      {error ? (
        <p className="text-xs font-medium text-[#ef4444]">{error}</p>
      ) : success ? (
        <p className="text-xs font-medium text-[#10b981]">{success}</p>
      ) : helperText ? (
        <p className="text-xs text-[#6b7280]">{helperText}</p>
      ) : null}
    </div>
  );
}

export default Input;