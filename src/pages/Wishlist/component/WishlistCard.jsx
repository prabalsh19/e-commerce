import { useContext } from "react";
import { NavLink } from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { WishlistContext, CartContext } from "../../../context";
import { useDisableCursor } from "../../../hooks/useDisableCursor";
import { toastHandler } from "../../../utils/toast";
import "../Wishlist.css";

function WishlistCard({ product }) {
  const { _id, image, productName, rating, price, oldPrice, discount } =
    product;

  const { cartItems, addItemToCart, increaseQuantity } =
    useContext(CartContext);
  const { wishlistItems, addItemToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const productExistInCart = cartItems.some((item) => item._id === _id);
  const productExistInWishlist = wishlistItems.some((item) => item._id === _id);

  const [disableCursor, disableCursorHandler] = useDisableCursor();

  return (
    <div className="product-card">
      {productExistInWishlist ? (
        <>
          <button
            className="add-to-wishlist-btn"
            id={`${disableCursor ? "disable-cursor" : ""}`}
            onClick={() => {
              disableCursorHandler();
              removeFromWishlist(_id);
            }}
            disabled={disableCursor}
          >
            <FavoriteIcon
              sx={{
                color: "red",
              }}
            />
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            disableCursorHandler();
            addItemToWishlist(product);
          }}
          id={`${disableCursor ? "disable-cursor" : ""}`}
          disabled={disableCursor}
          className="add-to-wishlist-btn"
        >
          <FavoriteIcon
            sx={{
              color: "grey",
            }}
          />
        </button>
      )}
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
      <div className="wishlist-actions">
        <button
          onClick={() => {
            disableCursorHandler();
            removeFromWishlist(_id);
          }}
          className="add-to-cart-btn"
          id={`${disableCursor ? "disable-cursor" : ""}`}
          disabled={disableCursor}
        >
          REMOVE
        </button>
        <button
          className="add-to-cart-btn"
          id={`${disableCursor ? "disable-cursor" : ""}`}
          onClick={() => {
            disableCursorHandler();
            productExistInCart
              ? (() => {
                  increaseQuantity(_id);
                  toastHandler("success", "Quantity Increased by +1");
                })()
              : addItemToCart(product);
            removeFromWishlist(_id);
          }}
          disabled={disableCursor}
        >
          MOVE TO CART
        </button>
      </div>
    </div>
  );
}

export default WishlistCard;
