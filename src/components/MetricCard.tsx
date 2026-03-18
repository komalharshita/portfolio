import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
}

const MetricCard = ({ label, value, icon }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="stat-card text-center"
  >
    {icon && <div className="mb-2 flex justify-center text-primary/70">{icon}</div>}
    <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{value}</p>
    <p className="mt-1 text-xs text-muted-foreground">{label}</p>
  </motion.div>
);

export default MetricCard;
