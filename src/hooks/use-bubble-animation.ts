import { useState } from "react";
import type { Bubble } from "@/types";
import { TURRIAN_COLORS } from "@/lib/constants";

export function useBubbleAnimation() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const createBubble = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top + window.scrollY;

    const newBubble: Bubble = {
      id: Date.now() + Math.random(),
      x,
      y,
      color: TURRIAN_COLORS[Math.floor(Math.random() * TURRIAN_COLORS.length)],
    };

    setBubbles((prev) => [...prev, newBubble]);

    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 2000);
  };

  return { bubbles, createBubble };
}
