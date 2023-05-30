import { useContext } from "react";
import "../CartSummary/CartSummary.css";
import { CartContext } from "../../../context/CartContext";
import { NavLink } from "react-router-dom";

function PriceDetail() {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-summary-container">
      <h4>PRICE DETAILS</h4>
      <hr />
      {cartItems.map((item) => (
        <div className="summary-item" key={item.id}>
          <span>
            {item.productName} ({item.qty})
          </span>
          <span>₹{item.price * item.qty}</span>
        </div>
      ))}

      <div className="total-amount">
        <span>Total Amount</span>
        <span>₹{totalPrice}</span>
      </div>
      <NavLink to="/checkout">
        <button className="checkout-btn">PLACE ORDER</button>
      </NavLink>
    </div>
  );
}

export default PriceDetail;
