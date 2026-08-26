import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Gamepad2, Monitor, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";
import { projects } from "@/data/projects";

const PLATFORM_ICON: Record<string, typeof Monitor> = {
  PC: Monitor,
  Console: Gamepad2,
  Mobile: Smartphone,
};

function platformIcons(platform: string) {
  return platform
    .split(/[+/]/)
    .map((s) => s.trim())
    .filter((s) => PLATFORM_ICON[s] || s.includes("Mobile") || s.includes("VR"))
    .map((s) => (s.includes("Mobile") ? "Mobile" : s.includes("VR") ? "Console" : s))
    .filter((s) => PLATFORM_ICON[s]);
}

/**
 * 3D coverflow-style horizontal game showcase — cards tilt in 3D perspective based on
 * distance from viewport center, straighten as they approach center. Inspired by AAA
 * publisher game-collection reels (Riot / Valorant style vibrant poster walls).
 */
export function GamesCollection3D() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [, forceRender] = useState(0);
  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const updateTilts = () => {
      const trackRect = track.getBoundingClientRect();
      const centerX = trackRect.left + trackRect.width / 2;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = (cardCenter - centerX) / (trackRect.width / 2);
        const clamped = Math.max(-1, Math.min(1, distance));
        const rotateY = clamped * -28;
        const scale = 1 - Math.abs(clamped) * 0.14;
        const translateZ = -Math.abs(clamped) * 60;
        const opacity = 1 - Math.abs(clamped) * 0.35;

        card.style.transform = `perspective(1200px) rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`;
        card.style.opacity = `${Math.max(0.5, opacity)}`;
      });
      raf = requestAnimationFrame(updateTilts);
    };

    raf = requestAnimationFrame(updateTilts);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Mouse drag to scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMouseDown = (e: MouseEvent) => {
      dragRef.current.isDragging = true;
      dragRef.current.startX = e.pageX - track.offsetLeft;
      dragRef.current.scrollLeft = track.scrollLeft;
      track.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.isDragging) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - dragRef.current.startX) * 1.5; // Drag sensitivity
      track.scrollLeft = dragRef.current.scrollLeft - walk;
    };

    const handleMouseUp = () => {
      dragRef.current.isDragging = false;
      track.style.cursor = "grab";
    };

    track.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    track.addEventListener("mouseleave", handleMouseUp);

    return () => {
      track.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      track.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * (trackRef.current.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section className="ambient-glow relative overflow-hidden border-t border-border bg-[#08090B] section-pad">
      <div className="container-page relative z-10">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <Reveal>
            <p className="eyebrow text-primary">Our Universe</p>
            <h2 className="type-sub mt-4">Games we've shipped.</h2>
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
      </div>

      <div
        ref={trackRef}
        style={{ perspective: "1400px" }}
        className="mt-16 flex items-center gap-1 overflow-x-auto px-[10vw] py-12 [overflow-y:visible] [scrollbar-width:none] snap-x snap-mandatory [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab hover:cursor-grab active:cursor-grabbing select-none"
      >
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to="/work/$slug"
            params={{ slug: p.slug }}
            data-cursor="VIEW"
            className="group relative shrink-0 snap-center basis-[72%] sm:basis-[38%] lg:basis-[20%]"
          >
            <div
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="relative transition-[transform,opacity] duration-100 ease-out will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="card-elevated relative aspect-[2/3] overflow-hidden border border-border/60 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <img
                  src={p.image}
                  alt={`${p.title} key art`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="img-vibrant h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-background/40" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent" />

                {/* Logo-style title */}
                <div className="absolute inset-x-0 top-6 px-4 text-center">
                  <h3 className="font-display text-xl uppercase leading-[0.95] tracking-tight text-foreground drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-cond text-[10px] uppercase tracking-[0.25em] text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {p.category}
                  </p>
                </div>

                {/* Platform icons */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-4">
                  {platformIcons(p.platform).map((label) => {
                    const Icon = PLATFORM_ICON[label];
                    return (
                      <span
                        key={label}
                        title={label}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-background/70 backdrop-blur-sm"
                      >
                        <Icon className="h-3.5 w-3.5 text-foreground" />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
