import db from "./firebase";
import {
  addDoc,
  doc,
  collection,
  getDocs,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

export const getPosts = async () => {
  const posts = await getDocs(collection(db, "posts"));
  const newPosts = [];
  posts.forEach((doc) => {
    newPosts.push({ id: doc.id, ...doc.data() });
  });
  return newPosts;
};

export const addPost = async (post) => {
  const docRef = await addDoc(collection(db, "posts"), post);
  return await { id: docRef.id, ...post };
};

export const deletePost = async (id) => {
  await deleteDoc(doc(collection(db, "posts"), id));
};
