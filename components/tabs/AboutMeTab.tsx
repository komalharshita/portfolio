'use client';

export default function AboutMeTab() {
  return (
    <div className="space-y-6">
      <div className="stat-card">
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'hsl(var(--primary))' }}>Komal Harshita</h2>
        <p className="mb-4" style={{ color: 'hsl(var(--accent))' }}>CSE Sophomore | ESG Analyst Intern | Data Analytics Enthusiast</p>
        <p className="leading-relaxed mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
          Passionate about transforming complex data into actionable insights. Currently interning as an ESG Analyst with expertise in SQL, Python, Power BI, and business intelligence.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Data Analytics', 'SQL', 'Python', 'Power BI', 'Excel'].map((skill) => (
            <span key={skill} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Computer Science Engineering</h4>
              <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>Currently in 2nd Year</p>
            </div>
            <div>
              <h4 className="font-semibold">GPA: 8.2/10</h4>
              <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>Strong academic foundation</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Current Role</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">ESG Analyst Intern</h4>
              <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>Data Analytics & Sustainability</p>
            </div>
            <div>
              <h4 className="font-semibold">Key Focus Areas</h4>
              <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>ESG metrics, Data analysis, BI</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <h3 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Interests & Hobbies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Data Visualization', 'Business Analytics', 'Machine Learning', 'SQL Optimization', 'Dashboard Design', 'Statistics'].map((interest) => (
            <div key={interest} className="rounded px-3 py-2 text-sm text-center" style={{ backgroundColor: 'hsl(var(--secondary) / 0.2)' }}>
              {interest}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
