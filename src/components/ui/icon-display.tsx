import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { IconSize } from "@/types";

const iconDisplayVariants = cva("", {
  variants: {
    size: {
      sm: "w-12 h-12 text-2xl",
      md: "w-20 h-20 text-5xl",
      lg: "w-24 h-24 text-6xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface IconDisplayProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof iconDisplayVariants> {
  icon: string;
  alt?: string;
  size?: IconSize;
}

export function IconDisplay({
  icon,
  alt,
  size,
  className,
  ...props
}: IconDisplayProps) {
  const isImagePath = icon.startsWith("/");

  return (
    <div
      className={cn(iconDisplayVariants({ size }), className)}
      data-slot="icon-display"
      {...props}
    >
      {isImagePath ? (
        <img
          src={icon}
          alt={alt || "Icon"}
          className="w-full h-full object-contain"
        />
      ) : (
        <span className="flex items-center justify-center w-full h-full">
          {icon}
        </span>
      )}
    </div>
  );
}
