import "./Home.scss"
import Bio from "../../components/Bio/Bio"
import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import Projects from "../../components/Projects/Projects"
import Experience from "../../components/Experience/Experience"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow"
import Parallax from "../../components/Parallax/Parallax"

const Home = () => {
    return (
        <>
            <Navbar />
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
            <Footer />
            <ScrollArrow />
        </>
    )
}

export default Home