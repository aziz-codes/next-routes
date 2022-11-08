import React, { useState, useEffect } from "react";
import { FcBullish } from "react-icons/fc";
import { links } from "../data/dummy";
import { useRouter } from "next/router";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { GiAerialSignal } from "react-icons/gi";
import { styled } from "@mui/material/styles";
const Sidebar = () => {
  const [checked, setChecked] = React.useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const router = useRouter();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const activeLink =
    "flex flex-row items-center gap-2 px-2 m-1 p-2 rounded-sm bg-sky-500 cursor-pointer font-medium";
  const normalLink =
    "flex flex-row items-center gap-2 px-2 m-1 p-2 rounded-sm hover:bg-sky-500 cursor-pointer font-medium";

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 55,
    height: 30,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 2,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 25,
      height: 25,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener("online", handleStatusChange);

    // Listen to the offline status
    window.addEventListener("offline", handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);
  return (
    <div
      className="flex flex-col h-screen 
    w-60 bg-white shadow-2xl border-x-white divide-y-2"
    >
      <div className="flex items-center mx-4 my-3">
        <FcBullish className="w-10 h-10" />
        <span className="mt-2 font-medium text-xl tracking-tight">Shopp</span>
      </div>
      <div className="links flex flex-col pb-24 mt-7">
        {links.map((item, index) => (
          <div
            className={
              router.pathname === `${item.path}` ? activeLink : normalLink
            }
            key={index}
            onClick={() => router.push(`${item.path}`)}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="footer flex flex-col mx-2 items-center">
        <h4 className="font-bold tracking-normal text-gray-300">Site Info</h4>
        <div className="flex gap-3 mt-3 pb-3">
          <GiAerialSignal
            className={
              isOnline ? "h-6 w-6 text-green-700" : "h-6 w-6 text-red-500"
            }
          />
        </div>
        <div className="flex gap-3">
          <MaterialUISwitch />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
