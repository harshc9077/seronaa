import * as React from "react";
import { cn } from "@/lib/utils/cn";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", as = "button", ...props }, ref) => {
    const Component = as;
    const baseStyles = cn(
      "inline-flex items-center justify-center font-body uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
      {
        "bg-charcoal text-ivory hover:bg-dark": variant === "primary",
        "border border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-ivory": variant === "secondary",
        "bg-transparent text-charcoal hover:underline underline-offset-4": variant === "ghost",
        "bg-gold text-white hover:bg-[#a68a57]": variant === "gold",
        "h-9 px-4 text-[10px]": size === "sm",
        "h-11 px-8 text-xs": size === "md",
        "h-14 px-10 text-sm": size === "lg",
      },
      className
    );

    if (as === "a") {
      return (
        <a ref={ref as React.ForwardedRef<HTMLAnchorElement>} className={baseStyles} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
      );
    }

    return (
      <button ref={ref as React.ForwardedRef<HTMLButtonElement>} className={baseStyles} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
    );
  }
);
Button.displayName = "Button";

export { Button };
