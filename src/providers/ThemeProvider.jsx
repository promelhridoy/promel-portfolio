"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Wraps next-themes; dark is the default per the design brief. */
export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
