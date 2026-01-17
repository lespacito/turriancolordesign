import { useAnalytics } from "@/components/providers/analytics-provider";
import type { NavMenuItem } from "@/types";

interface NavMenuProps {
  items: NavMenuItem[];
}

export function NavMenu({ items }: NavMenuProps) {
  const { trackEvent } = useAnalytics();

  const handleNavClick = (item: NavMenuItem) => {
    trackEvent("navigation_click", {
      event_category: "navigation",
      event_label: item.label,
      nav_href: item.href,
    });
  };

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
          onClick={() => handleNavClick(item)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
