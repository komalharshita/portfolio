import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Skills from "../components/Home/Skills";
import Experience from "../components/Home/Experience";
import ProjectsPreview from "../components/Home/ProjectsPreview";
import DashboardGallery from "../components/Home/DashboardGallery";
import Contact from "../components/Home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsPreview />
      <DashboardGallery />
      <Contact />
    </>
  );
}

