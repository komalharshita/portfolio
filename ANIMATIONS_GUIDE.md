# Portfolio Animations Guide

## Overview
This document outlines the comprehensive text and scroll-triggered animation system implemented across your portfolio to create an engaging, professional user experience.

---

## Animation Categories

### 1. **Text & Heading Animations** (Load Screen → Post-Load)
These animations trigger after the welcome/loading screen disappears, creating a sequential reveal effect.

#### Heading Animations
- **`.heading-reveal`** - Main title animates in with upward fade and scale effect (0.8s)
- **`.heading-reveal-delayed`** - Secondary heading with 0.2s delay
- **`.heading-reveal-delayed-lg`** - Tertiary heading with 0.4s delay

**Effect**: `revealHeading` keyframe - opacity 0→1, transform from `translateY(20px) scaleY(0.9)` to normal

#### Paragraph Text Animations
- **`.text-reveal`** - Body text fades in with slight scale (0.7s, 0.3s delay)
- **`.text-reveal-delayed`** - Alternate body text (0.5s delay)

**Effect**: `fadeInScale` keyframe - combines opacity and scale for smooth entrance

#### Micro-Animations for Small Text
- **`.text-micro-pulse`** - Subtle opacity pulsing (3s infinite)
  - Perfect for stat descriptions, secondary text
  - 85%-100% opacity range for professional subtlety
  
- **`.text-subtle-bounce`** - Gentle upward bounce (2s infinite)
  - 2px vertical movement
  - Ideal for supporting copy and descriptions

- **`.text-shimmer`** - Gradient color shift effect (3s infinite)
  - Creates metallic/holographic text effect
  - Great for accent text and key phrases

- **`.text-color-pulse`** - Cyclic color shift between primary and secondary pink (2s infinite)
  - Draws attention without motion
  - For highlighted text elements

---

### 2. **Scroll-Triggered Animations**
These activate via Intersection Observer when elements enter the viewport (15% threshold).

#### Directional Slide Animations
- **`.scroll-slide-left`** - Content slides in from left (0.9s)
  - From `translateX(-40px)` to normal
  - Used for left-aligned content blocks

- **`.scroll-slide-left-delay`** - Same with 0.15s delay
  - Creates sequence effect for paired elements

- **`.scroll-slide-right`** - Content slides in from right (0.9s)
  - From `translateX(40px)` to normal
  - Used for right-aligned content blocks

- **`.scroll-slide-right-delay`** - Same with 0.15s delay

#### Fade-Up Animations
- **`.scroll-fade-up`** - Standard fade in with upward motion (0.9s)
  - From `translateY(30px)` opacity 0
  - Most versatile scroll animation

- **`.scroll-fade-up-delay`** - 0.15s delay
- **`.scroll-fade-up-delay-2`** - 0.3s delay
- **`.scroll-fade-up-delay-3`** - 0.45s delay
  - Use cascade of delays for sequential reveals

#### Stagger Animation (List Items)
- **`.stagger-item`** - Individual items animate in sequence
  - Each child (nth-child) has progressive delay: 0.05s to 0.4s
  - Perfect for skill lists, stats, feature lists
  - Creates professional cascading effect

#### Base Reveal Classes (JavaScript-driven)
- **`.reveal`** - Observes intersection, adds `.visible` class
  - Vertical fade-up animation (20px drop)
  
- **`.reveal-left`** - Slides in from left on scroll
  - 30px horizontal offset
  
- **`.reveal-right`** - Slides in from right on scroll
  - 30px horizontal offset

- **`.reveal-stagger`** - Works with nth-child selectors
  - Each child gets 0.1s incremental delay when visible
  - Up to 6 child stagger delays defined

---

## Animation Properties

### Timing Functions
- **`cubic-bezier(0.34, 1.56, 0.64, 1)`** - Bouncy, playful entrance for headings
- **`ease-out`** - Smooth deceleration for content reveals
- **`ease-in-out`** - For continuous micro-animations

