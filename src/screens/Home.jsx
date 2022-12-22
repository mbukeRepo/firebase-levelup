import React, { useEffect, useState } from "react";
import { Form, Input, Submit } from "../components/Form";
import PostList from "../components/Post/PostList";
import SideBar from "../components/SideBar";
import { useAuth } from "../context/auth-context";
import { addPost, getPosts, deletePost, likePost } from "../utils/services";

const Home = () => {
  const [formState, setFormState] = useState({});
  const [blogList, setBlogList] = useState(null);
  const { user, isAuthenticated } = useAuth();

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
    await addPost({ uid: user.uid, userName: user.displayName, ...formState });
    setFormState({});
  };
  const likeHandler = async (id) => {
    const { like } = blogList.find(({ id: filId }) => filId === id);
    likePost(like, id);
  };
  return (
    <div className="bg-black container mx-auto  w-full flex gap-3 py-6 px-4">
      <SideBar />
      <div className="flex-1  px-16 py-4 rounded-lg bg-dark-blue">
        {true && (
          <Form
            handleSubmit={onSubmit}
            formState={formState}
            handleChange={handleChange}
          >
            <Input name="title" />
            <Input name="content" />
            <Submit className={"bg-blue-600 py-2 px-4 rounded-full"}>
              Post
            </Submit>
          </Form>
        )}
        <PostList
          blogList={blogList}
          likeHandler={likeHandler}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Home;
