import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Milestone {
  year: string;
  items: string[];
}

const milestones: Milestone[] = [
  {
    year: "2013–2022",
    items: [
      "Secondary School at Bharati Vidyapeeth (92.2%)",
      "Class 10th Board School Topper Award",
      "Poetry Writing, Speech & Elocution Competitions",
    ],
  },
  {
    year: "2022–2024",
    items: [
      "Higher Secondary – Science at Symbiosis College of Arts & Commerce (80.67%)",
      "Active in creative writing and essay competitions",
      "Student Editor of the Symbi Tribe Magazine",
      "Developed strong communication and leadership skills",
    ],
  },
  {
    year: "2024",
    items: [
      "Started B.E. Computer Science at NMIET, Savitribai Phule Pune University",
      "First Year CGPA: 9.05",
      "Women Techmakers Member",
      "Discovered passion for data analytics",
    ],
  },
  {
    year: "2025",
    items: [
      "ESG Analyst Intern at Excelerate",
      "Completed McKinsey Forward Program",
      "Completed Deloitte Data Analytics Job Simulation",
      "Selected for Infosys Springboard Pragati – Cohort 7",
      "5-Day AI Agents Intensive Course with Google (Kaggle)",
      "Google Startup School: Prompt to Prototype",
      "Google Analytics (GA4) Certification",
      "Data Analytics Essentials – Cisco Networking Academy",
      "Azure Data Fundamentals – Skillsoft",
      "Data Visualisation Job Simulation – Forage",
      "Advanced PowerPoint Certification (Skill Nation)",
      "Built ProdigyFlow — autonomous data workflow agent",
      "Urban Sustainability Analysis with Python EDA",
      "Created Interactive Power BI Resume",
    ],
  },
  {
    year: "2026",
    items: [
      "GenAI Exchange Hackathon (Hack2skill)",
      "Aspire Leaders Program — 2026 Cohort 1",
      "Built PocketPilot AI – AI-Powered Personal Finance Assistant",
      "Learning Power BI dashboards & DAX",
      "Preparing for Microsoft Power BI Data Analyst certification",
      "Open to opportunities in Data Analytics & Business Intelligence",
    ],
  },
];

const TimelineCard = ({ milestone, index }: { milestone: Milestone; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`flex items-start gap-4 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="stat-card flex-1"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-heading font-bold mb-3">
          {milestone.year}
        </span>
        <ul className="space-y-2">
          {milestone.items.map((item, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="hidden md:flex flex-col items-center shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-4 h-4 rounded-full gradient-accent ring-4 ring-background"
        />
        {index < milestones.length - 1 && <div className="w-0.5 h-20 bg-grid-line" />}
      </div>

      <div className="hidden md:block flex-1" />
    </div>
  );
};

const Timeline = () => (
  <div className="max-w-3xl mx-auto space-y-6 md:space-y-0">
    {milestones.map((m, i) => (
      <TimelineCard key={m.year} milestone={m} index={i} />
    ))}
  </div>
);

export default Timeline;
