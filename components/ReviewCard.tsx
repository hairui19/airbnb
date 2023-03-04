import Image from "next/legacy/image"
import {
    StarIcon as StarIconSolid,
} from '@heroicons/react/24/solid'
import {
    StarIcon as StarIconOutline,
} from '@heroicons/react/24/outline'

interface ReviewCardProps {
    imageURL: string,
    username: string,
    title: string,
}

const ReviewCard = ({ imageURL, username, title }: ReviewCardProps) => {
    const numberOfRatings = 5;
    return (
        <div className="flex flex-col items-center overflow-clip w-80 relative cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
            <div className="relative w-full h-80">
                <Image
                    src={imageURL}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>

            <div className="flex flex-col items-center absolute top-72 left-1/2 transform -translate-x-1/2">
                    <div className="relative h-12 w-12 border-2 border-white rounded-full">
                        <Image
                            src={imageURL}
                            layout="fill"
                            className="rounded-full"
                        />
                    </div>

                    <h3 className=" p-1">{username}</h3>

                    <div className="flex space-x-1 ">
                        {Array(numberOfRatings).fill(null).map(_ =>
                            <StarIconSolid className="h-6" />
                        )}
                    </div>
                </div>

            <div className="pt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>

        </div>
    )
}

export default ReviewCard