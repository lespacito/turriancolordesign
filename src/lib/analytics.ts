// Google Analytics 4 utility functions
import type { GAEventParams } from "@/types";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Initialize Google Analytics 4
 * This function loads the GA4 script dynamically and initializes it
 */
export const initGA = (measurementId: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if already initialized
    if (window.gtag) {
      resolve();
      return;
    }

    try {
      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];

      // Define gtag function using native arguments object
      // CRITICAL: Must use 'arguments' object, not spread operator
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer?.push(arguments);
      };

      // Set initial timestamp
      window.gtag("js", new Date());

      // Configure GA4 with privacy-friendly settings
      window.gtag("config", measurementId, {
        send_page_view: false, // Manual page view tracking for SPA
        anonymize_ip: true, // Extra privacy (though GA4 does this by default)
        cookie_flags: "SameSite=None;Secure", // Modern cookie settings
        cookie_expires: 63072000, // 2 years in seconds
      });

      // Load GA4 script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Google Analytics"));

      document.head.appendChild(script);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Track a custom event
 */
export const trackEvent = (eventName: string, params?: GAEventParams): void => {
  if (!window.gtag) {
    console.warn("GA4 not initialized. Event not tracked:", eventName);
    return;
  }

  window.gtag("event", eventName, params);
};

/**
 * Track a page view
 */
export const trackPageView = (path: string, title?: string): void => {
  if (!window.gtag) {
    console.warn("GA4 not initialized. Page view not tracked:", path);
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

/**
 * Check if GA4 is initialized
 */
export const isGAInitialized = (): boolean => {
  return typeof window.gtag !== "undefined";
};
