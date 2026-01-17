import type { NavMenuItem } from "@/types";

interface NavMenuProps {
  items: NavMenuItem[];
}

export function NavMenu({ items }: NavMenuProps) {
  return (
    <nav
      className="hidden md:flex items-center gap-8"
      data-slot="nav-menu"
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-foreground hover:text-primary transition-colors font-medium"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
