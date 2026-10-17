"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, Code2, Sparkles } from "lucide-react";

import LottiePlayer from "@/components/shared/LottiePlayer";
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

const TECH_ITEMS = [
  { label: "React", icon: "⚛", className: "left-[4%] top-[20%]" },
  { label: "Next.js", icon: "N", className: "right-[5%] top-[12%]" },
  { label: "TypeScript", icon: "TS", className: "right-[0%] top-[43%]" },
  { label: "Node.js", icon: "JS", className: "left-[0%] top-[55%]" },
  { label: "MongoDB", icon: "DB", className: "right-[10%] bottom-[9%]" },
];

export function Hero() {
  const { x, y } = useMousePosition();
  const typed = useTypingEffect(TITLES);
  const [animationData, setAnimationData] = useState(null);

  /*
   * Mouse parallax
   */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const imageX = useTransform(smoothX, [-500, 500], [-14, 14]);
  const imageY = useTransform(smoothY, [-500, 500], [-14, 14]);

  useEffect(() => {
    mouseX.set(x - window.innerWidth / 2);
    mouseY.set(y - window.innerHeight / 2);
  }, [x, y, mouseX, mouseY]);

  /*
   * Lottie
   */
  useEffect(() => {
    fetch("/lottie/Developer.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load Lottie file");
        }
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((err) => {
        console.error("Lottie load error:", err);
      });
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center overflow-hidden pt-28"
      aria-label="Introduction"
    >
      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="section-container relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Open to work */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-muted backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Open to Work

            <Sparkles className="h-3 w-3 text-accent" />
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient relative">
              Promel Hossain Hridoy
            </span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 flex items-center gap-3 font-mono text-lg text-accent sm:text-xl"
          >
            <Code2 className="h-5 w-5" />

            <span aria-live="polite">
              {typed}
              <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-accent align-middle" />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.65 }}
  className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
>
  I build full-stack web applications using the MERN stack — clean React
  interfaces backed by well-structured Node.js and Express REST APIs, with
  MongoDB for data. Looking for opportunities to contribute and grow as a
  junior full-stack developer.
</motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
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
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-9 flex items-center gap-3"
          >
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -5, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.25)]"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT - DEVELOPER VISUAL
        ====================================================== */}

        <motion.div
          style={{ x: imageX, y: imageY }}
          initial={{ opacity: 0, scale: 0.85, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mx-auto aspect-square w-72 sm:w-96 lg:w-full lg:max-w-lg"
        >
          {/* Outer orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-8%] rounded-full border border-primary/10"
          />

          {/* Second orbit */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[2%] rounded-full border border-accent/10"
          />

          {/* Orbit dots */}
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-9%] z-10"
          >
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_20px_currentColor]" />
          </motion.span>

          {/* Main glow */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[8%] rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-accent blur-3xl"
          />

          {/* Main glass card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass relative z-20 flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 p-5 shadow-2xl"
          >
            {/* Inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

            {/* Lottie */}
            <div className="relative z-10 w-full">
              {animationData ? (
                <LottiePlayer animationData={animationData} />
              ) : (
                <div className="flex h-72 items-center justify-center font-mono text-sm text-muted">
                  Loading...
                </div>
              )}
            </div>

            {/* Scan line */}
            <motion.div
              animate={{ y: ["-120%", "120%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-transparent via-accent/10 to-transparent blur-xl"
            />
          </motion.div>

          {/* =================================================
              FLOATING TECH CARDS
          ================================================== */}

          {TECH_ITEMS.map((item, index) => (
            <motion.div
              key={item.label}
              className={`absolute z-30 ${item.className}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { delay: 0.8 + index * 0.15 },
                scale: { delay: 0.8 + index * 0.15, type: "spring" },
                y: {
                  duration: 3.5 + index * 0.5,
                  delay: index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="group flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 shadow-xl backdrop-blur-xl">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 font-bold text-accent">
                  {item.icon}
                </span>

                <span className="hidden font-mono text-[10px] text-muted sm:block">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Floating code window */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-5 top-[3%] z-30 hidden w-44 rounded-xl border border-primary/20 bg-[#090d18]/80 p-3 shadow-2xl backdrop-blur-xl sm:block"
          >
            <div className="mb-2 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
            </div>

            <div className="space-y-1 font-mono text-[9px] leading-relaxed">
              <p className="text-purple-400">
                const <span className="text-blue-300">dev</span> =
              </p>
              <p className="pl-2 text-muted">{"{"}</p>
              <p className="pl-4 text-cyan-300">
                role: <span className="text-emerald-300">&quot;Full-Stack Developer&quot;</span>
              </p>
              <p className="pl-4 text-cyan-300">
                code: <span className="text-emerald-300">true</span>
              </p>
              <p className="pl-2 text-muted">{"}"}</p>
            </div>
          </motion.div>

          {/* Available badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -left-5 z-30 hidden rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 backdrop-blur-xl sm:block"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              <span className="font-mono text-[10px] text-emerald-300">
                Available for work
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL
      ====================================================== */}

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}