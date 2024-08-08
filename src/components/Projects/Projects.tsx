import "./Projects.scss"
import { useState } from "react"

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggle = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="projects" id="projects">Projects
            <div>Project 1</div>
            <div>Project 2</div>
            <div>Project 3</div>
            <div>Project 4</div>
            <div>Project 5</div>
            <div>Project 6</div>
            <div>Project 7</div>
            <div>Project 8</div>
        </div>
    )
}
export default Projects