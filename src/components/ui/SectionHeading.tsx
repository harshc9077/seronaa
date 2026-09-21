import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  variant?: "light" | "dark";
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  variant = "light",
  align = "center",
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        {
          "text-charcoal": variant === "light",
          "text-ivory": variant === "dark",
          "items-start text-left": align === "left",
          "items-center text-center": align === "center",
          "items-end text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-4 text-xs uppercase tracking-widest font-body",
            variant === "light" ? "text-taupe" : "text-cream/80"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base md:text-lg font-body leading-relaxed",
            variant === "light" ? "text-taupe" : "text-cream/80"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
