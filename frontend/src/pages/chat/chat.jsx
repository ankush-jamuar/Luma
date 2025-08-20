import React from "react";
import LeftSideBar from "../../components/leftSideBar/leftSideBar"
import ChatBox from "../../components/chatBox/chatBox"
const chat = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-800 to-slate-800 text-white grid place-items-center"
    >
      <div className="rounded-xl overflow-hidden w-[95%] h-[95vh] max-w-[1700px]  grid grid-cols-[1fr_3fr] shadow-[0_20px_30px_-10px_rgba(0,0,0,0.4)]
">
        <LeftSideBar/>
        <ChatBox/>
      </div>
    </div>
  );
};

export default chat;
