import neon from "@/assets/project-neon-requiem.jpg";
import dustline from "@/assets/project-dustline.jpg";
import voidrunner from "@/assets/project-voidrunner.jpg";
import iron from "@/assets/project-iron-district.jpg";
import kira from "@/assets/char-kira.png";
import axel from "@/assets/char-axel.png";
import soren from "@/assets/char-soren.png";
import heroCharacter from "@/assets/hero-character.png";
import weapon from "@/assets/weapon.png";
import uiHud from "@/assets/ui-hud.jpg";
import uiStore from "@/assets/ui-store.jpg";
import uiMainMenu from "@/assets/ui-mainmenu.jpg";
import galleryEnv from "@/assets/gallery-env.jpg";
import galleryCinematic from "@/assets/gallery-cinematic.jpg";
import galleryVehicle from "@/assets/gallery-vehicle.jpg";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  character: string;
  environment: string;
  ui: string;
  marketing: string;
  gallery: string[];
  summary: string;
  overview: string;
  platform: string;
  genre: string;
  servicesProvided: string[];
  year: string;
  characterNote: string;
  environmentNote: string;
  uiNote: string;
  marketingNote: string;
};

export const projects: Project[] = [
  {
    slug: "neon-requiem",
    number: "01",
    title: "Neon Requiem",
    category: "Tactical Action / PC",
    tags: ["Games", "3D Art", "UI/UX", "Cinematics"],
    image: neon,
    character: kira,
    environment: galleryEnv,
    ui: uiHud,
    marketing: galleryCinematic,
    gallery: [neon, galleryEnv, uiHud, weapon, galleryCinematic, kira],
    summary:
      "A rain-soaked tactical shooter built around close-quarter reads, holographic intel and a city that never stops bleeding light.",
    overview:
      "We joined Neon Requiem at pre-production and stayed through launch: protagonist design, a modular district kit, the full combat HUD, and the campaign's announce cinematic. The brief was a city that felt legible in a firefight and cinematic in a still.",
    platform: "PC",
    genre: "Tactical Action",
    servicesProvided: ["Game Development", "3D Character Art", "Environment Art", "Game UI/UX", "Cinematics"],
    year: "2026",
    characterNote:
      "Kira Voss anchors the cast. Her silhouette was tuned across eleven passes so she reads instantly through smoke and volumetric rain.",
    environmentNote:
      "A modular wet-street kit with 340 pieces, authored so a level designer can build a playable district in a day without repeating a facade.",
    uiNote:
      "The HUD holds ammo, shields, ability charge and squad state without covering the horizon line where every duel is decided.",
    marketingNote:
      "Announce key art, six social cutdowns and a store page built to convert cold traffic on a single scroll.",
  },
  {
    slug: "dustline",
    number: "02",
    title: "Dustline",
    category: "Open World / PC + Console",
    tags: ["Games", "3D Art", "Marketing"],
    image: dustline,
    character: axel,
    environment: dustline,
    ui: uiMainMenu,
    marketing: galleryVehicle,
    gallery: [dustline, galleryVehicle, uiMainMenu, axel, galleryCinematic, weapon],
    summary:
      "A sun-bleached open world where a single vehicle and a horizon of spires carry an entire opening hour.",
    overview:
      "Dustline needed scale without fog-hiding everything past 200 metres. We built the vehicle, the traversal art direction, and a marketing package that sold the distance rather than the shooting.",
    platform: "PC + Console",
    genre: "Open World",
    servicesProvided: ["Environment Art", "Vehicle Art", "3D Character Art", "Marketing Creatives"],
    year: "2025",
    characterNote:
      "Axel Ryne carries salvaged plating that ages across the campaign — three material states authored on one mesh.",
    environmentNote:
      "Terrain, megacity silhouettes and dust volumes tuned to hold up at 4K from a cliff edge and from a bumper camera.",
    uiNote: "A quiet menu system that stays out of the way of a very loud landscape.",
    marketingNote: "Vehicle turnarounds, hero key art and a paid-social set that lifted click-through on the launch window.",
  },
  {
    slug: "voidrunner",
    number: "03",
    title: "Voidrunner",
    category: "Sci-Fi Adventure",
    tags: ["Games", "3D Art", "Cinematics"],
    image: voidrunner,
    character: soren,
    environment: voidrunner,
    ui: uiStore,
    marketing: voidrunner,
    gallery: [voidrunner, soren, uiStore, galleryEnv, weapon, galleryCinematic],
    summary:
      "Monumental alien architecture, one explorer, and light used as the only navigation system in the game.",
    overview:
      "Voidrunner is a scale exercise. We authored the megastructure, the suit, the volumetric lighting language and an interactive store surface that matched the game's cold, quiet confidence.",
    platform: "PC + Console",
    genre: "Sci-Fi Adventure",
    servicesProvided: ["Environment Art", "3D Character Art", "Cinematics", "Game UI/UX"],
    year: "2025",
    characterNote: "Soren's suit uses emissive channels as wayfinding — the player reads charge state from across a valley.",
    environmentNote: "A kilometre-tall structure built from twelve modular rings and a single hero shader.",
    uiNote: "Store and progression surfaces designed with cyan-only accenting to preserve the game's palette.",
    marketingNote: "A teaser frame set shot entirely in-engine, no post-composite cheats.",
  },
  {
    slug: "iron-district",
    number: "04",
    title: "Iron District",
    category: "Urban Action",
    tags: ["Games", "UI/UX", "Marketing", "Cinematics"],
    image: iron,
    character: heroCharacter,
    environment: iron,
    ui: uiStore,
    marketing: iron,
    gallery: [iron, heroCharacter, uiStore, galleryCinematic, galleryVehicle, uiHud],
    summary:
      "Golden-hour urban action with a bike, a skyline and a store economy designed to feel like part of the fiction.",
    overview:
      "We handled the vertical slice art direction, the rider, the traversal camera language and the full commerce UI — designed so a store visit never breaks the mood of the city.",
    platform: "PC + Mobile",
    genre: "Urban Action",
    servicesProvided: ["Game Development", "Game UI/UX", "Marketing Creatives", "ASO & Store Design"],
    year: "2026",
    characterNote: "A rider built for third-person readability at speed, with cloth simulated only where the camera can see it.",
    environmentNote: "An industrial waterfront district lit for one hour of the day, then re-lit for four more.",
    uiNote: "A commerce flow with three taps to purchase and zero moments that feel like a spreadsheet.",
    marketingNote: "Store creatives, icon system and a launch trailer edit built from vertical slice footage.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const workFilters = ["All", "Games", "3D Art", "UI/UX", "Marketing", "Cinematics"] as const;
