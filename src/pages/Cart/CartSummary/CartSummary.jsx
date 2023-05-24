import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartSummary.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function CartSummary({ selectedAddress }) {
  const {
    cartItems,
    totalPrice,
    totalDiscount,
    setCartItems,
    setTotalPrice,
    setTotalDiscount,
  } = useContext(CartContext);
  const navigate = useNavigate();
  const orderHandler = () => {
    if (selectedAddress.name) {
      toast.success("Order Placed", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setCartItems(() => []);
      setTotalPrice(0);
      setTotalDiscount(0);

      navigate("/order-success");
    } else {
      toast.info("Please Select Address", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div className="cart-summary-container">
      <h4>ORDER SUMMARY</h4>
      <hr />

      <div className="summary-item">
        <span>Price: ({cartItems.length} items)</span>
        <span>₹{totalPrice}</span>
      </div>
      <div className="summary-item">
        <span>Discount: </span>
        <span>(-)₹{Math.abs(totalDiscount)}</span>
      </div>
      <div className="summary-item">
        <span>Delivery Charges: </span>
        <span style={{ color: "#388E3C" }}>FREE</span>
      </div>
      <div className="total-amount">
        <span>Total Amount</span>
        <span>₹{totalPrice + totalDiscount}</span>
      </div>
      <button className="checkout-btn" onClick={orderHandler}>
        PLACE ORDER
      </button>
    </div>
  );
}

export default CartSummary;
