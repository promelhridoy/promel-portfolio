"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/Card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { STATS } from "@/data/stats";

export function Stats() {
  return (
    <section id="stats" className="section-container py-20">
      <SectionHeading
        eyebrow="By the Numbers"
        title="Coding statistics"
        description="A quick snapshot of the work behind the portfolio."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
      >
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.id} variants={fadeUp} whileHover={{ y: -6 }}>
              <Card className="h-full transition-shadow duration-300 hover:shadow-glow">
                <CardContent className="flex flex-col items-center text-center">
                  {Icon ? <Icon className="mb-2 h-5 w-5 text-accent" /> : null}
                  <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
