import { motion } from "framer-motion";
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

const dashboardGallery = [
  { src: dashboard1, title: "Exploratory Data Analysis" },
  { src: dashboard2, title: "Sales and Profit Dashboard" },
  { src: dashboard3, title: "IMDB Movies Dashboard" },
  { src: dashboard4, title: "Sales Analytics Dashboard" },
];

const VisualizationsTab = () => (
  <div className="space-y-10">
    {/* Carousel Section */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-heading font-semibold text-foreground text-lg mb-4">Interactive Dashboard Carousel</h3>
      <ImageCarousel images={dashboards} autoSlideInterval={4000} />
    </motion.div>

    {/* 2x2 Gallery Section */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4"
    >
      <h3 className="font-heading font-semibold text-foreground text-lg">Dashboard Gallery</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dashboardGallery.map((dashboard, index) => (
          <motion.div
            key={dashboard.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group relative overflow-hidden rounded-lg border border-border/50 bg-card hover:border-primary/50 transition-colors"
          >
            <div className="aspect-video w-full overflow-hidden bg-secondary/30 flex items-center justify-center">
              <img
                src={dashboard.src}
                alt={dashboard.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-3 bg-card border-t border-border/50">
              <p className="text-sm font-heading font-semibold text-foreground">{dashboard.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default VisualizationsTab;
