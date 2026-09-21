import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  variant?: "light" | "dark" | "gold";
}

export function Divider({ className, variant = "light", ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        "w-full border-t",
        {
          "border-taupe/20": variant === "light",
          "border-cream/20": variant === "dark",
          "border-gold/30": variant === "gold",
        },
        className
      )}
      {...props}
    />
  );
}
