import projectsData from "../data/projectsData";
import Card from "../components/Card";
import "../styles/pages/projects.css";

const Projects = () => (
  <section className="projects">
    <h2>My Projects</h2>
    <div className="projects-grid">
      {projectsData.map((proj) => (
        <Card key={proj.id} {...proj} />
      ))}
    </div>
  </section>
);

export default Projects;
