import "./ScrollArrow.scss"
import { useState, useEffect } from 'react';

const ScrollArrow = (/* { darkMode } */) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`scroll-to-top ${isVisible ? 'visible' : ''} ${/* darkMode */"" ? 'dark dark--arrow' : ''}`}
            onClick={scrollToTop}
        >
            {/* className={`soundDesign ${darkMode ? `dark` && `dark--darkSoundDesign` : ''}`}  */}
            <span>&uarr;</span>
        </div>
    );
};

export default ScrollArrow;
