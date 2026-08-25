import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { media } from "@/data/media";

const nav = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const socials = ["Behance", "LinkedIn", "YouTube", "ArtStation"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="block h-4 w-4 rotate-45 border-2 border-primary" />
            <span className="font-display text-2xl uppercase tracking-[0.16em]">{media.studioName}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            An independent game development and creative studio building games, worlds, interfaces and campaigns.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5 text-muted-foreground">Navigate</p>
          <ul className="space-y-3">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="font-cond text-lg uppercase tracking-[0.16em] transition-colors hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5 text-muted-foreground">Elsewhere</p>
          <ul className="space-y-3">
            {socials.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="font-cond text-lg uppercase tracking-[0.16em] transition-colors hover:text-accent"
                  aria-label={`${media.studioName} on ${s}`}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="h-4 w-px bg-primary" />
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © 2026 {media.studioName} Studio. All rights reserved.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group inline-flex items-center gap-2 font-cond text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
