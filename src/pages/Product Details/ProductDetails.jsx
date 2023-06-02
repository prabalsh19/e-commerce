import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

import { CartContext, WishlistContext } from "../../context";
import { getProductService } from "../../services/services";
import { useDisableCursor } from "../../hooks/useDisableCursor";
import "./ProductDetails.css";

export function ProductDetails() {
  const { cartItems, addItemToCart } = useContext(CartContext);
  const { wishlistItems, addItemToWishlist } = useContext(WishlistContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();

  const productExistInCart = cartItems.some((item) => item._id === id);
  const productExistInWishlist = wishlistItems.some((item) => item._id === id);

  const [disableCursor, disableCursorHandler] = useDisableCursor();

  const {
    _id,
    image,
    alt,
    rating,
    productName,
    price,
    oldPrice,
    discount,
    brand,
    description,
    type,
    addedInYear,
  } = selectedProduct || {};

  useEffect(() => {
    (async () => {
      try {
        const response = await getProductService(id);
        setSelectedProduct(response?.data?.product);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id]);

  return (
    selectedProduct && (
      <div key={_id} className="product-details-container">
        <img src={image} alt={alt} />
        <div>
          <h2 className="product-details__heading">{productName}</h2>
          <p className="product-details__rating-star">
            {Array(5)
              .fill(" ")
              .map((arr, index) =>
                index < rating ? (
                  <StarIcon key={index} sx={{ color: "rgb(253,161,28)" }} />
                ) : (
                  <StarIcon key={index} sx={{ color: "grey" }} />
                )
              )}
          </p>
          <div className="product-details__price-discount-container">
            <div className="product-details__prices">
              <span className="product-details__current-price">₹{+price}</span>
              <span className="product-details__old-price">₹{+oldPrice}</span>
            </div>
            <p className="product-details__discount">{discount}% OFF</p>
          </div>
          <div className="action-buttons">
            {productExistInCart ? (
              <button className="product-details__add-to-cart-btn">
                <Link to="/cart">GO TO CART</Link>
              </button>
            ) : (
              <button
                className="product-details__add-to-cart-btn"
                id={`${disableCursor ? "disable-cursor" : ""}`}
                disabled={disableCursor}
                onClick={() => {
                  disableCursorHandler();
                  addItemToCart(selectedProduct);
                }}
              >
                ADD TO CART
              </button>
            )}
            {productExistInWishlist ? (
              <button className="product-details__add-to-wishlist-btn">
                <Link to="/wishlist">GO TO WISHLIST</Link>
              </button>
            ) : (
              <button
                className="product-details__add-to-wishlist-btn"
                disabled={disableCursor}
                onClick={() => {
                  disableCursorHandler();
                  addItemToWishlist(selectedProduct);
                }}
                id={`${disableCursor ? "disable-cursor" : ""}`}
              >
                ADD TO WISHLIST
              </button>
            )}
          </div>

          <hr />
          <p>
            <b>Brand: </b>
            {brand}
          </p>
          <p>
            <b>Description: </b>
            {description}
          </p>
          <p>
            <b>Type: </b>
            {type}
          </p>
          <p>
            <b>Added In Year: </b>
            {addedInYear}
          </p>
        </div>
      </div>
    )
  );
}
