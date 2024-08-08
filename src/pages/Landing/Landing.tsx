import "./Landing.scss"
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="split-screen">
            <div className="split-screen__half split-screen__left">
                <div className="titles-container">
                    <h1 className="titles-container__title">Coding</h1>
                    <Link to="/" className="link">Enter</Link>
                </div>
            </div>
            <div className="split-screen__half split-screen__right">
                <div className="titles-container">
                    <h1 className="titles-container__title titles-container__title--right">Music</h1>
                    <Link to="/music" className="link link--right">Enter</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;
