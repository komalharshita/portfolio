# Complete Tech Stack & Build Guide
## Komal Harshita Portfolio — Excel-Themed Data Analyst Portfolio

> A step-by-step guide to every technology, library, and module used in this project. Written for someone starting from scratch.

---

## 1. CORE FRAMEWORK & RUNTIME

| Technology | Version | Purpose |
|---|---|---|
| **React** | ^18.3.1 | UI library — component-based rendering, state management via hooks |
| **TypeScript** | ^5.8.3 | Type-safe JavaScript — all `.tsx` and `.ts` files |
| **Vite** | ^5.4.19 | Build tool & dev server — instant HMR, ESM-native bundling |
| **Node.js + npm** | LTS | Runtime & package manager (project uses npm) |

### How Vite is configured (`vite.config.ts`):
- Plugin: `@vitejs/plugin-react-swc` (uses SWC instead of Babel for faster compilation)
- Path alias: `@` maps to `./src` for clean imports like `@/components/...`
- Dev server on port 8080 with HMR overlay disabled

---

## 2. STYLING & DESIGN SYSTEM

| Technology | Version | Purpose |
|---|---|---|
| **Tailwind CSS** | ^3.4.17 | Utility-first CSS framework |
| **tailwindcss-animate** | ^1.0.7 | Animation utilities (accordion, fade, etc.) |
| **@tailwindcss/typography** | ^0.5.16 | Prose/typography plugin (dev dependency) |
| **PostCSS** | ^8.5.6 | CSS processing pipeline (required by Tailwind) |
| **Autoprefixer** | ^10.4.21 | Auto vendor-prefix CSS |

### Tailwind config highlights (`tailwind.config.ts`):
- `darkMode: ["class"]` — theme toggling via CSS class
- Custom fonts: `font-heading` (Poppins), `font-body` (Inter)
- Semantic color tokens mapped to CSS variables (HSL format)
- Custom colors: `lavender`, `dusty-pink`, `pastel-pink`, `deep-purple`, `grid-line`
- Custom shadows: `shadow-soft`, `shadow-glow`
- Custom animation: `float` (6s infinite ease-in-out)

### CSS architecture (`src/index.css`):
- **Google Fonts import**: Poppins (400-800) + Inter (300-600)
- **CSS variables**: Full HSL color system for dark (`:root`) and light (`.light`) themes
- **Grid background**: `linear-gradient` pattern creating spreadsheet-like gridlines (40px desktop, 28px mobile)
- **Component classes**: `.excel-cell`, `.excel-cell-header`, `.excel-cell-active`, `.sheet-tab`, `.stat-card`, `.glass-card`
- **Utility classes**: `.gradient-hero`, `.gradient-accent`, `.gradient-subtle`
- **Glassmorphism**: `backdrop-filter: blur()` on cards

---

## 3. UI COMPONENT LIBRARY

| Technology | Purpose |
|---|---|
| **shadcn/ui** | Pre-built accessible components (NOT an npm package — code is copied into `src/components/ui/`) |
| **Radix UI** | Headless primitives underneath shadcn (listed below) |
| **class-variance-authority (CVA)** | ^0.7.1 — Component variant management |
| **clsx** | ^2.1.1 — Conditional class string builder |
| **tailwind-merge** | ^2.6.0 — Deduplicates Tailwind classes |
| **cmdk** | ^1.1.1 — Command menu component |

### Radix UI primitives installed (all under `@radix-ui/react-*`):
```
accordion, alert-dialog, aspect-ratio, avatar, checkbox, collapsible,
context-menu, dialog, dropdown-menu, hover-card, label, menubar,
navigation-menu, popover, progress, radio-group, scroll-area, select,
separator, slider, slot, switch, tabs, toast, toggle, toggle-group, tooltip
```

### shadcn components in `src/components/ui/`:
```
accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb,
button, calendar, card, carousel, chart, checkbox, collapsible, command,
context-menu, dialog, drawer, dropdown-menu, form, hover-card, input-otp,
input, label, menubar, navigation-menu, pagination, popover, progress,
radio-group, resizable, scroll-area, select, separator, sheet, sidebar,
skeleton, slider, sonner, switch, table, tabs, textarea, toast, toaster,
toggle-group, toggle, tooltip
```

---

## 4. ANIMATION & MOTION

| Technology | Version | Purpose |
|---|---|---|
| **Framer Motion** | ^12.35.1 | Page transitions, entrance animations, hover effects |

### Usage patterns:
- `<AnimatePresence mode="wait">` for tab transitions in `ExcelWorkbook.tsx`
- `<motion.div initial/animate/exit>` for staggered card entrances
- Transition: `{ duration: 0.25 }` for tab switches
- Hover scale/lift effects on cards

---

## 5. DATA VISUALIZATION

| Technology | Version | Purpose |
|---|---|---|
| **Recharts** | ^2.15.4 | Chart library built on D3 + React |

