import "./Projects.scss"

import projects from "../../assets/data/projects.json"
import { useState } from "react"

interface Project {
    title: string;
    headline: string;
    description: string;
    img_url: string;
    urls: string[];
    repo_urls: string[];
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
                        {project.headline && project.headline.trim() !== "" && (
                            <div className="projects__headline">{project.headline}</div>
                        )}
                        <div className="projects__img-desc-container">
                            {project.urls && project.urls.length > 0 && (
                                <a href={project.urls[0]} target="_blank" className="projects__img-a">
                                    <img className="projects__img" src={project.img_url} alt={project.title} />
                                </a>
                            )}
                            <p className="projects__desc">{project.description}</p>
                        </div>
                        <div className="projects__links">
                            {project.urls && project.urls.map((url, i) => (
                                <a
                                    key={url + i}
                                    className="projects__link"
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Link{project.urls.length > 1 ? ` #${i + 1}` : ''}</a>
                            ))}
                            {project.repo_urls && project.repo_urls.map((repoUrl, i) => (
                                <a
                                    key={repoUrl + i}
                                    className="projects__link"
                                    href={repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >GitHub{project.repo_urls.length > 1 ? ` #${i + 1}` : ''}</a>
                            ))}
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