import { Link } from "@tanstack/react-router";
import { Compass, Layers, Sparkles, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import projectNeon from "@/assets/project-neon-requiem.jpg";
import uiHud from "@/assets/ui-hud.jpg";
import charSoren from "@/assets/char-soren.png";
import weapon from "@/assets/weapon.png";

const tiles = [
  { to: "/work", label: "Our Work", icon: Layers, image: projectNeon },
  { to: "/services", label: "Services", icon: Sparkles, image: uiHud },
  { to: "/about", label: "The Studio", icon: Users, image: charSoren },
  { to: "/contact", label: "Start a Project", icon: Compass, image: weapon },
] as const;

/** Equal-width tile row — same mechanic as the games carousel above, one level up: whole sections of the site. */
export function ExploreStudio() {
  return (
    <section className="ambient-glow border-t border-border bg-[#0A0B0D] section-pad">
      <div className="container-page relative z-10">
        <Reveal>
          <p className="eyebrow text-primary">Find Your Way In</p>
          <h2 className="type-sub mt-4">Explore the studio.</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.to} delay={i * 0.05}>
              <Link to={t.to} data-cursor="GO" className="group block">
                <div className="card-elevated relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-surface to-background lg:aspect-[3/4]">
                  <img
                    src={t.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="img-vibrant h-full w-full object-cover opacity-90 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-background/28 transition-colors duration-500 group-hover:bg-background/15" />
                  <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-background/70 backdrop-blur-sm">
                    <t.icon className="h-4 w-4 text-primary" />
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center p-4 text-center font-display text-xl uppercase leading-tight tracking-tight text-foreground drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] sm:text-2xl">
                    {t.label}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
