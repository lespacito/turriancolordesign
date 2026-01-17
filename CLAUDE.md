# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Turrian Color & Design**, a marketing website for a Swiss painting and renovation company. It's a single-page application built with React 19, TypeScript, Vite, and Tailwind CSS 4.

## Development Commands

```bash
# Start development server (runs on http://localhost:8000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Technology Stack

- **Build Tool**: Vite 7 with SWC plugin for fast React refresh
- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 (using new inline theme syntax with OKLCH colors)
- **Animations**: Motion library (formerly Framer Motion)
- **UI Components**: Custom components built with Radix UI primitives
- **Analytics**: Google Analytics 4 with GDPR/FADP compliant cookie consent
- **Package Manager**: pnpm (note: pnpm-lock.yaml present)

## Architecture & Code Organization

### Directory Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI primitives (button, card, badge, etc.)
│   ├── features/        # Feature-specific components (service-card, contact-card, cookie-consent-banner, etc.)
│   └── providers/       # React context providers (bubble-provider, analytics-provider)
├── hooks/               # Custom React hooks (use-bubble-animation)
├── lib/
│   ├── constants.ts     # Application constants (services, colors, contact info)
│   ├── analytics.ts     # Google Analytics utilities (initGA, trackEvent, trackPageView)
│   └── utils.ts         # Utility functions (cn for className merging)
├── types/
│   └── index.ts         # TypeScript type definitions
├── App.tsx              # Main application component (single-page layout)
├── main.tsx             # React entry point
└── index.css            # Global styles with Tailwind and custom CSS variables
```

### Key Architectural Patterns

**Single-Page Layout**: The entire website is in `App.tsx` as one scrollable page with anchor-linked sections. Each section has a distinct background color from the Turrian brand palette.

**Brand Color System**: Uses a rainbow gradient theme with 5 primary colors defined in CSS variables:
- `--turrian-pink: #c2185b`
- `--turrian-orange: #e65100`
- `--turrian-yellow: #f9a825`
- `--turrian-green: #388e3c`
- `--turrian-blue: #1976d2`

These colors are used for section backgrounds, bubble animations, and the signature rainbow gradient.

**Component Composition**: UI is built from:
1. **Base UI components** (`components/ui/*`) - styled with class-variance-authority for variants
2. **Feature components** (`components/features/*`) - compose UI components with business logic
3. **Constants-driven content** (`lib/constants.ts`) - services, navigation, contact info stored as data

**Interactive Animations**:
- Bubble effect on service icon clicks (creates expanding colored circles)
- Motion library for scroll animations, hover effects, and transitions
- All animations use `whileInView` with `viewport={{ once: true }}` for performance

### Path Aliases

The project uses `@/*` to reference `src/*`:
```typescript
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/constants"
```

### Styling Approach

**Tailwind CSS 4** with new inline theme syntax:
- Uses OKLCH color space for better color accuracy
- Custom CSS variables defined in `@theme inline` block
- Utility classes with responsive variants (e.g., `lg:flex`, `md:grid-cols-2`)
- Custom animations from `tw-animate-css` package

**Dark mode ready**: CSS variables have `.dark` variants, though not currently implemented in UI.

## Important Conventions

### Component Structure
- Feature components accept data via props rather than hardcoding content
- Use TypeScript interfaces for all component props
- Prefer controlled components with clear data flow

### Image Handling
- Icons can be either emoji strings or paths to images in `/public`
- Check if icon starts with `/` to determine if it's an image path
- All images stored in `public/` directory (logo, service icons, gallery photos)

### Animation Performance
- Use `viewport={{ once: true }}` to prevent re-triggering scroll animations
- Bubble animations auto-cleanup after 2000ms timeout
- Background animations use `repeat: Infinity` with long durations

### Type Safety
- All data structures have corresponding TypeScript interfaces in `src/types/index.ts`
- Use type imports: `import type { Service } from "@/types"`
- Constants are typed with their interfaces (e.g., `SERVICES: Service[]`)

## Server Configuration

The Vite dev server is configured to:
- Run on port 8000
- Use `host: true` for network access
- Use polling for file watching (useful in certain dev environments)

## Content Management

To update content, edit the constants in `src/lib/constants.ts`:
- `SERVICES` - service offerings with icons and descriptions
- `COMPETENCES` - list of company capabilities
- `NAV_ITEMS` - navigation menu links
- `GALLERY_IMAGES` - portfolio images with alt text
- `CONTACT_METHODS` - contact information (phone, email, address)

## SEO & Metadata

- Main HTML file: `index.html` (contains meta tags, structured data, Open Graph tags)
- Sitemap: `public/sitemap.xml`
- Robots: `public/robots.txt`
- Images have descriptive alt text for accessibility and SEO

## Google Analytics Setup

**Implementation**: Google Analytics 4 (GA4) with GDPR/FADP compliance

### Configuration

1. **Environment Variable**: Set `VITE_GA_MEASUREMENT_ID` in `.env.local`
   ```bash
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. **Privacy Settings**:
   - Cookie consent banner (required by Swiss FDPIC)
   - 2-month data retention for privacy compliance
   - Automatic IP anonymization (built into GA4)
   - User can accept or decline tracking

### Architecture

**Analytics Provider** (`src/components/providers/analytics-provider.tsx`):
- React context provider wrapping the entire app
- Initializes GA4 only after user consent
- Exposes `trackEvent` and `trackPageView` methods via `useAnalytics()` hook

**Cookie Consent** (`src/components/features/cookie-consent-banner.tsx`):
- GDPR/FADP compliant consent banner
- Styled with Turrian brand colors
- Stores consent preference for 1 year
- Triggers GA4 initialization on acceptance

**Analytics Utilities** (`src/lib/analytics.ts`):
- `initGA()` - Dynamically loads and initializes GA4 script
- `trackEvent()` - Send custom events
- `trackPageView()` - Manual page view tracking (required for SPAs)
- Uses native `arguments` object (critical for proper GA4 function)

### Event Tracking

The following user interactions are automatically tracked:

1. **Service Clicks** (`service_click`):
   - Triggered when user clicks service card icons
   - Includes service name in event data

2. **Contact Clicks** (`contact_click`):
   - Triggered when user clicks phone, email, or address
   - Includes contact type and label

3. **Navigation Clicks** (`navigation_click`):
   - Triggered when user clicks navigation menu items
   - Includes navigation label and href

### Using Analytics in Components

```typescript
import { useAnalytics } from "@/components/providers/analytics-provider";

function MyComponent() {
  const { trackEvent, trackPageView, isInitialized } = useAnalytics();

  const handleClick = () => {
    trackEvent("custom_event", {
      event_category: "engagement",
      event_label: "button_click",
      custom_param: "value"
    });
  };

  // ...
}
```

### Performance Optimizations

- Preconnect links in `index.html` for faster GA4 script loading
- Async script loading to prevent blocking page render
- Manual page view tracking prevents duplicate events in SPA
- GA4 initializes only after user consent

### Privacy Compliance

Complies with:
- **Swiss FADP** (Federal Act on Data Protection)
- **GDPR** (General Data Protection Regulation) for EU visitors
- **FDPIC Guidelines** (October 2025 cookie consent requirements)

Features:
- Explicit opt-in consent (no pre-checked boxes)
- Easy opt-out (decline button equally prominent)
- Privacy policy link in consent banner
- Data retention limited to 2 months
- IP anonymization enabled
