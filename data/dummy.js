import {
  IoAppsOutline,
  IoMailOpenOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { AiOutlineBarChart } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
export const links = [
  {
    label: "Dashboard",
    icon: <IoAppsOutline />,
    path: "/",
  },
  {
    label: "Users",
    icon: <HiOutlineUserGroup />,
    path: "/users",
  },
  {
    label: "Mails",
    icon: <IoMailOpenOutline />,
    path: "/mails",
  },
  {
    label: "Progress",
    icon: <AiOutlineBarChart />,
    path: "/progress",
  },
  {
    label: "Settings",
    icon: <IoSettingsOutline />,
    path: "/settings",
  },
];
