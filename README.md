# Creative Portfolio — Komal Harshita

A small, static Next.js portfolio site with playful "Barbiecore Y2K" visuals, glassmorphic UI elements, and animated backgrounds. Built with Next.js, Tailwind CSS and lightweight client components.

Badges
- ![status](https://img.shields.io/badge/status-active-brightgreen) (placeholder)
- ![next](https://img.shields.io/badge/framework-Next.js-black)
- ![license](https://img.shields.io/badge/license-MIT-lightgrey) (add LICENSE file to enable)

What this project does
- Presents a personal portfolio site for Komal Harshita with sections for hero, about, projects and contact.
- Uses modular React components (client components) for animated visuals and UI patterns (glassmorphic tooltips, holographic text, animated dividers, floating shapes, gradient mesh background).
- Exports a static site (see [next.config.mjs](next.config.mjs)) suitable for static hosting.

Why this project is useful
- Ready-made, aesthetic portfolio template with accessible components and animations.
- Small, component-focused codebase that’s easy to adapt for other creators or developers.
- Demonstrates using Tailwind + PostCSS + Next.js with client-side micro-interactions.

Quick links (open these files)
- App entry: [app/page.tsx](app/page.tsx) — composes the page using components.
- Root layout: [app/layout.tsx](app/layout.tsx) — fonts, metadata and global CSS import.
- Global styles: [app/globals.css](app/globals.css) and [styles/globals.css](styles/globals.css).
- Next config: [next.config.mjs](next.config.mjs)
- PostCSS: [postcss.config.mjs](postcss.config.mjs)
- Components:
  - [`Hero`](components/hero.tsx)
  - [`About`](components/about.tsx)
  - [`Projects`](components/projects.tsx)
  - [`Contact`](components/contact.tsx)
  - [`Navigation`](components/navigation.tsx)
  - [`GradientMeshBackground`](components/gradient-mesh-background.tsx)
  - [`FloatingShapes`](components/floating-shapes.tsx)
  - [`GlassmorphicTooltip`](components/glassmorphic-tooltip.tsx)
  - [`HolographicText`](components/holographic-text.tsx)
  - [`AnimatedDivider`](components/animated-divider.tsx)
  - [`ThemeProvider`](components/theme-provider.tsx)
- Utility: [`cn`](lib/utils.ts)

Quick start

Development (pnpm recommended)
\`\`\`bash
# Install dependencies
pnpm install

# Run dev server (Next.js)
pnpm dev
