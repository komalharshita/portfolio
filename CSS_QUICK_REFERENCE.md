# CSS Quick Reference Card

## Single CSS File Structure

\`\`\`
📁 Project Root
│
├── 📄 /app/globals.css ⭐ (1827 lines - ALL STYLES HERE)
│   ├── Framework imports
│   ├── Theme variables
│   ├── Root CSS variables
│   ├── Base styles
│   ├── Component styles
│   ├── Animations (100+ keyframes)
│   └── Responsive utilities
│
├── 📄 /app/layout.tsx
│   └── import "./globals.css" ✅
│
└── 📁 /components (NO CSS FILES)
    └── All files use only Tailwind + global CSS classes
\`\`\`

---

## Background Patterns at a Glance

| Section | Class | Pattern | Animation |
|---------|-------|---------|-----------|
| Hero | `.bg-hero-pattern` | 🌊 Flowing wave | 8-12s wave |
| About | `.bg-about-pattern` | 💫 Pulsing nodes | 6s pulse |
| Skills | `.bg-skills-pattern` | ➡️ Horizontal flow | 10s stream |
| Works | `.bg-works-pattern` | 🔷 Grid nodes | 5s pulse |
| Visualizations | `.bg-visualizations-pattern` | 📊 Chart bars | 4s pulse |
| Process | `.bg-process-pattern` | ↕️ Vertical timeline | 8s flow |
| Experience | `.bg-experience-pattern` | 🎯 Milestones | 5.5s pulse |
| Contact | `.bg-contact-pattern` | 🕸️ Network | 7s pulse |
| Footer | `.bg-footer-pattern` | ✨ Subtle glow | 8s pulse |

---

## How to Use Background Patterns

### In Your Component
\`\`\`tsx
<section className="relative">
  {/* Add this line */}
  <div className="bg-hero-pattern absolute inset-0 pointer-events-none" />
  
  {/* Content here */}
  <div className="relative z-10">
    <h1>Your Title</h1>
  </div>
</section>
\`\`\`

---

## Color Palette

\`\`\`
🟣 Deep Purple    #250e2c    (Dark backgrounds)
🟣 Lavender Blue  #837ab6    (Accents)
🌺 Dusty Pink     #cc8db3    (Secondary)
💖 Pastel Pink    #f6a5c0    (Primary brand)
🤍 Light Blush    #f7c2ca    (Text/highlights)
\`\`\`

---

## Key CSS Variables

\`\`\`css
/* Theme */
--color-deep-purple: #250e2c
--color-pastel-pink: #f6a5c0

/* Shadows */
--shadow-soft: 0 0 12px rgba(246,165,192,0.25)
--shadow-medium: 0 0 20px rgba(204,141,179,0.35)
--shadow-strong: 0 0 32px rgba(247,194,202,0.45)

/* Typography */
--font-heading: "Poppins", sans-serif
--font-body: "Inter", sans-serif
\`\`\`

---

## Common Animation Classes

### Scroll Reveal
- `.reveal` - Fade up (20px offset)
- `.reveal-left` - Slide in from left
- `.reveal-right` - Slide in from right
- `.reveal-stagger` - Staggered reveal

### Text Animations
- `.heading-reveal` - Special heading animation
- `.text-reveal` - Text fade in with scale
- `.text-shimmer` - Shimmer effect
- `.text-color-pulse` - Color pulsing

### Scroll Triggered
- `.scroll-fade-up` - Fade up on scroll
- `.scroll-slide-left` - Slide left on scroll
- `.scroll-slide-right` - Slide right on scroll
- `.stagger-item` - Staggered items

---

## Z-Index Guide

\`\`\`
9999  Cursor trails (always on top)
1     Background patterns
10    Content (above patterns)
0     Normal content
-1    Hidden elements
\`\`\`

---

## Adding New Styles

### ✅ DO THIS
\`\`\`css
/* Edit /app/globals.css */
@layer components {
  .my-button {
    @apply px-4 py-2 rounded-lg;
  }
}
\`\`\`

### ❌ DON'T DO THIS
\`\`\`tsx
// ❌ Don't import CSS in components
import "./styles.css"

// ❌ Don't create new CSS files
// /components/MyComponent.module.css

// ❌ Don't use style imports
import styles from "./Component.css"
\`\`\`

---

## Responsive Breakpoints

| Size | Class | Width |
|------|-------|-------|
| Mobile | (default) | <640px |
| Small | `sm:` | 640px+ |
| Medium | `md:` | 768px+ |
| Large | `lg:` | 1024px+ |
| XL | `xl:` | 1280px+ |

---

## Performance Checklist

- ✅ Single CSS file (1 HTTP request)
- ✅ No duplicate styles
- ✅ Hardware-accelerated animations
- ✅ Optimal bundle size
- ✅ Fast browser caching
- ✅ Efficient pattern rendering

---

## Text Styling Quick Fix

**If text is hard to see:**

\`\`\`tsx
<p 
  className="relative z-10 font-medium"
  style={{ color: "#f0d4dd" }}  // Lighter pink
>
  Your text here
</p>
\`\`\`

---

## Animation Speeds Reference

\`\`\`css
/* Keyframe animations (pattern backgrounds) */
4s    - Visualizations chart bars
5s    - Works/Projects pulsing
5.5s  - Experience milestones
6s    - About pulsing nodes
7s    - Contact network
8s    - Hero flowing wave, Footer glow
10s   - Skills horizontal flow
12s   - Hero particle grid
\`\`\`

---

## Common Tailwind + Global CSS Combo

\`\`\`tsx
// Pattern + content layer
<section className="relative py-20">
  <div className="bg-hero-pattern absolute inset-0" />
  
  <div className="relative z-10 max-w-7xl mx-auto px-4">
    <h1 className="text-4xl font-bold text-light-blush mb-6">
      Heading
    </h1>
    <p className="text-lg text-pastel-pink">
      Content here
    </p>
  </div>
</section>
\`\`\`

---

## Debugging Tips

| Issue | Fix |
|-------|-----|
| Pattern not visible | Check `z-index: 1` and `absolute` + `inset-0` |
| Text hidden | Add `z-10` to content container |
| Animation jank | Check `pointer-events: none` on bg |
| Responsive broken | Verify media query syntax |
| Text too faint | Increase opacity or use lighter color |

---

## One-Liner Summary

🎨 **Single global CSS file** + **9 animated backgrounds** + **100+ utilities** = **Production-ready website** ✅

---

## File Location Reference

\`\`\`
ALL CSS EDITING → /app/globals.css
CSS IMPORT → /app/layout.tsx (line 11)
COMPONENTS → /components/*.tsx (use className only)
NO CSS FILES → /styles/, /components/styles/
\`\`\`

---

## Last Updated
- Refactored: Single CSS consolidation
- Deleted: 2 redundant CSS files
- Status: ✅ PRODUCTION READY
