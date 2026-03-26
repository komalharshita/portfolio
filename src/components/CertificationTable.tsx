import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Certification {
  name: string;
  platform: string;
  status: "Completed" | "In Progress";
  year: string;
  description: string;
  skills: string;
  credentialId?: string;
  expires?: string;
}

const certifications: Certification[] = [
  {
    name: "GenAI Exchange Hackathon",
    platform: "Hack2skill",
    status: "Completed",
    year: "2026",
    description: "Participated in the GenAI Exchange Hackathon, building innovative AI-powered solutions.",
    skills: "Generative AI, Problem Solving",
  },
  {
    name: "Aspire Leaders Program — 2026 Cohort 1",
    platform: "Aspire Institute",
    status: "In Progress",
    year: "2026",
    description: "Global cohort of emerging leaders; peer discussions, cross-cultural learning sessions, and collaborative leadership activities.",
    skills: "Leadership, Cross-Cultural Communication",
  },
  {
    name: "McKinsey Forward Program",
    platform: "McKinsey & Company",
    status: "Completed",
    year: "2025",
    description: "Global 10-week learning initiative for young professionals. Growing professionally and personally while connecting with a diverse global network.",
    skills: "Problem Solving, Communication",
  },
  {
    name: "5-Day AI Agents Intensive Course with Google",
    platform: "Kaggle",
    status: "Completed",
    year: "2025",
    description: "Intensive course on building AI agents using cutting-edge technologies. Mastered advanced prompt-based workflows and AI orchestration.",
    skills: "Google Gemini, AI Agents, Prompt Workflows",
  },
  {
    name: "Startup School: Prompt to Prototype",
    platform: "Google for Startups",
    status: "Completed",
    year: "2025",
    description: "Google for Startups program focused on rapid prototyping from prompts to production-ready applications.",
    skills: "Prompt Engineering, Rapid Prototyping, AI Product Thinking",
  },
  {
    name: "Get Started using Google Analytics (GA4)",
    platform: "Google Digital Academy (Skillshop)",
    status: "Completed",
    year: "2025",
    description: "Official Google certification on Google Analytics 4 fundamentals, covering data collection, reporting, and analytical insights.",
    skills: "Google Analytics, Analytical Skills",
    expires: "Nov 2026",
  },
  {
    name: "Data Analytics Job Simulation",
    platform: "Deloitte",
    status: "Completed",
    year: "2025",
    description: "Deloitte Data Analytics simulation covering critical thinking, data-driven decision making, and data cleaning.",
    skills: "Critical Thinking, Data Analytics, Data-driven Decision Making, Data Cleaning",
  },
  {
    name: "Data Analytics Essentials",
    platform: "Cisco Networking Academy",
    status: "Completed",
    year: "2025",
    description: "Comprehensive data analytics essentials course covering analytical skills, Excel, data analytics, and data cleaning fundamentals.",
    skills: "Analytical Skills, Microsoft Excel, Data Analytics, Data Cleaning",
  },
  {
    name: "Azure Data Fundamentals: Data Storage Considerations",
    platform: "Skillsoft",
    status: "Completed",
    year: "2025",
    description: "Microsoft Azure data storage fundamentals covering Azure SQL, Microsoft SQL Server, and cloud data storage considerations.",
    skills: "Microsoft Azure, Azure SQL, Microsoft SQL Server",
    credentialId: "154292503",
  },
  {
    name: "Basic to Advanced PowerPoint",
    platform: "Skill Nation",
    status: "Completed",
    year: "2025",
    description: "Comprehensive PowerPoint training covering business storytelling and presentation design.",
    skills: "Business Storytelling, Microsoft PowerPoint",
    credentialId: "593317",
  },
  {
    name: "Data Visualisation: Empowering Business with Effective Insights",
    platform: "Forage",
    status: "Completed",
    year: "2025",
    description: "Job simulation focused on data visualisation using Power BI, creating dashboards and deriving business insights.",
    skills: "Microsoft Power BI, Data Visualisation, Dashboards",
  },
  {
    name: "Infosys Springboard Pragati – Cohort 7",
    platform: "Infosys",
    status: "Completed",
    year: "2025",
    description: "Selected participant focused on industry-ready digital and professional skills.",
    skills: "Digital Skills, Professional Development",
  },

  {
    name: "Power BI Data Analyst",
    platform: "Microsoft",
    status: "In Progress",
    year: "2026",
    description: "Official Microsoft certification for Power BI data modeling and visualization.",
    skills: "Power BI, DAX, Data Modeling",
  },
];

const CertificationTable = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="border border-grid-line rounded-lg overflow-hidden">
      <div className="hidden sm:grid sm:grid-cols-[2fr_1.2fr_1fr_0.8fr] excel-cell excel-cell-header">
        <span>Certification</span>
        <span>Platform</span>
        <span>Status</span>
        <span>Year</span>
      </div>

      {certifications.map((c, i) => (
        <div key={c.name}>
          <div
            onClick={() => setExpanded(expanded === c.name ? null : c.name)}
            className={`grid grid-cols-1 sm:grid-cols-[2fr_1.2fr_1fr_0.8fr] cursor-pointer group transition-colors ${
              i % 2 === 0 ? "bg-card" : "bg-secondary/20"
            } hover:bg-primary/5`}
          >
            <div className="excel-cell border-t-0 flex items-center gap-2 text-sm font-medium text-foreground">
              {expanded === c.name ? (
                <ChevronUp className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              )}
              {c.name}
            </div>
            <div className="excel-cell border-t-0 text-sm text-muted-foreground hidden sm:block">{c.platform}</div>
            <div className="excel-cell border-t-0 text-sm hidden sm:block">
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  c.status === "Completed"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/30 text-accent-foreground"
                }`}
              >
                {c.status}
              </span>
            </div>
            <div className="excel-cell border-t-0 text-sm text-muted-foreground hidden sm:block">{c.year}</div>
          </div>

          {expanded === c.name && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-6 py-4 bg-secondary/10 border-t border-grid-line text-sm text-muted-foreground leading-relaxed">
                <p>{c.description}</p>
                <p className="mt-2 text-xs">
                  <span className="font-heading font-semibold text-foreground">Skills: </span>
                  {c.skills}
                </p>
                {c.credentialId && (
                  <p className="mt-1 text-xs text-muted-foreground/70">Credential ID: {c.credentialId}</p>
                )}
                {c.expires && (
                  <p className="mt-1 text-xs text-muted-foreground/70">Expires: {c.expires}</p>
                )}
                <div className="sm:hidden mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="text-muted-foreground">{c.platform}</span>
                  <span className={`px-2 py-0.5 rounded-full ${c.status === "Completed" ? "bg-primary/10 text-primary" : "bg-accent/30 text-accent-foreground"}`}>
                    {c.status}
                  </span>
                  <span>{c.year}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CertificationTable;
