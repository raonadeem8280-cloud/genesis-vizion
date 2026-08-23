import heroBg from "@/assets/hero-bg.jpg";
import heroCharacter from "@/assets/hero-character.png";
import showreelPoster from "@/assets/showreel-poster.jpg";
import weapon from "@/assets/weapon.png";
import uiMainMenu from "@/assets/ui-mainmenu.jpg";
import uiHud from "@/assets/ui-hud.jpg";
import uiStore from "@/assets/ui-store.jpg";
import uiInventory from "@/assets/ui-inventory.jpg";
import uiLevelSelect from "@/assets/ui-levelselect.jpg";
import galleryEnv from "@/assets/gallery-env.jpg";
import galleryVehicle from "@/assets/gallery-vehicle.jpg";
import galleryIcon from "@/assets/gallery-icon.jpg";
import galleryCinematic from "@/assets/gallery-cinematic.jpg";

export const media = {
  studioName: "ATLAS FORGE",
  heroPoster: heroBg,
  heroCharacter,
  showreelVideoId: "AnGdzz-XWcE",
  showreelPoster,
  /** Replace with a Spline or Sketchfab embed URL to activate the live 3D viewer. */
  interactiveModelUrl: "",
  interactiveModelPoster: weapon,
};

export const uiScreens = [
  { id: "menu", label: "Main Menu", image: uiMainMenu },
  { id: "hud", label: "HUD", image: uiHud },
  { id: "store", label: "Store", image: uiStore },
  { id: "inventory", label: "Inventory", image: uiInventory },
  { id: "levels", label: "Level Select", image: uiLevelSelect },
] as const;

export const galleryImages = [
  { src: galleryEnv, alt: "Neon transit station environment art", category: "Environment Art", span: "tall" },
  { src: galleryCinematic, alt: "Cinematic close-up of an armored visor", category: "Cinematics", span: "wide" },
  { src: weapon, alt: "Original sci-fi energy weapon asset", category: "Prop & Weapon Art", span: "normal" },
  { src: galleryVehicle, alt: "Armored hover-truck vehicle asset sheet", category: "Vehicle Art", span: "wide" },
  { src: galleryIcon, alt: "Mobile game store icon design", category: "ASO & Store Design", span: "normal" },
  { src: uiHud, alt: "In-game HUD interface design", category: "Game UI/UX", span: "wide" },
] as const;
