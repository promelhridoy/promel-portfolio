"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Wraps any button/link and gives it a subtle "magnetic" pull toward the
 * cursor on hover — used sparingly (Hero CTAs) per the "don't overuse" brief.
 */
export function MagneticButton({ children, strength = 0.35 }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setOffset({ x, y });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.5 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
