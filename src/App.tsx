import { BubbleProvider } from "@/components/providers/bubble-provider";
import { BubbleEffect } from "@/components/features/bubble-effect";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { CompetencesSection } from "@/components/sections/competences-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { GallerySection } from "@/components/sections/gallery-section";
import {
  SERVICES,
  COMPETENCES,
  NAV_ITEMS,
  GALLERY_IMAGES,
  CONTACT_METHODS,
} from "@/lib/constants";

function App() {
  return (
    <BubbleProvider>
      <div className="min-h-screen w-full bg-background">
        <BubbleEffect />

        <Header
          logoSrc="/logo.jpg"
          logoAlt="Turrian Color & Design - Expert en peinture et décoration en Suisse"
          navItems={NAV_ITEMS}
        />

        <HeroSection
          promoImageSrc="/FLYERPROMOFINAL.jpg"
          promoImageAlt="Turrian Color & Design - Peinture, crépis et décoration professionnelle à Botterens, Suisse"
          title={{
            line1: "Transformez vos espaces",
            line2: "avec couleur et créativité",
          }}
          subtitle={{
            paragraph1:
              "Envie de changement? Besoin de rénover un bien? Envie de créer le logement de vos rêves?",
            paragraph2:
              "Notre équipe sera à votre écoute afin de réaliser le projet de vos rêves dans les meilleures conditions!",
          }}
          tagline="Osez rêver en couleur"
          ctaButtons={[
            { label: "Nous contacter", href: "#contact" },
            { label: "Nos prestations", href: "#services" },
          ]}
        />

        <ServicesSection services={SERVICES} />

        <CompetencesSection competences={COMPETENCES} />

        <AboutSection
          heading="Le peintre qu'il vous faut"
          paragraphs={[
            "Notre équipe est composée d'experts reconnus dans leur domaine et nous recherchons constamment des solutions novatrices pour améliorer l'efficacité, la sécurité et la durabilité des projets de construction et de rénovation.",
            "Nous sommes fiers de notre capacité à fournir un travail de grande qualité, un service exceptionnel et des prix compétitifs qui permettent à nos clients de conserver un avantage concurrentiel.",
          ]}
          imageSrc="/peintre-renovation.png"
          imageAlt="Peintres en rénovation - Turrian Color & Design"
        />

        <ContactSection
          heading="Si vous avez des questions ou souhaitez en savoir plus sur nos services,"
          subheading="n'hésitez pas à nous contacter."
          methods={CONTACT_METHODS}
        />

        <GallerySection
          heading="Nos réalisations"
          description="Découvrez quelques-uns de nos projets récents"
          images={GALLERY_IMAGES}
        />

        <Footer
          logoSrc="/logo.jpg"
          logoAlt="Logo Turrian Color & Design - Peintre professionnel en Suisse"
          tagline="Osez rêver en couleur"
        />
      </div>
    </BubbleProvider>
  );
}

export default App;
