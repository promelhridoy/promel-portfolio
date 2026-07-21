"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { RESUME_URL, SOCIAL_LINKS } from "@/constants";

const TITLES = [
  "MERN Stack Developer",
  "React & Node.js Developer",
  "REST API Builder",
  "Aspiring Full-Stack Engineer",
];

export function Hero() {
  const { x, y } = useMousePosition();
  const typed = useTypingEffect(TITLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
      aria-label="Introduction"
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, color-mix(in oklab, var(--color-primary) 15%, transparent), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Floating gradient blobs */}
      <motion.div
        animate={{ y: [0, 24, 0], x: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-secondary/25 blur-[100px]"
        aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-8%] h-96 w-96 rounded-full bg-primary/25 blur-[100px]"
        aria-hidden="true"
      />

      <div className="section-container relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to Work
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Promel Hossain Hridoy</span>
          </h1>

          <p
            className="mt-4 h-8 font-mono text-lg text-accent sm:text-xl"
            aria-live="polite"
          >
            {typed}
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-accent align-middle" />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I build full-stack web applications using the MERN stack — clean
            React interfaces backed by well-structured Node.js and Express REST
            APIs, with MongoDB for data. Eager to bring fresh energy to a
            growing engineering team.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="ghost" size="lg" asChild>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Promel_Hossain_Hridoy_Resume.pdf"
                  className="text-sm font-medium text-accent"
                >
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Button>
            </MagneticButton>
          </div>

          <div className="mt-9 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-1"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-full lg:max-w-md"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-accent opacity-40 blur-2xl" />
          <div className="glass relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-soft">
            <Image
              src="/portfolio_photo.jpg"
              alt="Portrait of Promel Hossain Hridoy"
              fill
              priority
              sizes="(max-width: 1024px) 320px, 480px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
      >
        <span className="font-mono text-xs uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
