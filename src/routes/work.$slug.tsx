import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { InteractiveModel } from "@/components/InteractiveModel";
import { YouTubeModal } from "@/components/YouTubeModal";
import { getProject, projects } from "@/data/projects";
import { media } from "@/data/media";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Atlas Forge" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.project.title} — ${loaderData.project.category} | Atlas Forge`;
    const d = loaderData.project.summary;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectPage,
});

function ProjectNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <div className="text-center">
        <h1 className="display-xl text-6xl">Project not found</h1>
        <Link to="/work" className="mt-8 inline-block border border-border px-6 py-3 font-cond uppercase tracking-[0.24em]">
          Back to work
        </Link>
      </div>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length]!;

  return (
    <>
      {/* 1 — Hero */}
      <section className="relative flex min-h-[80svh] items-end overflow-hidden md:min-h-screen">
        <img
          src={project.image}
          alt={`${project.title} key art`}
          width={1600}
          height={900}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/40" />
        <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-16 md:px-10 md:pb-24">
          <p className="eyebrow text-primary">
            {project.number} — {project.category}
          </p>
          <h1 className="display-xl mt-6 text-[clamp(3.2rem,13vw,12rem)]">{project.title}</h1>
          <p className="mt-6 max-w-xl text-sm text-muted-foreground md:text-lg">{project.summary}</p>
        </div>
      </section>

      {/* 2 — Overview */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-10">
          <Reveal>
            <p className="text-base leading-relaxed md:text-2xl">{project.overview}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="border-t border-border">
              {[
                ["Platform", project.platform],
                ["Genre", project.genre],
                ["Services", project.servicesProvided.join(", ")],
                ["Year", project.year],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[110px_1fr] gap-4 border-b border-border py-4">
                  <dt className="font-cond text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{k}</dt>
                  <dd className="text-sm">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 3 — Video */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <p className="eyebrow mb-8 text-primary">Gameplay & Cinematics</p>
          <YouTubeModal
            videoId={media.showreelVideoId}
            title={`${project.title} trailer`}
            poster={media.showreelPoster}
            label="Play trailer"
          />
        </div>
      </section>

      {/* 4 — Character development */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 md:grid-cols-2 md:px-10">
          <Reveal>
            <SectionTitle eyebrow="Character Development" lines={["Built", "to be read."]} />
            <p className="mt-8 max-w-md text-sm text-muted-foreground md:text-base">{project.characterNote}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={project.character}
              alt={`${project.title} character render`}
              loading="lazy"
              className="mx-auto max-h-[620px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            />
          </Reveal>
        </div>
      </section>

      {/* 5 — Environment */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <SectionTitle eyebrow="Environment Design" lines={["A world", "with scale."]} />
          <Reveal>
            <img
              src={project.environment}
              alt={`${project.title} environment art`}
              loading="lazy"
              className="mt-12 aspect-[16/9] w-full border border-border object-cover"
            />
            <p className="mt-6 max-w-2xl text-sm text-muted-foreground">{project.environmentNote}</p>
          </Reveal>
        </div>
      </section>

      {/* 6 — Interactive 3D asset */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <p className="eyebrow mb-8 text-primary">Interactive Asset</p>
          <InteractiveModel
            modelUrl={media.interactiveModelUrl}
            poster={media.interactiveModelPoster}
            title={`${project.title} — signature weapon`}
            description="Game-ready hard-surface asset authored for first-person inspection."
          />
        </div>
      </section>

      {/* 7 — UI */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 md:grid-cols-[1fr_1.2fr] md:px-10">
          <Reveal>
            <SectionTitle eyebrow="Game UI" lines={["Interface", "in play."]} />
            <p className="mt-8 max-w-md text-sm text-muted-foreground md:text-base">{project.uiNote}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={project.ui}
              alt={`${project.title} interface design`}
              loading="lazy"
              className="aspect-video w-full border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* 8 — Marketing */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <SectionTitle eyebrow="Marketing Artwork" lines={["Made", "to convert."]} />
          <Reveal>
            <img
              src={project.marketing}
              alt={`${project.title} marketing key art`}
              loading="lazy"
              className="mt-12 aspect-[16/9] w-full border border-border object-cover"
            />
            <p className="mt-6 max-w-2xl text-sm text-muted-foreground">{project.marketingNote}</p>
          </Reveal>
        </div>
      </section>

      {/* 9 — Gallery */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <p className="eyebrow mb-8 text-primary">Gallery</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {project.gallery.map((g, i) => (
              <Reveal key={`${g}-${i}`} delay={i * 0.05}>
                <img
                  src={g}
                  alt={`${project.title} production still ${i + 1}`}
                  loading="lazy"
                  data-cursor="VIEW"
                  className="aspect-[4/3] w-full border border-border object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Next project */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <p className="eyebrow text-muted-foreground">Next project</p>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            data-cursor="GO"
            className="group mt-6 flex flex-wrap items-end justify-between gap-6"
          >
            <span className="display-xl text-[clamp(3rem,11vw,10rem)] transition-colors group-hover:text-primary">
              {next.title}
            </span>
            <ArrowRight className="h-10 w-10 transition-transform duration-500 group-hover:translate-x-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
