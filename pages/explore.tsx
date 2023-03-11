import { GetServerSideProps } from "next"
import Header from "../components/Header"
import ReviewCard from "../components/ReviewCard"
import { getReviews, Review } from "../services/ReviewsService"

interface ExplorePageProps {
    reviews: [string, Review][]
}

const Explore = ({ reviews }: ExplorePageProps) => {
    return (
        <div>
            <Header />
            <main className=" max-w-7xl mx-auto px-8 sm:px-1 pt-2 flex justify-center">
                <div className="inline-grid grid-cols-3 grid-flow-auto gap-y-12 gap-x-4 auto-cols-max">
                    {/** Flex boxes */}
                    <div className="flex-inline flex-col">
                        {reviews
                            .filter((_, index) => index % 3 == 0)
                            .map((review) => {
                                return (
                                    <ReviewCard
                                        key={review[0]}
                                        username={review[1].username}
                                        userProfileImageUrl={review[1].userProfileImageUrl}
                                        itemImageUrl={review[1].itemImageUrl}
                                        itemRating={review[1].itemRating}
                                        itemReview={review[1].itemReview}
                                    />
                                )
                            })}
                    </div>
                    <div className="flex-inline flex-col">
                        {reviews
                            .filter((_, index) => index % 3 == 1)
                            .map((review) => {
                                return (
                                    <ReviewCard
                                        key={review[0]}
                                        username={review[1].username}
                                        userProfileImageUrl={review[1].userProfileImageUrl}
                                        itemImageUrl={review[1].itemImageUrl}
                                        itemRating={review[1].itemRating}
                                        itemReview={review[1].itemReview}
                                    />
                                )
                            })}
                    </div>
                    <div className="flex-inline flex-col">
                        {reviews
                            .filter((_, index) => index % 3 == 2)
                            .map((review) => {
                                return (
                                    <ReviewCard
                                        key={review[0]}
                                        username={review[1].username}
                                        userProfileImageUrl={review[1].userProfileImageUrl}
                                        itemImageUrl={review[1].itemImageUrl}
                                        itemRating={review[1].itemRating}
                                        itemReview={review[1].itemReview}
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