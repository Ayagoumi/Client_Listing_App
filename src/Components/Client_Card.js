import React from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import { BsPerson } from "react-icons/bs";

const Clientcard = (props) => {
  const config = genConfig();
  return (
    <div
      className="relative bg-white max-w-xs p-6 rounded-3xl my-4 m-2 sm:m-2 lg:mx-4 xl:m-4 2xl:m-6 shadow-xl hover:bg-blue-50 hover:translate-x-5"
      {...config}
    >
      <div className=" text-white flex items-center absolute rounded-full shadow-xl left-3 -top-3">
        <Avatar className="w-12 h-12 shadow-2xl" />
      </div>
      <div className="mt-8">
        <div className="flex space-x-2 text-black my-2 truncate">
          <BsPerson className="h-4 w-4 text-blue-200" />
          <p className="w-2/3 text-sm font-semibold">{props.firstname}</p>
        </div>
        <div className="flex space-x-2 text-black my-2 truncate">
          <BsPerson className="h-4 w-4 text-blue-200" />
          <p className="w-2/3 text-sm font-semibold">{props.lastname}</p>
        </div>
      </div>
    </div>
  );
};

export default Clientcard;
