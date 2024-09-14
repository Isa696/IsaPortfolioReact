import Cards from "../Cards/Cards";
import ProjectCards from "../ProjectCard/ProjectCards";
import "./MyProjects.css";

function MyProjects() {
  const collab = {
    id: 0,
    name: "ChillRoom",
    description:
      "Web chat bot conectado a la IA de Gemini, tiene 6 personalidades. Proyecto que realizamos durante la codicon 2024",
    html_url: "https://github.com/haderrenteria13/chillroom",
    homepage: "",
  };

  return (
    <>
      <section className="section my-work" data-section="section2">
        <div className="container">
          <div className="section-heading">
            <h2>Proyectos</h2>
            <div className="line-dec"></div>
            <span>Aqui puedes ver mis proyectos</span>
          </div>

          <ProjectCards />

          <div className="section-heading">
            <h2>Colaboraciones</h2>
            <div className="line-dec"></div>
            <span>Proyectos en los que he colaborado</span>
          </div>

          <div className="row">
          <Cards repo={collab} key={collab.id} />
          </div>

        </div>
      </section>
    </>
  );
}

export default MyProjects;
