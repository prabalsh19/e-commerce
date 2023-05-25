import "./ProductsList.css";
import ProductCard from "./Component/ProductCard";
import { ProductContext } from "../../../context/ProductContext";
import { useContext } from "react";
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
        <p>Filter</p>
      </div>
    </div>
  );
}

export default ProductsList;
