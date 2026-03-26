import { ReactNode } from "react";
import { motion } from "framer-motion";
import { FileSpreadsheet, BarChart3, Github, StickyNote, Sheet, Code, PieChart, Palette } from "lucide-react";

interface ToolCardProps {
  name: string;
  proficiency: number;
  icon: ReactNode;
  gradient?: string;
}

const tools: ToolCardProps[] = [
  { name: "Excel", proficiency: 85, icon: <FileSpreadsheet className="h-5 w-5 text-primary" />, gradient: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)" },
  { name: "Power BI", proficiency: 60, icon: <BarChart3 className="h-5 w-5 text-primary" />, gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)" },
  { name: "GitHub", proficiency: 94, icon: <Github className="h-5 w-5 text-primary" />, gradient: "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)" },
  { name: "Notion", proficiency: 97, icon: <StickyNote className="h-5 w-5 text-primary" />, gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)" },
  { name: "Google Sheets", proficiency: 65, icon: <Sheet className="h-5 w-5 text-primary" />, gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)" },
  { name: "VS Code", proficiency: 95, icon: <Code className="h-5 w-5 text-primary" />, gradient: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)" },
  { name: "Tableau", proficiency: 45, icon: <PieChart className="h-5 w-5 text-primary" />, gradient: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)" },
  { name: "Canva", proficiency: 90, icon: <Palette className="h-5 w-5 text-primary" />, gradient: "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)" },
];

const ToolCard = ({ name, proficiency, icon, gradient }: ToolCardProps) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="stat-card text-center cursor-default relative overflow-hidden group"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" 
      style={{ background: gradient }} />
    <div className="relative z-10">
      <div className="flex justify-center mb-2">{icon}</div>
      <h4 className="font-heading font-semibold text-sm text-foreground">{name}</h4>
      <div className="mt-3 h-2 rounded-full bg-secondary/50 overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${proficiency}%` }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-full rounded-full"
          style={{ background: gradient }}
        />
      </div>
      <p className="mt-1.5 text-xs text-muted-foreground font-heading">{proficiency}%</p>
    </div>
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
