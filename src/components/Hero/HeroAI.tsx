import "./HeroAI.css";

import { HeroProps } from "../../types/hero";
import { useMemo } from "react";

const HeroAI: React.FC<HeroProps> = ({ name, title, description }) => {
    const stars = useMemo(() =>
        Array.from({ length: 60 }, (_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2.5 + 1,
            dur: `${2.5 + Math.random() * 4}s`,
            delay: `${Math.random() * 5}s`,
        })), []);

    return (
        <main className="hero-ai">
            <div className="hero-ai__stars" aria-hidden="true">
                {stars.map((s) => (
                    <div
                        key={s.id}
                        className="hero-ai__star"
                        style={{
                            top: s.top,
                            left: s.left,
                            width: s.size,
                            height: s.size,
                            '--dur': s.dur,
                            '--delay': s.delay,
                        } as React.CSSProperties}
                    />
                ))}
            </div>

            <div className="hero-ai__content">
                <div className="hero-ai__label">Portfolio</div>

                <h1 className="hero-ai__name">{name}</h1>

                <div className="hero-ai__line" aria-hidden="true" />

                <p className="hero-ai__title">
                    <span className="hero-ai__title-accent">{title}</span>
                </p>

                <p className="hero-ai__description">
                    {description}
                </p>

                <div className="hero-ai__scroll" aria-hidden="true">
                    <span className="hero-ai__scroll-line" />
                    Scroll to explore
                </div>
            </div>
        </main>
    );
};

export default HeroAI;
