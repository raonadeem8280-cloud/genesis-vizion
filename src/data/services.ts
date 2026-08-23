import neon from "@/assets/project-neon-requiem.jpg";
import dustline from "@/assets/project-dustline.jpg";
import voidrunner from "@/assets/project-voidrunner.jpg";
import iron from "@/assets/project-iron-district.jpg";
import weapon from "@/assets/weapon.png";
import uiHud from "@/assets/ui-hud.jpg";
import uiStore from "@/assets/ui-store.jpg";
import galleryIcon from "@/assets/gallery-icon.jpg";
import galleryEnv from "@/assets/gallery-env.jpg";
import galleryCinematic from "@/assets/gallery-cinematic.jpg";

export type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Game Development",
    description: "Mobile, PC and console experiences from prototype to production.",
    image: neon,
    deliverables: ["Prototype & vertical slice", "Unity / Unreal production", "Live-ops feature builds", "Porting & optimisation"],
  },
  {
    number: "02",
    title: "Game Art & 3D",
    description: "Characters, props, vehicles, weapons and environments.",
    image: dustline,
    deliverables: ["Concept & silhouette exploration", "High / low poly modelling", "PBR texturing & materials", "Game-ready rigging"],
  },
  {
    number: "03",
    title: "Game UI / UX",
    description: "Menus, HUDs, onboarding, stores and complete player flows.",
    image: uiHud,
    deliverables: ["Player flow architecture", "HUD & menu systems", "Design systems & kits", "Engine-ready UI implementation"],
  },
  {
    number: "04",
    title: "Trailers & Cinematics",
    description: "Gameplay trailers, launch videos and visual storytelling.",
    image: galleryCinematic,
    deliverables: ["Storyboards & previs", "In-engine cinematography", "Edit, sound & grade", "Platform cutdowns"],
  },
  {
    number: "05",
    title: "Marketing Creatives",
    description: "Performance ads, key art, social campaigns and promotional assets.",
    image: iron,
    deliverables: ["Key art & posters", "Playable and video ads", "Social campaign kits", "Creative testing variants"],
  },
  {
    number: "06",
    title: "ASO & Store Design",
    description: "Icons, screenshots, feature graphics and conversion-focused store creatives.",
    image: galleryIcon,
    deliverables: ["Icon systems", "Screenshot storytelling", "Feature graphics", "A/B creative rounds"],
  },
];

export const servicesDetailed: Service[] = [
  ...services,
  {
    number: "07",
    title: "Environment Art",
    description: "Worlds with scale, mood and readable player pathing.",
    image: galleryEnv,
    deliverables: ["Blockout & layout", "Modular kits", "Lighting & atmosphere", "Performance budgets"],
  },
  {
    number: "08",
    title: "Prop & Weapon Art",
    description: "Hard-surface assets authored for first-person scrutiny.",
    image: weapon,
    deliverables: ["Hard-surface modelling", "Material studies", "LODs & collision", "Inspect-ready detail"],
  },
  {
    number: "09",
    title: "Unity Integration",
    description: "Systems, shaders and tooling delivered inside your project.",
    image: uiStore,
    deliverables: ["Shader & VFX setup", "Addressables & build pipeline", "Editor tooling", "Profiling & optimisation"],
  },
  {
    number: "10",
    title: "Cinematic Art",
    description: "Frames built to sell a world before a single line is played.",
    image: voidrunner,
    deliverables: ["Key frames", "Matte & set extension", "Colour scripts", "Render management"],
  },
];
