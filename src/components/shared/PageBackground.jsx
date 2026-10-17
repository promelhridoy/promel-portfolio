"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

const PARTICLES = [
  { left: "8%", top: "18%", size: 3, delay: 0 },
  { left: "17%", top: "72%", size: 2, delay: 1.2 },
  { left: "29%", top: "28%", size: 2, delay: 2.2 },
  { left: "42%", top: "13%", size: 3, delay: 0.8 },
  { left: "51%", top: "80%", size: 2, delay: 1.8 },
  { left: "62%", top: "21%", size: 2, delay: 2.8 },
  { left: "72%", top: "73%", size: 3, delay: 0.4 },
  { left: "84%", top: "28%", size: 2, delay: 1.5 },
  { left: "92%", top: "65%", size: 3, delay: 2.5 },
  { left: "77%", top: "12%", size: 2, delay: 0.2 },
];

export function PageBackground() {
  const { x, y } = useMousePosition();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Mouse glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              600px circle at ${x}px ${y}px,
              color-mix(in oklab, var(--color-primary) 12%, transparent),
              transparent 70%
            )
          `,
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top purple glow */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-secondary/20 blur-[130px]"
      />

      {/* Bottom blue glow */}
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]"
      />

      {/* Center glow */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]"
      />

      {/* Particles */}
      {PARTICLES.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-accent"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            y: [0, -18, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + index * 0.3,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}