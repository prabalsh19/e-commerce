import { NavLink } from "react-router-dom";
import axios from "axios";

import "./ProductCategory.css";
import { useEffect } from "react";
import { useState } from "react";
function ProductCategory() {
  const [productCategoryList, setProductCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/categories");
      setProductCategoryList(response.data.categories);
    })();
  }, []);

  return (
    <ul className="product-category-container">
      {productCategoryList.map(({ id, image, category }) => (
        <NavLink key={id} to="/products">
          <li className="product-category-item">
            <img src={image} alt="" />
            <span>{category}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default ProductCategory;
