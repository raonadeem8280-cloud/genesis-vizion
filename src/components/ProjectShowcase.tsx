import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import type { Project } from "@/data/projects";

export function ProjectBlock({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal y={32}>
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        data-cursor="VIEW"
        className="group block"
        aria-label={`View ${project.title} case study`}
      >
        <div className="relative overflow-hidden border border-border">
          <img
            src={project.image}
            alt={`${project.title} key art`}
            loading={index === 0 ? "eager" : "lazy"}
            width={1600}
            height={900}
            className="img-vibrant aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] md:aspect-[16/8]"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="min-w-0">
            <motion.span
              className="block font-cond text-xs uppercase tracking-[0.2em] text-muted-foreground"
              whileHover={{
                x: 4,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="inline-block font-display text-primary transition-colors group-hover:text-accent"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {project.number}
              </motion.span>
              {" / "}
              <span>{project.category}</span>
            </motion.span>
            <h3 className="type-h3 mt-3 transition-colors duration-500 group-hover:text-primary">{project.title}</h3>
            <p className="mt-3 max-w-[560px] text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
          </div>
          <span className="flex shrink-0 items-center gap-3 font-cond text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground">
            View project
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
