import { Outlet } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { ProductContextProvider } from "./context/ProductContext";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { CartContextProvider } from "./context/CartContext";
import ScrollToTop from "./utils/ScrollToTop";
import { WishlistContextProvider } from "./context/WishlistContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { AddressContextProvider } from "./context/address-context";

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
