'use client';

import React, { useState } from 'react';
import { Sun, Moon, Menu, X, BarChart3 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import AboutMeTab from './tabs/AboutMeTab';
import MySkillsTab from './tabs/MySkillsTab';
import ProjectsTab from './tabs/ProjectsTab';
import VisualizationsTab from './tabs/VisualizationsTab';
import AchievementsTab from './tabs/AchievementsTab';
import ContactTab from './tabs/ContactTab';

type TabId = 'about' | 'skills' | 'projects' | 'visualizations' | 'achievements' | 'contact';

const TABS: Array<{ id: TabId; label: string; component: React.ComponentType }> = [
  { id: 'about', label: 'About Me', component: AboutMeTab },
  { id: 'skills', label: 'My Skills', component: MySkillsTab },
  { id: 'projects', label: 'Projects', component: ProjectsTab },
  { id: 'visualizations', label: 'Visualizations', component: VisualizationsTab },
  { id: 'achievements', label: 'Achievements', component: AchievementsTab },
  { id: 'contact', label: 'Contact', component: ContactTab },
];

export default function ExcelWorkbook() {
  const [activeTab, setActiveTab] = useState<TabId>('about');
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  const currentTab = TABS.find(t => t.id === activeTab);
  const CurrentComponent = currentTab?.component;

  return (
    <div className="h-screen flex flex-col" style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
      {/* TITLE BAR */}
      <div className="h-11 backdrop-blur-md border-b flex items-center justify-between px-4 sticky top-0 z-40" style={{ backgroundColor: 'hsl(var(--card) / 0.8)', borderColor: 'hsl(var(--border))' }}>
        <div className="flex items-center gap-3">
          <BarChart3 className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
          <span className="font-semibold text-sm">KomalHarshita_Portfolio.xlsx</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-sm">
          {['File', 'Home', 'Insert', 'Data', 'View'].map((item) => (
            <button key={item} className="px-2 py-1 rounded transition-colors" style={{ color: 'hsl(var(--foreground))' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.5)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="p-1 rounded transition-colors" aria-label="Toggle theme" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.5)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-1 rounded transition-colors" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.5)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b rounded-bl" style={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
          <div className="flex flex-col p-2 gap-1 text-sm">
            {['File', 'Home', 'Insert', 'Data', 'View'].map((item) => (
              <button key={item} className="px-3 py-2 rounded text-left transition-colors" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.5)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FORMULA BAR */}
      <div className="h-8 border-b flex items-center px-4 sticky top-11 z-30 text-xs font-mono" style={{ backgroundColor: 'hsl(var(--secondary) / 0.2)', borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}>
        <span className="font-semibold mr-2" style={{ color: 'hsl(var(--primary))' }}>fx</span>
        <span>=VLOOKUP(&quot;{activeTab}&quot;,portfolio_data,2,FALSE)</span>
      </div>

      {/* COLUMN HEADERS */}
      <div className="h-6 flex-shrink-0 hidden sm:grid grid-cols-7" style={{ backgroundColor: 'hsl(var(--secondary) / 0.1)' }}>
        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((col) => (
          <div key={col} className="border-r p-1 text-xs font-semibold text-center" style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}>
            {col}
          </div>
        ))}
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex overflow-hidden">
        {/* ROW NUMBERS */}
        <div className="hidden sm:flex flex-col border-r w-8 sticky left-0 z-10" style={{ backgroundColor: 'hsl(var(--secondary) / 0.1)', borderColor: 'hsl(var(--border))' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="h-6 flex items-center justify-center text-xs border-b" style={{ color: 'hsl(var(--muted-foreground))', borderColor: 'hsl(var(--border))' }}>
              {i + 1}
            </div>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-auto scrollbar-thin">
          <AnimatePresence mode="wait">
            {CurrentComponent && (
              <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="p-6 md:p-8 min-h-full">
                <CurrentComponent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* SHEET TABS */}
      <div className="h-10 border-t flex items-end overflow-x-auto gap-1 px-2 sticky bottom-0" style={{ backgroundColor: 'hsl(var(--secondary) / 0.1)', borderColor: 'hsl(var(--border))' }}>
        {TABS.map((tab) => (
          <button key={tab.id} onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }} className="px-4 py-2 border-t-2 transition-all text-sm whitespace-nowrap rounded-t" style={{ borderTopColor: activeTab === tab.id ? 'hsl(var(--primary))' : 'transparent', backgroundColor: activeTab === tab.id ? 'hsl(var(--card))' : 'transparent', color: activeTab === tab.id ? 'hsl(var(--primary))' : 'hsl(var(--foreground))' }}>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
