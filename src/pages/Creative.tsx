import { motion } from "framer-motion";
import { PenLine, BookOpen, Music, Scissors, Heart, Sparkles, Code, Notebook } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const creativeCards = [
  {
    title: "Poetry",
    description: "Short reflective poems exploring patterns in life and data — where numbers meet metaphors.",
    icon: PenLine,
    gradient: "from-primary/20 to-accent/20",
    pieces: [
      { name: "Rows & Reflections", snippet: "In every dataset hides a story untold…" },
      { name: "Null Values", snippet: "Sometimes the gaps say more than the numbers…" },
      { name: "Query of the Heart", snippet: "SELECT courage FROM self WHERE doubt IS NULL…" },
    ],
  },
  {
    title: "Writing",
    description: "Blog-style thoughts about the journey of learning data analytics. Student Editor of the Symbi Tribe Magazine.",
    icon: BookOpen,
    gradient: "from-lavender/30 to-primary/10",
    pieces: [
      { name: "Why I Chose Data", snippet: "It started with a spreadsheet and a curious question…" },
      { name: "Learning in Public", snippet: "Sharing mistakes is the fastest way to grow…" },
      { name: "Essay Competitions", snippet: "Active participant in creative writing events." },
    ],
  },
  {
    title: "Music",
    description: "Guitar as a creative outlet — finding rhythm between code sessions and data wrangling.",
    icon: Music,
    gradient: "from-dusty-pink/30 to-pastel-pink/30",
    pieces: [
      { name: "Acoustic Sessions", snippet: "Fingerpicking patterns after debugging sessions." },
      { name: "Learning Covers", snippet: "Currently learning indie folk and soft rock." },
    ],
  },
  {
    title: "Crocheting",
    description: "Handmade creations that keep the imagination alive between data projects.",
    icon: Scissors,
    gradient: "from-pastel-pink/30 to-lavender/20",
    pieces: [
      { name: "Amigurumi Collection", snippet: "Handmade amigurumi and cozy accessories." },
      { name: "Color Theory in Yarn", snippet: "Applying data-viz color principles to crochet." },
    ],
  },
  {
    title: "Reading & Journaling",
    description: "Daily journaling practice and reading that fuels curiosity and personal growth.",
    icon: Notebook,
    gradient: "from-primary/15 to-dusty-pink/20",
    pieces: [
      { name: "Daily Journal", snippet: "Reflections on growth, learning, and ideas." },
      { name: "Book Notes", snippet: "Insights from analytics and self-development reads." },
    ],
  },
  {
    title: "Creative Coding",
    description: "Blending code with creativity — building beautiful things with technology.",
    icon: Code,
    gradient: "from-lavender/25 to-accent/15",
    pieces: [
      { name: "Portfolio Experiments", snippet: "Interactive web designs and animations." },
      { name: "Data Art", snippet: "Turning datasets into abstract visual compositions." },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Creative = () => (
  <PageLayout title="Creative Corner" subtitle="Where curiosity meets creativity — the personality behind the data.">
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="stat-card flex items-center gap-4 bg-gradient-to-r from-primary/5 to-accent/5"
      >
        <Heart className="h-6 w-6 text-accent shrink-0" />
        <div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            These hobbies keep me grounded, inspired, and connected to my creative side. Data tells stories, but so does creativity.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {["🌟 Creativity", "💗 Empathy", "🗣 Communication", "🎯 Leadership"].map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {creativeCards.map((card) => (
          <motion.div
            key={card.title}
            variants={item}
            whileHover={{ y: -6, scale: 1.01 }}
            className={`stat-card group cursor-default overflow-hidden relative bg-gradient-to-br ${card.gradient}`}
          >
            <Sparkles className="absolute top-4 right-4 h-4 w-4 text-primary/10 group-hover:text-primary/30 transition-colors duration-500" />

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-card/80 flex items-center justify-center shadow-sm">
                <card.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground">{card.title}</h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.description}</p>

            <div className="space-y-2">
              {card.pieces.map((piece) => (
                <motion.div
                  key={piece.name}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-2 p-2 rounded-lg hover:bg-card/60 transition-colors"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <div>
                    <p className="text-xs font-heading font-semibold text-foreground">{piece.name}</p>
                    <p className="text-xs text-muted-foreground italic">{piece.snippet}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </PageLayout>
);

export default Creative;
