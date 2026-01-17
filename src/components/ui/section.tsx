import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { WaveDivider } from "./wave-divider";
import type { SectionVariant } from "@/types";

const sectionVariants = cva("relative py-24 text-foreground", {
  variants: {
    variant: {
      pink: "",
      orange: "",
      yellow: "",
      green: "",
      blue: "",
    },
  },
  defaultVariants: {
    variant: "pink",
  },
});

interface SectionProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof sectionVariants> {
  variant?: SectionVariant;
  withWaveDivider?: boolean;
  nextSectionColor?: string;
}

export function Section({
  variant,
  withWaveDivider = false,
  nextSectionColor,
  className,
  children,
  ...props
}: SectionProps) {
  const getBackgroundColor = () => {
    switch (variant) {
      case "pink":
        return "var(--turrian-pink)";
      case "orange":
        return "var(--turrian-orange)";
      case "yellow":
        return "var(--turrian-yellow)";
      case "green":
        return "var(--turrian-green)";
      case "blue":
        return "var(--turrian-blue)";
      default:
        return "var(--turrian-pink)";
    }
  };

  return (
    <section
      className={cn(sectionVariants({ variant }), className)}
      style={{ background: getBackgroundColor() }}
      data-slot="section"
      data-variant={variant}
      {...props}
    >
      {children}
      {withWaveDivider && nextSectionColor && (
        <WaveDivider fillColor={nextSectionColor} position="bottom" />
      )}
    </section>
  );
}
