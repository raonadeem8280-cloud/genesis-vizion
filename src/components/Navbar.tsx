import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { media } from "@/data/media";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20" aria-label="Main">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="block h-4 w-4 rotate-45 border-2 border-primary" />
          <span className="font-display text-xl uppercase tracking-[0.18em]">{media.studioName}</span>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="font-cond text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-cursor="GO"
            className="hidden bg-primary px-6 py-3 font-cond text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background md:inline-block"
          >
            Start a project
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <li key={l.to} className="border-b border-border/60 last:border-0">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-3xl uppercase"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-6">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block bg-primary py-4 text-center font-cond text-sm uppercase tracking-[0.2em] text-primary-foreground"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
