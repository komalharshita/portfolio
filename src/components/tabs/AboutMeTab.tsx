import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Music, PenLine, Scissors, BookOpen, Code, Download, GraduationCap, Sparkles, NotebookPen, Heart, MessageCircle, Target } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

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

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Profile */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="stat-card flex flex-col sm:flex-row items-center sm:items-start gap-6"
      >
        <div className="flex flex-col items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHobbies(!showHobbies)}
            className="relative w-28 h-28 rounded-full overflow-hidden shrink-0 ring-4 ring-primary/20 cursor-pointer focus:outline-none shadow-glow"
            title="Click to discover hobbies!"
          >
            <img src={profilePhoto} alt="Komal Harshita" className="w-full h-full object-cover" />
          </motion.button>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-heading font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            onClick={(e) => { e.preventDefault(); alert("Resume download coming soon!"); }}
          >
            <Download className="h-3 w-3" />
            Export Resume
          </motion.a>
        </div>

        <div className="text-center sm:text-left flex-1">
          <h2 className="font-heading text-2xl font-bold text-foreground">Komal Harshita</h2>
          <p className="text-sm font-medium text-primary mt-0.5">ESG Analyst Intern · Data Analytics & Business Intelligence</p>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-heading font-medium">
              ESG Analyst Intern @ Excelerate
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-heading font-medium">
              McKinsey Forward Learner
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-heading font-medium">
              Infosys Springboard Pragati · Cohort 7
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Hi, I'm Komal — a CSE Sophomore at NMIET exploring Data & Business Analytics. I'm currently an ESG Analyst Intern at Excelerate, building skills in SQL, Excel, Python (Pandas), and Power BI. I enjoy understanding patterns in data and solving analytical problems.
          </p>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            I learn through consistent daily practice, small exercises, and hands-on exploration. I'm actively contributing to communities and open to opportunities in Data Analytics & Business Intelligence.
          </p>
        </div>
      </motion.div>

      {/* Hobbies popup */}
      <AnimatePresence>
        {showHobbies && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="stat-card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-semibold text-foreground text-sm">Hobbies & Creative Interests</h3>
                <button onClick={() => setShowHobbies(false)} className="text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
              </div>
              <p className="text-xs text-muted-foreground mb-3">These hobbies keep me grounded, inspired, and connected to my creative side.</p>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((h) => (
                  <span key={h.label} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-secondary/60 text-foreground font-medium">
                    {h.icon} {h.label}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((t) => (
                  <span key={t.label} className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {t.icon} {t.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Education */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="stat-card">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-5 w-5 text-primary" />
          <h3 className="font-heading font-semibold text-foreground">Education</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground">Savitribai Phule Pune University (NMIET)</h4>
            <p className="text-xs text-muted-foreground">Bachelor of Engineering — Computer Science</p>
            <p className="text-xs text-muted-foreground">Sep 2024 – Jun 2028 · First Year CGPA: 9.05</p>
            <p className="text-xs text-muted-foreground/70 mt-0.5">Women Techmakers Member · McKinsey Forward Graduate</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground">Aspire Institute</h4>
            <p className="text-xs text-muted-foreground">Aspire Leaders Program — 2026 Cohort 1</p>
            <p className="text-xs text-muted-foreground">Feb 2026 – Apr 2026</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground">Symbiosis College of Arts & Commerce</h4>
            <p className="text-xs text-muted-foreground">Higher Secondary – Science · 80.67%</p>
            <p className="text-xs text-muted-foreground">Sep 2022 – Jun 2024 · Student Editor, Symbi Tribe Magazine</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground">Bharati Vidyapeeth</h4>
            <p className="text-xs text-muted-foreground">Secondary School · 92.2%</p>
            <p className="text-xs text-muted-foreground">Apr 2013 – Jul 2022 · Class 10th Board School Topper</p>
            <p className="text-xs text-muted-foreground/70 mt-0.5">Poetry Writing, Speech & Elocution Competitions</p>
          </div>
        </div>
      </motion.div>

      <p className="text-[10px] text-muted-foreground/40 italic text-center">💡 Click the avatar above to discover hobbies</p>
    </div>
  );
};

export default AboutMeTab;
