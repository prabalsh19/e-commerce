import "./ProductsList.css";
import ProductCard from "./Component/ProductCard";
import { ProductContext } from "../../../context/ProductContext";
import { useContext } from "react";
function ProductsList() {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
