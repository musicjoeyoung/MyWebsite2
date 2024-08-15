import "./Home.scss"

import Bio from "../../components/Bio/Bio"
import Contact from "../../components/Contact/Contact"
import Experience from "../../components/Experience/Experience"
import FlashlightComponent from "../../components/Flashlight/Flashlight"
import Hero from "../../components/Hero/Hero"
import { Link } from "../../types/link"
import Navbar from "../../components/Navbar/Navbar"
import Parallax from "../../components/Parallax/Parallax"
import Projects from "../../components/Projects/Projects"

const Home = () => {

    const homeLinks: Link[] = [
        { label: "Home", url: "/" },
        { label: "About", url: "#about" },
        { label: "Projects", url: "#projects" },
        { label: "Experience", url: "#experience" },
        { label: "Resume", url: "#resume" },
        { label: "Contact", url: "#contact" },
        { label: "Snippets", url: "/snippets" },
    ]
    return (
        <>
            <FlashlightComponent />
            <Navbar links={homeLinks} />
            <Hero />
            <Parallax />
            <Bio />
            <Parallax />
            <Projects />
            <Parallax />
            <Experience />
            <Parallax />
            <Contact />
            <Parallax />
        </>
    )
}

export default Home