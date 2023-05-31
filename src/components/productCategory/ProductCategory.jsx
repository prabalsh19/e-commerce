import { NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import { ProductContext } from "../../context/ProductContext";
import "./ProductCategory.css";
import Loader from "../loader/Loader";
import { getCategories } from "../../services/services";

function ProductCategory() {
  const { dispatch } = useContext(ProductContext);
  const [productCategoryList, setProductCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getCategories();
        setProductCategoryList(response?.data?.categories);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  if (productCategoryList.length === 0) return <Loader />;
  return (
    <>
      <h2 className="product-category-heading">Product Categories</h2>
      <ul className="product-category-container">
        {productCategoryList.map(({ id, image, category }) => (
          <li
            key={id}
            onClick={() =>
              dispatch({
                type: "CATEGORIES",
                payload: { isChecked: true, value: category.toLowerCase() },
              })
            }
            className="product-category-item"
          >
            <NavLink key={id} to="/products">
              <img src={image} alt="" />
              <span>{category.split("_").join(" ")}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductCategory;
