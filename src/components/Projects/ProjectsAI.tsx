import "./ProjectsAI.css";

import projects from "../../assets/data/projects.json";
import { useState } from "react";

interface Project {
    title: string;
    headline: string;
    description: string;
    img_url: string;
    urls: (string | { name: string; url: string })[];
    repo_urls: ({ name: string; url: string } | string)[];
}

const ProjectsAI: React.FC = () => {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setTimeout(() => setShowAll(!showAll), 50);
        if (showAll) {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="projects-ai" id="projects">
            <h2 className="projects-ai__heading">Projects</h2>
            <div className="projects-ai__container">
                {projects
                    .slice(0, showAll ? projects.length : 3)
                    .map((project: Project, index: number) => (
                        <div className="projects-ai__card" key={index}>
                            <div className="projects-ai__card-glow" aria-hidden="true" />

                            <h3 className="projects-ai__card-title">{project.title}</h3>

                            {project.headline && project.headline.trim() !== "" && (
                                <div className="projects-ai__headline">{project.headline}</div>
                            )}

                            <div className="projects-ai__body">
                                {project.urls && project.urls.length > 0 && (() => {
                                    const firstUrl = project.urls[0];
                                    const href = typeof firstUrl === "string" ? firstUrl : firstUrl.url;
                                    return (
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="projects-ai__img-link">
                                            <img className="projects-ai__img" src={project.img_url} alt={project.title} />
                                        </a>
                                    );
                                })()}
                                <p className="projects-ai__desc">{project.description}</p>
                            </div>

                            <div className="projects-ai__links">
                                {project.urls && project.urls.map((urlObj, i) => {
                                    const href = typeof urlObj === "string" ? urlObj : urlObj.url;
                                    const label = typeof urlObj === "string" ? "Link" : (urlObj.name || "Link");
                                    return (
                                        <a key={href + i} className="projects-ai__link" href={href} target="_blank" rel="noopener noreferrer">
                                            {label}
                                        </a>
                                    );
                                })}
                                {project.repo_urls && project.repo_urls.map((repoObj, i) => {
                                    const href = typeof repoObj === "string" ? repoObj : repoObj.url;
                                    const label = typeof repoObj === "string" ? "GitHub" : (repoObj.name || "GitHub");
                                    return (
                                        <a key={href + i} className="projects-ai__link" href={href} target="_blank" rel="noopener noreferrer">
                                            {label}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
            </div>
            <button className="projects-ai__toggle" onClick={handleToggle}>
                {showAll ? "Show Less" : "Show More"}
            </button>
        </div>
    );
};

export default ProjectsAI;
