import "./Error404.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eraser from "../../assets/images/MIB-Eraser.webp"

const Error404 = () => {
    const [isFlashing, setIsFlashing] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setIsFlashing(true);
        setTimeout(() => {
            setIsFlashing(false);
            navigate("/");
        }, 1000)
    }
    return (
        <>
            <div className="eraserContainer">
                <h1 className="eraserContainer__h1"> Oops, this page does not exist! We must now erase your memory.</h1>
                <h2 className="eraserContainer__h2">Click the Memory Eraser to forget this ever happened.</h2>
                <img src={eraser} width={300} height={500} className="eraserContainer__eraser" id="memory-eraser" alt="Memory Eraser from Men In Black movie" onClick={handleButtonClick} />
            </div>
            {isFlashing && <div className="flash" />}
        </>
    )
}
export default Error404