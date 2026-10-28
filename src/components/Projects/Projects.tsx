import "./Projects.scss"

import projects from "../../assets/data/projects.json"
import { useState } from "react"

interface Project {
    title: string;
    headline: string;
    description: string;
    img_url: string;
    urls: (string | { name: string; url: string })[];
    repo_urls: ({ name: string; url: string } | string)[];
}

const Projects: React.FC = () => {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = (): void => {
        if (showAll) {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }
        setShowAll((showingAll) => !showingAll);
    }


    return (
        <section className="projects" id="projects" aria-labelledby="projects-heading">
            <h2 id="projects-heading">Projects</h2>
            <div className={"projects__container "} id="projects-list">
                {projects.slice(0, showAll ? projects.length : 3).map((project: Project, index: number) => (
                    <div className="projects__project" key={index}>
                        <h3>{project.title}</h3>
                        {project.headline && project.headline.trim() !== "" && (
                            <div className="projects__headline">{project.headline}</div>
                        )}
                        <div className="projects__img-desc-container">
                            {project.urls && project.urls.length > 0 && (
                                (() => {
                                    const firstUrl = project.urls[0];
                                    if (typeof firstUrl === "string") {
                                        return (
                                            <a href={firstUrl} target="_blank" rel="noopener noreferrer" className="projects__img-a">
                                                <img className="projects__img" src={project.img_url} alt={project.title} />
                                            </a>
                                        );
                                    } else {
                                        return (
                                            <a href={firstUrl.url} target="_blank" rel="noopener noreferrer" className="projects__img-a">
                                                <img className="projects__img" src={project.img_url} alt={project.title} />
                                            </a>
                                        );
                                    }
                                })()
                            )}
                            <p className="projects__desc">{project.description}</p>
                        </div>
                        <div className="projects__links">
                            {project.urls && project.urls.map((urlObj, i) => {
                                if (typeof urlObj === "string") {
                                    return (
                                        <a
                                            key={urlObj + i}
                                            className="projects__link"
                                            href={urlObj}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >View {project.title}</a>
                                    );
                                } else {
                                    return (
                                        <a
                                            key={urlObj.url + i}
                                            className="projects__link"
                                            href={urlObj.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >{urlObj.name || `View ${project.title}`}</a>
                                    );
                                }
                            })}
                            {project.repo_urls && project.repo_urls.map((repoObj, i) => {
                                if (typeof repoObj === "string") {
                                    return (
                                        <a
                                            key={repoObj + i}
                                            className="projects__link"
                                            href={repoObj}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >GitHub repository for {project.title}</a>
                                    );
                                } else {
                                    return (
                                        <a
                                            key={repoObj.url + i}
                                            className="projects__link"
                                            href={repoObj.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >{repoObj.name || `GitHub repository for ${project.title}`}</a>
                                    );
                                }
                            })}
                        </div>
                    </div>
                ))}
            </div>
            <button className="projects__toggle" type="button" aria-expanded={showAll} aria-controls="projects-list" onClick={handleToggle}>
                {showAll ? 'Show Less' : 'Show More'}
            </button>
        </section>
    );
}
export default Projects