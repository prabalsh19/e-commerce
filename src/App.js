import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home/Home";
import "./App.css";
import Mockbee from "./pages/Mockbee/Mockbee";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/mockman" element={<Mockbee />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
