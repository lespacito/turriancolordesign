import type {
  Service,
  NavMenuItem,
  GalleryImage,
  ContactMethod,
} from "@/types";

// Turrian color palette for bubble animations
export const TURRIAN_COLORS = [
  "var(--turrian-pink)",
  "var(--turrian-orange)",
  "var(--turrian-yellow)",
  "var(--turrian-green)",
  "var(--turrian-blue)",
];

// Services offered
export const SERVICES: Service[] = [
  {
    title: "Peinture intérieure & extérieure",
    icon: "/peinture.png",
    description:
      "Transformez vos murs, portes et fenêtres avec une finition professionnelle et durable",
  },
  {
    title: "Crépis & façades",
    icon: "🏠",
    description:
      "Protégez et embellissez vos murs avec nos solutions sur mesure",
  },
  {
    title: "Papiers peints",
    icon: "/papierpeint.png",
    description:
      "Personnalisez votre intérieur avec des motifs uniques et élégants",
  },
  {
    title: "Décoration intérieure",
    icon: "/deco.webp",
    description: "Créez des ambiances uniques avec nos enduits décoratifs",
  },
  {
    title: "Rénovation complète",
    icon: "🔨",
    description: "Transformez entièrement vos espaces avec notre expertise",
  },
  {
    title: "Béton apparent",
    icon: "🪨",
    description: "Un look moderne et durable pour toutes vos surfaces",
  },
];

// Company competences
export const COMPETENCES: string[] = [
  "Neuf & Rénovation",
  "Peinture et crépis intérieur & extérieur",
  "Papier peint, tapisserie, ingrain etc ...",
  "Isolation périphérique et rénovation de façade",
  "Décoration intérieur: Stucco, Sablé, Marbré etc...",
  "Béton apparent, ciré",
  "Entretient bois naturel",
  "Faux plafond, cloison placo plâtre et mur alba",
];

// Navigation menu items
export const NAV_ITEMS: NavMenuItem[] = [
  { label: "Prestations", href: "#services" },
  { label: "Compétences", href: "#competences" },
  { label: "À propos", href: "#philosophie" },
  { label: "Contact", href: "#contact" },
  { label: "Réalisations", href: "#realisations" },
];

// Gallery images
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/chantier_0.webp",
    alt: "Béton ciré - Mur escalier effet béton décoratif gris",
  },
  {
    src: "/chantier_1.webp",
    alt: "Carrelage - Salle de bain moderne avec carrelage vert et boiseries",
  },
  {
    src: "/chantier_2.webp",
    alt: "Enduit sablé - Mur décoratif texturé beige",
  },
  {
    src: "/chantier_3.webp",
    alt: "Stucco - Mur escalier effet stucco vénitien gris",
  },
];

// Contact methods
export const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: "📞",
    label: "+41 79/518.95.98",
    href: "tel:+41795189598",
    type: "phone",
  },
  {
    icon: "✉️",
    label: "turriancolordesign@gmail.com",
    href: "mailto:turriancolordesign@gmail.com",
    type: "email",
  },
  {
    icon: "📍",
    label: "Rte du Villard 3, 1652 Botterens",
    type: "address",
  },
];
