'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Github } from 'lucide-react';

const SKILLS = [
  { name: 'Python', level: 70 },
  { name: 'SQL', level: 80 },
  { name: 'Data Visualization', level: 75 },
  { name: 'Data Analytics', level: 72 },
  { name: 'EDA', level: 68 },
  { name: 'Business Analytics', level: 55 },
];

const TOOLS = [
  { name: 'Excel', level: 85, category: 'Spreadsheet' },
  { name: 'Power BI', level: 60, category: 'BI' },
  { name: 'GitHub', level: 94, category: 'Version Control' },
  { name: 'Notion', level: 97, category: 'Productivity' },
  { name: 'Google Sheets', level: 65, category: 'Spreadsheet' },
  { name: 'VS Code', level: 95, category: 'IDE' },
  { name: 'Tableau', level: 45, category: 'Visualization' },
  { name: 'Canva', level: 90, category: 'Design' },
];

function AnimatedProgressBar({ skill, index }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayValue((prev) => Math.min(prev + 1, skill.level));
      }, 7);
      return () => clearInterval(interval);
    }, index * 50);
    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-sm">{skill.name}</span>
        <span className="text-xs font-mono" style={{ color: 'hsl(var(--primary))' }}>{displayValue}%</span>
      </div>
      <div className="h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--secondary) / 0.3)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))' }}
          initial={{ width: 0 }}
          animate={{ width: `${displayValue}%` }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function SkillRadar() {
  const maxLevel = 100;
  const containerSize = 280;
  const centerX = containerSize / 2;
  const centerY = containerSize / 2;

  return (
    <svg width={containerSize} height={containerSize} className="mx-auto">
      {/* Grid circles */}
      {[20, 40, 60, 80].map((level) => (
        <circle
          key={level}
          cx={centerX}
          cy={centerY}
          r={(level / maxLevel) * 100}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          opacity="0.3"
        />
      ))}

      {/* Skill bubbles */}
      {SKILLS.map((skill, idx) => {
        const angle = (idx / SKILLS.length) * Math.PI * 2 - Math.PI / 2;
        const distance = (skill.level / maxLevel) * 100;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        const size = 8 + (skill.level / maxLevel) * 24;

        return (
          <g key={skill.name}>
            <motion.circle
              cx={x}
              cy={y}
              r={size}
              fill={`hsl(var(--primary) / ${0.3 + (skill.level / maxLevel) * 0.4})`}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              initial={{ r: 2 }}
              animate={{ r: size }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            />
            <motion.text
              x={x}
              y={y + 16}
              textAnchor="middle"
              fontSize="10"
              fill="hsl(var(--foreground))"
              fontWeight="500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 + 0.3 }}
            >
              {skill.name}
            </motion.text>
          </g>
        );
      })}
    </svg>
  );
}

function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        // Fetch user data
        const userRes = await fetch('https://api.github.com/users/komalharshita');
        const userData = await userRes.json();

        // Fetch repos
        const reposRes = await fetch('https://api.github.com/users/komalharshita/repos?sort=updated&per_page=6');
        const reposData = await reposRes.json();

        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          languages: 8,
          streak: 42,
        });

        setRepos(Array.isArray(reposData) ? reposData : []);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch GitHub data');
        setLoading(false);
      }
    };

    fetchGitHub();
  }, []);

  if (loading)
    return (
      <div className="stat-card text-center py-8" style={{ color: 'hsl(var(--muted-foreground))' }}>
        Loading GitHub data...
      </div>
    );
  if (error) return <div className="stat-card text-center py-8 text-red-500">{error}</div>;

  const langData = [
    { name: 'Python', value: 45 },
    { name: 'SQL', value: 28 },
    { name: 'TypeScript', value: 15 },
    { name: 'HTML/CSS', value: 12 },
  ];

  const contributionData = [
    { day: 'Mon', commits: 8 },
    { day: 'Tue', commits: 12 },
    { day: 'Wed', commits: 6 },
    { day: 'Thu', commits: 10 },
    { day: 'Fri', commits: 15 },
    { day: 'Sat', commits: 4 },
    { day: 'Sun', commits: 2 },
  ];

  return (
    <div className="space-y-6">
      {/* GitHub Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Repositories', value: stats.repos, icon: '📦' },
          { label: 'Recent Commits', value: '42', icon: '💾' },
          { label: 'Languages', value: '6+', icon: '🗣️' },
          { label: 'Day Streak', value: '42', icon: '🔥' },
        ].map((metric, idx) => (
          <motion.div
            key={metric.label}
            className="stat-card text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="text-3xl mb-2">{metric.icon}</div>
            <p className="text-2xl font-bold" style={{ color: 'hsl(var(--primary))' }}>
              {metric.value}
            </p>
            <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="stat-card">
          <h4 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Most Used Languages</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={langData}>
              <CartesianGrid stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                }}
              />
              <Bar dataKey="value" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="stat-card">
          <h4 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Weekly Contributions</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={contributionData}>
              <CartesianGrid stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                }}
              />
              <Line
                type="monotone"
                dataKey="commits"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Repos Table */}
      <div className="stat-card">
        <h4 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Top Repositories</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                <th className="text-left py-2 px-2 font-semibold" style={{ color: 'hsl(var(--primary))' }}>Repository</th>
                <th className="text-left py-2 px-2 font-semibold" style={{ color: 'hsl(var(--primary))' }}>Stars</th>
                <th className="text-left py-2 px-2 font-semibold" style={{ color: 'hsl(var(--primary))' }}>Language</th>
              </tr>
            </thead>
            <tbody>
              {repos.slice(0, 6).map((repo, idx) => (
                <motion.tr
                  key={repo.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  style={{ borderBottom: '1px solid hsl(var(--border))' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <td className="py-2 px-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium"
                      style={{ color: 'hsl(var(--primary))' }}
                    >
                      {repo.name}
                    </a>
                  </td>
                  <td className="py-2 px-2">⭐ {repo.stargazers_count}</td>
                  <td className="py-2 px-2" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {repo.language || 'N/A'}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function MySkillsTab() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* Animated Progress Bars */}
      <div className="stat-card">
        <h3 className="font-semibold mb-6 text-lg" style={{ color: 'hsl(var(--primary))' }}>Core Technical Skills</h3>
        <div className="space-y-5">
          {SKILLS.map((skill, idx) => (
            <AnimatedProgressBar key={skill.name} skill={skill} index={idx} />
          ))}
        </div>
      </div>

      {/* Skill Radar */}
      <div className="stat-card">
        <h3 className="font-semibold mb-6 text-lg" style={{ color: 'hsl(var(--primary))' }}>Skill Proficiency Radar</h3>
        <SkillRadar />
      </div>

      {/* Tools Dashboard */}
      <div className="stat-card">
        <h3 className="font-semibold mb-6 text-lg" style={{ color: 'hsl(var(--primary))' }}>Tools & Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TOOLS.map((tool) => (
            <motion.div
              key={tool.name}
              className="p-4 rounded-lg border cursor-pointer"
              style={{ 
                borderColor: 'hsl(var(--border))',
                backgroundColor: 'hsl(var(--secondary) / 0.1)',
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <h4 className="font-semibold text-sm mb-2">{tool.name}</h4>
              <p className="text-xs mb-2" style={{ color: 'hsl(var(--muted-foreground))' }}>
                {tool.category}
              </p>
              <div className="h-1.5 rounded-full" style={{ backgroundColor: 'hsl(var(--secondary) / 0.3)' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${tool.level}%`,
                    background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))',
                  }}
                />
              </div>
              <p className="text-xs mt-2 font-semibold" style={{ color: 'hsl(var(--primary))' }}>
                {tool.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GitHub Analytics */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Github className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
          <h3 className="font-semibold text-lg" style={{ color: 'hsl(var(--primary))' }}>GitHub Analytics</h3>
        </div>
        <GitHubStats />
      </div>
    </div>
  );
}
