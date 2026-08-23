import kira from "@/assets/char-kira.png";
import axel from "@/assets/char-axel.png";
import soren from "@/assets/char-soren.png";

export type Character = {
  id: string;
  name: string;
  role: string;
  accent: string;
  image: string;
  description: string;
};

export const characters: Character[] = [
  {
    id: "kira",
    name: "Kira Voss",
    role: "Recon Specialist",
    accent: "#FF4655",
    image: kira,
    description:
      "Built for silence and speed. Kira's kit is layered from the boots up — modular harness, field-repaired jacket, and optics tuned for the half-second before a fight starts.",
  },
  {
    id: "axel",
    name: "Axel Ryne",
    role: "Heavy Assault",
    accent: "#FF7A3C",
    image: axel,
    description:
      "A frontline anchor carrying salvaged industrial plating and an augmented arm. Every panel, strap and scratch is authored to read at 30 metres and hold up in a 4K cutscene.",
  },
  {
    id: "soren",
    name: "Soren",
    role: "Tech Operative",
    accent: "#19D3C5",
    image: soren,
    description:
      "Lightweight composite armour with a projected interface layer. Soren is our testbed for emissive shading, holographic UI on the body, and readable silhouettes in low light.",
  },
];
