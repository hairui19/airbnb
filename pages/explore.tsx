import Header from "../components/Header"
import ReviewCard from "../components/ReviewCard"
import ReviewsService from "../services/ReviewsService"

interface ExploreProps {

}

const Explore = () => {
    const reviews = [
        { imageURL: "https://links.papareact.com/2io", username: "", title: "", },
        { imageURL: "https://links.papareact.com/q7j", username: "", title: "", },
        { imageURL: "https://links.papareact.com/s03", username: "", title: "", },
        { imageURL: "https://links.papareact.com/8ix", username: "", title: "", }
    ]
    const getReviews = async () => {
        return await ReviewsService.getReviews()
    }
    console.log("printing a hello world first")
    console.log(getReviews())

    return (
        <div>
            <Header />
            <main className=" max-w-7xl mx-auto px-8 sm:px-1 pt-2">
                <div className="inline-grid grid-cols-3 grid-flow-auto gap-y-12 gap-x-11 auto-cols-max">
                    {reviews.map((review, index) => {
                        return (
                            <ReviewCard
                                key={review.imageURL}
                                imageURL={review.imageURL}
                                username={review.username}
                                title={review.title}
                            />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default Explore