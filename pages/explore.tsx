import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import Header from "../components/Header"
import ReviewCard from "../components/ReviewCard"
import { getReviews, Review } from "../services/ReviewsService"

interface ExplorePageProps {
    reviews: [string, Review][]
}

const Explore = ({ reviews }: ExplorePageProps) => {
    const router = useRouter()

    const onReviewClick = (reviewId: string) => {
        router.push({
            pathname: "/review_details",
            query: {
                reviewId: reviewId
            }
        })
    }

    return (
        <div>
            <Header />
            <main className=" max-w-7xl mx-auto px-8 sm:px-1 pt-6 flex justify-center">
                <div className="inline-grid grid-cols-3 grid-flow-auto gap-x-[1.5rem] auto-cols-max">
                    {/** Flex boxes */}
                    <div className="inline-flex flex-col gap-10">
                        {reviews
                            .filter((_, index) => index % 3 == 0)
                            .map((review) => {
                                return (
                                    <ReviewCard
                                        key={review[0]}
                                        review={review[1]}
                                        onClick={() => { onReviewClick(review[0]) }}
                                    />
                                )
                            })}
                    </div>
                    <div className="inline-flex flex-col gap-10">
                        {reviews
                            .filter((_, index) => index % 3 == 1)
                            .map((review) => {
                                return (
                                    <ReviewCard
                                        key={review[0]}
                                        review={review[1]}
                                        onClick={() => { onReviewClick(review[0]) }}
                                    />
                                )
                            })}
                    </div>
                    <div className="inline-flex flex-col gap-10">
                        {reviews
                            .filter((_, index) => index % 3 == 2)
                            .map((review) => {
                                return (
                                    <ReviewCard
                                        key={review[0]}
                                        review={review[1]}
                                        onClick={() => { onReviewClick(review[0]) }}
                                    />
                                )
                            })}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Explore

export const getServerSideProps: GetServerSideProps<ExplorePageProps> = async () => {
    const reviews = await getReviews()
    return {
        props: {
            reviews: reviews
        }
    }
}