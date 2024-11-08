import DashboardIcon from "../../../assets/images/aside/BuildingIcon";
import BuildingIcon from "../../../assets/images/aside/DashboardIcon";
import SensorIcon from "../../../assets/images/aside/SensorIcon";
import SettingIcon from "../../../assets/images/aside/SettingIcon";
import PlanIcon from "../../../assets/images/aside/PlanIcon";
import ReportIcon from "../../../assets/images/aside/ReportIcon";

export const pages = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/home/dashboard",
  },
  {
    title: "Buildings",
    link: "/home/building",
    icon: <BuildingIcon />,
  },

  {
    title: "Sensors",
    link: "/home/sensor",
    icon: <SensorIcon />,
  },

  {
    title: "Reporting",
    link: "/home/reporting",
    icon: <ReportIcon />,
  },
  {
    title: "Plans",
    link: "/home/plan",
    icon: <PlanIcon />,
  },

  {
    title: "Settings",
    icon: <SettingIcon />,
    subPages: [
      {
        title: "Profile",
        link: "/home/setting",
      },
      {
        title: "Subscriptions",
        link: "/home/subscription",
      },

      {
        title: "Change Password",
        link: "/home/change-password",
      },
      {
        title: "Configuration",
        link: "/home/configuration",
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
