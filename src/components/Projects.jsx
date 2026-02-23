import projectImage from '../assets/project.jpg';

function Projects() {
    const projects = [1,2,3,4,5,6];

    return (
        <section className="projects" id="projects" >
            <h2>Mes projets</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project}>
                        <img src={projectImage} alt="project"/>
                        <h3>Projet {project}</h3>
                        <p>Description du projet {project}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;