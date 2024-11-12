import clsx from "clsx";
import RatingStars from "../ui/Stars";
import Button from '../ui/Button'
import { useProductReviewsContext } from "./ReviewsContext";



const OverallRating = () => {
    const { aggregateRating } = useProductReviewsContext()
    const hasReviews = aggregateRating.total && aggregateRating.total !== 0

    const ratingData = [
        {
            name: 'Excellent',
            color: '#16A34A',
            value: aggregateRating.counts.find(item => item.rating === 5).count,
            rating: 5
        },
        {
            name: 'Good',
            color: '#22C55E',
            value: aggregateRating.counts.find((item) => item.rating === 4).count,
            rating: 4,
        },
        {
            name: 'Average',
            color: '#FDE047',
            value: aggregateRating.counts.find((item) => item.rating === 3).count,
            rating: 3,
        },
        {
            name: 'Below Average',
            color: '#EAB308',
            value: aggregateRating.counts.find((item) => item.rating === 2).count,
            rating: 2,
        },
        {
            name: 'Poor',
            color: '#FACC15',
            value: aggregateRating.counts.find((item) => item.rating === 1).count,
            rating: 1,
        },
    ]

    return(
        <div className="overall">
            <div className="upper-without-bars">
                <div>
                    Overall Rating
                </div>
                <div className="aggregate">
                    <span>
                        {aggregateRating.rating}
                    </span>
                    <RatingStars value={aggregateRating.rating}/>
                    {hasReviews && (
                        <span>
                            Based on {aggregateRating.total} reviews
                        </span>
                    )}
                </div>
            </div>

            <div className="bars">

            </div>
        </div>
    )

}

export default OverallRating;