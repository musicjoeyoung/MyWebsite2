import "./Footer.scss"

import { FooterProps } from "../../types/footer"

const Footer: React.FC<FooterProps> = ({ backgroundColor }) => {
    return (
        <div className="footer" style={{ backgroundColor: backgroundColor }}>© Joseph Young - {new Date().getFullYear()}. All rights reserved</div>
    )
}
export default Footer