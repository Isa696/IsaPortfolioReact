function Cards({ repo }) {
    return (
            <div className="project-item col-auto">
                <div className="card-item">
                        <h4>{repo.name}</h4>
                        <span>{repo.description}</span>
                    <div className="overlay">
                        <a href={repo.html_url} target="_blank"
                        ><i className="fa fa-code"></i></a>
                        <span>Ver Codigo!</span>
                        <a href={repo.homepage} target="_blank"
                        ><i className="fa fa-link"></i></a>
                        <span>Versión final!</span>
                    </div>
                </div>
            </div>
    )
}

export default Cards;