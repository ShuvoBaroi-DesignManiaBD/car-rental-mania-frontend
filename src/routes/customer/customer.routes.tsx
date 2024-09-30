import UserDashboard from "@/pages/dashboards/user/UserDashboard";
import MyOrder from "@/pages/dashboards/user/MyOrder";
import Profile from "@/pages/dashboards/Profile";

const customerDashboardRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard></UserDashboard>,
  },
  {
    name: "Profile",
    path: "profile",
    element: <Profile></Profile>,
  },
  {
    name: "Orders",
    path: "orders",
    element: <MyOrder></MyOrder>,
  },
];

export default customerDashboardRoutes;
