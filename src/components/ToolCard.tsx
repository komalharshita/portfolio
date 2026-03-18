import { ReactNode } from "react";
import { motion } from "framer-motion";
import { FileSpreadsheet, BarChart3, Github, StickyNote, Sheet, Code, PieChart, Palette } from "lucide-react";

interface ToolCardProps {
  name: string;
  proficiency: number;
  icon: ReactNode;
}

const tools: ToolCardProps[] = [
  { name: "Excel", proficiency: 85, icon: <FileSpreadsheet className="h-5 w-5 text-primary" /> },
  { name: "Power BI", proficiency: 60, icon: <BarChart3 className="h-5 w-5 text-primary" /> },
  { name: "GitHub", proficiency: 94, icon: <Github className="h-5 w-5 text-primary" /> },
  { name: "Notion", proficiency: 97, icon: <StickyNote className="h-5 w-5 text-primary" /> },
  { name: "Google Sheets", proficiency: 65, icon: <Sheet className="h-5 w-5 text-primary" /> },
  { name: "VS Code", proficiency: 95, icon: <Code className="h-5 w-5 text-primary" /> },
  { name: "Tableau", proficiency: 45, icon: <PieChart className="h-5 w-5 text-primary" /> },
  { name: "Canva", proficiency: 90, icon: <Palette className="h-5 w-5 text-primary" /> },
];

const ToolCard = ({ name, proficiency, icon }: ToolCardProps) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="stat-card text-center cursor-default"
  >
    <div className="flex justify-center mb-2">{icon}</div>
    <h4 className="font-heading font-semibold text-sm text-foreground">{name}</h4>
    <div className="mt-3 h-1.5 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${proficiency}%` }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="h-full rounded-full gradient-accent"
      />
    </div>
    <p className="mt-1.5 text-xs text-muted-foreground font-heading">{proficiency}%</p>
  </motion.div>
);

const ToolsDashboard = () => (
  <div>
    <h3 className="font-heading font-semibold text-foreground mb-4">Software & Tools</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {tools.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.05 }}
        >
          <ToolCard {...t} />
        </motion.div>
      ))}
    </div>
  </div>
);

export { ToolCard };
export default ToolsDashboard;
