import { useNavigate } from "react-router-dom";

const metrics = [
  { metric: "Projects Built", value: "5+", link: "/projects" },
  { metric: "Dashboards Created", value: "4", link: "/visualizations" },
  { metric: "SQL Queries Written", value: "500+", link: "/sql-lab" },
  { metric: "Certifications & Programs", value: "6", link: "/certifications" },
  { metric: "Currently Learning", value: "Power BI", link: "/learning" },
  { metric: "Practice Exercises", value: "50+", link: "/overview" },
  { metric: "First Year CGPA", value: "9.05", link: "/overview" },
];

const MetricGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="border border-grid-line rounded-lg overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="excel-cell excel-cell-header">Metric</div>
        <div className="excel-cell excel-cell-header">Value</div>
      </div>
      {metrics.map((row, i) => (
        <div
          key={i}
          onClick={() => navigate(row.link)}
          className="grid grid-cols-2 cursor-pointer group"
        >
          <div className="excel-cell border-t-0 group-hover:bg-primary/5 text-sm font-medium text-foreground">
            {row.metric}
          </div>
          <div className="excel-cell border-t-0 group-hover:bg-primary/5 text-sm text-primary font-semibold">
            {row.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricGrid;
