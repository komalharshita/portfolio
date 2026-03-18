'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, ChevronDown } from 'lucide-react';

const CERTIFICATIONS = [
  {
    id: 1,
    name: 'Data Analytics Certificate',
    platform: 'Coursera',
    status: 'Completed',
    year: 2024,
    skills: 'Data Analysis, Excel, SQL',
    description: 'Comprehensive data analytics fundamentals and best practices',
    credentialId: 'COURSERA-DAC-2024',
    expiresIn: 'Lifetime',
  },
  {
    id: 2,
    name: 'Power BI Desktop Master',
    platform: 'Udemy',
    status: 'Completed',
    year: 2024,
    skills: 'Power BI, DAX, Visualization',
    description: 'Advanced Power BI desktop techniques and DAX programming',
    credentialId: 'UDEMY-PBDM-2024',
    expiresIn: 'Lifetime',
  },
  {
    id: 3,
    name: 'Python for Data Science',
    platform: 'Coursera',
    status: 'Completed',
    year: 2023,
    skills: 'Python, Pandas, Matplotlib',
    description: 'Python programming for data science applications',
    credentialId: 'COURSERA-PDS-2023',
    expiresIn: 'Lifetime',
  },
  {
    id: 4,
    name: 'Advanced SQL for Analytics',
    platform: 'DataCamp',
    status: 'Completed',
    year: 2023,
    skills: 'SQL, Database Design, Optimization',
    description: 'Advanced SQL query optimization and database design',
    credentialId: 'DATACAMP-ASA-2023',
    expiresIn: 'Lifetime',
  },
  {
    id: 5,
    name: 'McKinsey Forward Learner',
    platform: 'McKinsey Academy',
    status: 'Completed',
    year: 2024,
    skills: 'Business Analytics, Problem Solving',
    description: 'Strategic thinking and business analytics fundamentals',
    credentialId: 'MCKINSEY-MFL-2024',
    expiresIn: 'Lifetime',
  },
  {
    id: 6,
    name: 'Google Data Analytics Professional',
    platform: 'Google & Coursera',
    status: 'Completed',
    year: 2023,
    skills: 'Google Analytics, Data Insights',
    description: 'Professional data analytics with Google tools',
    credentialId: 'GOOGLE-DAP-2023',
    expiresIn: 'Lifetime',
  },
  {
    id: 7,
    name: 'Tableau Public Creator',
    platform: 'Tableau',
    status: 'Completed',
    year: 2024,
    skills: 'Tableau, Data Visualization',
    description: 'Advanced Tableau dashboard and visualization design',
    credentialId: 'TABLEAU-TPC-2024',
    expiresIn: 'Lifetime',
  },
  {
    id: 8,
    name: 'Excel Advanced Analytics',
    platform: 'LinkedIn Learning',
    status: 'Completed',
    year: 2023,
    skills: 'Excel, Pivot Tables, VLOOKUP',
    description: 'Advanced Excel formulas and data analysis techniques',
    credentialId: 'LINKEDIN-EAA-2023',
    expiresIn: 'Lifetime',
  },
  {
    id: 9,
    name: 'Infosys Springboard Pragati Cohort 7',
    platform: 'Infosys Foundation',
    status: 'Completed',
    year: 2024,
    skills: 'Tech Leadership, Problem Solving',
    description: 'Tech leadership and innovation program',
    credentialId: 'INFOSYS-ISPG7-2024',
    expiresIn: 'Lifetime',
  },
  {
    id: 10,
    name: 'Data Visualization with Matplotlib',
    platform: 'DataCamp',
    status: 'Completed',
    year: 2023,
    skills: 'Matplotlib, Python, Visualization',
    description: 'Professional data visualization using Python',
    credentialId: 'DATACAMP-DVM-2023',
    expiresIn: 'Lifetime',
  },
  {
    id: 11,
    name: 'Business Intelligence Fundamentals',
    platform: 'IBM & Coursera',
    status: 'Completed',
    year: 2024,
    skills: 'BI Tools, Data Warehousing',
    description: 'Business intelligence tools and data warehousing',
    credentialId: 'IBM-BIF-2024',
    expiresIn: 'Lifetime',
  },
  {
    id: 12,
    name: 'Statistics for Data Analysis',
    platform: 'DataCamp',
    status: 'Completed',
    year: 2023,
    skills: 'Statistics, Probability, Inference',
    description: 'Statistical methods for data analysis and inference',
    credentialId: 'DATACAMP-SDA-2023',
    expiresIn: 'Lifetime',
  },
  {
    id: 13,
    name: 'ESG Analytics Certification',
    platform: 'Excelerate',
    status: 'In Progress',
    year: 2024,
    skills: 'ESG Metrics, Sustainability Analytics',
    description: 'ESG data analysis and sustainability reporting',
    credentialId: 'EXCELERATE-ESG-2024',
    expiresIn: 'Nov 2024',
  },
  {
    id: 14,
    name: 'Machine Learning Basics',
    platform: 'Coursera',
    status: 'In Progress',
    year: 2024,
    skills: 'ML, Scikit-learn, Regression',
    description: 'Introduction to machine learning concepts and applications',
    credentialId: 'COURSERA-MLB-2024',
    expiresIn: 'Dec 2024',
  },
];

