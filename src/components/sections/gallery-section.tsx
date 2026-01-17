import { motion } from "motion/react";
import { Section } from "@/components/ui/section";
import { GalleryImage } from "@/components/features/gallery-image";
import type { GalleryImage as GalleryImageType } from "@/types";

interface GallerySectionProps {
  heading: string;
  description: string;
  images: GalleryImageType[];
}

export function GallerySection({
  heading,
  description,
  images,
}: GallerySectionProps) {
  return (
    <Section
      id="realisations"
      variant="blue"
      withWaveDivider
      nextSectionColor="var(--turrian-blue)"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">{heading}</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <GalleryImage key={index} {...image} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
