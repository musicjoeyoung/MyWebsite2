import "./Navbar.scss"
import { Link } from "../../types/link"


interface NavbarProps {
    links: Link[]
}
const Navbar: React.FC<NavbarProps> = ({ links }) => {
    return (
        <nav className="navbar">
            <ul className="navbar__ul">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>



    )
}
export default Navbar