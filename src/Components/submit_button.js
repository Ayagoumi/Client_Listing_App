import React from "react";

const SubmitButton = (props) => {
  return (
    <button
      className="mt-6 w-full px-4 py-2 tracking-wide text-white bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none"
      onClick={props.notify}
    >
      Login
    </button>
  );
};

export default SubmitButton;
