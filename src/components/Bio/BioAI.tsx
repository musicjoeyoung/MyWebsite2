import "./BioAI.css";

import { BioProps } from "../../types/bio";
import profilePhoto from "../../assets/images/Joe.png";
import { useTheme } from "../../contexts/ThemeContext";

const BioAI: React.FC<BioProps> = ({ bio }) => {
    const { theme } = useTheme();

    const icons = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg", alt: "HTML5" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", alt: "CSS3" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", alt: "Sass" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg", alt: "jQuery" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "React JS" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next JS" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node JS" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg", alt: "Bun" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express" },
        { src: "https://hono.dev/images/logo.svg", alt: "Hono" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg", alt: "JavaScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg", alt: "Java" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg", alt: "PostgreSQL" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
        { src: "https://images.ctfassets.net/sw4ojjqn6qvl/18smWj9R0PQ0yfsQurVCeu/3f47e4f9d73617ccd9a62be2c20de826/drizzle-logo.svg", alt: "Drizzle" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg", alt: "Cloudflare" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflareworkers/cloudflareworkers-original-wordmark.svg", alt: "Cloudflare Workers" },
        { src: "https://avatars.githubusercontent.com/u/77690634?s=48&v=4", alt: "Neon" },
        { src: "https://zod.dev/logo/logo-glow.png", alt: "Zod" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", alt: "Canva" },
        { src: "https://avatars.githubusercontent.com/u/61152955?s=200&v=4", alt: "Fiberplane" },
    ];

    return (
        <div className="bio-ai" id="about">
            <h2 className="bio-ai__heading">About Me</h2>
            <div className="bio-ai__profile">
                <div className="bio-ai__photo-wrap">
                    <div className="bio-ai__photo-ring" aria-hidden="true" />
                    <div className="bio-ai__photo-inner">
                        <img
                            className="bio-ai__img"
                            src={profilePhoto}
                            alt="Picture of the author"
                            width={180}
                            height={180}
                        />
                    </div>
                </div>

                <div className="bio-ai__text-card">
                    <p className="bio-ai__paragraph">{bio}</p>

                    {theme === "dev" && (
                        <div className="bio-ai__icons">
                            {icons.map((icon) => (
                                <img
                                    key={icon.alt}
                                    className="bio-ai__icon"
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={48}
                                    height={48}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BioAI;
