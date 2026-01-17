import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

interface Bubble {
  id: number;
  x: number;
  y: number;
  color: string;
}

function App() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const createBubble = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top + window.scrollY;

    const colors = [
      "var(--turrian-pink)",
      "var(--turrian-orange)",
      "var(--turrian-yellow)",
      "var(--turrian-green)",
      "var(--turrian-blue)",
    ];

    const newBubble: Bubble = {
      id: Date.now() + Math.random(),
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    setBubbles((prev) => [...prev, newBubble]);

    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 2000);
  };

  const services = [
    {
      title: "Peinture intérieure & extérieure, portes et fenêtres",
      icon: "🎨",
      description:
        "Transformez vos murs, portes et fenêtres avec une finition professionnelle et durable",
    },
    {
      title: "Crépis & façades",
      icon: "🏠",
      description:
        "Protégez et embellissez vos murs avec nos solutions sur mesure",
    },
    {
      title: "Papiers peints",
      icon: "/papierpeint.png",
      description:
        "Personnalisez votre intérieur avec des motifs uniques et élégants",
    },
    {
      title: "Décoration intérieure",
      icon: "✨",
      description: "Créez des ambiances uniques avec nos enduits décoratifs",
    },
    {
      title: "Rénovation complète",
      icon: "🔨",
      description: "Transformez entièrement vos espaces avec notre expertise",
    },
    {
      title: "Béton apparent",
      icon: "🪨",
      description: "Un look moderne et durable pour toutes vos surfaces",
    },
  ];

  const competences = [
    "Neuf & Rénovation",
    "Peinture et crépis intérieur & extérieur",
    "Papier peint, tapisserie, ingrain",
    "Isolation périphérique et rénovation de façade",
    "Décoration intérieur: Stucco, Sablé, Marbré etc...",
    "Béton apparent, ciré",
    "Entretient bois naturel",
  ];

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Bubble Effects */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <AnimatePresence>
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: bubble.x,
                top: bubble.y,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: bubble.color,
                filter: "blur(10px)",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Header fixe */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/logo.jpg"
                alt="Turrian Color & Design - Expert en peinture et décoration en Suisse"
                className="h-16 w-auto object-contain"
              />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Prestations
              </a>
              <a
                href="#competences"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Compétences
              </a>
              <a
                href="#philosophie"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                À propos
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </a>
            </nav>
            <Button asChild size="lg" variant={"outline"}>
              <a href="tel:+41795189598">079 518 95 98</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl"
            style={{ background: "var(--turrian-pink)" }}
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--turrian-blue)" }}
          />
        </div>

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
                  src="/FLYERPROMOFINAL.jpg"
                  alt="Turrian Color & Design - Peinture, crépis et décoration professionnelle à Botterens, Suisse"
                  className="w-full h-125 md:w-auto md:h-225 object-contain"
                />
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-10 leading-tight">
                <span className="text-foreground">Transformez vos espaces</span>
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-rainbow)" }}
                >
                  avec couleur et créativité
                </span>
              </h1>

              <div className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto space-y-4">
                <p className="leading-relaxed">
                  Envie de changement? Besoin de rénover un bien? Envie de créer
                  le logement de vos rêves?
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Notre équipe sera à votre écoute
                  </span>{" "}
                  afin de réaliser le projet de vos rêves dans les meilleures
                  conditions!
                </p>
              </div>

              <p className="text-3xl font-bold mb-14">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-rainbow)" }}
                >
                  Osez rêver en couleur
                </span>
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg shadow-lg"
                  >
                    <a href="#contact">Nous contacter</a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg shadow-lg"
                  >
                    <a href="#services">Nos prestations</a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-24"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="var(--turrian-pink)"
            ></path>
          </svg>
        </div>
      </section>

      {/* Section Prestations - PINK */}
      <section
        id="services"
        className="relative py-24 text-foreground"
        style={{ background: "var(--turrian-pink)" }}
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-background text-foreground p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center cursor-pointer"
                  style={{ background: "var(--turrian-icon-bg)" }}
                  onClick={createBubble}
                >
                  {service.icon.startsWith("/") ? (
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-24 h-24 object-contain"
                    />
                  ) : (
                    <span className="text-5xl">{service.icon}</span>
                  )}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-24"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="var(--turrian-orange)"
            ></path>
          </svg>
        </div>
      </section>

      {/* Section Compétences - ORANGE */}
      <section
        id="competences"
        className="relative py-24 text-foreground"
        style={{ background: "var(--turrian-orange)" }}
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="text-2xl shrink-0"
                      style={{ color: "var(--turrian-blue)" }}
                    >
                      ✓
                    </span>
                    <span>{comp}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-24"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="var(--turrian-yellow)"
            ></path>
          </svg>
        </div>
      </section>

      {/* Section Philosophie - GOLDEN YELLOW */}
      <section
        id="philosophie"
        className="relative py-24 text-foreground"
        style={{ background: "var(--turrian-yellow)" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6">
                Le peintre qu'il vous faut
              </h2>
              <p className="text-xl opacity-90 leading-relaxed mb-6">
                Notre équipe est composée d'experts reconnus dans leur domaine
                et nous recherchons constamment des solutions novatrices pour
                améliorer l'efficacité, la sécurité et la durabilité des projets
                de construction.
              </p>
              <p className="text-xl opacity-90 leading-relaxed">
                Nous sommes fiers de notre capacité à fournir un travail de
                grande qualité, un service exceptionnel et des prix compétitifs
                qui permettent à nos clients de conserver un avantage
                concurrentiel.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-4/5 rounded-3xl shadow-2xl overflow-hidden bg-background/10 backdrop-blur-sm border border-white/20">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🎨👷
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-24"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="var(--turrian-green)"
            ></path>
          </svg>
        </div>
      </section>

      {/* Section Contact - GREEN */}
      <section
        id="contact"
        className="relative py-24 text-foreground"
        style={{ background: "var(--turrian-green)" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-bold mb-6">
              Si vous avez des questions ou souhaitez en savoir plus sur nos
              services,
            </h2>
            <h3 className="text-3xl font-bold mb-12 opacity-90">
              n'hésitez pas à nous contacter.
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.a
                href="tel:+41795189598"
                whileHover={{ scale: 1.05, y: -8 }}
                className="flex flex-col items-center gap-4 transition-all cursor-pointer text-foreground no-underline"
              >
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg border-2 border-white/40">
                  📞
                </div>
                <p className="text-xl font-semibold">+41 79/518.95.98</p>
              </motion.a>

              <motion.a
                href="mailto:turriancolordesign@gmail.com"
                whileHover={{ scale: 1.05, y: -8 }}
                className="flex flex-col items-center gap-4 transition-all cursor-pointer text-foreground no-underline"
              >
                <div className="w-20 h-20 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg border-2 border-white/40">
                  ✉️
                </div>
                <p className="text-xl font-semibold text-center">
                  turriancolordesign@gmail.com
                </p>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                className="flex flex-col items-center gap-4 transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg border-2 border-white/40">
                  📍
                </div>
                <p className="text-xl font-semibold">
                  Rte du Villard 3, 1652 Botterens
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-24"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="var(--turrian-blue)"
            ></path>
          </svg>
        </div>
      </section>

      {/* Footer - BLUE */}
      <footer
        className="py-12 text-foreground"
        style={{ background: "var(--turrian-blue)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/logo.jpg"
              alt="Logo Turrian Color & Design - Peintre professionnel en Suisse"
              className="h-32 w-auto object-contain"
            />
          </div>
          <p className="text-xl mb-6 opacity-75">Osez rêver en couleur</p>
          <p className="opacity-75">
            © 2026 Turrian Color & Design - Tous droits réservés
          </p>
          <p className="text-sm opacity-50 mt-4">
            <a
              href="https://github.com/lespacito"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              Site développé par lespacito
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
