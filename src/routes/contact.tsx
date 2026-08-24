import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const title = "Start a Project — Contact Atlas Forge Game Studio";
const description =
  "Tell us about your game, prototype or campaign. Atlas Forge builds game development, art, UI/UX, trailers, marketing and store creatives.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const projectTypes = ["Game Development", "Game Art", "UI/UX", "Marketing", "ASO", "Trailer", "Other"];
const budgets = ["Under $25k", "$25k – $75k", "$75k – $200k", "$200k+", "Not sure yet"];

const fieldClass =
  "w-full border border-border bg-surface px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";
const labelClass = "eyebrow mb-3 block text-muted-foreground";

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="border-b border-border pb-16 pt-40 md:pb-24 md:pt-52">
        <div className="container-page">
          <p className="eyebrow text-primary">Contact</p>
          <h1 className="display-xl mt-6 text-[clamp(4rem,15vw,13rem)]">
            Start
            <br />
            A Project<span className="text-primary">.</span>
          </h1>
          <p className="mt-8 max-w-lg text-sm text-muted-foreground md:text-base">
            Tell us what you're building and where it hurts. We reply within two working days with a plan, not a
            brochure.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            {sent ? (
              <div className="border border-primary p-10 md:p-16">
                <h2 className="display-xl text-4xl md:text-6xl">Brief received.</h2>
                <p className="mt-6 max-w-md text-sm text-muted-foreground">
                  Thanks — this demo form doesn't send anywhere yet. Connect it to your inbox or a backend and it's
                  live.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 border border-border px-6 py-3 font-cond text-xs uppercase tracking-[0.2em] hover:border-primary hover:text-primary"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@studio.com" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="company">
                    Company
                  </label>
                  <input id="company" name="company" placeholder="Studio or publisher" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="type">
                    Project type
                  </label>
                  <select id="type" name="type" className={fieldClass} defaultValue={projectTypes[0]}>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="budget">
                    Budget range
                  </label>
                  <select id="budget" name="budget" className={fieldClass} defaultValue={budgets[0]}>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Platform, scope, timeline and what you need from us."
                    className={fieldClass}
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    data-cursor="GO"
                    className="group inline-flex items-center gap-4 bg-primary px-10 py-5 font-cond text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    Send brief <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-border">
              {[
                ["General", "hello@atlasforge.studio"],
                ["New business", "projects@atlasforge.studio"],
                ["Response time", "Within 2 working days"],
                ["Time zones", "EU / NA / APAC coverage"],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border py-5">
                  <p className="eyebrow text-muted-foreground">{k}</p>
                  <p className="mt-2 font-cond text-lg uppercase tracking-[0.12em]">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-[#08090B] section-pad">
        <div className="container-page">
          <h2 className="display-xl text-[clamp(2.5rem,10vw,9rem)]">
            Let's build
            <br />
            the next
            <br />
            world<span className="text-primary">.</span>
          </h2>
        </div>
      </section>
    </>
  );
}
