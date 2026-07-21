import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center">
      <span className="font-display text-8xl font-bold text-gradient">404</span>
      <div>
        <h1 className="font-display text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
