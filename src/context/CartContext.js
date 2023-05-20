import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
  const removeItemFromCart = (id) => {
    setCartItems((prev) => prev.filter((product) => product.id !== id));
  };
  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
