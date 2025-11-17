"use client"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Library Management System",
      description: "Developed a console-based Library Management System using Python and SQL (SQLite)",
      focus: ["Data Cleaning", "Data Analytics"],
      github: "github.com/komalharshita/library-management",
    },
    {
      title: "Algorithm Visualization Tool",
      description: "Contributed to a Python tool for visualizing sorting algorithms",
      focus: ["Python (Pandas)", "Data Visualization"],
      github: "github.com/komalharshita/algorithm-visualizer",
    },
    {
      title: "Kaggle Housing Prices Prediction",
      description: "Utilized Python with scikit-learn and Pandas for predictive modeling",
      focus: ["Data Cleaning", "Predictive Modeling"],
      github: "github.com/komalharshita/kaggle-housing-prices",
    },
    {
      title: "Spotify Data Exploration",
      description: "Analyzed public Spotify dataset creating 10+ insightful visualizations",
      focus: ["Data Visualization", "Data Analytics"],
      github: "github.com/komalharshita/spotify-data-analysis",
    },
  ]

  return (
    <section id="key-projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-serif font-bold mb-12 text-foreground">Key Projects & Applications</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="glass-effect p-8 rounded-3xl border border-white/40 hover:shadow-lg hover:shadow-[#ff4da6]/10 transition-all">
            <h3 className="text-2xl font-semibold text-accent mb-3">{project.title}</h3>
            <p className="text-foreground/90 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.focus.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-[#ff4da6]/20 text-accent text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={`https://${project.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary font-semibold inline-flex items-center gap-2"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
