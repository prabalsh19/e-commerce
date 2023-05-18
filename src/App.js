import { Outlet } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { ProductContextProvider } from "./context/ProductContext";

import "./App.css";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Nav />
          <Outlet />
          <Footer />
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
