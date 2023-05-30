import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import { ProductContextProvider } from "./context/ProductContext";
import { CartContextProvider } from "./context/CartContext";
import { WishlistContextProvider } from "./context/WishlistContext";
import { AuthContextProvider } from "./context/AuthContext";
import { AddressContextProvider } from "./context/address-context";

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
