import { BiLogOut } from "react-icons/bi"; 
import Logo from '@/components/ui/Logo';
import DashboardSidebar from '@/components/ui/sidebars/DashboardSidebar';
import adminSidebarItems from '@/pages/dashboards/admin/sitebarItems';
import { logout, selectCurrentUser } from '@/redux/features/auth/authSlice';
import { selectUserMenuDrawer, setShowUserMenuDrawer } from '@/redux/features/ui/userMenuDrawer/userMenuDrawerSlice';
import { useAppSelector } from '@/redux/hooks';
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { CloseOutlined } from "@ant-design/icons";
import { NavLink } from 'react-router-dom';
import userSidebarItems from "@/pages/dashboards/user/sitebarItems";

const MobileUserDropdown = () => {
  const dispatch = useDispatch();
  const currentUser: Partial<TUser | null> = useAppSelector(selectCurrentUser);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1023);
    const userMenuDrawer: boolean = useAppSelector(selectUserMenuDrawer);

  const handleLogout = () => {
    dispatch(logout());
  };
    return (
        <Drawer
        closable={false}
        placement="right"
        bodyStyle={{ paddingInline: "16px", border: 'none'}} // Remove extra padding inside the drawer
        headerStyle={{ padding: "0.5rem 1rem" }} // Adjust header padding
        contentWrapperStyle={{
          width: "100vw", // Ensure the Drawer covers the full width
          maxWidth: "100vw", // Override internal maxWidth limits
          position: "absolute", // Use absolute positioning to cover the screen
          left: 0, // Ensure alignment to the left
        }}
        width="100vw"
          title={
            <div className="flex justify-between items-center">
          <div className="max-w-content flex gap-2 justify-start items-center text-xl">
            <Logo className="max-h-7" />
          </div>
          <Button
              type="text"
              icon={<CloseOutlined style={{ fontSize: "20px" }} />}
              onClick={()=>dispatch(setShowUserMenuDrawer())}
              style={{ marginRight: 0 }} // Adjust to place it at the edge
            />
            </div>
        }
          className={`${
            isDesktop ? "transition-all duration-300" : "absolute"
          }  w-auto min-w-max z-50`}
        destroyOnClose
        open={userMenuDrawer}
        onClose={() => dispatch(setShowUserMenuDrawer())}
          // trigger={null}
        >
          {/* Collapse Button for Desktop */}
          {isDesktop && (
            <button
              onClick={() => dispatch(setShowUserMenuDrawer())}
              className="p-1.5 absolute -right-6 top-16 z-20"
            >
              {!userMenuDrawer ? (
                <AiOutlineLeft className="text-4xl bg-white p-1.5 shadow-md rounded-full text-primary/40" />
              ) : (
                <AiOutlineRight className="text-4xl shadow-md rounded-full p-1.5 bg-white text-primary/40" />
              )}
            </button>
          )}

          {/* Sidebar Content */}
          <DashboardSidebar
            collapsed={true}
            items={
              (currentUser?.role === "user" && userSidebarItems) ||
              (currentUser?.role === "admin" && adminSidebarItems)
            }
          />
          <NavLink to="/login" onClick={handleLogout} className="w-full flex gap-2 items-center text-base font-medium px-4 py-2 text-white bg-secondary rounded-md"><BiLogOut />Logout</NavLink>
          
        </Drawer>
    );
};

export default MobileUserDropdown;