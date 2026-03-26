import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Terminal, ChevronRight, Database, Loader2, Sparkles, TableProperties } from "lucide-react";
import initSqlJs, { Database as SqlDatabase } from "sql.js";

const INIT_SQL = `
CREATE TABLE komal (
  name TEXT, role TEXT, university TEXT, cgpa REAL, focus_area TEXT
);
INSERT INTO komal VALUES (
  'Komal Harshita',
  'Data Analytics & Business Intelligence Enthusiast',
  'NMIET Pune',
  9.05,
  'Data Analytics, Business Intelligence'
);

CREATE TABLE hobbies (hobby TEXT);
INSERT INTO hobbies VALUES ('Poetry'),('Writing'),('Guitar'),('Crocheting'),('Reading'),('Journaling');

CREATE TABLE skills (skill TEXT, category TEXT, level INTEGER);
INSERT INTO skills VALUES
  ('Python','Programming',70),
  ('SQL','Programming',80),
  ('Data Visualization','Analytics',75),
  ('Data Analytics','Analytics',72),
  ('Exploratory Data Analysis','Analytics',68),
  ('Business Analytics','Analytics',65);

CREATE TABLE projects (project_name TEXT, tool TEXT, dataset TEXT, insight TEXT);
INSERT INTO projects VALUES
  ('Exploratory Data Analysis Dashboard','Excel','Mixed Datasets','EDA visual insights'),
  ('IMDB Movies Dashboard','Excel','IMDB Dataset','Movie industry analytics'),
  ('Interactive Power BI Resume','Power BI','Personal Data','Data-driven storytelling'),
  ('PocketPilot AI','Python','Finance Dataset','AI-powered personal finance assistant'),
  ('ProdigyFlow','Python','Workflow Data','Automated analytics pipeline'),
  ('Sales & Profit Dashboard','Excel','Retail Dataset','Sales trend insights'),
  ('Urban Sustainability Analysis','Python','Global Cities Dataset','Sustainability pattern exploration');

CREATE TABLE achievements (certification TEXT, platform TEXT, year INTEGER, status TEXT);
INSERT INTO achievements VALUES
  ('McKinsey Forward Program','McKinsey',2025,'Completed'),
  ('Data Analytics Job Simulation','Deloitte',2025,'Completed'),
  ('Get Started Using Google Analytics','Google',2025,'Completed'),
  ('5-Day AI Agents Intensive Course','Kaggle',2025,'Completed'),
  ('Startup School: Prompt to Prototype','Google for Startups',2025,'Completed'),
  ('Basic to Advanced PowerPoint','Skill Nation',2025,'Completed'),
  ('Data Analytics Essentials','Cisco',2025,'Completed'),
  ('Data Visualisation Job Simulation','Forage',2025,'Completed'),
  ('Azure Data Fundamentals','Skillsoft',2025,'Completed'),
  ('GenAI Exchange Hackathon','Hack2Skill',2026,'Completed'),
  ('Aspire Leaders Program','Aspire Institute',2026,'In Progress'),
  ('Power BI Data Analyst','Microsoft',2026,'In Progress');

CREATE TABLE easter_eggs (query_hint TEXT, response TEXT);
INSERT INTO easter_eggs VALUES
  ('future_role','Data Analyst — turning raw numbers into real impact.'),
  ('passion','Turning data into insights ✨'),
  ('superpower','Curiosity + SQL + a cup of coffee ☕'),
  ('motto','Query first, ask questions later.'),
  ('fun_fact','I crochet while my datasets load 🧶');
`;

const EASTER_EGG_MAP: Record<string, { columns: string[]; rows: string[][] }> = {
  "SELECT future_role FROM komal": {
    columns: ["future_role"],
    rows: [["Data Analyst — turning raw numbers into real impact."]],
  },
  "SELECT passion FROM komal": {
    columns: ["passion"],
    rows: [["Turning data into insights ✨"]],
  },
  "SELECT superpower FROM komal": {
    columns: ["superpower"],
    rows: [["Curiosity + SQL + a cup of coffee ☕"]],
  },
  "SELECT motto FROM komal": {
    columns: ["motto"],
    rows: [["Query first, ask questions later."]],
  },
  "SELECT fun_fact FROM komal": {
    columns: ["fun_fact"],
    rows: [["I crochet while my datasets load 🧶"]],
  },
};

const SUGGESTIONS = [
  "SELECT * FROM komal;",
  "SELECT hobby FROM hobbies;",
  "SELECT project_name, tool FROM projects;",
  "SELECT skill FROM skills ORDER BY level DESC;",
  "SELECT certification FROM achievements WHERE year = 2025;",
  "SELECT project_name FROM projects WHERE tool = 'Python';",
];

const SCHEMA: { table: string; columns: string[] }[] = [
  { table: "komal", columns: ["name", "role", "university", "cgpa", "focus_area"] },
  { table: "hobbies", columns: ["hobby"] },
  { table: "skills", columns: ["skill", "category", "level"] },
  { table: "projects", columns: ["project_name", "tool", "dataset", "insight"] },
  { table: "achievements", columns: ["certification", "platform", "year", "status"] },
];

type QueryResult = { columns: string[]; rows: string[][] };

const DEFAULT_QUERY = "SELECT * FROM komal;";

