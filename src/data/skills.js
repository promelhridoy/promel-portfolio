import { Layout, Server, Database, Wrench } from "lucide-react";

export const SKILL_GROUPS = [
  {
    category: "Frontend",
    icon: Layout,
    accent: "from-primary to-secondary",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Lucide Icons"],
  },
  {
    category: "Backend",
    icon: Server,
    accent: "from-secondary to-accent",
    skills: ["Node.js", "Express.js", "REST API", "JWT Authentication"],
  },
  {
    category: "Database",
    icon: Database,
    accent: "from-accent to-primary",
    skills: ["MongoDB"],
  },
  {
    category: "Tools",
    icon: Wrench,
    accent: "from-primary to-accent",
    skills: ["Git", "VS Code", "Figma", "Vercel", "Netlify"],
  },
];
