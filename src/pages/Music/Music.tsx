import "./Music.scss"

import Bio from "../../components/Bio/Bio"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import { Link } from "../../types/link"
import Navbar from "../../components/Navbar/Navbar"
import Parallax from "../../components/Parallax/Parallax"
import Scores from "../../components/Scores/Scores"
import Works from "../../components/Works/Works"

const Music = () => {
    const musicLinks: Link[] = [
        { label: "Home", url: "/music" },
        { label: "About", url: "#about" },
        { label: "Scores", url: "#scores" },
        { label: "Works", url: "#works" },
        { label: "Videos", url: "#video" },
        { label: "Contact", url: "#contact" },
    ]

    const bio = <>
        A composer and performer, I grew up in Indianapolis, Indiana, surrounded by bluegrass, jazz, and classical music that shaped my passion for music. Now based in New York City, I create original music that blends these influences with inspiration from both classical and contemporary artists. My work has taken me across the United States, Canada, and Europe, sharing my music with audiences far and wide and performing on guitar, trumpet, banjo, and mandolin.

    </>
    return (
        <>
            <Navbar links={musicLinks} backgroundColor="black" />
            <Hero
                name="Joseph Young"
                title="Musician | "
                description="Composer, Guitarist, Trumpeter."
                backgroundColor="black"
            />
            <Parallax />
            <Bio bio={bio} backgroundColor="black" />
            <Parallax />
            <Scores />
            <Parallax />
            <Works />
            <Footer backgroundColor="black" />

        </>
    )
}
export default Music