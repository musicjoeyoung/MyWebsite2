import "./ReviewsAI.css";

import reviews from "../../assets/data/reviews.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ReviewsAI = () => {
    const [visibleReviews, setVisibleReviews] = useState(3);
    const navigate = useNavigate();

    const renderReview = (review: string) =>
        review.split("¶").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));

    return (
        <div className="reviews-ai" id="reviews">
            <h2 className="reviews-ai__heading">Reviews</h2>
            <p className="reviews-ai__subheading">
                Here are some reviews from people I have either worked with or taught in the past.
            </p>

            <div className="reviews-ai__list">
                {reviews.slice(0, visibleReviews).map((review, index) => (
                    <div key={index} className="reviews-ai__card">
                        <div className="reviews-ai__card-glow" aria-hidden="true" />
                        {renderReview(review.text)}
                    </div>
                ))}
            </div>

            <div className="reviews-ai__buttons">
                {visibleReviews === 3 && (
                    <button onClick={() => setVisibleReviews(10)} className="reviews-ai__button">
                        Show More
                    </button>
                )}
                {visibleReviews === 10 && (
                    <button onClick={() => setVisibleReviews(3)} className="reviews-ai__button">
                        Show Less
                    </button>
                )}
                <button onClick={() => navigate("/all-reviews")} className="reviews-ai__button">
                    Show All Reviews
                </button>
            </div>
        </div>
    );
};

export default ReviewsAI;
