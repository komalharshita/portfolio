import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  techStack: string[];
  keyInsight: string;
  github: string;
  liveLink?: string;
  thumbnail?: string;
}

const projectsData: Project[] = [
  {
    id: "pocket-pilot",
    name: "PocketPilot AI",
    description: "AI-powered personal finance assistant",
    longDescription: "AI-powered finance assistant that helps students track expenses, visualize spending, and get smart insights through a Gemini-powered chatbot. Built using Python, Google Gemini, Firebase, Document AI (demo), Pandas, and Plotly.",
    category: "Python",
    techStack: ["Python", "Google Gemini", "Firebase", "Pandas", "Plotly"],
    keyInsight: "Students using AI-assisted tracking reduced unnecessary spending by ~30% in pilot tests.",
    github: "https://github.com/komalharshita",
  },
  {
    id: "prodigy-flow",
    name: "ProdigyFlow",
    description: "Automated analytics pipeline",
    longDescription: "Lightweight, modular multi-agent pipeline that automates common data-analysis workflows: loading raw CSV data, generating a guided cleaning plan, applying cleaning steps, performing exploratory analysis, and producing visualizations and a shareable report.",
    category: "Python",
    techStack: ["Python", "EDA", "Gen AI", "LangGraph"],
    keyInsight: "Automating the EDA pipeline cut analysis time from hours to under 5 minutes per dataset.",
    github: "https://github.com/komalharshita/prodigyflow",
  },
  {
    id: "urban-sustainability",
    name: "Urban Sustainability Analysis",
    description: "Sustainability pattern exploration across global cities",
    longDescription: "Explores sustainability indicators across global cities using structured EDA, data cleaning workflows, pattern exploration and visual analytics.",
    category: "Data Analytics",
    techStack: ["Python", "Pandas", "Seaborn"],
    keyInsight: "Cities with higher green cover show 25% better air quality indices on average.",
    github: "https://github.com/komalharshita/CitiesOfTomorrow_EDA",
  },
  {
    id: "powerbi-resume",
    name: "Interactive Power BI Resume",
    description: "Data-driven storytelling resume with interactive dashboards",
    longDescription: "Interactive analytics resume designed in Power BI with storytelling layouts, dynamic visual elements and user-centered dashboard design.",
    category: "BI",
    techStack: ["Power BI", "DAX", "Data Modeling"],
    keyInsight: "Visual resumes get 40% more recruiter engagement compared to traditional PDF formats.",
    github: "https://github.com/komalharshita/yourdatastory-powerbi-resume",
  },
];

const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];
const categoryColors: Record<string, string> = {
  Python: "bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30",
  "Data Analytics": "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30",
  BI: "bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-500/30",
};

const ProjectsCards = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projectsData.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        (selectedCategory === "All" || p.category === selectedCategory)
    ).sort((a, b) => {
      if (selectedCategory === "All") return 0;
      return a.category === selectedCategory ? -1 : 1;
    });
  }, [search, selectedCategory]);

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Featured Projects</h2>

        {/* Search & Filter Controls */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search projects by name or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background transition-all"
              aria-label="Search projects"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg border transition-all font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-primary/50 text-foreground"
                }`}
                aria-pressed={selectedCategory === cat}
                aria-label={`Filter by ${cat} category`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: idx * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setExpandedId(expandedId === project.id ? null : project.id);
                }
              }}
              aria-expanded={expandedId === project.id}
            >
              <div className="relative h-full overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card to-secondary/30 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Background decoration */}
                <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all" aria-hidden="true" />

                <div className="relative z-10">
                  {/* Category Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                        categoryColors[project.category] || "bg-secondary/50 text-foreground border-border"
                      }`}
                      aria-label={`Project category: ${project.category}`}
                    >
                      {project.category}
                    </span>
                    {expandedId === project.id ? (
                      <ChevronUp className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" aria-hidden="true" />
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-border/50 space-y-3">
                          <div>
                            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Full Description</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
                          </div>

                          <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Key Insight</p>
                            <p className="text-sm text-foreground">✨ {project.keyInsight}</p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Full Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech) => (
                                <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Links */}
                          <div className="flex gap-2 pt-2">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60"
                              aria-label={`View ${project.name} on GitHub - Opens in new tab`}
                            >
                              <Github className="h-4 w-4" aria-hidden="true" />
                              GitHub
                            </a>
                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent/60"
                                aria-label={`View ${project.name} live - Opens in new tab`}
                              >
                                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                Live
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground text-sm">No projects found matching your search. Try adjusting your filters.</p>
        </motion.div>
      )}

      {/* Results Count */}
      <div className="text-center text-xs text-muted-foreground">
        Showing {filtered.length} of {projectsData.length} project{projectsData.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
};

export default ProjectsCards;
