import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./ProductCard.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import { WishlistContext } from "../../../../context/WishlistContext";

function ProductCard({ product }) {
  const { _id, image, productName, rating, price, oldPrice, discount } =
    product;
  const { cartItems, addItemToCart } = useContext(CartContext);
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
            onClick={() => {
              disableCursorHandler();
              removeFromWishlist(_id);
            }}
            id={`${disableCursor ? "disable-cursor" : ""}`}
            className="add-to-wishlist-btn"
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
          className="add-to-wishlist-btn"
          disabled={disableCursor}
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
      {productExistInCart ? (
        <NavLink to="/cart">
          <button
            className={`add-to-cart-btn `}
            disabled={disableCursor}
            id={`${disableCursor ? "disable-cursor" : ""}`}
          >
            GO TO CART
          </button>
        </NavLink>
      ) : (
        <button
          className={`add-to-cart-btn `}
          id={`${disableCursor ? "disable-cursor" : ""}`}
          disabled={disableCursor}
          onClick={() => {
            disableCursorHandler();
            addItemToCart(product);
          }}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
}

export default ProductCard;
