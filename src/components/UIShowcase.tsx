import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { uiScreens } from "@/data/media";
import { SectionTitle } from "./SectionTitle";

export function UIShowcase() {
  const [active, setActive] = useState(0);
  const screen = uiScreens[active]!;

  return (
    <section className="border-t border-border section-pad">
      <div className="container-page">
        <SectionTitle eyebrow="Game UI / UX" lines={["Interfaces", "built to play."]} />

        <div className="mt-12 flex flex-wrap gap-2">
          {uiScreens.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`border px-5 py-3 font-cond text-xs uppercase tracking-[0.2em] transition-colors ${
                i === active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="relative mt-12" style={{ perspective: 1600 }}>
          <div className="absolute inset-x-[8%] -top-6 hidden h-full border border-border/50 bg-surface/40 md:block" style={{ transform: "rotateX(6deg) scale(0.94)" }} />
          <div className="absolute inset-x-[4%] -top-3 hidden h-full border border-border/70 bg-surface/60 md:block" style={{ transform: "rotateX(4deg) scale(0.97)" }} />

          <div className="relative border border-border bg-surface p-2 md:p-3">
            <div className="mb-2 flex items-center justify-between px-2 font-cond text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Interface Preview</span>
              <span>{screen.label}</span>
            </div>
            <div className="relative aspect-video overflow-hidden bg-background">
              <AnimatePresence mode="wait">
                <motion.img
                  key={screen.id}
                  src={screen.image}
                  alt={`${screen.label} game interface design`}
                  loading="lazy"
                  width={1600}
                  height={900}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
