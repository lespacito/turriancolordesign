import * as React from "react";
import type { AnalyticsContextType, GAEventParams } from "@/types";
import { initGA, trackEvent, trackPageView, isGAInitialized } from "@/lib/analytics";

const AnalyticsContext = React.createContext<AnalyticsContextType | undefined>(
  undefined
);

interface AnalyticsProviderProps {
  children: React.ReactNode;
  measurementId?: string;
}

export function AnalyticsProvider({
  children,
  measurementId
}: AnalyticsProviderProps) {
  const [isInitialized, setIsInitialized] = React.useState(false);

  // Initialize GA4 when consent is given
  const initialize = React.useCallback(async () => {
    if (!measurementId) {
      console.warn("GA4 Measurement ID not provided");
      return;
    }

    if (isGAInitialized()) {
      setIsInitialized(true);
      return;
    }

    try {
      await initGA(measurementId);
      setIsInitialized(true);

      // Track initial page view
      trackPageView(window.location.pathname, document.title);
    } catch (error) {
      console.error("Failed to initialize Google Analytics:", error);
    }
  }, [measurementId]);

  // Track page view wrapper
  const handleTrackPageView = React.useCallback((path: string, title?: string) => {
    if (!isInitialized) {
      console.warn("GA4 not initialized. Cannot track page view.");
      return;
    }
    trackPageView(path, title);
  }, [isInitialized]);

  // Track event wrapper
  const handleTrackEvent = React.useCallback((eventName: string, params?: GAEventParams) => {
    if (!isInitialized) {
      console.warn("GA4 not initialized. Cannot track event:", eventName);
      return;
    }
    trackEvent(eventName, params);
  }, [isInitialized]);

  const value: AnalyticsContextType = {
    trackEvent: handleTrackEvent,
    trackPageView: handleTrackPageView,
    isInitialized,
  };

  // Expose initialize function for cookie consent
  React.useEffect(() => {
    // Store initialize function globally for cookie consent to call
    (window as unknown as { initializeGA?: () => void }).initializeGA = initialize;
  }, [initialize]);

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = React.useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
  }
  return context;
}
