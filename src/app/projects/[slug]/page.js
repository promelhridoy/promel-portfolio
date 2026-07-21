import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Target, Lightbulb } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { buildMetadata } from "@/lib/metadata";
import { PROJECTS } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return buildMetadata({ title: "Project not found" });
  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

function ProjectSection({ title, items }) {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[index];
  if (!project) notFound();

  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      <Navbar />
      <main className="pt-32">
        <div className="section-container pb-24">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>

          <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-3xl shadow-soft">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-10">
              <div>
                <h1 className="font-display text-3xl font-bold sm:text-4xl">{project.title}</h1>
                <p className="mt-4 leading-relaxed text-muted">{project.longDescription}</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="glass rounded-2xl p-5">
                  <div className="mb-2 flex items-center gap-2 text-accent">
                    <Target className="h-4 w-4" />
                    <h3 className="font-display text-sm font-semibold uppercase tracking-widest">Problem</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{project.problem}</p>
                </div>
                <div className="glass rounded-2xl p-5">
                  <div className="mb-2 flex items-center gap-2 text-accent">
                    <Lightbulb className="h-4 w-4" />
                    <h3 className="font-display text-sm font-semibold uppercase tracking-widest">Solution</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{project.solution}</p>
                </div>
              </div>

              <ProjectSection title="Key Features" items={project.features} />
              <ProjectSection title="Challenges" items={project.challenges} />
              <ProjectSection title="Future Improvements" items={project.futureImprovements} />

              {project.gallery?.length ? (
                <ProjectGallery images={project.gallery} title={project.title} />
              ) : null}
            </div>

            <aside className="h-fit space-y-6 rounded-2xl glass p-6 shadow-soft lg:sticky lg:top-28">
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> View Source
                  </a>
                </Button>
              </div>
            </aside>
          </div>

          {/* Next project navigation */}
          <Link
            href={`/projects/${nextProject.slug}`}
            className="glass group mt-16 flex items-center justify-between rounded-2xl p-6 shadow-soft transition-shadow duration-300 hover:shadow-glow"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                Next Project
              </span>
              <p className="mt-1 font-display text-xl font-semibold">{nextProject.title}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-accent transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
