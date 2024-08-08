import "./IconContainer.scss"
import linkedInWhite from "../../assets/images/linkedinWhite.png"
import linkedInBlack from "../../assets/images/linkedinBlack.png"
import githubWhite from "../../assets/images/githubWhite.png"
import githubBlack from "../../assets/images/githubBlack.png"
import emailWhite from "../../assets/images/emailWhite.png"
import emailBlack from "../../assets/images/emailBlack.png"

const IconContainer = () => {
    return (
        <div className="iconContainer">
            <a
                href="https://www.linkedin.com/in/joseph-m-young/"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="icon"
                    src={linkedInWhite}
                    alt="LinkedIn"
                    width={30}
                    height={30}
                />
            </a>
            <a
                href="https://github.com/musicjoeyoung"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="icon"
                    src={githubWhite}
                    alt="Github"
                    width={30}
                    height={30}
                />
            </a>
            <a
                href="mailto:joseph.m.young2@gmail.com"
            >
                <img
                    className="icon"
                    src={emailWhite}
                    alt="Email"
                    width={30}
                    height={30}
                />
            </a>
        </div>
    )
}
export default IconContainer