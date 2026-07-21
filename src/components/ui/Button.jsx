import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary to-secondary text-foreground shadow-glow hover:shadow-[0_0_55px_-8px_theme(colors.primary)] hover:-translate-y-0.5",
        outline:
          "border border-border bg-transparent hover:bg-foreground/5 hover:-translate-y-0.5",
        ghost: "bg-transparent hover:bg-foreground/5",
        glass: "glass hover:-translate-y-0.5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

/**
 * Base Button component (shadcn-style pattern using CVA + Radix Slot).
 * `asChild` lets it render as an <a> or any other element while keeping styles.
 */
export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
