import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
  { label: "Overview", path: "/overview" },
  { label: "Projects", path: "/projects" },
  { label: "Visualizations", path: "/visualizations" },
  { label: "Certifications", path: "/certifications" },
  { label: "Learning", path: "/learning" },
  { label: "SQL Lab", path: "/sql-lab" },
  { label: "Creative", path: "/creative" },
];

const SheetTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex items-center gap-0 border border-grid-line rounded-b-lg overflow-x-auto bg-muted/40">
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => navigate(tab.path)}
          className={`sheet-tab whitespace-nowrap ${
            location.pathname === tab.path ? "sheet-tab-active" : ""
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SheetTabs;
