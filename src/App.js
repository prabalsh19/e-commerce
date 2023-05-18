import { Outlet } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { ProductContextProvider } from "./context/ProductContext";

import "./App.css";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Nav />
        <Outlet />
        <Footer />
      </ProductContextProvider>
    </>
  );
}

export default App;
