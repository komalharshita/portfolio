import SkillChart from "@/components/SkillChart";
import ToolsDashboard from "@/components/ToolCard";
import GitHubAnalytics from "@/components/GitHubAnalytics";
import ToolsPieChart from "@/components/ToolsPieChart";

const MySkillsTab = () => (
  <div className="space-y-8 max-w-5xl">
    <div className="grid gap-6 lg:grid-cols-2">
      <SkillChart />
      <ToolsDashboard />
    </div>
    <ToolsPieChart />
    <GitHubAnalytics />
  </div>
);

export default MySkillsTab;
