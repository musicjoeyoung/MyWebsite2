import "./Music.scss"
import { Link } from "../../types/link"
import Navbar from "../../components/Navbar/Navbar"



const Music = () => {
    const musicLinks: Link[] = [
        { label: "Home", url: "/music" },
        { label: "About", url: "#about" },
        { label: "Scores", url: "#scores" },
        { label: "Audio", url: "#audio" },
        { label: "Videos", url: "#video" },
        { label: "Contact", url: "#contact" },
    ]
    return (
        <>
            <Navbar links={musicLinks} />
        </>
    )
}
export default Music