import AdminDashboard from "@/pages/dashboards/admin/AdminDashboard";
import Orders from "@/pages/dashboards/admin/Orders";
import Cars from "@/pages/dashboards/admin/Cars";
import Users from "@/pages/dashboards/admin/Users";
import Profile from "@/pages/dashboards/Profile";

const adminRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Profile",
    path: "profile",
    element: <Profile></Profile>,
  },
  {
    name: "Cars",
    path: "cars",
    element: <Cars></Cars>,
  },
  {
    name: "Orders",
    path: "orders",
    element: <Orders></Orders>,
  },
  {
    name: "Manage Users",
    path: "manage-users",
    element: <Users></Users>,
  },
];

export default adminRoutes;
