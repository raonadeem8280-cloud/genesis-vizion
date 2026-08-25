import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { media } from "@/data/media";
import { projects } from "@/data/projects";
import { characters } from "@/data/characters";

const latest = projects[0];

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

      {/* Interactive character stage — shifted off the video's focal area, smaller, click to cycle cast members
          with a CSS 3D flip (perspective + rotateY). No WebGL model in this project yet, so this is the
          "3D style" interaction achievable with the existing stack (motion + CSS 3D transforms). Nothing else
          is absolutely positioned over this column now, so it can never get covered by another floating panel. */}
      <div
        className="group absolute bottom-0 right-[2%] z-20 flex flex-col items-center gap-3 sm:right-[4%] md:right-[6%] lg:right-[8%]"
        style={{ perspective: 1400 }}
      >
        {/* Accent-colored glow that blooms in on hover — the "pose" reaction stand-in for a real pose swap,
            which would need per-character pose art we don't have. */}
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-[8%] h-[38vh] w-[38vh] rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
          style={{ backgroundColor: active.accent }}
        />

        <AnimatePresence mode="popLayout">
          <motion.button
            key={active.id}
            type="button"
            onClick={cycleCharacter}
            data-cursor="SWITCH"
            aria-label={`Switch character — currently ${active.name}, click to view next`}
            initial={reduced ? false : { rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { rotateY: -90, opacity: 0 }}
            whileTap={reduced ? undefined : { scale: 0.94 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d", WebkitTapHighlightColor: "transparent" }}
            className="relative block cursor-pointer rounded-full border-none bg-transparent p-0 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
          >
            <motion.img
              src={active.image}
              alt={`${active.name}, ${active.role} — click to view the next character`}
              width={640}
              height={960}
              animate={reduced ? {} : { y: [0, -10, 0] }}
              whileHover={reduced ? undefined : { scale: 1.07, rotate: -3, y: -14 }}
              transition={reduced ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="img-vibrant h-[42vh] w-auto max-w-[80vw] object-contain opacity-90 drop-shadow-[0_30px_80px_rgba(0,0,0,0.85)] sm:h-[48vh] md:h-[58vh]"
              style={{ transform: `translate3d(${p.x * 14}px, ${p.y * 8}px, 0)` }}
            />
          </motion.button>
        </AnimatePresence>

        <motion.div
          key={`${active.id}-tag`}
          initial={reduced ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="card-elevated relative mb-4 flex items-center gap-2 border border-border bg-background/60 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: active.accent }} />
          <span className="font-cond text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {active.name} · <span className="text-foreground">{active.role}</span>
          </span>
        </motion.div>
      </div>

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
            <button type="button" onClick={onPlay} data-cursor="PLAY" className="pill-cta group">
              <span className="pill-cta-icon">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="font-cond text-sm uppercase tracking-[0.2em]">Play showreel</span>
            </button>
          </motion.div>

          {/* Release announcement — same mechanic as the reference (mark, tagline, title, watch pill), built from
              this project's own data. Lives inline in the copy column (not absolutely positioned) so it can
              never drift over the character stage on the right, at any viewport height. */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex max-w-md items-center gap-4 rounded-2xl border border-border bg-background/55 px-5 py-4 backdrop-blur-md"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <span className="block h-4 w-4 rotate-45 border-2 border-primary" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-cond text-[10px] uppercase tracking-[0.2em] text-primary">
                {latest.category} — Now Live
              </p>
              <h3 className="font-display text-base uppercase leading-none">{latest.title}</h3>
            </div>
            <button
              type="button"
              onClick={onPlay}
              data-cursor="PLAY"
              aria-label={`Watch the ${latest.title} trailer`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.63_0.19_22)] to-[oklch(0.75_0.12_35)] text-white shadow-[0_10px_24px_-8px_oklch(0.63_0.19_22_/_0.45)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <Play className="h-4 w-4 fill-current" />
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
