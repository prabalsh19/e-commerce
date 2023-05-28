import ProductCategory from "../../components/productCategory/ProductCategory";
import Carousel from "./Carousel";

function Home() {
  return (
    <>
      <div className="hero">
        <Carousel />
        <ProductCategory />
      </div>
    </>
  );
}

export default Home;
