import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("w-full mx-auto px-[5vw] md:px-[6vw] max-w-[2000px]", className)}
      {...props}
    />
  );
}
