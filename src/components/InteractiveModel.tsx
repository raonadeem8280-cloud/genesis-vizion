import { useState } from "react";

type Props = {
  /** Spline or Sketchfab embed URL. Empty string renders the poster fallback. */
  modelUrl?: string;
  poster: string;
  title: string;
  description?: string;
};

const hotspots = [
  { id: "01", label: "Modeling", x: "18%", y: "30%" },
  { id: "02", label: "Texturing", x: "42%", y: "68%" },
  { id: "03", label: "Materials", x: "68%", y: "26%" },
  { id: "04", label: "Game Ready", x: "84%", y: "62%" },
];

export function InteractiveModel({ modelUrl, poster, title, description }: Props) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-surface"
      data-cursor={modelUrl ? undefined : "DRAG"}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({
          x: ((e.clientY - r.top) / r.height - 0.5) * -8,
          y: ((e.clientX - r.left) / r.width - 0.5) * 12,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 45%, rgba(25,211,197,0.14), transparent 70%), radial-gradient(40% 40% at 80% 80%, rgba(255,70,85,0.12), transparent 70%)",
        }}
      />

      {modelUrl ? (
        <iframe
          src={modelUrl}
          title={title}
          loading="lazy"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-8" style={{ perspective: 1200 }}>
          <img
            src={poster}
            alt={title}
            loading="lazy"
            width={1400}
            height={900}
            className="max-h-full w-auto max-w-[86%] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          />
        </div>
      )}

      {!modelUrl &&
        hotspots.map((h) => (
          <button
            key={h.id}
            type="button"
            onMouseEnter={() => setActive(h.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(h.id)}
            onBlur={() => setActive(null)}
            aria-label={`${h.id} ${h.label}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: h.x, top: h.y }}
          >
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full border border-accent" />
              <span className="h-1 w-1 rounded-full bg-accent" />
            </span>
            <span
              className={`absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap border border-border bg-background/90 px-3 py-1 font-cond text-[11px] uppercase tracking-[0.2em] transition-opacity duration-300 ${
                active === h.id ? "opacity-100" : "opacity-0"
              }`}
            >
              {h.id} — {h.label}
            </span>
          </button>
        ))}

      <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 border-t border-border bg-background/70 px-5 py-4 backdrop-blur-sm">
        <div>
          <p className="font-cond text-sm uppercase tracking-[0.24em]">{title}</p>
          {description && <p className="mt-1 max-w-md text-xs text-muted-foreground">{description}</p>}
        </div>
        <p className="eyebrow text-muted-foreground">Drag to rotate · Scroll to zoom</p>
      </div>
    </div>
  );
}
