import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Nav } from "./components";
import { Footer } from "./components";

import {
  ProductContextProvider,
  CartContextProvider,
  WishlistContextProvider,
  AuthContextProvider,
  AddressContextProvider,
} from "./context";

import ScrollToTop from "./utils/ScrollToTop";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <ProductContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <AddressContextProvider>
                <Nav />
                <ToastContainer />
                <Outlet />
                <Footer />
              </AddressContextProvider>
            </WishlistContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
