interface FooterProps {
  logoSrc: string;
  logoAlt: string;
  tagline: string;
}

export function Footer({ logoSrc, logoAlt, tagline }: FooterProps) {
  return (
    <footer
      className="py-12 text-foreground"
      style={{ background: "var(--turrian-blue)" }}
      data-slot="footer"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-32 w-auto object-contain"
          />
        </div>
        <p className="text-xl mb-6 opacity-75">{tagline}</p>
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
  );
}
