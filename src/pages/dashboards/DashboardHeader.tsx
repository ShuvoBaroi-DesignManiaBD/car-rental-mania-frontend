import Logo from "@/components/ui/Logo";
import { Flex } from "antd";
import { Header as AntHeader } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import MainNav from "../shared/header/mainNav/MainNav";
import MobileNav from "../shared/header/mobileNav/MobileNav";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentDevice } from "@/redux/features/ui/deviceType/deviceTypeSlice";
import DesignToken from "@/lib/providers/antDesign/DesignToken";

type collapsed = {
  isCollapsed: boolean;
  setIsSidebarHide?: CallableFunction;
  isSidebarHide?: boolean;
};
const DashboardHeader = ({
  isCollapsed,
  setIsSidebarHide,
  isSidebarHide,
}: collapsed) => {
  // const [screenWidth, setScreenWidth] = useState(window.screen.width)
  console.log(setIsSidebarHide);
  console.log(window.screen.width);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1023);
  const isMobile = useAppSelector(selectCurrentDevice);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1023);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AntHeader
      className="flex items-center justify-between !px-4 sm:!px-[36px] sticky top-0 z-50 border-b"
      style={{ paddingInline: 0, borderColor: DesignToken()?.colorBorder }}
    >
      <Logo className="w-52"></Logo>

      {isMobile ? (
        <MainNav />
      ) : (
        <MobileNav
          setIsSidebarHide={setIsSidebarHide as CallableFunction}
          isSidebarHide={isSidebarHide as boolean}
        />
      )}
    </AntHeader>
  );
};

export default DashboardHeader;
