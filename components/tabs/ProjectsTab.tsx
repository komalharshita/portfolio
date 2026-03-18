'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Github } from 'lucide-react';
import SQLPlayground from '../SQLPlayground';

const PROJECTS_DATA = [
  {
    id: 1,
    name: 'Sales Analytics Dashboard',
    tool: 'Power BI',
    dataset: 'E-commerce Sales Data',
    insight: 'Identified revenue trends and customer segments',
    github: 'github.com/komalharshita/sales-dashboard',
    description: 'Interactive Power BI dashboard analyzing e-commerce sales patterns, customer behavior, and revenue trends.',
    tags: ['Power BI', 'Dashboard', 'Analytics'],
  },
  {
    id: 2,
    name: 'EDA: Movie Dataset Analysis',
    tool: 'Python',
    dataset: 'IMDB Movie Data',
    insight: 'Discovered genre trends and rating patterns',
    github: 'github.com/komalharshita/movie-eda',
    description: 'Comprehensive exploratory data analysis using Python and Pandas on IMDB dataset with visualizations.',
    tags: ['Python', 'Data Analysis', 'Pandas'],
  },
  {
    id: 3,
    name: 'SQL Portfolio Queries',
    tool: 'SQL',
    dataset: 'PostgreSQL Database',
    insight: 'Complex joins and aggregations for business metrics',
    github: 'github.com/komalharshita/sql-queries',
    description: 'Collection of advanced SQL queries demonstrating complex joins, window functions, and optimization techniques.',
    tags: ['SQL', 'Database', 'PostgreSQL'],
  },
  {
    id: 4,
    name: 'Profit Analysis Dashboard',
    tool: 'Tableau',
    dataset: 'Business Performance Data',
    insight: 'Regional profit distribution and performance metrics',
    github: 'github.com/komalharshita/tableau-viz',
    description: 'Tableau visualization dashboard for business profit analysis and regional performance tracking.',
    tags: ['Tableau', 'Visualization', 'BI'],
  },
  {
    id: 5,
    name: 'Data Cleaning Pipeline',
    tool: 'Python',
    dataset: 'Messy CSV Data',
    insight: 'Handled missing values and outlier detection',
    github: 'github.com/komalharshita/data-cleaning',
    description: 'Robust data cleaning and preprocessing pipeline using NumPy and Pandas for data quality improvement.',
    tags: ['Python', 'Data Cleaning', 'NumPy'],
  },
  {
    id: 6,
    name: 'Excel Dashboard',
    tool: 'Excel',
    dataset: 'Financial Records',
    insight: 'PivotTables and charts for financial analysis',
    github: 'github.com/komalharshita/excel-dashboard',
    description: 'Advanced Excel dashboard with PivotTables, VLOOKUP functions, and conditional formatting.',
    tags: ['Excel', 'Dashboard', 'Finance'],
  },
  {
    id: 7,
    name: 'GitHub Analytics Tool',
    tool: 'Python + API',
    dataset: 'GitHub REST API',
    insight: 'Repository statistics and contribution trends',
    github: 'github.com/komalharshita/github-analytics',
    description: 'Python tool that fetches and analyzes GitHub repository statistics and contribution patterns.',
    tags: ['Python', 'API', 'Analytics'],
  },
];

export default function ProjectsTab() {
  const [search, setSearch] = useState('');
  const [toolFilter, setToolFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [expandedId, setExpandedId] = useState(null);
  const [showSQL, setShowSQL] = useState(false);

  const tools = [...new Set(PROJECTS_DATA.map((p) => p.tool))];

  let filtered = PROJECTS_DATA.filter((p) => {
    const matchesSearch =
      search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.dataset.toLowerCase().includes(search.toLowerCase());
    const matchesTool = toolFilter === '' || p.tool === toolFilter;
    return matchesSearch && matchesTool;
  });

  if (sortOrder === 'asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="max-w-5xl space-y-6">
      {/* Search & Filter Controls */}
      <div className="stat-card space-y-4">
        <div className="grid md:grid-cols-3 gap-3">
          {/* Search */}
          <div className="relative col-span-full md:col-span-2">
            <Search className="w-4 h-4 absolute left-3 top-3" style={{ color: 'hsl(var(--muted-foreground))' }} />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                borderColor: 'hsl(var(--border))',
                backgroundColor: 'hsl(var(--secondary) / 0.1)',
              }}
            />
          </div>

          {/* Tool Filter */}
          <div className="relative">
            <select
              value={toolFilter}
              onChange={(e) => setToolFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 appearance-none"
              style={{
                borderColor: 'hsl(var(--border))',
                backgroundColor: 'hsl(var(--secondary) / 0.1)',
              }}
            >
              <option value="">All Tools</option>
              {tools.map((tool) => (
                <option key={tool} value={tool}>
                  {tool}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sort Button */}
        <div className="flex justify-between items-center">
          <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
            {filtered.length} projects found
          </p>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="px-3 py-1 rounded-lg text-sm border transition-all"
            style={{ borderColor: 'hsl(var(--border))' }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.2)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Sort: {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          </button>
        </div>
      </div>

      {/* Projects Table */}
      <div className="stat-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '2px solid hsl(var(--border))' }}>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'hsl(var(--primary))' }}>
                  Project Name
                </th>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'hsl(var(--primary))' }}>
                  Tool
                </th>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'hsl(var(--primary))' }}>
                  Dataset
                </th>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'hsl(var(--primary))' }}>
                  Insight
                </th>
                <th className="text-center py-3 px-3 font-semibold" style={{ color: 'hsl(var(--primary))' }}>
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {filtered.map((project, idx) => (
                  <motion.tr
                    key={project.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    style={{ borderBottom: '1px solid hsl(var(--border))' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.1)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = 'transparent')
                    }
                  >
                    <td className="py-3 px-3">
                      <button
                        onClick={() =>
                          setExpandedId(expandedId === project.id ? null : project.id)
                        }
                        className="font-semibold flex items-center gap-2"
                        style={{ color: 'hsl(var(--primary))' }}
                      >
                        <ChevronDown
                          className="w-4 h-4 transition-transform"
                          style={{
                            transform:
                              expandedId === project.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        />
                        {project.name}
                      </button>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: 'hsl(var(--accent) / 0.1)',
                          color: 'hsl(var(--accent))',
                        }}
                      >
                        {project.tool}
                      </span>
                    </td>
                    <td className="py-3 px-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {project.dataset}
                    </td>
                    <td className="py-3 px-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {project.insight}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <a
                        href={`https://${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block p-1 rounded hover:bg-opacity-20 transition-all"
                        style={{ color: 'hsl(var(--primary))' }}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Expanded Row Details */}
        <AnimatePresence>
          {expandedId && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t p-4"
              style={{ borderColor: 'hsl(var(--border))', backgroundColor: 'hsl(var(--secondary) / 0.05)' }}
            >
              {PROJECTS_DATA.find((p) => p.id === expandedId) && (
                <div className="space-y-3">
                  <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {PROJECTS_DATA.find((p) => p.id === expandedId).description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {PROJECTS_DATA.find((p) => p.id === expandedId).tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded text-xs"
                        style={{
                          backgroundColor: 'hsl(var(--primary) / 0.1)',
                          color: 'hsl(var(--primary))',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SQL Playground Toggle */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowSQL(!showSQL)}
          className="px-6 py-2 rounded-lg font-medium transition-all"
          style={{
            backgroundColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          {showSQL ? 'Hide' : 'Show'} SQL Playground
        </button>
      </div>

      {/* SQL Playground */}
      <AnimatePresence>
        {showSQL && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SQLPlayground />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
