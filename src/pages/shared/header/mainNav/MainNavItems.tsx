import { menuItem } from "@/types/menu.type";
import UniqueIdGenerator from "@/utils/UniqueIdGenerator";

const MainNavItems: menuItem[] = [
  {
    key: UniqueIdGenerator(),
    label: "Home",
    url: "/",
  },
  {
    key: UniqueIdGenerator(),
    label: "About",
    url: "/about",
    children: [
      {
        key: UniqueIdGenerator(),
        label: "Home",
        url: "/",
      },
    ],
  },
  {
    key: UniqueIdGenerator(),
    label: "Cars",
    url: "/cars",
    children: [
      {
        key: UniqueIdGenerator(),
        label: "Shop",
        url: "/shop",
      },
    ],
  },
];

export default MainNavItems;
