import { motion } from "motion/react";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/features/service-card";
import { useBubbles } from "@/components/providers/bubble-provider";
import type { Service } from "@/types";

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const { createBubble } = useBubbles();

  return (
    <Section
      id="services"
      variant="pink"
      withWaveDivider
      nextSectionColor="var(--turrian-orange)"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Nos prestations</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Des solutions fiables, des produits de qualité et une grande
            expérience pour concrétiser vos projets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
              onIconClick={createBubble}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
