import "./Bio.scss"

import { BioProps } from "../../types/bio"
import profilePhoto from "../../assets/images/Joe.png"

const Bio: React.FC<BioProps> = ({ bio, backgroundColor }) => {
    return (
        <div className="bio" id="about" style={{ backgroundColor: backgroundColor }}>
            <h2>About Me</h2>
            <div className="bio__profile">
                <img
                    className="bio__img"
                    src={profilePhoto}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
                <div>
                    <p className="bio__paragraph">
                        {bio}
                    </p>
                </div>
                {!window.location.pathname.includes('/music') && (
                    <div className="icon-container">
                        {/* Frontend/UI Technologies */}
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                            alt="HTML5"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                            alt="CSS3"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                            alt="Sass"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                            alt="jQuery"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                            alt="React JS"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                            alt="Next JS"
                            width={60}
                            height={60}
                        />

                        {/* Backend/Runtime */}
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node JS"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg"
                            alt="Bun"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                            alt="Express"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://hono.dev/images/logo.svg"//test
                            alt="Hono"
                            width={60}
                            height={60}
                        />

                        {/* Programming Languages */}
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
                            alt="JavaScript"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                            alt="TypeScript"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                            alt="Python"
                            width={60}
                            height={60}
                        />

                        {/* Databases */}
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                            alt="PostgreSQL"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                            alt="MySQL"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                            alt="MongoDB"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://images.ctfassets.net/sw4ojjqn6qvl/18smWj9R0PQ0yfsQurVCeu/3f47e4f9d73617ccd9a62be2c20de826/drizzle-logo.svg"
                            alt="Drizzle"
                            width={60}
                            height={60}
                        />

                        {/* Cloud/Infrastructure */}
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg"
                            alt="Cloudflare"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflareworkers/cloudflareworkers-original-wordmark.svg"
                            alt="Cloudflare Workers"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://avatars.githubusercontent.com/u/77690634?s=48&v=4"
                            alt="Neon"
                            width={60}
                            height={60}
                        />

                        {/* Tools */}
                        <img
                            className="icon-container__icon"
                            src="https://zod.dev/logo/logo-glow.png"
                            alt="Zod"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
                            alt="Canva"
                            width={60}
                            height={60}
                        />
                        <img
                            className="icon-container__icon"
                            src="https://avatars.githubusercontent.com/u/61152955?s=200&v=4"
                            alt="Fiberplane"
                            width={60}
                            height={60}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Bio