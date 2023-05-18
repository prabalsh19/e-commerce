import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartSummary.css";
function CartSummary() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-summary-container">
      <h4>PRICE DETAILS</h4>
      <hr />

      <div className="summary-item">
        <span>Price: ({cartItems.length} items)</span>
        <span>₹{100}</span>
      </div>
      <div className="summary-item">
        <span>Discount: </span>
        <span>₹{20}</span>
      </div>
      <div className="summary-item">
        <span>Delivery Charges: </span>
        <span style={{ color: "#388E3C" }}>FREE</span>
      </div>
      <div className="total-amount">
        <span>Total Amount</span>
        <span>₹80</span>
      </div>
    </div>
  );
}

export default CartSummary;
