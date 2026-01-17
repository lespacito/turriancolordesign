import { motion } from "motion/react";
import { Section } from "@/components/ui/section";
import { CompetenceItem } from "@/components/features/competence-item";

interface CompetencesSectionProps {
  competences: string[];
}

export function CompetencesSection({ competences }: CompetencesSectionProps) {
  return (
    <Section
      id="competences"
      variant="orange"
      withWaveDivider
      nextSectionColor="var(--turrian-yellow)"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-xl py-8 px-8 md:py-12 md:px-16 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-8">Nos compétences</h2>
            <div className="space-y-4 text-left">
              {competences.map((comp, index) => (
                <CompetenceItem key={index} text={comp} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
