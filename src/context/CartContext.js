import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const encodedToken = localStorage.getItem("encodedToken");
  useEffect(() => {
    if (encodedToken) {
      (async () => {
        try {
          const response = await axios.get("/api/user/cart", {
            headers: {
              authorization: encodedToken,
            },
          });

          setCartItems(response.data.cart);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [encodedToken]);

  const addItemToCart = async (product) => {
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setCartItems(() => response.data.cart);
  };
  const removeItemFromCart = async (id) => {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    setCartItems(() => response.data.cart);
  };
  const increaseQuantity = async (id) => {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setCartItems(response.data.cart);
  };
  const decreaseQuantity = async (id) => {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setCartItems(response.data.cart);
  };
  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