### Durations
- **0.6s** - Quick micro-animations, small elements
- **0.7-0.8s** - Text and heading reveals
- **0.9s** - Scroll-triggered large content blocks
- **2-3s** - Continuous loop animations

### Delays
- **0.05s-0.4s** - Stagger effects for list items
- **0.1s-0.5s** - Sequential heading reveals
- **0.15s-0.45s** - Scroll animation cascades

---

## Implementation Examples

### Hero Section
\`\`\`jsx
<h1 className="heading-reveal">PORTFOLIO</h1>
<h2 className="heading-reveal-delayed">Komal Harshita</h2>
<p className="text-reveal">A CSE Sophomore @ NMIET Pune</p>

{/* Stats with stagger */}
<div className="stagger-item">50+</div>
<div className="stagger-item">Skilled</div>
<div className="stagger-item">2026</div>
\`\`\`

### About Section
\`\`\`jsx
<div className="scroll-slide-left">
  <img src="profile.png" />
</div>
<div className="scroll-slide-right">
  <p className="scroll-fade-up-delay">Bio content</p>
</div>
\`\`\`

### Skills Section
\`\`\`jsx
<div className="scroll-fade-up">
  <h3>Technical Skills</h3>
  <ul>
    {skills.map((skill) => (
      <li key={skill} className="stagger-item">
        {skill}
      </li>
    ))}
  </ul>
</div>
\`\`\`

---

## Scroll Reveal Integration

The `ScrollReveal.tsx` component handles all scroll-triggered animations:

\`\`\`javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});
\`\`\`

**Key Settings:**
- **Threshold: 0.15** - Trigger when 15% of element is visible
- **rootMargin**: Starts animation 50px before full visibility
- Observes all elements with: `.reveal`, `.reveal-stagger`, `.reveal-left`, `.reveal-right`, `.scroll-*`, `.heading-reveal`, `.text-reveal`, `.stagger-item`

---

## Best Practices Applied

✅ **Subtle & Professional**
- All animations use smooth easing functions
- No jarring movements; gradual transitions
- Micro-animations stay within 15% opacity/transform range

✅ **Responsive**
- Animations work seamlessly on mobile, tablet, desktop
- Element sizes scale but animation durations remain consistent

✅ **Accessible**
- `prefers-reduced-motion` consideration (future enhancement)
- Animations don't interfere with readability
- Text is always readable during animation

✅ **Performance Optimized**
- CSS animations (GPU-accelerated) instead of JavaScript where possible
- Limited continuous animations to prevent battery drain
- Stagger delays prevent simultaneous animation overload

✅ **Intentional Design**
- Load-screen text animations prepare user attention
- Scroll animations reward exploration and reading
- Stagger effects create visual hierarchy
- Micro-pulses guide attention without distraction

---

## Customization Guide

### Modify Animation Speed
Edit in `/app/globals.css`:
\`\`\`css
@keyframes revealHeading {
  /* Change 0.8s to 0.6s for faster, 1.2s for slower */
  animation: 0.8s cubic-bezier(...);
}
\`\`\`

### Adjust Stagger Delays
\`\`\`css
.stagger-item:nth-child(2) {
  animation-delay: 0.2s; /* Change from 0.1s */
}
\`\`\`

### Add New Scroll Sections
1. Add class to section element: `<div className="scroll-fade-up">`
2. Ensure `ScrollReveal.tsx` component is included in layout
3. Animation activates automatically on scroll

### Change Timing Function
\`\`\`css
animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
/* Options: ease-out, ease-in, ease-in-out, or custom cubic-bezier */
\`\`\`

---

## Browser Compatibility

- ✅ Chrome/Edge 88+
- ✅ Firefox 87+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Android Chrome)

---

## Performance Metrics

- **LCP Impact**: Negligible (animations start after page load)
- **FID Impact**: None (no JavaScript animation blocking)
- **CLS Impact**: None (animations don't shift layout)

All animations use CSS transforms and opacity (most performant properties).
