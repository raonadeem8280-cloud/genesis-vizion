import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { media } from "@/data/media";

export function StudioShowcase() {
  return (
    <section className="section-pad relative overflow-hidden border-t border-border">
      <div className="container-page">
        <SectionTitle eyebrow="Our Studio" lines={["Where innovation", "meets craftsmanship."]} />

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:mt-24">
          {/* Studio Description */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-display uppercase mb-4">Atlas Forge Creative Studio</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We're a multidisciplinary team of game developers, 3D artists, UI/UX designers and creative technologists
                  united by a single goal: craft unforgettable interactive experiences.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="font-cond text-xs uppercase tracking-[0.2em] text-primary mb-2">Specializations</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✦ Full-cycle game development (mobile, PC, console, VR)</li>
                    <li>✦ AAA-quality 3D character and environment art</li>
                    <li>✦ Game UI/UX design and implementation</li>
                    <li>✦ Cinematic trailers and promotional content</li>
                    <li>✦ App store optimization and marketing creatives</li>
                  </ul>
                </div>

                <div>
                  <p className="font-cond text-xs uppercase tracking-[0.2em] text-accent mb-2">Tools & Engines</p>
                  <p className="text-sm text-muted-foreground">
                    Unity • Unreal Engine • Blender • 3DS Max • Substance Painter • Figma • After Effects
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                data-cursor="GO"
                className="group inline-flex items-center gap-3 border border-border px-8 py-4 font-cond text-sm uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
              >
                Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </Reveal>

          {/* Studio Showcase Image */}
          <Reveal delay={0.2}>
            <div className="relative h-[400px] md:h-[520px] overflow-hidden border border-border bg-gradient-to-br from-surface to-background">
              <img
                src={media.heroPoster}
                alt="Atlas Forge Studio Environment"
                loading="lazy"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-cond text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Production Environment
                </p>
                <h4 className="text-lg md:text-xl font-display text-foreground">Atlas Forge Headquarters</h4>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
