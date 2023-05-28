import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartSummary.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/img/Logo.png";

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

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load, check you connection", "error");
      return;
    }

    const options = {
      key: "rzp_test_phVF2Y18ulMtFR",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Commerce",
      description: "Thank you for shopping with us",
      image: Logo,
      handler: function (response) {
        console.log(response);
        // const tempObj = {
        //   products: [...cartData],
        //   amount: totalPrice,
        //   paymentId: response.razorpay_payment_id,
        // };
        // orderDispatch({ type: "ADD_ORDERS", payload: tempObj });
        // ToastHandler("success", "Payment succesfull");
        // navigate("/order");
        // Popper();
        // clearCart(dispatch, cartData, token);
        // dispatch({
        //   type: ACTION_TYPE.SETCART_LIST,
        //   payload: { cartlist: [] },
        // });
      },
      prefill: {
        name: "Prabal Sharma",
        email: "prabal.sharma2003@gmail.com",
        contact: "9833445762",
      },
      theme: {
        color: "#392F5A",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
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
      <button className="checkout-btn" onClick={displayRazorpay}>
        Pay
      </button>
      <button className="checkout-btn" onClick={orderHandler}>
        PLACE ORDER
      </button>
    </div>
  );
}

export default CartSummary;
