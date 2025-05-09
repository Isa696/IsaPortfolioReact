import Cards from "../Cards/Cards";
import ProjectCards from "../ProjectCard/ProjectCards";
import "./MyProjects.css";
import sorteAppImg from "../../assets/images/SorteApp-screen.png";

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

    {
      id: 1,
      name: "Stockify",
      description:
        "Stockify es una aplicación web inteligente para la gestión y control de inventarios.",
      html_url:
        "https://github.com/No-Country-simulation/s20-05-n-webapp",
      homepage: "https://stock-dep-xi.vercel.app/main",
    },
  ];
  const clients = [
    {
      id: 0,
      name: "El paraiso",
      description:
        "El Paraíso es una tienda multireligiosa con productos religiosos, esotéricos, holísticos, aromáticos y de decoración.",
      html_url: "",
      homepage: "https://el-paraiso.vercel.app/",
    },

    {
      id: 1,
      name: "Herreria Pistone",
      description:
        "Herrería Pistone: estructuras metálicas, rejas, escaleras y soluciones en herrería para remodelaciones, decoración y construcción.",
      html_url:
        "",
      homepage: "https://herreriapistone.com/",
    },
  ];

  return (
    <>
      <section className="section my-work" data-section="section2" id="section2">
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

          <div className="section-heading">
            <h2>Clientes</h2>
            <div className="line-dec"></div>
            <span>Proyectos en los que he trabajado con clientes</span>
          </div>

          <div className="row">
          {(
            <div className="loader">
              <i className="fa fa-spinner fa-spin fa-3x"></i>
            </div>
          ) && clients.map((repo) => <Cards repo={repo} key={repo.id} />)}
          </div >
        </div>

          <div className="section-heading">
            <h2>Apps publicadas</h2>
            <div className="line-dec"></div>
          </div>

          <div className="row">
            <div className="app-item col-auto">
              <div className="card-item">
                <img src={sorteAppImg} alt="Sorteapp - App de sorteos" className="app-img"/>
                <div className="overlay">
                <a href="https://apkpure.com/es/sorteapp/com.isa6966.SorteApp" target="_blank"><i className="fa fa-link"></i></a>
                <span>Visitar Tienda!</span>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default MyProjects;
