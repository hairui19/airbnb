import Image from "next/legacy/image"
import {
    StarIcon as StarIconSolid,
} from '@heroicons/react/24/solid'
import {
    StarIcon as StarIconOutline,
} from '@heroicons/react/24/outline'
import { Review } from "../services/ReviewsService";

interface ReviewCardProps {
    imageURL: string,
    username: string,
    title: string,
}

const ReviewCard = ({ username,
    userProfileImageUrl,
    itemImageUrl,
    itemRating,
    itemReview }: Review) => {
    const numberOfRatings = 5;
    return (
        <div className="flex flex-col items-center overflow-clip w-80 relative cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
            <div className="relative w-full h-80">
                <Image
                    src={itemImageUrl}
                    layout="fill"
                    objectFit="cover"
                    className=" rounded-sm"
                />
            </div>

            <div className="flex flex-col items-center absolute top-72 left-1/2 transform -translate-x-1/2">
                <div className="relative h-12 w-12 border-2 border-white rounded-full">
                    <Image
                        src={itemImageUrl}
                        layout="fill"
                        className="rounded-full"
                    />
                </div>

                <h3 className=" p-1">{username}</h3>

                <div className="flex space-x-1 ">
                    {Array(numberOfRatings).fill(null).map((_, index) =>
                        <StarIconSolid key={index} className="h-6" />
                    )}
                </div>
            </div>

            <div className="pt-20">
                {itemReview}
            </div>

        </div>
    )
}

export default ReviewCard