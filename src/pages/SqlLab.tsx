import PageLayout from "@/components/PageLayout";
import SQLTerminal from "@/components/SQLTerminal";

const SqlLab = () => (
  <PageLayout title="SQL Playground" subtitle="Run queries and explore portfolio data.">
    <div className="max-w-2xl">
      <SQLTerminal />
    </div>
  </PageLayout>
);

export default SqlLab;
