"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Premium full-screen preloader. Simulates progress then fades + slides
 * away, revealing the page underneath. Respects prefers-reduced-motion
 * by skipping straight to completion.
 */
export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setProgress(100);
      setDone(true);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 18, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
        }
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-background"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-2xl font-semibold tracking-tight"
          >
            <span className="text-primary">&lt;</span>PH<span className="text-primary"> /&gt;</span>
          </motion.span>

          <div className="h-[2px] w-56 overflow-hidden rounded-full bg-border sm:w-72">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="font-mono text-sm text-muted tabular-nums">
            {Math.floor(progress)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
