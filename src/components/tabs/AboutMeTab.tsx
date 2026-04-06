import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Music, PenLine, Scissors, BookOpen, Code, Download, GraduationCap, Sparkles, NotebookPen, Heart, MessageCircle, Target, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import EducationTimeline from "@/components/EducationTimeline";

const hobbies = [
  { icon: <Sparkles className="h-3.5 w-3.5 text-primary" />, label: "Poetry" },
  { icon: <PenLine className="h-3.5 w-3.5 text-primary" />, label: "Writing" },
  { icon: <Music className="h-3.5 w-3.5 text-primary" />, label: "Guitar" },
  { icon: <Scissors className="h-3.5 w-3.5 text-primary" />, label: "Crocheting" },
  { icon: <BookOpen className="h-3.5 w-3.5 text-primary" />, label: "Reading" },
  { icon: <NotebookPen className="h-3.5 w-3.5 text-primary" />, label: "Journaling" },
  { icon: <Code className="h-3.5 w-3.5 text-primary" />, label: "Creative Coding" },
];

const softSkills = [
  { icon: <Sparkles className="h-3 w-3" />, label: "Creativity" },
  { icon: <Heart className="h-3 w-3" />, label: "Empathy" },
  { icon: <MessageCircle className="h-3 w-3" />, label: "Communication" },
  { icon: <Target className="h-3 w-3" />, label: "Leadership" },
  { icon: <MessageCircle className="h-3 w-3" />, label: "Public Speaking" },
];

const AboutMeTab = () => {
  const [showHobbies, setShowHobbies] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Komal Harshita_Resume.pdf";
    link.download = "Komal_Harshita_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/5 p-8 md:p-12"
      >
        {/* Background decoration */}
        <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-accent/5 blur-3xl" aria-hidden="true" />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image & Hobbies Button */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowHobbies(!showHobbies)}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/30 cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/60 transition-all shadow-xl hover:shadow-2xl"
              title="Click to discover hobbies!"
              aria-label="Profile photo - Click to see hobbies"
              aria-expanded={showHobbies}
            >
              <img src={profilePhoto} alt="Komal Harshita - Data Analytics & Business Intelligence" className="w-full h-full object-cover" />
            </motion.button>
            <p className="text-xs text-muted-foreground text-center">Click photo to discover hobbies</p>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2"
            >
              Komal Harshita
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg md:text-xl font-medium text-primary mb-2"
            >
              Aspiring Data Analyst | Data-Driven Problem Solver
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-xl"
            >
              Computer Science Engineering student specializing in data analysis, risk assessment, and transforming complex data into actionable insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <button
                onClick={handleResumeDownload}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background hover:shadow-lg active:scale-95"
                aria-label="Download resume"
              >
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </button>
              <a
                href="https://www.linkedin.com/in/komalharshita/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary/40 hover:border-primary text-foreground hover:bg-primary/10 font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background hover:shadow-lg active:scale-95"
                aria-label="Connect on LinkedIn - Opens in new tab"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Profile Tags */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-2 justify-center md:justify-start"
      >
        <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-medium border border-primary/20">
          McKinsey Forward Learner
        </span>
        <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-medium border border-primary/20">
          Infosys Springboard Pragati
        </span>
        <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-medium border border-primary/20">
          Data Enthusiast
        </span>
      </motion.div>

      {/* Hobbies & Soft Skills Section */}
      <AnimatePresence>
        {showHobbies && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="stat-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-semibold text-foreground text-base">Hobbies & Creative Interests</h3>
                <button
                  onClick={() => setShowHobbies(false)}
                  className="text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-md p-1 transition-colors"
                  aria-label="Close hobbies section"
                  aria-expanded="true"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">These hobbies keep me grounded, inspired, and connected to my creative side.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {hobbies.map((h) => (
                  <span key={h.label} className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg bg-secondary/60 text-foreground font-medium hover:bg-secondary/80 transition-colors">
                    {h.icon} {h.label}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-border">
                <h4 className="font-heading font-semibold text-foreground text-sm mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((t) => (
                    <span key={t.label} className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-full bg-primary/15 text-primary font-medium border border-primary/20">
                      {t.icon} {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Education Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="font-heading font-semibold text-foreground text-lg">Educational Journey</h2>
        </div>
        <EducationTimeline />
      </motion.div>
    </div>
  );
};

export default AboutMeTab;
