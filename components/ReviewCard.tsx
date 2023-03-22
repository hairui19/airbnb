import Image from "next/legacy/image"
import {
    StarIcon as StarIconSolid,
} from '@heroicons/react/24/solid'
import {
    StarIcon as StarIconOutline,
} from '@heroicons/react/24/outline'
import { Review } from "../services/ReviewsService";
import RatingStars from "./RatingStars";

interface ReviewCardProps {
    review: Review,
    onClick?: () => void
}

const ReviewCard = ({
    review, onClick }: ReviewCardProps) => {
    const numberOfRatings = 5;
    return (
        <div className="flex flex-col items-center overflow-clip w-80 relative cursor-pointer hover:scale-[102%] transition transform duration-300 ease-out" onClick={onClick}>
            <div className="relative w-full h-80">
                <Image
                    src={review.itemImageUrl}
                    layout="fill"
                    objectFit="cover"
                    className=" rounded-lg"
                />
            </div>

            <div className="flex flex-col items-center absolute top-72 left-1/2 transform -translate-x-1/2">
                {/* User profile picture */}
                <div className="relative h-12 w-12 border-2 border-white rounded-full">
                    <Image
                        src={review.userProfileImageUrl}
                        layout="fill"
                        className="rounded-full"
                    />
                </div>

                <h3 className=" p-1">{review.username}</h3>

                <div className="flex space-x-1 ">
                    <RatingStars initialRating={review.itemRating} allowSelection={false} onChange={() => { }} />
                </div>
            </div>
            <div className="pt-20 self-stretch">
                <p className=" text-left text-xl font-semibold truncate overflow-hidden overflow-ellipsis">{review.reviewTitle}</p>
                <p>{review.itemReview}</p>
            </div>

        </div>
    )
}

export default ReviewCard