import "./FooterAI.css";

const FooterAI: React.FC = () => {
    return (
        <footer className="footer-ai">
            © Joseph Young — {new Date().getFullYear()}. All rights reserved.
        </footer>
    );
};

export default FooterAI;
