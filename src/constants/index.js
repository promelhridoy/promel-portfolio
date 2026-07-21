import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import { siteConfig } from "@/lib/metadata";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: siteConfig.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: Linkedin },
  { label: "Facebook", href: siteConfig.facebook, icon: Facebook },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export const RESUME_URL = "/Promel_Hossain_Hridoy_Resume.pdf";
