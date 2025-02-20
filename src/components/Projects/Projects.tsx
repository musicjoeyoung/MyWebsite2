import "./Projects.scss"

import projects from "../../assets/data/projects.json"
import { useState } from "react"

interface Project {
    title: string;
    description: string;
    img_url: string;
    url: string;
    repo_url: string;
}

const Projects: React.FC = () => {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = (): void => {
        setTimeout(() => setShowAll(!showAll), 50);

        if (showAll) {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <div className={"projects__container "}>
                {projects.slice(0, showAll ? projects.length : 3).map((project: Project, index: number) => (
                    <div className="projects__project" key={index}>
                        <h3>{project.title}</h3>
                        <div className="projects__img-desc-container">
                            <a href={project.url} target="_blank" className="projects__img-a">
                                <img className="projects__img" src={project.img_url} alt={project.title} />
                            </a>
                            <p className="projects__desc">{project.description}</p>
                        </div>
                        <div className="projects__links">
                            <a className="projects__link" href={project.url}>Link</a>
                            <a className="projects__link" href={project.repo_url}>GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
            <button className="projects__toggle" onClick={handleToggle}>
                {showAll ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
}
export default Projects