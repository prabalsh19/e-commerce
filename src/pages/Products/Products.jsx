import { useState } from "react";
import Filters from "./Filters/Filters";
import ProductsList from "./Products List/ProductsList";
import "./Products.css";

export function Products() {
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  const [showFilterBtn, setShowFilterBtn] = useState(true);
  return (
    <div className="products-page-container">
      <Filters
        showFilterMobile={showFilterMobile}
        setShowFilterMobile={setShowFilterMobile}
        setShowFilterBtn={setShowFilterBtn}
      />
      <ProductsList
        setShowFilterBtn={setShowFilterBtn}
        showFilterBtn={showFilterBtn}
        setShowFilterMobile={setShowFilterMobile}
      />
    </div>
  );
}
