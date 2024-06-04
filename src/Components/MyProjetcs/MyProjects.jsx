import ProjectCards from "../ProjectCard/ProjectCards"
import './MyProjects.css'

function MyProjects() {
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
                </div>
            </section>

        </>
    )
}

export default MyProjects