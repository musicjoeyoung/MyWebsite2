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
import Reviews from "../../components/Reviews/Reviews"

const Home = () => {

    const homeLinks: Link[] = [
        { label: "Home", url: "/" },
        { label: "About", url: "#about" },
        { label: "Projects", url: "#projects" },
        { label: "Experience", url: "#experience" },
        { label: "Reviews", url: "#reviews" },
        { label: "Resume", url: "/Joseph-Young-resume-2024.pdf" },
        { label: "Contact", url: "#contact" },
        /* { label: "Snippets", url: "/snippets" }, */

    ]

    const bio = <>I am a software engineer with multiple years of experience coding,
        debugging, testing, and troubleshooting in application development
        processes. I work primarily in Javascript & TypeScript with HTML, CSS, SASS, React, Node, Express, PostgreSQL, MySQL, jQuery, MongoDB, Zod, Drizzle, NextJS and have a special interest in
        Web Accessibility.
        <br />
        <br />I design, build, and manage websites for a number of
        clients. In addition to graduating from Fullstack Academy&#39;s
        Intensive Immersion program, I have also earned certifications in
        Data Science with Python from MIT via EdX.org.
        <br />
        <br />
        Fun Fact: I am also in the Army Reserves where I am an Executive
        Officer for a military band, and we play lots of wonderful music!
    </>

    return (
        <>
            <FlashlightComponent />
            <Navbar links={homeLinks} />
            <Hero
                name="Joseph Young"
                title="Software Engineer"
                description="specializing in building and testing exceptional digital experiences. Scroll down to learn more."
            />
            <Parallax />
            <Bio bio={bio} />
            <Parallax />
            <Projects />
            <Parallax />
            <Experience />
            <Parallax />
            <Reviews />
            <Parallax />
            <Contact />
            <Parallax />
        </>
    )
}

export default Home