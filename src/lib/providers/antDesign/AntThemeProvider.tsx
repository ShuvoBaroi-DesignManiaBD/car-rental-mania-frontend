"use client";
import { ReactNode } from "react";
import { ConfigProvider, Layout, theme } from "antd";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentTheme } from "@/redux/features/theme/themeSlice";

const AntThemeProvider = ({ children }: { children: ReactNode }) => {
  const currentTheme = useAppSelector(selectCurrentTheme);
  const isDark = currentTheme === "dark";
  const { token } = theme?.useToken();
  return (
    <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
      <div className={`antialiased min-h-screen`}>
          <Layout className="!min-h-screen">{children}</Layout>
      </div>
    </ConfigProvider>
  );
};

export default AntThemeProvider;
