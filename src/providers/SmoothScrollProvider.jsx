"use client";

import { useLenis } from "@/hooks/useLenis";

/** Boots Lenis smooth-scroll once for the entire app. */
export function SmoothScrollProvider({ children }) {
  useLenis();
  return <>{children}</>;
}
