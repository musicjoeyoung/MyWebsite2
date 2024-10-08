import "./Footer.scss"

import { FooterProps } from "../../types/footer"

const Footer: React.FC<FooterProps> = ({ backgroundColor }) => {
    return (
        <div className="footer" style={{ backgroundColor: backgroundColor }}>© Joseph Young. All rights reserved</div>
    )
}
export default Footer