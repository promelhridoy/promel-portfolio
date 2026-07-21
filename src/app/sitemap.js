import { siteConfig } from "@/lib/metadata";
import { PROJECTS } from "@/data/projects";

export default function sitemap() {
  const staticRoutes = ["", "/#about", "/#skills", "/#projects", "/#contact"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    })
  );

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
