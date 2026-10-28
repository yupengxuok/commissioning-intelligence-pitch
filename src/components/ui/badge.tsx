import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-[10px] font-semibold tracking-wide", {
  variants: { variant: {
    default: "border-blue-200 bg-blue-50 text-blue-800",
    secondary: "border-slate-200 bg-slate-100 text-slate-600",
    outline: "border-border bg-background text-muted-foreground",
  } },
  defaultVariants: { variant: "default" },
});

export function Badge({ className, variant, ...props }: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}
