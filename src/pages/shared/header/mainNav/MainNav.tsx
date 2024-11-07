// MainNav.tsx
import { RxMagnifyingGlass } from "react-icons/rx";
import { BiShoppingBag } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { NavLink } from "react-router-dom";
import MainNavItems from "./MainNavItems";
import UniqueIdGenerator from "@/utils/UniqueIdGenerator";
import { Badge, Button, List, theme } from "antd";
import NavigationItems from "./dropdownItems";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import UserSettingsDropdown from "@/components/ui/dropdown/UserSettingsDropdown";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { selectCurrentTheme, setTheme } from "@/redux/features/theme/themeSlice";

const MainNav = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const {token} = theme.useToken();
  const currentTheme = useAppSelector(selectCurrentTheme);
  const isDark = currentTheme === "dark";
  console.log(isDark, currentTheme);
  
  const handleLogout = () => {
    dispatch(logout());
  };

  // Call the function to get the array of navigation items
  const items = NavigationItems();

  // Modify the items as needed
  const updatedItems = items.map((item: any) => {
    if (item.key === 4) {
      return {
        ...item,
        label: (
          <a rel="logout" onClick={handleLogout}>
            Logout
          </a>
        ),
      };
    }
    return item;
  });

  return (
    <ul
      id="mainNav"
      className="flex justify-between items-center gap-8 textSemiLg self-center !m-0"
      style={{color: token?.colorText}}
    >
      {MainNavItems.map((menu) => (
        <li key={UniqueIdGenerator()} className="hover:text-primary">
          <NavLink to={menu.url} className="font-medium">{menu.label}</NavLink>
        </li>
      ))}
      <Button
            size="small"
            type="default"
            shape="circle"
            icon={!isDark ? <MoonOutlined /> : <SunOutlined />}
            onClick={() => dispatch(setTheme(""))}
          />
      {!currentUser ? (
        <NavLink className="primaryButton text-sm px-4" to="/login">
          Login / Register
        </NavLink>
      ) : (
        <li>
          <UserSettingsDropdown
            items={updatedItems}
            currentUser={currentUser}
          ></UserSettingsDropdown>
        </li>
      )}
    </ul>
  );
};

export default MainNav;
