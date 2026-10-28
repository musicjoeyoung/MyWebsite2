import "./Navbar.scss"

import { Link } from "../../types/link"
import code from "../../assets/images/code.svg"
import jy from "../../assets/images/JY.png"
import music from "../../assets/images/music.svg"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { useViewStyle } from "../../contexts/ViewStyleContext"

interface NavbarProps {
    links: Link[],
    backgroundColor?: string;
}
const Navbar: React.FC<NavbarProps> = ({ links, backgroundColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string>("");
    const { theme, toggleTheme } = useTheme();
    const { viewStyle } = useViewStyle();
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };
    const isAI = viewStyle === "ai" && theme === "dev";

    return (
        <nav className={`navbar${isAI ? " navbar--ai" : ""}`} aria-label="Primary navigation" style={isAI ? undefined : { backgroundColor }}>
            <button
                type="button"
                className="navbar__toggle"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="primary-navigation"
                onClick={toggleMenu}
            >
                <span className={`navbar__burger ${isOpen ? "open" : ""}`} aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
            <ul
                id="primary-navigation"
                className={`navbar__ul ${isOpen ? "navbar__ul--open" : ""}`}
                style={isOpen ? { backgroundColor: isAI ? "#0a0d12" : theme === "music" ? "black" : "#084053" } : {}}
            >
                <li className="navbar__logo-item">
                    <a href="/" className="navbar__logo-a"><img src={jy} alt="Joseph Young home" className="navbar__logo" /></a>
                </li>
                {links.map((link, index) => (
                    <li key={index} className={`navbar__li${isAI && activeLink === link.url ? " navbar__li--active" : ""}`}>
                        {link.label === "Resume" ? (
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                onClick={() => {
                                    setActiveLink(link.url);
                                    setIsOpen(false);
                                }}
                            >
                                {link.label}
                            </a>
                        ) : (
                            <a
                                href={link.url}
                                aria-current={link.url.startsWith("#")
                                    ? location.hash === link.url ? "location" : undefined
                                    : location.pathname === link.url ? "page" : undefined}
                                onClick={() => {
                                    setActiveLink(link.url);
                                    setIsOpen(false);
                                }}
                            >
                                {link.label}
                            </a>
                        )}
                    </li>
                ))}
                <li className="navbar__li">
                    <div className="theme-toggle">
                        <button
                            type="button"
                            className="theme-toggle__track"
                            aria-label="Developer website"
                            aria-pressed={theme === "dev"}
                            onClick={() => {
                                const next = theme === "dev" ? "/music" : "/";
                                setIsOpen(false);
                                toggleTheme();
                                setTimeout(() => {
                                    navigate(next);
                                }, 150);
                            }}
                        >
                            <div className={`theme-toggle__slider ${theme === "dev" ? "theme-toggle__slider--dev" : "theme-toggle__slider--music"}`}>
                                <img
                                    src={theme === "dev" ? code : music}
                                    alt=""
                                    aria-hidden="true"
                                    className="theme-toggle__icon"
                                />
                            </div>
                            <div className="theme-toggle__labels">
                                <img src={music} alt="" aria-hidden="true" className="theme-toggle__label theme-toggle__label--music" />
                                <img src={code} alt="" aria-hidden="true" className="theme-toggle__label theme-toggle__label--dev" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar