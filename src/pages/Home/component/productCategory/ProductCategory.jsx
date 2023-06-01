import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";

import { ProductContext } from "../../../../context";
import "./ProductCategory.css";
import { Loader } from "../../../../components";
import { getCategories } from "../../../../services/services";

export function ProductCategory() {
  const { state, dispatch } = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCategories();
        dispatch({
          type: "SET_CATEGORIES",
          payload: response?.data?.categories,
        });
      } catch (e) {
        console.error(e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state.productCategoryList.length === 0 ? (
    <Loader />
  ) : (
    <>
      <h2 className="product-category-heading">Product Categories</h2>
      <ul className="product-category-container">
        {state.productCategoryList.map(({ _id, image, alt, category }) => (
          <li
            key={_id}
            onClick={() =>
              dispatch({
                type: "CATEGORIES",
                payload: { isChecked: true, value: category.toLowerCase() },
              })
            }
            className="product-category-item"
          >
            <NavLink key={_id} to="/products">
              <img src={image} alt={alt} />
              <span>{category.split("_").join(" ")}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
