import { useEffect, useRef } from 'react';
import './Flashlight.scss';

const Flashlight = () => {
    const overlayRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (event: MouseEvent) => {
        if (overlayRef.current) {
            const { clientX: mouseX, clientY: mouseY } = event;
            const { offsetWidth: overlayWidth, offsetHeight: overlayHeight } = overlayRef.current;
            const x = mouseX - overlayWidth / 2;
            const y = mouseY - overlayHeight / 2;
            overlayRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="flashlight-effect">
            <div className="flashlight-overlay" ref={overlayRef}></div>
        </div>
    );
};

export default Flashlight;
