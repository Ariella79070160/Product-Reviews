import clsx from "clsx";
import RatingStars from "../ui/Stars";
import Button from '../ui/Button'
import ProgressBar from "../ui/ProgressBar";
import { useProductReviewsContext } from "./ReviewsContext";



const OverallRating = () => {
    const { aggregateRating, onRatingSelect, selectedRating } = useProductReviewsContext()
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
        <div className={clsx('flex flex-col gap-6')}>
            <div className="flex flex-col gap-2">
                <div className="text-xl font-semibold text-neutral-900">
                    Overall Rating
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-neutral-900">
                        {aggregateRating.rating}
                    </span>
                    <RatingStars value={aggregateRating.rating} className="gap-2"/>
                    {hasReviews && (
                        <span className="text-nowrap text-sm text-neutral-600">
                            Based on {aggregateRating.total} reviews
                        </span>
                    )}
                </div>
            </div>

            <div className={clsx('flex flex-col gap-4', 'py-4')}>
                {ratingData.map((ratingdata) => {
                    const ratingPercentage = 
                        aggregateRating === 0
                            ? 0
                            : Math.floor((Number(ratingdata.value)/aggregateRating.total)*100)

                    return(
                        <button
                            className={clsx(
                                'flex items-center gap-2 self-stretch',
                                'text-neutral-600 disabled:text-neutral-400',
                                'cursor-pointer disabled:pointer-events-none',
                            )}
                            key={ratingdata.rating}
                            disabled={!hasReviews}
                            onClick={()=>onRatingSelect(ratingdata.rating)}>
                            <span
                                className={clsx(
                                    'w-[120px]',
                                    'px-0.5',
                                    'text-left font-medium',
                                  )}>
                                    {ratingdata.name}
                            </span>
                            <ProgressBar value={ratingdata.value} color={ratingdata.color}/>
                            <span className="w-[42px] text-right">{ratingPercentage}%</span>
                        </button>

                    )
                })}

            </div>

            <div className="flex justify-center gap-6">
                {selectedRating && (
                    <div className="flex-1">
                        <Button
                            label="Clear Filter"
                            variant="tertiary"
                            size="xl"
                            className="w-full"
                            onClick={() => onRatingSelect(null)}
                        />
                  </div>
                )}

                <div className={clsx(selectedRating ? 'flex-1' : 'w-[153px]')}>
                    <Button
                        label="Write a review"
                        variant="secondary"
                        size="xl"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    )

}

export default OverallRating;