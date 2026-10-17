import {
  Layout,
  Layers,
  Server,
  Database,
  Sparkles,
  Wrench,
} from "lucide-react";

export const SKILL_GROUPS = [
  {
    category: "Frontend",
    icon: Layout,
    accent: "from-primary to-secondary",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Router",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
    ],
  },
  {
    category: "State & Forms",
    icon: Layers,
    accent: "from-accent to-secondary",
    skills: ["TanStack Query", "React Hook Form", "Zod"],
  },
  {
    category: "Backend & Auth",
    icon: Server,
    accent: "from-secondary to-accent",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "Better Auth",
    ],
  },
  {
    category: "Database",
    icon: Database,
    accent: "from-accent to-primary",
    skills: ["MongoDB"],
  },
  {
    category: "AI",
    icon: Sparkles,
    accent: "from-primary to-accent",
    skills: ["OpenAI API", "AI Integration", "Prompt Engineering"],
  },
  {
    category: "Tools",
    icon: Wrench,
    accent: "from-primary to-accent",
    skills: ["Git", "VS Code", "Figma", "Vercel", "Netlify"],
  },
];