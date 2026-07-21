import { Search, ClipboardList, Palette, Code2, Bug, Rocket, Wrench } from "lucide-react";

export const PROCESS_STEPS = [
  { id: "step-1", title: "Research", description: "Understanding requirements, users, and the problem space.", icon: Search },
  { id: "step-2", title: "Planning", description: "Structuring the project, choosing the right tech and architecture.", icon: ClipboardList },
  { id: "step-3", title: "Design", description: "Wireframes and UI decisions that keep the experience clean.", icon: Palette },
  { id: "step-4", title: "Development", description: "Writing clean, modular, well-structured code end to end.", icon: Code2 },
  { id: "step-5", title: "Testing", description: "Checking edge cases, responsiveness, and real-world use.", icon: Bug },
  { id: "step-6", title: "Deployment", description: "Shipping to production with CI/CD on Vercel.", icon: Rocket },
  { id: "step-7", title: "Maintenance", description: "Monitoring, fixing issues, and iterating post-launch.", icon: Wrench },
];
