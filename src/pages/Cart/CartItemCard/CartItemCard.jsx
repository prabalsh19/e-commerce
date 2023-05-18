import "./CartItemCard.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function CartItemCard({ image, productName, oldPrice, price, discount }) {
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
          <RemoveCircleIcon sx={{ "&:hover": { cursor: "pointer" } }} />

          <span>1</span>
          <AddCircleIcon sx={{ "&:hover": { cursor: "pointer" } }} />
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
