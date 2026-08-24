import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUp, ArrowDown, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { media } from "@/data/media";

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

/* ------------------------------------------------------------------ */
/* Data — edit freely, nothing else needs to change                    */
/* ------------------------------------------------------------------ */

const projectTypes = [
  { n: "01", label: "Game Development" },
  { n: "02", label: "Game Art & 3D" },
  { n: "03", label: "Game UI / UX" },
  { n: "04", label: "Game Marketing" },
  { n: "05", label: "ASO & Store Art" },
  { n: "06", label: "Trailer / Cinematic" },
  { n: "07", label: "Other" },
];

const platforms = ["Mobile", "PC", "Console", "Web", "Multiple", "Not Sure Yet"];
const stages = ["Idea", "Prototype", "In Production", "Live Game", "Marketing / Launch", "Other"];
const budgets = ["Under $5K", "$5K–$15K", "$15K–$30K", "$30K–$75K", "$75K+", "Let's Discuss"];
const timelines = ["ASAP", "1–3 Months", "3–6 Months", "6+ Months", "Flexible"];

const socials = [
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "ArtStation", href: "#" },
  { label: "YouTube", href: "#" },
];

const contactChannels = [
  { k: "General", v: "hello@atlasforge.studio" },
  { k: "Projects", v: "projects@atlasforge.studio" },
];

