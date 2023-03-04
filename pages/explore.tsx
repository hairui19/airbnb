import Header from "../components/Header"
import ReviewCard from "../components/ReviewCard"

interface ExploreProps {

}

const Explore = () => {
    const reviews = [
        { imageURL: "https://links.papareact.com/2io", username: "", title: "", },
        { imageURL: "https://links.papareact.com/q7j", username: "", title: "", },
        { imageURL: "https://links.papareact.com/s03", username: "", title: "", },
        { imageURL: "https://links.papareact.com/8ix", username: "", title: "", }
    ]
    return (
        <div>
            <Header />
            <main className=" max-w-7xl mx-auto px-8 sm:px-1 pt-2">
                <div className="grid grid-cols-3 gap-y-12">
                    {reviews.map(review => {
                        return (
                            <ReviewCard
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