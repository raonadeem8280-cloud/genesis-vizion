import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { media, galleryImages } from "@/data/media";

const title = "Studio — A Multidisciplinary Game Team | Atlas Forge";
const description =
  "Atlas Forge is a multidisciplinary game studio working across development, 3D art, design and marketing for mobile, PC and console titles.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const blocks = [
  {
    t: "Capabilities",
    items: ["Game development", "3D character art", "Environment art", "Prop & weapon art", "Game UI/UX", "Trailers & cinematics", "Marketing creatives", "ASO & store design"],
  },
  { t: "Tools", items: ["Unity", "Unreal", "Blender", "3ds Max", "Substance", "Photoshop", "Figma", "After Effects"] },
  { t: "Workflow", items: ["Pillars & references", "Blockout & greybox", "Art direction lock", "Production sprints", "Review gates", "Optimisation pass", "Launch support"] },
  { t: "Industries", items: ["Premium games", "Free-to-play", "Publishing", "Esports", "Interactive media", "Brand collaborations"] },
  { t: "Platforms", items: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "iOS", "Android", "Cloud & streaming"] },
];

function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden border-b border-border">
        <img
          src={media.heroPoster}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/40" />
        <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-16 pt-40 md:px-10 md:pb-24">
          <p className="eyebrow text-primary">The Studio</p>
          <h1 className="display-xl mt-6 text-[clamp(4rem,14vw,12rem)]">
            Play
            <br />
            Is Our
            <br />
            Language<span className="text-primary">.</span>
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 md:grid-cols-2 md:px-10">
          <Reveal>
            <p className="text-base leading-relaxed md:text-2xl">
              We are a multidisciplinary team of developers, artists, designers and marketers who spend our days
              arguing about silhouettes, frame budgets and how a menu should feel under a thumb.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Atlas Forge exists because most studios have to split a game across five vendors — one for art, one for
              UI, one for the trailer, another for store creatives — and the seams always show. We keep development,
              game art, interface design and campaign work under one roof so the world stays coherent from the first
              blockout to the last app-store screenshot. No fake logos, no borrowed IP: everything on this site is
              original work built in-house.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border section-pad">
        <div className="container-page">
          <SectionTitle eyebrow="Inside" lines={["What we", "run on."]} />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {blocks.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.06}>
                <h3 className="font-display text-2xl uppercase">{b.t}</h3>
                <ul className="mt-5 border-t border-border">
                  {b.items.map((it) => (
                    <li key={it} className="border-b border-border py-3 font-cond text-sm uppercase tracking-[0.18em] text-muted-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border section-pad">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {galleryImages.slice(0, 6).map((g) => (
              <Reveal key={g.alt}>
                <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full border border-border object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
