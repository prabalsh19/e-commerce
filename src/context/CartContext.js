import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      addedInYear: 2021,
      alt: "boAt Bassheads 242",
      brand: "boat",
      description:
        "boAt Bassheads 242 in Ear Wired Earphones with Mic(Neon Green)",
      discount: 18,
      id: "1",
      image:
        "https://res.cloudinary.com/dgzehngjw/image/upload/v1651056502/evolt-ecommerce/p1_g792zl.jpg",
      inStock: true,
      oldPrice: "3000.00",
      price: "1800.00",
      productName: "boAt Bassheads 242",
      rating: 3,
      type: "wired",
      _id: "52c5c532-de00-4ccf-a90a-70cef673f783",
    },
  ]);
  const addItemToCart = (product) => {
    console.log(product);
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
