import React from "react";
import PostItem from "./PostItem";
import { BLOGDATA } from "../../data";

const PostList = () => {
  return (
    <div className="grid grid-cols-2 gap-6 py-12">
      {BLOGDATA.map(({ title, content, like, comments }, index) => (
        <PostItem
          title={title}
          content={content}
          like={like}
          comments={comments}
          key={index}
        />
      ))}
    </div>
  );
};

export default PostList;
