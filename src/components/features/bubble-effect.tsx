import { motion, AnimatePresence } from "motion/react";
import { useBubbles } from "@/components/providers/bubble-provider";

export function BubbleEffect() {
  const { bubbles } = useBubbles();

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      data-slot="bubble-effect"
    >
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: bubble.x,
              top: bubble.y,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: bubble.color,
              filter: "blur(10px)",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
