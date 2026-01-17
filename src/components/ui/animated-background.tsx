import { motion } from "motion/react";

interface AnimatedBackgroundProps {
  opacity?: number;
}

export function AnimatedBackground({ opacity = 0.1 }: AnimatedBackgroundProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ opacity }}
      data-slot="animated-background"
    >
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl"
        style={{ background: "var(--turrian-pink)" }}
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "var(--turrian-blue)" }}
      />
    </div>
  );
}
