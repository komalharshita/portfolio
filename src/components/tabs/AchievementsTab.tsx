import { motion } from "framer-motion";
import MetricCard from "@/components/MetricCard";
import CertificationTable from "@/components/CertificationTable";
import { Award, Layers, Sparkles, Users } from "lucide-react";

const AchievementsTab = () => (
  <div className="space-y-8 max-w-4xl">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <MetricCard label="Programs Completed" value={10} icon={<Award className="h-5 w-5" />} />
      <MetricCard label="Certifications Earned" value={14} icon={<Layers className="h-5 w-5" />} />
      <MetricCard label="Communities Contributed To" value={5} icon={<Users className="h-5 w-5" />} />
    </div>

    <div>
      <h3 className="font-heading font-semibold text-foreground mb-3">Achievements Database</h3>
      <CertificationTable />
    </div>
  </div>
);

export default AchievementsTab;
