import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import SubmitButton from "./submit_button";
import fl from "../data.json";
import { useHistory } from "react-router";
const LoginForm = (props) => {
  const history = useHistory();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [result, setRes] = useState([]);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const changePath = () => {};
  const SubmitChecker = (e) => {
    e.preventDefault();

    if (!username) {
      toast.error("Username field should not be Empty");
    } else if (!password) {
      toast.error("Password field should not be Empty");
    }

    if (username && password) {
      let result = fl.members.find(
        (el) => el.username === username && el.password === password
      );
      if (result) {
        setRes(result);
        history.push({ pathname: "/users/" + username, state: result });
        toast.success("Successfully logged in");
      } else {
        toast.error("Unable to login in, user not found");
      }
    }
  };
  return (
    <div className="w-full max-w-sm lg:max-w-lg xl:max-w-xl p-6 m-auto bg-white rounded-md shadow-md">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium text-center text-gray-700">
        Login
      </h1>
      <form onSubmit={SubmitChecker}>
        <label className="block text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-gray-800">
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          className=" bg-gray-100 appearance-non focus:bg-white block w-full px-4 py-2 mt-2 text-gray-700  border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring-4 before:border-red-300"
          onChange={(e) => setusername(e.target.value)}
        />

        <pre>
          <span> </span>
        </pre>

        <label className="block text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-gray-800">
          Password
        </label>
        <div className="w-auto h-auto relative">
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            className=" bg-gray-100 appearance-non focus:bg-white block w-full px-4 py-2 mt-2 text-gray-700  border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring-4 before:border-red-300"
            onChange={(e) => setpassword(e.target.value)}
          />
          {passwordShown ? (
            <AiOutlineEye
              className="absolute top-1/3 right-5 text-gray-500"
              onClick={() => togglePasswordVisiblity()}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute top-1/3 right-5 text-gray-500"
              onClick={() => togglePasswordVisiblity()}
            />
          )}
        </div>

        <pre>
          <span> </span>
        </pre>

        <SubmitButton notify={changePath} />
      </form>
    </div>
  );
};

export default LoginForm;
