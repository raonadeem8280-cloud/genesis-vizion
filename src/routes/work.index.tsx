import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProjectBlock } from "@/components/ProjectShowcase";
import { Reveal } from "@/components/Reveal";
import { projects, workFilters } from "@/data/projects";

const title = "Work — Game Projects, 3D Art & UI Case Studies | Atlas Forge";
const description =
  "Selected game worlds by Atlas Forge: tactical action, open world, sci-fi adventure and urban action projects across development, 3D art, UI/UX and marketing.";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState<string>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <>
      <section className="border-b border-border pb-20 pt-32 md:pb-28 md:pt-48">
        <div className="container-page">
          <p className="eyebrow text-primary">Portfolio</p>
          <h1 className="type-hero mt-8">
            Our
            <br />
            Worlds<span className="text-primary">.</span>
          </h1>
          <p className="mt-10 max-w-[600px] text-sm leading-relaxed text-muted-foreground md:text-base">
            Four fictional worlds built end-to-end in the studio — development, art, interface and campaign.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {workFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`border px-5 py-3 font-cond text-xs uppercase tracking-[0.2em] transition-colors ${
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-16 space-y-16 md:space-y-24">
            {visible.map((p, i) => (
              <ProjectBlock key={p.slug} project={p} index={i} />
            ))}
            {visible.length === 0 && (
              <Reveal>
                <p className="py-20 text-center font-cond uppercase tracking-[0.2em] text-muted-foreground">
                  No projects in this discipline yet.
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
