import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./ProductCard.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { WishlistContext } from "../../../../context/WishlistContext";

function ProductCard({ product }) {
  const { _id, image, productName, rating, price, oldPrice, discount } =
    product;
  const { addItemToCart } = useContext(CartContext);
  const { addItemToWishlist } = useContext(WishlistContext);

  return (
    <div className="product-card">
      <button
        onClick={() => addItemToWishlist(product)}
        className="add-to-wishlist-btn"
      >
        <FavoriteIcon
          sx={{
            color: "grey",

            "&:hover": { color: "red" },
          }}
        />
      </button>
      <NavLink to={`product-details/${_id}`}>
        <img className="product-card__img" src={image} alt="" />
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
      </NavLink>
      <button
        className="add-to-cart-btn"
        onClick={() => addItemToCart(product)}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductCard;
