import { motion } from "framer-motion";
import { GraduationCap, BookMarked, Users, Zap } from "lucide-react";

interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  startDate: string;
  endDate: string;
  achievement?: string;
  highlights?: string[];
  icon: React.ReactNode;
  order: number;
}

const educationData: EducationEntry[] = [
  {
    id: "bharati",
    institution: "Bharati Vidyapeeth",
    degree: "Secondary School · 92.2%",
    duration: "Apr 2013 – Jul 2022",
    startDate: "2013",
    endDate: "2022",
    achievement: "Class 10th Board School Topper",
    highlights: ["Poetry Writing", "Speech & Elocution Competitions"],
    icon: <BookMarked className="h-5 w-5" />,
    order: 1,
  },
  {
    id: "symbiosis",
    institution: "Symbiosis College of Arts & Commerce",
    degree: "Higher Secondary – Science · 80.67%",
    duration: "Sep 2022 – Jun 2024",
    startDate: "2022",
    endDate: "2024",
    achievement: undefined,
    highlights: ["Student Editor, Symbi Tribe Magazine"],
    icon: <Users className="h-5 w-5" />,
    order: 2,
  },
  {
    id: "aspire",
    institution: "Aspire Institute",
    degree: "Aspire Leaders Program — Cohort 1",
    duration: "Feb 2026 – Apr 2026",
    startDate: "2026",
    endDate: "2026",
    achievement: undefined,
    highlights: [],
    icon: <Zap className="h-5 w-5" />,
    order: 3,
  },
  {
    id: "nmiet",
    institution: "Savitribai Phule Pune University (NMIET)",
    degree: "Bachelor of Engineering — Computer Science",
    duration: "Sep 2024 – Jun 2028",
    startDate: "2024",
    endDate: "2028",
    achievement: "First Year CGPA: 9.05",
    highlights: ["Women Techmakers Member", "McKinsey Forward Graduate"],
    icon: <GraduationCap className="h-5 w-5" />,
    order: 4,
  },
];

const EducationTimeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical line connector */}
        <div
          className="absolute left-5 md:left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 to-accent/40 hidden md:block"
          aria-hidden="true"
        />

        {/* Education entries */}
        <div className="space-y-6 md:space-y-8">
          {educationData.map((entry, index) => (
            <motion.div
              key={entry.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline dot and connector for mobile */}
              <div className="flex gap-4 md:gap-0">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    whileHover={{ scale: 1.15 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/90 to-accent/70 border-4 border-background flex items-center justify-center shadow-md hover:shadow-lg transition-all flex-shrink-0 md:absolute md:left-1 md:top-2"
                  >
                    <div className="text-primary-foreground">
                      {entry.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ translateX: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex-1 stat-card md:ml-16 cursor-default group"
                >
                  <div className="absolute top-0 left-0 w-1 h-8 bg-gradient-to-b from-primary/50 to-transparent rounded-r-full md:hidden" aria-hidden="true" />

                  {/* Year badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium border border-primary/30">
                      {entry.startDate}
                      {entry.startDate !== entry.endDate && ` – ${entry.endDate}`}
                    </span>
                  </div>

                  {/* Institution name */}
                  <h3 className="font-heading font-bold text-foreground text-base md:text-lg mb-1 group-hover:text-primary transition-colors">
                    {entry.institution}
                  </h3>

                  {/* Degree/Program */}
                  <p className="text-sm font-medium text-primary mb-1">
                    {entry.degree}
                  </p>

                  {/* Duration */}
                  <p className="text-xs text-muted-foreground mb-3">
                    {entry.duration}
                  </p>

                  {/* Achievement highlight */}
                  {entry.achievement && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="text-xs font-semibold text-primary/90 mb-2 flex items-center gap-1.5"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {entry.achievement}
                    </motion.p>
                  )}

                  {/* Highlights/Activities */}
                  {entry.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                      {entry.highlights.map((highlight, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: index * 0.1 + 0.6 + idx * 0.05,
                          }}
                          className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-foreground/80 font-medium"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline info text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xs text-muted-foreground/70 text-center pt-4"
      >
        Educational journey from 2013 to present, spanning 12 years of learning and growth
      </motion.p>
    </motion.div>
  );
};

export default EducationTimeline;
