import PageLayout from "@/components/PageLayout";
import ProfileCard from "@/components/ProfileCard";
import SkillChart from "@/components/SkillChart";
import ToolsDashboard from "@/components/ToolCard";

const Overview = () => (
  <PageLayout title="Overview" subtitle="A personal analytics dashboard.">
    <div className="space-y-8">
      <ProfileCard />
      <div className="grid gap-6 lg:grid-cols-2">
        <SkillChart />
        <div className="space-y-6">
          <ToolsDashboard />
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Overview;
