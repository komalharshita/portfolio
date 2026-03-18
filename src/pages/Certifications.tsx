import PageLayout from "@/components/PageLayout";
import MetricCard from "@/components/MetricCard";
import CertificationTable from "@/components/CertificationTable";
import { Award, Layers, Sparkles } from "lucide-react";

const Certifications = () => (
  <PageLayout title="Experience & Achievements" subtitle="Professional development, certifications, and learning milestones.">
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard label="Total Certifications" value={14} icon={<Award className="h-5 w-5" />} />
        <MetricCard label="Platforms" value={10} icon={<Layers className="h-5 w-5" />} />
        <MetricCard label="Skills Gained" value="30+" icon={<Sparkles className="h-5 w-5" />} />
      </div>

      <div>
        <h3 className="font-heading font-semibold text-foreground mb-3">Certification Database</h3>
        <CertificationTable />
      </div>
    </div>
  </PageLayout>
);

export default Certifications;
