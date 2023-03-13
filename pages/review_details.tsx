import { useRouter } from "next/router";

const ReviewDetails = () => {
    const router = useRouter();
    const { reviewId  } = router.query

    return (
        <div>
            <h1>Hello world this is a detailed page with {reviewId}</h1>
        </div>
    )
}

export default ReviewDetails