import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import type { Project } from "@/data/projects";

export function ProjectBlock({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal y={40}>
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        data-cursor="VIEW"
        className="group relative block overflow-hidden border border-border"
        aria-label={`View ${project.title} case study`}
      >
        <img
          src={project.image}
          alt={`${project.title} key art`}
          loading={index === 0 ? "eager" : "lazy"}
          width={1600}
          height={900}
          className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] md:aspect-[16/8]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent transition-opacity duration-500 group-hover:from-background/95" />

        <span className="absolute left-5 top-5 font-display text-4xl text-foreground/30 transition-colors duration-500 group-hover:text-primary md:left-8 md:top-8 md:text-6xl">
          {project.number}
        </span>

        <span className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-4 md:inset-x-8 md:bottom-8">
          <span className="block">
            <span className="block font-display text-[clamp(1.8rem,5vw,4.5rem)] uppercase leading-[0.9]">
              {project.title}
            </span>
            <span className="mt-2 block font-cond text-sm uppercase tracking-[0.24em] text-muted-foreground">
              {project.category}
            </span>
          </span>
          <span className="flex translate-y-2 items-center gap-3 font-cond text-sm uppercase tracking-[0.24em] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View project <ArrowRight className="h-4 w-4" />
          </span>
        </span>
      </Link>
    </Reveal>
  );
}
