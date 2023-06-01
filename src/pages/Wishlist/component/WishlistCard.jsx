import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { WishlistContext, CartContext } from "../../../context";
import { toast } from "react-toastify";

function WishlistCard({ product }) {
  const { _id, image, productName, rating, price, oldPrice, discount } =
    product;

  const { cartItems, addItemToCart, increaseQuantity } =
    useContext(CartContext);
  const { wishlistItems, addItemToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const productExistInCart = cartItems.some((item) => item._id === _id);
  const productExistInWishlist = wishlistItems.some((item) => item._id === _id);

  const [disableCursor, setDisableCursor] = useState(false);
  const disableCursorHandler = () => {
    setDisableCursor(true);
    setTimeout(() => {
      setDisableCursor(false);
    }, 1000);
  };

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
            onClick={() => addItemToWishlist(product)}
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
      {productExistInCart ? (
        <button
          onClick={() => {
            disableCursorHandler();
            toast.success("Quantity Increased By +1", {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            increaseQuantity(_id);
          }}
          className="add-to-cart-btn"
          id={`${disableCursor ? "disable-cursor" : ""}`}
          disabled={disableCursor}
        >
          Increase Quantity
        </button>
      ) : (
        <button
          className="add-to-cart-btn"
          id={`${disableCursor ? "disable-cursor" : ""}`}
          onClick={() => {
            disableCursorHandler();
            addItemToCart(product);
          }}
          disabled={disableCursor}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
}

export default WishlistCard;
