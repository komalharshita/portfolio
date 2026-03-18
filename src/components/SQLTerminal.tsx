import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Terminal, ChevronRight } from "lucide-react";

type QueryResult = { columns: string[]; rows: string[][] };

const presetQueries: Record<string, QueryResult> = {
  "SELECT * FROM projects;": {
    columns: ["id", "name", "tool", "status"],
    rows: [
      ["1", "ProdigyFlow", "Python", "Complete"],
      ["2", "Urban Sustainability Analysis", "Python", "Complete"],
      ["3", "Interactive Power BI Resume", "Power BI", "Complete"],
      ["4", "EDA Dashboard", "Excel", "Complete"],
      ["5", "Sales & Profit Dashboard", "Excel", "Complete"],
      ["6", "IMDB Movies Dashboard", "Excel", "Complete"],
    ],
  },
  "SELECT skills FROM komal;": {
    columns: ["skill", "proficiency"],
    rows: [
      ["Python (Pandas, NumPy)", "70%"],
      ["SQL Queries", "80%"],
      ["Excel", "85%"],
      ["Power BI & DAX", "60%"],
      ["Data Visualization", "75%"],
      ["Exploratory Data Analysis", "68%"],
      ["Business Analytics", "55%"],
    ],
  },
  "SELECT hobbies FROM komal;": {
    columns: ["hobby", "category"],
    rows: [
      ["Poetry", "Creative Writing"],
      ["Writing", "Creative Writing"],
      ["Guitar", "Music"],
      ["Crocheting", "Craft"],
      ["Reading", "Learning"],
      ["Journaling", "Reflection"],
      ["Creative Coding", "Tech"],
    ],
  },
  "SELECT certifications FROM portfolio;": {
    columns: ["certification", "platform", "year"],
    rows: [
      ["McKinsey Forward Program", "McKinsey", "2025"],
      ["Data Analytics Simulation", "Deloitte", "2025"],
      ["Springboard Pragati Cohort 7", "Infosys", "2025"],
      ["AI Agents Intensive", "Google/Kaggle", "2025"],
      ["Prompt to Prototype", "Google Startups", "2025"],
      ["Advanced PowerPoint", "SkillNation", "2025"],
      ["Power BI Data Analyst", "Microsoft", "2026"],
    ],
  },
  "SELECT fun FROM portfolio;": {
    columns: ["fun_things"],
    rows: [
      ["✨ Data exploration & pattern hunting"],
      ["🎨 Creativity & visual storytelling"],
      ["🔍 Curiosity is my superpower"],
      ["☕ Coffee-fueled analysis sessions"],
      ["🎸 Guitar riffs between queries"],
      ["🧶 Crocheting while datasets load"],
    ],
  },
};

const suggestions = Object.keys(presetQueries);

const SQLTerminal = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<QueryResult | null>(null);
  const [error, setError] = useState("");

  const runQuery = () => {
    const trimmed = query.trim();
    const match = suggestions.find((s) => s.toLowerCase() === trimmed.toLowerCase());
    if (match) {
      setResult(presetQueries[match]);
      setError("");
    } else {
      setResult(null);
      setError(trimmed ? `ERROR: Unknown query. Try one of the preset queries below.` : "ERROR: Empty query.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="stat-card border-primary/20 overflow-hidden"
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="font-heading text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            SQL Terminal
          </span>
          <div className="ml-auto flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          </div>
        </div>

        {/* Input */}
        <div className="bg-secondary/30 rounded-lg p-3 mb-3">
          <div className="flex items-start gap-2">
            <ChevronRight className="h-4 w-4 text-primary mt-1 shrink-0" />
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); runQuery(); } }}
              placeholder="Type a SQL query..."
              rows={3}
              className="flex-1 bg-transparent text-sm font-mono text-foreground placeholder:text-muted-foreground resize-none focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={runQuery}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium gradient-accent text-primary-foreground hover:brightness-110 transition-all"
        >
          <Play className="h-3.5 w-3.5" />
          Run Query
        </button>

        {/* Output */}
        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-3 rounded-lg bg-destructive/10 text-destructive text-sm font-mono">
            {error}
          </motion.div>
        )}

        {result && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
            <div className="border border-grid-line rounded-lg overflow-x-auto">
              <table className="w-full text-sm font-mono">
                <thead>
                  <tr>
                    {result.columns.map((c) => (
                      <th key={c} className="excel-cell excel-cell-header text-left font-heading">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((row, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/20"} hover:bg-primary/5 transition-colors`}>
                      {row.map((cell, j) => (
                        <td key={j} className="excel-cell border-t-0 text-muted-foreground">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{result.rows.length} row(s) returned</p>
          </motion.div>
        )}
      </motion.div>

      {/* Suggestions */}
      <div>
        <h4 className="font-heading text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Try these queries
        </h4>
        <div className="flex flex-col gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => { setQuery(s); setResult(null); setError(""); }}
              className="text-left px-3 py-2 rounded-lg bg-secondary/40 text-sm font-mono text-foreground hover:bg-secondary/70 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SQLTerminal;
