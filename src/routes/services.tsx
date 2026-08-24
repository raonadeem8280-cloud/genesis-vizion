import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { servicesDetailed } from "@/data/services";

const title = "Services — Game Development, 3D Art, UI/UX & ASO | Atlas Forge";
const description =
  "Full-service game production: development, 3D character and environment art, prop and weapon art, game UI/UX, trailers, cinematics, marketing creatives, ASO and Unity integration.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border pb-16 pt-40 md:pb-24 md:pt-52">
        <div className="container-page">
          <p className="eyebrow text-primary">Services</p>
          <h1 className="display-xl mt-6 text-[clamp(4rem,15vw,13rem)]">
            From
            <br />
            Idea
            <br />
            To Play<span className="text-primary">.</span>
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="space-y-16 md:space-y-24">
            {servicesDetailed.map((s, i) => (
              <Reveal key={s.number}>
                <article
                  className={`grid gap-8 md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:[&>figure]:order-first" : ""}`}
                >
                  <div>
                    <p className="font-display text-2xl text-primary">{s.number}</p>
                    <h2 className="mt-2 font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-none">{s.title}</h2>
                    <p className="mt-5 max-w-md text-sm text-muted-foreground md:text-base">{s.description}</p>
                    <ul className="mt-8 border-t border-border">
                      {s.deliverables.map((d) => (
                        <li key={d} className="border-b border-border py-3 font-cond text-sm uppercase tracking-[0.18em]">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <figure className="overflow-hidden border border-border">
                    <img
                      src={s.image}
                      alt={`${s.title} portfolio example`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] hover:scale-[1.04]"
                    />
                  </figure>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-24 border border-border p-10 text-center md:p-20">
              <h2 className="display-xl text-[clamp(2.2rem,7vw,6rem)]">Need all of it?</h2>
              <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
                Most partners start with one discipline and end up handing us the pipeline.
              </p>
              <Link
                to="/contact"
                data-cursor="GO"
                className="group mt-10 inline-flex items-center gap-4 bg-primary px-8 py-4 font-cond text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Start a project <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
