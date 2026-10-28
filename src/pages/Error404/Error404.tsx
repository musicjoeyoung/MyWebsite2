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
        <main id="main-content" tabIndex={-1}>
            <div className="eraserContainer">
                <h1 className="eraserContainer__h1"> Oops, this page does not exist! We must now erase your memory.</h1>
                <h2 className="eraserContainer__h2">Activate the memory eraser to return to the home page.</h2>
                <button
                    type="button"
                    className="eraserContainer__eraser-button"
                    aria-label="Erase memory and return to the home page"
                    onClick={handleButtonClick}
                >
                    <img src={eraser} width={300} height={500} className="eraserContainer__eraser" id="memory-eraser" alt="" />
                </button>
            </div>
            {isFlashing && <div className="flash" aria-hidden="true" />}
        </main>
    )
}
export default Error404