import DashboardIcon from "../../../../assets/images/aside/BuildingIcon";
import BuildingIcon from "../../../../assets/images/aside/DashboardIcon";
import SensorIcon from "../../../../assets/images/aside/SensorIcon";
import SettingIcon from "../../../../assets/images/aside/SettingIcon";
import PlanIcon from "../../../../assets/images/aside/PlanIcon";
import ReportIcon from "../../../../assets/images/aside/ReportIcon";

export const pages = [
  {
    title: "Dashboard",
    icon: <BuildingIcon />,

    link: "/admin/dashboard",
  },

  // {
  //   title: "Setting",
  //   link: "/admin/setting",
  //   icon: <SettingIcon />,
  // },

  {
    title: "Settings",
    icon: <SettingIcon />,
    subPages: [
      {
        title: "Profile",
        link: "/admin/profile",
      },
      {
        title: "Change Password",
        link: "/admin/change-password",
      },
    ],
  },
];

//  const pages = [
//    {
//      name: "Dashboard",
//      link: "/home/dashboard",
//      icon: <DashboardIcon activeLink={url === "/home/dashboard"} />,
//    },
//    {
//      name: "Buildings",
//      link: "/home/building",
//      icon: <BuildingIcon activeLink={url === "/home/building"} />,
//    },
//    {
//      name: "Sensors",
//      link: "/home/sensor",
//      icon: <SensorIcon activeLink={url === "/home/sensor"} />,
//    },
//    {
//      name: "Reporting",
//      link: "/home/reporting",
//      icon: <ReportIcon activeLink={url === "/home/reporting"} />,
//    },
//    {
//      name: "Plans",
//      link: "/home/plan",
//      icon: <PlanIcon activeLink={url === "/home/plan"} />,
//    },
//    {
//      name: "Settings",
//      icon: <SettingIcon />,
//      subPages: [
//        { title: "Profile", link: "/home/setting", icon: <SettingIcon /> },
//        {
//          title: "Configuration",
//          link: "/home/configuration",
//          icon: <SettingIcon />,
//        },
//      ],
//    },
//  ];
