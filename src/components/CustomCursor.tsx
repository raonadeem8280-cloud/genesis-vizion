import { useEffect, useRef, useState } from "react";

/** Desktop-only circular cursor. Add data-cursor="VIEW" to any element to change its label. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    document.documentElement.classList.add("cursor-none-desktop");
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setVisible(true);
      const el = (e.target as HTMLElement | null)?.closest?.("[data-cursor]") as HTMLElement | null;
      setLabel(el?.dataset.cursor ?? "");
    };

    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden items-center justify-center rounded-full border border-foreground/60 text-[10px] font-medium tracking-[0.2em] text-foreground transition-[width,height,background-color,border-color] duration-300 md:flex"
      style={{
        opacity: visible ? 1 : 0,
        width: label ? 84 : 14,
        height: label ? 84 : 14,
        backgroundColor: label ? "rgba(255,70,85,0.9)" : "transparent",
        borderColor: label ? "transparent" : "currentColor",
        mixBlendMode: label ? "normal" : "difference",
      }}
    >
      {label}
    </div>
  );
}
