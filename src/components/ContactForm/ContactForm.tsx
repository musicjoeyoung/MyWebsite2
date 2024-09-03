import "./ContactForm.scss"

import { FormEvent, useRef, useState } from "react";

import emailjs from '@emailjs/browser';

const { VITE_YOUR_SERVICE_ID, VITE_YOUR_TEMPLATE_ID, VITE_YOUR_PUBLIC_KEY } = import.meta.env;

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (event: FormEvent) => {
        event.preventDefault();

        if (form.current) {
            emailjs.sendForm(VITE_YOUR_SERVICE_ID, VITE_YOUR_TEMPLATE_ID, form.current, VITE_YOUR_PUBLIC_KEY)
                .then((result) => {
                    //console.log(result.text);
                    setIsSubmitted(true);
                    setIsSuccess(true);
                    if (form.current) {
                        form.current.reset();
                    }
                }, (error) => {
                    console.log(error.text);
                    setIsSubmitted(true);
                    setIsSuccess(false);
                });
        }
    };

    return (
        < >
            <form className="form" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>

            {isSubmitted && (
                <div >
                    {isSuccess ? "Message sent successfully!" : "Failed to send the message. Please try again."}
                </div>
            )}
        </>

    );
};

export default Contact;
