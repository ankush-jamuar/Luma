import React, { useState } from "react";
import "./profileUpdate.css";
import "../../index.css";
import assets from "../../assets/assets";
const profileUpdate = () => {

  const [image, setImage] = useState(false)

  return (
    <div className="profile text-white min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-slate-800 to-emerald-800">
      <div className="profile-container bg-emerald-800 flex items-center justify-between min-w-4xl rounded-[10px] shadow-[0_20px_30px_-10px_rgba(0,0,0,0.4)]">
        <form className="flex flex-col gap-8 p-10">
          <h3 className="font-medium text-xl">Profile Details</h3>
          <label htmlFor="avatar" className="flex items-center gap-2.5 text-gray-400 cursor-pointer">
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="avatar" accept=".png, .jpg, .jpeg" hidden />
            <img src={image?URL.createObjectURL(image) : assets.avatar_icon} className="w-[100px] aspect-square rounded-full"/>
            Upload profile image
          </label>
          <input type="text" placeholder="Your name" required className="p-2.5 min-w-[300px] border border-slate-950 focus:outline focus:outline-[#077eff]"/>
          <textarea placeholder="write profile bio" className="p-2.5 min-w-[300px] border border-slate-950 focus:outline focus:outline-[#077eff]"></textarea>
          <button type="submit" className="border-none color-white bg-[#077eff] p-2 text-[16px] cursor-pointer
          ">Save</button>
        </form>
        <img
          src={image? URL.createObjectURL(image) :  assets.logo_icon}
          className="max-w-[250px] my-5 mx-auto rounded-full aspect-square"
        />
      </div>
    </div>
  );
};

export default profileUpdate;
