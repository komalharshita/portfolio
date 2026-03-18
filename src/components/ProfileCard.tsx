import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, X, Music, PenLine, Scissors, Coffee, BookOpen, Pen } from "lucide-react";
import avatarImg from "@/assets/p_laptop.png";

const hobbies = [
  { icon: PenLine, label: "Poetry" },
  { icon: Pen, label: "Writing" },
  { icon: Music, label: "Guitar" },
  { icon: Scissors, label: "Crocheting" },
  { icon: BookOpen, label: "Reading" },
  { icon: Coffee, label: "Journaling" },
];

const ProfileCard = () => {
  const [showHobbies, setShowHobbies] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="stat-card flex flex-col sm:flex-row items-center sm:items-start gap-6 relative"
    >
      {/* Avatar */}
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowHobbies(!showHobbies)}
          className="w-24 h-24 rounded-full overflow-hidden shrink-0 ring-4 ring-primary/10 cursor-pointer focus:outline-none focus:ring-primary/30 transition-all"
          title="Click to discover hobbies!"
        >
          <img src={avatarImg} alt="Komal Harshita" className="w-full h-full object-cover" />
        </motion.button>

        <AnimatePresence>
          {showHobbies && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -8 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-20 w-56 p-4 rounded-xl border border-border bg-card shadow-glow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-heading font-bold text-primary uppercase tracking-wider">Hobbies</span>
                <button onClick={() => setShowHobbies(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="space-y-2">
                {hobbies.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <h.icon className="h-3.5 w-3.5 text-primary/60" />
                    {h.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center sm:text-left">
        <h2 className="font-heading text-xl font-bold text-foreground">Komal Harshita</h2>
        <p className="text-sm font-medium text-primary mt-0.5">ESG Analyst Intern · Data Analytics & BI</p>
        <p className="text-xs text-muted-foreground mt-1">CSE Sophomore · NMIET Pune · CGPA: 9.05</p>
        <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-heading font-medium">McKinsey Forward Learner</span>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
          "I enjoy exploring data, identifying patterns, and building dashboards that turn information into insights. I learn through consistent daily practice, small exercises, and hands-on exploration."
        </p>
        <p className="text-[10px] text-muted-foreground/50 mt-2 italic">💡 Click the avatar to discover hobbies</p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
