import React from "react";
import { useAuth } from "../../context/auth-context";
import { Day, Search, Night, Profile, Pen } from "../vectors";

const NavBar = () => {
  const { user, signIn, signOut, isAuthenticated } = useAuth();
  return (
    <div className="bg-dark-blue w-full">
      <div className="flex container mx-auto  gap-12 w-full px-16 py-3 items-center  text-white">
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

          <div className="group relative">
            <Profile />
            <div className="absolute right-0 bottom-0 pt-5 translate-y-full w-48 h-48 hidden group-hover:block">
              <div className="bg-[#1E293B] grid px-4 py-12 place-content-center rounded-lg w-full h-full ">
                {isAuthenticated ? (
                  <div className="flex flex-col  items-center gap-3">
                    <div className="w-16 h-16 rounded-full grid place-content-center overflow-hidden">
                      <img src={user?.photoURL} />
                    </div>
                    <p>{user?.displayName}</p>
                    <div>
                      <button
                        onClick={signOut}
                        className="bg-blue-500 text-sm py-2 px-6 rounded-xl"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <button
                      className="bg-blue-500 py-2 px-8 rounded-xl"
                      onClick={signIn}
                    >
                      Sign in
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
