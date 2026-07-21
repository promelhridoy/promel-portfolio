/** Route-level loading UI shown by Next.js during navigation/data fetches. */
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-primary" />
    </div>
  );
}
