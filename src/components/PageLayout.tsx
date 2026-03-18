import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const PageLayout = ({ children, title, subtitle }: { children: ReactNode; title?: string; subtitle?: string }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <AnimatePresence mode="wait">
      <motion.main
        key={title}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-1"
      >
        {title && (
          <div className="container pt-12 pb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">{title}</h1>
            {subtitle && <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>}
            <div className="mt-4 h-0.5 w-16 gradient-accent rounded-full" />
          </div>
        )}
        <div className="container pb-16">{children}</div>
      </motion.main>
    </AnimatePresence>
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      <p>© 2026 Komal Harshita · Built with 💜</p>
      <p className="mt-1 text-xs text-muted-foreground/40 cursor-default" title="Curiosity is the best data tool.">
        ✦ Keep exploring ✦
      </p>
    </footer>
  </div>
);

export default PageLayout;
