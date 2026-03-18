import PageLayout from "@/components/PageLayout";
import ProjectsTable from "@/components/ProjectsTable";

const Projects = () => (
  <PageLayout title="Projects" subtitle="A database of my data analytics projects.">
    <ProjectsTable />
  </PageLayout>
);

export default Projects;
