import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

export function GameProjectsShowcase() {
  return (
    <section className="border-t border-border section-pad">
      <div className="container-page">
        <SectionTitle eyebrow="Featured Games" lines={["Our Work", "in Motion."]} />

        <div className="mt-16 space-y-8">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="group block"
                aria-label={`View ${project.title} project`}
              >
                <div className="relative overflow-hidden border border-border grid md:grid-cols-[1fr_auto] gap-8 p-8 bg-gradient-to-br from-surface/50 to-transparent hover:from-surface hover:to-surface/50 transition-colors duration-300">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-[240px] md:h-auto md:w-[300px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col justify-between min-w-0 md:min-w-[300px]">
                    <div>
                      <div className="mb-4">
                        <span className="inline-block font-display text-xl text-primary mr-3">{project.number}</span>
                        <span className="font-cond text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display uppercase mb-3 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block font-cond text-[10px] uppercase tracking-[0.15em] text-accent border border-accent/30 px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 font-cond text-sm uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
                      Explore Project
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* See All Projects */}
          <Reveal delay={0.3}>
            <Link
              to="/work"
              data-cursor="GO"
              className="inline-flex items-center gap-3 border border-border px-8 py-4 font-cond text-sm uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary mt-8"
            >
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
