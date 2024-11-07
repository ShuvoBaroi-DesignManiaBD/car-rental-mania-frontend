// import { useState } from "react";
import { Menu, } from "antd";
// import type { GetProp, MenuProps } from "antd";
import ThemeConfig from "@/configs/ThemeConfig";
import { useLocation } from "react-router-dom";


const DashboardSidebar = ({collapsed, items}:any) => {
  const location = useLocation();

  // Get the current path (e.g., '/admin/profile', '/admin/products')
  const currentPath = location.pathname;

  // Find the menu item that matches the current path
  const activeMenuItem = items.find(item => `/${item.url}` === currentPath);

  // Set the key of the active menu item as the selected key
  const selectedKey = activeMenuItem ? activeMenuItem.key : '1';
  // type MenuTheme = GetProp<MenuProps, "theme">;

  // const [mode, setMode] = useState<"vertical" | "inline">("inline");
  // const [theme, setTheme] = useState<MenuTheme>("light");
  // const [collapsed, setCollapsed] = useState(false);
  // const changeMode = (value: boolean) => {
  //   setMode(value ? "vertical" : "inline");
  // };

  // const changeTheme = (value: boolean) => {
  //   setTheme(value ? "dark" : "light");
  // };

  return (
    <>
      {/* <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br /> */}
      {/* <Button
        type="primary"
        onClick={() => setCollapsed(!collapsed)}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
        <Menu
          style={{
            backgroundColor: "transparent",
            fontSize: "15px",
            fontWeight: "500",
            display: "flex",
            border: "none",
            flexDirection: "column",
            gap: "8px",
            justifyContent: "start",
            alignItems: "start",
            textAlign: "start",
          }}
          inlineCollapsed={!collapsed}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          inlineIndent={16}
          mode={`inline`}
          theme={`light`}
          items={items}
          selectedKeys={selectedKey}
          className="w-full sm:p-8"
        />
    </>
  );
};

export default DashboardSidebar;
