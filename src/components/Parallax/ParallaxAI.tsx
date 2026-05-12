import "./ParallaxAI.css";

import { useMemo } from "react";

const ParallaxAI = () => {
    const particles = useMemo(() =>
        Array.from({ length: 18 }, (_, i) => ({
            id: i,
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
            size: Math.random() * 3 + 1.5,
            dur: `${3 + Math.random() * 4}s`,
            delay: `${Math.random() * 4}s`,
        })), []);

    return (
        <div className="parallax-ai" aria-hidden="true">
            <div className="parallax-ai__line" />
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="parallax-ai__particle"
                    style={{
                        top: p.top,
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        '--pdur': p.dur,
                        '--pdelay': p.delay,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
};

export default ParallaxAI;
