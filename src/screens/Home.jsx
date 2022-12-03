import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { Form, Input, Submit } from "../components/Form";
import PostList from "../components/Post/PostList";
import SideBar from "../components/SideBar";
import db from "../utils/firebase";
import { addPost, getPosts, deletePost } from "../utils/services";

const Home = () => {
  const [formState, setFormState] = useState({});
  const [blogList, setBlogList] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      query(collection(db, "posts")),
      async (query) => {
        const newPosts = [];
        query.forEach((doc) => {
          newPosts.push({ id: doc.id, ...doc.data() });
        });
        setBlogList(newPosts);
      }
    );
    return () => {
      unSubscribe();
    };
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleDelete = async (e, id) => {
    console.log(id);
    await deletePost(id);
    const newBlogList = blogList.filter(({ id: bId }) => id !== bId);
    setBlogList(newBlogList);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const blogPost = await addPost(formState);
    setBlogList([...blogList, blogPost]);
    setFormState({});
  };
  return (
    <div className="bg-black w-full flex gap-3 py-6 px-4">
      <SideBar />
      <div className="flex-1 px-16 py-4 rounded-lg bg-dark-blue">
        <Form
          handleSubmit={onSubmit}
          formState={formState}
          handleChange={handleChange}
        >
          <Input name="title" />
          <Input name="content" />
          <Submit className={"bg-blue-600 py-2 px-4 rounded-full"}>Post</Submit>
        </Form>
        <PostList blogList={blogList} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Home;
