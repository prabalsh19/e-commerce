import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";

import CartSummary from "./CartSummary/CartSummary";
import CartItemCard from "./CartItemCard/CartItemCard";

function Cart() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-container">
      <div className="cart-items-container">
        {cartItems.map((item) => (
          <CartItemCard {...item} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
}

export default Cart;
