import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";

import CartSummary from "./CartSummary/CartSummary";
import CartItemCard from "./CartItemCard/CartItemCard";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-container">
      {cartItems.length < 1 ? (
        <h1>You haven't added anything in the cart yet.</h1>
      ) : (
        <>
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <CartItemCard key={item._id} {...item} />
            ))}
          </div>
          <CartSummary />
        </>
      )}
    </div>
  );
}

export default Cart;
