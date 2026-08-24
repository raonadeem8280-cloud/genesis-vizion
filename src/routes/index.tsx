import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CinematicHero } from "@/components/CinematicHero";
import { GamesCarousel } from "@/components/GamesCarousel";
import { WhatsNewSection } from "@/components/WhatsNewSection";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { ProjectBlock } from "@/components/ProjectShowcase";
import { CharacterShowcase } from "@/components/CharacterShowcase";
import { UIShowcase } from "@/components/UIShowcase";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { ArtGallery } from "@/components/ArtGallery";
import { InteractiveModel } from "@/components/InteractiveModel";
import { YouTubeModal } from "@/components/YouTubeModal";
import { projects } from "@/data/projects";
import { media } from "@/data/media";

const title = "Atlas Forge — Premium Game Development, Art & UI/UX Studio";
const description =
  "Game development, 3D art, game UI/UX, cinematic trailers, marketing creatives and publishing visuals for mobile, PC and console games.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stages = [
  { n: "01", t: "Discover", d: "Pillars, references and the one feeling the game must deliver." },
  { n: "02", t: "Design", d: "Silhouettes, flows and art direction locked before production." },
  { n: "03", t: "Build", d: "Assets, systems and interfaces produced against real budgets." },
  { n: "04", t: "Ship", d: "Polish, store presence, trailers and the launch window." },
];

function Index() {
  const [reelOpen, setReelOpen] = useState(false);

  return (
    <>
      <CinematicHero onPlay={() => setReelOpen(true)} />

      <GamesCarousel />
      <WhatsNewSection />

      {/* 02 — Studio introduction */}
      <section className="relative border-t border-border section-pad">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="display-xl text-[clamp(2.2rem,6vw,5rem)]">
              We don't just
              <br />
              make games.
            </h2>
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <h3 className="display-xl text-[clamp(2.2rem,6vw,5rem)] text-primary">
                We build experiences
                <br />
                people remember.
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Atlas Forge is an independent studio working across game development, game art, UI/UX, trailers,
                marketing and publishing visuals. We take a pillar, a prototype or a half-finished build and carry it
                to a shipped, sellable world — characters that read at a glance, environments with real scale,
                interfaces that disappear into play, and campaigns that make people click.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 hairline" />
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  ["12+", "Years shipping"],
                  ["40+", "Titles supported"],
                  ["6", "Disciplines in-house"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <p className="font-display text-3xl md:text-5xl">{k}</p>
                    <p className="mt-2 font-cond text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 — Selected worlds */}
      <section className="border-t border-border section-pad">
        <div className="container-page">
          <SectionTitle eyebrow="Selected Work" lines={["Selected", "worlds"]} />
          <div className="mt-16 space-y-6 md:space-y-10">
            {projects.map((p, i) => (
              <ProjectBlock key={p.slug} project={p} index={i} />
            ))}
          </div>
          <Reveal>
            <Link
              to="/work"
              data-cursor="GO"
              className="mt-12 inline-flex items-center gap-3 border border-border px-8 py-4 font-cond text-sm uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
            >
              All projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 04 — Interactive 3D lab */}
      <section className="section-light border-t border-border section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionTitle eyebrow="3D Lab" lines={["Built", "in every", "dimension."]} />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-sm text-muted-foreground md:text-base">
                Characters. Props. Weapons. Worlds. Every asset is authored game-ready — clean topology, sane UVs,
                LODs and materials that survive the engine they ship in.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <InteractiveModel
              modelUrl={media.interactiveModelUrl}
              poster={media.interactiveModelPoster}
              title="VX-7 Energy Carbine — original asset"
              description="Hard-surface study: matte graphite, brushed steel, emissive charge chamber."
            />
          </Reveal>
        </div>
      </section>

      <CharacterShowcase />
      <UIShowcase />

      {/* 07 — Showreel */}
      <section className="border-t border-border section-pad">
        <div className="container-page">
          <SectionTitle eyebrow="Showreel" lines={["Our work", "in motion."]} />
          <div className="mt-12">
            <YouTubeModal
              videoId={media.showreelVideoId}
              title="Studio Showreel"
              poster={media.showreelPoster}
              label="Play showreel"
            />
          </div>
        </div>
      </section>

      <ServicesShowcase />
      <ArtGallery />

      {/* 10 — Process */}
      <section className="border-t border-border section-pad">
        <div className="container-page">
          <SectionTitle eyebrow="Process" lines={["How we", "build."]} />
          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
            <div className="grid gap-10 md:grid-cols-4">
              {stages.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="relative">
                    <span className="relative z-10 mb-6 hidden h-3 w-3 rotate-45 border border-primary bg-background md:block" />
                    <p className="font-display text-2xl text-primary">{s.n}</p>
                    <h3 className="mt-2 font-display text-2xl uppercase md:text-3xl">{s.t}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11 — Statement */}
      <section className="grain relative overflow-hidden border-t border-border section-pad">
        <div className="container-page">
          <h2 className="display-xl relative z-0 text-[clamp(3.5rem,15vw,13rem)] text-foreground/90">
            <span className="block">Art</span>
            <span className="block text-primary">Meets</span>
            <span className="block">Technology.</span>
          </h2>
          <img
            src={media.interactiveModelPoster}
            alt="Original sci-fi weapon render"
            loading="lazy"
            className="pointer-events-none absolute right-0 top-1/2 z-10 w-[70%] max-w-3xl -translate-y-1/2 rotate-[-8deg] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] md:right-[6%]"
          />
        </div>
      </section>

      {/* 12 — Final CTA */}
      <section className="border-t border-border bg-[#08090B] section-pad">
        <div className="container-page">
          <SectionTitle eyebrow="Next" lines={["Let's build", "the next", "world."]} />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-sm text-muted-foreground md:text-base">
              Have a game, prototype or campaign in mind? Let's make it unforgettable.
            </p>
            <Link
              to="/contact"
              data-cursor="GO"
              className="group mt-10 inline-flex items-center gap-6 bg-primary px-8 py-5 font-cond text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Start a project
              <ArrowRight className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-3" />
            </Link>
          </Reveal>
        </div>
      </section>

      {reelOpen && <HeroReel onClose={() => setReelOpen(false)} />}
    </>
  );
}

function HeroReel({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Studio Showreel"
      onClick={onClose}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-5 top-5 border border-border px-4 py-2 font-cond text-xs uppercase tracking-[0.2em]"
      >
        Close
      </button>
      <div className="aspect-video w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <iframe
          className="h-full w-full border border-border"
          src={`https://www.youtube-nocookie.com/embed/${media.showreelVideoId}?autoplay=1&rel=0`}
          title="Studio Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
