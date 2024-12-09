// src/components/ui/Input.tsx
import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type, ...props }, ref) => {
    const cursorClass = type === 'checkbox' || type === 'file' 
      ? 'cursor-pointer file:cursor-pointer' 
      : 'cursor-text';
    
    return (
      <input
        type={type}
        className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-gray-400 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${cursorClass} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;