const SQLPlayground = () => {
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [isEasterEgg, setIsEasterEgg] = useState(false);
  const dbRef = useRef<SqlDatabase | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const SQL = await initSqlJs({
          locateFile: () => '/sql-wasm.wasm',
        });
        const db = new SQL.Database();
        db.run(INIT_SQL);
        dbRef.current = db;
        setLoading(false);
      } catch {
        setError("Failed to initialize SQL engine.");
        setLoading(false);
      }
    };
    init();
    return () => { dbRef.current?.close(); };
  }, []);

  const runQuery = useCallback(() => {
    if (!dbRef.current) return;
    setRunning(true);
    setError("");
    setResult(null);
    setIsEasterEgg(false);

    const trimmed = query.trim().replace(/;$/, "").trim();

    // Check easter eggs
    const eggKey = Object.keys(EASTER_EGG_MAP).find(
      (k) => k.toLowerCase() === trimmed.toLowerCase()
    );
    if (eggKey) {
      setResult(EASTER_EGG_MAP[eggKey]);
      setIsEasterEgg(true);
      setRunning(false);
      return;
    }

    try {
      const res = dbRef.current.exec(query.trim());
      if (res.length === 0) {
        setResult({ columns: ["Result"], rows: [["Query executed successfully. No rows returned."]] });
      } else {
        setResult({
          columns: res[0].columns,
          rows: res[0].values.map((r) => r.map(String)),
        });
      }
    } catch (e: any) {
      setError(e.message || "SQL Error — please check your query syntax.");
    }
    setRunning(false);
  }, [query]);

  return (
    <div className="space-y-6 mt-10">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Database className="h-5 w-5 text-primary" />
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">
            SQL Playground — Query My Portfolio Database
          </h3>
          <p className="text-sm text-muted-foreground">
            Try querying my portfolio like a data analyst. Database: <code className="px-1.5 py-0.5 rounded bg-secondary/50 text-primary font-mono text-xs">komal_portfolio_db</code>
          </p>
        </div>
      </div>

      {/* Schema reference */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-grid-line rounded-lg overflow-hidden"
      >
        <div className="excel-cell excel-cell-header font-heading text-xs flex items-center gap-2">
          <TableProperties className="h-3.5 w-3.5" />
          Database Schema — komal_portfolio_db
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SCHEMA.map((t) => (
            <div key={t.table} className="p-3 border-r border-b border-grid-line last:border-r-0">
              <span className="font-heading font-semibold text-primary text-xs block mb-1.5">{t.table}</span>
              <div className="space-y-0.5">
                {t.columns.map((c) => (
                  <span key={c} className="block text-xs font-mono text-muted-foreground">• {c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Suggested queries */}
      <div>
        <h4 className="font-heading text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Suggested Queries
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => { setQuery(s); setResult(null); setError(""); setIsEasterEgg(false); }}
              className="text-left px-3 py-2.5 rounded-lg bg-secondary/40 border border-transparent text-sm font-mono text-foreground hover:bg-secondary/70 hover:border-primary/20 transition-all"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

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
            SQL Editor
          </span>
          <div className="ml-auto flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          </div>
        </div>

        {loading ? (
          <div className="flex items-center gap-2 py-8 justify-center text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Initializing komal_portfolio_db...
          </div>
        ) : (
          <>
            {/* Editor */}
            <div className="bg-secondary/30 rounded-lg p-3 mb-3">
              <div className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                      e.preventDefault();
                      runQuery();
                    }
                  }}
                  rows={4}
                  spellCheck={false}
                  className="flex-1 bg-transparent text-sm font-mono text-foreground placeholder:text-muted-foreground resize-none focus:outline-none"
                  placeholder="Write your SQL query..."
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={runQuery}
                disabled={running}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold gradient-accent text-primary-foreground hover:brightness-110 transition-all disabled:opacity-50 shadow-lg shadow-primary/20"
              >
                {running ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
                Run Query
              </button>
              <span className="text-xs text-muted-foreground hidden sm:inline">Ctrl+Enter to run</span>
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm font-mono overflow-hidden"
                >
                  ❌ SQL Error — {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-4"
                >
                  {isEasterEgg && (
                    <div className="mb-3 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent-foreground text-xs flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-accent" />
                      <span className="text-accent font-semibold">Easter egg unlocked!</span>
                    </div>
                  )}
                  <div className="border border-grid-line rounded-lg overflow-x-auto">
                    <table className="w-full text-sm font-mono">
                      <thead>
                        <tr>
                          <th className="excel-cell excel-cell-header text-center font-heading w-12 shrink-0">#</th>
                          {result.columns.map((c) => (
                            <th key={c} className="excel-cell excel-cell-header text-left font-heading">{c}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {result.rows.map((row, i) => (
                          <motion.tr
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: Math.min(i * 0.02, 0.3) }}
                            className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/20"} hover:bg-primary/5 transition-colors`}
                          >
                            <td className="excel-cell border-t-0 text-muted-foreground text-center text-xs w-12 shrink-0">{i + 1}</td>
                            {row.map((cell, j) => (
                              <td key={j} className="excel-cell border-t-0 text-muted-foreground">{cell}</td>
                            ))}
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{result.rows.length} row(s) returned</p>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </motion.div>

      {/* Hidden queries hint */}
      <p className="text-xs text-muted-foreground/50 text-center italic">
        psst... try querying <code className="text-accent/60">SELECT passion FROM komal</code> 🤫
      </p>
    </div>
  );
};

export default SQLPlayground;
