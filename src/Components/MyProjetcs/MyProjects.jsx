import Cards from "../Cards/Cards";
import ProjectCards from "../ProjectCard/ProjectCards";
import "./MyProjects.css";

function MyProjects() {
  const collab = [
    {
      id: 0,
      name: "ChillRoom",
      description:
        "Web chat bot conectado a la IA de Gemini, tiene 6 personalidades. Proyecto que realizamos durante la codicon 2024",
      html_url: "https://github.com/haderrenteria13/chillroom",
      homepage: "",
    },

    {
      id: 1,
      name: "RecetApp",
      description:
        "web de recetario, desarrollada en un equipo multidisciplinario durante una simulación laboral de No Country",
      html_url:
        "https://github.com/No-Country-simulation/C20-48-t-python-react",
      homepage: "https://recetapp-no-country.onrender.com/",
    },
  ];

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
          {(
            <div className="loader">
              <i className="fa fa-spinner fa-spin fa-3x"></i>
            </div>
          ) && collab.map((repo) => <Cards repo={repo} key={repo.id} />)}
          </div >
        </div>
      </section>
    </>
  );
}

export default MyProjects;
