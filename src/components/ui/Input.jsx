import { cn } from "@/lib/utils";

export function Input({ className, error, ...props }) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        error ? "border-red-500" : "border-border",
        className
      )}
      aria-invalid={!!error}
      {...props}
    />
  );
}
