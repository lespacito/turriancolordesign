import { NavMenu } from "./nav-menu";
import { ContactButtons } from "./contact-buttons";
import type { NavMenuItem } from "@/types";

interface HeaderProps {
  logoSrc: string;
  logoAlt: string;
  navItems: NavMenuItem[];
}

export function Header({ logoSrc, logoAlt, navItems }: HeaderProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm shadow-sm"
      data-slot="header"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-16 w-auto object-contain"
            />
          </a>
          <NavMenu items={navItems} />
          <ContactButtons variant="header" />
        </div>
      </div>
    </header>
  );
}
