import Login from "@/pages/Login";
import Register from "@/pages/register/Register";
import { createBrowserRouter } from "react-router-dom";
import subRoutes from "./sub.routes.tsx";
import { routeGenerator } from "@/utils/routesGenerator.ts";
import Dashboard from "@/pages/dashboards/Dashboard.tsx";
import ProtectedRoute from "@/components/layouts/ProtectedRoute.tsx";
// import OrderSuccess from "@/pages/order/order-success.tsx";
import adminRoutes from "./admin/admin.routes.tsx";
import NotFound from "@/pages/NotFound.tsx";
import TopLoadingProgressBar from "@/components/ui/progressBar/TopLoadingProgressBar.tsx";
// import { lazy } from "react";
import MainLayout from "@/components/layouts/MainLayout.tsx";
import OrderSuccess from "@/pages/order/OrderSuccess.tsx";
import { TPath } from "@/types/path.type.ts";
import userDashboardRoutes from "./user/user.routes.tsx";
// const MainLayout = lazy(() => import("@/components/layouts/MainLayout"));
// const Dashboard = lazy(() => import("@/pages/dashboards/Dashboard"));
const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <TopLoadingProgressBar />
        <MainLayout />
      </>
    ),
    errorElement: <NotFound></NotFound>,
    children: routeGenerator(subRoutes as TPath[]),
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute role={["admin"]}>
        <TopLoadingProgressBar />
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    errorElement: <NotFound></NotFound>,
    children: routeGenerator(adminRoutes),
  },
  {
    path: "user",
    element: (
      <ProtectedRoute role={["user"]}>
        <TopLoadingProgressBar />
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    errorElement: <NotFound></NotFound>,
    children: routeGenerator(userDashboardRoutes),
  },
  {
    path: "login",
    element: (
      <>
        <TopLoadingProgressBar />
        <Login></Login>
      </>
    ),
  },
  {
    path: "register",
    element: (
      <>
        <TopLoadingProgressBar />
        <Register></Register>)
      </>
    ),
  },
  {
    path: "order-success",
    errorElement: <NotFound></NotFound>,
    element: (
      <ProtectedRoute role={["user", "admin"]}>
        <TopLoadingProgressBar />
        <OrderSuccess></OrderSuccess>
      </ProtectedRoute>
    ),
  },
]);

export default Routes;