/* ------------------------------------------------------------------ */

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ContactPage() {
  const [projectType, setProjectType] = useState<string | null>(null);
  const [platform, setPlatform] = useState<string | null>(null);
  const [stage, setStage] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Tell us your name.";
    if (!String(data.get("email") ?? "").trim()) next.email = "We need an email to reply.";
    if (!projectType) next.type = "Pick a project type.";
    if (!String(data.get("message") ?? "").trim()) next.message = "A few lines about the project.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <>
      <ContactHero />
      <ProjectTypePicker selected={projectType} onSelect={setProjectType} />
      <BriefSection
        projectType={projectType}
        platform={platform}
        setPlatform={setPlatform}
        stage={stage}
        setStage={setStage}
        budget={budget}
        setBudget={setBudget}
        timeline={timeline}
        setTimeline={setTimeline}
        status={status}
        setStatus={setStatus}
        errors={errors}
        onSubmit={onSubmit}
      />
      <ReachSection />
      <FinalCinematicCTA />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 1 — Cinematic hero                                                  */
/* ------------------------------------------------------------------ */

function ContactHero() {
  const reduced = useReducedMotion();
  const [p, setP] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: MouseEvent) => {
      setP({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  const words = ["Let's", "Build", "Something", "Playable."];

  return (
    <section className="relative grain flex min-h-[78svh] items-end overflow-hidden bg-[#07080A] pb-14 pt-[calc(64px+2.5rem)] md:min-h-[94svh] md:items-center md:pb-0">
      {/* background gradient wash */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(65%_65%_at_78%_38%,rgba(217,58,71,0.16),transparent_70%)]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#07080A] via-[#07080A]/70 to-[#07080A]/20" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#07080A] via-transparent to-[#07080A]/50" />

      {/* faint technical grid + coordinates */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <span
        aria-hidden
        className="absolute right-6 top-24 z-[1] hidden font-cond text-xs uppercase tracking-[0.3em] text-white/25 md:block"
        style={{ transform: `translate3d(${p.x * -8}px, ${p.y * -5}px, 0)` }}
      >
        41.02°N / BRIEF-004
      </span>
      <span
        aria-hidden
        className="absolute right-[8%] top-1/2 z-[1] hidden h-6 w-6 -translate-y-1/2 border border-white/15 md:block"
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/15" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/15" />
      </span>

      {/* character art, right-aligned, subtle parallax */}
      <motion.img
        src={media.heroCharacter}
        alt=""
        aria-hidden
        width={1024}
        height={1536}
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-0 right-[-18%] z-10 h-[58%] w-auto max-w-[52vw] object-contain opacity-80 drop-shadow-[0_30px_80px_rgba(0,0,0,0.85)] sm:right-[-6%] md:right-[0%] md:h-[92%] md:opacity-100 lg:right-[3%]"
        style={{ transform: `translate3d(${p.x * 10}px, ${p.y * 6}px, 0)` }}
      />

      <div className="container-page relative z-30">
        <div className="max-w-[760px] md:max-w-[58%]">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-primary"
          >
            Have a project in mind?
          </motion.p>

          <h1 className="mt-8 font-display uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(2.8rem,9vw,10.6rem)]">
            {words.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduced ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word === "Playable." ? (
                    <>
                      Playable<span className="text-primary">.</span>
                    </>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 max-w-[480px] text-base leading-relaxed text-muted-foreground"
          >
            Games, art, interfaces, trailers and campaigns. Tell us what you're building.
          </motion.p>

          <motion.button
            type="button"
            onClick={() => scrollToId("brief")}
            data-cursor="GO"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="group mt-10 inline-flex items-center gap-3 border border-border px-8 py-4 font-cond text-sm uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
          >
            Start your brief
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </motion.button>
        </div>
      </div>

      <SectionDivider index="01" label="Start a project" />
    </section>
  );
}

function SectionDivider({ index, label }: { index: string; label: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30 hidden md:block">
      <div className="container-page flex items-center gap-4 py-6">
        <span className="font-cond text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {index} / {label}
        </span>
        <Reveal className="relative h-px flex-1 overflow-hidden bg-border">
          <motion.span
            className="absolute inset-y-0 left-0 bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </Reveal>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2 — Project type interaction                                        */
/* ------------------------------------------------------------------ */

function ProjectTypePicker({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (v: string) => void;
}) {
  return (
    <section className="border-t border-border bg-[#0A0B0D] section-pad">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow text-primary">What are we building?</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="type-section mt-6">
            What are
            <br />
            we building?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Choose the area closest to your project. You can always tell us more in the brief.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          {projectTypes.map((t, i) => {
            const active = selected === t.label;
            return (
              <Reveal key={t.n} delay={i * 0.04} className="h-full">
                <button
                  type="button"
                  onClick={() => onSelect(t.label)}
                  aria-pressed={active}
                  data-cursor="SELECT"
                  className={`group relative flex h-full min-h-[160px] w-full flex-col justify-between p-7 text-left transition-colors duration-300 md:min-h-[200px] ${
                    active ? "bg-[#141517]" : "bg-[#0A0B0D] hover:bg-[#111214]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`font-display text-lg transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {t.n}
                    </span>
                    {active && (
                      <span className="flex h-6 w-6 items-center justify-center border border-primary text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                  <span
                    className={`font-display text-2xl uppercase leading-[0.98] transition-colors md:text-3xl ${
                      active ? "text-foreground" : "text-foreground/75 group-hover:text-foreground"
                    }`}
                  >
                    {t.label}
                  </span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-primary transition-transform duration-500 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3 — Premium brief / form                                            */
/* ------------------------------------------------------------------ */

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent px-0 py-4 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none";
const labelClass = "eyebrow mb-3 block text-muted-foreground";

function ChipGroup({
  label,
  options,
  value,
  onChange,
  optional,
}: {
  label: string;
  options: string[];
  value: string | null;
  onChange: (v: string) => void;
  optional?: boolean;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label} {optional && <span className="text-muted-foreground/50">(optional)</span>}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={`border px-4 py-2.5 font-cond text-xs uppercase tracking-[0.15em] transition-colors ${
              value === o
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function BriefSection(props: {
  projectType: string | null;
  platform: string | null;
  setPlatform: (v: string) => void;
  stage: string | null;
  setStage: (v: string) => void;
  budget: string | null;
  setBudget: (v: string) => void;
  timeline: string | null;
  setTimeline: (v: string) => void;
  status: "idle" | "sending" | "sent";
  setStatus: (v: "idle" | "sending" | "sent") => void;
  errors: Record<string, string>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  const {
    projectType,
    platform,
    setPlatform,
    stage,
    setStage,
    budget,
    setBudget,
    timeline,
    setTimeline,
    status,
    setStatus,
    errors,
    onSubmit,
  } = props;

  return (
    <section id="brief" className="border-t border-border section-pad">
      <div className="container-page grid gap-16 lg:grid-cols-[0.6fr_1fr]">
        {/* Left — sticky narrative */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="font-display text-sm text-primary">Project / 001</span>
            <h2 className="type-h3 mt-4 text-[clamp(2rem,4.5vw,3.2rem)]">
              Your
              <br />
              next world
              <br />
              starts here.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tell us where you are, what you're building and where you want to take it.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 hairline max-w-[200px]" />
            <div className="mt-6">
              <p className="eyebrow text-muted-foreground">Selected type</p>
              <p className="mt-2 font-display text-xl uppercase text-foreground">
                {projectType ?? "Not yet selected"}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right — form */}
        <Reveal delay={0.1}>
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <SuccessPanel onReset={() => setStatus("idle")} />
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                exit={{ opacity: 0 }}
                className="grid gap-10 md:grid-cols-2"
              >
                <input type="hidden" name="type" value={projectType ?? ""} />
                <div>
                  <label className={labelClass} htmlFor="name">
                    Your Name*
                  </label>
                  <input id="name" name="name" placeholder="Full name" className={fieldClass} />
                  {errors.name && <p className="mt-2 text-xs text-primary">{errors.name}</p>}
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email*
                  </label>
                  <input id="email" name="email" type="email" placeholder="you@studio.com" className={fieldClass} />
                  {errors.email && <p className="mt-2 text-xs text-primary">{errors.email}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="company">
                    Company / Studio
                  </label>
                  <input id="company" name="company" placeholder="Optional" className={fieldClass} />
                </div>

                <div className="md:col-span-2">
                  {errors.type && <p className="mb-2 text-xs text-primary">{errors.type}</p>}
                  <ChipGroup label="Target Platform" options={platforms} value={platform} onChange={setPlatform} optional />
                </div>
                <div className="md:col-span-2">
                  <ChipGroup label="Project Stage" options={stages} value={stage} onChange={setStage} optional />
                </div>
                <div className="md:col-span-2">
                  <ChipGroup label="Budget Range" options={budgets} value={budget} onChange={setBudget} optional />
                </div>
                <div className="md:col-span-2">
                  <ChipGroup label="Timeline" options={timelines} value={timeline} onChange={setTimeline} optional />
                </div>

                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="message">
                    Tell us about the project*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="What are you building? What help do you need? Where are you in development?"
                    className={fieldClass}
                  />
                  {errors.message && <p className="mt-2 text-xs text-primary">{errors.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <SubmitButton status={status} />
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

function SubmitButton({ status }: { status: "idle" | "sending" | "sent" }) {
  return (
    <button
      type="submit"
      disabled={status === "sending"}
      data-cursor="GO"
      className="group relative flex min-h-[70px] w-full items-center justify-between overflow-hidden border border-primary px-8 font-cond text-sm uppercase tracking-[0.2em] text-foreground"
    >
      <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
      <span className="relative z-10 transition-colors duration-500 group-hover:text-primary-foreground">
        {status === "sending" ? "Sending…" : "Send project brief"}
      </span>
      <ArrowRight className="relative z-10 h-5 w-5 transition-all duration-500 group-hover:translate-x-2 group-hover:text-primary-foreground" />
    </button>
  );
}

function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border border-border p-10 md:p-16"
    >
      <motion.span
        className="flex h-14 w-14 items-center justify-center border border-primary text-primary"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <Check className="h-6 w-6" />
      </motion.span>
      <h2 className="type-h3 mt-8">Brief received.</h2>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        We'll review your project and get back to you within two working days.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 border border-border px-6 py-3 font-cond text-xs uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
      >
        Send another
      </button>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* 4 — Other ways to reach us                                          */
/* ------------------------------------------------------------------ */

function ReachSection() {
  return (
    <section className="section-light border-t border-border section-pad">
      <div className="container-page">
        <Reveal>
          <h2 className="type-section text-[clamp(2.4rem,5.6vw,4.5rem)]">
            Other ways
            <br />
            to reach us.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
          <div className="space-y-8">
            {contactChannels.map((c) => (
              <Reveal key={c.k}>
                <p className="eyebrow text-muted-foreground">{c.k}</p>
                <a
                  href={`mailto:${c.v}`}
                  className="mt-2 block font-display text-2xl uppercase tracking-[0.02em] text-[var(--text-dark)] transition-colors hover:text-primary md:text-3xl"
                >
                  {c.v}
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="eyebrow text-muted-foreground">Follow</p>
            <div className="mt-4 border-t border-border">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:text-primary"
                >
                  <span className="font-display text-xl uppercase tracking-[0.06em] transition-transform duration-300 group-hover:translate-x-2">
                    {s.label}
                  </span>
                  <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-0" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5 — Final cinematic CTA                                             */
/* ------------------------------------------------------------------ */

function FinalCinematicCTA() {
  return (
    <section className="grain relative flex min-h-[72vh] items-center overflow-hidden border-t border-border bg-[#07080A] md:min-h-[78vh]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(217,58,71,0.14),transparent_70%)]" />
      <img
        src={media.interactiveModelPoster}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute right-[-6%] top-1/2 z-10 w-[52%] max-w-2xl -translate-y-1/2 rotate-[-6deg] object-contain opacity-70 drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)] md:right-[2%]"
      />
      <div className="container-page relative z-20">
        <Reveal>
          <p className="eyebrow text-primary">Have an idea?</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="type-section mt-6 max-w-2xl">
            Let's make
            <br />
            it real.
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <button
            type="button"
            onClick={() => scrollToId("brief")}
            data-cursor="GO"
            className="group mt-10 inline-flex items-center gap-4 bg-primary px-10 py-5 font-cond text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Start a project
            <ArrowUp className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
