import "./Navbar.scss"

import { Link } from "../../types/link"
import code from "../../assets/images/code.svg"
import jy from "../../assets/images/JY.png"
import music from "../../assets/images/music.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useTheme } from "../../contexts/ThemeContext"

interface NavbarProps {
    links: Link[],
    backgroundColor?: string;
}
const Navbar: React.FC<NavbarProps> = ({ links, backgroundColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="navbar" style={{ backgroundColor }}>

            <div className="navbar__toggle" onClick={toggleMenu}>
                <div className={`navbar__burger ${isOpen ? "open" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className={`navbar__ul ${isOpen ? "navbar__ul--open" : ""}`}>
                <a href="/" className="navbar__logo-a"><img src={jy} alt="JY logo" className="navbar__logo" /></a>
                {/* <a href="/welcome" className="navbar__logo-a"><img src={jy} alt="JY logo" className="navbar__logo" /></a> */}
                {links.map((link, index) => (
                    <li key={index} className="navbar__li">
                        {link.label === "Resume" ? (
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                            >
                                {link.label}
                            </a>
                        ) : (
                            <a href={link.url}>{link.label}</a>
                        )}
                    </li>
                ))}
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