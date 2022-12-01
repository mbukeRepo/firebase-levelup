import React from "react";
import { BookMark, FeedIcon } from "../vectors";
const SideBar = () => {
  return (
    <div className="w-48 py-10 px-4 flex flex-col gap-3 rounded-lg bg-dark-blue">
      <div className="flex flex-col gap-3 pb-5 border-b border-black">
        <div className="flex gap-2 items-center">
          <span>
            <FeedIcon />
          </span>
          <span>My Feed</span>
        </div>
        <div className="flex gap-2 items-center">
          <span>
            <BookMark />
          </span>
          <span>Book marked</span>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h5 className="text-lg">Topics</h5>
        <ul>
          {[
            "AWS",
            "Firebase",
            "Docker",
            "GoLang",
            "React",
            "web3",
            "Node.js",
          ].map((topic, index) => (
            <li key={index} className="py-1 px-3 hover:bg-gray-600 rounded-lg">
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
