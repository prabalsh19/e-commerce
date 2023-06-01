import { ProductCategory } from "./component/productCategory/ProductCategory";
import Carousel from "./component/Carousel/Carousel";

export function Home() {
  return (
    <>
      <div className="hero">
        <Carousel />
        <ProductCategory />
      </div>
    </>
  );
}
