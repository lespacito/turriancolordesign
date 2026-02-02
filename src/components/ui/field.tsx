import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
}

interface InputFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    FieldProps {}

interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    FieldProps {}

export function InputField({
  label,
  error,
  required,
  className,
  id,
  ...props
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-white/90"
      >
        {label} {required && <span className="text-white">*</span>}
      </label>
      <input
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-lg bg-white/90 text-foreground",
          "border-2 border-transparent",
          "focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50",
          "transition-all duration-200",
          "placeholder:text-muted-foreground/60",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-destructive focus:border-destructive",
          className
        )}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-100 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextareaField({
  label,
  error,
  required,
  className,
  id,
  ...props
}: TextareaFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-white/90"
      >
        {label} {required && <span className="text-white">*</span>}
      </label>
      <textarea
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-lg bg-white/90 text-foreground",
          "border-2 border-transparent",
          "focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50",
          "transition-all duration-200",
          "placeholder:text-muted-foreground/60",
          "resize-vertical",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-destructive focus:border-destructive",
          className
        )}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-100 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
