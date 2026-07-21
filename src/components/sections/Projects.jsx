"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-container py-20">
      <SectionHeading
        eyebrow="Featured Work"
        title="Projects I'm proud of"
        description="A selection of production applications spanning e-commerce, analytics, and collaboration tools."
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {PROJECTS.map((project) => (
          <motion.div key={project.slug} variants={fadeUp}>
            <TiltCard className="glass group flex h-full flex-col overflow-hidden rounded-2xl shadow-soft transition-shadow duration-300 hover:shadow-glow">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/projects/${project.slug}`}>
                      Details <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground/5"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
