import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";

interface OtherProject {
  id: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  github: string;
  liveLink?: string;
  stars?: number;
  badge?: string;
}

const otherProjectsData: OtherProject[] = [
  {
    id: "fempreneuer-launchpad",
    name: "Fempreneuer Launchpad",
    description: "A platform empowering female entrepreneurs with resources, mentorship, and funding opportunities to launch and scale their ventures.",
    category: "Web Development",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/komalharshita/fempreneuer-launchpad",
    stars: 5,
    badge: "SHEBuilds Lovable'26",
  },
  {
    id: "devpath",
    name: "DevPath",
    description: "Comprehensive learning platform guiding developers through structured paths for skill development and career progression in software engineering.",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    github: "https://github.com/komalharshita/devpath",
    stars: 3,
    badge: "GSSOC '26",
  },
];

const OtherProjects = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Other Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {otherProjectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative h-full overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card to-secondary/30 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {/* Background decoration */}
              <div
                className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-all"
                aria-hidden="true"
              />

              {/* Glassmorphism Badge */}
              {project.badge && (
                <div className="absolute top-4 left-4 z-20 -rotate-12">
                  <div className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:bg-white/30 transition-all">
                    {project.badge}
                  </div>
                </div>
              )}

              <div className="relative z-10">
                {/* Category Badge */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-accent/20 text-accent border-accent/30">
                    {project.category}
                  </span>
                  {project.stars && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                      {project.stars}
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60"
                    aria-label={`View ${project.name} on GitHub - Opens in new tab`}
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent/60"
                      aria-label={`View ${project.name} live - Opens in new tab`}
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
