import "./Footer.scss"

import { FooterProps } from "../../types/footer"

const Footer: React.FC<FooterProps> = ({ backgroundColor }) => {
    return (
        <footer className="footer" style={{ backgroundColor: backgroundColor }}>© Joseph Young - {new Date().getFullYear()}. All rights reserved</footer>
    )
}
export default Footer