import "./Checkout.css";
import CartSummary from "../Cart/CartSummary/CartSummary";
import AddressList from "./component/AddressList/AddressList";

function Checkout() {
  return (
    <div className="checkout-container">
      <AddressList />
      <CartSummary />
    </div>
  );
}

export default Checkout;
