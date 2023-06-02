import { ProductCategory } from "./component/ProductCategory/ProductCategory";
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
