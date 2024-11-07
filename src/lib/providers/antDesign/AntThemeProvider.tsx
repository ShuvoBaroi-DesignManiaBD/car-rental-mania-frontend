"use client";
import { ReactNode } from "react";
import { ConfigProvider, Layout } from "antd";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentTheme } from "@/redux/features/theme/themeSlice";

const AntThemeProvider = ({ children }: { children: ReactNode }) => {
  const currentTheme = useAppSelector(selectCurrentTheme);
  const isDark = currentTheme === "dark";
  return (
    <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
      <div className={`antialiased min-h-screen`}>
          <Layout className="!min-h-screen">{children}</Layout>
      </div>
    </ConfigProvider>
  );
};

export default AntThemeProvider;
