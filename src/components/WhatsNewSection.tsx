import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { newsItems } from "@/data/news";

export function WhatsNewSection() {
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

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {newsItems.map((item, i) => (
            <Reveal
              key={item.slug}
              delay={i * 0.06}
              className={item.size === "large" ? "md:col-span-2 md:row-span-1" : ""}
            >
              <a href="#" data-cursor="VIEW" className="group block">
                <div className="overflow-hidden border border-border">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="aspect-video w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 font-cond text-xs uppercase tracking-[0.2em] text-primary">{item.category}</p>
                <h3
                  className={`mt-2 font-display uppercase leading-[1.02] transition-colors group-hover:text-primary ${
                    item.size === "large" ? "text-[clamp(1.6rem,3vw,2.6rem)]" : "text-[clamp(1.3rem,2.4vw,1.9rem)]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--text-muted-light)]">{item.date}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
