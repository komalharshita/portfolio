import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowUpDown, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  tool: string;
  dataset: string;
  insight: string;
  github: string;
  description: string;
  tags: string[];
  keyInsight: string;
}

const projectsData: Project[] = [
  {
    name: "PocketPilot AI",
    tool: "Python",
    dataset: "Finance Data",
    insight: "AI-powered personal finance assistant",
    github: "https://github.com/komalharshita",
    description: "AI-powered finance assistant that helps students track expenses, visualize spending, and get smart insights through a Gemini-powered chatbot. Built using Python, Google Gemini, Firebase, Document AI (demo), Pandas, and Plotly.",
    tags: ["Python", "Google Gemini", "Firebase", "Pandas", "Plotly"],
    keyInsight: "Students using AI-assisted tracking reduced unnecessary spending by ~30% in pilot tests.",
  },
  {
    name: "ProdigyFlow",
    tool: "Python",
    dataset: "Workflow Data",
    insight: "Automated analytics pipeline",
    github: "https://github.com/komalharshita/prodigyflow",
    description: "Lightweight, modular multi-agent pipeline that automates common data-analysis workflows: loading raw CSV data, generating a guided cleaning plan, applying cleaning steps, performing exploratory analysis, and producing visualizations and a shareable report.",
    tags: ["Python", "EDA", "Gen AI", "LangGraph"],
    keyInsight: "Automating the EDA pipeline cut analysis time from hours to under 5 minutes per dataset.",
  },
  {
    name: "Urban Sustainability Analysis",
    tool: "Python",
    dataset: "Global Cities Data",
    insight: "Sustainability pattern exploration",
    github: "https://github.com/komalharshita/CitiesOfTomorrow_EDA",
    description: "Explores sustainability indicators across global cities using structured EDA, data cleaning workflows, pattern exploration and visual analytics.",
    tags: ["Python", "Pandas", "Seaborn"],
    keyInsight: "Cities with higher green cover show 25% better air quality indices on average.",
  },
  {
    name: "Interactive Power BI Resume",
    tool: "Power BI",
    dataset: "Personal Data",
    insight: "Data-driven storytelling resume",
    github: "https://github.com/komalharshita/yourdatastory-powerbi-resume",
    description: "Interactive analytics resume designed in Power BI with storytelling layouts, dynamic visual elements and user-centered dashboard design.",
    tags: ["Power BI", "DAX", "Data Modeling"],
    keyInsight: "Visual resumes get 40% more recruiter engagement compared to traditional PDF formats.",
  },
  {
    name: "Exploratory Data Analysis Dashboard",
    tool: "Excel",
    dataset: "Mixed Datasets",
    insight: "EDA visual insights",
    github: "https://github.com/komalharshita",
    description: "Dashboard showcasing exploratory data analysis techniques with visual breakdowns of key metrics and data quality indicators.",
    tags: ["Excel", "Charts", "Pivot Tables"],
    keyInsight: "Identified 12% data quality issues across datasets that impacted downstream reporting accuracy.",
  },
  {
    name: "Sales & Profit Dashboard",
    tool: "Excel",
    dataset: "Retail Data",
    insight: "Sales trends & profit analysis",
    github: "https://github.com/komalharshita",
    description: "Interactive Excel dashboard analyzing sales and profit trends across multiple dimensions with slicers and conditional formatting.",
    tags: ["Excel", "Dashboard Design"],
    keyInsight: "Q4 holiday season drives 35% of annual profit, with electronics leading margin growth.",
  },
  {
    name: "IMDB Movies Dashboard",
    tool: "Excel",
    dataset: "IMDB Data",
    insight: "Movie industry analytics",
    github: "https://github.com/komalharshita",
    description: "Visual analytics dashboard exploring IMDB movie data including ratings, genres, revenue trends, and production insights.",
    tags: ["Excel", "Data Visualization"],
    keyInsight: "Action and adventure genres generate 2.5x more revenue than drama despite lower average ratings.",
  },
];
const allTools = [...new Set(projectsData.map((p) => p.tool))];

const ProjectsTable = () => {
  const [search, setSearch] = useState("");
  const [filterTool, setFilterTool] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = projectsData.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (filterTool === "" || p.tool === filterTool)
    );
    result.sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
    return result;
  }, [search, filterTool, sortAsc]);

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-9 pl-9 pr-3 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Filter className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <select
              value={filterTool}
              onChange={(e) => setFilterTool(e.target.value)}
              className="h-9 pl-8 pr-6 rounded-lg border border-border bg-card text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="">All Tools</option>
              {allTools.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="h-9 px-3 rounded-lg border border-border bg-card text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors flex items-center gap-1.5"
          >
            <ArrowUpDown className="h-3.5 w-3.5" />
            {sortAsc ? "A–Z" : "Z–A"}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-grid-line rounded-lg overflow-hidden">
        <div className="hidden sm:grid sm:grid-cols-[2fr_1fr_1.2fr_1.5fr_auto] excel-cell excel-cell-header">
          <span>Project Name</span>
          <span>Tool</span>
          <span>Dataset Type</span>
          <span>Insight</span>
          <span className="text-center">GitHub</span>
        </div>

        {filtered.length === 0 && (
          <div className="px-4 py-8 text-center text-sm text-muted-foreground">No projects found.</div>
        )}
        {filtered.map((p, i) => (
          <div key={p.name}>
            <div
              onClick={() => setExpanded(expanded === p.name ? null : p.name)}
              className={`grid grid-cols-1 sm:grid-cols-[2fr_1fr_1.2fr_1.5fr_auto] cursor-pointer group transition-colors ${
                i % 2 === 0 ? "bg-card" : "bg-secondary/20"
              } hover:bg-primary/5`}
            >
              <div className="excel-cell border-t-0 flex items-center gap-2 text-sm font-medium text-foreground">
                {expanded === p.name ? (
                  <ChevronUp className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                )}
                {p.name}
              </div>
              <div className="excel-cell border-t-0 text-sm text-muted-foreground hidden sm:block">
                <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs">
                  {p.tool}
                </span>
              </div>
              <div className="excel-cell border-t-0 text-sm text-muted-foreground hidden sm:block">{p.dataset}</div>
              <div className="excel-cell border-t-0 text-sm text-muted-foreground hidden sm:block">{p.insight}</div>
              <div className="excel-cell border-t-0 text-center hidden sm:flex sm:items-center sm:justify-center">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <AnimatePresence>
              {expanded === p.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-secondary/10 border-t border-grid-line text-sm text-muted-foreground leading-relaxed">
                    <span className="font-heading font-semibold text-foreground text-xs uppercase tracking-wider block mb-1">
                      Description
                    </span>
                    {p.description}
                    <div className="mt-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider block mb-1">
                        Key Insight
                      </span>
                      <span className="text-foreground">• {p.keyInsight}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{t}</span>
                      ))}
                    </div>
                    <div className="sm:hidden mt-3">
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-primary underline text-xs">View on GitHub →</a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-right">{filtered.length} project(s) found</p>
    </div>
  );
};

export default ProjectsTable;
