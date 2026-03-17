'use client';

import React, { useState } from 'react';
import { BarChart3, Sun, Moon, Menu, X } from 'lucide-react';
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
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
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
        <div className="flex items-center gap-2 flex-1">
          <BarChart3 className="w-5 h-5" style={{ color: `hsl(var(--primary))` }} />
          <span className="font-semibold text-sm">KomalHarshita_Portfolio.xlsx</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop Menu - hidden on mobile */}
          <div className="hidden md:flex items-center gap-4 text-xs">
            <button className="hover:opacity-70">File</button>
            <button className="hover:opacity-70">Home</button>
            <button className="hover:opacity-70">Insert</button>
            <button className="hover:opacity-70">Data</button>
            <button className="hover:opacity-70">View</button>
          </div>

          <button
            onClick={toggleTheme}
            className="p-1 hover:bg-secondary/50 rounded transition-colors"
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 hover:bg-secondary/50 rounded"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* FORMULA BAR */}
      <div className="h-8 bg-secondary/20 border-b flex items-center px-4 sticky top-11 z-30 text-xs"
        style={{ borderColor: `hsl(var(--border))` }}>
        <span className="text-muted-foreground">fx</span>
        <span className="ml-4 font-mono text-muted-foreground">
          =VLOOKUP("{activeTab}",portfolio_data,2,FALSE)
        </span>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-1 overflow-hidden">
        {/* COLUMN HEADERS (hidden on mobile) */}
        <div className="hidden sm:flex border-r flex-col w-8" style={{ borderColor: `hsl(var(--border))` }}>
          <div className="h-6 bg-secondary/10 flex-shrink-0"></div>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-auto">
          {/* Column headers A-G */}
          <div className="hidden sm:grid grid-cols-7 sticky top-0 z-20 bg-secondary/20"
            style={{ borderColor: `hsl(var(--border))` }}>
            {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((col) => (
              <div
                key={col}
                className="flex items-center justify-center h-6 text-xs font-semibold border-r border-b"
                style={{ borderColor: `hsl(var(--border))` }}
              >
                {col}
              </div>
            ))}
          </div>

          {/* Row numbers and content */}
          <div className="flex">
            {/* ROW NUMBERS (sticky left, hidden on mobile) */}
            <div className="hidden sm:flex flex-col bg-secondary/10 border-r w-8 sticky left-0 z-10"
              style={{ borderColor: `hsl(var(--border))` }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i + 1}
                  className="h-6 flex items-center justify-center text-xs border-b"
                  style={{ borderColor: `hsl(var(--border))` }}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            {/* TAB CONTENT - scrollable area */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto">
              {renderTabContent()}
            </div>
          </div>
        </div>
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
            className={`sheet-tab text-sm whitespace-nowrap ${
              activeTab === tab.id ? 'sheet-tab-active' : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-11 right-0 rounded-bl" style={{
          backgroundColor: `hsl(var(--card))`,
          borderColor: `hsl(var(--border))`,
        }} className="border-l border-b">
          <div className="flex flex-col p-2 gap-1 text-sm">
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
