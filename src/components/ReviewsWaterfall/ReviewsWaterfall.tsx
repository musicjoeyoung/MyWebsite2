import "wc-waterfall";
import "../../types/custom-elements.d.ts";

import { useEffect, useState } from "react";

interface ReviewsWaterfallProps {
    children: React.ReactNode;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'wc-waterfall': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { gap?: number; cols?: number };
        }
    }
}

const ReviewsWaterfall: React.FC<ReviewsWaterfallProps> = ({ children }) => {
    const [cols, setCols] = useState(1);

    useEffect(() => {
        const updateCols = () => {
            if (window.innerWidth >= 1024) {
                setCols(5);
            } else if (window.innerWidth >= 768) {
                setCols(2);
            } else {
                setCols(1);
            }
        };

        updateCols();
        window.addEventListener("resize", updateCols);

        return () => {
            window.removeEventListener("resize", updateCols);
        };
    }, []);

    return (
        <wc-waterfall gap={10} cols={cols}>
            {children}
        </wc-waterfall>
    );
};

export default ReviewsWaterfall;
