import { ProductCategory } from "./component/ProductCategory/ProductCategory";
import Carousel from "./component/Carousel/Carousel";
import "./Home";

export function Home() {
  return (
    <>
      <div className="home">
        <Carousel />
        <ProductCategory />
      </div>
    </>
  );
}
