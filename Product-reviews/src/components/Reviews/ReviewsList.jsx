import clsx from 'clsx';
import { RiChatSmile3Line } from 'react-icons/ri';

import { useProductReviewsContext } from './ReviewsContext';
import Button from '../ui/Button'
import Avatar from '../ui/Avatar'
import RatingStars from '../ui/Stars'
 
import { formatDate } from '../../utils';


const ReviewsList = () => {
    const { reviews, 
            pagination,
            isFetchingMore,
            currentPage,
            loadMoreReviews,   } = useProductReviewsContext()

    const moreReviewsCount = pagination.total - reviews.length;

    if (reviews.length === 0) {
        return (
            <div class="flex h-full flex-col items-center justify-center gap-5">
            <div
                class={clsx(
                'size-12 rounded-full bg-white shadow',
                'flex items-center justify-center',
                'text-indigo-700',
                )}>
                <RiChatSmile3Line className="size-6" />
            </div>
            <div
                class={clsx(
                "gap-2', 'text-neutral-900 flex flex-col items-center text-center",
                )}>
                <span class="text-xl font-medium">No reviews yet!</span>
                <span>Be the first to review this product</span>
            </div>
            </div>
        );
    }

    if (currentPage === 1 && isFetchingMore) {
        return (
          <div className="flex h-full flex-col items-center justify-center gap-5">
            Loading...
          </div>
        );
    }

    return (
        <div className="flex flex-col gap-12 pb-6">
            <div className="flex flex-col gap-6 md:gap-8">
                {reviews.map((review) => (
                    <div 
                        className={clsx('flex flex-col gap-4', 'text-neutral-600')}
                        key={review.user.user_id + review.created_at}>
                        <div 
                            className="flex items-center gap-4" >
                            <Avatar src={review.user.avatar_url} name={review.user.name}/>
                            <div className="flex grow flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-base font-semibold text-neutral-900">
                                        {review.user.name}
                                    </h4>
                                    <span className="text-nowrap text-xs">
                                        {formatDate(new Date(review.created_at))}
                                    </span>
                                </div>
                                <RatingStars value={review.rating} />
                            </div>
                        </div>

                        <div>
                            {review.content && (<span>{review.content}</span>)}
                        </div>
                    </div>
                ))}
                {pagination.hasMore && (
                    <Button
                        label={`See ${moreReviewsCount} more reviews`}
                        variant="secondary"
                        size="lg"
                        onClick={loadMoreReviews}
                        isDisabled={isFetchingMore}
                    />
                )}
            </div>

        </div>
    )

}

export default ReviewsList