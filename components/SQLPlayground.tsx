'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Copy, RotateCcw } from 'lucide-react';

// Mock SQL engine - for demo purposes, we'll use simple string matching
const SCHEMA = {
  komal: ['name', 'role', 'university', 'cgpa', 'focus_area'],
  hobbies: ['hobby'],
  skills: ['skill', 'category', 'level'],
  projects: ['project_name', 'tool', 'dataset', 'insight'],
  achievements: ['certification', 'platform', 'year', 'status'],
};

const DATA = {
  komal: [
    { name: 'Komal Harshita', role: 'ESG Analyst Intern', university: 'NMIET Pune', cgpa: '9.05', focus_area: 'Data Analytics' },
  ],
  hobbies: [
    { hobby: 'Poetry' },
    { hobby: 'Writing' },
    { hobby: 'Guitar' },
    { hobby: 'Crocheting' },
    { hobby: 'Reading' },
    { hobby: 'Journaling' },
    { hobby: 'Creative Coding' },
  ],
  skills: [
    { skill: 'SQL', category: 'Database', level: 80 },
    { skill: 'Python', category: 'Programming', level: 70 },
    { skill: 'Power BI', category: 'Visualization', level: 60 },
    { skill: 'Excel', category: 'Tools', level: 85 },
  ],
  projects: [
    { project_name: 'Sales Dashboard', tool: 'Power BI', dataset: 'E-commerce', insight: 'Revenue trends' },
    { project_name: 'EDA Analysis', tool: 'Python', dataset: 'Movie Data', insight: 'Genre trends' },
  ],
  achievements: [
    { certification: 'Data Analytics', platform: 'Coursera', year: 2025, status: 'Completed' },
    { certification: 'Power BI', platform: 'Udemy', year: 2024, status: 'Completed' },
  ],
};

const SUGGESTED_QUERIES = [
  { label: 'Find Future Role', query: "SELECT future_role FROM komal" },
  { label: 'My Passion', query: "SELECT passion FROM komal" },
  { label: 'My Superpower', query: "SELECT superpower FROM komal" },
  { label: 'All Hobbies', query: 'SELECT hobby FROM hobbies' },
  { label: 'Top Skills', query: 'SELECT skill, level FROM skills WHERE level > 70' },
  { label: 'My Projects', query: 'SELECT project_name, tool FROM projects' },
];

// Easter egg responses
const EASTER_EGGS = {
  future_role: 'Data Analyst — turning raw numbers into real impact',
  passion: 'Turning data into insights ✨',
  superpower: 'Curiosity + SQL + a cup of coffee ☕',
};

function executeQuery(query) {
  const trimmed = query.trim().toUpperCase();

  // Easter eggs
  if (trimmed.includes('FUTURE_ROLE')) {
    return [{ future_role: EASTER_EGGS.future_role }];
  }
  if (trimmed.includes('PASSION')) {
    return [{ passion: EASTER_EGGS.passion }];
  }
  if (trimmed.includes('SUPERPOWER')) {
    return [{ superpower: EASTER_EGGS.superpower }];
  }

  // Parse simple SELECT queries
  if (trimmed.startsWith('SELECT')) {
    const fromMatch = trimmed.match(/FROM\s+(\w+)/);
    if (!fromMatch) return [];

    const table = fromMatch[1].toLowerCase();
    if (!DATA[table]) return [];

    const tableData = DATA[table];

    // Simple WHERE clause parsing
    if (trimmed.includes('WHERE')) {
      const whereMatch = trimmed.match(/WHERE\s+(\w+)\s*>\s*(\d+)/);
      if (whereMatch) {
        const [, column, value] = whereMatch;
        return tableData.filter((row) => (row[column.toLowerCase()] || 0) > Number(value));
      }
    }

    return tableData;
  }

  return [];
}

export default function SQLPlayground() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const textareaRef = useRef(null);

  const handleRun = () => {
    setError('');
    if (!query.trim()) {
      setError('Please enter a query');
      return;
    }
    try {
      const res = executeQuery(query);
      setResults(res);
    } catch (e) {
      setError('Query error: ' + e.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      handleRun();
    }
  };

  return (
    <div className="space-y-4">
      {/* Schema Reference */}
      <div className="glass-card p-4">
        <h4 className="font-semibold mb-3" style={{ color: 'hsl(var(--primary))' }}>
          Schema Reference
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {Object.entries(SCHEMA).map(([table, columns]) => (
            <div key={table} className="p-2 rounded" style={{ backgroundColor: 'hsl(var(--secondary) / 0.1)' }}>
              <p className="font-mono text-xs font-semibold mb-1" style={{ color: 'hsl(var(--primary))' }}>
                {table}
              </p>
              <ul className="text-xs space-y-0.5" style={{ color: 'hsl(var(--muted-foreground))' }}>
                {columns.map((col) => (
                  <li key={col} className="font-mono">
                    • {col}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Queries */}
      <div className="glass-card p-4">
        <p className="text-xs mb-2 font-semibold" style={{ color: 'hsl(var(--primary))' }}>
          Try these queries:
        </p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_QUERIES.map((q) => (
            <button
              key={q.label}
              onClick={() => setQuery(q.query)}
              className="px-2 py-1 rounded text-xs border transition-all"
              style={{
                borderColor: 'hsl(var(--primary))',
                backgroundColor: 'hsl(var(--primary) / 0.05)',
                color: 'hsl(var(--primary))',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = 'hsl(var(--primary) / 0.15)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'hsl(var(--primary) / 0.05)')
              }
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      {/* Query Editor */}
      <div className="stat-card">
        <div className="flex items-center justify-between mb-2">
          <p className="font-mono text-xs font-semibold" style={{ color: 'hsl(var(--primary))' }}>
            $ SQL Query Editor
          </p>
          <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Ctrl + Enter to run
          </p>
        </div>
        <textarea
          ref={textareaRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="SELECT * FROM komal"
          className="w-full p-3 rounded-lg border font-mono text-sm resize-none focus:outline-none focus:ring-2"
          rows={4}
          style={{
            borderColor: 'hsl(var(--border))',
            backgroundColor: 'hsl(var(--secondary) / 0.1)',
            color: 'hsl(var(--foreground))',
          }}
        />
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleRun}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all"
            style={{
              backgroundColor: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))',
            }}
          >
            <Play className="w-4 h-4" />
            Run Query
          </button>
          <button
            onClick={() => setQuery('')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all"
            style={{ borderColor: 'hsl(var(--border))' }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.2)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <RotateCcw className="w-4 h-4" />
            Clear
          </button>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-lg text-sm"
          style={{
            backgroundColor: 'hsl(var(--destructive) / 0.1)',
            color: 'hsl(var(--destructive))',
            border: '1px solid hsl(var(--destructive) / 0.3)',
          }}
        >
          {error}
        </motion.div>
      )}

      {/* Results Table */}
      {results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="stat-card"
        >
          <h4 className="font-semibold mb-3" style={{ color: 'hsl(var(--primary))' }}>
            Results ({results.length} rows)
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid hsl(var(--border))' }}>
                  {results[0] &&
                    Object.keys(results[0]).map((key) => (
                      <th
                        key={key}
                        className="text-left py-2 px-2 font-semibold"
                        style={{ color: 'hsl(var(--primary))' }}
                      >
                        {key}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {results.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    style={{ borderBottom: '1px solid hsl(var(--border))' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.2)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = 'transparent')
                    }
                  >
                    {Object.values(row).map((value, cellIdx) => (
                      <td key={cellIdx} className="py-2 px-2">
                        {typeof value === 'string' && value.includes('✨')
                          ? value
                          : String(value)}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
}
