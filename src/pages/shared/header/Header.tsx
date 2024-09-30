import Logo from "@/components/ui/Logo";
import { Flex } from "antd";
import { Header as AntHeader } from "antd/es/layout/layout";
import MainNav from "./mainNav/MainNav";
import MobileNav from "./mobileNav/MobileNav";
import { useEffect, useState } from "react";
const Header = () => {
  // const [screenWidth, setScreenWidth] = useState(window.screen.width)
  console.log(window.screen.width);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1023);
  const [isSidebarHide, setIsSidebarHide] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
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
      className="bg-white h-[56px] md:h-[72px] border-b flex items-center justify-between px-[16px] sm:p-0 sticky top-0 z-50"
      style={{}}
    >
      <Flex className="container max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <div className="px-0 md:px-5 lg:px-0 h-16 flex gap-2 justify-start items-center text-xl">
          <Logo className="max-h-[40px] md:max-h-[26px]"></Logo>
        </div>
        {isDesktop ? (
          <MainNav />
        ) : (
          <MobileNav
            isSidebarHide={isSidebarHide}
            setIsSidebarHide={setIsSidebarHide}
            drawerOpen={open}
            setDrawerOpen={setOpen}
          />
        )}
      </Flex>
    </AntHeader>
  );
};

export default Header;
