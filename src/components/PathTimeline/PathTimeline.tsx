import './PathTimeline.css';

import { useCallback, useEffect, useRef, useState } from 'react';

import { entries } from './data/resume';

/* ── helpers ─────────────────────────────────────────────────── */

function hexToRgb(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

function getStartYear(period: string): string {
    const match = period.match(/\d{4}/);
    return match ? match[0] : '';
}

function generateParticles(count: number, color: string) {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        top: `${20 + Math.random() * 60}%`,
        left: `${10 + Math.random() * 80}%`,
        size: Math.random() * 4 + 2,
        dur: `${3 + Math.random() * 4}s`,
        delay: `${Math.random() * 4}s`,
        color,
    }));
}

/* ── sub-components ──────────────────────────────────────────── */

interface CardProps {
    entry: (typeof entries)[number];
    visible: boolean;
}

function Card({ entry, visible }: CardProps) {
    const [bulletsVisible, setBulletsVisible] = useState(false);

    useEffect(() => {
        if (visible && entry.bullets?.length) {
            const t = setTimeout(() => setBulletsVisible(true), 300);
            return () => clearTimeout(t);
        }
        if (!visible) setBulletsVisible(false);
    }, [visible, entry.bullets]);

    const rgb = hexToRgb(entry.accent);

    return (
        <div className="pt-card-wrapper" data-visible={visible ? 'true' : 'false'}>
            <div
                className="pt-card"
                style={{
                    '--card-bg': `rgba(${hexToRgb(entry.color)}, 0.35)`,
                    '--card-border': `rgba(${rgb}, 0.2)`,
                    '--card-accent': entry.accent,
                    '--card-glow': `rgba(${rgb}, 0.12)`,
                } as React.CSSProperties}
            >
                <div className="pt-card__glow" />
                <div className="pt-card__stripe" />

                <div className="pt-card__header">
                    <div
                        className="pt-card__icon-wrap"
                        style={{
                            background: `rgba(${rgb}, 0.12)`,
                            border: `1px solid rgba(${rgb}, 0.25)`,
                        }}
                    >
                        <span style={{ fontSize: '1.3rem' }}>{entry.icon}</span>
                    </div>

                    <div className="pt-card__meta">
                        <div className="pt-card__title">{entry.title}</div>
                        <div className="pt-card__company">{entry.company}</div>
                        <div className="pt-card__location-period">
                            {entry.location ? (
                                <>
                                    <span>{entry.location}</span>
                                    <span className="pt-card__dot" />
                                </>
                            ) : null}
                            <span>{entry.period}</span>
                        </div>
                        {entry.current && (
                            <div className="pt-card__current">
                                <span className="pt-card__current-dot" />
                                Current
                            </div>
                        )}
                    </div>
                </div>

                {entry.bullets && entry.bullets.length > 0 && (
                    <div className="pt-card__bullets">
                        <ul className="pt-card__bullet-list">
                            {entry.bullets.map((b, i) => (
                                <li
                                    key={i}
                                    className="pt-card__bullet"
                                    data-visible={bulletsVisible ? 'true' : 'false'}
                                    style={{ transitionDelay: `${i * 60}ms` }}
                                >
                                    <svg
                                        className="pt-card__bullet-icon"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="3 8 6 11 13 4" />
                                    </svg>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

interface StopProps {
    entry: (typeof entries)[number];
    index: number;
    activeIndex: number;
}

function Stop({ entry, index, activeIndex }: StopProps) {
    const side: 'left' | 'right' = index % 2 === 0 ? 'left' : 'right';
    const visible = index === activeIndex;
    const rgb = hexToRgb(entry.accent);

    return (
        <div
            id={`stop-${entry.id}`}
            className={`pt-stop pt-stop--${side}`}
            data-index={index}
        >
            {/* Branch line from card to path node */}
            <div
                className="pt-branch"
                data-visible={visible ? 'true' : 'false'}
                style={{
                    '--branch-color': entry.accent,
                    width: 'calc(50% - 108px)',
                    top: '50%',
                } as React.CSSProperties}
            />

            {/* Node on the path */}
            <div className="pt-node">
                <div
                    className="pt-node__outer"
                    style={{
                        '--node-accent': entry.accent,
                        background: `radial-gradient(circle, rgba(${rgb}, 0.3) 0%, rgba(${rgb}, 0.1) 100%)`,
                        border: `2px solid rgba(${rgb}, 0.6)`,
                    } as React.CSSProperties}
                >
                    <span className="pt-node__icon">{entry.icon}</span>
                </div>
                <span className="pt-node__year">{getStartYear(entry.period)}</span>
            </div>

            <Card entry={entry} visible={visible} />
        </div>
    );
}

interface SegmentProps {
    fromEntry: (typeof entries)[number];
    toEntry: (typeof entries)[number];
}

function Segment({ fromEntry, toEntry }: SegmentProps) {
    const particles = generateParticles(12, fromEntry.accent);

    return (
        <div
            className="pt-segment"
            style={{ '--particle-color': fromEntry.accent } as React.CSSProperties}
        >
            <div className="pt-segment__particles">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="pt-segment__particle"
                        style={{
                            top: p.top,
                            left: p.left,
                            width: p.size,
                            height: p.size,
                            background: p.color,
                            '--pdur': p.dur,
                            '--pdelay': p.delay,
                        } as React.CSSProperties}
                    />
                ))}
            </div>
            <span className="pt-segment__label">
                {toEntry.company} →
            </span>
        </div>
    );
}

/* ── main component ──────────────────────────────────────────── */

export default function PathTimeline() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [activeNavIndex, setActiveNavIndex] = useState(-1);
    const [lightTop, setLightTop] = useState('40%');
    const timelineRef = useRef<HTMLDivElement>(null);
    const stopRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
        setScrollProgress(progress);

        // light orb position
        const lightPct = 10 + progress * 80;
        setLightTop(`${lightPct}%`);

        // determine which stop is active
        const viewportMid = window.innerHeight * 0.55;
        let newActive = -1;
        let newNavActive = -1;

        stopRefs.current.forEach((el, i) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const elMid = rect.top + rect.height / 2;
            if (elMid < viewportMid + window.innerHeight * 0.4) {
                newActive = i;
            }
            if (rect.top < viewportMid && rect.bottom > viewportMid * 0.3) {
                newNavActive = i;
            }
        });

        setActiveIndex(newActive);
        setActiveNavIndex(newNavActive);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollToStop = (index: number) => {
        const el = stopRefs.current[index];
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="pt-root">
            {/* Progress bar */}
            <div className="pt-progress">
                <div
                    className="pt-progress__fill"
                    style={{ width: `${scrollProgress * 100}%` }}
                />
            </div>

            {/* Scrollspy nav */}
            <nav className="pt-nav" aria-label="Timeline navigation">
                {entries.map((entry, i) => (
                    <button
                        key={entry.id}
                        className={`pt-nav__dot${activeNavIndex === i ? ' pt-nav__dot--active' : ''}`}
                        data-label={entry.company}
                        onClick={() => scrollToStop(i)}
                        aria-label={`Go to ${entry.company}`}
                    />
                ))}
            </nav>

            {/* Floating light orb */}
            <div className="pt-light-orb" style={{ top: lightTop }} />

            {/* ── Timeline ─────────────────────────────────── */}
            <section className="pt-timeline" ref={timelineRef}>
                {/* The central vertical path line */}
                <div className="pt-path-track" aria-hidden="true">
                    <div className="pt-path-line" />
                </div>

                {entries.map((entry, i) => (
                    <div key={entry.id}>
                        <div
                            ref={(el) => { stopRefs.current[i] = el; }}
                        >
                            <Stop entry={entry} index={i} activeIndex={activeIndex} />
                        </div>

                        {/* Transition segment between stops */}
                        {i < entries.length - 1 && (
                            <Segment fromEntry={entry} toEntry={entries[i + 1]} />
                        )}
                    </div>
                ))}


            </section>
        </div>
    );
}
