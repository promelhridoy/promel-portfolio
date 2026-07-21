"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Consistent section title used across About/Skills/Projects/etc. */
export function SectionHeading({ eyebrow, title, description, align = "center", className }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={cn(
        "mb-14 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </motion.div>
  );
}
