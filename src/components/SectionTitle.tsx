import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  lines,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  lines: string[];
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-5 text-primary">{eyebrow}</p>
        </Reveal>
      )}
      <h2 className="display-xl text-[clamp(2.6rem,8vw,7rem)]">
        {lines.map((line, i) => (
          <Reveal key={line} delay={i * 0.08}>
            <span className="block">{line}</span>
          </Reveal>
        ))}
      </h2>
    </div>
  );
}
