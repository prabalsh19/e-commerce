import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./ProductCard.css";
import { NavLink } from "react-router-dom";

function ProductCard({
  product: { id, image, productName, rating, price, oldPrice, discount },
}) {
  return (
    <NavLink to={`product-details/${id}`}>
      <div className="product-card">
        <button className="add-to-wishlist-btn">
          <FavoriteIcon sx={{ color: "grey", "&:hover": { color: "red" } }} />
        </button>
        <img src={image} alt="" />
        <div className="heading-rating-container">
          <h4 className="product-name">{productName}</h4>
          <div className="rating-star">
            <span className="rating-num">{rating}</span>
            <StarIcon fontSize="1rem" />
          </div>
        </div>
        <div className="price-discount-container">
          <div className="prices">
            <span className="current-price">₹{+price}</span>
            <span className="old-price">₹{+oldPrice}</span>
          </div>
          <p className="discount">{discount}% OFF</p>
        </div>
        <button className="add-to-cart-btn">ADD TO CART</button>
      </div>
    </NavLink>
  );
}

export default ProductCard;
