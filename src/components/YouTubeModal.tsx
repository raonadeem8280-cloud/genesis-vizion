import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

type Props = {
  videoId: string;
  title: string;
  poster: string;
  className?: string;
  label?: string;
};

/** Poster-first YouTube player. The iframe is only mounted after the visitor presses play. */
export function YouTubeModal({ videoId, title, poster, className = "", label = "Play showreel" }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={label}
        data-cursor="PLAY"
        className={`group relative block w-full overflow-hidden ${className}`}
      >
        <img
          src={poster}
          alt={`${title} poster frame`}
          loading="lazy"
          width={1600}
          height={900}
          className="aspect-video w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-foreground/40 backdrop-blur-sm transition-colors duration-300 group-hover:border-primary group-hover:bg-primary md:h-28 md:w-28">
            <Play className="h-6 w-6 translate-x-[2px] fill-current md:h-8 md:w-8" />
          </span>
          <span className="eyebrow">{label}</span>
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md animate-fade-in"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="aspect-video w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="h-full w-full border border-border"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
