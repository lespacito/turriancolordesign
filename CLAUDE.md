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
- **Analytics**: Umami Analytics (privacy-focused, self-hosted)
- **Package Manager**: pnpm (note: pnpm-lock.yaml present)

## Architecture & Code Organization

### Directory Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI primitives (button, card, badge, etc.)
│   ├── features/        # Feature-specific components (service-card, contact-card, etc.)
│   └── providers/       # React context providers (bubble-provider)
├── hooks/               # Custom React hooks (use-bubble-animation)
├── lib/
│   ├── constants.ts     # Application constants (services, colors, contact info)
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

## Analytics Setup

**Implementation**: Umami Analytics - Privacy-focused, GDPR compliant

### Configuration

The analytics script is integrated directly in `index.html`:

```html
<script
  defer
  src="https://analytics.turriancolordesign.ch/script.js"
  data-website-id="64c4167d-0d50-4e16-b732-12e15ac67ad9"
></script>
```

### Features

- **Privacy-First**: No cookies required, GDPR compliant by default
- **Open Source**: Self-hosted Umami instance
- **Lightweight**: Minimal performance impact
- **No Consent Banner**: Umami doesn't use cookies or track personal data
- **Real-time**: Track page views, events, and user behavior
- **Swiss Hosted**: Data stays in Switzerland (analytics.turriancolordesign.ch)

### What's Tracked

Umami automatically tracks:
- Page views
- Referrers
- Browser and OS information
- Device type (desktop, mobile, tablet)
- Country (based on IP, not stored)

All data is aggregated and anonymous. No personal information is collected.

### Privacy Compliance

Complies with:
- **Swiss FADP** (Federal Act on Data Protection)
- **GDPR** (General Data Protection Regulation)
- **ePrivacy Directive**

No cookie banner required because Umami:
- Doesn't use cookies
- Doesn't track individuals
- Doesn't collect personal data
- Uses anonymized aggregate data only
