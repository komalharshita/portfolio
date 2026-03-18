import { motion } from "framer-motion";
import VisualizationGrid from "@/components/VisualizationGrid";
import dashboard1 from "@/assets/dashboard1.png";
import dashboard2 from "@/assets/dashboard2.png";
import dashboard3 from "@/assets/dashboard3.png";
import dashboard4 from "@/assets/dashboard4.png";

const dashboards = [
  { src: dashboard1, title: "Exploratory Data Analysis" },
  { src: dashboard2, title: "Sales and Profit Dashboard" },
  { src: dashboard3, title: "IMDB Movies Dashboard" },
  { src: dashboard4, title: "Sales Analytics Dashboard" },
];

const VisualizationsTab = () => (
  <div className="space-y-10">
    <div>
      <h3 className="font-heading font-semibold text-foreground text-lg mb-4">Dashboard Showcase</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {dashboards.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="stat-card p-2 overflow-hidden group"
          >
            <div className="rounded-lg overflow-hidden">
              <img src={d.src} alt={d.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <p className="text-sm font-heading font-semibold text-foreground mt-3 px-2">{d.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <VisualizationGrid />
  </div>
);

export default VisualizationsTab;
