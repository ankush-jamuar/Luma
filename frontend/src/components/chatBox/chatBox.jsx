import React from "react";
import assets from "../../assets/assets";
import { useState } from "react";
const chatBox = () => {
  const [currSection, setCurrSection] = useState("chatBox");
  return (
    <>
      {currSection === "chatBox" ? (
        <div className="bg-slate-900 h-[95vh] relative">
          <div
            onClick={() => setCurrSection("profileBox")}
            className="chatUser cursor-pointer py-[10px] px-[15px] flex items-center gap-[10px] border-b border-emerald-700"
          >
            <img
              src={assets.profile_img}
              className="w-[25px] rounded-full first:w-[55px] first:aspect-square"
            />
            <p className="flex-1 font-medium text-[25px] flex items-center gap-[8px]">
              Charles Smith <img className="dot" src={assets.green_dot} />
            </p>
            <img src={assets.help_icon} className="w-[40px]" />
          </div>

          <div className="chat-msg h-[calc(100%-100px)] pb-[50px] overflow-y-scroll hide-scrollbar flex flex-col-reverse">
            <div className="s-msg  flex items-end justify-end gap-[8px] py-0 px-[20px]">
              <p className="msg text-white bg-emerald-700 p-[10px] max-w-[250px] text-[15px] font-light mb-[25px] rounded-[8px_8px_0px_8px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="text-center text-[12px]">
                <img
                  src={assets.profile_img}
                  className="w-[40px] aspect-square rounded-full"
                />
                <p>2:30 PM</p>
              </div>
            </div>

            <div className="s-msg  flex items-end justify-end gap-[8px] py-0 px-[20px]">
              <img
                src={assets.pic1}
                className="msg-img max-w-250px mb-[30px] rounded-xl"
              />
              <div className="text-center text-[12px]">
                <img
                  src={assets.profile_img}
                  className="w-[40px] aspect-square rounded-full"
                />
                <p>2:30 PM</p>
              </div>
            </div>

            <div className="r-msg flex flex-row-reverse items-end justify-end gap-[8px] py-0 px-[20px]">
              <p className="msg text-white bg-slate-700 p-[10px] max-w-[250px] text-[15px] font-light mb-[25px] rounded-[8px_8px_8px_0px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="text-center text-[12px]">
                <img
                  src={assets.profile_img}
                  className="w-[40px] aspect-square rounded-full"
                />
                <p>2:30 PM</p>
              </div>
            </div>
          </div>

          <div className="chat-input flex items-center gap-[20px] py-[10px] px-[15px] bg-slate-600 absolute bottom-0 left-0 right-0">
            <input
              type="text"
              placeholder="Send a message"
              className="flex-1 border-none outline-none"
            />
            <input type="file" accept="image/*,.pdf,.docx" id="image" hidden />
            <label htmlFor="image" className="flex ">
              <img
                src={assets.gallery_icon}
                className="w-[30px] cursor-pointer"
              />
            </label>
            <img src={assets.send_button} className="w-[40px] cursor-pointer" />
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 h-[95vh]  p-6 relative text-white overflow-y-scroll hide-scrollbar">
          <button
            onClick={() => setCurrSection("chatBox")}
            className="absolute cursor-pointer top-4 right-4 text-sm text-gray-400 hover:text-white"
          >
            ✕ Close
          </button>
          <div className="flex flex-col items-center gap-4">
            <img
              src={assets.profile_img}
              className="w-[120px] rounded-full border-4 border-emerald-600 aspect-square"
            />
            <h2 className="text-2xl font-semibold">Charles Smith</h2>
            <p className="text-gray-400">
              Loves to chat. React enthusiast. Works at Luma Inc.
            </p>
          </div>
          <hr className="border-emerald-700 my-[20px] mx-0"/>
          <div className="rs-media py-0 px-[20px] text-xl">
            <p>Media</p>
            <div className="overflow-y-scroll hide-scrollbar grid max-h-113 grid-cols-3 gap-[8px] mt-2">
              <img src={assets.pic1} className="cursor-pointer"/>
              <img src={assets.pic2} className="cursor-pointer"/>
              <img src={assets.pic3} className="cursor-pointer"/>
              <img src={assets.pic4} className="cursor-pointer"/>
              <img src={assets.pic1} className="cursor-pointer"/>
              <img src={assets.pic2} className="cursor-pointer"/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default chatBox;
