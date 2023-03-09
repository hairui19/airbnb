import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface Review {
  username: string;
  userProfileImageUrl: string;
  itemImageUrl: string;
  itemRating: number;
  itemReview: string;
}

const reviewCollectionRef = collection(db, "reviews");

export const getReviews = async (): Promise<[string, Review][]> => {
  return getDocs(reviewCollectionRef).then((snapshot) => {
    return snapshot.docs.map((doc) => {
      return [doc.id, { ...doc.data() } as Review];
    });
  });
};

export const addReview = async (review: Review): Promise<string> => {
  return addDoc(reviewCollectionRef, review).then((document) => {
    return document.id;
  });
};
