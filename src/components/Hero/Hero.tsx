import "./Hero.scss"

import { HeroProps } from "../../types/hero";

const Hero: React.FC<HeroProps> = ({ name, title, description }) => {
    return (
        <main className="main">
            <h1 className="main__name">
                {name}
            </h1>
            <p className="welcome">
                {title}
            </p>
            <p className="welcome">
                {description}
            </p>
        </main>
    )
}

export default Hero;
