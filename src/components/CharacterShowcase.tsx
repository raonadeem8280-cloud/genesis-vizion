import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { characters } from "@/data/characters";
import { SectionTitle } from "./SectionTitle";

export function CharacterShowcase() {
  const [index, setIndex] = useState(0);
  const active = characters[index]!;

  // Auto-switch characters every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % characters.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-pad relative overflow-hidden border-t border-border">
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-[background] duration-700"
        style={{
          background: `radial-gradient(50% 60% at 72% 45%, ${active.accent}1c, transparent 70%)`,
        }}
      />
      <div className="container-page relative z-30">
        <SectionTitle eyebrow="Character Design" lines={["Meet the", "worlds we create."]} />

        <div className="mt-16 grid items-end gap-14 md:mt-24 lg:grid-cols-[1fr_1fr]">
          <div className="min-w-0">
            <ul className="border-t border-border">
              {characters.map((c, i) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-current={i === index}
                    className="group flex w-full items-center gap-6 border-b border-border py-6 text-left transition-colors"
                  >
                    <span
                      className="font-display text-lg transition-colors"
                      style={{ color: i === index ? c.accent : undefined }}
                    >
                      0{i + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`type-h3 block transition-colors ${
                          i === index ? "" : "text-foreground/35 group-hover:text-foreground/70"
                        }`}
                      >
                        {c.name}
                      </span>
                      <span className="mt-2 block font-cond text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {c.role}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <AnimatePresence mode="wait">
              <motion.p
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="mt-10 max-w-[560px] text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                {active.description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="relative flex min-h-[420px] items-end justify-center md:min-h-[620px]">
            <span
              className="pointer-events-none absolute bottom-[8%] left-1/2 z-10 -translate-x-1/2 select-none whitespace-nowrap font-display text-[18vw] leading-none opacity-[0.05] lg:text-[11vw]"
              aria-hidden
            >
              {active.name.split(" ")[0]}
            </span>
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={`${active.name}, ${active.role} character render`}
                loading="lazy"
                width={1024}
                height={1536}
                initial={{ opacity: 0, x: 24, rotateY: -20, rotateX: 5 }}
                animate={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0 }}
                exit={{ opacity: 0, x: -24, rotateY: 20, rotateX: -5 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="img-vibrant relative z-20 max-h-[620px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)]"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
