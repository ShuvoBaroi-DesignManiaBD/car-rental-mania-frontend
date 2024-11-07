import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import About from "@/pages/About";
import Cart from "@/pages/cart/Cart";
import CheckoutPage from "@/pages/checkout/Checkout";
import Home from "@/pages/home/Home.tsx";
import Cars from "@/pages/cars/Cars";
import Booking from "@/pages/booking/Booking";

const subRoutes = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "about",
    element: <About></About>,
  },
  {
    path: "cars",
    element: <Cars></Cars>,
  },
  {
    path: "cars/:carId",
    element: <Booking></Booking>,
  },
  {
    path: "cart",
    element: <Cart></Cart>,
  },
  {
    path: "checkout",
    element: (
      <ProtectedRoute role={["user", "admin"]}>
        <CheckoutPage></CheckoutPage>
      </ProtectedRoute>
    ),
  },
];

export default subRoutes;
