import "./Hero.scss"

import { HeroProps } from "../../types/hero";

const Hero: React.FC<HeroProps> = ({ name, title, description, backgroundColor }) => {
    return (
        <header className="main" style={{ backgroundColor: backgroundColor }}>
            <h1 className="main__name">
                {name}
            </h1>
            <p className="welcome">
                {title} {description}
            </p>
        </header>
    )
}

export default Hero;
