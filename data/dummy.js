import {
  MdSpaceDashboard,
  FaUsers,
  BiMailSend,
  BiBarChartSquare,
  IoSettingsOutline,
} from "react-icons/";
export const links = [
  {
    label: "Dashboard",
    icon: <MdSpaceDashboard />,
    path: "/",
  },
  {
    label: "Users",
    icon: <FaUsers />,
    path: "/users",
  },
  {
    label: "Mails",
    icon: <BiMailSend />,
    path: "/mails",
  },
  {
    label: "Progress",
    icon: <BiBarChartSquare />,
    path: "/progress",
  },
  {
    label: "Settings",
    icon: <IoSettingsOutline />,
    path: "/settings",
  },
];
