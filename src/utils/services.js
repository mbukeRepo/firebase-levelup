import db from "./firebase";
import {
  addDoc,
  doc,
  collection,
  deleteDoc,
  onSnapshot,
  query,
  serverTimestamp,
} from "firebase/firestore";
export const getPosts = (setBlogList) => {
  const unSubscribe = onSnapshot(
    query(collection(db, "posts")),
    async (query) => {
      const posts = [];
      query.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });
      console.log(posts);
      setBlogList(posts);
    }
  );
  return { unSubscribe };
};

export const addPost = async (post) => {
  await addDoc(collection(db, "posts"), {
    ...post,
    createdAt: serverTimestamp(),
  });
};

export const deletePost = async (id) => {
  await deleteDoc(doc(collection(db, "posts"), id));
};
