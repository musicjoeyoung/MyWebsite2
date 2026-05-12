import "./FooterAI.css";

const FooterAI: React.FC = () => {
    return (
        <div className="footer-ai">
            © Joseph Young — {new Date().getFullYear()}. All rights reserved.
        </div>
    );
};

export default FooterAI;
