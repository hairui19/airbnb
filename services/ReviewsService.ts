import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface Review {
  id: string;
  username: string;
  userProfileImageUrl: string;
  itemImageUrl: string;
  itemRating: number;
  itemReview: string;
}

class ReviewsService {
  private static REVIEW_COLLECTION_REF = collection(db, "reviews");

  async getReviews(): Promise<Review[]> {
    return getDocs(ReviewsService.REVIEW_COLLECTION_REF).then((snapshot) => {
      return snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id } as Review;
      });
    });
  }
}

export default new ReviewsService();
