"use client";
import React from "react";
import { motion } from "framer-motion";
import { Database, Code2, BarChart3 } from "lucide-react";

const HorizontalConnector = () => (
  <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-12 z-0">
    <svg width="48" height="4" className="overflow-visible">
      <defs>
        <linearGradient id="flow-horizontal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#FF61D2" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <line x1="0" y1="2" x2="48" y2="2" stroke="url(#flow-horizontal)" strokeWidth="3" strokeDasharray="6 6">
        <animate attributeName="stroke-dashoffset" values="12;0" dur="0.8s" repeatCount="indefinite" />
      </line>
      <circle cx="24" cy="2" r="4" fill="#FF61D2">
        <animate attributeName="cx" values="0;48" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);

const VerticalConnector = () => (
  <div className="flex lg:hidden items-center justify-center flex-shrink-0 h-12 z-0 my-2">
    <svg width="4" height="48" className="overflow-visible">
      <defs>
        <linearGradient id="flow-vertical" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#FF61D2" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <line x1="2" y1="0" x2="2" y2="48" stroke="url(#flow-vertical)" strokeWidth="3" strokeDasharray="6 6">
        <animate attributeName="stroke-dashoffset" values="12;0" dur="0.8s" repeatCount="indefinite" />
      </line>
      <circle cx="2" cy="24" r="4" fill="#FF61D2">
        <animate attributeName="cy" values="0;48" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);

export default function Skills() {
  const nodes = [
    {
      id: "extraction",
      title: "Data Foundations",
      subtitle: "Extraction & Storage",
      icon: <Database size={28} className="text-[#9D4EDD]" />,
      color: "#9D4EDD",
      shadowClass: "group-hover:shadow-[0_0_40px_-10px_#9D4EDD]",
      tags: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "SQLite"]
    },
    {
      id: "processing",
      title: "Transformation",
      subtitle: "Processing & Analytics",
      icon: <Code2 size={28} className="text-[#FF61D2]" />,
      color: "#FF61D2",
      shadowClass: "group-hover:shadow-[0_0_40px_-10px_#FF61D2]",
      tags: ["Python", "R", "Pandas", "NumPy", "Scikit-learn", "EDA", "Data Cleaning"]
    },
    {
      id: "visualization",
      title: "Business Intelligence",
      subtitle: "Visualization & Insights",
      icon: <BarChart3 size={28} className="text-[#00F0FF]" />,
      color: "#00F0FF",
      shadowClass: "group-hover:shadow-[0_0_40px_-10px_#00F0FF]",
      tags: ["Power BI", "Tableau", "Plotly", "Matplotlib"]
    }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="skills">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Skills & Expertise</h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
          The flow of data from raw storage, through rigorous transformation and modeling, to actionable business insights.
        </p>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between w-full">
        {nodes.map((node, idx) => (
          <React.Fragment key={node.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`liquid-glass p-8 flex-1 w-full max-w-sm lg:max-w-none flex flex-col group z-10 ${node.shadowClass}`}
            >
              {/* Subtle background illumination on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-2xl"
                style={{ backgroundColor: node.color }}
              />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div 
                  className="p-3 rounded-2xl liquid-button shrink-0"
                >
                  {node.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{node.title}</h3>
                  <p className="text-sm font-medium" style={{ color: node.color }}>{node.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {node.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 text-sm rounded-xl liquid-button text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Render connectors between nodes */}
            {idx < nodes.length - 1 && (
              <>
                <HorizontalConnector />
                <VerticalConnector />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
