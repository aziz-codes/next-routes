import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-row">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
