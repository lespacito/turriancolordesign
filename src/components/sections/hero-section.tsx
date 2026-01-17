import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { WaveDivider } from "@/components/ui/wave-divider";

interface HeroSectionProps {
  promoImageSrc: string;
  promoImageAlt: string;
  title: {
    line1: string;
    line2: string;
  };
  subtitle: {
    paragraph1: string;
    paragraph2: string;
  };
  tagline: string;
  ctaButtons: Array<{
    label: string;
    href: string;
  }>;
}

export function HeroSection({
  promoImageSrc,
  promoImageAlt,
  title,
  subtitle,
  tagline,
  ctaButtons,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedBackground opacity={0.1} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-12 -mx-4 md:mx-0"
            >
              <img
                src={promoImageSrc}
                alt={promoImageAlt}
                className="w-full h-125 md:w-auto md:h-225 object-contain"
              />
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-10 leading-tight">
              <span className="text-foreground">{title.line1}</span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-rainbow)" }}
              >
                {title.line2}
              </span>
            </h1>

            <div className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto space-y-4">
              <p className="leading-relaxed">{subtitle.paragraph1}</p>
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  {subtitle.paragraph2.split(" afin de")[0]}
                </span>{" "}
                afin de{subtitle.paragraph2.split(" afin de")[1]}
              </p>
            </div>

            <p className="text-3xl font-bold mb-14">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-rainbow)" }}
              >
                {tagline}
              </span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {ctaButtons.map((button, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg shadow-lg"
                  >
                    <a href={button.href}>{button.label}</a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <WaveDivider fillColor="var(--turrian-pink)" position="bottom" />
    </section>
  );
}
