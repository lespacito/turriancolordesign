// Shared TypeScript types for the application

export interface Bubble {
  id: number;
  x: number;
  y: number;
  color: string;
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface NavMenuItem {
  label: string;
  href: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ContactMethod {
  icon: string;
  label: string;
  href?: string;
  type: "phone" | "email" | "address";
}

export type SectionVariant = "pink" | "orange" | "yellow" | "green" | "blue";

export type IconSize = "sm" | "md" | "lg";

export type WaveDividerPosition = "top" | "bottom";
