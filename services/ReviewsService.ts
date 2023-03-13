import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";
import { uuidv4 } from "@firebase/util";

export interface Review {
  username: string;
  userProfileImageUrl: string;
  itemImageUrl: string;
  itemRating: number;
  itemReview: string;
}

const reviewCollectionName = "reviews";
const reviewCollectionRef = collection(db, reviewCollectionName);
const reivewImageDir = "review_images/";

export const getReviews = async (): Promise<[string, Review][]> => {
  return getDocs(reviewCollectionRef).then((snapshot) => {
    return snapshot.docs.map((doc) => {
      return [doc.id, { ...doc.data() } as Review];
    });
  });
};

export const getReviewById = async (id: string): Promise<Review | null> => {
  const docRef = doc(db, reviewCollectionName, id);
  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    const reviewData = snapshot.data();
    return { ...reviewData } as Review;
  } else {
    return null;
  }
};

export const uploadReview = async (
  username: string,
  userProfileImageUrl: string,
  itemImage: File,
  itemRating: number,
  itemReview: string
): Promise<string> => {
  const storageRef = ref(storage, reivewImageDir + `${uuidv4()}`);
  const itemImageUrl = await uploadBytes(storageRef, itemImage).then(
    (snapshot) => {
      return getDownloadURL(snapshot.ref);
    }
  );
  return addDoc(reviewCollectionRef, {
    username: username,
    userProfileImageUrl: userProfileImageUrl,
    itemImageUrl: itemImageUrl,
    itemRating: itemRating,
    itemReview: itemReview,
  }).then((document) => {
    return document.id;
  });
};
