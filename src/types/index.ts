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

// Google Analytics types
export interface GAEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface AnalyticsContextType {
  trackEvent: (eventName: string, params?: GAEventParams) => void;
  trackPageView: (path: string, title?: string) => void;
  isInitialized: boolean;
}

// Custom event types for type-safe tracking
export interface ServiceClickEvent {
  service_name: string;
  service_category: string;
}

export interface ContactClickEvent {
  contact_type: "phone" | "email" | "address";
  contact_label: string;
}

export interface NavigationClickEvent {
  nav_label: string;
  nav_href: string;
}
