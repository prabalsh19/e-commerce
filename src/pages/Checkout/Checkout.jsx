import "./Checkout.css";
import CartSummary from "../Cart/CartSummary/CartSummary";
import AddressList from "./component/AddressList/AddressList";
import { useState } from "react";

function Checkout() {
  const [selectedAddress, setSeletedAddress] = useState({});
  const getSelectedAddress = (address) => {
    
    setSeletedAddress(address);
  };
  return (
    <div className="checkout-container">
      <AddressList selectedAddress={getSelectedAddress} />
      <CartSummary selectedAddress={selectedAddress} />
    </div>
  );
}

export default Checkout;
