"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Sparkles,
  MapPin,
  Mail,
  GraduationCap,
  Code2,
  Rocket,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/motion";
import { siteConfig } from "@/lib/metadata";

const QUICK_FACTS = [
  { icon: MapPin, label: siteConfig.location },
  { icon: Mail, label: siteConfig.email },
  { icon: GraduationCap, label: "Fresher · Open to Work" },
];

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write readable and modular code that is easy for teams to maintain and scale.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description:
      "I quickly adapt to new tools and frameworks and apply them in real projects.",
  },
  {
    icon: Users,
    title: "Team Ready",
    description:
      "Comfortable collaborating, taking feedback, and improving through iteration.",
  },
];

export function About() {
  return (
    <section id="about" className="section-container relative z-10 py-20">
      <SectionHeading
        eyebrow="About Me"
        title="Building clean, functional, and production-ready web applications"
        description="A focused look at my background, mindset, and the value I bring as a developer."
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start">
        {/* Photo */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto w-full max-w-xs lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary via-secondary to-accent opacity-40 blur-2xl" />
            <TiltCard className="relative">
              <div className="glass aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-soft">
                <Image
                  src="/promel-portfolio-portrait.png"
                  alt="Photo of Promel Hossain Hridoy"
                  fill
                  sizes="(max-width: 1024px) 320px, 340px"
                  className="object-cover"
                  priority
                />
              </div>
            </TiltCard>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass absolute -bottom-5 -right-5 flex items-center gap-2 rounded-2xl px-4 py-3 shadow-soft"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">
                Open to opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            variants={staggerContainer(0.08, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16 space-y-3 sm:mt-8"
          >
            {QUICK_FACTS.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex items-center gap-3 text-sm text-muted"
              >
                <span className="glass flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <Icon className="h-3.5 w-3.5 text-accent" />
                </span>
                {label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Text + highlights */}
        <div className="space-y-10">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-5 text-muted"
          >
            <p className="leading-relaxed">
              I am a MERN stack developer focused on building clean, responsive,
              and functional web applications. I work with React on the frontend
              and Node.js with Express on the backend, using MongoDB for data
              management.
            </p>

            <p className="leading-relaxed">
              Although I come from a Management background, I developed a strong
              interest in software development and taught myself full-stack web
              development through consistent practice and real projects. I enjoy
              turning ideas into working products and continuously improving my
              skills.
            </p>

            <p className="leading-relaxed">
              I am currently looking for my first role as a junior or entry-level
              MERN stack developer, where I can contribute, learn from
              experienced engineers, and grow into a reliable full-stack
              developer.
            </p>

            <div className="glass flex items-start gap-4 rounded-2xl p-5">
              <Target className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-display font-semibold text-foreground">
                  Career Goal
                </h3>
                <p className="mt-1 text-sm leading-relaxed">
                  Join a team where I can apply my current skills, take ownership
                  of features, and steadily grow into a strong full-stack
                  developer through real-world experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What I bring */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 transition-shadow duration-300 hover:shadow-glow"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Icon className="h-4 w-4 text-white" />
                </span>
                <h4 className="mt-3 font-display text-sm font-semibold text-foreground">
                  {title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}