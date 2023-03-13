import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { getReviewById, Review } from "../services/ReviewsService";

interface ReviewdetailsProps {
    reivew: Review
}

const ReviewDetails = ({ reivew }: ReviewdetailsProps) => {

    return (
        <div>
            <Header />
            <main className=" max-w-7xl mx-auto px-8 sm:px-1 pt-6 flex flex-col justify-center">
                <h1>I am the title</h1>
                <div>I am the image</div>
                <div>{reivew.itemReview} </div>
                <div>I am the clickable to the place</div>
            </main>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps<ReviewdetailsProps> = async (context) => {
    const { reviewId } = context.query;
    const reivew = await getReviewById(reviewId as string)
    if (reivew === null) throw new Error("Cannot find the review with the id")

    return {
        props: {
            reivew: reivew,
        },
    };
}

export default ReviewDetails