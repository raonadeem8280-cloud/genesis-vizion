import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { projects } from "@/data/projects";

/**
 * Arc/"coverflow" emphasis: cards nearest the track's horizontal center sit at
 * full scale, cards further out taper down — mirrors the tapered-height card
 * arrangement in the studio's Figma reference, driven here by scroll position
 * instead of fixed per-card sizes so it works at any viewport width.
 */
export function GamesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scales, setScales] = useState<number[]>(() => projects.map(() => 1));
  const ticking = useRef(false);

  const updateScales = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const trackRect = track.getBoundingClientRect();
    const center = trackRect.left + trackRect.width / 2;
    const next = cardRefs.current.map((el) => {
      if (!el) return 1;
      const r = el.getBoundingClientRect();
      const cardCenter = r.left + r.width / 2;
      const dist = Math.min(Math.abs(cardCenter - center) / (trackRect.width / 2), 1);
      return 1 - dist * 0.16;
    });
    setScales(next);
  }, []);

  useEffect(() => {
    updateScales();
    const track = trackRef.current;
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        updateScales();
        ticking.current = false;
      });
    };
    track?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track?.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateScales]);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * (trackRef.current.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section className="border-t border-border bg-[#0A0B0D] section-pad">
      <div className="container-page">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <Reveal>
            <p className="eyebrow text-primary">Our Games</p>
            <h2 className="type-sub mt-4">Worlds in motion.</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scrollBy(-1)}
                className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scrollBy(1)}
                className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex items-end gap-6 overflow-x-auto pb-4 [scrollbar-width:none] snap-x snap-mandatory [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05} className="shrink-0 snap-start basis-[78%] sm:basis-[46%] lg:basis-[30%]">
              <div
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                style={{ transform: `scale(${scales[i] ?? 1})`, transformOrigin: "bottom center" }}
                className="transition-transform duration-200 ease-out"
              >
                <Link to="/work/$slug" params={{ slug: p.slug }} data-cursor="VIEW" className="group block">
                  <div className="card-elevated overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} key art`}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-4 font-cond text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {p.number} / {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl uppercase leading-none transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
