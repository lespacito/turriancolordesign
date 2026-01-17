import { Button } from "@/components/ui/button";

interface ContactButtonsProps {
  variant?: "header" | "inline";
}

export function ContactButtons({ variant = "header" }: ContactButtonsProps) {
  if (variant === "header") {
    return (
      <div className="flex items-center gap-2" data-slot="contact-buttons">
        {/* Version desktop - texte complet */}
        <Button
          asChild
          size="lg"
          variant="outline"
          className="hidden lg:flex"
        >
          <a href="mailto:turriancolordesign@gmail.com">
            <span className="grayscale">✉️</span>{" "}
            turriancolordesign@gmail.com
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="hidden lg:flex"
        >
          <a href="tel:+41795189598">📞 079 518 95 98</a>
        </Button>

        {/* Version mobile/tablette - icônes uniquement */}
        <Button
          asChild
          size="sm"
          variant="outline"
          className="lg:hidden"
        >
          <a
            href="mailto:turriancolordesign@gmail.com"
            aria-label="Email"
          >
            <span className="grayscale">✉️</span>
          </a>
        </Button>
        <Button
          asChild
          size="sm"
          variant="outline"
          className="lg:hidden"
        >
          <a href="tel:+41795189598" aria-label="Téléphone">
            📞
          </a>
        </Button>
      </div>
    );
  }

  return null;
}
