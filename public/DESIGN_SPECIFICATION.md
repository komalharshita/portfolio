# Komal Harshita Portfolio — Complete Design & Layout Specification

**Project:** Excel/Spreadsheet-Themed Data Analyst Portfolio  
**Live URL:** https://komalharshita.lovable.app  
**Stack:** React 18 + Vite + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion  
**Architecture:** Single-page app with tab-based navigation (no routing)

---

## 1. DESIGN PHILOSOPHY

The portfolio is designed to look and feel like a **Microsoft Excel workbook**, with the user's professional data presented as spreadsheet content. The aesthetic is a **dark purple glassmorphism** theme with dusty pink accents — combining a data analyst console feel with modern portfolio design.

**Key Principles:**
- Excel-like chrome (column headers, row numbers, formula bar, sheet tabs)
- Glassmorphism cards with backdrop blur
- Animated skill bars, counters, and page transitions
- Dark/light theme toggle
- Fully responsive (mobile hamburger menu, condensed grid)

---

## 2. COLOR SYSTEM (HSL)

### Dark Theme (Default — `:root`)
| Token | HSL Value | Description |
|---|---|---|
| `--background` | `280 50% 11%` | Deep purple page background |
| `--foreground` | `270 20% 90%` | Light text |
| `--card` | `280 45% 15%` | Card surfaces |
| `--card-foreground` | `270 20% 90%` | Card text |
| `--primary` | `270 60% 65%` | Purple accent (buttons, links, highlights) |
| `--primary-foreground` | `280 50% 8%` | Text on primary |
| `--secondary` | `280 30% 20%` | Subtle background fills |
| `--secondary-foreground` | `270 20% 85%` | Text on secondary |
| `--muted` | `280 20% 18%` | Muted backgrounds |
| `--muted-foreground` | `270 15% 60%` | Subdued text |
| `--accent` | `330 50% 72%` | Dusty pink accent |
| `--accent-foreground` | `330 60% 92%` | Text on accent |
| `--destructive` | `0 84.2% 60.2%` | Error red |
| `--border` | `280 30% 22%` | Border color |
| `--input` | `280 30% 22%` | Input borders |
| `--ring` | `270 60% 65%` | Focus ring |
| `--lavender` | `270 40% 70%` | Decorative lavender |
| `--dusty-pink` | `340 40% 68%` | Decorative pink |
| `--pastel-pink` | `330 50% 75%` | Pastel pink |
| `--deep-purple` | `280 50% 11%` | Matches background |
| `--grid-line` | `270 30% 20%` | Spreadsheet grid lines |
| `--grid-bg-line` | `270 40% 55%` | Body grid pattern lines |

### Light Theme (`.light` class on `<html>`)
| Token | HSL Value |
|---|---|
| `--background` | `0 0% 97%` |
| `--foreground` | `240 10% 15%` |
| `--card` | `0 0% 100%` |
| `--primary` | `270 55% 55%` |
| `--secondary` | `270 15% 92%` |
| `--muted` | `270 10% 94%` |
| `--accent` | `330 45% 60%` |
| `--border` | `270 15% 88%` |
| `--grid-bg-line` | `270 20% 70%` |

### Sidebar Tokens (Dark)
| Token | HSL Value |
|---|---|
| `--sidebar-background` | `280 40% 13%` |
| `--sidebar-foreground` | `270 20% 80%` |
| `--sidebar-primary` | `270 60% 65%` |
| `--sidebar-accent` | `280 30% 20%` |
| `--sidebar-border` | `280 30% 22%` |

---

## 3. TYPOGRAPHY

| Usage | Font | Weights |
|---|---|---|
| Headings (`font-heading`) | **Poppins** | 400, 500, 600, 700, 800 |
| Body (`font-body`) | **Inter** | 300, 400, 500, 600 |

**Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
```

---

## 4. LAYOUT ARCHITECTURE

### 4.1 ExcelWorkbook Shell (`ExcelWorkbook.tsx`)

The entire app is wrapped in a single full-screen Excel workbook layout:

```
┌──────────────────────────────────────────────┐
│ [📊] KomalHarshita_Portfolio.xlsx    [☀️] [≡] │  ← Title bar (sticky top)
├──────────────────────────────────────────────┤
│ fx │ =VLOOKUP("{activeTab}",portfolio,2,F)   │  ← Formula bar
├──────────────────────────────────────────────┤
│   │ A  │ B  │ C  │ D  │ E  │ F  │ G  │     │  ← Column headers
├───┼────────────────────────────────────┤     │
│ 1 │                                    │     │
│ 2 │      [TAB CONTENT AREA]           │     │  ← Scrollable content
│ 3 │                                    │     │
│...│                                    │     │
│20 │                                    │     │
├───┴────────────────────────────────────┤     │
│ ◀▶│About Me│Skills│Projects│Viz│Achiev│Contact│  ← Sheet tabs (sticky bottom)
└──────────────────────────────────────────────┘
```

**Title Bar:** Height 44px, sticky top, `bg-card/80 backdrop-blur-md`, contains:
- BarChart3 icon + "KomalHarshita_Portfolio.xlsx" title
- Fake menu items: File, Home, Insert, Data, View (hidden on mobile)
- ThemeToggle button
- Mobile hamburger menu

**Formula Bar:** Height 32px, shows `=VLOOKUP("{activeTab}",portfolio_data,2,FALSE)`

**Column Headers:** A through G, each `flex-1`, `bg-secondary/20`, 10px font

**Row Numbers:** 1-20, width 32px (md: 40px), `bg-secondary/10`, sticky left

**Sheet Tabs:** Sticky bottom, 6 tabs with active state showing `border-t-2 border-t-primary`

### 4.2 Tab System

6 tabs managed via React `useState`:

| Tab ID | Label | Component |
|---|---|---|
| `about` | About Me | `AboutMeTab` |
| `skills` | My Skills | `MySkillsTab` |
| `projects` | Projects | `ProjectsTab` |
| `visualizations` | Visualizations | `VisualizationsTab` |
| `achievements` | Achievements | `AchievementsTab` |
| `contact` | Contact | `ContactTab` |

Tab transitions use Framer Motion `AnimatePresence` with fade + slide.

---

## 5. COMPONENT SPECIFICATIONS

### 5.1 AboutMeTab

**Layout:** `max-w-3xl`, vertical stack with `space-y-6`

**Profile Card** (`stat-card` class):
- Circular avatar (112px, `ring-4 ring-primary/20`, clickable to toggle hobbies)
- "Export Resume" button below avatar
- Name: "Komal Harshita" (2xl, bold)
- Role: "ESG Analyst Intern · Data Analytics & Business Intelligence"
- Tags: rounded pills with `bg-primary/10 text-primary`
- Bio paragraphs

**Hobbies Panel** (animated expand/collapse):
- 7 hobbies with icons: Poetry, Writing, Guitar, Crocheting, Reading, Journaling, Creative Coding
- 5 soft skills as smaller pills

**Education Section:**
- GraduationCap icon header
- 4 education entries with institution, degree, dates, achievements

### 5.2 MySkillsTab

**Layout:** `max-w-5xl`, 2-column grid on lg

**SkillChart** (`stat-card`):
- 6 technical skills with animated progress bars (gradient-accent fill)
- Animated percentage counters
- Skill Radar: circular bubbles sized by proficiency level
- Skills: Python (70%), SQL (80%), Data Visualization (75%), Data Analytics (72%), EDA (68%), Business Analytics (55%)

**ToolsDashboard** (`stat-card`):
- 4x2 grid of tool cards with progress bars
- Tools: Excel (85%), Power BI (60%), GitHub (94%), Notion (97%), Google Sheets (65%), VS Code (95%), Tableau (45%), Canva (90%)
- Hover: `y: -4, scale: 1.02` spring animation

**GitHubAnalytics:**
- Live data from GitHub API (`komalharshita` user)
- 4 metric cards: Repositories, Recent Commits, Languages, Day Streak
- Bar chart: Most Used Languages (Recharts)
- Line chart: Recent Contributions (Recharts)
- Table: Recent Repositories (top 6)

### 5.3 ProjectsTab

**ProjectsTable:**
- Search input + tool filter dropdown + A-Z/Z-A sort toggle
- Spreadsheet-style table with columns: Project Name, Tool, Dataset Type, Insight, GitHub
- Expandable rows with description, key insight, and tech tags
- 7 projects total

**SQLPlayground** (below projects table):
- See Section 6 for full specification

### 5.4 VisualizationsTab

**Dashboard Showcase:**
- 2x2 grid of dashboard screenshots with hover zoom effect
- 4 dashboards: EDA, Sales & Profit, IMDB Movies, Sales Analytics

**VisualizationGrid** (6 Recharts charts):
- "Business Dashboards": Bar chart (Projects by Tech) + Donut chart (Tool Usage)
- "EDA Experiments": Line chart (Skill Growth) + Horizontal bar (Data Quality)
- "Practice Visualizations": Line chart (Practice Activity) + Scatter (Skill vs Complexity)

### 5.5 AchievementsTab

**Metric Cards** (3-column grid):
- Programs Completed: 10
- Certifications Earned: 14
- Communities Contributed To: 5

**CertificationTable:**
- Expandable spreadsheet table with 14 certifications
- Columns: Certification, Platform, Status, Year
- Status badges: "Completed" (primary) or "In Progress" (accent)
- Expanded view shows description, skills, credential ID, expiry

### 5.6 ContactTab

**Opportunity Card:** Gradient background (`from-primary/5 to-accent/5`)

**Contact Form:**
- Name, Email, Message inputs
- Submit opens `mailto:` link
- Styled with `bg-secondary/20` inputs, `focus:ring-primary/30`

**Social Links** (2x2 grid):
- LinkedIn, GitHub, Instagram, Email
- Each as `stat-card` with icon + label + value

---

## 6. SQL PLAYGROUND SPECIFICATION

### Purpose
An interactive in-browser SQL console where visitors can query portfolio data as if it were a database called `komal_portfolio_db`.

### Technology
- **sql.js** (v1.14.1) — SQLite compiled to WASM
- WASM file: `/sql-wasm.wasm` (served from public/)

### Database Schema

```sql
CREATE TABLE komal (
  name TEXT, role TEXT, university TEXT, cgpa REAL, focus_area TEXT
);

