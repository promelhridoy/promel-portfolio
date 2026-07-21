"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS, RESUME_URL } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const activeId = useActiveSection(
    NAV_LINKS.map((l) => l.href.replace("#", "")),
  );

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // `theme` is undefined on the server and during the first client render
  // (next-themes only resolves it from localStorage after mount). Rendering
  // based on `theme` before mount causes a server/client markup mismatch, so
  // we hold the icon at a fixed, defaultTheme-matching state until mounted.
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div
        className={cn(
          "section-container flex items-center justify-between rounded-2xl px-4 py-2 transition-all duration-300 sm:px-6",
          scrolled && "glass shadow-soft",
        )}
      >
        <Link
          href="#home"
          className="font-mono text-lg font-semibold tracking-tight"
          aria-label="Go to homepage"
        >
          <span className="text-primary">&lt;</span>PH
          <span className="text-primary"> /&gt;</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-foreground/8"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="icon"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={RESUME_URL} download>
              <Download className="h-4 w-4" /> Resume
            </a>
          </Button>
        </div>

        <button
          className="rounded-lg p-2 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[999] bg-background/70 backdrop-blur-md md:hidden"
  >
    {/* Close button */}
    <button
      className="absolute right-6 top-6 rounded-lg p-2 text-foreground"
      aria-label="Close menu"
      onClick={() => setMobileOpen(false)}
    >
      <X className="h-7 w-7" />
    </button>

    {/* Menu */}
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -30, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="section-container mt-24"
      aria-label="Mobile"
    >
      <div className="rounded-3xl border border-border bg-background p-6 shadow-2xl">
        <div className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace("#", "");

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-all",
                  isActive
                    ? "bg-primary text-white"
                    : "text-muted hover:bg-foreground/5 hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            Toggle Theme
          </button>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            download="Promel_Hossain_Hridoy_Resume.pdf"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  </motion.div>
)}
    </motion.header>
  );
}
