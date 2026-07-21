import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (handles conflicting utility classes). */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/** Simple debounce for scroll/resize listeners. */
export function debounce(fn, delay = 150) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/** Formats a date range for the experience timeline. */
export function formatDateRange(start, end) {
  return `${start} — ${end ?? "Present"}`;
}
