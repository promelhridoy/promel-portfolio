"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

/** Global error boundary for the App Router. */
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center">
      <AlertTriangle className="h-14 w-14 text-secondary" />
      <div>
        <h1 className="font-display text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 max-w-md text-muted">
          An unexpected error occurred while rendering this page. You can try again,
          or head back home.
        </p>
      </div>
      <div className="flex gap-3">
        <Button onClick={() => reset()}>Try Again</Button>
        <Button variant="outline" asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
