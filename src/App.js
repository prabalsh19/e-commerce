import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home/Home";
import "./App.css";
import Mockbee from "./pages/Mockbee/Mockbee";
import Footer from "./components/footer/Footer";
import Products from "./pages/Products/Products";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/mockman" element={<Mockbee />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
