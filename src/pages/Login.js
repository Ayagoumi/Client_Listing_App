import React, { useState } from "react";
import LoginForm from "../Components/Form";
import Nav from "../Components/Nav";
import { Toaster } from "react-hot-toast";
// import { useHistory } from "react-router";
const LoginPage = () => {
  //   const history = useHistory();
  const [data, setdata] = useState(undefined);
  return (
    <div className="w-full h-screen flex flex-col">
      <header>
        <Nav />
      </header>
      {data ? (
        ""
      ) : (
        <LoginForm
          changedata={setdata}
          className="flex flex-col flex-grow w-full justify-center items-center"
        />
      )}
      <Toaster
        position="top-right"
        containerStyle={{
          top: "5em",
        }}
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default LoginPage;
