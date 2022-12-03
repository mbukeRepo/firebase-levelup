import React, { useState } from "react";
import PostItem from "./PostItem";
import { BLOGDATA } from "../../data";

const PostList = ({ blogList, handleDelete }) => {
  return (
    <div className="grid grid-cols-2 gap-6 py-12">
      {blogList &&
        blogList.map(({ id, title, content, like, comments }, index) => (
          <PostItem
            title={title}
            content={content}
            like={like}
            comments={comments}
            key={index}
            handleDelete={handleDelete}
            id={id}
          />
        ))}
    </div>
  );
};

export default PostList;
