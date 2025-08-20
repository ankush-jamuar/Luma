import React from "react";
import assets from "../../assets/assets";

const leftSideBar = () => {
  return (
    <div className="ls bg-emerald-800 placeholder:text-emerald-300  border-r border-green-300 text-white h-[95vh]">
      <div className="ls-top p-[20px] ">
        <div className="ls-nav flex justify-between items-center ">
          <img src={assets.logo} className="logo max-w-[140px] " />
          <div className="menu group relative py-[10px] px-0">
            <img
              src={assets.menu_icon}
              className="max-h-[20px] opacity-60 cursor-pointer"
            />
            <div className="sub-menu group-hover:block absolute top-[100%] right-0 w-[130px] p-[20px] rounded-sm bg-slate-800 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)] hidden">
              <p className="cursor-pointer text-[15px]">Edit Profile</p>
              <hr className="border-none h-0.5 bg-emerald-700 my-2"/>
              <p className="cursor-pointer text-[15px]">Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search bg-slate-800 flex items-center gap-[10px] py-[10px] px-[20px] mt-[10px] rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)]">
          <img src={assets.search_icon} className="w-[16px]" />
          <input
            type="text"
            placeholder="Looking for someone?"
            className="bg-transparent border-none outline-none text-white text-[15px]"
          />
        </div>
      </div>
      <div className="ls-list flex flex-col h-[80%] overflow-y-scroll hide-scrollbar">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div
              key={index}
              className="friends group flex items-center gap-[10px] py-[10px] px-[20px] cursor-pointer text-[18px] hover:bg-emerald-700"
            >
              <img
                src={assets.profile_img}
                className="w-[70px] aspect-square rounded-full"
              />
              <div className="flex flex-col">
                <p>Charles Smith</p>
                <span className="text-gray-400 text-[15px] group-hover:text-white">
                  Hello, How are you?
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default leftSideBar;
