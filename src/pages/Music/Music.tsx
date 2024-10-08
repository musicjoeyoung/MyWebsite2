import "./Music.scss"

import Audio from "../../components/Audio/Audio"
import Bio from "../../components/Bio/Bio"
import Hero from "../../components/Hero/Hero"
import { Link } from "../../types/link"
import Navbar from "../../components/Navbar/Navbar"
import Parallax from "../../components/Parallax/Parallax"
import Scores from "../../components/Scores/Scores"

const Music = () => {
    const musicLinks: Link[] = [
        { label: "Home", url: "/music" },
        { label: "About", url: "#about" },
        { label: "Scores", url: "#scores" },
        { label: "Audio", url: "#audio" },
        { label: "Videos", url: "#video" },
        { label: "Contact", url: "#contact" },
    ]

    const bio = <>Musician
        <br />
        <br />
        Guitar
        <br />
        <br />
        Music
    </>
    return (
        <>
            <Navbar links={musicLinks} backgroundColor="black" />
            <Hero
                name="Joseph Young"
                title="Musician"
                description="Composer, Guitarist, Trumpeter."
                backgroundColor="black"
            />
            <Parallax />
            <Bio bio={bio} backgroundColor="black" />
            <Parallax />
            <Scores />
            <Parallax />
            <Audio />

        </>
    )
}
export default Music