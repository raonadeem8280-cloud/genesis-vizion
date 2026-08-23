import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { characters } from "@/data/characters";
import { SectionTitle } from "./SectionTitle";

export function CharacterShowcase() {
  const [index, setIndex] = useState(0);
  const active = characters[index]!;

  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-700"
        style={{
          background: `radial-gradient(50% 60% at 70% 45%, ${active.accent}22, transparent 70%)`,
        }}
      />
      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionTitle eyebrow="Character Design" lines={["Meet the", "worlds we create."]} />

        <div className="mt-16 grid items-end gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
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
                      className="font-display text-xl transition-colors"
                      style={{ color: i === index ? c.accent : undefined }}
                    >
                      0{i + 1}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block font-display text-3xl uppercase transition-colors md:text-5xl ${
                          i === index ? "" : "text-foreground/35 group-hover:text-foreground/70"
                        }`}
                      >
                        {c.name}
                      </span>
                      <span className="mt-1 block font-cond text-xs uppercase tracking-[0.28em] text-muted-foreground">
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
                className="mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                {active.description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="relative flex min-h-[420px] items-end justify-center md:min-h-[640px]">
            <motion.div
              key={`${active.id}-glyph`}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 45, opacity: 0.25 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[12%] h-[55%] w-[55%] border"
              style={{ borderColor: active.accent }}
            />
            <span
              className="pointer-events-none absolute bottom-[6%] select-none font-display text-[22vw] leading-none opacity-[0.07] lg:text-[14vw]"
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
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 max-h-[640px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)]"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
