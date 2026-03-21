import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ChartCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

const ChartCard = ({ title, description, children }: ChartCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="stat-card overflow-hidden"
  >
    <div className="mb-4">
      <h4 className="font-heading font-semibold text-sm text-foreground">{title}</h4>
      <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
    </div>
    <div className="w-full h-52">{children}</div>
  </motion.div>
);

export default ChartCard;
