import "./Contact.scss"
import ContactForm from "../ContactForm/ContactForm"
import IconContainer from "../IconContainer/IconContainer";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2>Contact</h2>
            <p>
                I'm always looking to collaborate on projects that improve the
                user experience and help make the world a bit better.
            </p>
            <ContactForm />
            <IconContainer />
        </div>
    );
};

export default Contact;
