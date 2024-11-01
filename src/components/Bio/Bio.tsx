import "./Bio.scss"

import { BioProps } from "../../types/bio"
import profilePhoto from "../../assets/images/Joe.jpg"

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
                <div className="icon-container">
                    <img
                        className="icon-container__icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        alt="Javscript"
                        width={60}
                        height={60}
                    />
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
                        alt="CSS3"
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
                    <img
                        className="icon-container__icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
                        alt="Canva"
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
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        alt="Node JS"
                        width={60}
                        height={60}
                    />
                    <img
                        className="icon-container__icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                        alt="PostgreSQL"
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
                    <img
                        className="icon-container__icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                        alt="jQuery"
                        width={60}
                        height={60}
                    />
                    <img
                        className="icon-container__icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        alt="jQuery"
                        width={60}
                        height={60}
                    />
                    <img
                        className="icon-container__icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                        alt="jQuery"
                        width={60}
                        height={60}
                    />
                    <img
                        className="icon-container__icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                        alt="jQuery"
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

                </div>
            </div>
        </div>
    )
}

export default Bio