import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { newsItems } from "@/data/news";

export function WhatsNewSection() {
  const [featured, ...rest] = newsItems;

  return (
    <section className="section-light border-t border-border section-pad">
      <div className="container-page">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-8">
          <Reveal>
            <p className="eyebrow text-primary">What's New</p>
          </Reveal>
          <Reveal delay={0.05}>
            <a
              href="#"
              className="group inline-flex items-center gap-2 font-cond text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              View all
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Asymmetric feature + list grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {featured && (
            <Reveal>
              <a href="#" data-cursor="VIEW" className="group block">
                <div className="card-elevated relative overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    loading="eager"
                    className="img-vibrant aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-6">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141212]">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <p className="font-cond text-xs uppercase tracking-[0.2em] text-primary">{featured.category}</p>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-[clamp(1.6rem,3vw,2.6rem)] uppercase leading-[1.02] transition-colors group-hover:text-primary">
                  {featured.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--text-muted-light)]">
                  {featured.date}
                </p>
              </a>
            </Reveal>
          )}

          <div className="flex flex-col gap-5">
            {rest.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.06 + 0.1}>
                <a
                  href="#"
                  data-cursor="VIEW"
                  className="card-elevated group flex items-center gap-4 border border-border bg-background/40 p-4"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#141212]">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                      <p className="font-cond text-[11px] uppercase tracking-[0.2em] text-primary">
                        {item.category}
                      </p>
                    </div>
                    <h4 className="mt-3 font-display text-base uppercase leading-[1.1] transition-colors group-hover:text-primary md:text-lg">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted-light)]">
                      {item.date}
                    </p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="img-vibrant h-20 w-28 shrink-0 rounded-lg object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
