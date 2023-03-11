import { getSession, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from 'next'
import { ChangeEvent, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { uuidv4 } from "@firebase/util";
import { uploadReview } from "../services/ReviewsService";
import { useRouter } from "next/router";


const PostReview = () => {
    const { data: session }  = useSession()
    const router = useRouter()
    if (session === null)  router.push("/accounts/login")

    const [imageUpload, setImageUpload] = useState<File | undefined>()
    const handleSelectedImage = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0]
        setImageUpload(selectedFile ?? undefined)
    }

    const handleUploadImage = () => {
        if (imageUpload === undefined) return
        const id = uploadReview(
            "hairuilin",
            session?.user?.image ?? "placeholder image",
            imageUpload,
            1,
            "hairui's random post",
        )
    }
    
    return (
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pb-5 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">

                <div>
                    <div className="mt-3 text-center sm:mt-5">
                        Upload A Photo
                    </div>

                    <div>
                        <input type="file"
                            onChange={handleSelectedImage}
                        />
                    </div>

                    <div className="mt-2">
                        <input type="text" className="border-none focus:ring-0 w-full text-center min-h-[500px]" placeholder="Please enter a review" />
                    </div>
                </div>

                <div className="mt-5 sm:mt-6">
                    <button onClick={handleUploadImage} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 
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