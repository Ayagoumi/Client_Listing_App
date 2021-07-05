import React, { useState } from "react";
import "./ClientPage.scss";
import Clientcard from "../Components/Client_Card";
import PopUp from "../Components/PopUp";
import Nav from "../Components/Nav";
import { useLocation, useHistory } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const ClientsPage = () => {
  const location = useLocation();
  const history = useHistory();

  if (!location.state) history.push("/");

  const clientdata = location.state?.Data;
  const [selecteduser, setselecteduser] = useState("");
  const [isOpen, setisOpen] = useState(false);

  const OnClickFunc = (client) => {
    setselecteduser(client);
    setisOpen(true);
  };
  return (
    <div className="w-screen h-screen">
      <Nav logged={clientdata} />
      <h1 className="flex lg:px-20 py-3 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Clients:
      </h1>
      <div className="mt-2 h-5/6 overflow-y-scroll hide-scroll-bar p-6 grid grid-flow-row grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9 justify-center items-center oneCard">
        {clientdata?.map((client) => (
          <div onClick={() => OnClickFunc(client)}>
            <Clientcard
              key={client.uid}
              firstname={client.firstname}
              lastname={client.lastname}
            />
          </div>
        ))}
      </div>
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
      {isOpen && <PopUp setisOpen={setisOpen} address={selecteduser.address} />}
    </div>
  );
};

export default ClientsPage;
