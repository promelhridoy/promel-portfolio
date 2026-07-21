"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SKILL_GROUPS } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-container py-10">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        description="The MERN stack tools and technologies I use to build web applications."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {SKILL_GROUPS.map((group) => {
          const Icon = group.icon;
          return (
            <motion.div key={group.category} variants={fadeUp} className="h-full">
              <Card className="group h-full transition-transform duration-300 hover:-translate-y-1.5">
                <CardHeader className="flex flex-row items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${group.accent} shadow-soft`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{group.category}</h3>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1.5 text-sm text-muted transition-colors duration-200 group-hover:border-accent/40 group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
