import "./ProductDetails.css";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";

function ProductDetails() {
  const { products } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    setSelectedProduct(() => products.find((product) => product.id === id));
  }, [products, id]);
  console.log(products.find((product) => product.id === id));
  return (
    selectedProduct && (
      <div className="product-details-container">
        <img src={selectedProduct.image} alt={selectedProduct.alt} />
        <div>
          <h2 className="product-details__heading">
            {selectedProduct.productName}
          </h2>
          <p className="product-details__rating-star">
            {Array(5)
              .fill(" ")
              .map((arr, index) =>
                index < selectedProduct.rating ? (
                  <StarIcon sx={{ color: "yellow" }} />
                ) : (
                  <StarIcon sx={{ color: "grey" }} />
                )
              )}
          </p>
          <div className="product-details__price-discount-container">
            <div className="product-details__prices">
              <span className="product-details__current-price">
                ₹{+selectedProduct.price}
              </span>
              <span className="product-details__old-price">
                ₹{+selectedProduct.oldPrice}
              </span>
            </div>
            <p className="product-details__discount">
              {selectedProduct.discount}% OFF
            </p>
          </div>
          <div className="action-buttons">
            <button className="product-details__add-to-cart-btn">
              ADD TO CART
            </button>
            <button className="product-details__add-to-wishlist-btn">
              ADD TO WISHLIST
            </button>
          </div>

          <hr />
          <p>
            <b>Brand: </b>
            {selectedProduct.brand}
          </p>
          <p>
            <b>Description: </b>
            {selectedProduct.description}
          </p>
          <p>
            <b>Type: </b>
            {selectedProduct.type}
          </p>
          <p>
            <b>Added In Year: </b>
            {selectedProduct.addedInYear}
          </p>
        </div>
      </div>
    )
  );
}
// addedInYear
// :
// 2021

export default ProductDetails;
