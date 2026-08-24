import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { media } from "@/data/media";

export function CinematicHero({ onPlay }: { onPlay: () => void }) {
  const reduced = useReducedMotion();
  const [p, setP] = useState({ x: 0, y: 0 });

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
        className="absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-60"
        style={{ transform: `translate3d(${p.x * -12}px, ${p.y * -8}px, 0) scale(1.08)` }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(70%_70%_at_28%_50%,transparent,rgba(8,9,11,0.9))]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/45 to-background/70" />

      <motion.img
        src={media.heroCharacter}
        alt="Original fictional tactical game hero, full body render"
        width={1024}
        height={1536}
        initial={reduced ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-0 right-[-22%] z-20 h-[54%] w-auto max-w-[50vw] object-contain opacity-70 drop-shadow-[0_30px_80px_rgba(0,0,0,0.85)] sm:right-[-10%] md:right-[2%] md:h-[82%] md:opacity-100 lg:right-[5%]"
        style={{ transform: `translate3d(${p.x * 18}px, ${p.y * 10}px, 0)` }}
      />

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
              data-cursor="PLAY"
              className="border border-border px-8 py-4 font-cond text-sm uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
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
