import "./Navbar.scss"

import { Link } from "../../types/link"
import { useState } from "react"

interface NavbarProps {
    links: Link[],
    backgroundColor?: string;
}
const Navbar: React.FC<NavbarProps> = ({ links, backgroundColor }) => {
    const [isOpen, setIsOpen] = useState(false);

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
                {links.map((link, index) => (
                    <li key={index} className="navbar__li">
                        <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Navbar