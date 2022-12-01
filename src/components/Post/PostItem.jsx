import React from "react";
import { BookMark, Comment, ThumbsUp } from "../vectors";

const PostItem = ({ title, content, like, comments }) => {
  return (
    <div className="border flex flex-col gap-4 rounded-lg border-[#1E293B] py-4 px-6">
      <h4 className="text-xl text-gray-100 font-semibold">{title}</h4>
      <p className="text-gray-500">{content}</p>
      <div className="flex justify-between items-center">
        <div>
          <button>
            <BookMark className={"text-gray-100"} />
          </button>
        </div>
        <div className="flex items-center gap-2 text-gray-100">
          <div className="flex items-center gap-2">
            <Comment />
            <span>12</span>
          </div>
          <div className="flex items-center gap-2">
            <ThumbsUp />
            <span>12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
