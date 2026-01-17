import { motion } from "motion/react";
import type { ContactMethod } from "@/types";

interface ContactCardProps extends ContactMethod {}

export function ContactCard({ icon, label, href, type }: ContactCardProps) {
  const content = (
    <>
      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg border-2 border-white/40">
        {icon}
      </div>
      <p className="text-xl font-semibold text-center">{label}</p>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05, y: -8 },
    className:
      "flex flex-col items-center gap-4 transition-all text-foreground no-underline",
    "data-slot": "contact-card",
    "data-type": type,
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps} className={motionProps.className}>
      {content}
    </motion.div>
  );
}
