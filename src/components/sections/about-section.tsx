import { motion } from "motion/react";
import { Section } from "@/components/ui/section";

interface AboutSectionProps {
  heading: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export function AboutSection({
  heading,
  paragraphs,
  imageSrc,
  imageAlt,
}: AboutSectionProps) {
  return (
    <Section
      id="philosophie"
      variant="yellow"
      withWaveDivider
      nextSectionColor="var(--turrian-green)"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">{heading}</h2>
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-xl opacity-90 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
