import React from "react";
import { Day, Search, Night, Profile, Pen } from "../vectors";

const NavBar = () => {
  return (
    <div className="flex gap-12 w-full px-16 py-3 items-center bg-dark-blue text-white">
      <div className="text-2xl font-bold">MbukBlog</div>
      <div className="flex justify-evenly flex-1 gap-6 items-center">
        <div className="flex flex-grow gap-2 px-4 rounded-full py-2 text-gray-400 items-center bg-black border border-gray-800">
          <div>
            <Search />
          </div>
          <input
            placeholder="Search for articles and code snipets."
            className="outline-none flex-grow bg-black"
          />
        </div>
        <div>
          <button className="py-2 px-4 bg-blue-600 rounded-full gap-2 flex items-center">
            <Pen />
            <span>Write</span>
          </button>
        </div>
        <div>
          <span className="hidden">
            <Day />
          </span>
          <span>
            <Night />
          </span>
        </div>

        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
