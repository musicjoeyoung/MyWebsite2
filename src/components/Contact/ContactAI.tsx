import "./ContactAI.css";

import ContactForm from "../ContactForm/ContactForm";
import IconContainer from "../IconContainer/IconContainer";
import { useTheme } from "../../contexts/ThemeContext";

const ContactAI = () => {
    const { theme } = useTheme();

    const getContactText = () => {
        if (theme === "music") {
            return "Let's create something beautiful together. Whether you need original compositions, arrangements, or want to collaborate on a musical project, I'd love to hear from you.";
        }
        return "I'm always looking to collaborate on projects that improve the user experience and help make the world a bit better.";
    };

    return (
        <div className="contact-ai" id="contact">
            <h2 className="contact-ai__heading">Contact</h2>
            <p className="contact-ai__subtext">{getContactText()}</p>

            <div className="contact-ai__card">
                <div className="contact-ai__card-glow" aria-hidden="true" />
                <ContactForm />
                <IconContainer />
            </div>
        </div>
    );
};

export default ContactAI;
