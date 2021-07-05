import React from "react";
import { SiTailwindcss, SiReact } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";
import { FaSass } from "react-icons/fa";

const Nav = (props) => {
  return (
    <nav className="bg-white shadow">
      <div className="container px-6 py-4 mx-auto flex justify-between items-center">
        <div>
          <a
            className="text-2xl font-bold text-gray-800e lg:text-3xl hover:text-gray-700"
            href="/"
          >
            Client Visualisation
          </a>
        </div>
        {!props.logged ? (
          <div className="flex justify-center mt-0 -mx-2 gap-2">
            <div className="hover:bg-blue-50 rounded-full">
              <SiTailwindcss className="text-blue-500 m-2" />
            </div>
            <div className="hover:bg-blue-50 rounded-full">
              <SiReact className="text-blue-500 m-2" />
            </div>
            <div className="hover:bg-blue-50 rounded-full">
              <FaSass className="text-blue-500 m-2" />
            </div>
          </div>
        ) : (
          <div className="flex justify-center mt-0 -mx-2 gap-2">
            <a className="hover:bg-blue-50 rounded-full" href="/">
              <BiLogOut className="text-blue-500 m-2" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
