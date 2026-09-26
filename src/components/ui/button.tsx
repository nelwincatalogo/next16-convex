import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "outline";
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors",
        variant === "primary" && "bg-foreground text-background hover:opacity-90",
        variant === "outline" && "border border-foreground/15 hover:bg-foreground/5",
        className,
      )}
      {...props}
    />
  );
}
