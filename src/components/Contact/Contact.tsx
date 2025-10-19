import "./Contact.scss"

import ContactForm from "../ContactForm/ContactForm"
import IconContainer from "../IconContainer/IconContainer";
import { useTheme } from "../../contexts/ThemeContext";

const Contact = ({ backgroundColor }: { backgroundColor: string }) => {
    const { theme } = useTheme();

    const getContactText = () => {
        if (theme === "music") {
            return "Let's create something beautiful together. Whether you need original compositions, arrangements, or want to collaborate on a musical project, I'd love to hear from you.";
        }
        return "I'm always looking to collaborate on projects that improve the user experience and help make the world a bit better.";
    };

    return (
        <div className="contact" id="contact" style={{ backgroundColor }}>
            <h2>Contact</h2>
            <p>
                {getContactText()}
            </p>
            <ContactForm />
            <IconContainer />
        </div>
    );
};

export default Contact;
