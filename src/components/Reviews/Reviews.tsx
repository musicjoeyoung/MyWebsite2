import "./Reviews.scss";

import reviews from "../../data/reviews.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Reviews = () => {
    const [visibleReviews, setVisibleReviews] = useState(3);
    const navigate = useNavigate();

    const showMore = () => {
        setVisibleReviews(10);
    };

    const showLess = () => {
        setVisibleReviews(3);
    };

    const goToAllReviews = () => {
        navigate("/all-reviews");
    };

    const renderReview = (review: string) => {
        const paragraphs = review.split("¶");
        return paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));
    };

    return (
        <div className="reviews" id="reviews">

            <h2>Reviews</h2>
            <p>Here are some reviews from people I have either worked with or taught in the past.</p>
            {reviews.slice(0, visibleReviews).map((review, index) => (
                <div key={index} className="reviews__review">
                    <div>{renderReview(review.text)}</div>
                </div>
            ))}
            <div className="reviews__buttons">
                {visibleReviews === 3 && (
                    <button onClick={showMore} className="reviews__button">Show More</button>
                )}
                {visibleReviews === 10 && (
                    <button onClick={showLess} className="reviews__button">Show Less</button>
                )}
                <button onClick={goToAllReviews} className="reviews__button">Show All Reviews</button>
            </div>
        </div>
    );
};

export default Reviews;