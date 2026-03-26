import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BarChart3 } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import AboutMeTab from "@/components/tabs/AboutMeTab";
import MySkillsTab from "@/components/tabs/MySkillsTab";
import ProjectsTab from "@/components/tabs/ProjectsTab";
import VisualizationsTab from "@/components/tabs/VisualizationsTab";
import AchievementsTab from "@/components/tabs/AchievementsTab";
import ContactTab from "@/components/tabs/ContactTab";

const tabs = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "My Skills" },
  { id: "projects", label: "Projects" },
  { id: "visualizations", label: "Visualizations" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const colHeaders = ["A", "B", "C", "D", "E", "F", "G"];
const rowCount = 100;

const tabContent: Record<TabId, React.ReactNode> = {
  about: <AboutMeTab />,
  skills: <MySkillsTab />,
  projects: <ProjectsTab />,
  visualizations: <VisualizationsTab />,
  achievements: <AchievementsTab />,
  contact: <ContactTab />,
};

const ExcelWorkbook = () => {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const [mobileMenu, setMobileMenu] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to top when tab changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/60"
      >
        Skip to main content
      </a>

      {/* Title bar */}
      <header className="shrink-0 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50" role="banner">
        <div className="flex items-center h-11 px-3 gap-3">
          <BarChart3 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
          <h1 className="font-heading text-sm font-bold text-foreground truncate">
            KomalHarshita_Portfolio.xlsx
          </h1>
          <div className="ml-auto flex items-center gap-1">
            <nav className="hidden sm:flex items-center gap-0.5 text-[10px] text-muted-foreground" aria-label="Menu navigation">
              <span className="px-2 py-0.5 rounded hover:bg-secondary/40 cursor-default" role="menuitem">File</span>
              <span className="px-2 py-0.5 rounded hover:bg-secondary/40 cursor-default" role="menuitem">Home</span>
              <span className="px-2 py-0.5 rounded hover:bg-secondary/40 cursor-default" role="menuitem">Insert</span>
              <span className="px-2 py-0.5 rounded hover:bg-secondary/40 cursor-default" role="menuitem">Data</span>
              <span className="px-2 py-0.5 rounded hover:bg-secondary/40 cursor-default" role="menuitem">View</span>
            </nav>
            <ThemeToggle />
            <button
              className="sm:hidden p-1.5 focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-lg transition-all"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label={mobileMenu ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenu}
            >
              {mobileMenu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Formula bar */}
        <div className="flex items-center gap-2 h-8 px-3 border-t border-border bg-card/50">
          <span className="text-[10px] font-heading font-semibold text-muted-foreground w-8 text-center border-r border-border pr-2">
            fx
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            =VLOOKUP("{activeTab}",portfolio_data,2,FALSE)
          </span>
        </div>

        {/* Mobile nav */}
        {mobileMenu && (
          <nav className="sm:hidden border-t border-border bg-card p-2 space-y-1" aria-label="Mobile navigation">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => { setActiveTab(t.id); setMobileMenu(false); }}
                className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                  activeTab === t.id ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-secondary/40"
                }`}
                role="menuitem"
                aria-current={activeTab === t.id ? "page" : undefined}
              >
                {t.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main area with col headers + row numbers */}
      <main className="flex-1 flex flex-col overflow-hidden" id="main-content" role="main">
        {/* Column headers */}
        <div className="shrink-0 flex border-b border-border">
          {/* Corner cell */}
          <div className="w-8 md:w-10 shrink-0 border-r border-border bg-secondary/30" />
          {/* Column labels */}
          <div className="flex-1 flex">
            {colHeaders.map((c) => (
              <div
                key={c}
                className="flex-1 text-center text-[10px] font-heading font-semibold text-muted-foreground py-1 border-r border-border bg-secondary/20 last:border-r-0"
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Body with row numbers */}
        <div className="flex-1 flex overflow-auto relative">
          {/* Row numbers */}
          <div className="w-8 md:w-10 shrink-0 border-r border-border bg-secondary/10 sticky left-0 z-10">
            {Array.from({ length: rowCount }, (_, i) => (
              <div
                key={i}
                className="h-10 flex items-center justify-center text-[10px] font-heading text-muted-foreground border-b border-border"
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 min-w-0 overflow-y-auto" ref={contentRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-4 md:p-8"
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Sheet tabs at bottom */}
      <div className="shrink-0 border-t border-border bg-card/60 backdrop-blur-sm sticky bottom-0 z-40">
        <nav className="flex items-center overflow-x-auto" aria-label="Page navigation">
          <div className="w-8 md:w-10 shrink-0 flex items-center justify-center border-r border-border text-muted-foreground text-xs" aria-hidden="true">
            ◀▶
          </div>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2.5 text-xs font-heading font-medium whitespace-nowrap border-r border-border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-y-[-2px] ${
                activeTab === t.id
                  ? "bg-card text-primary border-t-2 border-t-primary -mt-[2px]"
                  : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground border-t-2 border-t-transparent"
              }`}
              role="tab"
              aria-selected={activeTab === t.id}
              aria-label={t.label}
            >
              {t.label}
            </button>
          ))}
          <div className="flex-1 border-b border-transparent" />
        </nav>
      </div>
    </div>
  );
};

export default ExcelWorkbook;
