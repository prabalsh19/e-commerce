import "./ProductDetails.css";
import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { AuthContext, CartContext, WishlistContext } from "../../context";
import { getProductService } from "../../services/services";

export function ProductDetails() {
  const { cartItems, addItemToCart } = useContext(CartContext);
  const { wishlistItems, addItemToWishlist } = useContext(WishlistContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);
  const { id } = useParams();

  const productExistInCart = cartItems.some((item) => item._id === id);
  const productExistInWishlist = wishlistItems.some((item) => item._id === id);

  const [disableCursor, setDisableCursor] = useState(false);
  const disableCursorHandler = () => {
    setDisableCursor(true);
    setTimeout(() => {
      setDisableCursor(false);
    }, 1000);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await getProductService(id);
        setSelectedProduct(() => response?.data?.product);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id]);

  return (
    selectedProduct && (
      <div key={selectedProduct?._id} className="product-details-container">
        <img src={selectedProduct?.image} alt={selectedProduct?.alt} />
        <div>
          <h2 className="product-details__heading">
            {selectedProduct?.productName}
          </h2>
          <p className="product-details__rating-star">
            {Array(5)
              .fill(" ")
              .map((arr, index) =>
                index < selectedProduct?.rating ? (
                  <StarIcon key={index} sx={{ color: "rgb(253,161,28)" }} />
                ) : (
                  <StarIcon key={index} sx={{ color: "grey" }} />
                )
              )}
          </p>
          <div className="product-details__price-discount-container">
            <div className="product-details__prices">
              <span className="product-details__current-price">
                ₹{+selectedProduct?.price}
              </span>
              <span className="product-details__old-price">
                ₹{+selectedProduct?.oldPrice}
              </span>
            </div>
            <p className="product-details__discount">
              {selectedProduct?.discount}% OFF
            </p>
          </div>
          <div className="action-buttons">
            {productExistInCart && isLoggedIn ? (
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
            {selectedProduct?.brand}
          </p>
          <p>
            <b>Description: </b>
            {selectedProduct?.description}
          </p>
          <p>
            <b>Type: </b>
            {selectedProduct?.type}
          </p>
          <p>
            <b>Added In Year: </b>
            {selectedProduct?.addedInYear}
          </p>
        </div>
      </div>
    )
  );
}
