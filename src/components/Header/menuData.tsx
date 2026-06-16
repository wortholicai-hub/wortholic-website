import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Hire Developer",
        path: "/hire-developer",
        newTab: false,
      },
      {
        id: 32,
        title: "Hire Team",
        path: "/hire-team",
        newTab: false,
      },
      {
        id: 33,
        title: "Hourly Developer",
        path: "/hourly-developer",
        newTab: false,
      },
      {
        id: 34,
        title: "Project Based",
        path: "/project-based",
        newTab: false,
      },
    ],
  },
  {
    id: 24,
    title: "Achievements",
    path: "/achievements",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
