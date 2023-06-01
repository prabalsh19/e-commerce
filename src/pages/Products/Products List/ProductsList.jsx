import { useContext } from "react";
import { ProductContext } from "../../../context";
import ProductCard from "./Component/ProductCard";
import "./ProductsList.css";

function ProductsList({
  showFilterBtn,
  setShowFilterMobile,
  setShowFilterBtn,
}) {
  const { filteredArray } = useContext(ProductContext);

  return (
    <div className="products-container">
      {filteredArray?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div
        id={`${showFilterBtn ? "" : "hide"}`}
        onClick={() => {
          setShowFilterMobile(true);
          setShowFilterBtn(false);
        }}
        className="filter-btn-mobile"
      >
        <p>Filters</p>
      </div>
    </div>
  );
}

export default ProductsList;
