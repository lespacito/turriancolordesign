import { motion } from "motion/react";
import type { GalleryImage as GalleryImageType } from "@/types";

interface GalleryImageProps extends GalleryImageType {
  index: number;
}

export function GalleryImage({ src, alt, index }: GalleryImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group"
      data-slot="gallery-image"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-bg-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
