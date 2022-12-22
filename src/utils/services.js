import db, { auth } from "./firebase";
import {
  addDoc,
  doc,
  collection,
  deleteDoc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
export const getPosts = (setBlogList) => {
  const unSubscribe = onSnapshot(
    query(collection(db, "posts")),
    async (query) => {
      const posts = [];
      query.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });
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

export const likePost = async (likes, id) => {
  const docRef = doc(collection(db, "posts"), id);
  await updateDoc(docRef, { like: likes ? likes + 1 : 1 });
};

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
};

export const signOutUser = async () => {
  await signOut(auth);
};
