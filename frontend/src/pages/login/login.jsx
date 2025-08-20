import React, { useState } from "react";
// import './login.css'
import assets from "../../assets/assets";
const login = () => {
  const [currState, setCurrState] = useState("Start Chatting");
  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 flex items-center bg-cover bg-no-repeat justify-evenly">
      <img src={assets.logo_big} alt="" className="" />
      <form className="bg-white py-[20px] px-[30px] flex flex-col gap-4 rounded-lg">
        <h1 className="font-medium text-2xl">{currState}</h1>
        {currState === "Start Chatting" ? (
          <input
            type="text"
            placeholder="username"
            className="p-2 border border-[#c9c9c9]  outline-emerald-700 rounded-md"
            required
          />
        ) : null}
        <input
          type="text"
          placeholder="email address"
          className="p-2 border border-[#c9c9c9]  outline-emerald-700 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="password"
          className="p-2 border border-[#c9c9c9] outline-emerald-700 rounded-md"
          required
        />
        <button
          type="submit"
          className="p-[10px] bg-emerald-700 text-white text-[16px] border-none rounded-[4px] cursor-pointer"
        >
          {currState === "Start Chatting" ? "Register" : "Enter"}
        </button>
        <div className="flex gap-1.5 text-lg text-[#808080]">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        <div className="flex flex-col gap-1.5">
          {currState === "Start Chatting" ? (
            <p className="text-lg text-[#5c5c5c]">
              Already part of the chat?{" "}
              <span
                onClick={() => setCurrState("Reconnect")}
                className="font-medium text-emerald-700 cursor-pointer"
              >
                reconnect
              </span>
            </p>
          ) : (
            <p className="text-lg text-[#5c5c5c]">
              Join the conversation{" "}
              <span
                onClick={() => setCurrState("Start Chatting")}
                className="font-medium text-emerald-700 cursor-pointer"
              >
                click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default login;
