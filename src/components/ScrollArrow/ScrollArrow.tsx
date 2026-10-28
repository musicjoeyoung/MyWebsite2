import "./ScrollArrow.scss"
import { useState, useEffect } from 'react';

const ScrollArrow = () => {
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
        <button
            type="button"
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            aria-label="Scroll to top"
            aria-hidden={!isVisible}
            tabIndex={isVisible ? 0 : -1}
            onClick={scrollToTop}
        >
            <span aria-hidden="true">&uarr;</span>
        </button>
    );
};

export default ScrollArrow;
