import "./CartItemCard.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
function CartItemCard({
  _id,
  image,
  qty,
  productName,
  oldPrice,
  price,
  discount,
}) {
  const { removeItemFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  return (
    <div className="cart-card-container">
      <img className="card-card__image" src={image} alt="" />
      <div className="cart-item-details">
        <h4>{productName}</h4>
        <div className="cart-prices-container">
          <span className="cart-card-container__current-price">₹{price}</span>
          <span className="cart-card-container__old-price">₹{oldPrice}</span>
        </div>
        <span className="cart-item-discount">{discount}% OFF</span>
        <div className="cart-item-quantity">
          <span>Quantity: </span>
          <RemoveCircleIcon
            onClick={() => decreaseQuantity(_id)}
            sx={{ "&:hover": { cursor: "pointer" } }}
          />

          <span>{qty}</span>
          <AddCircleIcon
            onClick={() => increaseQuantity(_id)}
            sx={{ "&:hover": { cursor: "pointer" } }}
          />
        </div>
        <button
          onClick={() => removeItemFromCart(_id)}
          className="remove-cart-item-btn"
        >
          REMOVE FROM CART
        </button>
      </div>
    </div>
  );
}

export default CartItemCard;
