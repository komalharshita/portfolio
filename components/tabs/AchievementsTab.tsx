'use client';

import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  { name: 'Data Analytics Certificate', platform: 'Coursera', skills: 'Data Analysis, Excel, SQL', status: 'Completed' },
  { name: 'Power BI Desktop Master', platform: 'Udemy', skills: 'Power BI, DAX, Visualization', status: 'Completed' },
  { name: 'Python for Data Science', platform: 'Coursera', skills: 'Python, Pandas, Matplotlib', status: 'Completed' },
  { name: 'Advanced SQL for Analytics', platform: 'DataCamp', skills: 'SQL, Database Design, Optimization', status: 'Completed' },
];

export default function AchievementsTab() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: 'Programs Completed', value: '10' },
          { label: 'Certifications Earned', value: '4' },
          { label: 'Communities Contributed', value: '5' },
        ].map((metric) => (
          <div key={metric.label} className="stat-card text-center">
            <p className="text-xs mb-2" style={{ color: 'hsl(var(--muted-foreground))' }}>{metric.label}</p>
            <p className="text-3xl font-bold" style={{ color: 'hsl(var(--primary))' }}>{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="stat-card">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
          <h3 className="font-semibold text-lg" style={{ color: 'hsl(var(--primary))' }}>Certifications</h3>
        </div>
        <div className="space-y-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="rounded-lg p-4 transition-all" style={{ border: '1px solid hsl(var(--border))', backgroundColor: 'transparent' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                    {cert.name}
                  </h4>
                  <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{cert.platform}</p>
                </div>
              </div>
              <p className="text-xs" style={{ color: 'hsl(var(--accent))' }}>{cert.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
