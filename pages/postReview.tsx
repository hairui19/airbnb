import { getSession, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from 'next'
import { ChangeEvent, useState } from "react";
import { uploadReview } from "../services/ReviewsService";
import { useRouter } from "next/router";
import { getUserSession } from "../users/session";
import ImagePreview from "../components/ImagePreview";
import RatingStars from "../components/RatingStars";


const PostReview = () => {
    const userSession = getUserSession()
    const router = useRouter()
    if (userSession === null) router.push("/accounts/login")

    const [isUploading, setIsUploading] = useState(false)
    const [imageUpload, setImageUpload] = useState<File | null>(null);
    const handleImageSelect = (image: File) => {
        setImageUpload(image);
    }

    const [reviewTitle, setReviewTitle] = useState('')
    const handleReviewTitle = (event: React.FormEvent<HTMLTextAreaElement>) => {
        setReviewText(event.currentTarget.value)
    }


    const [reviewtext, setReviewText] = useState('');
    const handleReviewText = (event: React.FormEvent<HTMLTextAreaElement>) => {
        setReviewText(event.currentTarget.value)
    }

    const [rating, setRating] = useState(0)
    const handRatingSelect = (rating: number) => {
        setRating(rating)
    }

    const handleUploadImage = async () => {
        if (imageUpload === null) return
        setIsUploading(true)
        try {
            await uploadReview(
                userSession!.user.username,
                userSession!.user.userProfileImageUrl,
                imageUpload,
                rating,
                reviewtext,
            )
            router.push("/")
        } catch (error) {
            console.error(error);
            alert('There was an error uploading your file. Please try again.');
            setIsUploading(false);
        }
    }

    return (
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pb-5 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">

                <div>
                    <div className="mt-3 text-center sm:mt-5">
                        Upload A Photo
                    </div>

                    <div>
                        <ImagePreview onImageSelect={handleImageSelect} />
                    </div>

                    <div className="mt-2">
                        <label className="text-sm block text-gray-700">Rate your item</label>
                        <RatingStars initialRating={0} allowSelection={true} onChange={handRatingSelect} />
                    </div>

                    <div className="mt-2">
                        <label className="text-sm block text-gray-700">Title of your review</label>
                        <textarea
                            className="mt-2 h-11 border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="Example: What a great camera!"
                            onInput={handleReviewTitle}
                        ></textarea>
                    </div>

                    <div className="mt-2">
                        <label className="text-sm block text-gray-700">Review your item</label>
                        <textarea
                            className="mt-2 h-32 border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="Please enter your review here"
                            onInput={handleReviewText}
                        ></textarea>
                    </div>
                </div>

                <div className="mt-5 sm:mt-6">
                    <button onClick={handleUploadImage} disabled={!imageUpload || reviewTitle.length < 15 || reviewtext.length < 15 || rating === 0 || isUploading} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:cursor-not-allowed disabled:bg-gray-300">
                        Upload Review
                    </button>
                </div>

            </div>
        </div>
    )
}

export default PostReview;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: 'accounts/login'
            }
        }
    }

    return {
        props: {
            session
        }
    }
}