### Charts used:
- `BarChart` + `Bar` — language distribution, skill levels
- `LineChart` + `Line` — GitHub contribution timeline
- `RadarChart` + `Radar` — skill radar charts
- `PieChart` + `Pie` + `Cell` — skill category distribution
- `ResponsiveContainer` — responsive chart sizing
- `CartesianGrid`, `XAxis`, `YAxis`, `Tooltip` — chart furniture

---

## 6. SQL PLAYGROUND (IN-BROWSER DATABASE)

| Technology | Version | Purpose |
|---|---|---|
| **sql.js** | ^1.14.1 | SQLite compiled to WebAssembly — runs entirely in the browser |

### How it works:
1. **WASM file**: `public/sql-wasm.wasm` is loaded at runtime
2. **Initialization**: `initSqlJs({ locateFile: () => '/sql-wasm.wasm' })`
3. **Schema**: Creates 5 tables on init: `komal`, `hobbies`, `skills`, `projects`, `achievements`
4. **Query execution**: User types SQL → `db.exec(query)` → results rendered as HTML table
5. **Easter eggs**: Special queries trigger confetti/animations
6. **Keyboard shortcut**: Ctrl+Enter to execute

---

## 7. ROUTING

| Technology | Version | Purpose |
|---|---|---|
| **React Router DOM** | ^6.30.1 | Client-side routing |

### Routes (`src/App.tsx`):
- `/` → `Index` page (renders `ExcelWorkbook` component)
- `*` → `NotFound` (404 page)
- Note: This is effectively a **single-page app** — all content lives in tabs within `ExcelWorkbook`

---

## 8. STATE MANAGEMENT & DATA FETCHING

| Technology | Version | Purpose |
|---|---|---|
| **React hooks** | (built-in) | `useState`, `useEffect`, `useRef`, `useCallback` for local state |
| **TanStack React Query** | ^5.83.0 | Server state management (available but primary data is client-side) |

### GitHub API integration (`GitHubAnalytics.tsx`):
- Fetches from `api.github.com/users/{username}/repos` and `/events/public`
- No API key needed (public endpoints, rate-limited)
- Data computed client-side: language stats, commit counts, streak calculation

---

## 9. FORMS & VALIDATION

| Technology | Version | Purpose |
|---|---|---|
| **React Hook Form** | ^7.61.1 | Form state management |
| **@hookform/resolvers** | ^3.10.0 | Validation resolver bridge |
| **Zod** | ^3.25.76 | Schema-based validation |

---

## 10. ADDITIONAL UI LIBRARIES

| Technology | Version | Purpose |
|---|---|---|
| **Lucide React** | ^0.462.0 | Icon library (BarChart3, Github, Mail, etc.) |
| **Sonner** | ^1.7.4 | Toast notification system |
| **Vaul** | ^0.9.9 | Drawer component |
| **date-fns** | ^3.6.0 | Date utility functions |
| **input-otp** | ^1.4.2 | OTP input component |
| **embla-carousel-react** | ^8.6.0 | Carousel/slider engine |
| **react-resizable-panels** | ^2.1.9 | Resizable panel layouts |
| **react-day-picker** | ^8.10.1 | Calendar/date picker |
| **next-themes** | ^0.3.0 | Theme (dark/light) management with class strategy |

---

## 11. DEVELOPMENT & BUILD TOOLS

| Technology | Version | Purpose |
|---|---|---|
| **ESLint** | ^9.32.0 | Code linting |
| **eslint-plugin-react-hooks** | ^5.2.0 | React hooks linting rules |
| **eslint-plugin-react-refresh** | ^0.4.20 | Fast refresh compatibility checks |
| **typescript-eslint** | ^8.38.0 | TypeScript-aware linting |
| **globals** | ^15.15.0 | Global variable definitions for ESLint |
| **Vitest** | ^3.2.4 | Unit testing framework (Vite-native) |
| **@testing-library/react** | ^16.0.0 | React component testing utilities |
| **@testing-library/jest-dom** | ^6.6.0 | DOM assertion matchers |
| **jsdom** | ^20.0.3 | Browser environment simulation for tests |
| **lovable-tagger** | ^1.1.13 | Lovable platform component tagging (dev only) |

---

## 12. PROJECT STRUCTURE

