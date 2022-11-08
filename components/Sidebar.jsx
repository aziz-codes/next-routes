import React from "react";
import { FcBullish } from "react-icons/fc";
import { links } from "../data/dummy";
import { useRouter } from "next/router";
const Sidebar = () => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col h-screen 
    w-60 bg-white shadow-2xl border-x-white"
    >
      <div className="flex items-center mx-4 my-3">
        <FcBullish className="w-10 h-10" />
        <span className="mt-2 font-medium text-xl tracking-tight">Shopp</span>
      </div>
      <div className="links flex flex-col flex-1 mt-7">
        {links.map((item, index) => (
          <div
            className="flex flex-row bg-white items-center gap-2 px-2 m-1 p-2
            rounded-sm hover:bg-sky-500 cursor-pointer font-medium"
            key={index}
            onClick={() => router.push(`${item.path}`)}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default Sidebar;
