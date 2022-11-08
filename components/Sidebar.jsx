import React from "react";
import { FcBullish } from "react-icons/fc";
import { links } from "../data/dummy";
import { SiAbbrobotstudio } from "react-icons/si";
const Sidebar = () => {
  return (
    <div
      className="flex flex-col h-screen 
    w-60 bg-white shadow-2xl border-x-white"
    >
      <div className="flex items-center mx-4 my-3">
        <FcBullish className="w-10 h-10" />
        <span className="mt-2 font-medium text-xl tracking-tight">Shopp</span>
      </div>
      <div className="links flex flex-col flex-1">
        {links.map((item, index) => (
          <div className="flex flex-row bg-sky-500" key={index}>
            <SiAbbrobotstudio />
          </div>
        ))}
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default Sidebar;
