import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: string;
  label?: string;
  helperText?: string;
  error?: string;
  success?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
  inputClassName?: string;
};

const baseStyles =
  "w-full px-3.5 py-2.5 rounded-lg border border-[#e5e7eb] bg-[#f9fafb] text-[#111827] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:border-transparent transition-all";

function Input({
  type,
  className = "",
  label,
  helperText,
  error,
  success,
  required,
  leftIcon,
  rightIcon,
  containerClassName,
  inputClassName
}: InputProps) {

  const inputField = () => {
    if (type === 'fullName') {
      return <Input
        label="Full Name"
        placeholder="e.g. Sophia Reyes"
        helperText="Enter your legal full name."
      />;
    }
    else if (type === 'password') {
      return <Input
        type="password"
        label="Password"
        placeholder="Min. 8 characters"
      />;
    }
    else if (type === 'password') {
      return <Input
        type="email"
        label="Email Address"
        defaultValue="not-an-email"
        error="Please enter a valid email address."
      />;
    }
    else {return ''}
  };

  return <>
    {/* <input className={`${baseStyles} ${className}`} {...props} />; */}

    <div className="space-y-1.5">
      {label && <label>...</label>}

      <div className="relative">
        {leftIcon}
        {inputField()}
        {/* {rightIcon || passwordToggle} */}
      </div>

      {error ? (
        <p className="text-red-500">...</p>
      ) : helperText ? (
        <p className="text-gray-500">...</p>
      ) : null}
    </div>


  </>
}

export default Input;
