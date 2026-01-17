import { motion } from "motion/react";

interface CompetenceItemProps {
  text: string;
  index: number;
}

export function CompetenceItem({ text, index }: CompetenceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start gap-3"
      data-slot="competence-item"
    >
      <span
        className="text-2xl shrink-0"
        style={{ color: "var(--turrian-blue)" }}
      >
        ✓
      </span>
      <span>{text}</span>
    </motion.div>
  );
}
