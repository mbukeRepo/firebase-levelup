import React, { useState } from "react";
import { Form, Input, Submit } from "../components/Form";
import PostList from "../components/Post/PostList";
import SideBar from "../components/SideBar";

const Home = () => {
  const [formState, setFormState] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
        <PostList />
      </div>
    </div>
  );
};

export default Home;