function AnimatedCounter({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(end / 50);
    const timer = setInterval(() => {
      setCount((prev) => (prev + increment > end ? end : prev + increment));
    }, 30);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="stat-card text-center"
    >
      <p className="text-xs mb-2" style={{ color: 'hsl(var(--muted-foreground))' }}>{label}</p>
      <p className="text-4xl font-bold" style={{ color: 'hsl(var(--primary))' }}>{count}</p>
    </motion.div>
  );
}

export default function AchievementsTab() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="max-w-5xl space-y-6">
      {/* Animated Metrics Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        <AnimatedCounter end={10} label="Programs Completed" />
        <AnimatedCounter end={14} label="Certifications Earned" />
        <AnimatedCounter end={5} label="Communities Contributed" />
      </div>

      {/* Certifications Table */}
      <div className="stat-card">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
          <h3 className="font-semibold text-lg" style={{ color: 'hsl(var(--primary))' }}>Certifications ({CERTIFICATIONS.length})</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '2px solid hsl(var(--border))' }}>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'hsl(var(--primary))' }}>Certification</th>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'hsl(var(--primary))' }}>Platform</th>
                <th className="text-center py-3 px-3 font-semibold" style={{ color: 'hsl(var(--primary))' }}>Status</th>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'hsl(var(--primary))' }}>Year</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.tr
                    key={cert.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    style={{ borderBottom: '1px solid hsl(var(--border))' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.1)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = 'transparent')
                    }
                  >
                    <td className="py-3 px-3">
                      <button
                        onClick={() =>
                          setExpandedId(expandedId === cert.id ? null : cert.id)
                        }
                        className="font-semibold flex items-center gap-2 w-full"
                        style={{ color: 'hsl(var(--primary))' }}
                      >
                        <ChevronDown
                          className="w-4 h-4 transition-transform flex-shrink-0"
                          style={{
                            transform:
                              expandedId === cert.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        />
                        {cert.name}
                      </button>
                    </td>
                    <td className="py-3 px-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {cert.platform}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor:
                            cert.status === 'Completed'
                              ? 'hsl(var(--primary) / 0.2)'
                              : 'hsl(var(--accent) / 0.2)',
                          color:
                            cert.status === 'Completed'
                              ? 'hsl(var(--primary))'
                              : 'hsl(var(--accent))',
                        }}
                      >
                        {cert.status}
                      </span>
                    </td>
                    <td className="py-3 px-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {cert.year}
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Expanded Details */}
        <AnimatePresence>
          {expandedId && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t mt-4 pt-4"
              style={{ borderColor: 'hsl(var(--border))' }}
            >
              {CERTIFICATIONS.find((c) => c.id === expandedId) && (
                <div className="grid md:grid-cols-2 gap-4 p-4 rounded-lg" style={{ backgroundColor: 'hsl(var(--secondary) / 0.1)' }}>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>Description</h4>
                    <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {CERTIFICATIONS.find((c) => c.id === expandedId).description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>Skills Acquired</h4>
                    <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {CERTIFICATIONS.find((c) => c.id === expandedId).skills}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>Credential ID</h4>
                    <p className="text-sm font-mono" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {CERTIFICATIONS.find((c) => c.id === expandedId).credentialId}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>Valid Until</h4>
                    <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {CERTIFICATIONS.find((c) => c.id === expandedId).expiresIn}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
