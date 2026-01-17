import * as React from "react";
import type { Bubble } from "@/types";
import { useBubbleAnimation } from "@/hooks/use-bubble-animation";

interface BubbleContextValue {
  bubbles: Bubble[];
  createBubble: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const BubbleContext = React.createContext<BubbleContextValue | undefined>(
  undefined
);

export function BubbleProvider({ children }: { children: React.ReactNode }) {
  const { bubbles, createBubble } = useBubbleAnimation();

  return (
    <BubbleContext.Provider value={{ bubbles, createBubble }}>
      {children}
    </BubbleContext.Provider>
  );
}

export function useBubbles() {
  const context = React.useContext(BubbleContext);
  if (context === undefined) {
    throw new Error("useBubbles must be used within a BubbleProvider");
  }
  return context;
}
