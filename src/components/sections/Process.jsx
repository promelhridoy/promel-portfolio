"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { PROCESS_STEPS } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="section-container py-20">
      <SectionHeading
        eyebrow="How I Work"
        title="Development process"
        description="The steps I follow to take an idea from concept to a deployed product."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto max-w-3xl"
      >
        {/* Vertical timeline line */}
        <div
          className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-40 sm:left-7"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.id} variants={fadeUp} className="relative flex gap-5 sm:gap-6">
                <span className="glass relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-soft sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
                </span>
                <div className="pt-1.5">
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
