import { Outlet } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { ProductContextProvider } from "./context/ProductContext";

import "./App.css";
import { CartContextProvider } from "./context/CartContext";
import ScrollToTop from "./utils/ScrollToTop";
import { WishlistContextProvider } from "./context/WishlistContext";

function App() {
  return (
    <>
      <ScrollToTop />
      <ProductContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <Nav />
            <Outlet />

            <Footer />
          </WishlistContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