```
├── public/
│   ├── favicon.ico
│   ├── sql-wasm.wasm          ← SQLite WASM binary
│   ├── robots.txt
│   └── placeholder.svg
├── src/
│   ├── main.tsx               ← React entry point (renders <App />)
│   ├── App.tsx                ← Router setup, providers
│   ├── index.css              ← Theme tokens, grid background, component classes
│   ├── App.css                ← Additional styles
│   ├── assets/                ← Images (profile photo, dashboards)
│   ├── components/
│   │   ├── ExcelWorkbook.tsx  ← MAIN SHELL — title bar, formula bar, col/row headers, tab navigation
│   │   ├── GitHubAnalytics.tsx ← Live GitHub API dashboard
│   │   ├── SQLPlayground.tsx  ← In-browser SQL with sql.js
│   │   ├── SQLTerminal.tsx    ← Terminal-style SQL interface
│   │   ├── ProfileCard.tsx    ← Hero profile card
│   │   ├── SkillChart.tsx     ← Recharts skill visualizations
│   │   ├── ProjectsTable.tsx  ← Excel-styled project table
│   │   ├── CertificationTable.tsx
│   │   ├── Timeline.tsx       ← Achievement timeline
│   │   ├── MetricCard.tsx / MetricGrid.tsx / StatCards.tsx
│   │   ├── ChartCard.tsx / VisualizationGrid.tsx
│   │   ├── ToolCard.tsx       ← Tool/technology cards
│   │   ├── Sparkles.tsx       ← Decorative particle effects
│   │   ├── ThemeToggle.tsx    ← Dark/light mode switch
│   │   ├── SheetTabs.tsx      ← Bottom tab navigation
│   │   ├── Navbar.tsx / NavLink.tsx / PageLayout.tsx
│   │   ├── tabs/
│   │   │   ├── AboutMeTab.tsx
│   │   │   ├── MySkillsTab.tsx
│   │   │   ├── ProjectsTab.tsx
│   │   │   ├── VisualizationsTab.tsx
│   │   │   ├── AchievementsTab.tsx
│   │   │   └── ContactTab.tsx
│   │   └── ui/                ← 45+ shadcn/ui components
│   ├── hooks/
│   │   ├── use-mobile.tsx     ← Mobile breakpoint detection
│   │   └── use-toast.ts      ← Toast notification hook
│   ├── lib/
│   │   └── utils.ts           ← cn() utility (clsx + tailwind-merge)
│   ├── pages/
│   │   ├── Index.tsx          ← Renders ExcelWorkbook
│   │   ├── NotFound.tsx
│   │   └── [unused pages: Overview, Projects, etc.]
│   └── test/
│       ├── setup.ts           ← Vitest setup
│       └── example.test.ts
├── index.html                 ← HTML entry with SEO meta tags
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── postcss.config.js
├── eslint.config.js
├── vitest.config.ts
├── components.json            ← shadcn/ui configuration
└── package.json
```

---

## 13. HOW TO BUILD THIS FROM SCRATCH

### Step 1: Scaffold
```bash
npm create vite@latest portfolio -- --template react-ts
cd portfolio
```

### Step 2: Install core dependencies
```bash
# Styling
npm i tailwindcss@3 postcss autoprefixer tailwindcss-animate @tailwindcss/typography
npx tailwindcss init -p

# UI Components (shadcn)
npx shadcn-ui@latest init
# Then add components: npx shadcn-ui@latest add button card table tabs ...

# Animation
npm i framer-motion

# Charts
npm i recharts

# Routing
npm i react-router-dom

# SQL Playground
npm i sql.js
# Copy sql-wasm.wasm to public/

# Icons
npm i lucide-react

# State & Forms
npm i @tanstack/react-query react-hook-form @hookform/resolvers zod

# Theme
npm i next-themes

# Notifications
npm i sonner

# Misc UI
npm i date-fns embla-carousel-react react-resizable-panels vaul input-otp react-day-picker cmdk
```

### Step 3: Configure Tailwind
- Set up `tailwind.config.ts` with semantic color tokens, custom fonts, shadows
- Add HSL CSS variables in `index.css` for dark and light themes
- Import Google Fonts (Poppins + Inter)

### Step 4: Build the Excel shell
- `ExcelWorkbook.tsx`: Title bar → Formula bar → Column headers → Row numbers → Tab content → Sheet tabs
- Use `useState` for active tab, `AnimatePresence` for transitions

### Step 5: Build each tab
- Each tab is a separate component in `src/components/tabs/`
- They compose smaller components (ProfileCard, SkillChart, ProjectsTable, etc.)

### Step 6: Add SQL Playground
- Initialize sql.js with WASM
- Create tables with portfolio data
- Parse and display query results in Excel-styled tables

### Step 7: Add GitHub Analytics
- Fetch from GitHub public API
- Compute language stats, streak, contributions
- Display with Recharts

### Step 8: SEO
- Set `<title>`, `<meta description>`, Open Graph tags, Twitter cards in `index.html`
- Semantic HTML, single `<h1>`, alt text on images

---

## 14. HOSTING & DEPLOYMENT

| Service | Purpose |
|---|---|
| **Lovable** | Development platform & hosting |
| **Lovable Cloud** | Published at `komalharshita.lovable.app` |

To deploy elsewhere:
- Push to GitHub → connect to **Vercel**, **Netlify**, or **Cloudflare Pages**
- Build command: `npm run build`
- Output directory: `dist`
- No backend/server required — fully static site

---

## 15. EXTERNAL APIs

| API | Auth Required | Purpose |
|---|---|---|
| GitHub REST API | No (public, rate-limited to 60 req/hr) | Repo list, events, language stats |
| Google Fonts CDN | No | Font loading (Poppins, Inter) |

---

*Total npm dependencies: 40+ production, 15+ dev*
*Total custom components: 20+*
*Total shadcn/ui components: 45+*
