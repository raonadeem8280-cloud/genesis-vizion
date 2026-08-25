import galleryCinematic from "@/assets/gallery-cinematic.jpg";
import galleryEnv from "@/assets/gallery-env.jpg";
import uiHud from "@/assets/ui-hud.jpg";
import charKira from "@/assets/char-kira.png";

export type NewsItem = {
  slug: string;
  category: string;
  title: string;
  date: string;
  image: string;
  size: "large" | "normal";
};

/** Placeholder studio updates — reuses existing project imagery, swap freely. */
export const newsItems: NewsItem[] = [
  {
    slug: "neon-requiem-announce",
    category: "Announcement",
    title: "Neon Requiem revealed at Summer Showcase",
    date: "Aug 2026",
    image: galleryCinematic,
    size: "large",
  },
  {
    slug: "dustline-post-mortem",
    category: "Dev Log",
    title: "Building Dustline's traversal camera",
    date: "Jul 2026",
    image: galleryEnv,
    size: "normal",
  },
  {
    slug: "iron-district-ui",
    category: "Case Study",
    title: "A commerce HUD that disappears into play",
    date: "Jun 2026",
    image: uiHud,
    size: "normal",
  },
  {
    slug: "kira-voss-reveal",
    category: "Character Reveal",
    title: "Meet Kira Voss, Neon Requiem's recon specialist",
    date: "May 2026",
    image: charKira,
    size: "normal",
  },
];
