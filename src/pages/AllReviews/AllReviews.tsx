import "./AllReviews.scss";

import { Link } from "react-router-dom";
import ReviewsWaterfall from "../../components/ReviewsWaterfall/ReviewsWaterfall";
import reviews from "../../assets/data/reviews.json";
import { useEffect } from "react";

const AllReviews = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderReview = (review: string) => {
        const paragraphs = review.split("¶");
        return paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));
    };

    return (
        <div className="reviews">
            <h1>All Reviews</h1>

            <Link to="/" className="home-link">Back to home</Link>
            <ReviewsWaterfall>

                {reviews.map((review, index) => (
                    <div key={index} className="reviews__review">
                        <div>{renderReview(review.text)}</div>
                    </div>
                ))}
            </ReviewsWaterfall>
        </div>
    );
};
export default AllReviews