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
      <section className="border-b border-border pb-16 pt-40 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <p className="eyebrow text-primary">Portfolio</p>
          <h1 className="display-xl mt-6 text-[clamp(4rem,15vw,13rem)]">
            Our
            <br />
            Worlds<span className="text-primary">.</span>
          </h1>
          <p className="mt-8 max-w-lg text-sm text-muted-foreground md:text-base">
            Four fictional worlds built end-to-end in the studio — development, art, interface and campaign.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-wrap gap-2">
            {workFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`border px-5 py-3 font-cond text-xs uppercase tracking-[0.24em] transition-colors ${
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 space-y-6 md:space-y-10">
            {visible.map((p, i) => (
              <ProjectBlock key={p.slug} project={p} index={i} />
            ))}
            {visible.length === 0 && (
              <Reveal>
                <p className="py-20 text-center font-cond uppercase tracking-[0.24em] text-muted-foreground">
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