CREATE TABLE hobbies (hobby TEXT);

CREATE TABLE skills (skill TEXT, category TEXT, level INTEGER);

CREATE TABLE projects (project_name TEXT, tool TEXT, dataset TEXT, insight TEXT);

CREATE TABLE achievements (certification TEXT, platform TEXT, year INTEGER, status TEXT);
```

### Pre-loaded Data
- `komal`: 1 row (Komal Harshita's profile)
- `hobbies`: 6 rows
- `skills`: 6 rows
- `projects`: 7 rows
- `achievements`: 12 rows

### Easter Egg Queries
| Query | Response |
|---|---|
| `SELECT future_role FROM komal` | "Data Analyst — turning raw numbers into real impact." |
| `SELECT passion FROM komal` | "Turning data into insights ✨" |
| `SELECT superpower FROM komal` | "Curiosity + SQL + a cup of coffee ☕" |
| `SELECT motto FROM komal` | "Query first, ask questions later." |
| `SELECT fun_fact FROM komal` | "I crochet while my datasets load 🧶" |

### UI Components
1. **Schema Reference Panel**: 5-column grid showing all tables and their columns
2. **Suggested Queries**: 6 clickable query buttons in 2-column grid
3. **SQL Editor**: Terminal-styled textarea with `ChevronRight` prompt, Ctrl+Enter to run
4. **Run Query Button**: `gradient-accent` styled, with loading spinner
5. **Results Table**: Spreadsheet-themed with alternating row colors and row-by-row animation
6. **Error Display**: Red-tinted panel with "❌ SQL Error — {message}"
7. **Easter Egg Banner**: Accent-colored "Easter egg unlocked!" notification

---

## 7. CSS UTILITY CLASSES

### Custom Components (defined in `@layer components`)

```css
.excel-cell         → border, px-4, py-3, hover:bg-secondary/60
.excel-cell-header  → bg-secondary/80, uppercase, tracking-wider
.excel-cell-active  → ring-2 ring-primary/40, bg-primary/5
.sheet-tab          → px-4, py-2, border-t-2 transparent, hover effects
.sheet-tab-active   → bg-card, border-t-primary, text-primary
.stat-card          → rounded-xl, border, bg-card/90, p-6, shadow-soft, hover:shadow-glow, hover:-translate-y-1, backdrop-blur
.glass-card         → rounded-xl, border-border/50, gradient background, backdrop-blur-16
```

### Custom Utilities

```css
.gradient-hero    → linear-gradient(135deg, lavender/0.1, pastel-pink/0.08, transparent)
.gradient-accent  → linear-gradient(135deg, primary, accent)
.gradient-subtle  → linear-gradient(135deg, primary/0.08, accent/0.06)
```

### Custom Shadows

```css
shadow-soft  → 0 2px 20px -4px primary/0.1
shadow-glow  → 0 8px 30px -6px primary/0.2
```

---

## 8. BACKGROUND PATTERN

The body has a **grid pattern** created with CSS gradients:

```css
body {
  background-color: hsl(var(--background));
  background-image:
    linear-gradient(hsl(var(--grid-bg-line) / 0.07) 1px, transparent 1px),
    linear-gradient(90deg, hsl(var(--grid-bg-line) / 0.07) 1px, transparent 1px);
  background-size: 40px 40px;  /* 28px on mobile */
}
```

---

## 9. ANIMATIONS

### Framer Motion Patterns Used

| Pattern | Config |
|---|---|
| Page/tab transitions | `opacity: 0→1, y: 8→0` (0.25s) |
| Card entrances | `opacity: 0→1, y: 12→0` with staggered delays |
| Skill bars | `width: 0→{level}%` (0.7s, easeOut) |
| Hover lift | `y: -4, scale: 1.02` (spring, stiffness 300) |
| Avatar click | `scale: 1.05` hover, `scale: 0.95` tap |
| Table row expand | `height: 0→auto, opacity: 0→1` (0.2s) |
| Result rows | `opacity: 0→1, x: -8→0` with 0.03s stagger |
| Bubble radar | `scale: 0→1` with random delay |

### CSS Animations

```css
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 0.3; }
}
/* Used as: animate-float (6s ease-in-out infinite) */
```

### Animated Counters
- `IntersectionObserver` triggers counting animation when visible
- Step interval: 30ms, duration ~1500ms

---

## 10. RESPONSIVE BREAKPOINTS

| Breakpoint | Behavior |
|---|---|
| Mobile (<640px) | Single column layouts, hamburger menu, hidden column headers in tables, smaller grid pattern (28px) |
| sm (≥640px) | 2-column grids, visible table columns, sheet tabs horizontal scroll |
| md (≥768px) | Wider row numbers (40px), larger padding |
| lg (≥1024px) | 2-column skill charts, 3-5 column schema grid, desktop nav |
| xl (≥1280px) | 5-column schema grid |
| 2xl (≥1400px) | Max container width 1400px |

---

## 11. THEME TOGGLE

- Stored in `localStorage` key: `portfolio-theme`
- Default: `dark`
- Toggle adds/removes `.light` class on `<html>`
- Sun icon (dark mode) / Moon icon (light mode)
- Framer Motion scale animation on hover/tap

---

## 12. DEPENDENCIES

### Core
- `react` ^18.3.1
- `react-dom` ^18.3.1
- `react-router-dom` ^6.30.1
- `typescript` ^5.8.3
- `vite` ^5.4.19

### Styling
- `tailwindcss` ^3.4.17
- `tailwindcss-animate` ^1.0.7
- `class-variance-authority` ^0.7.1
- `clsx` ^2.1.1
- `tailwind-merge` ^2.6.0

### UI Components
- `@radix-ui/*` (full shadcn/ui component set)
- `lucide-react` ^0.462.0 (icons)
- `cmdk` ^1.1.1

### Animation
- `framer-motion` ^12.35.1

### Charts
- `recharts` ^2.15.4

### SQL Engine
- `sql.js` ^1.14.1

### Other
- `@tanstack/react-query` ^5.83.0
- `sonner` ^1.7.4
- `date-fns` ^3.6.0
- `zod` ^3.25.76
- `react-hook-form` ^7.61.1

---

## 13. FILE STRUCTURE

```
src/
├── App.tsx                          # Root router (single route)
├── main.tsx                         # Entry point
├── index.css                        # Design tokens + custom classes
├── assets/
│   ├── profile-photo.png            # Avatar for AboutMe tab
│   ├── p_laptop.png                 # Avatar for ProfileCard
│   ├── dashboard1-4.png             # Dashboard screenshots
├── components/
│   ├── ExcelWorkbook.tsx            # Main shell (title bar, formula bar, tabs, content)
│   ├── ThemeToggle.tsx              # Dark/light toggle
│   ├── ProfileCard.tsx              # Standalone profile (used in other pages)
│   ├── StatCards.tsx                 # Animated stat counters
│   ├── SkillChart.tsx               # Skill bars + radar bubbles
│   ├── ToolCard.tsx                 # Tool proficiency grid
│   ├── GitHubAnalytics.tsx          # Live GitHub data + charts
│   ├── ProjectsTable.tsx            # Searchable/sortable projects table
│   ├── SQLPlayground.tsx            # Interactive SQL console
│   ├── CertificationTable.tsx       # Expandable certifications table
│   ├── VisualizationGrid.tsx        # 6 Recharts visualizations
│   ├── ChartCard.tsx                # Reusable chart wrapper
│   ├── MetricCard.tsx               # Animated metric display
│   ├── tabs/
│   │   ├── AboutMeTab.tsx
│   │   ├── MySkillsTab.tsx
│   │   ├── ProjectsTab.tsx
│   │   ├── VisualizationsTab.tsx
│   │   ├── AchievementsTab.tsx
│   │   └── ContactTab.tsx
│   └── ui/                          # shadcn/ui components
├── pages/
│   ├── Index.tsx                    # Renders ExcelWorkbook
│   └── NotFound.tsx
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
└── lib/
    └── utils.ts                     # cn() utility
```

---

## 14. PERSONAL DATA REFERENCE

| Field | Value |
|---|---|
| Name | Komal Harshita |
| Role | ESG Analyst Intern · Data Analytics & Business Intelligence |
| University | NMIET Pune (Savitribai Phule Pune University) |
| Degree | B.E. Computer Science |
| CGPA | 9.05 |
| Email | komal.sony234@gmail.com |
| LinkedIn | linkedin.com/in/komal-harshita-08aba2305 |
| GitHub | github.com/komalharshita |
| Instagram | @kokokomali |
| Tags | McKinsey Forward Learner, Infosys Springboard Pragati Cohort 7, ESG Analyst @ Excelerate |

---

## 15. HOW TO REPRODUCE IN ANOTHER TOOL (e.g., v0, Bolt, etc.)

### Step-by-step prompting strategy:

**Prompt 1 — Shell Layout:**
> "Build a single-page React portfolio that looks like an Excel workbook. Include: a title bar with a file name, a formula bar, column headers A-G, row numbers 1-20, and sheet tabs at the bottom for 6 sections. Use Tailwind CSS with a dark purple theme (background hsl(280,50%,11%), primary hsl(270,60%,65%), accent hsl(330,50%,72%)). Fonts: Poppins for headings, Inter for body."

**Prompt 2 — About Me Tab:**
> "Create the About Me tab with: a circular avatar (clickable to reveal hobbies), name, role, bio, education timeline. Use glassmorphism cards with backdrop blur."

**Prompt 3 — Skills Tab:**
> "Add animated skill progress bars for Python, SQL, Data Viz, etc. Include a tools grid with proficiency percentages and a GitHub activity dashboard with live API data and Recharts charts."

**Prompt 4 — Projects Tab:**
> "Build a searchable/filterable projects table with expandable rows showing descriptions and tech tags."

**Prompt 5 — SQL Playground:**
> "Add an in-browser SQL playground using sql.js where visitors can query portfolio data. Include 5 tables (komal, hobbies, skills, projects, achievements), suggested queries, and easter egg responses."

**Prompt 6 — Remaining Tabs:**
> "Add Visualizations tab with 6 Recharts charts, Achievements tab with certification table, and Contact tab with form + social links."

---

*Generated from the live codebase at komalharshita.lovable.app*  
*© 2026 Komal Harshita · Built with 💜*
