import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect } from "react";
import { useState } from "react";

import "./ProductsList.css";
function ProductsList() {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      console.log(response?.data?.products);
      setProductsList(response?.data?.products);
    })();
  }, []);
  return (
    <div className="products-container">
      {productsList.map((product) => (
        <div className="product-card">
          <button className="add-to-wishlist-btn">
            <FavoriteIcon sx={{ color: "grey", "&:hover": { color: "red" } }} />
          </button>
          <img src={product.image} alt="" />
          <div className="heading-rating-container">
            <h4 className="product-name">{product.productName}</h4>
            <div className="rating-star">
              <span className="rating-num">{product.rating}</span>
              <StarIcon fontSize="1rem" />
            </div>
          </div>
          <div className="price-discount-container">
            <div className="prices">
              <span className="current-price">₹{+product.price}</span>
              <span className="old-price">₹{+product.oldPrice}</span>
            </div>
            <p className="discount">{product.discount}% OFF</p>
          </div>
          <button className="add-to-cart-btn">ADD TO CART</button>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
