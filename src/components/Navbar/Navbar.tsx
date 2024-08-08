import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__ul">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>



    )
}
export default Navbar