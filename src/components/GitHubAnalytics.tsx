import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, GitCommit, FolderGit2, Flame, Loader2 } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid,
} from "recharts";

const USERNAME = "komalharshita";

interface RepoData {
  name: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

interface EventData {
  type: string;
  created_at: string;
  payload?: { commits?: unknown[] };
}

const GitHubAnalytics = () => {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [repoRes, eventRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
          fetch(`https://api.github.com/users/${USERNAME}/events/public?per_page=100`),
        ]);
        if (!repoRes.ok || !eventRes.ok) throw new Error("GitHub API rate limit or error");
        setRepos(await repoRes.json());
        setEvents(await eventRes.json());
      } catch (e: any) {
        setError(e.message || "Failed to fetch GitHub data");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // Language stats
  const langMap: Record<string, number> = {};
  repos.forEach((r) => {
    if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
  });
  const langData = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, count]) => ({ name, count }));

  // Commit count from push events
  const totalCommits = events
    .filter((e) => e.type === "PushEvent")
    .reduce((sum, e) => sum + ((e.payload?.commits as unknown[])?.length || 0), 0);

  // Contribution timeline (group events by date, last 30 days)
  const dateMap: Record<string, number> = {};
  events.forEach((e) => {
    const day = e.created_at?.slice(0, 10);
    if (day) dateMap[day] = (dateMap[day] || 0) + 1;
  });
  const contribData = Object.entries(dateMap)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, count]) => ({ date: date.slice(5), count }));

  // Streak
  const sortedDays = Object.keys(dateMap).sort().reverse();
  let streak = 0;
  if (sortedDays.length > 0) {
    const today = new Date();
    let checkDate = new Date(sortedDays[0]);
    const diffFromToday = Math.floor((today.getTime() - checkDate.getTime()) / 86400000);
    if (diffFromToday <= 1) {
      for (let i = 0; i < sortedDays.length; i++) {
        const expected = new Date(checkDate);
        expected.setDate(expected.getDate() - i);
        const expStr = expected.toISOString().slice(0, 10);
        if (sortedDays.includes(expStr)) streak++;
        else break;
      }
    }
  }

  const tooltipStyle = {
    contentStyle: {
      background: "hsl(280 45% 15%)",
      border: "1px solid hsl(270 30% 20%)",
      borderRadius: "0.5rem",
      color: "hsl(270 20% 90%)",
      fontSize: "0.75rem",
    },
  };

  if (loading) {
    return (
      <div className="stat-card flex items-center justify-center py-12">
        <Loader2 className="h-5 w-5 animate-spin text-primary mr-2" />
        <span className="text-sm text-muted-foreground">Fetching GitHub data...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="stat-card">
        <p className="text-sm text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Github className="h-5 w-5 text-primary" />
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">GitHub Activity Dashboard</h3>
          <p className="text-sm text-muted-foreground">A data-driven look at my development activity.</p>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Repositories", value: repos.length, icon: <FolderGit2 className="h-4 w-4 text-primary" /> },
          { label: "Recent Commits", value: totalCommits, icon: <GitCommit className="h-4 w-4 text-primary" /> },
          { label: "Languages", value: Object.keys(langMap).length, icon: <Github className="h-4 w-4 text-primary" /> },
          { label: "Day Streak", value: streak, icon: <Flame className="h-4 w-4 text-accent" /> },
        ].map((m) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="stat-card text-center"
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">{m.icon}</div>
            <div className="text-2xl font-heading font-bold text-foreground">{m.value}</div>
            <div className="text-xs text-muted-foreground">{m.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Languages bar chart */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="stat-card">
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Most Used Languages</h4>
          {langData.length > 0 ? (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={langData} margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
                <XAxis dataKey="name" tick={{ fill: "hsl(270 15% 60%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(270 15% 60%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="count" fill="hsl(270 60% 65%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-muted-foreground">No language data available.</p>
          )}
        </motion.div>

        {/* Contributions line chart */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="stat-card">
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Recent Contributions</h4>
          {contribData.length > 0 ? (
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={contribData} margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
                <CartesianGrid stroke="hsl(270 30% 20%)" strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fill: "hsl(270 15% 60%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(270 15% 60%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip {...tooltipStyle} />
                <Line type="monotone" dataKey="count" stroke="hsl(330 50% 72%)" strokeWidth={2} dot={{ fill: "hsl(330 50% 72%)", r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-muted-foreground">No recent contribution data.</p>
          )}
        </motion.div>
      </div>

      {/* Top repos table */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h4 className="font-heading text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Recent Repositories
        </h4>
        <div className="border border-grid-line rounded-lg overflow-hidden">
          <div className="hidden sm:grid sm:grid-cols-[2fr_1fr_1fr] excel-cell excel-cell-header">
            <span>Repository</span>
            <span>Language</span>
            <span>Stars</span>
          </div>
          {repos.slice(0, 6).map((r, i) => (
            <div
              key={r.name}
              className={`grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] ${i % 2 === 0 ? "bg-card" : "bg-secondary/20"} hover:bg-primary/5 transition-colors`}
            >
              <div className="excel-cell border-t-0 text-sm font-medium text-foreground">
                <a href={`https://github.com/${USERNAME}/${r.name}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {r.name}
                </a>
              </div>
              <div className="excel-cell border-t-0 text-sm text-muted-foreground hidden sm:block">
                {r.language ? (
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs">{r.language}</span>
                ) : "—"}
              </div>
              <div className="excel-cell border-t-0 text-sm text-muted-foreground hidden sm:block">⭐ {r.stargazers_count}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubAnalytics;
