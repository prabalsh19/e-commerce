import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Mockbee from "./pages/Mockbee/Mockbee";
import ProductDetails from "./pages/Product Details/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist.jsx";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Auth from "./auth/Auth";
import Logout from "./pages/Logout/Logout";
import Account from "./pages/Account/Account";
import Profile from "./pages/Account/component/Profile";
import Address from "./pages/Account/component/Address";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";

// Call make Server
makeServer();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/mockman", element: <Mockbee /> },
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: (
          <Auth>
            <Cart />
          </Auth>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Auth>
            <Wishlist />
          </Auth>
        ),
      },
      { path: "/wishlist/product-details/:id", element: <ProductDetails /> },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/logout", element: <Logout /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/order-success", element: <OrderSuccess /> },
      {
        path: "/account",
        element: (
          <Auth>
            <Account />
          </Auth>
        ),
        children: [
          { path: "profile", element: <Profile /> },
          { path: "address", element: <Address /> },
        ],
      },
    ],
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
