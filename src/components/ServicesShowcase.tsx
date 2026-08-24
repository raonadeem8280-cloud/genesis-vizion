import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { services } from "@/data/services";

export function ServicesShowcase() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section className="section-light relative border-t border-border section-pad">
      <div className="container-page">
        <SectionTitle eyebrow="Capabilities" lines={["What", "we create."]} />

        <ul className="mt-16 border-t border-border">
          {services.map((s) => (
            <li key={s.number}>
              <Reveal>
                <div
                  onMouseEnter={() => setHover(s.number)}
                  onMouseLeave={() => setHover(null)}
                  className="group relative grid min-h-[110px] grid-cols-[auto_1fr] items-center gap-5 border-b border-border py-8 px-4 transition-colors duration-300 hover:bg-[#111318] md:grid-cols-[80px_1fr_1fr] md:py-10"
                >
                  <span className="font-display text-2xl text-primary md:text-3xl">{s.number}</span>
                  <h3 className="font-display text-[clamp(1.5rem,4vw,3.2rem)] uppercase leading-none transition-colors duration-300 group-hover:text-[#f5f3ed]">
                    {s.title}
                  </h3>
                  <p className="col-span-2 max-w-md text-sm text-[var(--text-muted-light)] transition-colors duration-300 md:col-span-1 md:justify-self-end md:text-right group-hover:text-[#a9adb2]">
                    {s.description}
                  </p>

                  <img
                    src={s.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className={`pointer-events-none absolute right-[22%] top-1/2 hidden h-44 w-72 -translate-y-1/2 object-cover transition-all duration-500 lg:block ${
                      hover === s.number ? "opacity-70 blur-0" : "opacity-0 blur-sm"
                    }`}
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
