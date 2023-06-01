import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./auth/Auth";
import {
  Home,
  Products,
  Mockbee,
  ProductDetails,
  Cart,
  Wishlist,
  Login,
  SignUp,
  Logout,
  Account,
  Profile,
  Address,
  Checkout,
  OrderSuccess,
} from "./pages";

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
