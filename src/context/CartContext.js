import { useState } from "react";
import { createContext } from "react";
import {
  addToCartService,
  cartQuantityService,
  deleteFromCartService,
} from "../services/services";
import { toastHandler } from "../utils/toast";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  const updateTotalPrice = (cart) => {
    setTotalPrice(() =>
      cart.reduce((acc, curr) => {
        return +(curr.price * curr.qty) + acc;
      }, 0)
    );
  };
  const updateTotalDiscount = (cart) => {
    setTotalDiscount(() =>
      cart.reduce(
        (acc, cur) =>
          (Number(cur.price) - Number(cur.oldPrice)) * Number(cur.qty) + acc,
        0
      )
    );
  };
  const addItemToCart = async (product) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      if (encodedToken !== null) {
        const response = await addToCartService(encodedToken, product);
        setCartItems(() => response.data.cart);
        updateTotalPrice(response.data.cart);
        updateTotalDiscount(response.data.cart);
        toastHandler("success", "Added To The Cart");
      } else {
        toastHandler("info", "Please Login First");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const removeItemFromCart = async (id) => {
    const encodedToken = localStorage.getItem("encodedToken");

    try {
      const response = await deleteFromCartService(encodedToken, id);
      console.log(response);
      setCartItems(() => response.data.cart);

      updateTotalPrice(response.data.cart);
      updateTotalDiscount(response.data.cart);
    } catch (e) {
      console.error(e);
    }
  };
  const increaseQuantity = async (id) => {
    const encodedToken = localStorage.getItem("encodedToken");

    try {
      const response = await cartQuantityService(encodedToken, id, "increment");
      setCartItems(response.data.cart);
      updateTotalPrice(response.data.cart);
      updateTotalDiscount(response.data.cart);
    } catch (e) {
      console.error(e);
    }
  };
  const decreaseQuantity = async (id) => {
    const encodedToken = localStorage.getItem("encodedToken");

    try {
      const response = await cartQuantityService(encodedToken, id, "decrement");
      setCartItems(response.data.cart);
      updateTotalPrice(response.data.cart);
      updateTotalDiscount(response.data.cart);
    } catch (e) {
      console.error(e);
    }
  };
  const value = {
    cartItems,
    setCartItems,
    addItemToCart,
    totalPrice,
    setTotalPrice,
    updateTotalPrice,
    totalDiscount,
    setTotalDiscount,
    updateTotalDiscount,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
