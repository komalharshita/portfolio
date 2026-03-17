'use client';

import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import AboutMeTab from './tabs/AboutMeTab';
import MySkillsTab from './tabs/MySkillsTab';
import ProjectsTab from './tabs/ProjectsTab';
import VisualizationsTab from './tabs/VisualizationsTab';
import AchievementsTab from './tabs/AchievementsTab';
import ContactTab from './tabs/ContactTab';

type TabId = 'about' | 'skills' | 'projects' | 'visualizations' | 'achievements' | 'contact';

const TABS: Array<{ id: TabId; label: string }> = [
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'My Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'visualizations', label: 'Visualizations' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function ExcelWorkbook() {
  const [activeTab, setActiveTab] = useState<TabId>('about');
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutMeTab />;
      case 'skills':
        return <MySkillsTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'visualizations':
        return <VisualizationsTab />;
      case 'achievements':
        return <AchievementsTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col" style={{
      backgroundColor: `hsl(var(--background))`,
      color: `hsl(var(--foreground))`,
    }}>
      {/* TITLE BAR */}
      <div className="h-11 backdrop-blur-md border-b flex items-center justify-between px-4 sticky top-0 z-40" style={{
        backgroundColor: `hsl(var(--card) / 0.8)`,
        borderColor: `hsl(var(--border))`,
      }}>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">Komal Harshita - Data Analyst Portfolio.xlsx</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-1 hover:bg-secondary/50 rounded transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 hover:bg-secondary/50 rounded"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* FORMULA BAR */}
      <div className="h-8 bg-secondary/20 border-b flex items-center px-4 sticky top-11 z-30 text-xs"
        style={{ borderColor: `hsl(var(--border))` }}>
        <span className="text-muted-foreground">fx</span>
        <input
          type="text"
          placeholder="Active: About Me"
          readOnly
          className="ml-2 bg-transparent outline-none flex-1"
        />
      </div>

      {/* COLUMN HEADERS */}
      <div className="h-6 bg-secondary/10 flex-shrink-0"></div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 overflow-auto">
        <div className="hidden sm:grid grid-cols-7 sticky top-0 z-20 bg-secondary/20"
          style={{ borderColor: `hsl(var(--border))` }}>
          {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((col) => (
            <div key={col} className="border-r p-2 text-xs font-semibold text-center"
              style={{ borderColor: `hsl(var(--border))` }}>
              {col}
            </div>
          ))}
        </div>

        {/* CONTENT CONTAINER */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>

      {/* ROW NUMBERS (LEFT SIDEBAR) */}
      <div className="hidden sm:flex flex-col bg-secondary/10 border-r w-8 sticky left-0 z-10"
        style={{ borderColor: `hsl(var(--border))` }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="h-6 flex items-center justify-center text-xs text-muted-foreground border-b"
            style={{ borderColor: `hsl(var(--border))` }}>
            {i + 1}
          </div>
        ))}
      </div>

      {/* SHEET TABS (sticky bottom) */}
      <div className="h-10 bg-secondary/10 border-t flex items-end overflow-x-auto gap-1 px-2 sticky bottom-0"
        style={{ borderColor: `hsl(var(--border))` }}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setMobileMenuOpen(false);
            }}
            className={`sheet-tab text-sm whitespace-nowrap px-4 py-2 border-t-2 transition-all cursor-pointer rounded-t`}
            style={{
              borderTopColor: activeTab === tab.id ? `hsl(var(--primary))` : 'transparent',
              backgroundColor: activeTab === tab.id ? `hsl(var(--card))` : 'transparent',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-11 right-0 rounded-bl border-l border-b z-50" style={{
          backgroundColor: `hsl(var(--card))`,
          borderColor: `hsl(var(--border))`,
        }}>
          <div className="flex flex-col p-2 gap-1 text-sm min-w-[150px]">
            <button className="px-3 py-2 hover:bg-secondary/50 rounded text-left">File</button>
            <button className="px-3 py-2 hover:bg-secondary/50 rounded text-left">Home</button>
            <button className="px-3 py-2 hover:bg-secondary/50 rounded text-left">Insert</button>
            <button className="px-3 py-2 hover:bg-secondary/50 rounded text-left">Data</button>
            <button className="px-3 py-2 hover:bg-secondary/50 rounded text-left">View</button>
          </div>
        </div>
      )}
    </div>
  );
}
