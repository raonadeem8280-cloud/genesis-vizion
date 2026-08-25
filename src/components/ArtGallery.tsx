import { galleryImages } from "@/data/media";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const spanClass: Record<string, string> = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  normal: "",
};

export function ArtGallery() {
  return (
    <section className="border-t border-border section-pad">
      <div className="container-page">
        <SectionTitle eyebrow="Art Lab" lines={["From", "sketch", "to screen."]} />

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-3 md:grid-cols-3 md:auto-rows-[260px]">
          {galleryImages.map((img) => (
            <Reveal key={img.alt} className={`${spanClass[img.span] ?? ""} h-full`}>
              <figure
                data-cursor="VIEW"
                className="group relative h-full overflow-hidden border border-border"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="img-vibrant h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background to-transparent p-4 font-cond text-xs uppercase tracking-[0.2em] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.category}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
