import clsx from "clsx";
import Rating from "./Rating";
import ReviewsList from "./ReviewsList";

import { useProductReviewsContext } from "./ReviewsContent";

const Reviews = () => {
    const { isLoading, reviews } = useProductReviewsContext()

    return (
        <div className="reviews">
            {isLoading || !reviews ? (
                <div>
                    Loading...
                </div>
            ) : (
                <>
                    <div>
                        <Rating />
                    </div>
                    <div>
                        <ReviewsList />
                    </div>
                </>
            )}
        </div>
    )
}

export default Reviews