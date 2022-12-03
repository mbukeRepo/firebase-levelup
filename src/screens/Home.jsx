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
    const { unSubscribe } = getPosts(setBlogList);
    return () => {
      unSubscribe();
    };
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleDelete = async (e, id) => await deletePost(id);

  const onSubmit = async (e) => {
    e.preventDefault();
    await addPost(formState);
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
