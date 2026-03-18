'use client';

export default function MySkillsTab() {
  const skills = [
    { name: 'SQL', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Excel', level: 95 },
    { name: 'Power BI', level: 85 },
    { name: 'Data Analysis', level: 88 },
    { name: 'Business Analytics', level: 82 },
  ];

  const tools = [
    { name: 'Tableau', category: 'Visualization' },
    { name: 'Looker', category: 'BI' },
    { name: 'Google Sheets', category: 'Data' },
    { name: 'Jupyter', category: 'Python' },
    { name: 'Git', category: 'Version Control' },
    { name: 'Pandas', category: 'Python' },
  ];

  return (
    <div className="space-y-6">
      <div className="stat-card">
        <h3 className="font-semibold mb-6 text-lg" style={{ color: 'hsl(var(--primary))' }}>Core Technical Skills</h3>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-sm">{skill.name}</span>
                <span className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="stat-card">
        <h3 className="font-semibold mb-6 text-lg" style={{ color: 'hsl(var(--primary))' }}>Tools & Technologies</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <div key={tool.name} className="glass-card p-4">
              <h4 className="font-semibold mb-1">{tool.name}</h4>
              <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{tool.category}</p>
              <p className="text-xs mt-1" style={{ color: 'hsl(var(--accent))' }}>Proficient</p>
            </div>
          ))}
        </div>
      </div>

      <div className="stat-card">
        <h3 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Soft Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Problem Solving', 'Communication', 'Leadership', 'Creativity', 'Team Work', 'Adaptability'].map((skill) => (
            <div key={skill} className="rounded px-3 py-2 text-sm text-center" style={{ backgroundColor: 'hsl(var(--secondary) / 0.2)' }}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
