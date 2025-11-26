import { EmptyStarIcon, HalfStar, StarIcon } from "../assets/icons";

const StarRating = ({ rating }: { rating: any }) => {
    if (!rating?.ratingValue) return null;

    const { ratingValue, bestRating = 10, worstRating = 1 } = rating;
    const normalizedRating = ((ratingValue - worstRating) / (bestRating - worstRating)) * 5;
    const fullStars = Math.floor(normalizedRating);
    const hasHalfStar = normalizedRating % 1 >= 0.5;

    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => {
                if (star <= fullStars) {
                    return (
                        <StarIcon key={star} />
                    );
                } else if (star === fullStars + 1 && hasHalfStar) {
                    return (
                        <HalfStar />
                    );
                } else {
                    return (
                        <EmptyStarIcon />
                    );
                }
            })}
            <span className="ml-1 text-sm text-gray-400">
                {ratingValue}/{bestRating}
            </span>
        </div>
    );
};

export default StarRating;