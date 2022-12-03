import React, { useState } from "react";
import PostItem from "./PostItem";
import { BLOGDATA } from "../../data";
import moment from "moment/moment";

const PostList = ({ blogList, handleDelete }) => {
  return (
    <div className="grid grid-cols-2 gap-6 py-12">
      {blogList &&
        blogList.map(
          ({ id, title, content, like, comments, createdAt }, index) => (
            <PostItem
              title={title}
              content={content}
              like={like}
              comments={comments}
              key={index}
              handleDelete={handleDelete}
              id={id}
              createdAt={moment(
                createdAt ? createdAt.seconds * 1000 : 1600000000
              ).format("DD MMM YYYY hh:mm a")}
            />
          )
        )}
    </div>
  );
};

export default PostList;
