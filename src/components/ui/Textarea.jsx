import { cn } from "@/lib/utils";

export function Textarea({ className, error, ...props }) {
  return (
    <textarea
      className={cn(
        "w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors resize-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        error ? "border-red-500" : "border-border",
        className
      )}
      aria-invalid={!!error}
      {...props}
    />
  );
}
