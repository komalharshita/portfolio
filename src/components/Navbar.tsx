import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, BarChart3 } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Overview", path: "/overview" },
  { label: "Projects", path: "/projects" },
  { label: "Visualizations", path: "/visualizations" },
  { label: "Certifications", path: "/certifications" },
  { label: "Learning", path: "/learning" },
  { label: "SQL Lab", path: "/sql-lab" },
  { label: "Creative", path: "/creative" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-primary">
          <BarChart3 className="h-5 w-5" />
          <span>KH</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                location.pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-card p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                location.pathname === item.path
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
