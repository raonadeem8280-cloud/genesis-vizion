import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  lines,
  align = "left",
  size = "section",
  className = "",
}: {
  eyebrow?: string;
  lines: string[];
  align?: "left" | "center";
  size?: "section" | "sub";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-6 text-primary">{eyebrow}</p>
        </Reveal>
      )}
      <h2 className={size === "sub" ? "type-sub" : "type-section"}>
        {lines.map((line, i) => (
          <Reveal key={line} delay={i * 0.06}>
            <span className="block">{line}</span>
          </Reveal>
        ))}
      </h2>
    </div>
  );
}
