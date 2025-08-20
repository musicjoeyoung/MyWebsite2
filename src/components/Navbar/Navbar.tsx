import "./Navbar.scss"

import { Link } from "../../types/link"
import jy from "../../assets/images/JY.png"
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
                    <button
                        onClick={() => {
                            const next = theme === "dev" ? "/music" : "/";
                            toggleTheme();
                            navigate(next);
                        }}
                        aria-label="Toggle site theme"
                    >
                        {theme === "dev" ? "Developer" : "Musician"}
                    </button>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar