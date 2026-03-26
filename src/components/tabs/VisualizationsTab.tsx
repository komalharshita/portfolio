import { motion } from "framer-motion";
import VisualizationGrid from "@/components/VisualizationGrid";
import ImageCarousel from "@/components/ImageCarousel";
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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-heading font-semibold text-foreground text-lg mb-4">Dashboard Showcase</h3>
      <ImageCarousel images={dashboards} autoSlideInterval={4000} />
    </motion.div>
    <VisualizationGrid />
  </div>
);

export default VisualizationsTab;
