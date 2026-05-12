import "./Navbar.scss"

import { Link } from "../../types/link"
import code from "../../assets/images/code.svg"
import jy from "../../assets/images/JY.png"
import music from "../../assets/images/music.svg"
import { useNavigate } from "react-router-dom"
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
    const { viewStyle, toggleViewStyle } = useViewStyle();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const isAI = viewStyle === "ai" && theme === "dev";

    return (
        <nav className={`navbar${isAI ? " navbar--ai" : ""}`} style={isAI ? undefined : { backgroundColor }}>

            <div className="navbar__toggle" onClick={toggleMenu}>
                <div className={`navbar__burger ${isOpen ? "open" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul
                className={`navbar__ul ${isOpen ? "navbar__ul--open" : ""}`}
                style={isOpen ? { backgroundColor: isAI ? "#0a0d12" : theme === "music" ? "black" : "#084053" } : {}}
            >
                <a href="/" className="navbar__logo-a"><img src={jy} alt="JY logo" className="navbar__logo" /></a>
                {/* <a href="/welcome" className="navbar__logo-a"><img src={jy} alt="JY logo" className="navbar__logo" /></a> */}
                {links.map((link, index) => (
                    <li key={index} className={`navbar__li${isAI && activeLink === link.url ? " navbar__li--active" : ""}`}>
                        {link.label === "Resume" ? (
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                onClick={() => setActiveLink(link.url)}
                            >
                                {link.label}
                            </a>
                        ) : (
                            <a href={link.url} onClick={() => setActiveLink(link.url)}>{link.label}</a>
                        )}
                    </li>
                ))}
                {theme === "dev" && (
                    <li className="navbar__li">
                        <div className="view-toggle" role="group" aria-label="Website style">
                            <button
                                type="button"
                                className={`view-toggle__btn${viewStyle === "original" ? " view-toggle__btn--active" : ""}`}
                                onClick={toggleViewStyle}
                            >
                                All me!
                            </button>
                            <button
                                type="button"
                                className={`view-toggle__btn${viewStyle === "ai" ? " view-toggle__btn--active" : ""}`}
                                onClick={toggleViewStyle}
                            >
                                AI
                            </button>
                        </div>
                    </li>
                )}
                <li className="navbar__li">
                    <div className="theme-toggle">
                        <div className="theme-toggle__track" onClick={() => {
                            const next = theme === "dev" ? "/music" : "/";
                            toggleTheme();
                            setTimeout(() => {
                                navigate(next);
                            }, 150);
                        }}>
                            <div className={`theme-toggle__slider ${theme === "dev" ? "theme-toggle__slider--dev" : "theme-toggle__slider--music"}`}>
                                <img
                                    src={theme === "dev" ? code : music}
                                    alt={theme === "dev" ? "Developer" : "Musician"}
                                    className="theme-toggle__icon"
                                />
                            </div>
                            <div className="theme-toggle__labels">
                                <img src={music} alt="Musician" className="theme-toggle__label theme-toggle__label--music" />
                                <img src={code} alt="Developer" className="theme-toggle__label theme-toggle__label--dev" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar