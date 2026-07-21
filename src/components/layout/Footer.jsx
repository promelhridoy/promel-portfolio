import Link from "next/link";
import { Heart } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <Link href="#home" className="font-mono text-xl font-semibold tracking-tight">
            <span className="text-primary">&lt;</span>PH<span className="text-primary"> /&gt;</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted">
            MERN stack developer crafting fast, responsive, and well-structured
            web applications.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-muted">
            Navigation
          </h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-muted">
            Connect
          </h3>
          <ul className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-container flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted sm:flex-row">
        <p>© {year} Promel Hossain Hridoy. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <Heart className="h-3.5 w-3.5 fill-current text-red-500" /> using Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
