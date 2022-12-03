import React, { useEffect } from "react";
import { BookMark, Comment, ThumbsUp } from "../vectors";

const PostItem = ({ id, title, content, like, comments, handleDelete }) => {
  return (
    <div className="border flex flex-col gap-4 justify-between rounded-lg border-[#1E293B] py-4 px-6">
      <div className="flex flex-col gap-3">
        <h4 className="text-xl text-gray-100 font-semibold">{title}</h4>
        <p className="text-gray-500">{content}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button>
            <BookMark className={"text-gray-100"} />
          </button>
          <button
            onClick={(e) => handleDelete(e, id)}
            className="py-1 px-2 bg-blue-600 rounded-full"
          >
            Delete
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
