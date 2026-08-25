import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { media } from "@/data/media";
import { characters } from "@/data/characters";

export function CinematicHero({ onPlay }: { onPlay: () => void }) {
  const reduced = useReducedMotion();
  const [p, setP] = useState({ x: 0, y: 0 });
  const [videoReady, setVideoReady] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const active = characters[charIndex];

  const cycleCharacter = () => setCharIndex((i) => (i + 1) % characters.length);

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: MouseEvent) => {
      setP({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  return (
    <section className="relative grain flex min-h-[92svh] items-end overflow-hidden pb-16 pt-[calc(88px+3rem)] md:min-h-screen md:items-center md:pb-0">
      <img
        src={media.heroPoster}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        fetchPriority="high"
        className="img-vibrant absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-60"
        style={{ transform: `translate3d(${p.x * -12}px, ${p.y * -8}px, 0) scale(1.08)` }}
      />

      {/* Showreel loop as an ambient background video — skipped entirely under reduced-motion */}
      {!reduced && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${media.showreelVideoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${media.showreelVideoId}&modestbranding=1&rel=0&showinfo=0&disablekb=1&playsinline=1`}
            title="Studio showreel — ambient background loop"
            aria-hidden="true"
            tabIndex={-1}
            allow="autoplay; encrypted-media"
            onLoad={() => setVideoReady(true)}
            className={`pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[178%] -translate-x-1/2 -translate-y-1/2 sm:h-[120%] sm:w-[160%] ${
              videoReady ? "opacity-90" : "opacity-0"
            } transition-opacity duration-[1200ms]`}
          />
        </div>
      )}

      <div className="absolute inset-0 z-0 bg-[radial-gradient(70%_70%_at_28%_50%,transparent,rgba(8,9,11,0.32)_100%)]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      {/* Dedicated legibility gradient behind the copy column only — keeps the headline readable now that the
          global vignette above is much lighter and the video shows through everywhere else. */}
      <div className="absolute inset-y-0 left-0 z-0 w-full bg-gradient-to-r from-background/70 via-background/22 to-transparent md:w-[70%]" />

      <div className="container-page relative z-30">
        <div className="max-w-[640px] md:max-w-[52%]">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-accent"
          >
            Independent game development &amp; creative studio
          </motion.p>

          <h1 className="type-hero mt-8">
            {["We Build", "Worlds."].map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={reduced ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word === "Worlds." ? (
                    <>
                      Worlds<span className="text-primary">.</span>
                    </>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 max-w-[560px] text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Games, characters, interfaces and campaigns built to make players stop, look and play.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/work"
              data-cursor="GO"
              className="bg-primary px-8 py-4 font-cond text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Explore our work
            </Link>
            <button
              type="button"
              onClick={onPlay}
              data-cursor="GO"
              className="bg-primary px-8 py-4 font-cond text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Play showreel
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="eyebrow text-muted-foreground">Scroll</span>
        <span className="relative block h-14 w-px bg-border">
          <motion.span
            className="absolute inset-x-0 top-0 block h-5 bg-primary"
            animate={reduced ? {} : { y: [0, 36, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    </section>
  );
}
