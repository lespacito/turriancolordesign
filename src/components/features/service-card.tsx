import { motion } from "motion/react";
import { IconDisplay } from "@/components/ui/icon-display";

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  index: number;
  onIconClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function ServiceCard({
  title,
  icon,
  description,
  index,
  onIconClick,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-background text-foreground p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center"
      data-slot="service-card"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center cursor-pointer"
        style={{ background: "var(--turrian-icon-bg)" }}
        onClick={onIconClick}
      >
        <IconDisplay icon={icon} alt={title} size="md" />
      </motion.div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
