import { motion } from "motion/react";
import { Section } from "@/components/ui/section";
import { ContactCard } from "@/components/features/contact-card";
import { useAnalytics } from "@/components/providers/analytics-provider";
import type { ContactMethod } from "@/types";

interface ContactSectionProps {
  heading: string;
  subheading: string;
  methods: ContactMethod[];
}

export function ContactSection({
  heading,
  subheading,
  methods,
}: ContactSectionProps) {
  const { trackEvent } = useAnalytics();

  const handleContactClick = (method: ContactMethod) => {
    trackEvent("contact_click", {
      event_category: "engagement",
      event_label: method.label,
      contact_type: method.type,
    });
  };

  return (
    <Section
      id="contact"
      variant="green"
      withWaveDivider
      nextSectionColor="var(--turrian-blue)"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-6">{heading}</h2>
          <h3 className="text-3xl font-bold mb-12 opacity-90">{subheading}</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {methods.map((method) => (
              <ContactCard
                key={method.type}
                {...method}
                onClick={() => handleContactClick(method)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
